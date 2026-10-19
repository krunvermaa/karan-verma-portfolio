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
  Award,
  BookOpen,
  Lightbulb,
  Compass,
} from 'lucide-react';

/**
 * STRICT CHRONOLOGICAL FLIGHT RECORDER LOG (2023 — 2027)
 * 10 timestamped field records capturing the complete academic, leadership,
 * startup incubation, and engineering progression.
 */
export const CHRONOLOGICAL_FLIGHT_LOG: JourneyMilestone[] = [
  {
    year: '2023',
    period: 'Jan — Apr 2023',
    role: 'National Challenge & Schooling Rigor',
    organization: "Masters' Union CEO Challenge & Senior Secondary (CBSE)",
    category: 'Achievement',
    description:
      'Demonstrated early analytical rigor and strategic problem-solving at the national scale alongside top-tier high school academic performance.',
    achievements: [
      "All-India Rank 12 in Masters' Union The CEO Challenge (Round 1 out of thousands nationwide, advanced to Round 2)",
      'CBSE Class XII Higher Secondary Certificate: 93% with distinction in Mathematics & Computer Science',
      'Secondary School Certificate (GSEB Class X): 88.7% foundational academic merit',
      'Early foundation in analytical problem breakdown, business case logic, and quantitative thinking',
    ],
    color: '#F43F5E',
  },
  {
    year: '2023—Present',
    period: '3+ Years Co-Founder & Educator',
    role: 'Co-Founding Pro Learn Coaching Classes',
    organization: 'PRO LEARN COACHING CLASSES',
    category: 'Leadership',
    description:
      'Co-founded an independent educational institute delivering dedicated STEM education, conceptual mathematics, and academic mentorship to secondary and higher secondary students.',
    achievements: [
      'Mentored 50+ students over 3+ continuous years in foundational STEM, mathematics, and logical computing',
      'Architected customized curriculum tracks and continuous conceptual evaluation frameworks',
      'Cultivated analytical reasoning, exam discipline, and conceptual clarity in young aspiring engineers',
      'Managed student communication roadmaps, pedagogical standards, and community educational trust',
    ],
    color: '#10B981',
  },
  {
    year: '2024—25',
    period: 'Semester 1 · Year 1 Inception',
    role: 'B.Tech CSE Inception & Department Topper',
    organization: 'Mahakal Institute of Technology, Ujjain',
    category: 'Education',
    description:
      'Commenced undergraduate computer science engineering studies, establishing immediate academic leadership as #1 College Topper while elected Class Representative.',
    achievements: [
      'Semester 1 SGPA 8.48 — College & Department Topper in Computer Science and Engineering',
      'Elected Class Representative (CR) by peer consensus for B.Tech CSE cohort 2024–25',
      'Mastered foundational memory structures, C programming paradigms, and discrete computational structures',
      'Facilitated peer study circles and represented student academic feedback to institute faculty',
    ],
    color: '#14B8A6',
  },
  {
    year: '2025',
    period: 'Semester 2 & Student Governance',
    role: 'Academic Excellence Continuation',
    organization: 'Mahakal Institute of Technology, Ujjain',
    category: 'Education',
    description:
      'Maintained sustained academic dominance across consecutive semesters while elevating student governance responsibilities into the Student Council executive committee.',
    achievements: [
      'Semester 2 SGPA 8.57 — Sustained #1 College Topper standing across the engineering batch',
      'Semester 3 SGPA 8.54 — Department Runner-up with consistent top-tier percentile',
      'Elected Student Council Joint Secretary (2025–26) in recognition of academic and community leadership',
      'Deepened competencies in Object-Oriented C++, Standard Template Library, and algorithmic optimizations',
    ],
    color: '#8B5CF6',
  },
  {
    year: 'Summer 2025',
    period: 'Jul — Aug 2025',
    role: 'Production Python Engineering',
    organization: 'IndusAI Solutions (MSME Certified)',
    category: 'Experience',
    description:
      'Completed an intensive production Python developer internship at IndusAI Solutions, engineering automated backend data processing pipelines and validation logic.',
    achievements: [
      'Engineered automated batch ETL scripts and data ingestion pipelines in Python with robust error handling',
      'Constructed modular data processing routines and automated validation scripts reducing manual intervention',
      'Applied Git branching hygiene, automated CLI tooling, and MSME-certified industry engineering standards',
      'Earned official MSME-registered Internship Completion Certification (August 2025)',
    ],
    color: '#F59E0B',
  },
  {
    year: 'Autumn 2025',
    period: 'Jul — Nov 2025 · 5-Month Tenure',
    role: 'Web3 Ecosystem Strategy',
    organization: 'HACKTOUR IND (Web3 Global)',
    category: 'Experience',
    description:
      '5-month technical content and ecosystem growth internship at HACKTOUR IND, bridging decentralized protocols, developer communities, and ecosystem hackathons.',
    achievements: [
      'Contributor @HackTourIND driving engagement across Zcash India meetups and Arweave / Permaweb Buildstations',
      'Coordinated ecosystem initiatives around Avalanche City Connect and Web3 developer onboarding',
      'Authored technical documentation, protocol explainers, and educational guides for decentralized architectures',
      'Analyzed community velocity and campaign retention metrics across decentralized developer channels',
    ],
    color: '#EC4899',
  },
  {
    year: '2025',
    period: 'National Selection Stage',
    role: 'National MSME Idea Hackathon 5.0',
    organization: 'Ministry of MSME, Government of India',
    category: 'Achievement',
    description:
      'Achieved dual independent national selections under MSME Idea Hackathon 5.0 for high-impact civic and agricultural artificial intelligence platforms.',
    achievements: [
      'Dual selections evaluated for a combined ₹30 Lakh government grant-in-aid consideration',
      'Smart AI-Based Agri Market Access Platform: ₹15 Lakh indicated grant-in-aid for farmer price transparency',
      'AI-Based Real-Time Railway Station Navigation: ₹15 Lakh indicated grant-in-aid for multimodal indoor accessibility',
      'Vetted by government evaluation panels for technical feasibility, architectural viability, and societal impact',
    ],
    color: '#6366F1',
  },
  {
    year: '2025—26',
    period: 'Appointed Student Coordinator',
    role: 'Campus Innovation Governance',
    organization: "Institution's Innovation Council & Business Incubation Centre",
    category: 'Leadership',
    description:
      "Appointed Student Coordinator at the Institution's Innovation Council (IIC) and Business Incubation Centre at MIT Ujjain, fostering grassroots startup incubation and technical ideation.",
    achievements: [
      'Spearheaded entrepreneurship orientation sessions and interactive innovation quizzes for incoming engineering batches',
      'Facilitated startup incubation workshops linking aspiring student founders with faculty and ecosystem mentors',
      'Served as Prompt Engineering Lead at MGI Coding Club, teaching structured context optimization and prompt workflows',
      'Built bridges between academic theory and practical venture creation on campus',
    ],
    color: '#D97706',
  },
  {
    year: '2026—27',
    period: 'Executive Office (VP)',
    role: 'Apex Campus Leadership',
    organization: 'Student Council, Mahakal Institute of Technology',
    category: 'Leadership',
    description:
      'Elected Vice President of the Student Council—the apex student executive leadership role on campus—following a multi-year track record as Class Representative and Joint Secretary.',
    achievements: [
      'Directing student governance across all engineering departments, clubs, and institutional committees',
      'Orchestrated 20+ college events and anchored 35+ high-profile institutional ceremonies and symposiums',
      'Spearheaded institutional hackathon delegations, student advocacy initiatives, and campus cultural conventions',
      'Established institutional protocols for transparent inter-departmental communication and event coordination',
    ],
    color: '#9333EA',
  },
  {
    year: '2026—27',
    period: 'Active Flight Horizon',
    role: 'Engineering Flight Horizon',
    organization: 'Full-Stack Systems & AI Architectures',
    category: 'Open Source',
    description:
      'Directing engineering focus toward high-performance React 19 / TypeScript web applications, distributed AI systems, and competitive 36-hour hackathon endurance.',
    achievements: [
      'Active 36-hour national hackathon endurance: HACKWAVE 3.0 (CDGI), AGNITIA 2026 (PIEMR), .EXECUTE & ALGORUSH (NMIMS)',
      'Twice qualified in Smart India Hackathon (SIH) internal university selection rounds',
      'Scaling production full-stack systems with sub-50ms React 19 responsiveness, strict TypeScript, and Tailwind CSS tokens',
      'Architecting real-world problem-solving software merging edge AI inference with human-centric interfaces',
    ],
    color: '#06B6D4',
  },
];

