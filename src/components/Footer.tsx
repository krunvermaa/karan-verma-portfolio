import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface text-theme-primary border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        <div className="flex flex-col md:flex-row md:items-start lg:items-center justify-between gap-8">
          {/* Brand & Tagline */}
          <div className="space-y-2 max-w-sm">
            <span className="font-display font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
              karan verma
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              Computer Science Engineer & Software Developer. Undergraduate at Mahakal Institute of Technology, Ujjain with MSME 5.0 innovation recognition.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            <button
              onClick={() => onNavigate('work')}
              className="py-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="py-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="py-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Stack
            </button>
            <button
              onClick={() => onNavigate('journey')}
              className="py-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Journey
            </button>
            <button
              onClick={() => onNavigate('resume')}
              className="py-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="py-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Back to top */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-canvas hover:bg-black/5 dark:hover:bg-white/5 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200/60 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400 dark:text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Karan Verma. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition py-0.5"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition py-0.5"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.twitter || 'https://x.com/krunverma'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition py-0.5"
            >
              Twitter / X
            </a>
            <span className="hidden xs:inline">·</span>
            <span className="w-full text-center xs:w-auto xs:text-left">Zero AI Slop · Handcrafted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
