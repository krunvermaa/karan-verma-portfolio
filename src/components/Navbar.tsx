import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onContactClick: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onContactClick,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Stack' },
    { id: 'journey', label: 'Journey' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-xs z-30 md:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-8 py-2.5 sm:py-4 transition-all duration-300 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
            scrolled
              ? 'glass-pill shadow-xs'
              : 'bg-transparent'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-display font-bold text-sm tracking-tight text-slate-900 dark:text-white transition-colors">
            karan verma
          </span>
        </a>

        {/* Zone 2: Center Nav Zone (Floating Pill with subtle blur) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full glass-pill shadow-xs transition-colors"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle & Primary Action */}
        <div className="hidden md:flex items-center gap-3">
          {/* Day / Night Mode Toggle */}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            onClick={onContactClick}
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-950 dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-full shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Actions Zone */}
        <div className="md:hidden flex items-center gap-2">
          {/* Day / Night Mode Toggle for Mobile */}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            onClick={onContactClick}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-950 rounded-full"
          >
            Talk
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 glass-pill rounded-full text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto mt-2 p-4 glass-panel rounded-2xl shadow-xl max-w-sm mx-auto animate-fadeIn border border-slate-200/80 dark:border-slate-800">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                  activeSection === item.id
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Available for Q4 2026 roles</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="px-3 py-1 text-xs font-semibold bg-emerald-600 text-white rounded-lg"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
      </header>
    </>
  );
};
