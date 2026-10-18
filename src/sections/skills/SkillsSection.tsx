import React, { useState, useMemo } from 'react';
import {
  Terminal,
  Code,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Layers,
  Activity,
  Zap,
  Video,
  ArrowUpRight,
  Search,
  X,
} from 'lucide-react';

interface SkillsSectionProps {
  onSelectTechFilter?: (tech: string) => void;
}

interface SkillItem {
  name: string;
  level: string;
  experience: string;
  proficiency: number;
  highlight: string;
  tags: string[];
}

interface DomainDossier {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  statusBadge: string;
  badgeStyle: {
    bg: string;
    text: string;
    border: string;
    dot: string;
  };
  accentGradient: string;
  glowColor: string;
  narrative: string;
  footprint: string;
  footprintBadge: string;
  primaryFilterTech: string;
  skills: SkillItem[];
}

const DOMAINS: DomainDossier[] = [
  {
    id: 'programming',
    category: 'core_systems',
    title: 'Programming & Core Systems',
    subtitle: 'ALGORITHMIC LOGIC · LOW-LEVEL MEMORY · PRODUCTION ETL',
    icon: Terminal,
    statusBadge: 'Production Verified',
    badgeStyle: {
      bg: 'bg-sky-500/10 dark:bg-sky-500/15',
      text: 'text-sky-700 dark:text-sky-300',
      border: 'border-sky-300 dark:border-sky-500/30',
      dot: 'bg-sky-500',
    },
    accentGradient: 'from-sky-500 via-indigo-500 to-cyan-500',
    glowColor: 'bg-sky-500/10',
    narrative:
      'Rigorous foundation in low-level memory logic, object-oriented systems, and automated data processing executed during industrial internship and competitive engineering coursework.',
    footprint:
      'Completed 3-week production internship at IndusAI Solutions (MSME registered) building automated data processing routines, ETL scripts, and backend validation logic.',
    footprintBadge: 'IndusAI Solutions · Production Intern',
    primaryFilterTech: 'Python',
    skills: [
      {
        name: 'Python',
        level: 'Production / Intern',
        experience: 'IndusAI Solutions',
        proficiency: 96,
        highlight: 'Sub-200ms Batch ETL Pipelines',
        tags: ['FastAPI', 'Automation Scripts', 'ETL Logic', 'Backend Data'],
      },
      {
        name: 'C',
        level: 'Systems Foundation',
        experience: 'MIT Ujjain Coursework',
        proficiency: 88,
        highlight: 'Pointer & Memory Management',
        tags: ['Pointers', 'Data Structures', 'Memory Optimization'],
      },
      {
        name: 'C++',
        level: 'OOP & Algorithmic',
        experience: 'Competitive Coding',
        proficiency: 90,
        highlight: 'STL Containers & Complexity Analysis',
        tags: ['OOP Architecture', 'STL Containers', 'Algorithmic Logic'],
      },
      {
        name: 'SQL',
        level: 'Relational Querying',
        experience: 'Database Systems',
        proficiency: 86,
        highlight: 'Multi-Table Joins & Schema Design',
        tags: ['Schema Design', 'Relational Joins', 'Query Tuning'],
      },
    ],
  },
  {
    id: 'web_dev',
    category: 'web_ui',
    title: 'Web Architecture & Modern UI',
    subtitle: 'COMPONENT HIERARCHIES · REACT 19 · STRICT TYPES',
    icon: Code,
    statusBadge: 'Sub-50ms UI Verified',
    badgeStyle: {
      bg: 'bg-amber-500/10 dark:bg-amber-500/15',
      text: 'text-amber-800 dark:text-amber-300',
      border: 'border-amber-300 dark:border-amber-500/30',
      dot: 'bg-amber-500',
    },
    accentGradient: 'from-amber-500 via-orange-500 to-yellow-500',
    glowColor: 'bg-amber-500/10',
    narrative:
      'Production-grade modern web engineering with React 19, strict TypeScript contracts, responsive utility token engines, and zero-jank 60FPS fluid client interactions.',
    footprint:
      'Architected high-performance React 19 portfolio and client applications with atomic component hierarchy, state machines, and decoupled reactive hooks.',
    footprintBadge: 'React 19 & Strict TypeScript',
    primaryFilterTech: 'React 19',
    skills: [
      {
        name: 'React 19',
        level: 'Practical Architecture',
        experience: 'Single-Page Apps',
        proficiency: 96,
        highlight: 'Zero-Jank 60FPS UI & State Machines',
        tags: ['React 19 Hooks', 'Atomic Hierarchy', 'Virtual DOM'],
      },
      {
        name: 'TypeScript',
        level: 'Type Systems Engineer',
        experience: 'Enterprise Codebases',
        proficiency: 95,
        highlight: 'Strict Type Safety & Zero Any',
        tags: ['Discriminated Unions', 'Generic Contracts', 'Type Safety'],
      },
      {
        name: 'Tailwind CSS',
        level: 'Design Tokens Engineer',
        experience: 'Modern Design Systems',
        proficiency: 97,
        highlight: 'Fluid Theme Engine & Design Tokens',
        tags: ['Design Tokens', 'Obsidian Glass', 'Responsive Grid'],
      },
      {
        name: 'Modern Web & Semantic HTML',
        level: 'Client Architecture',
        experience: 'Web Standards',
        proficiency: 94,
        highlight: 'W3C Compliant & DOM Optimization',
        tags: ['Semantic HTML5', 'DOM Performance', 'Responsive CSS'],
      },
    ],
  },
  {
    id: 'ai_tools',
    category: 'ai_tooling',
    title: 'AI Engineering & Developer Tooling',
    subtitle: 'STRUCTURED PROMPT WORKFLOWS · GIT TRUNKING · BUG TRIAGE',
    icon: Sparkles,
    statusBadge: 'Prompt Eng. Lead',
    badgeStyle: {
      bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
      text: 'text-emerald-700 dark:text-emerald-300',
      border: 'border-emerald-300 dark:border-emerald-500/30',
      dot: 'bg-emerald-500',
    },
    accentGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    glowColor: 'bg-emerald-500/10',
    narrative:
      'Systematic AI engineering methodologies, multi-shot chain-of-thought prompt design, daily GitHub trunk branching, and time-critical defect diagnosis tested in national hackathons.',
    footprint:
      'Prompt Engineering Lead conducting hands-on institutional workshops; tested across 36-hour hackathons (HACKWAVE 3.0, AGNITIA 2026, .EXECUTE) and ALGORUSH bug-fixing competition at NMIMS.',
    footprintBadge: 'MGI Coding Club · ALGORUSH Tested',
    primaryFilterTech: 'Prompt Engineering',
    skills: [
      {
        name: 'Prompt Engineering',
        level: 'Lead Practitioner',
        experience: 'MGI Coding Club',
        proficiency: 96,
        highlight: 'Chain-of-Thought & Multi-Shot CoT',
        tags: ['Structured Output', 'LLM Workflows', 'Context Craft'],
      },
      {
        name: 'GitHub & Git',
        level: 'Proficient',
        experience: 'Daily Engineering',
        proficiency: 94,
        highlight: 'Trunk Branching & Pull Requests',
        tags: ['Version Control', 'Pull Requests', 'Branching Strategy'],
      },
      {
        name: 'Analytical Reasoning',
        level: 'Core Strength',
        experience: '36-Hour Hackathons',
        proficiency: 95,
        highlight: 'Multi-Stage Problem Breakdown',
        tags: ['HACKWAVE 3.0', 'AGNITIA 2026', '.EXECUTE', 'SIH Rounds'],
      },
      {
        name: 'Bug Fixing & Debugging',
        level: 'Competition Tested',
        experience: 'ALGORUSH · NMIMS',
        proficiency: 93,
        highlight: 'Rapid Root-Cause Defect Triage',
        tags: ['ALGORUSH', 'Logic Fault Isolation', 'Code Refactoring'],
      },
    ],
  },
  {
    id: 'leadership',
    category: 'leadership_gov',
    title: 'Institutional Leadership & Governance',
    subtitle: 'STUDENT COUNCIL VP · 35+ CEREMONIES · 20+ EVENTS',
    icon: ShieldCheck,
    statusBadge: 'Elected Student Council VP',
    badgeStyle: {
      bg: 'bg-purple-500/10 dark:bg-purple-500/15',
      text: 'text-purple-700 dark:text-purple-300',
      border: 'border-purple-300 dark:border-purple-500/30',
      dot: 'bg-purple-500',
    },
    accentGradient: 'from-purple-500 via-violet-500 to-indigo-500',
    glowColor: 'bg-purple-500/10',
    narrative:
      'Proven institutional leadership elected Vice President of the Student Council; directing large-scale campus symposium logistics, student advocacy, and high-stakes ceremony anchoring.',
    footprint:
      'Elected Student Council Vice President (2026–27) after serving as Joint Secretary and Class Representative; anchored 35+ major ceremonies and directed operations across 20+ campus-scale events.',
    footprintBadge: 'MIT Ujjain · 3-Year Progressive Office',
    primaryFilterTech: 'Student Council Leadership',
    skills: [
      {
        name: 'Student Council Leadership',
        level: 'Vice President (2026–27)',
        experience: 'MIT Ujjain',
        proficiency: 97,
        highlight: 'Progressive 3-Year Governance Office',
        tags: ['Elected VP', 'Joint Secretary', 'Class Representative', 'Advocacy'],
      },
      {
        name: 'Public Speaking & Anchoring',
        level: 'Veteran Stage Anchor',
        experience: '35+ Ceremonies',
        proficiency: 98,
        highlight: 'Dignitary & VIP Keynote Hosting',
        tags: ['35+ Events', 'Stage Poise', 'VIP Dignitaries', 'Audience Flow'],
      },
      {
        name: 'Team & Event Coordination',
        level: 'Operations Lead',
        experience: '20+ Campus Events',
        proficiency: 96,
        highlight: 'Campus-Scale Contingent Logistics',
        tags: ['Inter-Club Alignment', 'Logistics Ops', 'Contingent Management'],
      },
      {
        name: 'Multilingual Communication',
        level: 'Quad-Lingual',
        experience: 'Fluency',
        proficiency: 95,
        highlight: '4 Languages Mastered for Operations',
        tags: ['Hindi (Native)', 'English (Fluent)', 'Gujarati', 'Punjabi'],
      },
    ],
  },
  {
    id: 'teaching',
    category: 'teaching_pedagogy',
    title: 'Teaching, Mentorship & Pedagogy',
    subtitle: '50+ STUDENTS GUIDED · PRO LEARN COACHING · 3+ YRS',
    icon: GraduationCap,
    statusBadge: '50+ Students Guided · 3+ Yrs',
    badgeStyle: {
      bg: 'bg-amber-500/10 dark:bg-amber-500/15',
      text: 'text-amber-800 dark:text-amber-300',
      border: 'border-amber-300 dark:border-amber-500/30',
      dot: 'bg-amber-500',
    },
    accentGradient: 'from-amber-500 via-yellow-500 to-orange-500',
    glowColor: 'bg-amber-500/10',
    narrative:
      'Dedicated educator and mentor with 3+ years of continuous teaching experience at Pro Learn Coaching Classes, imparting programming foundations and mathematical intuition.',
    footprint:
      'Coached and mentored 50+ students over 3+ years at Pro Learn Coaching Classes in programming fundamentals, mathematical logic, and computer science pedagogy.',
    footprintBadge: 'Pro Learn Coaching Classes · 3+ Years',
    primaryFilterTech: 'Teaching & Mentorship',
    skills: [
      {
        name: 'Programming Mentorship',
        level: 'Lead Educator',
        experience: 'Pro Learn Coaching',
        proficiency: 98,
        highlight: '50+ Students Guided from Scratch',
        tags: ['Hands-on Labs', 'Code Reviews', 'Logic Building', 'Beginners to Pro'],
      },
      {
        name: 'Computer Science Pedagogy',
        level: 'Curriculum Architect',
        experience: '3+ Years Practice',
        proficiency: 96,
        highlight: 'Structured STEM Syllabus Design',
        tags: ['Curriculum Design', 'STEM Foundations', 'Conceptual Clarity'],
      },
      {
        name: 'Mathematical & Algorithmic Logic',
        level: 'Senior Mentor',
        experience: 'Analytical Coaching',
        proficiency: 94,
        highlight: 'First-Principles Problem Solving',
        tags: ['Discrete Thinking', 'Problem Solving', 'Algorithm Intuition'],
      },
      {
        name: 'One-on-One Mentoring',
        level: 'Dedicated Advisor',
        experience: 'Student Career Pathing',
        proficiency: 95,
        highlight: 'Continuous Feedback & Project Reviews',
        tags: ['Career Guidance', 'Project Evaluation', 'Personalized Roadmaps'],
      },
    ],
  },
  {
    id: 'innovation',
    category: 'innovation_iic',
    title: 'Innovation & Incubation (IIC)',
    subtitle: 'MHRD/MIC ALIGNMENT · DUAL ₹15L MSME SELECTIONS',
    icon: Zap,
    statusBadge: 'Dual ₹15L MSME Selections',
    badgeStyle: {
      bg: 'bg-cyan-500/10 dark:bg-cyan-500/15',
      text: 'text-cyan-700 dark:text-cyan-300',
      border: 'border-cyan-300 dark:border-cyan-500/30',
      dot: 'bg-cyan-500',
    },
    accentGradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    glowColor: 'bg-cyan-500/10',
    narrative:
      'Student Coordinator for Institution’s Innovation Council (IIC) at MIT Ujjain; driving startup incubation pipelines, national entrepreneurship drives, and competitive grant proposals.',
    footprint:
      "Student Coordinator for Institution's Innovation Council (IIC) at MIT Ujjain; two independent technological innovations selected for ₹15 Lakh grant-in-aid each (₹30 Lakh combined) under MSME Idea Hackathon 5.0.",
    footprintBadge: 'MHRD / MIC Aligned · MSME Hackathon 5.0',
    primaryFilterTech: "Institution's Innovation Council (IIC)",
    skills: [
      {
        name: "Institution's Innovation Council (IIC)",
        level: 'Student Coordinator',
        experience: 'MIT Ujjain',
        proficiency: 96,
        highlight: 'MHRD / MIC Startup Incubation',
        tags: ['Startup Incubation', 'Entrepreneurship Drives', 'Innovation Quizzes'],
      },
      {
        name: 'Smart AI Agri Market Platform',
        level: 'Project Innovator',
        experience: 'MSME Idea Hackathon 5.0',
        proficiency: 95,
        highlight: '₹15 Lakh Grant Selected',
        tags: ['AgriTech', 'Market Access', 'AI Prediction', 'MSME Selection'],
      },
      {
        name: 'AI Real-Time Transit Navigation',
        level: 'Project Innovator',
        experience: 'MSME Idea Hackathon 5.0',
        proficiency: 94,
        highlight: '₹15 Lakh Grant Selected',
        tags: ['Transit AI', 'Station Navigation', 'Accessibility', 'MSME Selection'],
      },
      {
        name: 'Hackathon Contingent Leadership',
        level: 'Contingent Captain',
        experience: 'SIH & State Hackathons',
        proficiency: 96,
        highlight: 'Dual SIH College Selection',
        tags: ['SIH Internal Rounds', 'Team Strategy', 'Pitch Deck Engineering'],
      },
    ],
  },
  {
    id: 'creative',
    category: 'creative_media',
    title: 'Creative Media & Content Strategy',
    subtitle: 'HIGH-RETENTION VIDEO CRAFT · MOTION PACING · WEB3',
    icon: Video,
    statusBadge: 'Creator & Video Editor',
    badgeStyle: {
      bg: 'bg-rose-500/10 dark:bg-rose-500/15',
      text: 'text-rose-700 dark:text-rose-300',
      border: 'border-rose-300 dark:border-rose-500/30',
      dot: 'bg-rose-500',
    },
    accentGradient: 'from-rose-500 via-pink-500 to-amber-500',
    glowColor: 'bg-rose-500/10',
    narrative:
      'Hands-on video editing, motion storytelling, and technical marketing executed across professional digital media and Web3 community ecosystems.',
    footprint:
      'Completed 5-month Content & Marketing internship at HACKTOUR IND (Web3 company); creates educational tech tutorials and motion narratives with disciplined video editing.',
    footprintBadge: 'HACKTOUR IND · 5-Month Internship',
    primaryFilterTech: 'Video Editing & Content Creation',
    skills: [
      {
        name: 'Video Editing & Motion Pacing',
        level: 'Creator / Editor',
        experience: 'Digital Media Production',
        proficiency: 92,
        highlight: 'High-Retention Dynamic Visuals',
        tags: ['Video Post-Production', 'Pacing & Cuts', 'Audio Sync', 'Visual Flow'],
      },
      {
        name: 'Technical Content Strategy',
        level: 'Marketing Intern',
        experience: 'HACKTOUR IND (5 Mos)',
        proficiency: 91,
        highlight: 'Web3 & Developer Guides',
        tags: ['Community Outreach', 'Technical Guides', 'Digital Branding'],
      },
      {
        name: 'Visual Storytelling',
        level: 'Educational Content',
        experience: 'Tech Tutorials',
        proficiency: 90,
        highlight: 'Explainer Animations & Clarity',
        tags: ['Storyboarding', 'Complex Concept Breakdown', 'Visual Design'],
      },
      {
        name: 'Audience Engagement & Growth',
        level: 'Community Strategist',
        experience: 'Campus & Social Media',
        proficiency: 89,
        highlight: 'Cross-Platform Growth',
        tags: ['Audience Metrics', 'Social Strategy', 'Community Outreach'],
      },
    ],
  },
];

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Domains' },
  { id: 'core_systems', label: 'Programming & Core' },
  { id: 'web_ui', label: 'Web & UI Architecture' },
  { id: 'ai_tooling', label: 'AI & Developer Tools' },
  { id: 'leadership_gov', label: 'Leadership & Governance' },
  { id: 'teaching_pedagogy', label: 'Teaching & Pedagogy' },
  { id: 'innovation_iic', label: 'Innovation (IIC)' },
  { id: 'creative_media', label: 'Creative Media' },
];

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectTechFilter }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDomains = useMemo(() => {
    return DOMAINS.filter((domain) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'all' || domain.category === activeCategory;

      if (!matchesCategory) return false;

      // Text search filter
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = domain.title.toLowerCase().includes(q);
      const inSubtitle = domain.subtitle.toLowerCase().includes(q);
      const inNarrative = domain.narrative.toLowerCase().includes(q);
      const inFootprint = domain.footprint.toLowerCase().includes(q);
      const inSkills = domain.skills.some(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.experience.toLowerCase().includes(q) ||
          s.level.toLowerCase().includes(q) ||
          s.highlight.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q))
      );

      return inTitle || inSubtitle || inNarrative || inFootprint || inSkills;
    });
  }, [activeCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return DOMAINS.reduce((acc, d) => acc + d.skills.length, 0);
  }, []);

  return (
    <section
      id="skills"
      className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FEFDF6] dark:bg-[#0B0F19] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300"
    >
      {/* Overhead Warm Amber & Slate Ambient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-amber-200/35 dark:from-amber-900/20 via-yellow-100/15 dark:via-yellow-950/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-amber-200/20 dark:bg-amber-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-200/15 dark:bg-cyan-950/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Matrix Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.055] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12 relative z-10">
        {/* ========================================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider">
              <span>05 / DEVELOPER SKILLS & CAPABILITY MATRIX</span>
              <span>·</span>
              <span>TACTILE TECH SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white uppercase transition-colors">
              Technical & Leadership Matrix.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans transition-colors leading-relaxed">
              Expansive developer dossiers documenting Karan's engineering depth across Python ETL & React 19, 3+ years of dedicated computer science pedagogy at Pro Learn Coaching, and institutional innovation governance.
            </p>

            {/* Tri-Pillar Capability Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-100/90 dark:bg-sky-950/70 border border-sky-300 dark:border-sky-800 text-sky-950 dark:text-sky-200 font-mono text-xs font-bold shadow-xs">
                <Terminal className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>Software Engineer (Python · React 19 · TypeScript)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 font-mono text-xs font-bold shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Educator · 50+ Students (Pro Learn 3+ Yrs)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100/90 dark:bg-purple-950/70 border border-purple-300 dark:border-purple-800 text-purple-950 dark:text-purple-200 font-mono text-xs font-bold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Student Council VP & IIC Coordinator</span>
              </span>
            </div>
          </div>

          {/* Quick Telemetry Tag */}
          <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 shrink-0">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300 font-mono text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>SUB-50MS LATENCY & STRICT TYPES</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>{totalSkillsCount} Production-Calibrated Vectors</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CONTROLS: CATEGORY TABS & REAL-TIME SEARCH */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Horizontal Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {FILTER_CATEGORIES.map((tab) => {
                const isActive = activeCategory === tab.id;
                const domainCount =
                  tab.id === 'all'
                    ? DOMAINS.length
                    : DOMAINS.filter((d) => d.category === tab.id).length;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 border-slate-900 dark:border-amber-400 shadow-md scale-[1.02]'
                        : 'bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border-slate-200/90 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.08]'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                        isActive
                          ? 'bg-white/20 dark:bg-black/20 text-white dark:text-slate-950'
                          : 'bg-slate-200/70 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {domainCount}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Skill Search Input */}
            <div className="relative w-full sm:w-80 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills, tools, tags..."
                className="w-full pl-9.5 pr-8 py-2 rounded-xl text-xs font-mono bg-white/90 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.09] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-amber-400/50 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Status */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 px-1">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-amber-500" />
              <span>
                Showing {filteredDomains.length} of {DOMAINS.length} Domain Dossiers (
                {filteredDomains.reduce((sum, d) => sum + d.skills.length, 0)} skills active)
              </span>
            </span>
            {searchQuery && (
              <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
                Filter query: "{searchQuery}"
              </span>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SKILL MATRIX GRID SHOWCASE (EXPANSIVE 3-COLUMN RESPONSIVE GRID) */}
        {/* ========================================================================= */}
        {filteredDomains.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredDomains.map((domain) => {
              const IconComponent = domain.icon;

              return (
                <div
                  key={domain.id}
                  className="bg-white/95 dark:bg-[#0E1322] rounded-3xl border border-slate-200/90 dark:border-slate-800/80 shadow-md hover:shadow-2xl hover:border-amber-400/60 dark:hover:border-amber-400/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Top Domain Accent Gradient Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${domain.accentGradient} pointer-events-none`}
                  />

                  {/* Ambient Subtle Radial Hover Highlight */}
                  <div
                    className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${domain.glowColor}`}
                  />

                  {/* Top Content Area */}
                  <div className="space-y-5 relative z-10">
                    {/* Header: Icon + Status Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-slate-100 dark:via-slate-800 to-amber-500/10 dark:from-amber-400/20 dark:to-slate-800 p-[1.5px] shadow-xs shrink-0">
                        <div className="w-full h-full rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-amber-600 dark:text-amber-400">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wide border ${domain.badgeStyle.bg} ${domain.badgeStyle.text} ${domain.badgeStyle.border}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${domain.badgeStyle.dot} animate-pulse shrink-0`}
                        />
                        <span>{domain.statusBadge}</span>
                      </div>
                    </div>

                    {/* Domain Title & Subtitle */}
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-400 tracking-wider uppercase">
                        {domain.subtitle}
                      </div>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight leading-tight">
                        {domain.title}
                      </h3>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      {domain.narrative}
                    </p>

                    {/* Inline Skills Breakdown */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Layers className="w-3 h-3 text-amber-500" />
                          <span>Core Capabilities ({domain.skills.length})</span>
                        </span>
                        <span>Proficiency</span>
                      </div>

                      <div className="space-y-2.5">
                        {domain.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 rounded-2xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.06] space-y-2 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 shadow-2xs"
                          >
                            {/* Skill Title & Proficiency Metric */}
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white tracking-tight truncate">
                                  {skill.name}
                                </span>
                                <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-white/[0.06] px-1.5 py-0.2 rounded border border-slate-200/80 dark:border-white/[0.06] shrink-0">
                                  {skill.level}
                                </span>
                              </div>
                              <span className="font-mono font-black text-xs text-amber-600 dark:text-amber-400 shrink-0">
                                {skill.proficiency}%
                              </span>
                            </div>

                            {/* Slim Progress Bar */}
                            <div className="h-1.5 w-full bg-slate-200/80 dark:bg-slate-800/80 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${domain.accentGradient} transition-all duration-500`}
                                style={{ width: `${skill.proficiency}%` }}
                              />
                            </div>

                            {/* Applied Benchmark & Experience */}
                            <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                              <span className="truncate font-medium text-slate-700 dark:text-slate-300">
                                {skill.highlight}
                              </span>
                              <span className="shrink-0 text-slate-400 dark:text-slate-500">
                                {skill.experience}
                              </span>
                            </div>

                            {/* Skill Tags */}
                            <div className="flex flex-wrap gap-1 pt-0.5">
                              {skill.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-white dark:bg-black/30 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.06]"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content Area: Real-World Footprint & Actions */}
                  <div className="pt-5 space-y-4 relative z-10 border-t border-slate-200/80 dark:border-white/[0.08] mt-5">
                    {/* Verified Real-World Footprint Banner */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/[0.08] dark:bg-amber-400/[0.06] border border-amber-400/30 dark:border-amber-400/20 space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                          <span>Real-World Footprint</span>
                        </div>
                        <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-200/60 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200">
                          {domain.footprintBadge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed font-medium">
                        {domain.footprint}
                      </p>
                    </div>

                    {/* Card Action Row */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-medium">
                        {domain.skills.length} Calibrated Vectors
                      </span>

                      {onSelectTechFilter ? (
                        <button
                          type="button"
                          onClick={() => {
                            onSelectTechFilter(domain.primaryFilterTech);
                            const el = document.getElementById('projects');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-slate-950 font-mono text-xs font-bold transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
                        >
                          <span>Projects ({domain.primaryFilterTech})</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <a
                          href="#projects"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-slate-950 font-mono text-xs font-bold transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
                        >
                          <span>Explore Projects</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-white/[0.02] space-y-4">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                No matching skills or domains found
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                No dossiers matched your search query "{searchQuery}". Try searching for Python, React, Teaching, IIC, or clear your filters.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 font-mono text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MATRIX FOOTER DIAGNOSTICS & TELEMETRY */}
        {/* ========================================================================= */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200/80 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              MATRIX TELEMETRY: 28 VERIFIED CAPABILITIES · STRICT TYPE GUARANTEES · ZERO ERRORS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>REACT 19 ARCHITECTURE</span>
            <span>·</span>
            <span className="text-amber-700 dark:text-amber-400 font-bold">
              SUB-50MS UI ENGINE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
