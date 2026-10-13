import React, { useState } from 'react';
import { JOURNEY, JourneyMilestone } from '../data/portfolioData';
import { Briefcase, Trophy, GraduationCap, GitBranch, CheckCircle2, Bookmark, Heart, Send, Sparkles, ChevronLeft, ChevronRight, Stamp } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const activeMilestone = JOURNEY[activeIdx] || JOURNEY[0];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? JOURNEY.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === JOURNEY.length - 1 ? 0 : prev + 1));
  };

  const getCategoryIcon = (category: JourneyMilestone['category']) => {
    switch (category) {
      case 'Experience':
        return <Briefcase className="w-3.5 h-3.5" />;
      case 'Hackathon':
        return <Trophy className="w-3.5 h-3.5" />;
      case 'Education':
        return <GraduationCap className="w-3.5 h-3.5" />;
      case 'Open Source':
        return <GitBranch className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section
      id="journey"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFBFE] dark:bg-[#0B0715] text-slate-900 dark:text-white relative overflow-hidden select-none transition-colors duration-300"
    >
      {/* ========================================================================= */}
      {/* LIGHT WHITE & VIBRANT PURPLE AMBIENT LIGHTING GLOWS */}
      {/* ========================================================================= */}
      {/* Top Ambient Violet Cone */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-purple-300/40 dark:from-purple-900/30 via-fuchsia-200/20 dark:via-fuchsia-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Purple/Lime Curved Vector Rays */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 800" fill="none">
          <path d="M-100 200 Q 500 700 1100 300" stroke="url(#purpleRay)" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M-50 400 Q 500 100 1050 500" stroke="url(#limeRay)" strokeWidth="1" />
          <defs>
            <linearGradient id="purpleRay" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="limeRay" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#84CC16" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* ========================================================================= */}
        {/* CONSISTENT SECTION HEADER (Matching Sections 01, 03, 05, 06) */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-purple-900/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">
              <span>04 / PROGRESSION & FIELD RECORDS</span>
              <span>·</span>
              <span>FLIGHT LOG & MILESTONE DOSSIER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white uppercase transition-colors">
              Flight Log & Milestones.
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-xl font-sans font-medium transition-colors">
              Chronological field records of production roles, hackathons, and systems architectures — preserved in an interactive studio folder.
            </p>
          </div>

          {/* Quick Annotation / Badge Tag */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-300 font-mono text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>2022 — 2026 CHRONOLOGY · VERIFIED</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTERPIECE: THE 3D FROSTED PURPLE GLASS POCKET FOLDER & FANNING FLYERS */}
        {/* ========================================================================= */}
        <div className="relative mx-auto max-w-4xl pt-14 pb-8">
          {/* --------------------------------------------------------------------- */}
          {/* FANNING FLYERS / CARDS PEEKING OUT OF THE FOLDER (Image Reference) */}
          {/* --------------------------------------------------------------------- */}
          <div className="relative w-full h-[320px] sm:h-[360px] flex items-end justify-center perspective-1000 -mb-28 z-0">
            {JOURNEY.map((item, idx) => {
              const isActive = activeIdx === idx;
              // Staggered rotation and offsets for fanning effect
              const rotations = [-12, -6, 0, 6, 12];
              const xOffsets = [-140, -70, 0, 70, 140];
              const rotation = rotations[idx % rotations.length];
              const xOffset = xOffsets[idx % xOffsets.length];

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    transform: `translateX(${xOffset}px) translateY(${isActive ? -40 : 0}px) rotate(${isActive ? 0 : rotation}deg)`,
                    zIndex: isActive ? 20 : 10 - Math.abs(2 - idx),
                  }}
                  className={`absolute bottom-0 w-64 sm:w-80 h-72 sm:h-80 rounded-3xl p-5 sm:p-6 shadow-2xl transition-all duration-500 cursor-pointer border select-none ${
                    isActive
                      ? 'bg-[#181126] text-white border-purple-400/80 shadow-purple-900/50 scale-105'
                      : 'bg-[#120B1E] text-slate-300 border-purple-900/60 opacity-80 hover:opacity-100 hover:scale-102'
                  }`}
                >
                  {/* Card Header Stamp */}
                  <div className="flex items-center justify-between border-b border-purple-900/80 pb-3">
                    <span className="font-mono text-2xl font-black text-purple-300">
                      {item.year}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 font-mono text-[10px] font-bold uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="pt-3 space-y-2">
                    <h3 className="font-display font-black text-base sm:text-lg text-white leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-xs font-semibold text-purple-300/90 font-sans">
                      {item.organization}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Badge */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between pt-2 border-t border-purple-900/80">
                    <span className="text-[10px] font-mono text-slate-400">
                      STAMP #{item.year}-0{idx + 1}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>VERIFIED</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* THE HUGE 3D FROSTED PURPLE GLASS POCKET FOLDER (Image Reference) */}
          {/* --------------------------------------------------------------------- */}
          <div className="relative z-30 rounded-[2.5rem] bg-gradient-to-b from-purple-600/30 via-purple-700/25 to-purple-900/40 dark:from-purple-900/40 dark:via-purple-950/40 dark:to-[#160B28]/60 backdrop-blur-2xl border-2 border-purple-300/40 dark:border-purple-500/30 shadow-[0_30px_70px_-15px_rgba(147,51,234,0.4)] p-6 sm:p-10 space-y-8 overflow-hidden">
            {/* Folder Tab Cutout on Top-Left */}
            <div className="absolute -top-7 left-8 sm:left-12 w-48 sm:w-56 h-8 rounded-t-2xl bg-purple-600/40 dark:bg-purple-900/50 backdrop-blur-2xl border-t-2 border-x-2 border-purple-300/40 dark:border-purple-500/30 flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-purple-200 uppercase tracking-widest">
                DOSSIER SPEC NO. #FLIGHT-2026
              </span>
            </div>

            {/* Specular Diagonal Sheen Highlight */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-[2.5rem]" />

            {/* Folder Front Details: Active Milestone Showcase */}
            <div className="relative z-10 space-y-6">
              {/* Top Navigation & Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-400/20 pb-4 text-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-500 text-white flex items-center justify-center shadow-md">
                    {getCategoryIcon(activeMilestone.category)}
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-purple-200 uppercase tracking-wider block">
                      Active Boarding Pass
                    </span>
                    <span className="font-display font-bold text-sm text-white">
                      Record {activeIdx + 1} of {JOURNEY.length} · Class of {activeMilestone.year}
                    </span>
                  </div>
                </div>

                {/* Step Cycler Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition border border-white/20 cursor-pointer shadow-xs"
                    title="Previous Milestone"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition border border-white/20 cursor-pointer shadow-xs"
                    title="Next Milestone"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Milestone Title & Core Achievements */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-white">
                      {activeMilestone.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-400/20 border border-purple-300/40 text-purple-200 font-mono text-xs font-bold">
                      {activeMilestone.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#CCFF00] text-slate-950 font-mono text-xs font-black">
                      {activeMilestone.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight pt-1">
                    {activeMilestone.role}
                  </h3>
                  <div className="text-sm font-semibold text-purple-200 font-sans">
                    {activeMilestone.organization}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-purple-100 font-sans leading-relaxed max-w-3xl">
                  {activeMilestone.description}
                </p>

                {/* Achievements Checklist with Glowing Bullets */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-[11px] font-bold text-purple-300 uppercase tracking-wider">
                    Verified Outcomes:
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {activeMilestone.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2.5 p-3 rounded-2xl bg-black/20 backdrop-blur-md border border-purple-400/20 text-xs sm:text-sm font-medium text-white"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Folder Bottom Row: "⊘ Sir Lasa Tech" style brand pill + Action Icons */}
              <div className="pt-4 border-t border-purple-400/20 flex flex-wrap items-center justify-between gap-4">
                {/* Brand Badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-purple-300/30 text-white font-mono text-xs font-bold shadow-inner">
                  <span className="text-purple-300">⊘</span>
                  <span>Karan Verma · Flight Log Registry</span>
                </div>

                {/* Social / Engagement Icons (Bookmark, Heart, Share) */}
                <div className="flex items-center gap-2 p-1 rounded-full bg-black/40 backdrop-blur-md border border-purple-300/30 shadow-inner">
                  <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-2 rounded-full transition-colors cursor-pointer ${
                      bookmarked ? 'text-amber-300 bg-amber-400/20' : 'text-purple-200 hover:text-white'
                    }`}
                    title="Bookmark Milestone"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setLiked(!liked)}
                    className={`p-2 rounded-full transition-colors cursor-pointer ${
                      liked ? 'text-rose-400 bg-rose-400/20' : 'text-purple-200 hover:text-white'
                    }`}
                    title="Approve Record"
                  >
                    <Heart className="w-4 h-4" fill={liked ? 'currentColor' : 'none'} />
                  </button>

                  <a
                    href="#contact"
                    className="p-2 rounded-full text-purple-200 hover:text-white transition-colors cursor-pointer"
                    title="Transmit Message"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BELOW FOLDER: 4 PREVIEW SQUARES (Matching the 4 Cards in Reference) */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-purple-300 font-bold uppercase tracking-wider px-1">
            <span>Archived Flight Specimens ({JOURNEY.length}):</span>
            <span className="text-purple-600 dark:text-purple-400 font-bold">
              Select card to expand
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {JOURNEY.slice(0, 4).map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-purple-900 text-white border-purple-400 shadow-lg scale-102 ring-2 ring-purple-400/50'
                      : 'bg-white dark:bg-purple-950/30 hover:bg-purple-50 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-900/60 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between pb-2">
                    <span className="font-mono text-xs font-black text-purple-600 dark:text-purple-300">
                      {item.year}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-[#CCFF00] animate-pulse' : 'bg-slate-400 dark:bg-slate-600'
                      }`}
                    />
                  </div>

                  <h4 className="font-display font-bold text-sm leading-snug truncate">
                    {item.role}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-600 dark:text-slate-300 truncate pt-0.5">
                    {item.organization}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM METADATA & COLOR SWATCHES BAR (Directly from Reference) */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-slate-200 dark:border-purple-900/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-purple-300">
          {/* Left: AI Image Generator / Recorder Info */}
          <div className="text-center md:text-left space-y-0.5">
            <span className="block text-[10px] text-slate-600 dark:text-slate-300 uppercase tracking-widest font-bold">
              FLIGHT RECORDER SPEC:
            </span>
            <span className="font-bold text-slate-900 dark:text-white">
              Verified by NIT & Git Commits
            </span>
          </div>

          {/* Center: Color Palette Swatch Pill (Image Reference) */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-white shadow-md border border-slate-800">
            <div className="w-3.5 h-3.5 rounded-full bg-[#181126] border border-white/20" title="Dark Purple" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#A855F7] border border-white/20" title="Electric Violet" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#CCFF00] border border-white/20" title="Lime Accent" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border border-white/20" title="Light White" />
            <span className="text-[10px] font-bold text-slate-300 pl-1 uppercase">AURA PALETTE</span>
          </div>

          {/* Right: Typeface Spec */}
          <div className="text-center md:text-right space-y-0.5">
            <span className="block text-[10px] text-slate-600 dark:text-slate-300 uppercase tracking-widest font-bold">
              TYPEFACE SPEC:
            </span>
            <span className="font-bold text-slate-900 dark:text-white">
              Whyte / Syne · Sub-50ms React 19
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
