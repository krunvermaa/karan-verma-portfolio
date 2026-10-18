import React from 'react';
import {
  StudioDocument,
  EditorSelection,
  Project,
  Achievement,
  JourneyMilestone,
} from '../model/types';
import {
  Sliders,
  X,
  Trash2,
  Copy,
  ExternalLink,
  Tag,
  Palette,
  Eye,
  EyeOff,
  Keyboard,
  Info,
} from 'lucide-react';

interface StudioInspectorProps {
  document: StudioDocument;
  selection: EditorSelection;
  onClose: () => void;
  onUpdateProject: (id: string, updates: Partial<Project>) => void;
  onDuplicateProject: (id: string) => void;
  onDeleteProject: (id: string) => void;
  onUpdateAchievement: (id: string, updates: Partial<Achievement>) => void;
  onDuplicateAchievement: (id: string) => void;
  onDeleteAchievement: (id: string) => void;
  onUpdateMilestone: (index: number, updates: Partial<JourneyMilestone>) => void;
  onDuplicateMilestone: (index: number) => void;
  onDeleteMilestone: (index: number) => void;
  onToggleSection: (id: string) => void;
  onUpdateProfile: (field: string, value: string) => void;
}

const PRESET_ACCENTS = [
  '#0284C7', // Sky
  '#6366F1', // Indigo
  '#8B5CF6', // Purple
  '#EC4899', // Pink
  '#10B981', // Emerald
  '#F59E0B', // Amber
  '#EF4444', // Red
  '#14B8A6', // Teal
];

