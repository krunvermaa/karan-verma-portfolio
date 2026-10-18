import React from 'react';
import { Project } from '@/types';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onContact: () => void;
  onSelectProject?: (project: Project) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContact }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFF] dark:bg-[#080B15] text-theme-primary overflow-hidden transition-colors duration-300"
    >
      {/* Subtle electric indigo ambient studio lighting tint */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-indigo-300/35 dark:from-indigo-900/30 via-blue-200/20 dark:via-blue-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-purple-200/25 dark:bg-purple-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center items-center text-center space-y-5 sm:space-y-6 md:space-y-8 my-auto">
        {/* 3.1 Identity / Editorial Label */}
        <div className="flex flex-col items-center gap-1.5 pt-1">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.28em] text-slate-900 dark:text-white uppercase">
            KARAN VERMA
          </span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.22em] text-slate-600 dark:text-slate-400 uppercase font-semibold">
            A 19-YEAR-OLD BELIEVER & BUILDER
          </span>
        </div>

        {/* 3.2 Main Hero Headline */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto px-1 sm:px-4">
          <h1 className="text-[1.85rem] min-[360px]:text-[2.2rem] min-[420px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-display font-black tracking-tight text-slate-950 dark:text-white leading-[1.08] sm:leading-[1.02] md:leading-[0.98] uppercase break-words">
            <span className="block">I BUILD SOLUTIONS</span>
            <span className="block text-slate-800 dark:text-slate-200">
              THAT FEEL AS GOOD
            </span>
            <span className="block text-slate-950 dark:text-white">
              AS THEY WORK.
            </span>
          </h1>

          {/* 3.3 Professional Positioning */}
          <p className="font-mono text-[11px] min-[380px]:text-xs sm:text-sm md:text-base font-bold tracking-tight text-indigo-700 dark:text-indigo-400 uppercase px-2">
            UI/UX Designer · Software Developer · Educator
          </p>

          {/* 3.4 Supporting Description */}
          <p className="max-w-2xl mx-auto text-xs min-[380px]:text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 font-sans leading-relaxed font-normal px-2">
            Computer Science undergraduate at Mahakal Institute of Technology, Ujjain. Dual MSME 5.0 selections (₹30L combined), Co-Founder at Pro Learn Coaching Classes (50+ students guided over 3 years), and active campus leadership across 35+ events.
          </p>
        </div>

        {/* 4. Primary Actions */}
        <div className="flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center justify-center gap-3 sm:gap-4 pt-1 w-full max-w-xs min-[480px]:max-w-none px-4 min-[480px]:px-0">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={onExploreWork}
            className="w-full min-[480px]:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wider hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group min-h-[44px]"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={onContact}
            className="w-full min-[480px]:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-xs sm:text-sm font-bold tracking-wider border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer group min-h-[44px]"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 5. Capability Metadata */}
        <div className="pt-2 px-2">
          <span className="font-mono text-[9px] min-[360px]:text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.26em] text-slate-600 dark:text-slate-400 uppercase font-semibold block text-center">
            LEADERSHIP · DESIGNING · AI ENGINEERING
          </span>
        </div>
      </div>
    </section>
  );
};