export const JourneySection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const activeMilestone: JourneyMilestone =
    CHRONOLOGICAL_FLIGHT_LOG[activeIdx] || CHRONOLOGICAL_FLIGHT_LOG[0];

  const handlePrev = () => {
    setActiveIdx((prev) =>
      prev === 0 ? CHRONOLOGICAL_FLIGHT_LOG.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIdx((prev) =>
      prev === CHRONOLOGICAL_FLIGHT_LOG.length - 1 ? 0 : prev + 1
    );
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

  // Helper identifiers for specialized milestones
  const isProLearn = (m: JourneyMilestone) =>
    m.organization.includes('PRO LEARN') || m.role.includes('Pro Learn');

  const isIIC = (m: JourneyMilestone) =>
    m.organization.includes("Institution's Innovation Council") ||
    m.role.includes('Innovation Governance');

  const isVP = (m: JourneyMilestone) =>
    m.role.includes('Apex Campus Leadership');

  const isMSME = (m: JourneyMilestone) =>
    m.role.includes('MSME Idea Hackathon');

  const isHorizon = (m: JourneyMilestone) =>
    m.role.includes('Flight Horizon');

  const getMilestoneIcon = (milestone: JourneyMilestone) => {
    if (isProLearn(milestone)) return <BookOpen className="w-3.5 h-3.5" />;
    if (isIIC(milestone)) return <Lightbulb className="w-3.5 h-3.5" />;
    if (isVP(milestone)) return <ShieldCheck className="w-3.5 h-3.5" />;
    if (isMSME(milestone)) return <Trophy className="w-3.5 h-3.5" />;
    if (isHorizon(milestone)) return <Compass className="w-3.5 h-3.5" />;

    switch (milestone.category) {
      case 'Experience':
        return <Briefcase className="w-3.5 h-3.5" />;
      case 'Hackathon':
      case 'Achievement':
        return <Award className="w-3.5 h-3.5" />;
      case 'Education':
        return <GraduationCap className="w-3.5 h-3.5" />;
      case 'Leadership':
        return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'Open Source':
      default:
        return <GitBranch className="w-3.5 h-3.5" />;
    }
  };

  const getHighlightCallout = (m: JourneyMilestone) => {
    const purpleCalloutClass =
      'bg-purple-100/90 dark:bg-purple-950/60 border-purple-300/80 dark:border-purple-500/40 text-purple-950 dark:text-purple-300';
    const purpleCalloutIconClass =
      'w-3.5 h-3.5 text-purple-700 dark:text-purple-400 shrink-0';

    if (m.role.includes('Schooling Rigor')) {
      return {
        text: 'AIR 12 Masters’ Union CEO Challenge · CBSE 93%',
        icon: <Award className={purpleCalloutIconClass} />,
        colorClass: purpleCalloutClass,
      };
    }
    if (m.role.includes('Pro Learn')) {
      return {
        text: '3+ Years Teaching · Mentored 50+ Students in STEM',
        icon: <BookOpen className={purpleCalloutIconClass} />,
        colorClass: purpleCalloutClass,
      };
    }
    if (m.role.includes('Inception & Department Topper')) {
      return {
        text: 'Semester 1 SGPA 8.48 Topper · Elected Class Representative',
        icon: <GraduationCap className={purpleCalloutIconClass} />,
        colorClass: purpleCalloutClass,
      };
    }
    if (m.role.includes('Academic Excellence Continuation')) {
      return {
        text: 'Semester 2 SGPA 8.57 Topper · Student Council Joint Secretary',
        icon: <Award className={purpleCalloutIconClass} />,
        colorClass: purpleCalloutClass,
      };
    }
    if (m.role.includes('Production Python')) {
      return {
        text: 'IndusAI Solutions Internship · Automated ETL & Validation Pipelines',
        icon: <Briefcase className={purpleCalloutIconClass} />,
        colorClass: purpleCalloutClass,
      };
    }
    if (m.role.includes('Web3 Ecosystem')) {
      return {
        text: 'HACKTOUR IND 5-Mo Internship · Zcash & Arweave Ecosystems',
        icon: <GitBranch className={purpleCalloutIconClass} />,
        colorClass: purpleCalloutClass,
      };
    }
    if (m.role.includes('MSME Idea Hackathon')) {
      return {
        text: 'National MSME 5.0 Dual Selection · ₹30 Lakh Grant Evaluation',
        icon: <Trophy className={purpleCalloutIconClass} />,
        colorClass: purpleCalloutClass,
      };
    }
    if (m.role.includes('Innovation Governance')) {
      return {
        text: 'IIC Student Coordinator · Incubation Drives & Innovation Quizzes',
        icon: <Lightbulb className={purpleCalloutIconClass} />,
        colorClass: purpleCalloutClass,
      };
    }
    if (m.role.includes('Apex Campus Leadership')) {
      return {
        text: 'Elected Student Council VP · 20+ Events & 35+ Ceremonies Anchored',
        icon: <ShieldCheck className={purpleCalloutIconClass} />,
        colorClass: purpleCalloutClass,
      };
    }
    return {
      text: 'Active 36-Hr Hackathons & Production Full-Stack AI Horizons',
      icon: <Compass className={purpleCalloutIconClass} />,
      colorClass: purpleCalloutClass,
    };
  };

  const activeCallout = getHighlightCallout(activeMilestone);

  return (
    <section
      id="journey"
      className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF8FF] dark:bg-[#0E061B] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* ========================================================================= */}
      {/* ELECTRIC ROYAL PURPLE & AMETHYST ORCHID ATMOSPHERIC LIGHTING GLOWS */}
      {/* ZERO decorative vector curved rays/lines preserved */}
      {/* ========================================================================= */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-purple-400/40 dark:from-purple-900/35 via-violet-300/25 dark:via-violet-950/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[700px] h-[450px] bg-gradient-to-tr from-fuchsia-300/25 dark:from-purple-950/25 via-purple-300/20 to-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12 relative z-10">
        {/* ========================================================================= */}
        {/* CONSISTENT SECTION HEADER (04 / PROGRESSION & FIELD RECORDS) */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-purple-200 dark:border-purple-900/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-400 font-bold uppercase tracking-wider">
              <span>04 / PROGRESSION & FIELD RECORDS</span>
              <span>·</span>
              <span>CHRONOLOGICAL FLIGHT LOG 2023—2027</span>
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
        {/* CENTERPIECE: THE 3D FROSTED PURPLE GLASS POCKET FOLDER & FANNING FLYERS */}
        {/* ========================================================================= */}
        <div className="relative mx-auto max-w-4xl pt-4 sm:pt-8 pb-6 sm:pb-8">
          {/* --------------------------------------------------------------------- */}
          {/* MOBILE VIEW: CARD CAROUSEL & SWIPE SWITCHER (<640px) */}
          {/* --------------------------------------------------------------------- */}
          <div className="sm:hidden space-y-3 pb-3">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between px-1 text-xs font-mono text-purple-800 dark:text-purple-300">
              <div className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-[#CCFF00] animate-pulse" />
                <span>
                  RECORD {activeIdx + 1 < 10 ? '0' : ''}{activeIdx + 1} OF {CHRONOLOGICAL_FLIGHT_LOG.length}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous milestone record"
                  className="p-1.5 rounded-lg bg-purple-100 hover:bg-purple-200 text-slate-950 border border-purple-300 dark:bg-purple-900/40 dark:border-purple-700/50 dark:text-white dark:hover:bg-purple-800/60 transition cursor-pointer shadow-xs"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next milestone record"
                  className="p-1.5 rounded-lg bg-purple-100 hover:bg-purple-200 text-slate-950 border border-purple-300 dark:bg-purple-900/40 dark:border-purple-700/50 dark:text-white dark:hover:bg-purple-800/60 transition cursor-pointer shadow-xs"
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
              className="relative w-full rounded-3xl p-5 space-y-3 transition-all duration-300 border-2 transform-gpu bg-white/95 dark:bg-[#181126]/95 text-slate-950 dark:text-white border-purple-500/80 dark:border-purple-400/90 shadow-xl shadow-purple-300/30 dark:shadow-purple-950/60 ring-2 ring-purple-400/50"
            >
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-900/80 pb-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-black text-purple-700 dark:text-purple-300">
                    {activeMilestone.year}
                  </span>
                  <span className="text-[10px] font-mono text-purple-700 dark:text-purple-400 font-bold">
                    {activeMilestone.period}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap justify-end">
                  <span className="px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-400/30 font-mono text-[10px] font-bold uppercase">
                    {activeMilestone.category}
                  </span>
                </div>
              </div>

              {/* Callout Highlight Banner */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-mono text-[11px] font-bold ${activeCallout.colorClass}`}
              >
                {activeCallout.icon}
                <span>{activeCallout.text}</span>
              </div>

              {/* Card Content */}
              <div className="space-y-1">
                <h3 className="font-display font-black text-base sm:text-lg text-slate-950 dark:text-white leading-tight">
                  {activeMilestone.role}
                </h3>
                <p className="text-xs font-bold font-sans text-purple-900 dark:text-purple-300">
                  {activeMilestone.organization}
                </p>
                <p className="text-xs text-slate-900 dark:text-purple-100 font-medium font-sans leading-relaxed line-clamp-3 pt-1">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Bottom Verification Badge */}
              <div className="flex items-center justify-between pt-2 border-t border-purple-200/80 dark:border-purple-900/80">
                <span className="text-[10px] font-mono text-slate-700 dark:text-purple-300/80 font-bold">
                  RECORD #{activeIdx + 1 < 10 ? '0' : ''}{activeIdx + 1} · LOG {activeMilestone.year}
                </span>
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-purple-800 dark:text-purple-300">
                  <CheckCircle2 className="w-3 h-3 text-purple-700 dark:text-purple-400" />
                  <span>VERIFIED RECORD</span>
                </div>
              </div>
            </div>

            {/* Pagination Dots for Quick Jump across All 10 Milestones */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {CHRONOLOGICAL_FLIGHT_LOG.map((item, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Jump to record ${idx + 1}: ${item.year} - ${item.role}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'w-7 bg-purple-600 dark:bg-purple-400 shadow-[0_0_8px_rgba(147,51,234,0.6)] dark:shadow-[0_0_8px_rgba(192,132,252,0.6)]'
                        : 'w-2 bg-purple-300 hover:bg-purple-400 dark:bg-purple-800 dark:hover:bg-purple-700'
                    }`}
                    title={`Record ${idx + 1}: ${item.year} - ${item.role}`}
                  />
                );
              })}
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* TABLET & DESKTOP: FANNING FLYERS / CARDS PEEKING OUT OF THE FOLDER (>=640px) */}
          {/* --------------------------------------------------------------------- */}
          <div className="hidden sm:flex relative w-full h-[330px] md:h-[360px] items-end justify-center perspective-1000 -mb-12 md:-mb-14 z-10">
            {CHRONOLOGICAL_FLIGHT_LOG.map((item, idx) => {
              const isActive = activeIdx === idx;

              const totalCards = CHRONOLOGICAL_FLIGHT_LOG.length;
              const centerIdx = (totalCards - 1) / 2;
              const xOffset = (idx - centerIdx) * 26;
              const rotation = (idx - centerIdx) * 2.2;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    transform: `translateX(${xOffset}px) translateY(${
                      isActive ? -54 : 0
                    }px) rotate(${isActive ? 0 : rotation}deg)`,
                    zIndex: isActive
                      ? 40
                      : 20 - Math.abs(Math.round(centerIdx - idx)),
                    willChange: 'transform',
                  }}
                  className={`absolute bottom-0 w-72 md:w-80 h-76 md:h-80 rounded-3xl p-5 md:p-6 transition-all duration-500 cursor-pointer transform-gpu will-change-transform ${
                    isActive
                      ? 'bg-white/95 dark:bg-[#181126]/95 border-2 border-purple-500/80 dark:border-purple-400/90 shadow-xl shadow-purple-300/30 dark:shadow-purple-950/60 ring-2 ring-purple-400/50 scale-105 transform-gpu text-slate-950 dark:text-white'
                      : 'bg-white/85 dark:bg-[#140C20]/85 border border-purple-200/80 dark:border-purple-900/60 opacity-90 hover:opacity-100 hover:scale-102 hover:border-purple-400 shadow-md transform-gpu text-slate-900 dark:text-purple-100'
                  }`}
                >
                  {/* Card Header Stamp */}
                  <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-900/80 pb-3">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono text-2xl font-black text-purple-700 dark:text-purple-300">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-purple-100/80 dark:bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-300/80 dark:border-purple-400/30 font-mono text-[9px] font-bold uppercase">
                        REC #{idx + 1 < 10 ? '0' : ''}{idx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-400/30 font-mono text-[10px] font-bold uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-3 space-y-2">
                    <h3 className="font-display font-black text-base md:text-lg text-slate-950 dark:text-white leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-xs font-bold font-sans truncate text-purple-900 dark:text-purple-300">
                      {item.organization}
                    </p>
                    <p className="text-[11px] md:text-xs text-slate-900 dark:text-purple-100 font-medium font-sans leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Badge */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between pt-2 border-t border-purple-200/80 dark:border-purple-900/80">
                    <span className="text-[10px] font-mono text-slate-700 dark:text-purple-300/80 font-bold">
                      FLIGHT LOG #{item.year}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-purple-800 dark:text-purple-300">
                      <CheckCircle2 className="w-3 h-3 text-purple-700 dark:text-purple-400" />
                      <span>VERIFIED</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* THE 3D FROSTED PURPLE GLASS POCKET FOLDER (EXACT SPEC PRESERVED) */}
          {/* --------------------------------------------------------------------- */}
          <div className="relative z-30 rounded-[2.5rem] bg-gradient-to-b from-purple-100/90 via-purple-50/80 to-purple-200/90 dark:from-purple-900/60 dark:via-purple-950/70 dark:to-[#160B28]/90 border-2 border-purple-300/80 dark:border-purple-500/40 shadow-[0_20px_50px_-15px_rgba(147,51,234,0.25)] dark:shadow-[0_25px_60px_-15px_rgba(147,51,234,0.5)] ring-1 ring-purple-300/40 dark:ring-white/10 p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 overflow-hidden transform-gpu">
            {/* Folder Tab Cutout on Top-Left */}
            <div className="absolute -top-7 left-6 sm:left-12 w-52 sm:w-60 h-8 rounded-t-2xl bg-purple-200/95 dark:bg-purple-900/80 border-t-2 border-x-2 border-purple-300 dark:border-purple-500/40 text-purple-950 dark:text-purple-200 shadow-xs flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                DOSSIER SPEC #FLIGHT-2023-2027
              </span>
            </div>

            {/* Specular Diagonal Sheen Highlight */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-purple-400/10 pointer-events-none rounded-[2.5rem]" />

            {/* Folder Front Details: Active Milestone Showcase */}
            <div className="relative z-10 space-y-6">
              {/* Top Navigation & Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-300/40 dark:border-purple-400/20 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-600 dark:bg-purple-500 text-white flex items-center justify-center shadow-md shrink-0">
                    {getMilestoneIcon(activeMilestone)}
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider block">
                      Active Flight Record
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-slate-950 dark:text-white">
                      Record {activeIdx + 1 < 10 ? '0' : ''}{activeIdx + 1} of {CHRONOLOGICAL_FLIGHT_LOG.length} · {activeMilestone.year} Log
                    </span>
                  </div>
                </div>

                {/* Step Cycler Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/40 dark:hover:bg-purple-800/60 text-slate-950 dark:text-white border border-purple-300 dark:border-purple-700/60 transition cursor-pointer shadow-xs"
                    title="Previous Flight Record"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/40 dark:hover:bg-purple-800/60 text-slate-950 dark:text-white border border-purple-300 dark:border-purple-700/60 transition cursor-pointer shadow-xs"
                    title="Next Flight Record"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Milestone Title & Core Achievements */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-slate-950 dark:text-white">
                      {activeMilestone.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-100/90 dark:bg-purple-500/25 border border-purple-300 dark:border-purple-300/40 text-purple-950 dark:text-purple-200 font-mono text-xs font-bold">
                      {activeMilestone.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-400/30 font-mono text-xs font-bold uppercase shadow-xs">
                      {activeMilestone.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-100/90 dark:bg-white/10 border border-purple-300 dark:border-white/20 text-slate-950 dark:text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-xs">
                      <Sparkles className="w-3 h-3 text-purple-700 dark:text-[#CCFF00] animate-pulse" />
                      <span>ENTRY #{activeIdx + 1 < 10 ? '0' : ''}{activeIdx + 1}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-display font-black text-slate-950 dark:text-white tracking-tight pt-1">
                    {activeMilestone.role}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold font-sans text-purple-900 dark:text-purple-300">
                    {activeMilestone.organization}
                  </div>
                </div>

                {/* Unique Callout Banner */}
                <div
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl border font-mono text-xs font-bold shadow-xs ${activeCallout.colorClass}`}
                >
                  {activeCallout.icon}
                  <span>{activeCallout.text}</span>
                </div>

                <p className="text-xs sm:text-base text-slate-900 dark:text-purple-100 font-medium font-sans leading-relaxed max-w-3xl">
                  {activeMilestone.description}
                </p>

                {/* Achievements Checklist with Verified Outcomes */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-[11px] font-bold text-purple-950 dark:text-purple-300 uppercase tracking-wider">
                    Verified Chronological Outcomes:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeMilestone.achievements.map((ach: string, aIdx: number) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2.5 p-3 rounded-2xl border text-xs sm:text-sm font-medium transition-colors shadow-2xs bg-purple-50/90 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800/80 text-slate-950 dark:text-purple-100"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-purple-700 dark:text-purple-400" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Folder Bottom Row: Brand Pill + Action Icons */}
              <div className="pt-4 border-t border-purple-300/40 dark:border-purple-800/60 flex flex-wrap items-center justify-between gap-3 text-purple-200">
                {/* Brand Badge */}
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-100/90 dark:bg-purple-950/60 border border-purple-300/80 dark:border-purple-700/60 text-slate-950 dark:text-purple-200 font-mono text-xs font-bold shadow-xs">
                  <span className="text-purple-700 dark:text-purple-400">⊘</span>
                  <span>Karan Verma · Flight Log Registry</span>
                </div>

                {/* Social / Engagement Icons (Bookmark, Heart, Share) */}
                <div className="flex items-center gap-2 p-1 rounded-full bg-purple-100/90 dark:bg-purple-950/60 border border-purple-300/80 dark:border-purple-700/60 text-slate-950 dark:text-purple-200 shadow-xs">
                  <button
                    type="button"
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-2 rounded-full transition-colors cursor-pointer ${
                      bookmarked
                        ? 'text-amber-600 dark:text-amber-300 bg-amber-400/20'
                        : 'text-slate-900 dark:text-purple-200 hover:text-black dark:hover:text-white hover:bg-purple-200/60 dark:hover:bg-white/10'
                    }`}
                    title="Bookmark Milestone Record"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setLiked(!liked)}
                    className={`p-2 rounded-full transition-colors cursor-pointer ${
                      liked
                        ? 'text-rose-600 dark:text-rose-400 bg-rose-400/20'
                        : 'text-slate-900 dark:text-purple-200 hover:text-black dark:hover:text-white hover:bg-purple-200/60 dark:hover:bg-white/10'
                    }`}
                    title="Acknowledge Record"
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={liked ? 'currentColor' : 'none'}
                    />
                  </button>

                  <a
                    href="#contact"
                    className="p-2 rounded-full text-slate-900 dark:text-purple-200 hover:text-black dark:hover:text-white hover:bg-purple-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    title="Transmit Message Regarding Record"
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
          {/* Left: Flight Recorder Chronology Info */}
          <div className="text-center sm:text-left space-y-0.5">
            <span className="block text-[10px] text-purple-800 dark:text-purple-300 uppercase tracking-widest font-bold">
              FLIGHT RECORDER SPEC:
            </span>
            <span className="font-bold text-slate-950 dark:text-white">
              2023 — 2027 Chronology · 10 Verified Field Records
            </span>
          </div>

          {/* Right: Architecture Spec */}
          <div className="text-center sm:text-right space-y-0.5">
            <span className="block text-[10px] text-purple-800 dark:text-purple-300 uppercase tracking-widest font-bold">
              SYSTEM ARCHITECTURE:
            </span>
            <span className="font-bold text-slate-950 dark:text-white">
              3D Frosted Glass Dossier · Sub-50ms React 19
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
