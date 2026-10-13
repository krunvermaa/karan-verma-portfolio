import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Cpu, Layers, Code, Sparkles, Filter, Check, Eye, Hash, ShieldCheck, ArrowRight, CornerDownRight } from 'lucide-react';

interface SkillsSectionProps {
  onSelectTechFilter?: (tech: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectTechFilter }) => {
  const [activeCategory, setActiveCategory] = useState<string>('languages');
  const [activeSkillIdx, setActiveSkillIdx] = useState<number>(0);

  const selectedCategoryData =
    SKILL_CATEGORIES.find((cat) => cat.id === activeCategory) || SKILL_CATEGORIES[0];

  const currentSkill = selectedCategoryData.skills[activeSkillIdx] || selectedCategoryData.skills[0];

  // Visual metadata for sticky notes (Image 1: Pinboard with push-pins, taped notes, strings)
  const stickyConfig: Record<string, {
    bg: string;
    border: string;
    text: string;
    label: string;
    pinColor: string;
    pinShadow: string;
    rotation: string;
    tapeOffset: string;
    noteBadge: string;
  }> = {
    languages: {
      bg: 'bg-[#FEF9C3] dark:bg-[#322E15]', // Canary Post-It
      border: 'border-[#FDE047] dark:border-[#854D0E]',
      text: 'text-amber-950 dark:text-amber-100',
      label: 'Languages & Core Systems',
      pinColor: 'bg-rose-500',
      pinShadow: 'shadow-rose-900/40',
      rotation: '-rotate-2 hover:rotate-0',
      tapeOffset: '-top-2.5 left-8',
      noteBadge: 'CORE COMPILERS',
    },
    frontend: {
      bg: 'bg-[#E0F2FE] dark:bg-[#0C2D48]', // Sky Post-It
      border: 'border-[#7DD3FC] dark:border-[#0369A1]',
      text: 'text-sky-950 dark:text-sky-100',
      label: 'Frontend Architecture & UI',
      pinColor: 'bg-sky-500',
      pinShadow: 'shadow-sky-900/40',
      rotation: 'rotate-2 hover:rotate-0',
      tapeOffset: '-top-2.5 right-8',
      noteBadge: 'SUB-50MS UI',
    },
    backend: {
      bg: 'bg-[#DCFCE7] dark:bg-[#0E3321]', // Mint Post-It
      border: 'border-[#86EFAC] dark:border-[#15803D]',
      text: 'text-emerald-950 dark:text-emerald-100',
      label: 'Backend & Distributed',
      pinColor: 'bg-emerald-500',
      pinShadow: 'shadow-emerald-900/40',
      rotation: '-rotate-1 hover:rotate-0',
      tapeOffset: '-top-2.5 left-12',
      noteBadge: 'PERSISTENCE & SYNC',
    },
    tooling: {
      bg: 'bg-[#FFE4E6] dark:bg-[#40121E]', // Rose Post-It
      border: 'border-[#FDA4AF] dark:border-[#9F1239]',
      text: 'text-rose-950 dark:text-rose-100',
      label: 'Tooling & CI/CD Pipelines',
      pinColor: 'bg-amber-500',
      pinShadow: 'shadow-amber-900/40',
      rotation: 'rotate-1 hover:rotate-0',
      tapeOffset: '-top-2.5 right-10',
      noteBadge: 'ZERO SLOP DX',
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FEFDF6] dark:bg-[#121108] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden select-none transition-colors duration-300"
    >
      {/* ========================================================================= */}
      {/* STUDIO SPOTLIGHT & GRAPH PAPER PINBOARD WALL (Warm Canary/Amber Tint) */}
      {/* ========================================================================= */}
      {/* Overhead Spotlight Beam */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-amber-200/40 dark:from-amber-900/25 via-yellow-100/20 dark:via-yellow-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-amber-200/20 dark:bg-amber-950/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Wall Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header with Stencil & Hand-Drawn Notes */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
              <span>05 / STUDIO WALL & PINBOARD</span>
              <span>·</span>
              <span>TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white uppercase transition-colors">
              Skills & Capabilities.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl font-sans transition-colors">
              Physical moodboard of foundational systems, frontend engines, and architectural contracts — pinned with zero-bloat guarantees.
            </p>
          </div>

          {/* Quick Annotation / Hand-Drawn Sketched Tag (Image 1) */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300 font-mono text-xs font-bold shadow-xs rotate-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>SUB-50MS LATENCY & TYPESCRIPT STRICT</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN STUDIO PINBOARD: STICKY NOTES (LEFT) + FOIL POUCH (RIGHT) */}
        {/* ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* --------------------------------------------------------------------- */}
          {/* LEFT COLUMN: THE TACTILE POST-IT STICKY NOTES WITH PUSH PINS (Image 1) */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider px-1 font-bold">
              <span>Pinned Domain Dossiers:</span>
              <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">
                Tap Note to Inspect
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {SKILL_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.id;
                const note = stickyConfig[cat.id] || stickyConfig.languages;

                return (
                  <div
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setActiveSkillIdx(0);
                    }}
                    className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border shadow-md hover:shadow-xl ${note.bg} ${note.border} ${note.rotation} ${
                      isSelected
                        ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-[1.02] z-20'
                        : 'opacity-85 hover:opacity-100 hover:scale-[1.01]'
                    }`}
                  >
                    {/* Washi / Masking Tape Strip on top */}
                    <div
                      className={`absolute ${note.tapeOffset} w-16 h-5 bg-amber-100/80 dark:bg-amber-200/20 backdrop-blur-xs border border-amber-300/60 dark:border-amber-400/30 transform -rotate-3 shadow-xs pointer-events-none z-10`}
                    />

                    {/* 3D Push Pin / Thumbtack with Specular Highlight (Image 1) */}
                    <div className="absolute top-2.5 right-3.5 z-20 flex items-center justify-center">
                      <div
                        className={`w-4 h-4 rounded-full ${note.pinColor} ${note.pinShadow} shadow-md border border-white/60 relative flex items-center justify-center`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/80 absolute top-0.5 left-0.5" />
                      </div>
                      {/* Cast shadow pin leg */}
                      <div className="absolute -bottom-1 -right-0.5 w-1.5 h-2 bg-slate-900/40 rounded-full blur-[1px]" />
                    </div>

                    {/* Note Content */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between pr-6">
                        <span className="text-[10px] font-mono font-black tracking-wider uppercase px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 text-slate-950 dark:text-white">
                          {note.noteBadge}
                        </span>
                        {isSelected && (
                          <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-indigo-700 dark:text-indigo-400">
                            <Check className="w-3 h-3" />
                            <span>ACTIVE</span>
                          </span>
                        )}
                      </div>

                      <h3 className={`font-display font-black text-lg sm:text-xl tracking-tight ${note.text}`}>
                        {cat.name}
                      </h3>

                      <p className="text-xs font-sans font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Skill Quick Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cat.skills.slice(0, 4).map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 font-mono text-[10px] font-bold text-slate-900 dark:text-slate-100"
                          >
                            {s.name}
                          </span>
                        ))}
                        {cat.skills.length > 4 && (
                          <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-800 dark:text-slate-200 font-bold">
                            +{cat.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: THE HOLOGRAPHIC BLISTER PACK / VACUUM POUCH (Images 2 & 3) */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#0D1117] text-white border-2 border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6 overflow-hidden">
              {/* Masking Tape on Upper-Left & Lower-Right Corners (Image 2) */}
              <div className="absolute -top-3 -left-6 w-24 h-7 bg-amber-200/70 dark:bg-amber-300/30 backdrop-blur-xs border border-amber-400/50 transform -rotate-45 shadow-xs pointer-events-none z-30" />
              <div className="absolute -bottom-3 -right-6 w-24 h-7 bg-amber-200/70 dark:bg-amber-300/30 backdrop-blur-xs border border-amber-400/50 transform -rotate-45 shadow-xs pointer-events-none z-30" />

              {/* Glossy Plastic Packaging Sheen Highlight */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-3xl" />

              {/* Pouch Header: Skills ® + Holographic Seal (Images 2 & 3) */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase">
                        Skills
                      </span>
                      <span className="font-mono text-xs font-bold text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/40 bg-amber-500/10">
                        ®
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-300 font-bold tracking-widest uppercase">
                      PACKAGING SPEC NO. #SKL-2026-NIT
                    </div>
                  </div>
                </div>

                {/* Iridescent Rainbow Holographic Foil Sticker (Image 2 & 3) */}
                <div className="relative group/holo cursor-pointer">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-pink-400 via-yellow-300 to-indigo-500 shadow-lg transform group-hover/holo:rotate-12 transition-transform duration-500">
                    <div className="w-full h-full rounded-full bg-[#111622] flex flex-col items-center justify-center text-center p-1 border border-white/20">
                      <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
                      <span className="font-mono text-[8px] font-black text-white tracking-tighter leading-none mt-0.5">
                        ORIGINAL
                      </span>
                      <span className="font-mono text-[7px] font-bold text-amber-300 tracking-widest leading-none">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Layer Token Chips (Select a skill to inspect) */}
              <div className="space-y-3 relative z-10">
                <div className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold flex items-center justify-between">
                  <span>Category Tokens ({selectedCategoryData.skills.length}):</span>
                  <span className="text-sky-300 font-mono text-xs font-bold">
                    Current: {currentSkill.name}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {selectedCategoryData.skills.map((skill, idx) => {
                    const isSelected = activeSkillIdx === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveSkillIdx(idx)}
                        className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-slate-800/90 border-sky-400 text-white shadow-md ring-1 ring-sky-400/60'
                            : 'bg-slate-900/60 hover:bg-slate-800/60 border-slate-800 text-slate-200 hover:text-white font-medium'
                        }`}
                      >
                        <div className="flex items-center justify-between pb-1">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isSelected ? 'bg-sky-400 animate-pulse' : 'bg-slate-500'
                            }`}
                          />
                          <span className="text-[10px] font-mono text-emerald-300 font-bold">
                            {skill.experience}
                          </span>
                        </div>
                        <div className="font-display font-bold text-xs sm:text-sm tracking-tight truncate">
                          {skill.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-300 font-semibold truncate">
                          {skill.level}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Skill Specimen Card & Contract Simulator */}
              <div className="p-5 rounded-2xl bg-[#161B26] border border-slate-700 space-y-4 relative z-10 shadow-inner">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center font-display font-extrabold text-sm shadow-md">
                      {currentSkill.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white">
                        {currentSkill.name}
                      </h4>
                      <p className="text-xs text-slate-300 font-mono font-medium">
                        Experience: {currentSkill.experience} · Status: {currentSkill.level}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-600 font-mono text-[10px] font-bold self-start sm:self-auto">
                    VERIFIED IN PRODUCTION
                  </span>
                </div>

                {/* Focus Description */}
                <div className="space-y-1 text-xs">
                  <div className="font-mono text-[10px] text-slate-300 uppercase tracking-widest font-bold">
                    Core Architectural Focus:
                  </div>
                  <div className="font-semibold text-white font-sans text-sm">
                    {currentSkill.focus}
                  </div>
                </div>

                {/* TypeScript Contract Sandbox Simulator */}
                <div className="p-3.5 rounded-xl bg-black text-slate-200 font-mono text-xs space-y-1 shadow-inner border border-slate-800 overflow-x-auto">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Code className="w-3 h-3" />
                      <span>contract.spec.ts</span>
                    </span>
                    <span className="text-sky-400 font-semibold">Strict Null Checks: ON</span>
                  </div>
                  <div className="text-emerald-400 pt-1">
                    export type <span className="text-white font-bold">{currentSkill.name.replace(/\s+/g, '')}Pipeline</span> = &#123;
                  </div>
                  <div className="pl-4 text-slate-300">
                    runtime: <span className="text-amber-300">"zero-bloat"</span>;
                  </div>
                  <div className="pl-4 text-slate-300">
                    subSystems: [{currentSkill.tags.map((t) => `"${t}"`).join(', ')}];
                  </div>
                  <div className="pl-4 text-slate-300">
                    verified: <span className="text-sky-400">true</span>;
                  </div>
                  <div className="text-emerald-400">&#125;;</div>
                </div>

                {/* Tags and Direct Filter Action */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {currentSkill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 font-mono text-[11px] text-slate-300 font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {onSelectTechFilter && (
                    <button
                      onClick={() => onSelectTechFilter(currentSkill.name)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-950 text-xs font-bold hover:bg-slate-200 transition cursor-pointer shadow-xs"
                    >
                      <span>Filter Projects</span>
                      <Filter className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Barcode & Bottom Metadata Footer (Image 2) */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-32 flex items-center gap-[1.5px]">
                    {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 4, 2, 1, 3, 1].map((w, i) => (
                      <div key={i} className="bg-slate-300 h-full" style={{ width: `${w}px` }} />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold">#2026-NIT-SKL</span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-bold">
                  <span>LANGUAGE: ENG (FLUENT) · HIN (NATIVE)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
