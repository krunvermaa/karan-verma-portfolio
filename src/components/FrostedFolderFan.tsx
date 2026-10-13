import React, { useState, useEffect } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Folder, FileText, CheckCircle2 } from 'lucide-react';

interface FrostedFolderFanProps {
  onSelectProject: (project: Project) => void;
}

export const FrostedFolderFan: React.FC<FrostedFolderFanProps> = ({ onSelectProject }) => {
  const [activeIdx, setActiveIdx] = useState<number>(1); // Default to middle/featured (Aura Design System)
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Deep, jewel-toned color configurations with high-contrast text that passes WCAG standards
  const folderConfigs = [
    {
      id: 'saksham-health',
      year: '2025',
      tag: 'Healthcare',
      color: '#059669', // Emerald
      bgGrad: 'from-emerald-700 via-emerald-800 to-emerald-950',
      tabBg: 'bg-emerald-700',
      border: 'border-emerald-400/40',
      glow: 'shadow-folder-emerald',
      rotation: -10,
      translateXMobile: -36,
      translateXDesktop: -120,
      translateY: 16,
      zIndex: 1,
    },
    {
      id: 'aura-design-system',
      year: '2025',
      tag: 'Design System',
      color: '#4338CA', // Indigo
      bgGrad: 'from-indigo-700 via-indigo-800 to-blue-950',
      tabBg: 'bg-indigo-700',
      border: 'border-indigo-400/50',
      glow: 'shadow-folder-indigo',
      rotation: 0,
      translateXMobile: 0,
      translateXDesktop: 0,
      translateY: -10,
      zIndex: 5,
    },
    {
      id: 'kernel-fs-studio',
      year: '2024',
      tag: 'Wasm / OS',
      color: '#D97706', // Rich Amber Gold with High Contrast
      bgGrad: 'from-amber-600 via-amber-700 to-amber-950',
      tabBg: 'bg-amber-600',
      border: 'border-amber-400/40',
      glow: 'shadow-folder-glow',
      rotation: 10,
      translateXMobile: 36,
      translateXDesktop: 120,
      translateY: 16,
      zIndex: 2,
    },
  ];

  return (
    <div className="w-full py-6 sm:py-8 select-none flex flex-col items-center overflow-hidden">
      {/* 3D Fan Stage Container */}
      <div className="relative w-full max-w-2xl h-76 sm:h-96 flex items-center justify-center perspective-1000">
        {folderConfigs.map((cfg, idx) => {
          const project = PROJECTS.find((p) => p.id === cfg.id) || PROJECTS[idx];
          const isSelected = activeIdx === idx;

          // Responsive offsets to prevent mobile horizontal clipping
          const currentRotation = isSelected ? 0 : cfg.rotation;
          const currentTranslateX = isSelected
            ? 0
            : isMobile
            ? cfg.translateXMobile
            : cfg.translateXDesktop;
          const currentTranslateY = isSelected ? -20 : cfg.translateY;
          const currentZ = isSelected ? 30 : cfg.zIndex;

          return (
            <div
              key={cfg.id}
              onClick={() => {
                if (isSelected) {
                  onSelectProject(project);
                } else {
                  setActiveIdx(idx);
                }
              }}
              style={{
                transform: `translateX(${currentTranslateX}px) translateY(${currentTranslateY}px) rotate(${currentRotation}deg) scale(${isSelected ? 1.04 : 0.94})`,
                zIndex: currentZ,
              }}
              className="absolute cursor-pointer transition-all duration-500 ease-out group w-56 sm:w-80 h-64 sm:h-76 flex flex-col justify-end filter drop-shadow-xl touch-manipulation"
            >
              {/* Document Sheet Peeking Out (Daishu / MOOV Reference) */}
              <div
                style={{
                  transform: isSelected ? 'translateY(-48px)' : 'translateY(0px)',
                }}
                className="absolute top-2 left-4 right-4 sm:left-6 sm:right-6 h-36 bg-white dark:bg-[#161B26] rounded-t-xl border border-slate-300 dark:border-slate-700 shadow-md p-3 sm:p-3.5 transition-transform duration-500 ease-out font-mono z-0 pointer-events-none"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-slate-900 dark:text-slate-100 font-sans tracking-wide">
                    PART PROJECTS
                  </span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">#{project.number}</span>
                </div>
                <div className="space-y-1 pt-1.5 text-[10px] text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Stack:</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[120px]">{project.technologies[0]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Year:</span>
                    <span className="text-slate-900 dark:text-slate-100">{project.year}</span>
                  </div>
                  <div className="text-[9px] text-emerald-700 dark:text-emerald-300 font-sans font-semibold pt-0.5 truncate">
                    ✓ {project.highlights[0]}
                  </div>
                </div>
              </div>

              {/* Frosted Folder Body */}
              <div
                className={`relative w-full h-50 sm:h-60 rounded-2xl p-4 sm:p-5 flex flex-col justify-between text-white backdrop-blur-md bg-gradient-to-br ${cfg.bgGrad} border ${cfg.border} shadow-2xl transition-all duration-300 z-10`}
              >
                {/* Stepped Tab Top Left */}
                <div className="absolute -top-6 left-4 px-3 sm:px-4 py-1 rounded-t-xl text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-white shadow-xs backdrop-blur-md bg-black/25 border-t border-x border-white/30 flex items-center gap-1.5">
                  <Folder className="w-3 h-3 fill-current opacity-90" />
                  <span>{cfg.year}</span>
                </div>

                {/* Top Folder Metadata */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="tracking-widest uppercase text-[9px] sm:text-[10px] bg-black/30 text-white font-bold px-2 py-0.5 rounded-full border border-white/20">
                    {cfg.tag}
                  </span>
                  <span className="font-bold text-xs sm:text-sm tracking-tight font-sans text-white/95">
                    {project.number}
                  </span>
                </div>

                {/* Folder Center Title (Designer Daishu typography) */}
                <div className="my-auto space-y-0.5 sm:space-y-1">
                  <div className="text-lg sm:text-2xl font-display font-black tracking-tight text-white drop-shadow-md truncate">
                    {project.title}
                  </div>
                  <p className="text-[10px] sm:text-xs text-white/90 font-sans line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Bottom Folder Action (MOOV Reference: "PROJECT NAME →") */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  className="pt-2 border-t border-white/30 flex items-center justify-between text-xs font-semibold cursor-pointer hover:opacity-90 transition"
                >
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-mono text-white/95 truncate mr-2">
                    {isSelected ? 'INSPECT DOSSIER' : `PROJECT ${project.title.split(' ')[0]}`}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/25 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center transition shadow-xs shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Folder Selector Pills */}
      <div className="flex sm:hidden items-center justify-center gap-1.5 mt-3 px-2">
        {folderConfigs.map((cfg, idx) => (
          <button
            key={cfg.id}
            onClick={() => setActiveIdx(idx)}
            className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all ${
              activeIdx === idx
                ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold shadow-xs'
                : 'bg-surface border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            #{idx + 1} {cfg.tag}
          </button>
        ))}
      </div>

      {/* Daishu Editorial Divider Bar */}
      <div className="w-full max-w-4xl mt-6 pt-4 border-t border-slate-300/80 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 gap-3 transition-colors px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-950 dark:bg-white" />
          <span className="font-bold text-slate-950 dark:text-white font-sans tracking-wide">
            2025-2026 WORK COLLECTION
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-slate-700 dark:text-slate-300 font-sans">
          <span>Full-Stack Systems</span>
          <span className="text-slate-400 dark:text-slate-600">·</span>
          <span>Design Tokens</span>
          <span className="text-slate-400 dark:text-slate-600">·</span>
          <span>Local-First PWAs</span>
        </div>

        <div className="text-[11px] font-bold text-slate-950 dark:text-white font-mono">
          #00 ARCHIVE
        </div>
      </div>
    </div>
  );
};
