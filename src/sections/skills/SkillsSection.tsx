import React from 'react';
import {
  Terminal,
  Code,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Target,
  Video,
  ArrowUpRight,
  Filter,
} from 'lucide-react';

interface SkillsSectionProps {
  onSelectTechFilter?: (tech: string) => void;
}

interface SkillPill {
  name: string;
  level: string;
  tag: string;
}

interface DomainDossier {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillPill[];
  credential: {
    org: string;
    highlight: string;
  };
  style: {
    bg: string;
    border: string;
    text: string;
    pinColor: string;
    pinShadow: string;
    rotation: string;
    tapeRotation: string;
    tapeColor: string;
    pillBg: string;
  };
}

const DOMAIN_DOSSIERS: DomainDossier[] = [
  {
    id: 'programming',
    badge: 'CORE COMPILERS',
    title: 'Programming Languages & Core',
    icon: Terminal,
    description:
      'Algorithmic problem-solving, memory structures, low-level pointers in C/C++, automated Python scripting, and relational data querying.',
    skills: [
      { name: 'Python', level: 'Production Intern', tag: 'Automation & ETL' },
      { name: 'C', level: 'Fundamental', tag: 'Pointers & Memory' },
      { name: 'C++', level: 'Algorithmic', tag: 'OOP & STL' },
      { name: 'SQL', level: 'Relational', tag: 'Queries & Joins' },
    ],
    credential: {
      org: 'IndusAI Solutions · MSME Reg.',
      highlight:
        '3-week Python Developer internship building automated ETL data pipelines, schema validation, and backend logic modules.',
    },
    style: {
      bg: 'bg-[#FEF9C3] dark:bg-[#2B2710]', // Canary Post-It
      border: 'border-[#FDE047] dark:border-[#854D0E]',
      text: 'text-amber-950 dark:text-amber-100',
      pinColor: 'bg-rose-500',
      pinShadow: 'shadow-rose-900/40',
      rotation: 'sm:-rotate-2 hover:rotate-0',
      tapeRotation: '-rotate-2',
      tapeColor: 'bg-amber-100/80 dark:bg-amber-200/20 border-amber-300/60 dark:border-amber-400/30',
      pillBg:
        'bg-white/85 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 border-amber-300/60 dark:border-amber-700/50 text-amber-950 dark:text-amber-100',
    },
  },
  {
    id: 'web_dev',
    badge: 'REACT 19 & TS',
    title: 'Web Architecture & UI',
    icon: Code,
    description:
      'Modern reactive client applications, atomic component hierarchy, strict type contracts, and sub-50ms theme rendering engines.',
    skills: [
      { name: 'React 19', level: 'Production UI', tag: 'Hooks & State Machines' },
      { name: 'TypeScript', level: 'Strict Types', tag: 'Contracts & Interfaces' },
      { name: 'Tailwind CSS', level: 'Design Tokens', tag: 'Obsidian Glassmorphism' },
      { name: 'Modern Web', level: 'Responsive UI', tag: 'Semantic HTML5 & CSS3' },
    ],
    credential: {
      org: 'Production Portfolio & Client Apps',
      highlight:
        'Architected high-performance portfolio with obsidian glassmorphism, atomic hooks, and zero jank.',
    },
    style: {
      bg: 'bg-[#E0F2FE] dark:bg-[#0C2D48]', // Sky Post-It
      border: 'border-[#7DD3FC] dark:border-[#0369A1]',
      text: 'text-sky-950 dark:text-sky-100',
      pinColor: 'bg-sky-500',
      pinShadow: 'shadow-sky-900/40',
      rotation: 'sm:rotate-2 hover:rotate-0',
      tapeRotation: 'rotate-1',
      tapeColor: 'bg-sky-100/80 dark:bg-sky-200/20 border-sky-300/60 dark:border-sky-400/30',
      pillBg:
        'bg-white/85 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 border-sky-300/60 dark:border-sky-700/50 text-sky-950 dark:text-sky-100',
    },
  },
  {
    id: 'ai_tools',
    badge: 'PROMPT & AI TOOLS',
    title: 'AI & Developer Tools',
    icon: Sparkles,
    description:
      'LLM context orchestration, multi-shot chain-of-thought workflows, Git version control lifecycles, and rapid defect triage.',
    skills: [
      { name: 'Prompt Engineering', level: 'Lead Practitioner', tag: 'CoT & Multi-Shot' },
      { name: 'GitHub & Git', level: 'Version Control', tag: 'Branching & CI/CD' },
      { name: 'Analytical Reasoning', level: 'Hackathons', tag: 'Problem Triage' },
      { name: 'Bug Fixing', level: 'Competition Tested', tag: 'Root Cause Triage' },
    ],
    credential: {
      org: 'MGI Coding Club & ALGORUSH (NMIMS)',
      highlight:
        'Lead prompt engineering workshops and triaged obfuscated defects under pressure in competitive hackathons.',
    },
    style: {
      bg: 'bg-[#DCFCE7] dark:bg-[#0E3321]', // Mint Post-It
      border: 'border-[#86EFAC] dark:border-[#15803D]',
      text: 'text-emerald-950 dark:text-emerald-100',
      pinColor: 'bg-emerald-500',
      pinShadow: 'shadow-emerald-900/40',
      rotation: 'sm:-rotate-1 hover:rotate-0',
      tapeRotation: '-rotate-1',
      tapeColor: 'bg-emerald-100/80 dark:bg-emerald-200/20 border-emerald-300/60 dark:border-emerald-400/30',
      pillBg:
        'bg-white/85 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 border-emerald-300/60 dark:border-emerald-700/50 text-emerald-950 dark:text-emerald-100',
    },
  },
  {
    id: 'leadership',
    badge: 'VP COUNCIL · MIT UJJAIN',
    title: 'Leadership & Governance',
    icon: ShieldCheck,
    description:
      'Institutional student governance, executive administration, high-stakes stage anchoring, and campus-scale operational logistics.',
    skills: [
      { name: 'Student Council VP', level: 'Elected Executive', tag: 'Institutional Governance' },
      { name: 'Public Speaking', level: 'Lead Anchor', tag: '35+ Ceremonies' },
      { name: 'Team Coordination', level: 'Operations Lead', tag: '20+ Major Events' },
      { name: 'Multilingual Comm.', level: '4 Languages', tag: 'Hindi, Eng, Guj, Pun' },
    ],
    credential: {
      org: 'Mahakal Institute of Technology, Ujjain',
      highlight:
        'Elected Student Council VP (2026–27) after serving as Joint Secretary (2025–26) and Class Representative (2024–25).',
    },
    style: {
      bg: 'bg-[#F3E8FF] dark:bg-[#2A1642]', // Lavender Post-It
      border: 'border-[#D8B4FE] dark:border-[#7E22CE]',
      text: 'text-purple-950 dark:text-purple-100',
      pinColor: 'bg-purple-500',
      pinShadow: 'shadow-purple-900/40',
      rotation: 'sm:rotate-1 hover:rotate-0',
      tapeRotation: 'rotate-2',
      tapeColor: 'bg-purple-100/80 dark:bg-purple-200/20 border-purple-300/60 dark:border-purple-400/30',
      pillBg:
        'bg-white/85 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 border-purple-300/60 dark:border-purple-700/50 text-purple-950 dark:text-purple-100',
    },
  },
  {
    id: 'education',
    badge: '50+ STUDENTS · PRO LEARN',
    title: 'Teaching & Pedagogy',
    icon: GraduationCap,
    description:
      'Over 3 years mentoring students in programming fundamentals, mathematical logic, and computer engineering concepts.',
    skills: [
      { name: 'Programming Pedagogy', level: 'Lead Educator', tag: '3+ Yrs Experience' },
      { name: 'Curriculum Design', level: 'CS Foundation', tag: 'Algorithmic Mastery' },
      { name: 'Student Mentorship', level: '1-on-1 Mentoring', tag: '50+ Students Guided' },
      { name: 'Mathematical Logic', level: 'Instructor', tag: 'STEM Foundations' },
    ],
    credential: {
      org: 'Pro Learn Coaching Classes',
      highlight:
        'Mentored 50+ students over 3+ years at Pro Learn Coaching in programming fundamentals, problem solving, and computer science.',
    },
    style: {
      bg: 'bg-[#FEF3C7] dark:bg-[#38260B]', // Warm Peach Post-It
      border: 'border-[#FCD34D] dark:border-[#B45309]',
      text: 'text-amber-950 dark:text-amber-100',
      pinColor: 'bg-amber-600',
      pinShadow: 'shadow-amber-900/40',
      rotation: 'sm:-rotate-2 hover:rotate-0',
      tapeRotation: '-rotate-1',
      tapeColor: 'bg-amber-100/80 dark:bg-amber-200/20 border-amber-300/60 dark:border-amber-400/30',
      pillBg:
        'bg-white/85 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 border-amber-300/60 dark:border-amber-700/50 text-amber-950 dark:text-amber-100',
    },
  },
  {
    id: 'innovation',
    badge: 'VP COUNCIL · IIC',
    title: 'Innovation & Incubation',
    icon: Target,
    description:
      'Leading institutional innovation initiatives, startup incubation pipelines, hackathons, and dual ₹15L MSME Idea Hackathon 5.0 selections.',
    skills: [
      { name: 'IIC Student Coordinator', level: 'MHRD / MIC Aligned', tag: 'Startup Incubation' },
      { name: 'MSME Idea Hackathon', level: 'National Selection', tag: 'Dual ₹15L Proposals' },
      { name: 'Hackathon Strategy', level: 'Competitor', tag: '36-Hour Sprints' },
      { name: 'Startup Ideation', level: 'Facilitator', tag: 'Prototyping & Pitch' },
    ],
    credential: {
      org: "Institution's Innovation Council & MSME 5.0",
      highlight:
        'Dual ₹15 Lakh grant-in-aid selections under MSME Idea Hackathon 5.0 and IIC student coordination at MIT Ujjain.',
    },
    style: {
      bg: 'bg-[#CFFAFE] dark:bg-[#083344]', // Cyan Post-It
      border: 'border-[#67E8F9] dark:border-[#0E7490]',
      text: 'text-cyan-950 dark:text-cyan-100',
      pinColor: 'bg-cyan-500',
      pinShadow: 'shadow-cyan-900/40',
      rotation: 'sm:rotate-2 hover:rotate-0',
      tapeRotation: 'rotate-1',
      tapeColor: 'bg-cyan-100/80 dark:bg-cyan-200/20 border-cyan-300/60 dark:border-cyan-400/30',
      pillBg:
        'bg-white/85 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 border-cyan-300/60 dark:border-cyan-700/50 text-cyan-950 dark:text-cyan-100',
    },
  },
  {
    id: 'creative',
    badge: 'VIDEO & DIGITAL MEDIA',
    title: 'Creative Media & Content',
    icon: Video,
    description:
      'Video post-production, educational technical tutorials, motion narrative pacing, and technical community growth.',
    skills: [
      { name: 'Video Editing & Motion', level: 'Creator & Editor', tag: 'Digital Storytelling' },
      { name: 'Technical Explainers', level: 'Content Strategy', tag: 'High-Retention Guides' },
      { name: 'Web3 Marketing & Media', level: 'Intern Contributor', tag: 'Ecosystem Campaigns' },
      { name: 'Community Outreach', level: 'Communicator', tag: 'Multi-Channel Engagement' },
    ],
    credential: {
      org: 'HACKTOUR IND & Digital Media',
      highlight:
        '5-month Web3 content & marketing internship plus technical video production for developer cohorts.',
    },
    style: {
      bg: 'bg-[#FFE4E6] dark:bg-[#40121E]', // Rose Post-It
      border: 'border-[#FDA4AF] dark:border-[#9F1239]',
      text: 'text-rose-950 dark:text-rose-100',
      pinColor: 'bg-rose-500',
      pinShadow: 'shadow-rose-900/40',
      rotation: 'sm:-rotate-1 hover:rotate-0',
      tapeRotation: '-rotate-2',
      tapeColor: 'bg-rose-100/80 dark:bg-rose-200/20 border-rose-300/60 dark:border-rose-400/30',
      pillBg:
        'bg-white/85 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 border-rose-300/60 dark:border-rose-700/50 text-rose-950 dark:text-rose-100',
    },
  },
];

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectTechFilter }) => {
  return (
    <section
      id="skills"
      className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FEFDF6] dark:bg-[#121108] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300"
    >
      {/* Overhead Warm Spotlight Beam */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-amber-200/40 dark:from-amber-900/25 via-yellow-100/20 dark:via-yellow-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-amber-200/20 dark:bg-amber-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
              <span>05 / STUDIO WALL & PINBOARD</span>
              <span>·</span>
              <span>TECHNICAL & LEADERSHIP MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white uppercase transition-colors">
              Skills & Capabilities.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-sans transition-colors leading-relaxed">
              Tactile dossiers documenting Karan&apos;s multi-faceted capability across software engineering, hands-on teaching at Pro Learn Coaching, and institutional innovation governance.
            </p>

            {/* Tri-Pillar Capability Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-100/90 dark:bg-sky-950/70 border border-sky-300 dark:border-sky-800 text-sky-950 dark:text-sky-200 font-mono text-xs font-bold shadow-xs">
                <Terminal className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>Software Engineer</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 font-mono text-xs font-bold shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Educator · 50+ Students (Pro Learn)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100/90 dark:bg-purple-950/70 border border-purple-300 dark:border-purple-800 text-purple-950 dark:text-purple-200 font-mono text-xs font-bold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Innovation Lead · IIC Coordinator</span>
              </span>
            </div>
          </div>

          {/* Quick Telemetry Status Badges */}
          <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300 font-mono text-xs font-bold shadow-xs rotate-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>SUB-50MS LATENCY & STRICT TYPES</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>3+ Yrs Pedagogy · Production Tested</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXPANSIVE FULL-WIDTH TACTILE POST-IT STICKY NOTES PINBOARD GRID          */}
        {/* ========================================================================= */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider px-1 font-bold">
            <span className="flex items-center gap-1.5">
              <span>Pinned Domain Dossiers ({DOMAIN_DOSSIERS.length})</span>
            </span>
            <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300 font-mono">
              Tap Skill Pill to Filter Projects
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {DOMAIN_DOSSIERS.map((dossier, idx) => {
              const isLastCentered = idx === DOMAIN_DOSSIERS.length - 1;

              return (
                <div
                  key={dossier.id}
                  className={`group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl border shadow-md hover:shadow-2xl transition-all duration-300 ${
                    dossier.style.bg
                  } ${dossier.style.border} ${dossier.style.rotation} ${
                    isLastCentered ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                  }`}
                >
                  {/* Washi / Masking Tape Strip at Top Center */}
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5.5 ${dossier.style.tapeColor} backdrop-blur-xs border transform ${dossier.style.tapeRotation} shadow-xs pointer-events-none z-10 rounded-[2px]`}
                  />

                  {/* 3D Push-Pin / Thumbtack with Specular Highlight & Drop Shadow */}
                  <div className="absolute top-3.5 right-4 z-20 flex items-center justify-center pointer-events-none">
                    <div
                      className={`w-4 h-4 rounded-full ${dossier.style.pinColor} ${dossier.style.pinShadow} shadow-md border border-white/70 relative flex items-center justify-center`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/90 absolute top-0.5 left-0.5" />
                    </div>
                    <div className="absolute -bottom-1 -right-0.5 w-2 h-2.5 bg-slate-900/40 rounded-full blur-[1px]" />
                  </div>

                  {/* Note Body */}
                  <div className="space-y-4 pt-1">
                    {/* Header: Category Badge & Mini Icon */}
                    <div className="flex items-center justify-between pr-8">
                      <span className="text-[10px] font-mono font-black tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/10 dark:bg-white/10 text-slate-950 dark:text-white shrink-0">
                        {dossier.badge}
                      </span>
                      <dossier.icon className="w-4 h-4 opacity-70 shrink-0" />
                    </div>

                    {/* Domain Title */}
                    <h3
                      className={`font-display font-black text-xl sm:text-2xl tracking-tight leading-snug ${dossier.style.text}`}
                    >
                      {dossier.title}
                    </h3>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm font-sans font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                      {dossier.description}
                    </p>

                    {/* Interactive Skill Tag Pills */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center justify-between">
                        <span>Core Competencies:</span>
                        <span className="text-[9px] opacity-75">Click to filter</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dossier.skills.map((s, sIdx) => (
                          <button
                            key={sIdx}
                            type="button"
                            onClick={() => {
                              if (onSelectTechFilter) {
                                onSelectTechFilter(s.name);
                                const el = document.getElementById('projects');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            title={`Filter projects by ${s.name}`}
                            className={`group/pill flex items-center justify-between gap-1.5 px-3 py-2 rounded-xl border text-left transition-all duration-200 ${dossier.style.pillBg} shadow-xs hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-95`}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 shrink-0" />
                              <span className="font-display font-bold text-xs truncate">
                                {s.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono opacity-75 shrink-0">
                              {s.tag}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Real-World Credential Highlight Footer */}
                    <div className="mt-4 pt-3.5 border-t border-black/10 dark:border-white/10 flex items-start gap-2.5">
                      <div className="p-1.5 rounded-lg bg-black/5 dark:bg-white/10 shrink-0 mt-0.5 text-slate-800 dark:text-slate-200">
                        <dossier.icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 space-y-0.5">
                        <div className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          {dossier.credential.org}
                        </div>
                        <div className="text-xs font-sans font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                          {dossier.credential.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Interactive dossier matrix · Click any skill pill to filter associated engineering projects</span>
          </div>

          <div className="flex items-center gap-3">
            {onSelectTechFilter ? (
              <button
                type="button"
                onClick={() => {
                  onSelectTechFilter('React 19');
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer"
              >
                <Filter className="w-3.5 h-3.5" />
                <span>Filter Projects</span>
              </button>
            ) : null}
            <a
              href="#projects"
              className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold transition-colors"
            >
              <span>Explore Project Archives</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
