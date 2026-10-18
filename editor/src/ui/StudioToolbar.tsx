import React from 'react';
import { ViewportMode } from '../model/types';
import {
  Monitor,
  Tablet,
  Smartphone,
  Undo2,
  Redo2,
  Save,
  Globe,
  Upload,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  CheckCircle2,
  AlertCircle,
  Eye,
  Loader2,
  ExternalLink,
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
  isPreviewMode: boolean;
  onTogglePreviewMode: () => void;
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
  isPreviewMode,
  onTogglePreviewMode,
  onSaveDraft,
  onPublish,
  onExportBackup,
  onImportBackup,
  isPublishing,
}) => {
  return (
    <header className="h-14 bg-white border-b border-slate-200 px-4 flex items-center justify-between z-30 select-none shadow-2xs">
      {/* Left: Branding & Autosave Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center font-black text-white text-sm shadow-xs">
            KV
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-tight text-slate-900">PORTFOLIO STUDIO</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 font-bold border border-sky-200">
                VISUAL EDITOR
              </span>
            </div>
          </div>
        </div>

        <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />

        {/* Save Status Badge */}
        <div className="items-center gap-1.5 text-xs hidden md:flex">
          {isDirty ? (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-amber-800 bg-amber-50 border border-amber-200 font-medium text-[11px]">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>Unsaved Changes</span>
            </span>
          ) : (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-emerald-800 bg-emerald-50 border border-emerald-200 font-medium text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lastSavedText ? `Draft Saved ${lastSavedText}` : 'Draft Saved'}</span>
            </span>
          )}
        </div>
      </div>

      {/* Center: History & Viewport Switcher */}
      <div className="flex items-center gap-2">
        {/* Undo / Redo */}
        <div className="flex items-center bg-slate-50 p-1 rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z / Cmd+Z)"
            className={`p-1.5 rounded transition-colors ${
              canUndo
                ? 'text-slate-700 hover:text-slate-950 hover:bg-white shadow-2xs cursor-pointer'
                : 'text-slate-300 cursor-not-allowed opacity-40'
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
                ? 'text-slate-700 hover:text-slate-950 hover:bg-white shadow-2xs cursor-pointer'
                : 'text-slate-300 cursor-not-allowed opacity-40'
            }`}
          >
            <Redo2 className="w-4 h-4" />
          </button>
        </div>

        {/* Viewport Switcher */}
        <div className="flex items-center bg-slate-50 p-1 rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={() => onSetViewport('desktop')}
            title="Desktop View (1280px)"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-all ${
              viewport === 'desktop'
                ? 'bg-white text-sky-700 font-bold shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => onSetViewport('tablet')}
            title="Tablet View (768px)"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-all ${
              viewport === 'tablet'
                ? 'bg-white text-sky-700 font-bold shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Tablet</span>
          </button>
          <button
            type="button"
            onClick={() => onSetViewport('mobile')}
            title="Mobile View (375px)"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-all ${
              viewport === 'mobile'
                ? 'bg-white text-sky-700 font-bold shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Mobile</span>
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="hidden xl:flex items-center bg-slate-50 p-1 rounded-lg border border-slate-200 text-xs">
          <button
            type="button"
            onClick={() => onSetZoom(Math.max(50, zoom - 10))}
            title="Zoom Out"
            className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-white rounded"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="px-1.5 font-mono text-[11px] font-semibold text-slate-700">{zoom}%</span>
          <button
            type="button"
            onClick={() => onSetZoom(Math.min(150, zoom + 10))}
            title="Zoom In"
            className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-white rounded"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Right: Actions & One-Click Publish */}
      <div className="flex items-center gap-2.5">
        {/* Toggle Clean Preview Mode */}
        <button
          type="button"
          onClick={onTogglePreviewMode}
          title={isPreviewMode ? 'Exit Preview Mode' : 'Clean Preview Mode'}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isPreviewMode
              ? 'bg-sky-600 text-white border-sky-600 shadow-2xs'
              : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{isPreviewMode ? 'Editing' : 'Preview'}</span>
        </button>

        {/* Save Draft */}
        <button
          type="button"
          onClick={onSaveDraft}
          title="Save Draft to localStorage"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 transition-all shadow-2xs"
        >
          <Save className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">Save Draft</span>
        </button>

        {/* ONE-CLICK PUBLISH TO LIVE WEBSITE */}
        <button
          type="button"
          onClick={onPublish}
          disabled={isPublishing}
          title="Publish approved changes directly to live website"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-sm transition-all cursor-pointer disabled:opacity-60"
        >
          {isPublishing ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Publishing...</span>
            </>
          ) : (
            <>
              <Globe className="w-4 h-4" />
              <span>Publish to Live Website</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
