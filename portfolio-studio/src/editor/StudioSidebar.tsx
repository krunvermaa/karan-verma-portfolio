import React, { useState } from 'react';
import {
  StudioDocument,
  StudioTab,
  EditorSelection,
  Project,
  Achievement,
  JourneyMilestone,
} from '../model/types';
import {
  Layers,
  FolderGit2,
  Trophy,
  Compass,
  Cpu,
  User,
  Settings,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  Copy,
  ChevronUp,
  ChevronDown,
  GripVertical,
  Award,
  Sparkles,
  Download,
  Upload,
  RotateCcw,
  Tag,
} from 'lucide-react';
import { useDragDrop } from './DragDropContext';

interface StudioSidebarProps {
  activeTab: StudioTab;
  onSelectTab: (tab: StudioTab) => void;
  document: StudioDocument;
  selection: EditorSelection;
  onSelectElement: (sel: EditorSelection) => void;
  onAddProject: () => void;
  onDuplicateProject: (id: string) => void;
  onDeleteProject: (id: string) => void;
  onReorderProjects: (from: number, to: number) => void;
  onAddAchievement: () => void;
  onDuplicateAchievement: (id: string) => void;
  onDeleteAchievement: (id: string) => void;
  onReorderAchievements: (from: number, to: number) => void;
  onAddMilestone: () => void;
  onDuplicateMilestone: (index: number) => void;
  onDeleteMilestone: (index: number) => void;
  onReorderMilestones: (from: number, to: number) => void;
  onAddSkill: (categoryId: string, skillName: string) => void;
  onDeleteSkill: (categoryId: string, skillName: string) => void;
  onToggleSection: (id: string) => void;
  onReorderSections: (from: number, to: number) => void;
  onUpdateProfile: (field: string, value: string) => void;
  onExportBackup: () => void;
  onImportBackup: () => void;
  onResetDefaults: () => void;
}

