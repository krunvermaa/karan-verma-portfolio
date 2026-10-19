import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from 'motion/react';
import { ChevronDown, ArrowUp, Zap } from 'lucide-react';

export interface SmoothScrollIndicatorProps {
  /**
   * Section IDs to cycle through when clicked.
   * Defaults to the portfolio's standard sections.
   */
  sections?: string[];
  /**
   * Velocity threshold in pixels/second to trigger the dynamic kinetic active mode.
   * Default: 450 px/s.
   */
  velocityThreshold?: number;
  /**
   * Optional additional className for the outer positioning wrapper.
   */
  className?: string;
  /**
   * Optional callback fired when the user navigates by clicking the indicator.
   */
  onNavigate?: (targetSectionId: string) => void;
}

const DEFAULT_SECTIONS = [
  'home',
  'work',
  'about',
  'skills',
  'journey',
  'resume',
  'contact',
];

interface ChromaticSpark {
  id: number;
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  size: number;
  colorClass: string;
  duration: number;
  delay: number;
}

const CHROMATIC_SPARKS: ChromaticSpark[] = [
  { id: 1, initialX: -6, initialY: -4, targetX: -14, targetY: -16, size: 4, colorClass: 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]', duration: 0.9, delay: 0 },
  { id: 2, initialX: 42, initialY: -8, targetX: 50, targetY: -22, size: 5, colorClass: 'bg-fuchsia-400 shadow-[0_0_8px_#e879f9]', duration: 1.1, delay: 0.12 },
  { id: 3, initialX: 110, initialY: 30, targetX: 120, targetY: 40, size: 4, colorClass: 'bg-violet-400 shadow-[0_0_8px_#a78bfa]', duration: 1.0, delay: 0.2 },
  { id: 4, initialX: 180, initialY: -6, targetX: 192, targetY: -18, size: 5, colorClass: 'bg-amber-400 shadow-[0_0_8px_#fbbf24]', duration: 0.85, delay: 0.08 },
  { id: 5, initialX: 230, initialY: 28, targetX: 242, targetY: 38, size: 4, colorClass: 'bg-emerald-400 shadow-[0_0_8px_#34d399]', duration: 1.2, delay: 0.28 },
];

/**
 * SmoothScrollIndicator
 *
 * Kinetic Scroll Velocity & Floating Navigation Accelerator Component:
 * - Floating, sleek kinetic pill positioned bottom-right on desktop, bottom-left on mobile.
 * - Detects scroll velocity via `useVelocity(scrollY)`: dynamically expands when scrolling fast
 *   to show kinetic velocity telemetry with dynamic chromatic particle glow.
 * - Rests gracefully in an idle state: `SCROLL TELEMETRY // 60FPS SMOOTH`.
 * - Clicking smoothly navigates to the next section or returns to top if at end.
 * - High-contrast typography for both light mode and dark mode.
 * - Native cursor selectability preserved: zero `select-none` constraints.
 */
