import React from 'react';
import { motion } from 'motion/react';

export interface ScrollRevealSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  threshold?: number;
}

/**
 * ScrollRevealSection
 *
 * A reusable, high-performance (60FPS) viewport-aware scroll reveal wrapper for section components.
 * Utilizes GPU-accelerated motion transforms (opacity, translateY, scale) with a tuned
 * cubic-bezier ease curve `[0.16, 1, 0.3, 1]` for ultra-smooth entrance transitions.
 *
 * Preserves 100% native cursor selectability (zero select-none constraints) and supports
 * customizable threshold triggers and transition delays.
 */
export const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
  id,
  className = '',
  delay = 0,
  threshold = 0.12,
}) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: threshold ?? 0.12 }}
      transition={{
        duration: 0.8,
        delay: delay ?? 0,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.section>
  );
};

export default ScrollRevealSection;
