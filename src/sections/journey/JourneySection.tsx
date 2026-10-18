import React, { useState } from 'react';
import { JourneyMilestone } from '@/types';
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
  Award
} from 'lucide-react';

const ENRICHED_JOURNEY: JourneyMilestone[] = [
  {
    year: '2026—27',
    period: 'Current Office',
    role: 'Vice President, Student Council',
    organization: 'Mahakal Institute of Technology, Ujjain',
    category: 'Leadership',
    description: 'Elected Vice President of the Student Council following progressive service as Joint Secretary (2025–26) and Class Representative (2024–25). Leading institute-wide student governance, inter-club technical initiatives, and student advocacy.',
    achievements: [
      'Student Council Progression: Class Representative (24-25) → Joint Secretary (25-26) → Vice President (26-27)',
      'Heading student council governance across academic and extracurricular operations',
      'Anchored 35+ college ceremonies, building high-stakes institutional communication',
      'Coordinating campus-wide engineering symposiums and national hackathon delegations',
    ],
    color: '#8B5CF6',
  },
  {
    year: '2026',
    period: 'National Hackathons',
    role: '36-Hour National Hackathon Competitor',
    organization: 'HACKWAVE 3.0 · AGNITIA · .EXECUTE · ALGORUSH',
    category: 'Hackathon',
    description: 'Actively competed across prominent 36-hour national level hackathons in Madhya Pradesh, solving complex technical challenges under intense time constraints.',
    achievements: [
      'HACKWAVE 3.0: 36-hour national level hackathon at CDGI, Indore (Oct 2026)',
      'AGNITIA 2026: 36-hour national hackathon at PIEMR, Indore (Oct 2026)',
      '.EXECUTE: 36-hour national hackathon at NMIMS, Indore (Mar 2026)',
      'ALGORUSH: Bug fixing & code analysis competition at NMIMS, Indore (Mar 2026)',
      'Smart India Hackathon (SIH): Selected and competed in internal institutional rounds twice',
    ],
    color: '#F59E0B',
  },
  {
    year: '2025',
    period: 'Web3 & Community',
    role: 'Web3 Contributor & Technical Marketing Intern',
    organization: 'HACKTOUR IND · Arweave · Zcash · Avalanche',
    category: 'Hackathon',
    description: 'Content & Marketing Internship at HACKTOUR IND (Web3 company). Active contributor (@HackTourIND / @krunverma) across Web3 hackathons, developer meetups, and ecosystem initiatives.',
    achievements: [
      'Arweave / Permaweb Buildstation: Active participant in Agents of the Permaweb Hackathon',
      'Zcash India Meetups: Engaged in privacy-focused Web3 developer meetups and builder sessions',
      'Avalanche City Connect (Jaipur): Developer networking and Web3 ecosystem engagement',
      'Authored educational developer guides, technical breakdowns, and community growth funnels',
    ],
    color: '#EC4899',
  },
  {
    year: '2025',
    period: 'Jul — Aug 2025',
    role: 'Python Developer Intern',
    organization: 'IndusAI Solutions (MSME-registered)',
    category: 'Experience',
    description: 'Completed a 3-week production Python Developer internship at IndusAI Solutions (MSME-registered), earning official completion certification issued in August 2025.',
    achievements: [
      'Engineered automated Python data processing routines and backend validation logic',
      'Constructed modular data processing scripts with robust exception handling',
      'Earned MSME-registered internship completion certificate (Aug 2025)',
      'Achieved 99.9% data pipeline uptime across production validation jobs',
    ],
    color: '#10B981',
  },
  {
    year: '2025',
    period: 'National Selection',
    role: 'Dual Grant-in-Aid Selection (₹30 Lakh Combined)',
    organization: 'MSME Idea Hackathon 5.0 (2025)',
    category: 'Achievement',
    description: 'Two independent technological innovations selected for grant-in-aid consideration under MSME Idea Hackathon 5.0, with ₹15 Lakh indicated for each idea (₹30 Lakh combined).',
    achievements: [
      'Smart AI Based Agri Market Access Platform: ₹15 Lakh grant-in-aid indicated',
      'AI Based Real Time Navigation Platform for Railway Stations: ₹15 Lakh grant-in-aid indicated',
      'Team Members: Sourav Chaudhary, Sneha Patidar, Sneha Sharma, Karan Verma',
      'Confirmed via official MIT Group of Institutes Ujjain announcement',
    ],
    color: '#6366F1',
  },
  {
    year: '2025—26',
    period: 'Council Step 2',
    role: 'Joint Secretary & Prompt Engineering Lead',
    organization: 'Student Council & MGI Coding Club',
    category: 'Leadership',
    description: 'Elected Joint Secretary of the Student Council (promoted from Class Representative) while serving as Prompt Engineering Lead at MGI Coding Club.',
    achievements: [
      'Student Council Progression: Ascended from CR (2024–25) to Joint Secretary (2025–26)',
      'Organized and coordinated 20+ college events across multiple campus clubs',
      'Conducted prompt engineering and generative AI workshops for 500+ students',
      'Mentored junior students in technical communication and event management',
    ],
    color: '#0EA5E9',
  },
  {
    year: '2024—25',
    period: 'Council Step 1',
    role: 'Class Representative (CR) & Department Topper',
    organization: 'Mahakal Institute of Technology, Ujjain',
    category: 'Leadership',
    description: 'Elected Class Representative by first-year peers while sustaining college-topping academic performance across consecutive university semesters.',
    achievements: [
      'Student Council Progression: Elected Class Representative (2024–25), initiating 3-year council trajectory',
      'Semester 1: SGPA 8.48 (College Topper)',
      'Semester 2: SGPA 8.57 (College Topper)',
      'Semester 3: SGPA 8.54 (Runner-up)',
      'Served as primary academic liaison between faculty and 120+ CSE students',
    ],
    color: '#14B8A6',
  },
  {
    year: '2023—24',
    period: 'Academic Record',
    role: 'Academic Honors & National CEO Challenge',
    organization: 'CBSE & Masters’ Union The CEO Challenge',
    category: 'Education',
    description: 'Excelled in secondary education and national level case competitions before commencing undergraduate computer science engineering studies.',
    achievements: [
      'Masters’ Union The CEO Challenge (Jan 2023): Secured 12th position across India in Round 1; advanced to Round 2',
      'Higher Secondary Certificate (Class XII) | CBSE (2023–24): 93%',
      'Secondary School Certificate (Class X) | GSEB (2021–22): 88.7%',
    ],
    color: '#F43F5E',
  },
];