export const SmoothScrollIndicator: React.FC<SmoothScrollIndicatorProps> = ({
  sections = DEFAULT_SECTIONS,
  velocityThreshold = 450,
  className = '',
  onNavigate,
}) => {
  const { scrollY, scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Dynamic continuous chromatic glow linked to absolute scroll velocity (GPU accelerated)
  const glowOpacity = useTransform(
    scrollVelocity,
    [-1800, -500, 0, 500, 1800],
    [0.9, 0.4, 0, 0.4, 0.9]
  );

  const glowScale = useTransform(
    scrollVelocity,
    [-1800, -500, 0, 500, 1800],
    [1.18, 1.06, 0.96, 1.06, 1.18]
  );

  const [isKineticActive, setIsKineticActive] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [nextSectionId, setNextSectionId] = useState<string>('work');

  const kineticTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeStateRef = useRef(false);

  // Velocity listener for kinetic expansion and particle trigger
  useMotionValueEvent(scrollVelocity, 'change', (latest) => {
    const absVel = Math.abs(latest);

    if (absVel >= velocityThreshold) {
      if (kineticTimeoutRef.current) {
        clearTimeout(kineticTimeoutRef.current);
      }
      if (!activeStateRef.current) {
        activeStateRef.current = true;
        setIsKineticActive(true);
      }

      kineticTimeoutRef.current = setTimeout(() => {
        activeStateRef.current = false;
        setIsKineticActive(false);
      }, 450);
    } else if (absVel < 60 && activeStateRef.current) {
      if (kineticTimeoutRef.current) {
        clearTimeout(kineticTimeoutRef.current);
      }
      kineticTimeoutRef.current = setTimeout(() => {
        activeStateRef.current = false;
        setIsKineticActive(false);
      }, 180);
    }
  });

  // Section telemetry calculation
  const calculateNextSection = useCallback(() => {
    if (typeof window === 'undefined') {
      return { nextId: 'top', atEnd: false };
    }

    const currentScroll = window.scrollY;
    const viewportHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Near bottom threshold
    if (currentScroll + viewportHeight >= docHeight - 120) {
      return { nextId: 'top', atEnd: true };
    }

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        if (top > currentScroll + 120) {
          return { nextId: id, atEnd: false };
        }
      }
    }

    return { nextId: 'top', atEnd: true };
  }, [sections]);

  // Track progress changes
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const atEnd = progress >= 0.92;
    setIsAtEnd((prev) => (prev !== atEnd ? atEnd : prev));

    const { nextId } = calculateNextSection();
    setNextSectionId((prev) => (prev !== nextId ? nextId : prev));
  });

  useEffect(() => {
    const { nextId, atEnd } = calculateNextSection();
    setNextSectionId(nextId);
    setIsAtEnd(atEnd);

    return () => {
      if (kineticTimeoutRef.current) {
        clearTimeout(kineticTimeoutRef.current);
      }
    };
  }, [calculateNextSection]);

  // Click action: smooth scroll to next section or top
  const handleScrollAction = () => {
    if (typeof window === 'undefined') return;

    const { nextId, atEnd } = calculateNextSection();

    if (atEnd || nextId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onNavigate?.('home');
    } else {
      const targetEl = document.getElementById(nextId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        onNavigate?.(nextId);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onNavigate?.('home');
      }
    }
  };

  return (
    <div
      className={`fixed bottom-5 left-4 sm:left-auto sm:right-6 md:bottom-6 md:right-8 z-40 ${className}`}
    >
      <div className="relative flex items-center justify-center">
        {/* Continuous Dynamic Chromatic Glow (Driven by useVelocity) */}
        <motion.div
          style={{ opacity: glowOpacity, scale: glowScale }}
          aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 dark:from-purple-500 dark:via-fuchsia-500 dark:to-cyan-400 blur-md pointer-events-none transition-opacity duration-200"
        />

        {/* Pulsing kinetic aura when high velocity is active */}
        {isKineticActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: [0.45, 0.85, 0.45], scale: [1, 1.08, 1] }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
            className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 blur-lg pointer-events-none opacity-75"
          />
        )}

        {/* Floating Chromatic Particle Sparks */}
        {isKineticActive && (
          <div
            className="absolute inset-0 pointer-events-none overflow-visible"
            aria-hidden="true"
          >
            {CHROMATIC_SPARKS.map((spark) => (
              <motion.span
                key={spark.id}
                className={`absolute rounded-full ${spark.colorClass}`}
                initial={{
                  x: spark.initialX,
                  y: spark.initialY,
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  x: spark.targetX,
                  y: spark.targetY,
                  opacity: [0, 0.95, 0],
                  scale: [0.3, 1.35, 0.4],
                }}
                transition={{
                  duration: spark.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: spark.delay,
                }}
                style={{ width: spark.size, height: spark.size }}
              />
            ))}
          </div>
        )}

        {/* Kinetic Pill Button */}
        <motion.button
          layout
          onClick={handleScrollAction}
          type="button"
          aria-label={
            isKineticActive
              ? `Kinetic Velocity High. Click to scroll to ${isAtEnd ? 'top' : nextSectionId}`
              : `Scroll Telemetry 60FPS Smooth. Click to scroll to ${isAtEnd ? 'top' : nextSectionId}`
          }
          title={
            isAtEnd
              ? 'Click to scroll back to top'
              : `Click to scroll to next section (${nextSectionId.toUpperCase()})`
          }
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{
            layout: { type: 'spring', stiffness: 380, damping: 28 },
          }}
          className="group relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/95 dark:bg-[#0c101d]/95 backdrop-blur-xl border border-slate-300 dark:border-purple-500/40 shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(147,51,234,0.22)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 dark:focus-visible:ring-purple-400 overflow-hidden"
        >
          {/* Shimmer scan sweep on fast scroll */}
          {isKineticActive && (
            <motion.div
              initial={{ x: '-130%' }}
              animate={{ x: '230%' }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/40 dark:via-purple-300/25 to-transparent pointer-events-none rounded-full"
            />
          )}

          <AnimatePresence mode="wait" initial={false}>
            {isKineticActive ? (
              <motion.div
                key="kinetic-telemetry"
                initial={{ opacity: 0, y: 3, filter: 'blur(2px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -3, filter: 'blur(2px)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="flex items-center gap-2 relative z-10"
              >
                {/* Dynamic kinetic active icon */}
                <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/15 dark:bg-amber-400/20 text-amber-600 dark:text-amber-400">
                  <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
                </span>

                {/* Telemetry Text */}
                <div className="flex items-center gap-1.5 font-mono text-xs tracking-wider">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-fuchsia-600 to-purple-700 dark:from-amber-300 dark:via-fuchsia-400 dark:to-cyan-300">
                    VELOCITY: HIGH
                  </span>
                  <span className="text-slate-500 dark:text-purple-300 font-bold">·</span>
                  <span className="font-bold text-purple-700 dark:text-purple-300 tracking-widest animate-pulse">
                    KINETIC ACTIVE
                  </span>
                </div>

                {/* Navigation direction arrow */}
                <span className="flex items-center justify-center pl-0.5 text-slate-800 dark:text-purple-200">
                  {isAtEnd ? (
                    <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                  )}
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="idle-telemetry"
                initial={{ opacity: 0, y: 3, filter: 'blur(2px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -3, filter: 'blur(2px)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="flex items-center gap-2 relative z-10"
              >
                {/* 60FPS Status Radar Pulse */}
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 dark:bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-400" />
                </span>

                {/* Idle Telemetry Text */}
                <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs">
                  <span className="font-bold tracking-wider text-slate-900 dark:text-slate-100">
                    SCROLL TELEMETRY
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-mono">//</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400 tracking-wide">
                    60FPS SMOOTH
                  </span>
                </div>

                {/* Navigation direction arrow */}
                <span className="flex items-center justify-center pl-0.5 text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                  {isAtEnd ? (
                    <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                  )}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default SmoothScrollIndicator;
