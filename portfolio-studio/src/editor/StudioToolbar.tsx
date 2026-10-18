import React from 'react';
import { ViewportMode } from '../model/types';
import {
  Monitor,
  Tablet,
  Smartphone,
  Undo2,
  Redo2,
  Save,
  Rocket,
  Download,
  Upload,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Maximize2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface StudioToolbarProps {
  viewport: ViewportMode;
  onSetViewport: (mode: ViewportMode) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  zoom: number;
  onSetZoom: (zoom: number) => void;
  isDirty: boolean;
  lastSavedText: string;
  onSaveDraft: () => void;
  onPublish: () => void;
  onExportBackup: () => void;
  onImportBackup: () => void;
  isPublishing?: boolean;
}

export const StudioToolbar: React.FC<StudioToolbarProps> = ({
  viewport,
  onSetViewport,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  zoom,
  onSetZoom,
  isDirty,
  lastSavedText,
  onSaveDraft,
  onPublish,
  onExportBackup,
  onImportBackup,
  isPublishing,
}) => {
  return (
    <header className="h-14 bg-[#101623] border-b border-[#222C3E] px-4 flex items-center justify-between z-30 select-none">
      {/* Zone 1: Brand & Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-black text-white text-sm shadow-md">
            KV
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-tight text-white">PORTFOLIO STUDIO</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30">
                PROD v1.0
              </span>
            </div>
          </div>
        </div>

        <div className="h-4 w-px bg-slate-700/60 mx-1 hidden sm:block" />

        {/* Draft Save Status Indicator */}
        <div className="items-center gap-1.5 text-xs hidden md:flex">
          {isDirty ? (
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <AlertCircle className="w-3.5 h-3.5 animate-pulse" />
              <span>Unsaved Changes</span>
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{lastSavedText ? `Saved ${lastSavedText}` : 'Draft Saved'}</span>
            </span>
          )}
        </div>
      </div>

      {/* Zone 2: Viewport Switcher & History */}
      <div className="flex items-center gap-2">
        {/* Undo / Redo */}
        <div className="flex items-center bg-[#090D16] p-1 rounded-lg border border-[#222C3E]">
          <button
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z / Cmd+Z)"
            className={`p-1.5 rounded transition-colors ${
              canUndo
                ? 'text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer'
                : 'text-slate-600 cursor-not-allowed opacity-50'
            }`}
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onRedo}
            disabled={!canRedo}
            title="Redo (Ctrl+Shift+Z / Cmd+Shift+Z)"
            className={`p-1.5 rounded transition-colors ${
              canRedo
                ? 'text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer'
                : 'text-slate-600 cursor-not-allowed opacity-50'
            }`}
          >
            <Redo2 className="w-4 h-4" />
          </button>
        </div>

        {/* Viewport Switcher */}
        <div className="flex items-center bg-[#090D16] p-1 rounded-lg border border-[#222C3E]">
          <button
            type="button"
            onClick={() => onSetViewport('desktop')}
            title="Desktop Viewport (1280px)"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-all ${
              viewport === 'desktop'
                ? 'bg-sky-600 text-white shadow-xs font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => onSetViewport('tablet')}
            title="Tablet Viewport (768px)"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-all ${
              viewport === 'tablet'
                ? 'bg-sky-600 text-white shadow-xs font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Tablet</span>
          </button>
          <button
            type="button"
            onClick={() => onSetViewport('mobile')}
            title="Mobile Viewport (375px)"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-all ${
              viewport === 'mobile'
                ? 'bg-sky-600 text-white shadow-xs font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Mobile</span>
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="hidden xl:flex items-center bg-[#090D16] p-1 rounded-lg border border-[#222C3E] text-xs">
          <button
            type="button"
            onClick={() => onSetZoom(Math.max(0.4, zoom - 0.1))}
            title="Zoom Out"
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="font-mono text-slate-300 w-11 text-center font-medium">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => onSetZoom(Math.min(1.4, zoom + 0.1))}
            title="Zoom In"
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onSetZoom(1.0)}
            title="Reset Zoom to 100%"
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Zone 3: Save, Publish & Export Actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onExportBackup}
          title="Export JSON Backup"
          className="p-2 rounded-lg bg-[#090D16] border border-[#222C3E] text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium transition-colors hidden sm:flex items-center gap-1.5"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Backup</span>
        </button>

        <button
          type="button"
          onClick={onImportBackup}
          title="Import JSON Backup"
          className="p-2 rounded-lg bg-[#090D16] border border-[#222C3E] text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium transition-colors hidden sm:flex items-center gap-1.5"
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Restore</span>
        </button>

        <button
          type="button"
          onClick={onSaveDraft}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all cursor-pointer"
        >
          <Save className="w-3.5 h-3.5" />
          <span>Save Draft</span>
        </button>

        <button
          type="button"
          onClick={onPublish}
          disabled={isPublishing}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-md text-xs font-bold tracking-wide transition-all cursor-pointer disabled:opacity-50"
        >
          <Rocket className="w-3.5 h-3.5" />
          <span>{isPublishing ? 'Publishing...' : 'Publish to Live'}</span>
        </button>

        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noreferrer"
          title="Open Public Portfolio in new tab"
          className="p-2 rounded-lg bg-[#090D16] border border-[#222C3E] text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
};
