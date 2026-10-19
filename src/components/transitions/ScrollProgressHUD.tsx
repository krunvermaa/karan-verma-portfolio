import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export interface SectionHUDItem {
  id: string;
  label: string;
  code: string;
}

export interface ScrollProgressHUDProps {
  /**
   * Optionally override active section from parent state.
   * If omitted, ScrollProgressHUD autonomously tracks the active section via viewport telemetry.
   */
  activeSection?: string;
  /**
   * Optional custom click-to-scroll handler.
   * If omitted, defaults to smooth scrolling the matching element by id.
   */
  onNavigate?: (sectionId: string) => void;
  /**
   * Optional custom className for the floating radar container.
   */
  className?: string;
}

export const SECTIONS: SectionHUDItem[] = [
  { id: 'home', label: 'Home', code: '01' },
  { id: 'work', label: 'Work', code: '02' },
  { id: 'about', label: 'About', code: '03' },
  { id: 'skills', label: 'Skills', code: '04' },
  { id: 'journey', label: 'Journey', code: '05' },
  { id: 'resume', label: 'Resume', code: '06' },
  { id: 'contact', label: 'Contact', code: '07' },
];

/**
 * ScrollProgressHUD
 *
 * Real-time scroll telemetry and spatial progress HUD:
 * 1. Top Specular Laser Progress Bar:
 *    - Pinned to the top viewport hairline (h-[2.5px], z-50)
 *    - Physics-driven spring damping on window scroll
 *    - Dynamic multi-chromatic spectrum matching section color accents
 *    - Ambient specular drop-glow
 * 2. Floating Minimal Telemetry Radar (MD+ screens):
 *    - Floating unobtrusive pill on the right-hand edge
 *    - Micro-tooltip teleportation showing section index & label
 *    - Active section spatial tracking with animated halo indicator
 *    - 100% accessible smooth navigation
 *
 * Full native text selection preserved (no user-select restrictions). High-contrast light/dark mode support.
 */
export const ScrollProgressHUD: React.FC<ScrollProgressHUDProps> = ({
  activeSection: propActiveSection,
  onNavigate,
  className = '',
}) => {
  // Spring-smoothed scroll progress for the top laser
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Autonomous active section telemetry if prop is not supplied
  const [internalActiveSection, setInternalActiveSection] = useState<string>('home');
  const currentActive = propActiveSection ?? internalActiveSection;

  useEffect(() => {
    if (propActiveSection !== undefined) return;

    const handleScrollTelemetry = () => {
      // Reached near bottom: snap to contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setInternalActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 220;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setInternalActiveSection(section.id);
            break;
          }
        }
      }
    };

    handleScrollTelemetry();
    window.addEventListener('scroll', handleScrollTelemetry, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollTelemetry);
  }, [propActiveSection]);

  const handleScrollTo = useCallback(
    (sectionId: string) => {
      if (onNavigate) {
        onNavigate(sectionId);
        return;
      }

      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [onNavigate]
  );

  return (
    <>
      {/* 1. Top Specular Laser Progress Bar */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-gradient-to-r from-indigo-500 via-cyan-400 via-orange-400 via-amber-400 via-purple-500 via-rose-500 to-indigo-500 origin-left shadow-[0_0_12px_rgba(99,102,241,0.6)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* 2. Floating Minimal Telemetry Radar (Tablet/Desktop >= 768px) */}
      <nav
        aria-label="Section Telemetry Radar"
        className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2.5 p-2 rounded-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg ${className}`}
      >
        {SECTIONS.map((section) => {
          const isActive = currentActive === section.id;

          return (
            <div
              key={section.id}
              className="relative group flex items-center justify-center"
            >
              {/* Micro-Tooltip */}
              <div
                role="tooltip"
                className="pointer-events-none absolute right-full mr-3.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 ease-out translate-x-2 group-hover:translate-x-0 group-focus-within:translate-x-0 z-50 flex items-center"
              >
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/95 dark:bg-slate-900/95 text-white dark:text-slate-100 shadow-xl border border-slate-700/60 dark:border-white/15 backdrop-blur-md whitespace-nowrap">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-indigo-400">
                    {section.code}
                  </span>
                  <span className="text-xs font-sans font-medium tracking-tight">
                    {section.label}
                  </span>
                </div>
                {/* Micro caret */}
                <div className="w-1.5 h-1.5 bg-slate-900/95 rotate-45 -ml-1 border-r border-t border-slate-700/60 dark:border-white/15" />
              </div>

              {/* Navigation Dot Button */}
              <button
                type="button"
                onClick={() => handleScrollTo(section.id)}
                aria-label={`Scroll to ${section.label} section`}
                aria-current={isActive ? 'true' : undefined}
                className="relative flex items-center justify-center w-5 h-5 rounded-full transition-transform duration-200 hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
              >
                {/* Indicator Dot */}
                <span
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2.5 h-2.5 bg-indigo-600 dark:bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.8)] ring-2 ring-indigo-500/30'
                      : 'w-1.5 h-1.5 bg-slate-400/80 dark:bg-slate-500/80 group-hover:bg-slate-700 dark:group-hover:bg-slate-200'
                  }`}
                />

                {/* Active Spatial Halo */}
                {isActive && (
                  <motion.span
                    layoutId="radar-active-halo"
                    className="absolute inset-0 rounded-full border border-indigo-500/60 dark:border-indigo-400/80 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  />
                )}
              </button>
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default ScrollProgressHUD;
