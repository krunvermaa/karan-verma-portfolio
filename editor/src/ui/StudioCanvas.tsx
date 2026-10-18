import React from 'react';
import { ViewportMode, EditorSelection } from '../model/types';

interface StudioCanvasProps {
  viewport: ViewportMode;
  zoom: number;
  selection: EditorSelection;
  onDeselect: () => void;
  children: React.ReactNode;
}

export const StudioCanvas: React.FC<StudioCanvasProps> = ({
  viewport,
  zoom,
  selection,
  onDeselect,
  children,
}) => {
  const viewportConfig: Record<ViewportMode, { width: string; label: string; bezel?: boolean }> = {
    desktop: {
      width: 'w-full max-w-[1280px]',
      label: 'Desktop · 1280 × Auto',
      bezel: false,
    },
    tablet: {
      width: 'w-[768px]',
      label: 'iPad / Tablet · 768 × Auto',
      bezel: true,
    },
    mobile: {
      width: 'w-[375px]',
      label: 'iPhone / Mobile · 375 × Auto',
      bezel: true,
    },
  };

  const currentConfig = viewportConfig[viewport];
  const scale = zoom / 100;

  return (
    <div
      onClick={(e) => {
        // Deselect if clicking directly on canvas background
        if (e.target === e.currentTarget) {
          onDeselect();
        }
      }}
      className="flex-1 editor-canvas-dots overflow-auto relative p-6 sm:p-8 flex flex-col items-center select-none editor-canvas-container"
    >
      {/* Top Floating Viewport Info Badge */}
      <div className="sticky top-0 z-30 mb-4 px-3.5 py-1 rounded-full bg-white/95 border border-slate-200/90 shadow-xs backdrop-blur-xs flex items-center gap-2 text-[11px] font-mono text-slate-600 select-none">
        <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
        <span className="font-bold text-slate-900">{currentConfig.label}</span>
        <span className="text-slate-300">|</span>
        <span className="font-medium">{zoom}% Zoom</span>
      </div>

      {/* Scaled Preview Frame */}
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          transition: 'transform 0.2s ease-out, width 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={`relative ${currentConfig.width} min-h-screen transition-all`}
      >
        {/* Device bezel frame for Mobile / Tablet */}
        {currentConfig.bezel ? (
          <div className="rounded-[40px] p-3 bg-slate-900 border-4 border-slate-700 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] relative overflow-hidden ring-1 ring-slate-800">
            {/* Dynamic Island / Notch */}
            <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 relative z-30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-900" />
            </div>

            {/* Inner Screen */}
            <div className="rounded-[28px] overflow-hidden bg-white shadow-inner">
              {children}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-[0_15px_35px_rgba(0,0,0,0.06)] bg-white">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
