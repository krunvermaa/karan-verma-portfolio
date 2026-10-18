import React, { useState } from 'react';
import { JourneyMilestone } from '@/types';
import { JOURNEY } from '@/data/portfolioData';
import {
  Briefcase,
  Trophy,
  GraduationCap,
  GitBranch,
  CheckCircle2,
  Bookmark,
  Heart,
  Send,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  BookOpen,
  Lightbulb,
} from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const activeMilestone: JourneyMilestone = JOURNEY[activeIdx] || JOURNEY[0];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? JOURNEY.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === JOURNEY.length - 1 ? 0 : prev + 1));
  };

  const minSwipeDistance = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Helper identifiers for highlighted milestones
  const isProLearn = (m: JourneyMilestone) =>
    m.organization.includes('PRO LEARN') || m.role.includes('Educator');

  const isIIC = (m: JourneyMilestone) =>
    m.organization.includes('Institution\'s Innovation Council') || m.organization.includes('IIC');

  const getCategoryIcon = (category: JourneyMilestone['category']) => {
    switch (category) {
      case 'Experience':
        return <Briefcase className="w-3.5 h-3.5" />;
      case 'Hackathon':
        return <Trophy className="w-3.5 h-3.5" />;
      case 'Education':
        return <GraduationCap className="w-3.5 h-3.5" />;
      case 'Leadership':
        return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'Achievement':
        return <Award className="w-3.5 h-3.5" />;
      case 'Open Source':
      default:
        return <GitBranch className="w-3.5 h-3.5" />;
    }
  };

  const getMilestoneIcon = (milestone: JourneyMilestone) => {
    if (isProLearn(milestone)) {
      return <BookOpen className="w-3.5 h-3.5" />;
    }
    if (isIIC(milestone)) {
      return <Lightbulb className="w-3.5 h-3.5" />;
    }
    return getCategoryIcon(milestone.category);
  };

  return (
    <section
      id="journey"
      className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFBFE] dark:bg-[#0B0715] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
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

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12 relative z-10">
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
              Chronological field records of elected student council progression, PRO LEARN coaching leadership, IIC startup incubation, Web3 hackathons, and production engineering architectures.
            </p>
          </div>

          {/* Quick Annotation / Badge Tag */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-300 font-mono text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>2023 — 2027 CHRONOLOGY · 10 VERIFIED RECORDS</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTERPIECE: THE 3D FROSTED PURPLE GLASS POCKET FOLDER & FANNING FLYERS */}
        {/* ========================================================================= */}
        <div className="relative mx-auto max-w-4xl pt-4 sm:pt-8 pb-6 sm:pb-8">
          {/* --------------------------------------------------------------------- */}
          {/* MOBILE VIEW: INTUITIVE CARD CAROUSEL & SWIPE SWITCHER (<640px) */}
          {/* --------------------------------------------------------------------- */}
          <div className="sm:hidden space-y-3 pb-3">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between px-1 text-xs font-mono text-purple-300">
              <div className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                <span>MILESTONE CARD {activeIdx + 1} OF {JOURNEY.length}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous milestone flyer"
                  className="p-1.5 rounded-lg bg-purple-900/50 border border-purple-500/40 text-white hover:bg-purple-800 transition cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next milestone flyer"
                  className="p-1.5 rounded-lg bg-purple-900/50 border border-purple-500/40 text-white hover:bg-purple-800 transition cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Mobile Active Card with Touch Swipe Support */}
            <div
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className={`relative w-full rounded-3xl text-white border-2 p-5 space-y-3 transition-all duration-300 ${
                isProLearn(activeMilestone)
                  ? 'bg-[#0c1f19] border-emerald-400/90 shadow-2xl shadow-emerald-950/80 ring-1 ring-emerald-400/30'
                  : isIIC(activeMilestone)
                  ? 'bg-[#211508] border-amber-400/90 shadow-2xl shadow-amber-950/80 ring-1 ring-amber-400/30'
                  : 'bg-[#181126] border-purple-400/90 shadow-2xl shadow-purple-950/80'
              }`}
            >
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between border-b border-purple-900/80 pb-3">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-mono text-2xl font-black ${
                      isProLearn(activeMilestone)
                        ? 'text-emerald-300'
                        : isIIC(activeMilestone)
                        ? 'text-amber-300'
                        : 'text-purple-300'
                    }`}
                  >
                    {activeMilestone.year}
                  </span>
                  <span className="text-[10px] font-mono text-purple-400 font-bold">
                    {activeMilestone.period}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap justify-end">
                  {isProLearn(activeMilestone) && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-mono text-[9px] font-black uppercase flex items-center gap-1">
                      <BookOpen className="w-2.5 h-2.5" />
                      <span>Co-Founder</span>
                    </span>
                  )}
                  {isIIC(activeMilestone) && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 font-mono text-[9px] font-black uppercase flex items-center gap-1">
                      <Lightbulb className="w-2.5 h-2.5" />
                      <span>IIC Lead</span>
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 font-mono text-[10px] font-bold uppercase">
                    {activeMilestone.category}
                  </span>
                </div>
              </div>

              {/* Special Highlight Callout for Pro Learn & IIC */}
              {isProLearn(activeMilestone) && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-bold">
                  <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse shrink-0" />
                  <span>3+ Years Teaching · Guided 50+ Students</span>
                </div>
              )}
              {isIIC(activeMilestone) && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-300 font-mono text-[11px] font-bold">
                  <Sparkles className="w-3 h-3 text-amber-400 animate-pulse shrink-0" />
                  <span>Student Coordinator · Startup Incubation & Innovation Drives</span>
                </div>
              )}

              {/* Card Content */}
              <div className="space-y-1">
                <h3 className="font-display font-black text-base sm:text-lg text-white leading-tight">
                  {activeMilestone.role}
                </h3>
                <p
                  className={`text-xs font-semibold font-sans ${
                    isProLearn(activeMilestone)
                      ? 'text-emerald-200'
                      : isIIC(activeMilestone)
                      ? 'text-amber-200'
                      : 'text-purple-300/90'
                  }`}
                >
                  {activeMilestone.organization}
                </p>
                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3 pt-1">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Bottom Verification Badge */}
              <div className="flex items-center justify-between pt-2 border-t border-purple-900/80">
                <span className="text-[10px] font-mono text-slate-400">
                  STAMP #{activeMilestone.year}-{activeIdx < 9 ? '0' : ''}{activeIdx + 1}
                </span>
                <div
                  className={`flex items-center gap-1 text-[10px] font-mono font-bold ${
                    isProLearn(activeMilestone)
                      ? 'text-emerald-400'
                      : isIIC(activeMilestone)
                      ? 'text-amber-400'
                      : 'text-emerald-400'
                  }`}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  <span>VERIFIED RECORD</span>
                </div>
              </div>
            </div>

            {/* Pagination Dots for Quick Jump across All 10 Milestones */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {JOURNEY.map((item, idx) => {
                const isSelected = activeIdx === idx;
                const isItemPro = isProLearn(item);
                const isItemCouncil = isIIC(item);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Jump to milestone ${idx + 1}: ${item.year} - ${item.role}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? isItemPro
                          ? 'w-7 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                          : isItemCouncil
                          ? 'w-7 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                          : 'w-7 bg-[#CCFF00] shadow-[0_0_8px_rgba(204,255,0,0.6)]'
                        : isItemPro
                        ? 'w-2 bg-emerald-400/60 hover:bg-emerald-300'
                        : isItemCouncil
                        ? 'w-2 bg-amber-400/60 hover:bg-amber-300'
                        : 'w-2 bg-purple-400/30 hover:bg-purple-300/60'
                    }`}
                    title={`${item.year} - ${item.role}`}
                  />
                );
              })}
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* TABLET & DESKTOP: FANNING FLYERS / CARDS PEEKING OUT OF THE FOLDER (>=640px) */}
          {/* --------------------------------------------------------------------- */}
          <div className="hidden sm:flex relative w-full h-[330px] md:h-[360px] items-end justify-center perspective-1000 -mb-12 md:-mb-14 z-10">
            {JOURNEY.map((item, idx) => {
              const isActive = activeIdx === idx;
              const isItemPro = isProLearn(item);
              const isItemCouncil = isIIC(item);
              const totalCards = JOURNEY.length;
              const centerIdx = (totalCards - 1) / 2;
              const xOffset = (idx - centerIdx) * 26;
              const rotation = (idx - centerIdx) * 2.2;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    transform: `translateX(${xOffset}px) translateY(${isActive ? -54 : 0}px) rotate(${isActive ? 0 : rotation}deg)`,
                    zIndex: isActive ? 40 : 20 - Math.abs(Math.round(centerIdx - idx)),
                  }}
                  className={`absolute bottom-0 w-72 md:w-80 h-76 md:h-80 rounded-3xl p-5 md:p-6 shadow-2xl transition-all duration-500 cursor-pointer border ${
                    isActive
                      ? isItemPro
                        ? 'bg-[#0c1f19] text-white border-emerald-400/90 shadow-emerald-900/60 scale-105 ring-2 ring-emerald-400/50'
                        : isItemCouncil
                        ? 'bg-[#211508] text-white border-amber-400/90 shadow-amber-900/60 scale-105 ring-2 ring-amber-400/50'
                        : 'bg-[#181126] text-white border-purple-400/90 shadow-purple-900/60 scale-105 ring-2 ring-purple-400/40'
                      : isItemPro
                      ? 'bg-[#0a1713] text-emerald-100 border-emerald-700/60 opacity-85 hover:opacity-100 hover:scale-102 hover:border-emerald-400/80'
                      : isItemCouncil
                      ? 'bg-[#170e06] text-amber-100 border-amber-700/60 opacity-85 hover:opacity-100 hover:scale-102 hover:border-amber-400/80'
                      : 'bg-[#120B1E] text-slate-300 border-purple-900/60 opacity-80 hover:opacity-100 hover:scale-102'
                  }`}
                >
                  {/* Card Header Stamp */}
                  <div className="flex items-center justify-between border-b border-purple-900/80 pb-3">
                    <span
                      className={`font-mono text-2xl font-black ${
                        isItemPro
                          ? 'text-emerald-300'
                          : isItemCouncil
                          ? 'text-amber-300'
                          : 'text-purple-300'
                      }`}
                    >
                      {item.year}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isItemPro && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-mono text-[9px] font-bold flex items-center gap-1">
                          <BookOpen className="w-2.5 h-2.5" />
                          <span>CO-FOUNDER</span>
                        </span>
                      )}
                      {isItemCouncil && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 font-mono text-[9px] font-bold flex items-center gap-1">
                          <Lightbulb className="w-2.5 h-2.5" />
                          <span>IIC LEAD</span>
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 font-mono text-[10px] font-bold uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-3 space-y-2">
                    <h3 className="font-display font-black text-base md:text-lg text-white leading-tight">
                      {item.role}
                    </h3>
                    <p
                      className={`text-xs font-semibold font-sans truncate ${
                        isItemPro
                          ? 'text-emerald-200'
                          : isItemCouncil
                          ? 'text-amber-200'
                          : 'text-purple-300/90'
                      }`}
                    >
                      {item.organization}
                    </p>
                    <p className="text-[11px] md:text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Badge */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between pt-2 border-t border-purple-900/80">
                    <span className="text-[10px] font-mono text-slate-400">
                      STAMP #{item.year}-{idx < 9 ? '0' : ''}{idx + 1}
                    </span>
                    <div
                      className={`flex items-center gap-1 text-[10px] font-mono font-bold ${
                        isItemPro
                          ? 'text-emerald-400'
                          : isItemCouncil
                          ? 'text-amber-400'
                          : 'text-emerald-400'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>VERIFIED</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* THE HUGE 3D FROSTED PURPLE GLASS POCKET FOLDER */}
          {/* --------------------------------------------------------------------- */}
          <div className="relative z-30 rounded-[2.5rem] bg-gradient-to-b from-purple-600/30 via-purple-700/25 to-purple-900/40 dark:from-purple-900/40 dark:via-purple-950/40 dark:to-[#160B28]/60 backdrop-blur-2xl border-2 border-purple-300/40 dark:border-purple-500/30 shadow-[0_30px_70px_-15px_rgba(147,51,234,0.4)] p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 overflow-hidden">
            {/* Folder Tab Cutout on Top-Left */}
            <div className="absolute -top-7 left-6 sm:left-12 w-48 sm:w-56 h-8 rounded-t-2xl bg-purple-600/40 dark:bg-purple-900/50 backdrop-blur-2xl border-t-2 border-x-2 border-purple-300/40 dark:border-purple-500/30 flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-purple-200 uppercase tracking-widest">
                DOSSIER SPEC NO. #FLIGHT-2026
              </span>
            </div>

            {/* Specular Diagonal Sheen Highlight */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-[2.5rem]" />

            {/* Folder Front Details: Active Milestone Showcase */}
            <div className="relative z-10 space-y-6">
              {/* Top Navigation & Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-400/20 pb-4 text-white">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-xl text-white flex items-center justify-center shadow-md shrink-0 transition-colors ${
                      isProLearn(activeMilestone)
                        ? 'bg-emerald-600'
                        : isIIC(activeMilestone)
                        ? 'bg-amber-600'
                        : 'bg-purple-500'
                    }`}
                  >
                    {getMilestoneIcon(activeMilestone)}
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-purple-200 uppercase tracking-wider block">
                      Active Boarding Pass
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-white">
                      Record {activeIdx + 1} of {JOURNEY.length} · Class of {activeMilestone.year}
                    </span>
                  </div>
                </div>

                {/* Step Cycler Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition border border-white/20 cursor-pointer shadow-xs"
                    title="Previous Milestone"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
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
                    {isProLearn(activeMilestone) && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/60 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-emerald-300 animate-pulse" />
                        <span>CO-FOUNDER & EDUCATOR · 3+ YRS · 50+ STUDENTS</span>
                      </span>
                    )}
                    {isIIC(activeMilestone) && (
                      <span className="px-3 py-1 rounded-full bg-amber-500/30 border border-amber-400/60 text-amber-300 font-mono text-xs font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                        <span>IIC & INCUBATION COORDINATOR</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-3xl font-display font-black text-white tracking-tight pt-1">
                    {activeMilestone.role}
                  </h3>
                  <div
                    className={`text-xs sm:text-sm font-semibold font-sans ${
                      isProLearn(activeMilestone)
                        ? 'text-emerald-200'
                        : isIIC(activeMilestone)
                        ? 'text-amber-200'
                        : 'text-purple-200'
                    }`}
                  >
                    {activeMilestone.organization}
                  </div>
                </div>

                <p className="text-xs sm:text-base text-purple-100 font-sans leading-relaxed max-w-3xl">
                  {activeMilestone.description}
                </p>

                {/* Achievements Checklist with Glowing Bullets */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-[11px] font-bold text-purple-300 uppercase tracking-wider">
                    Verified Outcomes:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeMilestone.achievements.map((ach: string, aIdx: number) => {
                      const isPro = isProLearn(activeMilestone);
                      const isCouncil = isIIC(activeMilestone);
                      return (
                        <div
                          key={aIdx}
                          className={`flex items-start gap-2.5 p-3 rounded-2xl bg-black/20 backdrop-blur-md border text-xs sm:text-sm font-medium text-white transition-colors ${
                            isPro
                              ? 'border-emerald-500/30'
                              : isCouncil
                              ? 'border-amber-500/30'
                              : 'border-purple-400/20'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPro
                                ? 'text-emerald-400'
                                : isCouncil
                                ? 'text-amber-400'
                                : 'text-[#CCFF00]'
                            }`}
                          />
                          <span>{ach}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Folder Bottom Row: Brand Pill + Action Icons */}
              <div className="pt-4 border-t border-purple-400/20 flex flex-wrap items-center justify-between gap-3">
                {/* Brand Badge */}
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/30 backdrop-blur-md border border-purple-300/30 text-white font-mono text-xs font-bold shadow-inner">
                  <span className="text-purple-300">⊘</span>
                  <span>Karan Verma · Flight Log Registry</span>
                </div>

                {/* Social / Engagement Icons (Bookmark, Heart, Share) */}
                <div className="flex items-center gap-2 p-1 rounded-full bg-black/40 backdrop-blur-md border border-purple-300/30 shadow-inner">
                  <button
                    type="button"
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-2 rounded-full transition-colors cursor-pointer ${
                      bookmarked ? 'text-amber-300 bg-amber-400/20' : 'text-purple-200 hover:text-white'
                    }`}
                    title="Bookmark Milestone"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
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
        {/* BOTTOM METADATA BAR */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-slate-200 dark:border-purple-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-purple-300">
          {/* Left: AI Image Generator / Recorder Info */}
          <div className="text-center sm:text-left space-y-0.5">
            <span className="block text-[10px] text-slate-600 dark:text-slate-300 uppercase tracking-widest font-bold">
              FLIGHT RECORDER SPEC:
            </span>
            <span className="font-bold text-slate-900 dark:text-white">
              2023 — 2027 Chronology · 10 Verified Field Records
            </span>
          </div>

          {/* Right: Typeface Spec */}
          <div className="text-center sm:text-right space-y-0.5">
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
