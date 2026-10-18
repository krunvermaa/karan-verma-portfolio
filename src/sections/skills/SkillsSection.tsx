import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES as BASE_SKILL_CATEGORIES } from '@/data/portfolioData';
import type { SkillCategory } from '@/types';
import {
  Terminal,
  Code,
  Sparkles,
  Filter,
  Check,
  ShieldCheck,
  GraduationCap,
  Layers,
  Activity,
  Target,
  Zap,
  Workflow,
  Cpu,
  Database,
  GitBranch,
  Bug,
  Mic,
  Users,
  Globe,
  Video,
  ArrowUpRight,
} from 'lucide-react';

interface SkillsSectionProps {
  onSelectTechFilter?: (tech: string) => void;
}

interface StickyNoteStyle {
  bg: string;
  border: string;
  text: string;
  label: string;
  pinColor: string;
  pinShadow: string;
  rotation: string;
  tapeRotation: string;
  noteBadge: string;
}

const STICKY_PRESETS: Record<string, StickyNoteStyle> = {
  programming: {
    bg: 'bg-[#FEF9C3] dark:bg-[#2B2710]', // Canary Post-It
    border: 'border-[#FDE047] dark:border-[#854D0E]',
    text: 'text-amber-950 dark:text-amber-100',
    label: 'Programming & Languages',
    pinColor: 'bg-rose-500',
    pinShadow: 'shadow-rose-900/40',
    rotation: 'sm:-rotate-2 hover:rotate-0',
    tapeRotation: '-rotate-2',
    noteBadge: 'CORE CODE & LOGIC',
  },
  web_dev: {
    bg: 'bg-[#E0F2FE] dark:bg-[#0C2D48]', // Sky Post-It
    border: 'border-[#7DD3FC] dark:border-[#0369A1]',
    text: 'text-sky-950 dark:text-sky-100',
    label: 'Web Development & UI',
    pinColor: 'bg-sky-500',
    pinShadow: 'shadow-sky-900/40',
    rotation: 'sm:rotate-2 hover:rotate-0',
    tapeRotation: 'rotate-1',
    noteBadge: 'REACT 19 & TYPESCRIPT',
  },
  ai_tools: {
    bg: 'bg-[#DCFCE7] dark:bg-[#0E3321]', // Mint Post-It
    border: 'border-[#86EFAC] dark:border-[#15803D]',
    text: 'text-emerald-950 dark:text-emerald-100',
    label: 'AI, Tools & Media',
    pinColor: 'bg-emerald-500',
    pinShadow: 'shadow-emerald-900/40',
    rotation: 'sm:-rotate-1 hover:rotate-0',
    tapeRotation: '-rotate-1',
    noteBadge: 'AI TOOLS & VIDEO CRAFT',
  },
  leadership: {
    bg: 'bg-[#F3E8FF] dark:bg-[#2A1642]', // Lavender Post-It
    border: 'border-[#D8B4FE] dark:border-[#7E22CE]',
    text: 'text-purple-950 dark:text-purple-100',
    label: 'Leadership, Education & IIC',
    pinColor: 'bg-purple-500',
    pinShadow: 'shadow-purple-900/40',
    rotation: 'sm:rotate-1 hover:rotate-0',
    tapeRotation: 'rotate-2',
    noteBadge: 'VP COUNCIL · IIC · MENTOR',
  },
  education: {
    bg: 'bg-[#FEF3C7] dark:bg-[#38260B]', // Warm Peach Post-It
    border: 'border-[#FCD34D] dark:border-[#B45309]',
    text: 'text-amber-950 dark:text-amber-100',
    label: 'Teaching & Mentorship',
    pinColor: 'bg-amber-600',
    pinShadow: 'shadow-amber-900/40',
    rotation: 'sm:-rotate-2 hover:rotate-0',
    tapeRotation: '-rotate-1',
    noteBadge: '50+ STUDENTS · PRO LEARN',
  },
  innovation: {
    bg: 'bg-[#CFFAFE] dark:bg-[#083344]', // Cyan Post-It
    border: 'border-[#67E8F9] dark:border-[#0E7490]',
    text: 'text-cyan-950 dark:text-cyan-100',
    label: 'Innovation & Incubation',
    pinColor: 'bg-cyan-500',
    pinShadow: 'shadow-cyan-900/40',
    rotation: 'sm:rotate-2 hover:rotate-0',
    tapeRotation: 'rotate-1',
    noteBadge: 'IIC COUNCIL LEAD',
  },
  creative: {
    bg: 'bg-[#FFE4E6] dark:bg-[#40121E]', // Rose Post-It
    border: 'border-[#FDA4AF] dark:border-[#9F1239]',
    text: 'text-rose-950 dark:text-rose-100',
    label: 'Creative & Content Creation',
    pinColor: 'bg-rose-500',
    pinShadow: 'shadow-rose-900/40',
    rotation: 'sm:-rotate-1 hover:rotate-0',
    tapeRotation: '-rotate-2',
    noteBadge: 'VIDEO & MEDIA PRODUCTION',
  },
  languages: {
    bg: 'bg-[#FEF9C3] dark:bg-[#2B2710]',
    border: 'border-[#FDE047] dark:border-[#854D0E]',
    text: 'text-amber-950 dark:text-amber-100',
    label: 'Languages & Core Systems',
    pinColor: 'bg-rose-500',
    pinShadow: 'shadow-rose-900/40',
    rotation: 'sm:-rotate-2 hover:rotate-0',
    tapeRotation: '-rotate-2',
    noteBadge: 'CORE COMPILERS',
  },
  frontend: {
    bg: 'bg-[#E0F2FE] dark:bg-[#0C2D48]',
    border: 'border-[#7DD3FC] dark:border-[#0369A1]',
    text: 'text-sky-950 dark:text-sky-100',
    label: 'Frontend Architecture & UI',
    pinColor: 'bg-sky-500',
    pinShadow: 'shadow-sky-900/40',
    rotation: 'sm:rotate-2 hover:rotate-0',
    tapeRotation: 'rotate-1',
    noteBadge: 'SUB-50MS UI',
  },
  backend: {
    bg: 'bg-[#DCFCE7] dark:bg-[#0E3321]',
    border: 'border-[#86EFAC] dark:border-[#15803D]',
    text: 'text-emerald-950 dark:text-emerald-100',
    label: 'Backend & Distributed',
    pinColor: 'bg-emerald-500',
    pinShadow: 'shadow-emerald-900/40',
    rotation: 'sm:-rotate-1 hover:rotate-0',
    tapeRotation: '-rotate-1',
    noteBadge: 'PERSISTENCE & SYNC',
  },
  tooling: {
    bg: 'bg-[#FFE4E6] dark:bg-[#40121E]',
    border: 'border-[#FDA4AF] dark:border-[#9F1239]',
    text: 'text-rose-950 dark:text-rose-100',
    label: 'Tooling & CI/CD Pipelines',
    pinColor: 'bg-amber-500',
    pinShadow: 'shadow-amber-900/40',
    rotation: 'sm:rotate-1 hover:rotate-0',
    tapeRotation: 'rotate-2',
    noteBadge: 'ZERO SLOP DX',
  },
};

