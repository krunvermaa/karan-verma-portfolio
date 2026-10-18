import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  StudioDocument,
  StudioTab,
  ViewportMode,
  EditorSelection,
  ClipboardItem,
  Project,
  Achievement,
  JourneyMilestone,
} from './model/types';
import { createInitialDocument } from './model/defaultDocument';
import { HistoryManager } from './model/historyManager';
import {
  addProject,
  updateProject,
  duplicateProject,
  deleteProject,
  reorderProjects,
  addAchievement,
  updateAchievement,
  duplicateAchievement,
  deleteAchievement,
  reorderAchievements,
  addMilestone,
  updateMilestone,
  duplicateMilestone,
  deleteMilestone,
  reorderMilestones,
  addSkill,
  deleteSkill,
  toggleSection,
  reorderSections,
  copyComponent,
  pasteComponent,
} from './model/documentModel';
import { saveDraft, loadDraft, clearDraft, getLastSavedTimestamp } from './storage/persistence';
import { exportDocumentAsJSON, parseAndValidateJSON } from './storage/exporter';
import { publishPortfolioData } from './storage/publisher';
import { StudioToolbar } from './editor/StudioToolbar';
import { StudioSidebar } from './editor/StudioSidebar';
import { StudioInspector } from './editor/StudioInspector';
import { StudioCanvas } from './editor/StudioCanvas';
import { EditablePortfolioPreview } from './preview/EditablePortfolioPreview';
import { DragDropProvider } from './editor/DragDropContext';
import { CheckCircle2, AlertTriangle, X } from 'lucide-react';

