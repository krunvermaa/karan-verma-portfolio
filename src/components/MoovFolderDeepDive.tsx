import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { ArrowRight, Github, ExternalLink, Folder } from 'lucide-react';

interface MoovFolderDeepDiveProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const MoovFolderDeepDive: React.FC<MoovFolderDeepDiveProps> = ({ onOpenCaseStudy }) => {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [mobileSheetTab, setMobileSheetTab] = useState<'specimen' | 'metrics'>('specimen');
  const currentProject = PROJECTS[activeProjectIdx] || PROJECTS[0];

  // High-contrast folder colors tailored for each project (passing WCAG AAA with white text)
  const folderThemeMap: Record<string, { bg: string; tab: string; border: string; glow: string; textAccent: string }> = {
    'agri-market-platform': {
      bg: 'from-emerald-700 via-emerald-800 to-emerald-950',
      tab: 'bg-emerald-700',
      border: 'border-emerald-400/40',
      glow: 'shadow-folder-emerald',
      textAccent: 'text-emerald-200',
    },
    'railway-navigation-platform': {
      bg: 'from-indigo-700 via-indigo-800 to-blue-950',
      tab: 'bg-indigo-700',
      border: 'border-indigo-400/50',
      glow: 'shadow-folder-indigo',
      textAccent: 'text-indigo-200',
    },
    'indusai-python-engine': {
      bg: 'from-amber-600 via-amber-700 to-amber-950',
      tab: 'bg-amber-600',
      border: 'border-amber-400/40',
      glow: 'shadow-folder-glow',
      textAccent: 'text-amber-200',
    },
    'hacktour-web3-growth': {
      bg: 'from-rose-600 via-pink-700 to-rose-950',
      tab: 'bg-rose-600',
      border: 'border-pink-400/40',
      glow: 'shadow-folder-rose',
      textAccent: 'text-pink-200',
    },
    'mgi-campus-portal': {
      bg: 'from-sky-600 via-blue-700 to-cyan-950',
      tab: 'bg-sky-600',
      border: 'border-sky-400/40',
      glow: 'shadow-folder-sky',
      textAccent: 'text-sky-200',
    },
  };

  const theme = folderThemeMap[currentProject.id] || folderThemeMap['agri-market-platform'];

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-canvas text-theme-primary relative select-none transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
              <span>01 / FOLDER ARCHIVE</span>
              <span>·</span>
              <span>MOOV DIGITAL FOLDER DOSSIER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">
              Interactive Project Dossier.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl font-sans transition-colors">
              Tactile translucent folders holding comprehensive case files, interactive mockups, and telemetry data.
            </p>
          </div>

