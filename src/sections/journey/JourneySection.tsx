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
    m.organization.includes("Institution's Innovation Council") || m.organization.includes('IIC');

  const getMilestoneShortLabel = (m: JourneyMilestone, idx: number) => {
    if (isProLearn(m)) return 'PRO LEARN';
    if (isIIC(m)) return 'IIC Lead';
    switch (idx) {
      case 0:
        return 'VP Council';
      case 1:
        return 'Hackathons';
      case 2:
        return 'IndusAI Intern';
      case 3:
        return 'HACKTOUR Web3';
      case 4:
        return 'MSME ₹30L';
      case 5:
        return 'Prompt Lead';
      case 6:
        return 'IIC Lead';
      case 7:
        return 'B.Tech Topper';
      case 8:
        return 'PRO LEARN';
      case 9:
        return 'Academic Honors';
      default:
        return m.role;
    }
  };

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
      className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF8FF] dark:bg-[#0E061B] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* ========================================================================= */}
      {/* ELECTRIC ROYAL PURPLE & AMETHYST ORCHID ATMOSPHERIC LIGHTING GLOWS */}
      {/* ========================================================================= */}
      {/* Top Ambient Violet Cone */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-purple-400/40 dark:from-purple-900/35 via-violet-300/25 dark:via-violet-950/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Bottom-right Amethyst Ambient Glow */}
      <div className="absolute -bottom-24 -right-24 w-[700px] h-[450px] bg-gradient-to-tr from-fuchsia-300/25 dark:from-purple-950/25 via-purple-300/20 to-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12 relative z-10">
        {/* ========================================================================= */}
        {/* CONSISTENT SECTION HEADER (Matching Sections 01, 03, 05, 06) */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-purple-200 dark:border-purple-900/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-400 font-bold uppercase tracking-wider">
              <span>04 / PROGRESSION & FIELD RECORDS</span>
              <span>·</span>
              <span>FLIGHT LOG & MILESTONE DOSSIER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white uppercase transition-colors">
              Flight Log & Milestones.
            </h2>
            <p className="text-sm sm:text-base text-slate-800 dark:text-purple-100 font-sans font-medium transition-colors max-w-xl">
              Chronological field records of elected student council progression, PRO LEARN coaching leadership, IIC startup incubation, Web3 hackathons, and production engineering architectures.
            </p>
          </div>

          {/* Quick Annotation / Badge Tag */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-100/80 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 text-purple-950 dark:text-purple-300 font-mono text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-700 dark:text-purple-400" />
            <span>2023 — 2027 CHRONOLOGY · 10 VERIFIED RECORDS</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTERPIECE: THE 3D FROSTED PURPLE GLASS POCKET FOLDER & MILESTONE DECK */}
        {/* ========================================================================= */}
        <div className="relative mx-auto max-w-4xl pt-2 sm:pt-4 pb-6 sm:pb-8">
          {/* --------------------------------------------------------------------- */}
          {/* MOBILE VIEW: INTUITIVE CARD CAROUSEL & SWIPE SWITCHER (<640px) */}
          {/* --------------------------------------------------------------------- */}
          <div className="sm:hidden space-y-3 pb-3">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between px-1 text-xs font-mono text-purple-800 dark:text-purple-300">
              <div className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-[#CCFF00] animate-pulse" />
                <span>MILESTONE CARD {activeIdx + 1} OF {JOURNEY.length}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous milestone flyer"
                  className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-purple-950 border border-purple-300/80 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 backdrop-blur-md transition cursor-pointer shadow-xs"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next milestone flyer"
                  className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-purple-950 border border-purple-300/80 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 backdrop-blur-md transition cursor-pointer shadow-xs"
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
              className={`relative w-full rounded-3xl p-5 space-y-3 transition-all duration-300 border-2 backdrop-blur-xl ${
                isProLearn(activeMilestone)
                  ? 'bg-white/90 text-slate-950 border-emerald-500/80 shadow-xl shadow-emerald-200/40 dark:bg-[#0c1f19]/85 dark:text-white dark:border-emerald-400/90 dark:shadow-2xl dark:shadow-emerald-950/80 ring-1 ring-emerald-400/30'
                  : isIIC(activeMilestone)
                  ? 'bg-white/90 text-slate-950 border-amber-500/80 shadow-xl shadow-amber-200/40 dark:bg-[#211508]/85 dark:text-white dark:border-amber-400/90 dark:shadow-2xl dark:shadow-amber-950/80 ring-1 ring-amber-400/30'
                  : 'bg-white/90 text-slate-950 border-purple-400/80 shadow-xl shadow-purple-200/40 dark:bg-[#181126]/85 dark:text-white dark:border-purple-400/90 dark:shadow-2xl dark:shadow-purple-950/80'
              }`}
            >
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-900/80 pb-3">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-mono text-2xl font-black ${
                      isProLearn(activeMilestone)
                        ? 'text-emerald-700 dark:text-emerald-300'
                        : isIIC(activeMilestone)
                        ? 'text-amber-700 dark:text-amber-300'
                        : 'text-purple-700 dark:text-purple-300'
                    }`}
                  >
                    {activeMilestone.year}
                  </span>
                  <span className="text-[10px] font-mono text-purple-700 dark:text-purple-400 font-bold">
                    {activeMilestone.period}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap justify-end">
                  {isProLearn(activeMilestone) && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-400/40 font-mono text-[9px] font-black uppercase flex items-center gap-1">
                      <BookOpen className="w-2.5 h-2.5" />
                      <span>Co-Founder</span>
                    </span>
                  )}
                  {isIIC(activeMilestone) && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-400/40 font-mono text-[9px] font-black uppercase flex items-center gap-1">
                      <Lightbulb className="w-2.5 h-2.5" />
                      <span>IIC Lead</span>
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-400/30 font-mono text-[10px] font-bold uppercase">
                    {activeMilestone.category}
                  </span>
                </div>
              </div>

              {/* Special Highlight Callout for Pro Learn & IIC */}
              {isProLearn(activeMilestone) && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/60 backdrop-blur-md border border-emerald-300/80 dark:border-emerald-500/40 text-emerald-950 dark:text-emerald-300 font-mono text-[11px] font-bold">
                  <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400 animate-pulse shrink-0" />
                  <span>3+ Years Teaching · Guided 50+ Students</span>
                </div>
              )}
              {isIIC(activeMilestone) && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/60 backdrop-blur-md border border-amber-300/80 dark:border-amber-500/40 text-amber-950 dark:text-amber-300 font-mono text-[11px] font-bold">
                  <Sparkles className="w-3 h-3 text-amber-600 dark:text-amber-400 animate-pulse shrink-0" />
                  <span>Student Coordinator · Startup Incubation & Innovation Drives</span>
                </div>
              )}

              {/* Card Content */}
              <div className="space-y-1">
                <h3 className="font-display font-black text-base sm:text-lg text-slate-950 dark:text-white leading-tight">
                  {activeMilestone.role}
                </h3>
                <p
                  className={`text-xs font-bold font-sans ${
                    isProLearn(activeMilestone)
                      ? 'text-emerald-800 dark:text-emerald-200'
                      : isIIC(activeMilestone)
                      ? 'text-amber-800 dark:text-amber-200'
                      : 'text-purple-800 dark:text-purple-200'
                  }`}
                >
                  {activeMilestone.organization}
                </p>
                <p className="text-xs text-slate-900 dark:text-purple-100 font-medium font-sans leading-relaxed line-clamp-3 pt-1">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Bottom Verification Badge */}
              <div className="flex items-center justify-between pt-2 border-t border-purple-200/80 dark:border-purple-900/80">
                <span className="text-[10px] font-mono text-slate-700 dark:text-purple-300/80">
                  STAMP #{activeMilestone.year}-{activeIdx < 9 ? '0' : ''}{activeIdx + 1}
                </span>
                <div
                  className={`flex items-center gap-1 text-[10px] font-mono font-bold ${
                    isProLearn(activeMilestone)
                      ? 'text-emerald-700 dark:text-emerald-400'
                      : isIIC(activeMilestone)
                      ? 'text-amber-700 dark:text-amber-400'
                      : 'text-purple-800 dark:text-purple-300'
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
                          ? 'w-7 bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                          : isItemCouncil
                          ? 'w-7 bg-amber-500 shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                          : 'w-7 bg-purple-600 dark:bg-[#CCFF00] shadow-[0_0_8px_rgba(147,51,234,0.6)] dark:shadow-[0_0_8px_rgba(204,255,0,0.6)]'
                        : isItemPro
                        ? 'w-2 bg-emerald-500/40 dark:bg-emerald-400/60 hover:bg-emerald-400'
                        : isItemCouncil
                        ? 'w-2 bg-amber-500/40 dark:bg-amber-400/60 hover:bg-amber-400'
                        : 'w-2 bg-purple-300 hover:bg-purple-400 dark:bg-purple-400/30 dark:hover:bg-purple-300/60'
                    }`}
                    title={`${item.year} - ${item.role}`}
                  />
                );
              })}
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* TABLET & DESKTOP: SPREAD OUT MILESTONE TAB STRIP & ELEVATED FLYER (>=640px) */}
          {/* --------------------------------------------------------------------- */}
          <div className="hidden sm:block space-y-4">
            {/* Horizontal Indexed Milestone Tab Strip / File Deck (100% visible & clickable) */}
            <div className="w-full">
              <div className="flex items-center justify-between gap-2 mb-2.5 px-1 text-xs font-mono">
                <div className="flex items-center gap-2 text-purple-900 dark:text-purple-300 font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-[#CCFF00] animate-pulse" />
                  <span>Milestone File Index · 10 Verified Records (2023 — 2027)</span>
                </div>
                <span className="text-[11px] text-purple-700 dark:text-purple-400 font-medium">
                  Direct Record Access · Click any tab
                </span>
              </div>

              {/* Spread-out 10-Milestone Tab Strip */}
              <div className="grid grid-cols-5 gap-2 p-1.5 rounded-2xl bg-purple-100/60 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/40 backdrop-blur-md">
                {JOURNEY.map((m, idx) => {
                  const isSelected = activeIdx === idx;
                  const isPro = isProLearn(m);
                  const isCouncil = isIIC(m);
                  const label = getMilestoneShortLabel(m, idx);

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`flex flex-col items-start gap-1 p-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? isPro
                            ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-500/30 ring-2 ring-emerald-400/50 -translate-y-0.5'
                            : isCouncil
                            ? 'bg-amber-600 text-white border-amber-400 shadow-md shadow-amber-500/30 ring-2 ring-amber-400/50 -translate-y-0.5'
                            : 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-600/30 ring-2 ring-purple-400/50 -translate-y-0.5'
                          : isPro
                          ? 'bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 hover:border-emerald-400'
                          : isCouncil
                          ? 'bg-amber-50/90 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border-amber-200/80 dark:border-amber-800/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 hover:border-amber-400'
                          : 'bg-white/80 dark:bg-[#150B24]/70 text-slate-800 dark:text-purple-200 border-purple-200/70 dark:border-purple-800/50 hover:bg-white dark:hover:bg-purple-900/50 hover:text-purple-950 dark:hover:text-white hover:border-purple-300'
                      }`}
                      title={`${m.year} - ${m.role} (${m.organization})`}
                    >
                      <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`p-1 rounded-md shrink-0 ${
                              isSelected
                                ? 'bg-white/20 text-white'
                                : isPro
                                ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300'
                                : isCouncil
                                ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300'
                                : 'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300'
                            }`}
                          >
                            {getMilestoneIcon(m)}
                          </span>
                          <span className="font-mono text-xs font-black tracking-tight">{m.year}</span>
                        </div>
                        <span className="text-[10px] font-mono opacity-80">#{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                      </div>
                      <span className="text-[11px] font-sans font-bold truncate w-full">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Elevated Active Milestone Card Peeking Elegantly into the Folder Pocket */}
            <div className="relative w-full flex items-center justify-center pt-2 -mb-10 sm:-mb-12 z-20">
              <div className="w-full flex items-center gap-2 sm:gap-4">
                {/* Previous Milestone Cycler Arrow */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous milestone flyer"
                  className="p-2.5 sm:p-3 rounded-2xl bg-white/80 dark:bg-purple-950/70 hover:bg-white dark:hover:bg-purple-900/90 text-purple-950 dark:text-white border border-purple-300/80 dark:border-purple-700/60 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                  title="Previous Milestone"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Elevated Active Milestone Card */}
                <div
                  className={`flex-1 rounded-3xl p-5 sm:p-6 shadow-2xl transition-all duration-300 border-2 backdrop-blur-2xl ${
                    isProLearn(activeMilestone)
                      ? 'bg-white/90 text-slate-950 border-emerald-500 shadow-emerald-200/50 dark:bg-[#0c1f19]/90 dark:text-white dark:border-emerald-400 dark:shadow-emerald-950/80 ring-2 ring-emerald-400/40'
                      : isIIC(activeMilestone)
                      ? 'bg-white/90 text-slate-950 border-amber-500 shadow-amber-200/50 dark:bg-[#211508]/90 dark:text-white dark:border-amber-400 dark:shadow-amber-950/80 ring-2 ring-amber-400/40'
                      : 'bg-white/90 text-slate-950 border-purple-400 shadow-purple-200/50 dark:bg-[#181126]/90 dark:text-white dark:border-purple-400 dark:shadow-purple-950/80 ring-2 ring-purple-400/40'
                  }`}
                >
                  {/* Card Header Stamp */}
                  <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-900/80 pb-3">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-mono text-2xl sm:text-3xl font-black ${
                          isProLearn(activeMilestone)
                            ? 'text-emerald-700 dark:text-emerald-300'
                            : isIIC(activeMilestone)
                            ? 'text-amber-700 dark:text-amber-300'
                            : 'text-purple-700 dark:text-purple-300'
                        }`}
                      >
                        {activeMilestone.year}
                      </span>
                      <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold">
                        {activeMilestone.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {isProLearn(activeMilestone) && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-400/40 font-mono text-[10px] font-black uppercase flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>Co-Founder</span>
                        </span>
                      )}
                      {isIIC(activeMilestone) && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-400/40 font-mono text-[10px] font-black uppercase flex items-center gap-1">
                          <Lightbulb className="w-3 h-3" />
                          <span>IIC Lead</span>
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-400/30 font-mono text-[10px] font-bold uppercase flex items-center gap-1">
                        {getMilestoneIcon(activeMilestone)}
                        <span>{activeMilestone.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-3 space-y-1.5">
                    <h3 className="font-display font-black text-lg sm:text-xl text-slate-950 dark:text-white leading-tight">
                      {activeMilestone.role}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm font-bold font-sans ${
                        isProLearn(activeMilestone)
                          ? 'text-emerald-800 dark:text-emerald-200'
                          : isIIC(activeMilestone)
                          ? 'text-amber-800 dark:text-amber-200'
                          : 'text-purple-800 dark:text-purple-200'
                      }`}
                    >
                      {activeMilestone.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-purple-100 font-medium font-sans leading-relaxed line-clamp-2">
                      {activeMilestone.description}
                    </p>
                  </div>

                  {/* Bottom Verification Badge */}
                  <div className="flex items-center justify-between pt-3 mt-2 border-t border-purple-200/80 dark:border-purple-900/80">
                    <span className="text-[10px] font-mono text-slate-700 dark:text-purple-300/80">
                      FILE RECORD #{activeMilestone.year}-{activeIdx < 9 ? '0' : ''}{activeIdx + 1}
                    </span>
                    <div
                      className={`flex items-center gap-1 text-[10px] font-mono font-bold ${
                        isProLearn(activeMilestone)
                          ? 'text-emerald-700 dark:text-emerald-400'
                          : isIIC(activeMilestone)
                          ? 'text-amber-700 dark:text-amber-400'
                          : 'text-purple-800 dark:text-purple-300'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>ELEVATED RECORD {activeIdx + 1} OF {JOURNEY.length}</span>
                    </div>
                  </div>
                </div>

                {/* Next Milestone Cycler Arrow */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next milestone flyer"
                  className="p-2.5 sm:p-3 rounded-2xl bg-white/80 dark:bg-purple-950/70 hover:bg-white dark:hover:bg-purple-900/90 text-purple-950 dark:text-white border border-purple-300/80 dark:border-purple-700/60 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                  title="Next Milestone"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* THE 3D FROSTED PURPLE GLASS POCKET FOLDER */}
          {/* --------------------------------------------------------------------- */}
          <div className="relative z-30 rounded-[2.5rem] bg-gradient-to-b from-purple-600/30 via-purple-700/25 to-purple-900/40 dark:from-purple-900/40 dark:via-purple-950/45 dark:to-[#160B28]/70 backdrop-blur-3xl border-2 border-purple-300/40 dark:border-purple-500/30 shadow-[0_30px_70px_-15px_rgba(147,51,234,0.35)] dark:shadow-[0_30px_70px_-15px_rgba(147,51,234,0.5)] ring-1 ring-white/20 dark:ring-white/10 p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 overflow-hidden">
            {/* Folder Tab Cutout on Top-Left */}
            <div className="absolute -top-7 left-6 sm:left-12 w-48 sm:w-56 h-8 rounded-t-2xl bg-purple-600/40 dark:bg-purple-900/60 backdrop-blur-2xl border-t-2 border-x-2 border-purple-300/50 dark:border-purple-500/40 text-purple-200 shadow-xs flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                DOSSIER SPEC NO. #FLIGHT-2026
              </span>
            </div>

            {/* Specular Diagonal Sheen Highlight */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-purple-400/10 pointer-events-none rounded-[2.5rem]" />

            {/* Folder Front Details: Active Milestone Showcase */}
            <div className="relative z-10 space-y-6">
              {/* Top Navigation & Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-300/30 dark:border-purple-400/20 pb-4 text-white">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-xl text-white flex items-center justify-center shadow-md shrink-0 transition-colors ${
                      isProLearn(activeMilestone)
                        ? 'bg-emerald-600 shadow-emerald-500/30'
                        : isIIC(activeMilestone)
                        ? 'bg-amber-600 shadow-amber-500/30'
                        : 'bg-purple-600 shadow-purple-500/30'
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
                    className="p-2 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-white border border-white/25 backdrop-blur-md transition cursor-pointer shadow-xs"
                    title="Previous Milestone"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-white border border-white/25 backdrop-blur-md transition cursor-pointer shadow-xs"
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
                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-purple-100 font-mono text-xs font-bold">
                      {activeMilestone.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white text-purple-950 dark:bg-[#CCFF00] dark:text-slate-950 font-mono text-xs font-black shadow-xs">
                      {activeMilestone.category.toUpperCase()}
                    </span>
                    {isProLearn(activeMilestone) && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/50 text-emerald-200 font-mono text-xs font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-emerald-300 animate-pulse" />
                        <span>CO-FOUNDER & EDUCATOR · 3+ YRS · 50+ STUDENTS</span>
                      </span>
                    )}
                    {isIIC(activeMilestone) && (
                      <span className="px-3 py-1 rounded-full bg-amber-500/30 border border-amber-400/50 text-amber-200 font-mono text-xs font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                        <span>IIC & INCUBATION COORDINATOR</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-3xl font-display font-black text-white tracking-tight pt-1">
                    {activeMilestone.role}
                  </h3>
                  <div
                    className={`text-xs sm:text-sm font-bold font-sans ${
                      isProLearn(activeMilestone)
                        ? 'text-emerald-300'
                        : isIIC(activeMilestone)
                        ? 'text-amber-300'
                        : 'text-purple-200'
                    }`}
                  >
                    {activeMilestone.organization}
                  </div>
                </div>

                <p className="text-xs sm:text-base text-purple-100 font-medium font-sans leading-relaxed max-w-3xl">
                  {activeMilestone.description}
                </p>

                {/* Achievements Checklist with High-Contrast Themed Badges */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-[11px] font-bold text-purple-200 uppercase tracking-wider">
                    Verified Outcomes:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeMilestone.achievements.map((ach: string, aIdx: number) => {
                      const isPro = isProLearn(activeMilestone);
                      const isCouncil = isIIC(activeMilestone);
                      return (
                        <div
                          key={aIdx}
                          className={`flex items-start gap-2.5 p-3 rounded-2xl border text-xs sm:text-sm font-medium transition-colors backdrop-blur-md shadow-2xs ${
                            isPro
                              ? 'bg-emerald-950/30 dark:bg-emerald-950/40 border-emerald-400/30 dark:border-emerald-500/40 text-emerald-100'
                              : isCouncil
                              ? 'bg-amber-950/30 dark:bg-amber-950/40 border-amber-400/30 dark:border-amber-500/40 text-amber-100'
                              : 'bg-white/10 dark:bg-purple-950/40 border-white/20 dark:border-purple-700/50 text-white dark:text-purple-100'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPro
                                ? 'text-emerald-400'
                                : isCouncil
                                ? 'text-amber-400'
                                : 'text-purple-300'
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
              <div className="pt-4 border-t border-purple-300/30 dark:border-purple-800/60 flex flex-wrap items-center justify-between gap-3 text-purple-200">
                {/* Brand Badge */}
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 dark:bg-purple-950/60 backdrop-blur-md border border-white/20 dark:border-purple-700/60 text-purple-100 font-mono text-xs font-bold shadow-xs">
                  <span className="text-purple-300">⊘</span>
                  <span>Karan Verma · Flight Log Registry</span>
                </div>

                {/* Social / Engagement Icons (Bookmark, Heart, Share) */}
                <div className="flex items-center gap-2 p-1 rounded-full bg-white/10 dark:bg-purple-950/60 backdrop-blur-md border border-white/20 dark:border-purple-700/60 text-purple-200 shadow-xs">
                  <button
                    type="button"
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-2 rounded-full transition-colors cursor-pointer ${
                      bookmarked
                        ? 'text-amber-300 bg-amber-400/20'
                        : 'text-purple-200 hover:text-white'
                    }`}
                    title="Bookmark Milestone"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setLiked(!liked)}
                    className={`p-2 rounded-full transition-colors cursor-pointer ${
                      liked
                        ? 'text-rose-400 bg-rose-400/20'
                        : 'text-purple-200 hover:text-white'
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
        <div className="pt-6 border-t border-purple-200 dark:border-purple-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-700 dark:text-purple-300">
          {/* Left: AI Image Generator / Recorder Info */}
          <div className="text-center sm:text-left space-y-0.5">
            <span className="block text-[10px] text-purple-800 dark:text-purple-300 uppercase tracking-widest font-bold">
              FLIGHT RECORDER SPEC:
            </span>
            <span className="font-bold text-slate-950 dark:text-white">
              2023 — 2027 Chronology · 10 Verified Field Records
            </span>
          </div>

          {/* Right: Typeface Spec */}
          <div className="text-center sm:text-right space-y-0.5">
            <span className="block text-[10px] text-purple-800 dark:text-purple-300 uppercase tracking-widest font-bold">
              TYPEFACE SPEC:
            </span>
            <span className="font-bold text-slate-950 dark:text-white">
              Whyte / Syne · Sub-50ms React 19
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