export const StudioInspector: React.FC<StudioInspectorProps> = ({
  document,
  selection,
  onClose,
  onUpdateProject,
  onDuplicateProject,
  onDeleteProject,
  onUpdateAchievement,
  onDuplicateAchievement,
  onDeleteAchievement,
  onUpdateMilestone,
  onDuplicateMilestone,
  onDeleteMilestone,
  onToggleSection,
  onUpdateProfile,
}) => {
  if (selection.type === 'none') {
    return (
      <aside className="w-80 bg-[#0D121F] border-l border-[#1E2638] flex flex-col h-[calc(100vh-3.5rem)] p-4 select-none overflow-y-auto">
        <div className="flex items-center gap-2 text-slate-400 mb-4 pb-2 border-b border-[#1E2638]">
          <Sliders className="w-4 h-4 text-sky-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Inspector</h3>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3">
            <Sliders className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-semibold text-white mb-1">Select an Element</h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-6">
            Click any card, section, or text block directly in the preview canvas to inspect and configure its live properties.
          </p>

          <div className="w-full bg-[#131B2E] border border-[#222E46] rounded-xl p-3 text-left">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
              <Keyboard className="w-3.5 h-3.5 text-sky-400" />
              <span>Keyboard Shortcuts</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              <li className="flex justify-between">
                <span>Copy Element</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">⌘C</kbd>
              </li>
              <li className="flex justify-between">
                <span>Paste Element</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">⌘V</kbd>
              </li>
              <li className="flex justify-between">
                <span>Duplicate</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">⌘D</kbd>
              </li>
              <li className="flex justify-between">
                <span>Undo</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">⌘Z</kbd>
              </li>
              <li className="flex justify-between">
                <span>Redo</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">⌘⇧Z</kbd>
              </li>
              <li className="flex justify-between">
                <span>Deselect</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">ESC</kbd>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }

  // ========================================================
  // PROJECT INSPECTOR
  // ========================================================
  if (selection.type === 'project') {
    const proj = document.projects.find((p) => p.id === selection.id);
    if (!proj) return null;

    return (
      <aside className="w-80 bg-[#0D121F] border-l border-[#1E2638] flex flex-col h-[calc(100vh-3.5rem)] select-none">
        {/* Header */}
        <div className="h-12 border-b border-[#1E2638] px-4 flex items-center justify-between bg-[#090D16]">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: proj.accentColor || '#38bdf8' }}
            />
            <h3 className="text-xs font-bold text-white truncate">Project: {proj.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Fields */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 text-xs text-slate-300">
          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Title</label>
            <input
              type="text"
              value={proj.title}
              onChange={(e) => onUpdateProject(proj.id, { title: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500 font-semibold"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Number</label>
              <input
                type="text"
                value={proj.number}
                onChange={(e) => onUpdateProject(proj.id, { number: e.target.value })}
                className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Year</label>
              <input
                type="text"
                value={proj.year}
                onChange={(e) => onUpdateProject(proj.id, { year: e.target.value })}
                className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Category</label>
            <input
              type="text"
              value={proj.category}
              onChange={(e) => onUpdateProject(proj.id, { category: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Tagline</label>
            <input
              type="text"
              value={proj.tagline}
              onChange={(e) => onUpdateProject(proj.id, { tagline: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Description</label>
            <textarea
              rows={3}
              value={proj.description}
              onChange={(e) => onUpdateProject(proj.id, { description: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1.5">Accent Color</label>
            <div className="flex items-center gap-1.5">
              {PRESET_ACCENTS.map((hex) => (
                <button
                  key={hex}
                  type="button"
                  onClick={() => onUpdateProject(proj.id, { accentColor: hex })}
                  className={`w-6 h-6 rounded-full transition-transform ${
                    proj.accentColor === hex ? 'scale-125 ring-2 ring-white' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: hex }}
                />
              ))}
              <input
                type="color"
                value={proj.accentColor || '#0284C7'}
                onChange={(e) => onUpdateProject(proj.id, { accentColor: e.target.value })}
                className="w-6 h-6 rounded-full bg-transparent border-0 cursor-pointer p-0 ml-1"
                title="Custom Color"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">
              Technologies (comma separated)
            </label>
            <input
              type="text"
              value={proj.technologies.join(', ')}
              onChange={(e) => {
                const arr = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                onUpdateProject(proj.id, { technologies: arr });
              }}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">GitHub URL</label>
            <input
              type="url"
              value={proj.githubUrl}
              onChange={(e) => onUpdateProject(proj.id, { githubUrl: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Live Demo URL</label>
            <input
              type="url"
              value={proj.demoUrl || ''}
              onChange={(e) => onUpdateProject(proj.id, { demoUrl: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">
              Key Highlights (one per line)
            </label>
            <textarea
              rows={2}
              value={proj.highlights.join('\n')}
              onChange={(e) => {
                const arr = e.target.value.split('\n').filter((s) => s.trim().length > 0);
                onUpdateProject(proj.id, { highlights: arr });
              }}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-sky-500 font-mono"
            />
          </div>
        </div>

        {/* Actions Footer */}
        <div className="p-3 border-t border-[#1E2638] bg-[#090D16] flex items-center gap-2">
          <button
            type="button"
            onClick={() => onDuplicateProject(proj.id)}
            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-sky-400" />
            <span>Duplicate</span>
          </button>
          <button
            type="button"
            onClick={() => onDeleteProject(proj.id)}
            className="flex items-center justify-center p-2 bg-red-950/40 hover:bg-red-900/60 text-red-400 rounded-lg transition-colors"
            title="Delete Project"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>
    );
  }

  // ========================================================
  // ACHIEVEMENT INSPECTOR
  // ========================================================
  if (selection.type === 'achievement') {
    const ach = document.achievements.find((a) => a.id === selection.id);
    if (!ach) return null;

    return (
      <aside className="w-80 bg-[#0D121F] border-l border-[#1E2638] flex flex-col h-[calc(100vh-3.5rem)] select-none">
        <div className="h-12 border-b border-[#1E2638] px-4 flex items-center justify-between bg-[#090D16]">
          <h3 className="text-xs font-bold text-white truncate">Honor / Grant: {ach.title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs text-slate-300">
          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Title</label>
            <input
              type="text"
              value={ach.title}
              onChange={(e) => onUpdateAchievement(ach.id, { title: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-amber-500 font-semibold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Organization / Authority</label>
            <input
              type="text"
              value={ach.organization}
              onChange={(e) => onUpdateAchievement(ach.id, { organization: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Category</label>
              <select
                value={ach.category}
                onChange={(e) =>
                  onUpdateAchievement(ach.id, { category: e.target.value as Achievement['category'] })
                }
                className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2 py-1.5 text-xs text-white focus:outline-hidden focus:border-amber-500"
              >
                <option value="Grant">Grant (e.g. MSME ₹15L)</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Academic">Academic</option>
                <option value="Leadership">Leadership</option>
                <option value="Industry">Industry</option>
                <option value="Honor">Honor</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Grant / Prize Amount</label>
              <input
                type="text"
                placeholder="₹15 Lakh"
                value={ach.grantAmount || ''}
                onChange={(e) => onUpdateAchievement(ach.id, { grantAmount: e.target.value })}
                className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-emerald-300 font-bold focus:outline-hidden focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Year / Date</label>
            <input
              type="text"
              value={ach.date}
              onChange={(e) => onUpdateAchievement(ach.id, { date: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-amber-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Description</label>
            <textarea
              rows={3}
              value={ach.description}
              onChange={(e) => onUpdateAchievement(ach.id, { description: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">External Link</label>
            <input
              type="url"
              value={ach.url || ''}
              onChange={(e) => onUpdateAchievement(ach.id, { url: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-amber-500 font-mono"
            />
          </div>
        </div>

        <div className="p-3 border-t border-[#1E2638] bg-[#090D16] flex items-center gap-2">
          <button
            type="button"
            onClick={() => onDuplicateAchievement(ach.id)}
            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-amber-400" />
            <span>Duplicate</span>
          </button>
          <button
            type="button"
            onClick={() => onDeleteAchievement(ach.id)}
            className="flex items-center justify-center p-2 bg-red-950/40 hover:bg-red-900/60 text-red-400 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>
    );
  }

  // ========================================================
  // JOURNEY MILESTONE INSPECTOR
  // ========================================================
  if (selection.type === 'journey') {
    const idx = parseInt(selection.id.replace('journey-', ''), 10);
    const m = document.journey[idx];
    if (!m) return null;

    return (
      <aside className="w-80 bg-[#0D121F] border-l border-[#1E2638] flex flex-col h-[calc(100vh-3.5rem)] select-none">
        <div className="h-12 border-b border-[#1E2638] px-4 flex items-center justify-between bg-[#090D16]">
          <h3 className="text-xs font-bold text-white truncate">Milestone: {m.role}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs text-slate-300">
          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Role / Title</label>
            <input
              type="text"
              value={m.role}
              onChange={(e) => onUpdateMilestone(idx, { role: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-indigo-500 font-semibold"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Year</label>
              <input
                type="text"
                value={m.year}
                onChange={(e) => onUpdateMilestone(idx, { year: e.target.value })}
                className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-indigo-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Category</label>
              <select
                value={m.category}
                onChange={(e) =>
                  onUpdateMilestone(idx, { category: e.target.value as JourneyMilestone['category'] })
                }
                className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2 py-1.5 text-xs text-white focus:outline-hidden focus:border-indigo-500"
              >
                <option value="Experience">Experience</option>
                <option value="Education">Education</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Leadership">Leadership</option>
                <option value="Achievement">Achievement</option>
                <option value="Open Source">Open Source</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Organization</label>
            <input
              type="text"
              value={m.organization}
              onChange={(e) => onUpdateMilestone(idx, { organization: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Description</label>
            <textarea
              rows={4}
              value={m.description}
              onChange={(e) => onUpdateMilestone(idx, { description: e.target.value })}
              className="w-full bg-[#131B2E] border border-[#222E46] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-hidden focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="p-3 border-t border-[#1E2638] bg-[#090D16] flex items-center gap-2">
          <button
            type="button"
            onClick={() => onDuplicateMilestone(idx)}
            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-indigo-400" />
            <span>Duplicate</span>
          </button>
          <button
            type="button"
            onClick={() => onDeleteMilestone(idx)}
            className="flex items-center justify-center p-2 bg-red-950/40 hover:bg-red-900/60 text-red-400 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>
    );
  }

  // ========================================================
  // SECTION CONFIG INSPECTOR
  // ========================================================
  if (selection.type === 'section') {
    const section = document.sections.find((s) => s.id === selection.id);
    if (!section) return null;

    return (
      <aside className="w-80 bg-[#0D121F] border-l border-[#1E2638] flex flex-col h-[calc(100vh-3.5rem)] select-none">
        <div className="h-12 border-b border-[#1E2638] px-4 flex items-center justify-between bg-[#090D16]">
          <h3 className="text-xs font-bold text-white truncate">Section: {section.name}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs text-slate-300">
          <div className="p-3 bg-[#131B2E] border border-[#222E46] rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-white block">Visibility</span>
              <span className="text-[11px] text-slate-400">
                {section.enabled ? 'Section is currently visible' : 'Section is hidden from view'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onToggleSection(section.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                section.enabled
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              {section.enabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{section.enabled ? 'Enabled' : 'Hidden'}</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-500 leading-relaxed">
            You can reorder this section relative to other sections in the Outline tab on the left sidebar.
          </div>
        </div>
      </aside>
    );
  }

  return null;
};