          {/* Stepped Tabs to switch the active folder */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
            {PROJECTS.map((proj, idx) => {
              const isSelected = activeProjectIdx === idx;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setActiveProjectIdx(idx)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer shrink-0 min-h-[36px] ${
                    isSelected
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-xs font-semibold'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <span>{proj.number}</span>
                  <span className="hidden sm:inline font-sans">{proj.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Giant MOOV Floating Folder Centerpiece */}
        <div className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 flex flex-col items-center">
          {/* Ambient Diffused Shadow (MOOV Reference) */}
          <div className="w-4/5 max-w-2xl h-16 bg-slate-400/20 dark:bg-indigo-950/40 blur-3xl rounded-full translate-y-72 pointer-events-none" />

          {/* Folder Shell with 3D Depth */}
          <div className="relative w-full max-w-4xl transition-all duration-500">
            {/* Mobile Sheet Toggle Switcher */}
            <div className="md:hidden flex items-center justify-center gap-2 mb-3">
              <button
                type="button"
                onClick={() => setMobileSheetTab('specimen')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition cursor-pointer min-h-[36px] ${
                  mobileSheetTab === 'specimen'
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold shadow-xs'
                    : 'bg-surface border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                1. Specimen View
              </button>
              <button
                type="button"
                onClick={() => setMobileSheetTab('metrics')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition cursor-pointer min-h-[36px] ${
                  mobileSheetTab === 'metrics'
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold shadow-xs'
                    : 'bg-surface border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                2. Telemetry & Specs
              </button>
            </div>

            {/* Document Sheets Peeking Out (MOOV Reference) */}
            <div className="px-2 sm:px-6 md:px-10 -mb-3 sm:-mb-5 md:-mb-8 relative z-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                {/* Sheet 1: Live Interactive Mockup */}
                <div
                  className={`md:col-span-7 lg:col-span-8 bg-white dark:bg-[#131722] rounded-2xl border border-slate-300 dark:border-slate-700 shadow-xl p-3.5 sm:p-5 pb-8 sm:pb-10 md:pb-12 transform md:-rotate-1 transition-transform hover:rotate-0 hover:-translate-y-2 duration-300 flex flex-col justify-between ${
                    mobileSheetTab === 'specimen' ? 'block' : 'hidden md:flex'
                  }`}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-2.5">
                    <span className="font-sans font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide">
                      SPECIMEN VIEW · INTERACTIVE PREVIEW
                    </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {currentProject.year} RELEASE
                    </span>
                  </div>
                  <div className="h-60 sm:h-64 md:h-72 overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                    <ProjectMockup project={currentProject} />
                  </div>
                </div>

                {/* Sheet 2: Metrics & Telemetry Card */}
                <div
                  className={`md:col-span-5 lg:col-span-4 bg-white dark:bg-[#131722] rounded-2xl border border-slate-300 dark:border-slate-700 shadow-xl p-4 sm:p-5 pb-8 sm:pb-10 md:pb-12 transform md:rotate-1.5 transition-transform hover:rotate-0 hover:-translate-y-2 duration-300 flex flex-col justify-between space-y-4 font-sans ${
                    mobileSheetTab === 'metrics' ? 'block' : 'hidden md:flex'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold border-b border-slate-200 dark:border-slate-800 pb-1.5">
                      <span>Telemetry & Verification</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">VERIFIED</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-950 dark:text-white pt-1 line-clamp-2">
                      {currentProject.highlights[0]}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {currentProject.problem}
                    </p>
                  </div>

                  <div className="space-y-2 py-2 border-y border-slate-200 dark:border-slate-800">
                    {currentProject.outcomes.slice(0, 2).map((metric, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 dark:text-slate-400 font-medium">{metric.label}</span>
                        <span className="font-display font-bold text-slate-950 dark:text-white tabular-nums">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenCaseStudy(currentProject)}
                    className="w-full py-2.5 sm:py-3 px-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition cursor-pointer shadow-xs min-h-[44px] flex items-center justify-center gap-2 group"
                  >
                    <span>Full Technical Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Translucent Front Folder Flap (MOOV Reference: "PROJECT [NAME] →") */}
            <div
              className={`relative z-10 w-full rounded-3xl p-5 sm:p-8 md:p-12 text-white bg-gradient-to-br ${theme.bg} border ${theme.border} backdrop-blur-xl shadow-2xl transition-all duration-500`}
            >
              {/* Folder Left Tab Curve */}
              <div
                className="absolute -top-7 left-3 sm:left-8 px-3.5 sm:px-6 py-1 sm:py-1.5 rounded-t-xl sm:rounded-t-2xl font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-xs backdrop-blur-md bg-white/20 border-t border-x border-white/30 flex items-center gap-1.5 sm:gap-2"
              >
                <Folder className="w-3.5 h-3.5 fill-current" />
                <span>CASE #{currentProject.number}</span>
              </div>

              {/* Inside the Flap: MOOV Editorial Headline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6 pt-1 sm:pt-0">
                <div className="space-y-2 max-w-full">
                  <span className={`text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase ${theme.textAccent}`}>
                    PROJECT DOSSIER
                  </span>
                  <h3 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight drop-shadow-sm break-words">
                    {currentProject.title.toUpperCase()}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-xl font-sans leading-relaxed">
                    {currentProject.tagline}
                  </p>
                </div>

                {/* Big Action Pill (MOOV Reference Arrow) */}
                <button
                  type="button"
                  onClick={() => onOpenCaseStudy(currentProject)}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 rounded-2xl bg-white text-slate-950 font-display font-bold text-xs sm:text-sm shadow-xl hover:bg-slate-100 hover:scale-105 transition-all duration-200 shrink-0 cursor-pointer min-h-[44px]"
                >
                  <span>Open Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Technologies strip inside folder */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {currentProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 sm:px-3 py-1 rounded-lg bg-black/25 text-white font-mono text-[10px] sm:text-[11px] backdrop-blur-xs border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-white/90 shrink-0 pt-1 sm:pt-0">
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1.5 font-mono text-xs py-1 px-2 rounded-md hover:bg-white/10"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                  <span className="text-white/40">·</span>
                  <a
                    href={currentProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1.5 font-mono text-xs py-1 px-2 rounded-md hover:bg-white/10"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