export const JourneySection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const activeMilestone = ENRICHED_JOURNEY[activeIdx] || ENRICHED_JOURNEY[0];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? ENRICHED_JOURNEY.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === ENRICHED_JOURNEY.length - 1 ? 0 : prev + 1));
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

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 lg:space-y-14 relative z-10">
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
              Chronological field records of elected student council progression, Web3 hackathons, and production engineering architectures.
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
        <div className="relative mx-auto max-w-4xl pt-4 sm:pt-8 pb-6 sm:pb-8">
          {/* --------------------------------------------------------------------- */}
          {/* MOBILE VIEW: INTUITIVE CARD CAROUSEL & SWIPE SWITCHER (<640px) */}
          {/* --------------------------------------------------------------------- */}
          <div className="sm:hidden space-y-3 pb-3">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between px-1 text-xs font-mono text-purple-300">
              <div className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                <span>MILESTONE CARD {activeIdx + 1} OF {ENRICHED_JOURNEY.length}</span>
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
              className="relative w-full rounded-3xl bg-[#181126] text-white border-2 border-purple-400/90 shadow-2xl shadow-purple-950/80 p-5 space-y-3 transition-all duration-300"
            >
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between border-b border-purple-900/80 pb-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-black text-purple-300">
                    {activeMilestone.year}
                  </span>
                  <span className="text-[10px] font-mono text-purple-400 font-bold">
                    {activeMilestone.period}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 font-mono text-[10px] font-bold uppercase">
                  {activeMilestone.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="space-y-1">
                <h3 className="font-display font-black text-base sm:text-lg text-white leading-tight">
                  {activeMilestone.role}
                </h3>
                <p className="text-xs font-semibold text-purple-300/90 font-sans">
                  {activeMilestone.organization}
                </p>
                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3 pt-1">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Bottom Verification Badge */}
              <div className="flex items-center justify-between pt-2 border-t border-purple-900/80">
                <span className="text-[10px] font-mono text-slate-400">
                  STAMP #{activeMilestone.year}-0{activeIdx + 1}
                </span>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>VERIFIED RECORD</span>
                </div>
              </div>
            </div>

            {/* Pagination Dots for Quick Jump across 8 Milestones */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {ENRICHED_JOURNEY.map((item, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Jump to milestone ${idx + 1}: ${item.year}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'w-7 bg-[#CCFF00] shadow-[0_0_8px_rgba(204,255,0,0.6)]'
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
            {ENRICHED_JOURNEY.map((item, idx) => {
              const isActive = activeIdx === idx;
              const totalCards = ENRICHED_JOURNEY.length;
              const centerIdx = (totalCards - 1) / 2;
              const xOffset = (idx - centerIdx) * 30;
              const rotation = (idx - centerIdx) * 2.8;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    transform: `translateX(${xOffset}px) translateY(${isActive ? -54 : 0}px) rotate(${isActive ? 0 : rotation}deg)`,
                    zIndex: isActive ? 25 : 10 - Math.abs(Math.round(centerIdx - idx)),
                  }}
                  className={`absolute bottom-0 w-72 md:w-80 h-76 md:h-80 rounded-3xl p-5 md:p-6 shadow-2xl transition-all duration-500 cursor-pointer border ${
                    isActive
                      ? 'bg-[#181126] text-white border-purple-400/90 shadow-purple-900/60 scale-105 ring-2 ring-purple-400/40'
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
                    <h3 className="font-display font-black text-base md:text-lg text-white leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-xs font-semibold text-purple-300/90 font-sans truncate">
                      {item.organization}
                    </p>
                    <p className="text-[11px] md:text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
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
                  <div className="w-8 h-8 rounded-xl bg-purple-500 text-white flex items-center justify-center shadow-md shrink-0">
                    {getCategoryIcon(activeMilestone.category)}
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-purple-200 uppercase tracking-wider block">
                      Active Boarding Pass
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-white">
                      Record {activeIdx + 1} of {ENRICHED_JOURNEY.length} · Class of {activeMilestone.year}
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
                  </div>

                  <h3 className="text-xl sm:text-3xl font-display font-black text-white tracking-tight pt-1">
                    {activeMilestone.role}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-purple-200 font-sans">
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
                    {activeMilestone.achievements.map((ach: string, aIdx: number) => (
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
              Verified by Academic, Government & Field Records
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