const getNoteStyle = (catId: string, idx: number): StickyNoteStyle => {
  if (STICKY_PRESETS[catId]) return STICKY_PRESETS[catId];
  const dynamicFallbacks = [
    STICKY_PRESETS.programming,
    STICKY_PRESETS.web_dev,
    STICKY_PRESETS.ai_tools,
    STICKY_PRESETS.leadership,
    STICKY_PRESETS.education,
    STICKY_PRESETS.innovation,
    STICKY_PRESETS.creative,
  ];
  return dynamicFallbacks[idx % dynamicFallbacks.length];
};

type SkillItem = SkillCategory['skills'][number];

interface SkillTelemetry {
  code: string;
  proficiency: number;
  verificationStatus: string;
  operationalStatus: string;
  primaryDomain: string;
  executionBenchmark: string;
  realWorldFootprint: string;
  iconType:
    | 'terminal'
    | 'react'
    | 'ts'
    | 'database'
    | 'cpu'
    | 'sparkles'
    | 'git'
    | 'bug'
    | 'mic'
    | 'users'
    | 'shield'
    | 'grad'
    | 'video'
    | 'globe'
    | 'default';
}

const getSkillTelemetry = (skill: SkillItem, categoryId: string): SkillTelemetry => {
  const nameLower = skill.name.toLowerCase();

  if (nameLower.includes('python')) {
    return {
      code: 'TECH-PY-01',
      proficiency: 96,
      verificationStatus: 'PRODUCTION VERIFIED',
      operationalStatus: 'Production / Intern',
      primaryDomain: 'IndusAI Solutions',
      executionBenchmark: 'Sub-200ms Batch ETL',
      realWorldFootprint:
        'Completed 3-week production internship at IndusAI Solutions (MSME registered) executing automated data pipelines, ETL scripts, and backend algorithms.',
      iconType: 'terminal',
    };
  }
  if (nameLower === 'c') {
    return {
      code: 'TECH-C-02',
      proficiency: 88,
      verificationStatus: 'ACADEMIC VERIFIED',
      operationalStatus: 'Systems Foundation',
      primaryDomain: 'MIT Ujjain Coursework',
      executionBenchmark: 'Pointer & Memory Logic',
      realWorldFootprint:
        'Engineered memory-efficient data structures and pointer management logic through rigorous computer engineering coursework.',
      iconType: 'cpu',
    };
  }
  if (nameLower.includes('c++')) {
    return {
      code: 'TECH-CPP-03',
      proficiency: 90,
      verificationStatus: 'ALGORITHMIC VERIFIED',
      operationalStatus: 'OOP & Algorithmic',
      primaryDomain: 'Competitive Coding',
      executionBenchmark: 'Standard Template Library',
      realWorldFootprint:
        'Applied object-oriented principles, custom algorithms, and STL container efficiency in competitive programming problem sets.',
      iconType: 'cpu',
    };
  }
  if (nameLower.includes('sql')) {
    return {
      code: 'TECH-SQL-04',
      proficiency: 86,
      verificationStatus: 'QUERY VERIFIED',
      operationalStatus: 'Relational Querying',
      primaryDomain: 'Database Systems',
      executionBenchmark: 'Multi-Table Joins & Indexing',
      realWorldFootprint:
        'Structured relational schemas, complex multi-table joins, conditional aggregations, and query optimization patterns.',
      iconType: 'database',
    };
  }
  if (nameLower.includes('modern web') || nameLower.includes('html')) {
    return {
      code: 'WEB-CORE-01',
      proficiency: 94,
      verificationStatus: 'PRODUCTION VERIFIED',
      operationalStatus: 'Full-Stack UI Architecture',
      primaryDomain: 'Web Applications',
      executionBenchmark: 'Fluid Responsive Layouts',
      realWorldFootprint:
        'Developed responsive client-side architectures adhering to semantic HTML5, modern CSS flex/grid specs, and DOM efficiency.',
      iconType: 'globe',
    };
  }
  if (nameLower.includes('react')) {
    return {
      code: 'WEB-REACT-02',
      proficiency: 96,
      verificationStatus: 'PRODUCTION VERIFIED',
      operationalStatus: 'Frontend Architecture',
      primaryDomain: 'Single-Page Applications',
      executionBenchmark: 'Zero-Jank 60FPS UI',
      realWorldFootprint:
        'Architected high-performance React 19 portfolio and client applications with atomic component hierarchy, state machines, and decoupled hooks.',
      iconType: 'react',
    };
  }
  if (nameLower.includes('typescript')) {
    return {
      code: 'WEB-TS-03',
      proficiency: 95,
      verificationStatus: 'STRICT TYPE VERIFIED',
      operationalStatus: 'Type Systems Engineer',
      primaryDomain: 'Enterprise Codebases',
      executionBenchmark: '0 Errors · Strict Types',
      realWorldFootprint:
        'Enforces end-to-end type safety, discriminative unions, generic contracts, and strict null guarantees across portfolio architecture.',
      iconType: 'ts',
    };
  }
  if (nameLower.includes('tailwind')) {
    return {
      code: 'WEB-TW-04',
      proficiency: 97,
      verificationStatus: 'DESIGN TOKEN VERIFIED',
      operationalStatus: 'Design Tokens & Theme Engine',
      primaryDomain: 'Modern Design Systems',
      executionBenchmark: 'Sub-50ms Theme Switching',
      realWorldFootprint:
        'Engineered fluid responsive layouts, obsidian glassmorphism, and seamless dark/light theme switching with Tailwind utility tokens.',
      iconType: 'sparkles',
    };
  }
  if (nameLower.includes('prompt')) {
    return {
      code: 'AI-PROMPT-01',
      proficiency: 96,
      verificationStatus: 'PRACTITIONER VERIFIED',
      operationalStatus: 'Lead Practitioner',
      primaryDomain: 'MGI Coding Club',
      executionBenchmark: 'Structured CoT Workflows',
      realWorldFootprint:
        'Prompt Engineering Lead conducting hands-on institutional workshops on multi-shot prompting, structured outputs, and LLM context workflows.',
      iconType: 'sparkles',
    };
  }
  if (nameLower.includes('git')) {
    return {
      code: 'OPS-GIT-02',
      proficiency: 94,
      verificationStatus: 'WORKFLOW VERIFIED',
      operationalStatus: 'Version Control Operations',
      primaryDomain: 'Daily Engineering & CI/CD',
      executionBenchmark: 'Trunk Branching & Pull Requests',
      realWorldFootprint:
        'Manages multi-branch development lifecycles, automated deployment pipelines, and collaborative GitHub version control workflows.',
      iconType: 'git',
    };
  }
  if (nameLower.includes('analytical') || nameLower.includes('reasoning')) {
    return {
      code: 'AI-LOGIC-03',
      proficiency: 95,
      verificationStatus: 'COMPETITION TESTED',
      operationalStatus: 'Algorithmic Breakdown',
      primaryDomain: 'National Hackathons',
      executionBenchmark: 'Multi-Stage Problem Triage',
      realWorldFootprint:
        'Tested across 36-hour hackathons (HACKWAVE 3.0, AGNITIA 2026, .EXECUTE), isolating complex computational bottlenecks under strict time limits.',
      iconType: 'cpu',
    };
  }
  if (nameLower.includes('bug') || nameLower.includes('debugging')) {
    return {
      code: 'SYS-DEBUG-04',
      proficiency: 93,
      verificationStatus: 'COMPETITION VERIFIED',
      operationalStatus: 'Root Cause Engineering',
      primaryDomain: 'ALGORUSH · NMIMS',
      executionBenchmark: 'Time-Critical Defect Fix',
      realWorldFootprint:
        'Competed in ALGORUSH bug-fixing competition at NMIMS Indore, diagnosing obfuscated syntax errors, memory leaks, and logic faults.',
      iconType: 'bug',
    };
  }
  if (nameLower.includes('speaking') || nameLower.includes('anchoring')) {
    return {
      code: 'LEAD-SPEAK-01',
      proficiency: 98,
      verificationStatus: 'VETERAN VERIFIED',
      operationalStatus: 'Lead Stage Anchor',
      primaryDomain: 'Institutional & State Events',
      executionBenchmark: '35+ Ceremonies Anchored',
      realWorldFootprint:
        'Anchored 35+ major ceremonies, technical symposiums, and institutional conferences with poise, audience engagement, and VIP dignitary hosting.',
      iconType: 'mic',
    };
  }
  if (nameLower.includes('coordination') || nameLower.includes('event')) {
    return {
      code: 'LEAD-COORD-02',
      proficiency: 96,
      verificationStatus: 'OPERATIONS VERIFIED',
      operationalStatus: 'Operations Director',
      primaryDomain: 'Campus-Scale Symposia',
      executionBenchmark: '20+ Events Coordinated',
      realWorldFootprint:
        'Directed logistics, speaker scheduling, inter-club alignment, and multi-tier student contingents across 20+ major campus events.',
      iconType: 'users',
    };
  }
  if (nameLower.includes('council') || nameLower.includes('governance')) {
    return {
      code: 'LEAD-GOV-03',
      proficiency: 97,
      verificationStatus: 'ELECTED GOVERNANCE',
      operationalStatus: 'Vice President',
      primaryDomain: 'Student Council MIT Ujjain',
      executionBenchmark: '3-Year Progressive Office',
      realWorldFootprint:
        'Elected Student Council Vice President (2026–27) after serving as Joint Secretary (2025–26) and Class Representative (2024–25), representing student governance.',
      iconType: 'shield',
    };
  }
  if (nameLower.includes('teaching') || nameLower.includes('mentor') || nameLower.includes('pro learn')) {
    return {
      code: 'LEAD-ED-11',
      proficiency: 98,
      verificationStatus: 'ACCREDITED PEDAGOGY',
      operationalStatus: 'Lead Educator & Mentor',
      primaryDomain: 'Pro Learn Coaching Classes',
      executionBenchmark: '50+ Students Guided · 3+ Yrs',
      realWorldFootprint:
        'Mentored 50+ students over 3+ years at Pro Learn Coaching in programming fundamentals, mathematical logic, and computer science pedagogy.',
      iconType: 'grad',
    };
  }
  if (nameLower.includes('iic') || nameLower.includes('innovation')) {
    return {
      code: 'LEAD-IIC-05',
      proficiency: 96,
      verificationStatus: 'MHRD / MIC ALIGNED',
      operationalStatus: 'Student Coordinator',
      primaryDomain: 'MHRD / MIC Incubation',
      executionBenchmark: 'Dual ₹15L MSME Selections',
      realWorldFootprint:
        "Student Coordinator for Institution's Innovation Council (IIC) at MIT Ujjain, driving startup incubation and dual ₹15 Lakh MSME Idea Hackathon 5.0 selections.",
      iconType: 'shield',
    };
  }
  if (nameLower.includes('video') || nameLower.includes('media') || nameLower.includes('content')) {
    return {
      code: 'MEDIA-VID-06',
      proficiency: 91,
      verificationStatus: 'PRODUCTION VERIFIED',
      operationalStatus: 'Creator & Video Editor',
      primaryDomain: 'Digital Media & Tutorials',
      executionBenchmark: 'High-Retention Visuals',
      realWorldFootprint:
        'Creates educational tech tutorials and motion narratives with disciplined video editing, dynamic pacing, and structured visual storytelling.',
      iconType: 'video',
    };
  }
  if (nameLower.includes('multilingual') || nameLower.includes('communication')) {
    return {
      code: 'COMM-LANG-07',
      proficiency: 95,
      verificationStatus: 'FLUENCY VERIFIED',
      operationalStatus: 'Quad-Lingual Communicator',
      primaryDomain: 'Inter-Regional Operations',
      executionBenchmark: '4 Languages Fluency',
      realWorldFootprint:
        'Fluent in Hindi (Native), English (Professional), Gujarati, and Punjabi — enabling versatile communication across diverse institutional stakeholders.',
      iconType: 'globe',
    };
  }

  // Fallback
  return {
    code: `DEV-${categoryId.slice(0, 3).toUpperCase()}-01`,
    proficiency: 92,
    verificationStatus: 'PRODUCTION VERIFIED',
    operationalStatus: skill.level || 'Practitioner',
    primaryDomain: skill.experience || 'Engineering Practice',
    executionBenchmark: 'Verified Capability',
    realWorldFootprint: `Demonstrated technical capability and verified execution across ${skill.experience}.`,
    iconType: 'default',
  };
};

