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
  Tag,
  Palette,
  Eye,
  EyeOff,
  Keyboard,
  Sparkles,
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
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col h-[calc(100vh-3.5rem)] p-4 select-none overflow-y-auto">
        <div className="flex items-center gap-2 text-slate-500 mb-4 pb-2 border-b border-slate-200">
          <Sliders className="w-4 h-4 text-sky-600" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">Inspector</h3>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-3 shadow-2xs">
            <Sliders className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 mb-1">Select an Element</h4>
          <p className="text-xs text-slate-500 leading-relaxed mb-6">
            Click any card, section, or text block directly in the portfolio preview to inspect and edit its live properties.
          </p>

          <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-left shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2.5">
              <Keyboard className="w-3.5 h-3.5 text-sky-600" />
              <span>Keyboard Shortcuts</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-600">
              <li className="flex justify-between">
                <span>Copy Element</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-800 border border-slate-200 font-mono text-[10px]">⌘C</kbd>
              </li>
              <li className="flex justify-between">
                <span>Paste Element</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-800 border border-slate-200 font-mono text-[10px]">⌘V</kbd>
              </li>
              <li className="flex justify-between">
                <span>Duplicate</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-800 border border-slate-200 font-mono text-[10px]">⌘D</kbd>
              </li>
              <li className="flex justify-between">
                <span>Undo</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-800 border border-slate-200 font-mono text-[10px]">⌘Z</kbd>
              </li>
              <li className="flex justify-between">
                <span>Redo</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-800 border border-slate-200 font-mono text-[10px]">⌘⇧Z</kbd>
              </li>
              <li className="flex justify-between">
                <span>Deselect</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-800 border border-slate-200 font-mono text-[10px]">ESC</kbd>
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
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col h-[calc(100vh-3.5rem)] select-none">
        <div className="h-12 border-b border-slate-200 px-4 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: proj.accentColor || '#0284c7' }}
            />
            <h3 className="text-xs font-bold text-slate-900 truncate">Project: {proj.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-800 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 text-xs text-slate-700">
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Title</label>
            <input
              type="text"
              value={proj.title}
              onChange={(e) => onUpdateProject(proj.id, { title: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-bold"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Number</label>
              <input
                type="text"
                value={proj.number}
                onChange={(e) => onUpdateProject(proj.id, { number: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-sky-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Year</label>
              <input
                type="text"
                value={proj.year}
                onChange={(e) => onUpdateProject(proj.id, { year: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-sky-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Category</label>
            <input
              type="text"
              value={proj.category}
              onChange={(e) => onUpdateProject(proj.id, { category: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Tagline</label>
            <input
              type="text"
              value={proj.tagline}
              onChange={(e) => onUpdateProject(proj.id, { tagline: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Description</label>
            <textarea
              rows={3}
              value={proj.description}
              onChange={(e) => onUpdateProject(proj.id, { description: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1.5">Accent Color</label>
            <div className="flex items-center gap-1.5">
              {PRESET_ACCENTS.map((hex) => (
                <button
                  key={hex}
                  type="button"
                  onClick={() => onUpdateProject(proj.id, { accentColor: hex })}
                  className={`w-6 h-6 rounded-full transition-transform ${
                    proj.accentColor === hex ? 'scale-125 ring-2 ring-slate-900 shadow-xs' : 'hover:scale-110'
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
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              Technologies (comma separated)
            </label>
            <input
              type="text"
              value={proj.technologies.join(', ')}
              onChange={(e) => {
                const arr = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                onUpdateProject(proj.id, { technologies: arr });
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-sky-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">GitHub URL</label>
            <input
              type="url"
              value={proj.githubUrl}
              onChange={(e) => onUpdateProject(proj.id, { githubUrl: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-sky-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Live Demo URL</label>
            <input
              type="url"
              value={proj.demoUrl || ''}
              onChange={(e) => onUpdateProject(proj.id, { demoUrl: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-sky-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              Key Highlights (one per line)
            </label>
            <textarea
              rows={2}
              value={proj.highlights.join('\n')}
              onChange={(e) => {
                const arr = e.target.value.split('\n').filter((s) => s.trim().length > 0);
                onUpdateProject(proj.id, { highlights: arr });
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-sky-500 font-mono"
            />
          </div>
        </div>

        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onDuplicateProject(proj.id)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-bold border border-slate-200 shadow-2xs transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-sky-600" />
            <span>Duplicate</span>
          </button>
          <button
            type="button"
            onClick={() => onDeleteProject(proj.id)}
            className="flex items-center justify-center p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg border border-red-200 transition-colors"
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
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col h-[calc(100vh-3.5rem)] select-none">
        <div className="h-12 border-b border-slate-200 px-4 flex items-center justify-between bg-slate-50/80">
          <h3 className="text-xs font-bold text-slate-900 truncate">Honor / Grant: {ach.title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-800 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs text-slate-700">
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Title</label>
            <input
              type="text"
              value={ach.title}
              onChange={(e) => onUpdateAchievement(ach.id, { title: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-amber-500 font-bold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Organization / Authority</label>
            <input
              type="text"
              value={ach.organization}
              onChange={(e) => onUpdateAchievement(ach.id, { organization: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Category</label>
              <select
                value={ach.category}
                onChange={(e) =>
                  onUpdateAchievement(ach.id, { category: e.target.value as Achievement['category'] })
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-amber-500 font-medium"
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
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Grant / Prize Amount</label>
              <input
                type="text"
                placeholder="₹15 Lakh"
                value={ach.grantAmount || ''}
                onChange={(e) => onUpdateAchievement(ach.id, { grantAmount: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-emerald-800 font-bold focus:bg-white focus:outline-hidden focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Year / Date</label>
            <input
              type="text"
              value={ach.date}
              onChange={(e) => onUpdateAchievement(ach.id, { date: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-amber-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Description</label>
            <textarea
              rows={3}
              value={ach.description}
              onChange={(e) => onUpdateAchievement(ach.id, { description: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">External Link</label>
            <input
              type="url"
              value={ach.url || ''}
              onChange={(e) => onUpdateAchievement(ach.id, { url: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-amber-500 font-mono"
            />
          </div>
        </div>

        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onDuplicateAchievement(ach.id)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-bold border border-slate-200 shadow-2xs transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-amber-600" />
            <span>Duplicate</span>
          </button>
          <button
            type="button"
            onClick={() => onDeleteAchievement(ach.id)}
            className="flex items-center justify-center p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg border border-red-200 transition-colors"
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
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col h-[calc(100vh-3.5rem)] select-none">
        <div className="h-12 border-b border-slate-200 px-4 flex items-center justify-between bg-slate-50/80">
          <h3 className="text-xs font-bold text-slate-900 truncate">Milestone: {m.role}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-800 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs text-slate-700">
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Role / Title</label>
            <input
              type="text"
              value={m.role}
              onChange={(e) => onUpdateMilestone(idx, { role: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-indigo-500 font-bold"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Year</label>
              <input
                type="text"
                value={m.year}
                onChange={(e) => onUpdateMilestone(idx, { year: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-indigo-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Category</label>
              <select
                value={m.category}
                onChange={(e) =>
                  onUpdateMilestone(idx, { category: e.target.value as JourneyMilestone['category'] })
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-indigo-500 font-medium"
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
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Organization</label>
            <input
              type="text"
              value={m.organization}
              onChange={(e) => onUpdateMilestone(idx, { organization: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Description</label>
            <textarea
              rows={4}
              value={m.description}
              onChange={(e) => onUpdateMilestone(idx, { description: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onDuplicateMilestone(idx)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-bold border border-slate-200 shadow-2xs transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-indigo-600" />
            <span>Duplicate</span>
          </button>
          <button
            type="button"
            onClick={() => onDeleteMilestone(idx)}
            className="flex items-center justify-center p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg border border-red-200 transition-colors"
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
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col h-[calc(100vh-3.5rem)] select-none">
        <div className="h-12 border-b border-slate-200 px-4 flex items-center justify-between bg-slate-50/80">
          <h3 className="text-xs font-bold text-slate-900 truncate">Section: {section.name}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-800 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs text-slate-700">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between shadow-2xs">
            <div>
              <span className="text-xs font-bold text-slate-900 block">Visibility</span>
              <span className="text-[11px] text-slate-500">
                {section.enabled ? 'Section is visible on page' : 'Section is hidden'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onToggleSection(section.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
                section.enabled
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-slate-200 text-slate-600 border border-slate-300'
              }`}
            >
              {section.enabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{section.enabled ? 'Enabled' : 'Hidden'}</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-500 leading-relaxed">
            You can reorder this section relative to other sections using the Outline tab in the left sidebar.
          </div>
        </div>
      </aside>
    );
  }

  return null;
};