export const StudioSidebar: React.FC<StudioSidebarProps> = ({
  activeTab,
  onSelectTab,
  document,
  selection,
  onSelectElement,
  onAddProject,
  onDuplicateProject,
  onDeleteProject,
  onReorderProjects,
  onAddAchievement,
  onDuplicateAchievement,
  onDeleteAchievement,
  onReorderAchievements,
  onAddMilestone,
  onDuplicateMilestone,
  onDeleteMilestone,
  onReorderMilestones,
  onAddSkill,
  onDeleteSkill,
  onToggleSection,
  onReorderSections,
  onUpdateProfile,
  onExportBackup,
  onImportBackup,
  onResetDefaults,
}) => {
  const { startDrag, endDrag } = useDragDrop();
  const [newSkillText, setNewSkillText] = useState<{ [catId: string]: string }>({});

  const navTabs: { id: StudioTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'tree', label: 'Outline', icon: Layers },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'achievements', label: 'Grants & Honors', icon: Trophy },
    { id: 'journey', label: 'Journey', icon: Compass },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleAddSkillSubmit = (catId: string) => {
    const text = (newSkillText[catId] || '').trim();
    if (!text) return;
    onAddSkill(catId, text);
    setNewSkillText((prev) => ({ ...prev, [catId]: '' }));
  };

  return (
    <aside className="w-80 bg-[#0D121F] border-r border-[#1E2638] flex flex-col h-[calc(100vh-3.5rem)] select-none">
      {/* Top Tab Bar Navigation */}
      <div className="flex border-b border-[#1E2638] bg-[#090D16] p-1.5 gap-1 overflow-x-auto scrollbar-none">
        {navTabs.map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelectTab(t.id)}
              title={t.label}
              className={`flex-1 py-1.5 px-2 rounded-lg flex flex-col items-center justify-center gap-1 transition-all text-[11px] font-medium whitespace-nowrap ${
                isActive
                  ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30 font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="truncate">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Body Content */}
      <div className="flex-1 overflow-y-auto p-3 text-slate-300 space-y-4">
        {/* ======================================================== */}
        {/* 1. SECTIONS OUTLINE TAB */}
        {/* ======================================================== */}
        {activeTab === 'tree' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Page Structure ({document.sections.length} Sections)
              </h3>
              <span className="text-[10px] text-slate-500 font-mono">Drag or use arrows</span>
            </div>

            <div className="space-y-1.5">
              {document.sections.map((section, idx) => {
                const isSelected = selection.type === 'section' && selection.id === section.id;
                return (
                  <div
                    key={section.id}
                    onClick={() => onSelectElement({ type: 'section', id: section.id })}
                    draggable
                    onDragStart={() => startDrag({ type: 'section', id: section.id, index: idx })}
                    onDragEnd={endDrag}
                    className={`flex items-center justify-between p-2 rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500/10 border-sky-500/40 text-sky-200 shadow-sm'
                        : section.enabled
                        ? 'bg-[#131B2E] border-[#222E46] text-slate-200 hover:border-slate-600'
                        : 'bg-[#0E1524] border-[#1C2538] text-slate-500 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <GripVertical className="w-3.5 h-3.5 text-slate-500 cursor-grab shrink-0" />
                      <span className="text-xs font-medium truncate">{section.name}</span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={() => onToggleSection(section.id)}
                        title={section.enabled ? 'Hide Section' : 'Show Section'}
                        className="p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-700/50"
                      >
                        {section.enabled ? (
                          <Eye className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <EyeOff className="w-3.5 h-3.5 text-slate-600" />
                        )}
                      </button>

                      <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => onReorderSections(idx, idx - 1)}
                        title="Move Up"
                        className="p-1 rounded text-slate-400 hover:text-slate-100 disabled:opacity-20 disabled:hover:bg-transparent"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        disabled={idx === document.sections.length - 1}
                        onClick={() => onReorderSections(idx, idx + 1)}
                        title="Move Down"
                        className="p-1 rounded text-slate-400 hover:text-slate-100 disabled:opacity-20 disabled:hover:bg-transparent"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 2. PROJECTS TAB */}
        {/* ======================================================== */}
        {activeTab === 'projects' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Engineered Projects ({document.projects.length})
                </h3>
                <p className="text-[11px] text-slate-500">Select to inspect, edit, or reorder</p>
              </div>
              <button
                type="button"
                onClick={onAddProject}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>

            <div className="space-y-2">
              {document.projects.map((proj, idx) => {
                const isSelected = selection.type === 'project' && selection.id === proj.id;
                return (
                  <div
                    key={proj.id}
                    onClick={() => onSelectElement({ type: 'project', id: proj.id })}
                    draggable
                    onDragStart={() => startDrag({ type: 'project', id: proj.id, index: idx })}
                    onDragEnd={endDrag}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500/15 border-sky-500/50 shadow-md ring-1 ring-sky-500/40'
                        : 'bg-[#131B2E] border-[#222E46] hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: proj.accentColor || '#38bdf8' }}
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-slate-400 font-semibold">{proj.number}</span>
                            <h4 className="text-xs font-bold text-white truncate">{proj.title}</h4>
                          </div>
                          <p className="text-[10px] text-slate-400 truncate mt-0.5">{proj.category}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => onDuplicateProject(proj.id)}
                          title="Duplicate Project"
                          className="p-1 rounded text-slate-400 hover:text-sky-300 hover:bg-slate-800"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => onDeleteProject(proj.id)}
                          title="Delete Project"
                          className="p-1 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => onReorderProjects(idx, idx - 1)}
                          title="Move Up"
                          className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-20"
                        >
                          <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === document.projects.length - 1}
                          onClick={() => onReorderProjects(idx, idx + 1)}
                          title="Move Down"
                          className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-20"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-1">
                      {proj.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {proj.technologies.length > 3 && (
                        <span className="text-[9px] text-slate-500">+{proj.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 3. ACHIEVEMENTS & GRANTS TAB */}
        {/* ======================================================== */}
        {activeTab === 'achievements' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Grants & Honors ({document.achievements.length})
                </h3>
                <p className="text-[11px] text-slate-500">MSME Hackathon 5.0, Awards, Academic</p>
              </div>
              <button
                type="button"
                onClick={onAddAchievement}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>

            <div className="space-y-2">
              {document.achievements.map((ach, idx) => {
                const isSelected = selection.type === 'achievement' && selection.id === ach.id;
                return (
                  <div
                    key={ach.id}
                    onClick={() => onSelectElement({ type: 'achievement', id: ach.id })}
                    draggable
                    onDragStart={() => startDrag({ type: 'achievement', id: ach.id, index: idx })}
                    onDragEnd={endDrag}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500/50 shadow-md ring-1 ring-amber-500/40'
                        : 'bg-[#131B2E] border-[#222E46] hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <h4 className="text-xs font-bold text-white truncate">{ach.title}</h4>
                        </div>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">{ach.organization}</p>
                      </div>

                      <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => onDuplicateAchievement(ach.id)}
                          title="Duplicate"
                          className="p-1 rounded text-slate-400 hover:text-amber-300 hover:bg-slate-800"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => onDeleteAchievement(ach.id)}
                          title="Delete"
                          className="p-1 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => onReorderAchievements(idx, idx - 1)}
                          title="Move Up"
                          className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-20"
                        >
                          <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === document.achievements.length - 1}
                          onClick={() => onReorderAchievements(idx, idx + 1)}
                          title="Move Down"
                          className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-20"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {ach.category}
                      </span>
                      {ach.grantAmount && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {ach.grantAmount}
                        </span>
                      )}
                      <span className="text-[10px] text-slate-400 ml-auto font-mono">{ach.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 4. JOURNEY MILESTONES TAB */}
        {/* ======================================================== */}
        {activeTab === 'journey' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Career Milestones ({document.journey.length})
                </h3>
                <p className="text-[11px] text-slate-500">Education, Leadership, Hackathons</p>
              </div>
              <button
                type="button"
                onClick={onAddMilestone}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>

            <div className="space-y-2">
              {document.journey.map((m, idx) => {
                const milestoneId = `journey-${idx}`;
                const isSelected = selection.type === 'journey' && selection.id === milestoneId;
                return (
                  <div
                    key={milestoneId}
                    onClick={() => onSelectElement({ type: 'journey', id: milestoneId })}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-500/15 border-indigo-500/50 shadow-md ring-1 ring-indigo-500/40'
                        : 'bg-[#131B2E] border-[#222E46] hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-indigo-400 font-bold px-1.5 py-0.5 rounded bg-indigo-500/10">
                            {m.year}
                          </span>
                          <h4 className="text-xs font-bold text-white truncate">{m.role}</h4>
                        </div>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">{m.organization}</p>
                      </div>

                      <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => onDuplicateMilestone(idx)}
                          title="Duplicate"
                          className="p-1 rounded text-slate-400 hover:text-indigo-300 hover:bg-slate-800"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => onDeleteMilestone(idx)}
                          title="Delete"
                          className="p-1 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => onReorderMilestones(idx, idx - 1)}
                          title="Move Up"
                          className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-20"
                        >
                          <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === document.journey.length - 1}
                          onClick={() => onReorderMilestones(idx, idx + 1)}
                          title="Move Down"
                          className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-20"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="mt-1.5 text-[11px] text-slate-300 line-clamp-2 leading-relaxed">{m.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 5. SKILLS MATRIX TAB */}
        {/* ======================================================== */}
        {activeTab === 'skills' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Technical Stack Categories ({document.skills.length})
              </h3>
              <p className="text-[11px] text-slate-500">Add or remove skills in each category</p>
            </div>

            <div className="space-y-3">
              {document.skills.map((cat) => {
                const isSelected = selection.type === 'skill' && selection.id === cat.id;
                return (
                  <div
                    key={cat.id}
                    onClick={() => onSelectElement({ type: 'skill', id: cat.id })}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500/10 border-sky-500/40'
                        : 'bg-[#131B2E] border-[#222E46] hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Tag className="w-3 h-3 text-sky-400" />
                        <span>{cat.name}</span>
                      </h4>
                      <span className="text-[10px] text-slate-400 font-mono">{cat.skills.length} skills</span>
                    </div>

                    {/* Skill Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {cat.skills.map((sk) => (
                        <span
                          key={sk.name}
                          className="group inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700/60"
                        >
                          <span>{sk.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onDeleteSkill(cat.id, sk.name);
                            }}
                            title={`Remove ${sk.name}`}
                            className="text-slate-500 hover:text-red-400 transition-colors"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>

                    {/* Add Skill to this Category */}
                    <div
                      className="flex items-center gap-1.5 mt-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="text"
                        placeholder="Add skill..."
                        value={newSkillText[cat.id] || ''}
                        onChange={(e) => setNewSkillText({ ...newSkillText, [cat.id]: e.target.value })}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddSkillSubmit(cat.id);
                        }}
                        className="flex-1 bg-[#090D16] border border-[#222E46] rounded-md px-2 py-1 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-sky-500"
                      />
                      <button
                        type="button"
                        onClick={() => handleAddSkillSubmit(cat.id)}
                        className="px-2 py-1 bg-slate-800 hover:bg-sky-600 text-slate-200 hover:text-white rounded-md text-xs font-medium transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 6. PROFILE & BIO TAB */}
        {/* ======================================================== */}
        {activeTab === 'profile' && (
          <div className="space-y-3">
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Profile Information</h3>
              <p className="text-[11px] text-slate-500">Live contact details, bio, and hero branding</p>
            </div>

            <div className="space-y-2.5">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={document.personalInfo.name}
                  onChange={(e) => onUpdateProfile('name', e.target.value)}
                  className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Headline / Title</label>
                <input
                  type="text"
                  value={document.personalInfo.title}
                  onChange={(e) => onUpdateProfile('title', e.target.value)}
                  className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Hero Tagline</label>
                <input
                  type="text"
                  value={document.personalInfo.tagline}
                  onChange={(e) => onUpdateProfile('tagline', e.target.value)}
                  className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Bio</label>
                <textarea
                  rows={3}
                  value={document.personalInfo.bio}
                  onChange={(e) => onUpdateProfile('bio', e.target.value)}
                  className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Email</label>
                  <input
                    type="email"
                    value={document.personalInfo.email}
                    onChange={(e) => onUpdateProfile('email', e.target.value)}
                    className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Phone</label>
                  <input
                    type="text"
                    value={document.personalInfo.phone}
                    onChange={(e) => onUpdateProfile('phone', e.target.value)}
                    className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Location</label>
                <input
                  type="text"
                  value={document.personalInfo.location}
                  onChange={(e) => onUpdateProfile('location', e.target.value)}
                  className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">GitHub URL</label>
                <input
                  type="url"
                  value={document.personalInfo.github}
                  onChange={(e) => onUpdateProfile('github', e.target.value)}
                  className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">LinkedIn URL</label>
                <input
                  type="url"
                  value={document.personalInfo.linkedin}
                  onChange={(e) => onUpdateProfile('linkedin', e.target.value)}
                  className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 7. SETTINGS & EXPORT TAB */}
        {/* ======================================================== */}
        {activeTab === 'settings' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Studio Configuration</h3>
              <p className="text-[11px] text-slate-500">Backups, snapshots, and maintenance</p>
            </div>

            <div className="p-3 bg-[#131B2E] border border-[#222E46] rounded-xl space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Schema Version</span>
                <span className="text-slate-200 font-mono font-semibold">{document.version}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Last Modified</span>
                <span className="text-slate-200 font-mono text-[10px]">
                  {new Date(document.updatedAt).toLocaleTimeString()}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Total Projects</span>
                <span className="text-slate-200 font-semibold">{document.projects.length}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Total Grants & Honors</span>
                <span className="text-slate-200 font-semibold">{document.achievements.length}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={onExportBackup}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium border border-slate-700/80 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON Snapshot</span>
              </button>

              <button
                type="button"
                onClick={onImportBackup}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium border border-slate-700/80 transition-colors"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Import JSON Snapshot</span>
              </button>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Reset all changes back to initial portfolio state?')) {
                      onResetDefaults();
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-red-950/40 hover:bg-red-900/50 text-red-300 rounded-lg text-xs font-medium border border-red-800/40 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Portfolio Defaults</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