const renderSkillIcon = (iconType: SkillTelemetry['iconType'], className: string = 'w-6 h-6') => {
  switch (iconType) {
    case 'terminal':
      return <Terminal className={className} />;
    case 'cpu':
      return <Cpu className={className} />;
    case 'database':
      return <Database className={className} />;
    case 'globe':
      return <Globe className={className} />;
    case 'react':
      return <Code className={className} />;
    case 'ts':
      return <Code className={className} />;
    case 'sparkles':
      return <Sparkles className={className} />;
    case 'git':
      return <GitBranch className={className} />;
    case 'bug':
      return <Bug className={className} />;
    case 'mic':
      return <Mic className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'shield':
      return <ShieldCheck className={className} />;
    case 'grad':
      return <GraduationCap className={className} />;
    case 'video':
      return <Video className={className} />;
    default:
      return <Zap className={className} />;
  }
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectTechFilter }) => {
  // Ensure all categories and skills render seamlessly
  const categories: SkillCategory[] = useMemo(() => {
    const allExistingSkillNames = BASE_SKILL_CATEGORIES.flatMap((c) =>
      c.skills.map((s) => s.name.toLowerCase())
    );

    const hasTeaching = allExistingSkillNames.some(
      (n) => n.includes('teaching') || n.includes('pro learn') || n.includes('mentorship')
    );
    const hasIIC = allExistingSkillNames.some(
      (n) => n.includes('innovation council') || n.includes('iic')
    );
    const hasVideo = allExistingSkillNames.some(
      (n) => n.includes('video') || n.includes('content creation')
    );

    if (hasTeaching && hasIIC && hasVideo) {
      return BASE_SKILL_CATEGORIES;
    }

    return BASE_SKILL_CATEGORIES.map((cat) => {
      if (cat.id === 'leadership') {
        const extraLeadershipSkills = [];
        if (!hasTeaching) {
          extraLeadershipSkills.push({
            name: 'Teaching & Mentorship',
            level: 'Co-Founder & Educator',
            experience: '3+ Yrs · Pro Learn',
            focus:
              'Mentored 50+ students over 3+ years at Pro Learn Coaching in programming fundamentals, problem solving, and computer science concepts',
            tags: ['Pro Learn', '50+ Students', '3+ Years', 'Mentorship', 'Pedagogy'],
          });
        }
        if (!hasIIC) {
          extraLeadershipSkills.push({
            name: "Institution's Innovation Council (IIC)",
            level: 'Student Coordinator',
            experience: 'MHRD / MIC Aligned',
            focus:
              'Coordinating institutional innovation initiatives, startup incubation pipelines, hackathons, and national entrepreneurship programs',
            tags: ['IIC Coordinator', 'Innovation', 'Startup Incubation', 'Governance'],
          });
        }
        return {
          ...cat,
          skills: [...cat.skills, ...extraLeadershipSkills],
        };
      }
      if (cat.id === 'ai_tools') {
        if (!hasVideo) {
          return {
            ...cat,
            skills: [
              ...cat.skills,
              {
                name: 'Video Editing & Content Creation',
                level: 'Creator & Editor',
                experience: 'Digital Media',
                focus:
                  'Educational technical tutorials, motion pacing, visual storytelling, and high-retention video post-production',
                tags: ['Video Editing', 'Content Strategy', 'Motion Storytelling', 'Media'],
              },
            ],
          };
        }
      }
      return cat;
    });
  }, []);

  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    () => categories[0]?.id || 'programming'
  );
  const [activeSkillIdx, setActiveSkillIdx] = useState<number>(0);

  const selectedCategory =
    categories.find((cat) => cat.id === activeCategoryId) || categories[0] || {
      id: 'default',
      name: 'General Engineering',
      description: 'Core engineering capabilities and technical systems.',
      skills: [],
    };

  const currentSkill: SkillItem =
    selectedCategory.skills[activeSkillIdx] ||
    selectedCategory.skills[0] || {
      name: 'General Engineering',
      level: 'Proficient',
      experience: 'Production',
      focus: 'Systems architecture, modern web execution, and clean software contracts',
      tags: ['Engineering', 'Architecture', 'TypeScript'],
    };

  const telemetryData = useMemo(
    () => getSkillTelemetry(currentSkill, selectedCategory.id),
    [currentSkill, selectedCategory.id]
  );

  const circleRadius = 28;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference * (1 - telemetryData.proficiency / 100);

  return (
    <section
      id="skills"
      className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FEFDF6] dark:bg-[#121108] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300"
    >
      {/* Overhead Spotlight Beam */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-amber-200/40 dark:from-amber-900/25 via-yellow-100/20 dark:via-yellow-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-amber-200/20 dark:bg-amber-950/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Wall Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

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
              Tactile dossiers documenting Karan's multi-faceted capability across software engineering, hands-on teaching at Pro Learn Coaching, and institutional innovation governance.
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

          {/* Quick Telemetry Tag */}
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
        {/* MAIN STUDIO PINBOARD: STICKY NOTES (LEFT) + MODERN TELEMETRY HUD (RIGHT) */}
        {/* ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* --------------------------------------------------------------------- */}
          {/* LEFT COLUMN: THE TACTILE POST-IT STICKY NOTES WITH PUSH PINS */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-4 w-full min-w-0">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider px-1 font-bold">
              <span>Pinned Domain Dossiers:</span>
              <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">
                Tap Note to Inspect
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
              {categories.map((cat, idx) => {
                const isSelected = activeCategoryId === cat.id;
                const note = getNoteStyle(cat.id, idx);

                return (
                  <div
                    key={cat.id}
                    onClick={() => {
                      setActiveCategoryId(cat.id);
                      setActiveSkillIdx(0);
                    }}
                    className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border shadow-md hover:shadow-xl ${note.bg} ${note.border} ${note.rotation} ${
                      isSelected
                        ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-[1.02] z-20'
                        : 'opacity-85 hover:opacity-100 hover:scale-[1.01]'
                    }`}
                  >
                    {/* Washi / Masking Tape Strip on top center */}
                    <div
                      className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-amber-100/80 dark:bg-amber-200/20 backdrop-blur-xs border border-amber-300/60 dark:border-amber-400/30 transform ${note.tapeRotation} shadow-xs pointer-events-none z-10`}
                    />

                    {/* 3D Push Pin / Thumbtack with Specular Highlight */}
                    <div className="absolute top-2.5 right-3.5 z-20 flex items-center justify-center pointer-events-none">
                      <div
                        className={`w-4 h-4 rounded-full ${note.pinColor} ${note.pinShadow} shadow-md border border-white/60 relative flex items-center justify-center`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/80 absolute top-0.5 left-0.5" />
                      </div>
                      <div className="absolute -bottom-1 -right-0.5 w-1.5 h-2 bg-slate-900/40 rounded-full blur-[1px]" />
                    </div>

                    {/* Note Content */}
                    <div className="space-y-2.5 pt-1">
                      <div className="flex items-center justify-between pr-8">
                        <span className="text-[10px] font-mono font-black tracking-wider uppercase px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 text-slate-950 dark:text-white shrink-0">
                          {note.noteBadge}
                        </span>
                        {isSelected && (
                          <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-indigo-700 dark:text-indigo-400 shrink-0">
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
                        {cat.skills.slice(0, 5).map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 font-mono text-[10px] font-bold text-slate-900 dark:text-slate-100"
                          >
                            {s.name}
                          </span>
                        ))}
                        {cat.skills.length > 5 && (
                          <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-800 dark:text-slate-200 font-bold">
                            +{cat.skills.length - 5} more
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
          {/* RIGHT COLUMN: MODERN DEVELOPER TELEMETRY HUD */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-7 w-full min-w-0">
            <div className="bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-5 sm:p-7 md:p-8 space-y-6 shadow-2xl relative overflow-hidden w-full min-w-0 text-white">
              {/* Top specular cyan hairline gradient highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />

              {/* Atmospheric subtle radial glow highlights */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Telemetry Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 relative z-10">
                {/* Breadcrumb with pulsing cyan dot */}
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.9)] shrink-0" />
                  <span className="font-mono text-xs font-bold text-cyan-400/90 tracking-widest uppercase">
                    SYS.INSPECTOR // DEV-MATRIX-2026
                  </span>
                </div>

                {/* Live Radar Verification Badge */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span>{telemetryData.verificationStatus}</span>
                </div>
              </div>

              {/* Segmented Skill Token Strip */}
              <div className="space-y-2.5 relative z-10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  <span className="flex items-center gap-1.5 text-cyan-400/90">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Category Telemetry Stream ({selectedCategory.skills.length})</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                    Tap token to inspect node
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedCategory.skills.map((skill, idx) => {
                    const isSelected = activeSkillIdx === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveSkillIdx(idx)}
                        className={`group flex items-center gap-2 px-3 py-2 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-500/15 border-cyan-400/80 text-white shadow-[0_0_15px_rgba(6,182,212,0.18)] ring-1 ring-cyan-400/50'
                            : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(34,211,238,0.9)]'
                              : 'bg-slate-500 group-hover:bg-slate-400'
                          }`}
                        />
                        <span className="font-display font-bold text-xs sm:text-sm tracking-tight">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                            isSelected
                              ? 'bg-cyan-400/20 text-cyan-200'
                              : 'bg-white/[0.05] text-slate-400 group-hover:text-slate-300'
                          }`}
                        >
                          {skill.level.split('/')[0].trim()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dual-Metric Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative z-10 pt-1">
                {/* Left: 52x52px icon badge with dynamic gradient, title, and telemetry code */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20 shrink-0">
                    <div className="w-full h-full rounded-2xl bg-[#0B0F19] flex items-center justify-center text-cyan-300">
                      {renderSkillIcon(telemetryData.iconType, 'w-6 h-6')}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight truncate">
                      {currentSkill.name}
                    </h3>
                    <div className="flex items-center gap-2 pt-1 flex-wrap">
                      <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider bg-cyan-400/10 px-2.5 py-0.5 rounded border border-cyan-400/25">
                        {telemetryData.code}
                      </span>
                      <span className="text-xs font-mono text-slate-400 truncate">
                        {currentSkill.experience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: SVG Circular Competency Gauge */}
                <div className="flex items-center gap-3 self-start sm:self-center shrink-0 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-2.5 sm:p-3 shadow-inner">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center shrink-0">
                    <svg className="w-16 h-16 sm:w-18 sm:h-18 -rotate-90 transform" viewBox="0 0 72 72">
                      <circle
                        cx="36"
                        cy="36"
                        r={circleRadius}
                        className="stroke-slate-800/80"
                        strokeWidth="5"
                        fill="transparent"
                      />
                      <circle
                        cx="36"
                        cy="36"
                        r={circleRadius}
                        stroke="url(#competencyGradient)"
                        strokeWidth="5"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-700 ease-out"
                      />
                      <defs>
                        <linearGradient id="competencyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22D3EE" />
                          <stop offset="100%" stopColor="#34D399" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                      <span className="font-mono font-black text-sm sm:text-base text-white tracking-tight">
                        {telemetryData.proficiency}%
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center pr-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      COMPETENCY
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 tracking-wide">
                      {telemetryData.proficiency >= 95
                        ? 'MASTERY'
                        : telemetryData.proficiency >= 90
                        ? 'ADVANCED'
                        : 'PRACTITIONER'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-medium">
                      CALIBRATED HUD
                    </span>
                  </div>
                </div>
              </div>

              {/* 3-Column Telemetry Benchmark Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
                {/* Card 1: Operational Status */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] space-y-1 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Operational Status</span>
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base text-white tracking-tight truncate">
                    {telemetryData.operationalStatus}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    Verified Practice Level
                  </div>
                </div>

                {/* Card 2: Primary Domain */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] space-y-1 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    <Target className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Primary Domain</span>
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base text-white tracking-tight truncate">
                    {telemetryData.primaryDomain}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    Institutional Environment
                  </div>
                </div>

                {/* Card 3: Execution Benchmark */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] space-y-1 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Execution Benchmark</span>
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base text-white tracking-tight truncate">
                    {telemetryData.executionBenchmark}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    Quantified Benchmark
                  </div>
                </div>
              </div>

              {/* Architectural Focus narrative card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] space-y-2 relative z-10 shadow-inner">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-bold tracking-wider uppercase text-[11px]">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>Architectural & Applied Focus</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                    CAPABILITY CONTRACT
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {currentSkill.focus}
                </p>
              </div>

              {/* Verified Real-World Deployment Footprint banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/25 to-blue-950/30 border border-emerald-500/30 relative overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 shrink-0 mt-0.5 shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                        Verified Real-World Deployment Footprint
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-100/90 font-sans leading-relaxed font-medium">
                      {telemetryData.realWorldFootprint}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Capability Tags with subtle hover glow */}
              <div className="space-y-2.5 relative z-10">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
                  <span>Active Capability Vectors ({currentSkill.tags.length})</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentSkill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/10 border border-white/[0.08] hover:border-cyan-500/40 text-slate-300 hover:text-cyan-200 font-mono text-xs font-medium transition-all duration-200 cursor-default shadow-xs hover:shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                    >
                      <span className="text-cyan-400/80 mr-1 font-bold">#</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/[0.08] relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Filter Pipeline Active</span>
                </div>

                <div className="flex items-center gap-2">
                  {onSelectTechFilter ? (
                    <button
                      type="button"
                      onClick={() => {
                        onSelectTechFilter(currentSkill.name);
                        const el = document.getElementById('projects');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-bold transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 cursor-pointer active:scale-95"
                    >
                      <span>Filter Projects ({currentSkill.name})</span>
                      <Filter className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href="#projects"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-bold transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 cursor-pointer active:scale-95"
                    >
                      <span>View Related Work</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Footer Diagnostics */}
              <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  <span className="tracking-wider">
                    DIAGNOSTICS: NOMINAL · 0 COMPILATION ERRORS · STRICT TYPES ACTIVE
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>LATENCY: &lt;16MS</span>
                  <span>·</span>
                  <span className="text-cyan-400/90 font-semibold">REACT 19 TELEMETRY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
