import React, { useState, useRef, useEffect } from 'react';
import { Project, PROJECTS } from '@/data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { ArrowUpRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface HangingCardsShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const HangingCardsShowcase: React.FC<HangingCardsShowcaseProps> = ({ onSelectProject }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Card tilts following the Astro clothesline curve on desktop: refined subtle angles
  const tiltAngles = [-4.5, -2, 0, 2, 4.5];
  const verticalOffsets = [10, 22, 28, 22, 10]; // Drooping curve offset

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="work" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F7FF] dark:bg-[#060D1A] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300">
      {/* Atmospheric Ambient Lighting Glows - Electric Cyan & Deep Cobalt/Sapphire Blue */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-cyan-400/35 dark:from-cyan-900/30 via-blue-300/25 dark:via-blue-950/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 sm:right-1/4 w-[700px] h-[350px] bg-gradient-to-tr from-blue-300/25 dark:from-indigo-950/20 via-cyan-300/20 to-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-24 w-[450px] h-[250px] bg-sky-200/20 dark:bg-cyan-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10 relative z-10">
        {/* Section Header (Astro aesthetic) */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-cyan-200/90 dark:border-cyan-800 shadow-2xs text-xs font-mono text-cyan-900 dark:text-cyan-300 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Interactive Clothesline · 2025-2026 Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08] transition-colors">
            Curated systems for <br />
            <span className="text-cyan-600 dark:text-cyan-400">performance</span> & scale.
          </h2>

          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 font-sans max-w-xl mx-auto transition-colors">
            Hover over any project on the wire to inspect its telemetry, or click to open the full technical case study.
          </p>

          {/* Mobile Swipe / Scroll Helper Navigation */}
          <div className="lg:hidden flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-surface border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition shadow-2xs cursor-pointer touch-manipulation"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold px-1">
              Swipe 5 Projects
            </span>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-surface border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition shadow-2xs cursor-pointer touch-manipulation"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Hanging Clothesline Curve & Cards */}
        <div
          ref={scrollContainerRef}
          className="relative pt-6 sm:pt-8 pb-10 sm:pb-12 overflow-x-auto lg:overflow-visible scrollbar-none snap-x snap-mandatory scroll-smooth"
        >
          {/* SVG Clothesline Wire Curve (ASTRO Reference) - visible on lg screens with cyan/blue ambient highlights */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-24 pointer-events-none z-0">
            <svg
              className="w-full h-full fill-none"
              preserveAspectRatio="none"
              viewBox="0 0 1200 80"
            >
              {/* Cyan/blue ambient highlight curve */}
              <path
                d="M 0,22 Q 600,85 1200,22"
                strokeWidth="5"
                className="stroke-cyan-400/25 dark:stroke-cyan-400/30"
              />
              {/* High-contrast dashed wire cable */}
              <path
                d="M 0,22 Q 600,85 1200,22"
                strokeWidth="2"
                strokeDasharray="5 3"
                className="stroke-slate-400 dark:stroke-slate-500"
              />
            </svg>
          </div>

          {/* Cards Array Suspended Along the Wire: Flexible on mobile, 5-col on desktop with generous end clearance */}
          <div className="flex lg:grid lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-3.5 xl:gap-5 relative z-10 items-start min-w-max lg:min-w-0 px-6 sm:px-8 lg:px-8 xl:px-12 py-3 sm:py-4">
            {/* Mobile/Tablet wire bar running behind all clothespins across the entire scrollable row */}
            <div className="lg:hidden absolute top-7 left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-300 dark:border-slate-700 shadow-[0_0_8px_rgba(6,182,212,0.35)] pointer-events-none z-0" />

            {PROJECTS.map((project, idx) => {
              // On mobile & tablet, keep rotation at 0 to avoid overlapping or clipping bounding boxes during swipe
              const tilt = isDesktop ? tiltAngles[idx % tiltAngles.length] : 0;
              const offset = isDesktop ? verticalOffsets[idx % verticalOffsets.length] : 14;
              const isHovered = hoveredId === project.id;

              return (
                <div
                  key={project.id}
                  style={{
                    transform: `translateY(${offset}px) rotate(${isHovered ? 0 : tilt}deg) scale(${isHovered ? 1.02 : 1})`,
                    transformOrigin: 'top center',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onSelectProject(project)}
                  className="cursor-pointer group relative flex flex-col items-center w-[255px] min-[360px]:w-[268px] sm:w-72 lg:w-full shrink-0 lg:shrink touch-manipulation snap-center"
                >
                  {/* The Cyan Clothesline Clip (ASTRO Reference) - High-contrast cyan with ambient highlights */}
                  <div className="w-4 h-7 rounded-xs bg-cyan-600 dark:bg-cyan-500 border border-cyan-700 dark:border-cyan-400 shadow-sm shadow-cyan-600/30 dark:shadow-cyan-400/30 ring-1 ring-cyan-400/25 dark:ring-cyan-300/30 flex flex-col items-center justify-between py-0.5 z-20 -mb-2.5 transition-transform group-hover:scale-110 group-hover:shadow-md group-hover:shadow-cyan-500/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-100 dark:bg-cyan-200 shadow-xs" />
                    <div className="w-2.5 h-0.5 bg-cyan-800 dark:bg-cyan-950" />
                  </div>

                  {/* The Hanging Card Box */}
                  <div className="w-full bg-white dark:bg-[#131722] rounded-2xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/40 dark:group-hover:border-cyan-400/40 shadow-md sm:shadow-lg dark:shadow-2xl group-hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-3">
                    {/* Visual Preview Frame */}
                    <div className="w-full h-32 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 relative">
                      <ProjectMockup project={project} />
                    </div>

                    {/* Card Metadata */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{project.number} / 05</span>
                        <span className="text-cyan-700 dark:text-cyan-300 font-bold bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/60 dark:border-cyan-800/60 px-1.5 py-0.5 rounded">{project.year}</span>
                      </div>
                      <h3 className="text-sm font-display font-bold text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-medium text-slate-700 dark:text-slate-300 min-h-[32px] gap-1.5">
                      <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 truncate max-w-[85px] min-[360px]:max-w-[100px] sm:max-w-[120px] lg:max-w-[85px] xl:max-w-[110px]">
                        {project.technologies[0]}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 font-semibold transition shrink-0 text-xs">
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Technology Verification Strip */}
        <div className="pt-5 sm:pt-6 border-t border-slate-300/80 dark:border-slate-800 flex flex-wrap items-center justify-around gap-4 sm:gap-6 text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest px-2">
          <span>Python 3 & Automation</span>
          <span className="text-cyan-500/50 dark:text-cyan-400/50 hidden sm:inline">·</span>
          <span>FastAPI & Microservices</span>
          <span className="text-cyan-500/50 dark:text-cyan-400/50 hidden sm:inline">·</span>
          <span>Spatial Graph Algorithms</span>
          <span className="text-cyan-500/50 dark:text-cyan-400/50 hidden sm:inline">·</span>
          <span>React 19 & Tailwind CSS</span>
          <span className="text-cyan-500/50 dark:text-cyan-400/50 hidden sm:inline">·</span>
          <span>Prompt Engineering Workflows</span>
        </div>
      </div>
    </section>
  );
};

