import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { Folder, LayoutGrid, Pin, ArrowRight, ExternalLink, Github, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
  selectedTechFilter?: string | null;
  onClearTechFilter?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenCaseStudy,
  selectedTechFilter,
  onClearTechFilter,
}) => {
  const [viewMode, setViewMode] = useState<'folders' | 'grid' | 'pinboard'>('folders');
  const [activeFolderIndex, setActiveFolderIndex] = useState<number>(0);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Filter projects by category or external tech filter
  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedTechFilter) {
      return proj.technologies.some((t) =>
        t.toLowerCase().includes(selectedTechFilter.toLowerCase())
      );
    }
    if (categoryFilter === 'all') return true;
    return proj.category.toLowerCase().includes(categoryFilter.toLowerCase());
  });

  const activeProject = filteredProjects[activeFolderIndex] || filteredProjects[0] || PROJECTS[0];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6FBFE] dark:bg-[#060D17] text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden select-none transition-colors duration-300">
      {/* Subtle Electric Cyan Ambient Studio Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-sky-300/35 dark:from-sky-900/30 via-cyan-200/20 dark:via-cyan-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-cyan-200/25 dark:bg-sky-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 font-semibold uppercase tracking-wider">
              <span>01 / ARCHIVE</span>
              <span>·</span>
              <span>SELECTED WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-900">
              Engineered for impact.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-xl font-sans">
              Production systems, developer tools, and accessible applications built with zero runtime fluff.
            </p>
          </div>

          {/* View Mode Switcher (Apple-style segmented control) */}
          <div className="flex flex-wrap items-center gap-3">
            {selectedTechFilter && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-xs text-indigo-700">
                <span>Filtered by: <strong>{selectedTechFilter}</strong></span>
                {onClearTechFilter && (
                  <button
                    onClick={onClearTechFilter}
                    className="hover:text-indigo-950 font-bold ml-1"
                  >
                    ✕
                  </button>
                )}
              </div>
            )}

            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-medium">
              <button
                onClick={() => setViewMode('folders')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'folders'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Folder className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">Folder Archive</span>
                <span className="sm:hidden">Folders</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-indigo-500" />
                <span>Grid</span>
              </button>

              <button
                onClick={() => setViewMode('pinboard')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'pinboard'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Pin className="w-3.5 h-3.5 text-rose-500" />
                <span className="hidden sm:inline">Pinboard</span>
                <span className="sm:hidden">Pins</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: TACTILE FOLDER ARCHIVE (References 2, 3, 5) */}
        {/* ========================================================================= */}
        {viewMode === 'folders' && activeProject && (
          <div className="space-y-6">
            {/* Stepped Folder Tabs Header (Inspired by The Bros reference 3 & Designer Daishu 5) */}
            <div className="flex items-end gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
              {filteredProjects.map((proj, idx) => {
                const isSelected = activeFolderIndex === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveFolderIndex(idx)}
                    className={`group relative px-4 sm:px-6 py-2.5 rounded-t-xl text-xs font-mono font-medium transition-all duration-200 border-t border-x shrink-0 ${
                      isSelected
                        ? 'bg-[#FAF9F6] border-slate-300 text-slate-900 shadow-xs -mb-[1px] z-10 scale-[1.02] transform origin-bottom'
                        : 'bg-slate-100/90 border-slate-200/80 text-slate-500 hover:bg-slate-200/70 hover:text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: proj.accentColor }}
                      />
                      <span className="text-[10px] text-slate-400">({proj.number})</span>
                      <span className="font-sans font-semibold tracking-tight">{proj.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Folder Body Container (Translucent Flap + Document Sheets Inside) */}
            <div className="relative rounded-2xl rounded-tl-none bg-[#FAF9F6] border border-slate-300 shadow-md p-6 sm:p-10 transition-all duration-300">
              {/* Folder metadata badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-white border border-slate-200 font-mono text-xs font-bold text-slate-900">
                    DOC #{activeProject.number}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    CLASS: {activeProject.category.toUpperCase()}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    STATUS: PRODUCTION-READY
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition shadow-xs"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition shadow-xs"
                    title="Open Live Demonstration"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onOpenCaseStudy(activeProject)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition shadow-xs"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Main Folder Content Grid */}
              <div className="grid lg:grid-cols-12 gap-8 pt-6 items-center">
                {/* Left: Project Editorial Details */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-indigo-600 font-semibold uppercase tracking-wider">
                      {activeProject.year} · Case File
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900">
                      {activeProject.title}
                    </h3>
                    <p className="text-base text-slate-600 font-sans leading-relaxed">
                      {activeProject.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {activeProject.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Key Milestones:</div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technologies.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-200/70 text-slate-800 text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes preview */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-slate-200">
                    {activeProject.outcomes.map((m, i) => (
                      <div key={i} className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                        <div className="text-sm font-bold text-slate-900 font-display tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Interactive Mockup Box */}
                <div className="lg:col-span-6">
                  <div
                    onClick={() => onOpenCaseStudy(activeProject)}
                    className="cursor-pointer group relative rounded-2xl overflow-hidden shadow-lg border border-slate-300 hover:border-slate-400 transition-all duration-300 hover:shadow-xl"
                  >
                    <ProjectMockup project={activeProject} />
                    
                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-slate-900/90 text-white text-xs font-medium shadow-lg backdrop-blur-xs flex items-center gap-1.5">
                        <span>Click to Inspect Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: CURATED EDITORIAL GRID */}
        {/* ========================================================================= */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#FAF9F6] border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="font-semibold text-slate-900">
                      {project.number} / {project.category.toUpperCase()}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  {/* Mockup Preview */}
                  <div
                    onClick={() => onOpenCaseStudy(project)}
                    className="cursor-pointer rounded-xl overflow-hidden border border-slate-200 shadow-xs group-hover:border-slate-300 transition"
                  >
                    <ProjectMockup project={project} />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-mono text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] text-slate-400 self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-slate-500 hover:text-slate-900 transition"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-slate-500 hover:text-slate-900 transition"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-indigo-600 transition"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: PINBOARD CANVAS (Inspired by Reference 6: Designer's Toolkit) */}
        {/* ========================================================================= */}
        {viewMode === 'pinboard' && (
          <div className="relative p-6 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-slate-300/80 shadow-inner bg-grid-pattern overflow-hidden">
            {/* Ambient Label */}
            <div className="text-center space-y-1 mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-600 shadow-2xs">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Tactile Engineering Board · Interactive Nodes</span>
              </span>
              <h3 className="text-2xl font-display font-bold text-slate-900">
                Interactive Toolkit & Systems Canvas
              </h3>
            </div>

            {/* Connecting SVG lines across cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {filteredProjects.map((project, index) => {
                const pinColors = ['#2563EB', '#DC2626', '#16A34A', '#D97706', '#9333EA'];
                const pinColor = pinColors[index % pinColors.length];

                return (
                  <div
                    key={project.id}
                    onClick={() => onOpenCaseStudy(project)}
                    className="group relative cursor-pointer p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Tactile 3D Pushpin (Reference 6) */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                      <div
                        className="w-5 h-5 rounded-full shadow-md border-2 border-white flex items-center justify-center"
                        style={{ backgroundColor: pinColor }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      </div>
                      <div className="w-0.5 h-2 bg-slate-400 -mt-0.5" />
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span
                          className="font-bold text-sm"
                          style={{ color: pinColor }}
                        >
                          {project.number}
                        </span>
                        <span className="text-slate-400">{project.year}</span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-lg font-display font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-mono text-slate-400">
                        {project.outcomes[0]?.value} {project.outcomes[0]?.label}
                      </span>
                      <span className="font-semibold text-slate-900 group-hover:text-indigo-600 flex items-center gap-1">
                        Inspect →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
