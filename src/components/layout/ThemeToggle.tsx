import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onToggle}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
      title={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
      className="group relative flex items-center h-8 w-16 p-1 rounded-full bg-slate-200/80 dark:bg-slate-800/90 border border-slate-300/80 dark:border-slate-700/80 shadow-xs hover:shadow-sm backdrop-blur-md transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      {/* Background Icons */}
      <div className="w-full flex items-center justify-between px-1 text-slate-500 dark:text-slate-400 pointer-events-none">
        <Sun className={`w-3.5 h-3.5 transition-colors duration-200 ${!isDark ? 'text-amber-500 font-bold' : 'opacity-40'}`} />
        <Moon className={`w-3.5 h-3.5 transition-colors duration-200 ${isDark ? 'text-indigo-400 font-bold' : 'opacity-40'}`} />
      </div>

      {/* Sliding Tactile Thumb */}
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ease-out transform ${
          isDark
            ? 'translate-x-8 bg-indigo-950 border border-indigo-500/80 shadow-indigo-500/20'
            : 'translate-x-0 bg-white border border-amber-300 shadow-amber-500/20'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-indigo-300 fill-indigo-300/30" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-500/30" />
        )}
      </span>
    </button>
  );
};