export default function App() {
  // 1. Initialize Document & History
  const [initialDoc] = useState<StudioDocument>(() => {
    const saved = loadDraft();
    return saved || createInitialDocument();
  });

  const historyManagerRef = useRef<HistoryManager>(new HistoryManager(initialDoc));
  const [doc, setDoc] = useState<StudioDocument>(initialDoc);
  const [canUndo, setCanUndo] = useState<boolean>(false);
  const [canRedo, setCanRedo] = useState<boolean>(false);

  // 2. Editor UI State
  const [activeTab, setActiveTab] = useState<StudioTab>('projects');
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [zoom, setZoom] = useState<number>(100);
  const [selection, setSelection] = useState<EditorSelection>({ type: 'none', id: '' });
  const [clipboard, setClipboard] = useState<ClipboardItem | null>(null);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [lastSavedText, setLastSavedText] = useState<string>('Just now');
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const [toast, setToast] = useState<{ title: string; desc: string; type: 'success' | 'error' | 'info' } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const autosaveTimeoutRef = useRef<any>(null);

  const showToast = useCallback((title: string, desc: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ title, desc, type });
    setTimeout(() => {
      setToast((prev) => (prev?.title === title ? null : prev));
    }, 4500);
  }, []);

  // Update history state mirrors
  const syncHistoryState = useCallback(() => {
    setCanUndo(historyManagerRef.current.canUndo);
    setCanRedo(historyManagerRef.current.canRedo);
  }, []);

  // Central Document Mutation Dispatcher
  const mutateDoc = useCallback(
    (updater: (prev: StudioDocument) => StudioDocument, actionLabel?: string) => {
      setDoc((prev) => {
        const next = updater(prev);
        historyManagerRef.current.push(next);
        syncHistoryState();
        setIsDirty(true);

        // Debounced Autosave to localStorage
        if (autosaveTimeoutRef.current) {
          clearTimeout(autosaveTimeoutRef.current);
        }
        autosaveTimeoutRef.current = setTimeout(() => {
          saveDraft(next);
          setIsDirty(false);
          setLastSavedText(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 600);

        return next;
      });
    },
    [syncHistoryState]
  );

  // History Actions
  const handleUndo = useCallback(() => {
    const prev = historyManagerRef.current.undo();
    if (prev) {
      setDoc(prev);
      syncHistoryState();
      saveDraft(prev);
      setIsDirty(false);
    }
  }, [syncHistoryState]);

  const handleRedo = useCallback(() => {
    const next = historyManagerRef.current.redo();
    if (next) {
      setDoc(next);
      syncHistoryState();
      saveDraft(next);
      setIsDirty(false);
    }
  }, [syncHistoryState]);

  // Project Handlers
  const handleAddProject = () => {
    mutateDoc((d) => {
      const { doc: updated, project } = addProject(d);
      setSelection({ type: 'project', id: project.id });
      showToast('Project Added', `Created new project entry: ${project.title}`, 'success');
      return updated;
    });
  };

  const handleUpdateProject = (id: string, updates: Partial<Project>) => {
    mutateDoc((d) => updateProject(d, id, updates));
  };

  const handleDuplicateProject = (id: string) => {
    mutateDoc((d) => {
      const { doc: updated, newProject } = duplicateProject(d, id);
      if (newProject) {
        setSelection({ type: 'project', id: newProject.id });
        showToast('Project Duplicated', `Created copy: ${newProject.title}`, 'success');
      }
      return updated;
    });
  };

  const handleDeleteProject = (id: string) => {
    const target = doc.projects.find((p) => p.id === id);
    if (!target) return;
    mutateDoc((d) => {
      const updated = deleteProject(d, id);
      if (selection.id === id) {
        setSelection({ type: 'none', id: '' });
      }
      showToast('Project Deleted', `Removed ${target.title}`, 'info');
      return updated;
    });
  };

  const handleReorderProjects = (from: number, to: number) => {
    mutateDoc((d) => reorderProjects(d, from, to));
  };

  // Achievement Handlers
  const handleAddAchievement = () => {
    mutateDoc((d) => {
      const { doc: updated, achievement } = addAchievement(d);
      setSelection({ type: 'achievement', id: achievement.id });
      showToast('Award / Grant Added', `Created ${achievement.title}`, 'success');
      return updated;
    });
  };

  const handleUpdateAchievement = (id: string, updates: Partial<Achievement>) => {
    mutateDoc((d) => updateAchievement(d, id, updates));
  };

  const handleDuplicateAchievement = (id: string) => {
    mutateDoc((d) => {
      const { doc: updated, newAchievement } = duplicateAchievement(d, id);
      if (newAchievement) {
        setSelection({ type: 'achievement', id: newAchievement.id });
        showToast('Duplicated Achievement', `Created copy: ${newAchievement.title}`, 'success');
      }
      return updated;
    });
  };

  const handleDeleteAchievement = (id: string) => {
    mutateDoc((d) => {
      const updated = deleteAchievement(d, id);
      if (selection.id === id) {
        setSelection({ type: 'none', id: '' });
      }
      showToast('Deleted Achievement', 'Removed honor / grant', 'info');
      return updated;
    });
  };

  const handleReorderAchievements = (from: number, to: number) => {
    mutateDoc((d) => reorderAchievements(d, from, to));
  };

  // Milestone Handlers
  const handleAddMilestone = () => {
    mutateDoc((d) => {
      const { doc: updated, milestone } = addMilestone(d);
      setSelection({ type: 'journey', id: `journey-${d.journey.length}` });
      showToast('Milestone Added', `Created ${milestone.role}`, 'success');
      return updated;
    });
  };

  const handleUpdateMilestone = (index: number, updates: Partial<JourneyMilestone>) => {
    mutateDoc((d) => updateMilestone(d, index, updates));
  };

  const handleDuplicateMilestone = (index: number) => {
    mutateDoc((d) => {
      const updated = duplicateMilestone(d, index);
      showToast('Milestone Duplicated', 'Duplicated career milestone', 'success');
      return updated;
    });
  };

  const handleDeleteMilestone = (index: number) => {
    mutateDoc((d) => {
      const updated = deleteMilestone(d, index);
      setSelection({ type: 'none', id: '' });
      showToast('Milestone Deleted', 'Removed milestone from journey', 'info');
      return updated;
    });
  };

  const handleReorderMilestones = (from: number, to: number) => {
    mutateDoc((d) => reorderMilestones(d, from, to));
  };

  // Skills Handlers
  const handleAddSkill = (categoryId: string, skillName: string) => {
    mutateDoc((d) =>
      addSkill(d, categoryId, {
        name: skillName,
        level: 'Advanced',
        experience: '2+ years',
        focus: 'Production Systems',
        tags: [skillName],
      })
    );
  };

  const handleDeleteSkill = (categoryId: string, skillName: string) => {
    mutateDoc((d) => deleteSkill(d, categoryId, skillName));
  };

  // Sections Outline Handlers
  const handleToggleSection = (sectionId: string) => {
    mutateDoc((d) => toggleSection(d, sectionId));
  };

  const handleReorderSections = (from: number, to: number) => {
    mutateDoc((d) => reorderSections(d, from, to));
  };

  // Profile Handlers
  const handleUpdateProfile = (field: string, value: string) => {
    mutateDoc((d) => ({
      ...d,
      updatedAt: new Date().toISOString(),
      personalInfo: {
        ...d.personalInfo,
        [field]: value,
      },
    }));
  };

  // Clipboard Operations
  const handleCopy = useCallback(
    (item: any, type: ClipboardItem['type']) => {
      const copied = copyComponent(item, type);
      setClipboard(copied);
      showToast('Copied to Clipboard', `Copied ${type}: ${item.title || item.name || ''}`, 'info');
    },
    [showToast]
  );

  const handlePaste = useCallback(() => {
    if (!clipboard) return;
    mutateDoc((d) => {
      const { doc: updated, newItem } = pasteComponent(d, clipboard);
      if (newItem) {
        setSelection({ type: clipboard.type as any, id: newItem.id || '' });
        showToast('Pasted Element', `Pasted ${clipboard.type} with newly generated ID`, 'success');
      }
      return updated;
    });
  }, [clipboard, mutateDoc, showToast]);

  // Publish Handler
  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const result = await publishPortfolioData(doc);
      if (result.success) {
        showToast(
          'Published to Production!',
          result.method === 'server-sync'
            ? 'Live sync completed to src/data/portfolioData.ts with backup created.'
            : result.message,
          'success'
        );
      }
    } catch (err: any) {
      showToast('Publish Error', err.message || 'Failed to publish portfolio', 'error');
    } finally {
      setIsPublishing(false);
    }
  };

  // Backup Export & Import Handlers
  const handleExportBackup = () => {
    exportDocumentAsJSON(doc);
    showToast('Snapshot Exported', 'Saved complete JSON backup to your downloads folder.', 'success');
  };

  const handleTriggerImport = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = parseAndValidateJSON(content);
      if (res.success && res.doc) {
        setDoc(res.doc);
        historyManagerRef.current.reset(res.doc);
        syncHistoryState();
        saveDraft(res.doc);
        showToast('Snapshot Restored', 'Successfully loaded portfolio snapshot.', 'success');
      } else {
        showToast('Import Failed', res.errors?.join(', ') || 'Invalid JSON backup', 'error');
      }
    };
    reader.readAsText(file);
    // Reset input
    e.target.value = '';
  };

  const handleResetDefaults = () => {
    clearDraft();
    const fresh = createInitialDocument();
    setDoc(fresh);
    historyManagerRef.current.reset(fresh);
    syncHistoryState();
    setSelection({ type: 'none', id: '' });
    showToast('Reset Complete', 'Reverted back to original portfolio data.', 'info');
  };

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInputFocused =
        ['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName) ||
        (e.target as HTMLElement)?.isContentEditable;

      const isCmdOrCtrl = e.metaKey || e.ctrlKey;

      // Undo: Cmd+Z
      if (isCmdOrCtrl && e.key.toLowerCase() === 'z' && !e.shiftKey) {
        if (!isInputFocused) {
          e.preventDefault();
          handleUndo();
        }
      }

      // Redo: Cmd+Shift+Z or Cmd+Y
      if (
        (isCmdOrCtrl && e.key.toLowerCase() === 'z' && e.shiftKey) ||
        (isCmdOrCtrl && e.key.toLowerCase() === 'y')
      ) {
        if (!isInputFocused) {
          e.preventDefault();
          handleRedo();
        }
      }

      // Duplicate: Cmd+D
      if (isCmdOrCtrl && e.key.toLowerCase() === 'd') {
        if (!isInputFocused && selection.type !== 'none') {
          e.preventDefault();
          if (selection.type === 'project') handleDuplicateProject(selection.id);
          if (selection.type === 'achievement') handleDuplicateAchievement(selection.id);
        }
      }

      // Copy: Cmd+C (when element selected and not typing in text)
      if (isCmdOrCtrl && e.key.toLowerCase() === 'c' && !isInputFocused) {
        if (selection.type === 'project') {
          const item = doc.projects.find((p) => p.id === selection.id);
          if (item) {
            e.preventDefault();
            handleCopy(item, 'project');
          }
        } else if (selection.type === 'achievement') {
          const item = doc.achievements.find((a) => a.id === selection.id);
          if (item) {
            e.preventDefault();
            handleCopy(item, 'achievement');
          }
        }
      }

      // Paste: Cmd+V (when not typing in text)
      if (isCmdOrCtrl && e.key.toLowerCase() === 'v' && !isInputFocused) {
        if (clipboard) {
          e.preventDefault();
          handlePaste();
        }
      }

      // Escape: Deselect
      if (e.key === 'Escape') {
        setSelection({ type: 'none', id: '' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo, handleRedo, selection, doc, clipboard, handleCopy, handlePaste]);

  return (
    <DragDropProvider>
      <div className="flex flex-col h-screen w-screen bg-[#090D16] text-white overflow-hidden font-sans select-none">
        {/* Hidden File Picker for Backup Import */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Top Studio Toolbar */}
        <StudioToolbar
          viewport={viewport}
          onSetViewport={setViewport}
          canUndo={canUndo}
          canRedo={canRedo}
          onUndo={handleUndo}
          onRedo={handleRedo}
          zoom={zoom}
          onSetZoom={setZoom}
          isDirty={isDirty}
          lastSavedText={lastSavedText}
          onSaveDraft={() => {
            saveDraft(doc);
            setIsDirty(false);
            setLastSavedText('Just now');
            showToast('Draft Saved', 'Studio draft saved to local storage', 'success');
          }}
          onPublish={handlePublish}
          onExportBackup={handleExportBackup}
          onImportBackup={handleTriggerImport}
          isPublishing={isPublishing}
        />

        {/* 3-Column Layout: Sidebar (Left) | Canvas (Center) | Inspector (Right) */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar */}
          <StudioSidebar
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            document={doc}
            selection={selection}
            onSelectElement={setSelection}
            onAddProject={handleAddProject}
            onDuplicateProject={handleDuplicateProject}
            onDeleteProject={handleDeleteProject}
            onReorderProjects={handleReorderProjects}
            onAddAchievement={handleAddAchievement}
            onDuplicateAchievement={handleDuplicateAchievement}
            onDeleteAchievement={handleDeleteAchievement}
            onReorderAchievements={handleReorderAchievements}
            onAddMilestone={handleAddMilestone}
            onDuplicateMilestone={handleDuplicateMilestone}
            onDeleteMilestone={handleDeleteMilestone}
            onReorderMilestones={handleReorderMilestones}
            onAddSkill={handleAddSkill}
            onDeleteSkill={handleDeleteSkill}
            onToggleSection={handleToggleSection}
            onReorderSections={handleReorderSections}
            onUpdateProfile={handleUpdateProfile}
            onExportBackup={handleExportBackup}
            onImportBackup={handleTriggerImport}
            onResetDefaults={handleResetDefaults}
          />

          {/* Central Workspace Canvas */}
          <StudioCanvas
            viewport={viewport}
            zoom={zoom}
            selection={selection}
            onDeselect={() => setSelection({ type: 'none', id: '' })}
          >
            <EditablePortfolioPreview
              document={doc}
              selection={selection}
              onSelectElement={setSelection}
              onUpdateProject={handleUpdateProject}
              onDuplicateProject={handleDuplicateProject}
              onDeleteProject={handleDeleteProject}
              onReorderProjects={handleReorderProjects}
              onUpdateAchievement={handleUpdateAchievement}
              onDuplicateAchievement={handleDuplicateAchievement}
              onDeleteAchievement={handleDeleteAchievement}
              onReorderAchievements={handleReorderAchievements}
              onUpdateMilestone={handleUpdateMilestone}
              onDuplicateMilestone={handleDuplicateMilestone}
              onDeleteMilestone={handleDeleteMilestone}
              onReorderMilestones={handleReorderMilestones}
              onDeleteSkill={handleDeleteSkill}
              onUpdateProfile={handleUpdateProfile}
              onCopyComponent={handleCopy}
            />
          </StudioCanvas>

          {/* Right Inspector Panel */}
          <StudioInspector
            document={doc}
            selection={selection}
            onClose={() => setSelection({ type: 'none', id: '' })}
            onUpdateProject={handleUpdateProject}
            onDuplicateProject={handleDuplicateProject}
            onDeleteProject={handleDeleteProject}
            onUpdateAchievement={handleUpdateAchievement}
            onDuplicateAchievement={handleDuplicateAchievement}
            onDeleteAchievement={handleDeleteAchievement}
            onUpdateMilestone={handleUpdateMilestone}
            onDuplicateMilestone={handleDuplicateMilestone}
            onDeleteMilestone={handleDeleteMilestone}
            onToggleSection={handleToggleSection}
            onUpdateProfile={handleUpdateProfile}
          />
        </div>

        {/* Toast Notification Banner */}
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 flex items-start gap-3 bg-[#131B2E] border border-[#222E46] text-white p-3.5 rounded-2xl shadow-2xl max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-200">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
            {toast.type === 'error' && <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />}
            {toast.type === 'info' && <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />}
            <div className="flex-1 min-w-0">
              <h5 className="text-xs font-bold text-white">{toast.title}</h5>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{toast.desc}</p>
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="p-1 rounded text-slate-500 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </DragDropProvider>
  );
}
