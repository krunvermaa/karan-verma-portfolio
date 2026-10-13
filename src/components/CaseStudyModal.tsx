import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Layers, Cpu, ShieldAlert, TrendingUp } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#121622] rounded-2xl shadow-2xl border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white my-auto transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-4 bg-white/95 dark:bg-[#121622]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 pr-2">
            <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest whitespace-nowrap">
              CASE STUDY · {project.number}
            </span>
            <span className="text-slate-300 dark:text-slate-700 hidden xs:inline">/</span>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 truncate hidden xs:inline">{project.category}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
              title="View Source Code"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Source</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs font-bold text-white dark:text-slate-950 bg-slate-950 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shadow-xs"
              title="Open Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Demo</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors ml-1 sm:ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-10 space-y-8 sm:space-y-10">
          {/* Title & Tagline */}
          <div className="space-y-2 sm:space-y-3">
            <div className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400">
              {project.year} · Production Engineering
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-sans max-w-2xl font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Interactive Mockup Preview */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <ProjectMockup project={project} interactive={true} />
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-slate-100/70 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800">
            {project.outcomes.map((metric, i) => (
              <div key={i} className="space-y-0.5 sm:space-y-1">
                <div className="text-xl sm:text-3xl font-display font-black text-slate-950 dark:text-white tabular-nums">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-semibold">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/30 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 text-sm font-bold">
                <ShieldAlert className="w-4 h-4" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-sm font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Architectural Solution</span>
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-base font-bold text-slate-950 dark:text-white">
              <Layers className="w-4 h-4 text-indigo-700 dark:text-indigo-400" />
              <span>System Architecture & Pipeline</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-slate-400 dark:hover:border-slate-700 transition-colors text-xs text-slate-800 dark:text-slate-200 leading-relaxed flex items-start gap-2.5 font-medium"
                >
                  <span className="font-mono text-indigo-700 dark:text-indigo-400 font-bold mt-0.5">0{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-base font-bold text-slate-950 dark:text-white">
              <Cpu className="w-4 h-4 text-indigo-700 dark:text-indigo-400" />
              <span>Key Technical Features</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 dark:bg-slate-200 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges Overcome */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-base font-bold text-slate-950 dark:text-white">
              <TrendingUp className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>Hard Engineering Constraints & Trade-Offs</span>
            </div>
            <ul className="space-y-2">
              {project.challenges.map((ch, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-lg bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900/60 text-xs text-amber-950 dark:text-amber-200 leading-relaxed font-medium"
                >
                  {ch}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-800 dark:text-slate-200">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md font-mono text-[11px] text-slate-900 dark:text-slate-100 transition-colors font-semibold border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Next Project Footer Switcher */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => onSelectProject(nextProject)}
              className="group flex items-center gap-3 text-left hover:opacity-80 transition cursor-pointer"
            >
              <div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold">NEXT PROJECT · {nextProject.number}</div>
                <div className="text-sm font-bold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {nextProject.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition cursor-pointer border border-slate-200 dark:border-slate-700"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
