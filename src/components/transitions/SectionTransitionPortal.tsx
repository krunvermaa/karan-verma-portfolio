import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export interface SectionTransitionPortalProps {
  fromSection: string;
  toSection: string;
  fromColor?: string; // e.g. '#6366F1' (Indigo)
  toColor?: string;   // e.g. '#06B6D4' (Cyan)
  indexLabel: string; // e.g. "01 // WORK → 02 // ABOUT"
  className?: string;
}

/**
 * SectionTransitionPortal
 *
 * An ultra-sleek, kinetic scroll conduit component positioned between portfolio sections.
 * Features:
 * - Specular dynamic laser hairline with dual continuous photon gliders and scroll-reactive physics.
 * - Glassmorphic telemetry pill with live pulsing energy beacon and activity frequency indicators.
 * - Hardware-accelerated 60FPS motion transforms responding dynamically to viewport scroll progress.
 * - High-contrast day/night rendering with zero select-none constraints (100% native cursor selectability).
 * - Optional smooth-scroll teleportation to destination section on pill click.
 */
export const SectionTransitionPortal: React.FC<SectionTransitionPortalProps> = ({
  fromSection,
  toSection,
  fromColor = '#6366F1',
  toColor = '#06B6D4',
  indexLabel,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Viewport scroll telemetry tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Inertial physics dampening for ultra-smooth kinetic response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  // Dynamic laser conduit expansion and glow modulation
  const beamScaleX = useTransform(smoothProgress, [0, 0.5, 1], [0.35, 1, 0.35]);
  const beamOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.25, 1, 1, 0.25]);
  const photonScrollX = useTransform(smoothProgress, [0, 1], ['-160%', '160%']);
  const auraOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.85, 0.2]);

  // Handle smooth scroll navigation when clicking telemetry badge
  const handleScrollToTarget = () => {
    if (!toSection) return;
    const cleanId = toSection.toLowerCase().replace(/[^a-z0-9_-]/g, '');
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      role="separator"
      aria-label={`Transition from ${fromSection} to ${toSection}`}
      className={`relative w-full h-16 sm:h-20 flex items-center justify-center overflow-hidden my-3 sm:my-5 ${className}`}
    >
      {/* 1. Ambient Specular Chromatic Aura */}
      <motion.div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{ opacity: auraOpacity }}
      >
        <div
          className="w-[420px] sm:w-[680px] h-12 rounded-full blur-2xl transition-all duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${fromColor}22 0%, ${toColor}15 50%, transparent 75%)`,
          }}
        />
      </motion.div>

      {/* 2. Base Structural Guide Track Hairline */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
        <div className="h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-slate-300/60 dark:via-slate-800/80 to-transparent" />
      </div>

      {/* 3. Kinetic Laser Conduit Beam */}
      <motion.div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none origin-center"
        style={{
          scaleX: beamScaleX,
          opacity: beamOpacity,
        }}
      >
        {/* Core dynamic specular hairline */}
        <div
          className="relative h-[1.5px] w-full max-w-2xl"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${fromColor}50 20%, ${toColor} 50%, ${fromColor}50 80%, transparent 100%)`,
            boxShadow: `0 0 10px 0.5px ${fromColor}33`,
          }}
        >
          {/* Scroll-driven Kinetic Photon Node */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-16 h-[3px] rounded-full blur-[0.5px] pointer-events-none"
            style={{
              x: photonScrollX,
              background: `linear-gradient(90deg, transparent, #FFFFFF, ${toColor}, transparent)`,
              boxShadow: `0 0 12px 2px ${toColor}`,
            }}
          />

          {/* Autonomous Looping Forward Energy Glider */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-24 h-[2px] rounded-full pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${fromColor}, ${toColor}, transparent)`,
            }}
            animate={{
              x: ['-220%', '220%'],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Autonomous Counter-Phase Energy Sparkle */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-14 h-[1.5px] rounded-full pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${toColor}, transparent)`,
            }}
            animate={{
              x: ['200%', '-200%'],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.2,
            }}
          />
        </div>
      </motion.div>

      {/* 4. Central Telemetry Pill Badge */}
      <motion.button
        type="button"
        onClick={handleScrollToTarget}
        whileHover={{ scale: 1.04, y: -0.5 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 450, damping: 28 }}
        title={`Navigate from ${fromSection} to ${toSection}`}
        className="relative z-10 group inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer
          bg-white/90 border-slate-200/90 shadow-[0_3px_14px_-2px_rgba(0,0,0,0.06),0_0_12px_-2px_rgba(99,102,241,0.12)] text-slate-800
          dark:bg-slate-900/90 dark:border-white/15 dark:shadow-[0_4px_20px_-3px_rgba(0,0,0,0.45),0_0_16px_-3px_rgba(99,102,241,0.28)] dark:text-slate-200
          hover:border-slate-300 dark:hover:border-white/30"
      >
        {/* Pulsing Energy Beacon Dot */}
        <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-75"
            style={{ backgroundColor: fromColor }}
          />
          <span
            className="relative w-1.5 h-1.5 rounded-full shadow-xs"
            style={{ backgroundColor: toColor }}
          />
        </span>

        {/* Index & Section Route Telemetry Label */}
        <span className="font-mono text-[10px] sm:text-[11.5px] font-semibold tracking-wider sm:tracking-widest uppercase transition-colors duration-200 group-hover:text-slate-950 dark:group-hover:text-white">
          {indexLabel}
        </span>

        {/* Dynamic Telemetry Waveform Bars */}
        <span className="flex items-center gap-[2.5px] shrink-0 pl-0.5 opacity-70 group-hover:opacity-100 transition-opacity">
          <motion.span
            className="w-[2px] rounded-full"
            style={{ backgroundColor: fromColor }}
            animate={{ height: ['4px', '10px', '4px'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="w-[2px] rounded-full"
            style={{ backgroundColor: toColor }}
            animate={{ height: ['8px', '4px', '8px'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
          <motion.span
            className="w-[2px] rounded-full"
            style={{ backgroundColor: fromColor }}
            animate={{ height: ['5px', '12px', '5px'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
        </span>
      </motion.button>
    </div>
  );
};

export default SectionTransitionPortal;
