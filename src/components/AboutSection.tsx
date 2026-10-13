import React from 'react';
import { PERSONAL_INFO, PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';
import { DeveloperLicenseBadge } from './DeveloperLicenseBadge';
import { GraduationCap, Compass, Terminal, ShieldCheck, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFDF9] dark:bg-[#120F0A] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300">
      {/* Subtle warm amber/antique paper studio ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-amber-200/40 dark:from-amber-900/25 via-orange-100/20 dark:via-orange-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-amber-200/25 dark:bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
            <span>03 / CREDENTIALS & IDENTITY</span>
            <span>·</span>
            <span>AUTHORIZED DEVELOPER SPECIFICATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] transition-colors">
            Engineering software with <br className="hidden sm:inline" />
            <span className="italic font-serif font-normal text-slate-800 dark:text-slate-300">uncompromising</span> discipline & human taste.
          </h2>
        </div>

        {/* Two-Column Grid: Left is the Creative License ID Badge, Right is the Narrative & Education */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Creative License Badge (From Reference 3: Licencia Creativa) */}
          <div className="lg:col-span-6 flex justify-center">
            <DeveloperLicenseBadge />
          </div>

          {/* Right Column: Bio Narrative & Education */}
          <div className="lg:col-span-6 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
            <p className="text-lg text-slate-950 dark:text-white font-medium leading-relaxed transition-colors">
              I am a computer science engineer and product designer who builds systems at the intersection of low-level speed and editorial typography.
            </p>

            <p>
              Pursuing my B.Tech in Computer Science & Engineering at the National Institute of Technology, I specialize in full-stack architecture: from writing WebAssembly Rust kernels and offline-first IndexedDB synchronization engines to crafting zero-runtime token design systems.
            </p>

            {/* Education Specimen Box */}
            <div className="p-6 rounded-2xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs space-y-3 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/60 font-bold shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base truncate">
                      {PERSONAL_INFO.education.degree}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono font-medium truncate">
                      {PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.period}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2.5 py-1 rounded-md border border-emerald-300 dark:border-emerald-800 font-bold self-start sm:self-auto shrink-0">
                  Graduating '26
                </span>
              </div>

              <div className="text-xs text-slate-700 dark:text-slate-300 font-sans pt-2 border-t border-slate-200 dark:border-slate-800">
                <strong className="text-slate-950 dark:text-white">Coursework:</strong> {PERSONAL_INFO.education.focus}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs transition-colors">
                <div className="text-2xl font-display font-black text-slate-950 dark:text-white tabular-nums">
                  1,500+
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold">GitHub Stars Across Open Source</div>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs transition-colors">
                <div className="text-2xl font-display font-black text-slate-950 dark:text-white tabular-nums">
                  &lt; 50ms
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold">Interaction Latency Standard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Principles Grid */}
        <div className="pt-10 border-t border-slate-300 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
            <Compass className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Core Engineering Values & Anti-Slop Principles</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="p-5 rounded-2xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs space-y-3 transition-colors"
              >
                <div className="font-mono text-xs font-black text-indigo-600 dark:text-indigo-400">
                  {principle.number}
                </div>
                <h4 className="font-display font-bold text-sm text-slate-950 dark:text-white">
                  {principle.title}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
