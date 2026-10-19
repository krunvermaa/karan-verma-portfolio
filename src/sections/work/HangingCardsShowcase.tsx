import React, { useState, useRef, useEffect } from 'react';
import { Project } from '@/data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { ArrowUpRight, Sparkles, ChevronLeft, ChevronRight, Terminal, Activity } from 'lucide-react';

interface HangingCardsShowcaseProps {
  onSelectProject: (project: Project) => void;
}

// 5 Curated Software Deliverables & Technical Architectures
// Unique focus: strictly code, architectures, and deployed systems (no marks or event counts)
const CURATED_SYSTEMS: Project[] = [
  {
    id: 'agri-market-platform',
    number: '01',
    title: 'Smart AI Agri Market Access',
    category: 'Distributed Systems & AgriTech',
    tagline: 'Real-time mandi aggregation, FastAPI REST services, crop price prediction window',
    description: 'High-throughput agricultural marketplace aggregating live mandi rates, exposing sub-200ms FastAPI REST endpoints, and computing crop price prediction windows to link farmers directly with certified buyers.',
    problem: 'Information asymmetry and regional mandi pricing fragmentation lead to severe market inefficiency and distress sales for agricultural producers.',
    solution: 'Constructed an asynchronous Python data aggregation pipeline paired with FastAPI REST microservices and direct buyer settlement protocols.',
    architecture: [
      'FastAPI asynchronous REST service delivering sub-200ms mandi rate lookups',
      'Python data aggregation pipeline ingesting regional commodity price streams',
      'Time-series crop price prediction engine calculating optimal harvest selling windows',
      'Mobile-optimized low-bandwidth transaction interface for rural network resiliency',
    ],
    features: [
      'Live multi-mandi commodity rate comparison across regional markets',
      'Crop price trend forecasting window with seasonal variance modeling',
      'Zero-intermediary direct linkage between verified buyers and farmers',
      'FastAPI REST endpoints with sub-200ms response latency',
    ],
    challenges: [
      'Normalizing unstructured and erratic price streams from decentralized mandi stations',
      'Maintaining reliable REST responsiveness over intermittent rural network connections',
    ],
    outcomes: [
      { label: 'MSME 5.0 Selection', value: '₹15 Lakh Grant' },
      { label: 'Query Latency', value: '< 200ms' },
      { label: 'Mandi Aggregation', value: 'Real-Time' },
      { label: 'Intermediaries', value: 'Zero Middlemen' },
    ],
    technologies: ['Python', 'FastAPI', 'Machine Learning', 'React 19', 'Tailwind CSS', 'SQL'],
    accentColor: '#10B981',
    folderColor: '#D1FAE5',
    githubUrl: 'https://github.com/krunvermaa',
    demoUrl: 'https://github.com/krunvermaa',
    year: '2025',
    highlights: ['FastAPI REST Engine', 'Real-Time Mandi Aggregation', 'Crop Price Forecasting'],
    mockupType: 'agri-market',
    team: ['Sourav Chaudhary', 'Sneha Patidar', 'Sneha Sharma', 'Karan Verma'],
    announcement: 'Selected under MSME Idea Hackathon 5.0 for ₹15 Lakh grant-in-aid consideration',
  },
  {
    id: 'railway-navigation-platform',
    number: '02',
    title: 'NavigAItor — AI Spatial Railway Platform',
    category: 'Spatial AI & Graph Transit Architecture',
    tagline: 'Graph routing algorithms, offline indoor topological mapping, <150ms route calculation',
    description: 'Sub-150ms spatial transit engine calculating optimal indoor routes across multi-platform railway stations using weighted graph algorithms, topological floor-plan caches, and live train delay telemetry.',
    problem: 'Sprawling multi-level railway junctions create severe commuter disorientation, bottle-necking foot-over-bridges and causing missed train connections.',
    solution: 'Engineered a weighted spatial graph routing engine with dynamic edge weighting for accessibility, client-side offline topological caching, and real-time platform delay synchronization.',
    architecture: [
      'Weighted Dijkstra spatial pathfinding algorithm with dynamic accessibility weights',
      'Offline-first indoor topological mapping cached locally for zero-latency lookups',
      'Real-time train telemetry ingestion engine syncing platform changes under 150ms',
      'Multi-floor indoor node graph connecting concourses, escalators, and platforms',
    ],
    features: [
      'Sub-150ms route recalculation on sudden train platform reassignments',
      'Topological indoor navigation with step-by-step turn guidance',
      'Accessible transit routing mode prioritizing ramps, escalators, and elevators',
      'Offline topological station map caching for connectivity-loss recovery',
    ],
    challenges: [
      'Recalculating multi-floor routes instantaneously when platform changes occur during rush hours',
      'Maintaining high-precision topological coordinate spaces without indoor GPS availability',
    ],
    outcomes: [
      { label: 'Route Computation', value: '< 150ms' },
      { label: 'Path Engine', value: 'Weighted Graph' },
      { label: 'Offline Mapping', value: 'Local Cache' },
      { label: 'MSME 5.0 Selection', value: '₹15 Lakh Grant' },
    ],
    technologies: ['Python', 'Graph Algorithms', 'TypeScript', 'FastAPI', 'Tailwind CSS', 'SQL'],
    accentColor: '#6366F1',
    folderColor: '#E0E7FF',
    githubUrl: 'https://github.com/krunvermaa',
    demoUrl: 'https://github.com/krunvermaa',
    year: '2025',
    highlights: ['<150ms Graph Routing', 'Topological Station Mapping', 'Offline Vector Cache'],
    mockupType: 'railway-nav',
    team: ['Sourav Chaudhary', 'Sneha Patidar', 'Sneha Sharma', 'Karan Verma'],
    announcement: 'Selected under MSME Idea Hackathon 5.0 for ₹15 Lakh grant-in-aid consideration',
  },
  {
    id: 'indusai-python-engine',
    number: '03',
    title: 'IndusAI Automation Pipeline',
    category: 'Backend Systems & Production Automation',
    tagline: 'Automated batch ETL transformations, schema validation, exception handling',
    description: 'Production Python automation suite built at IndusAI Solutions processing 14,800+ records per batch run with rigorous schema validation, automated exception recovery, and 99.9% pipeline uptime.',
    problem: 'Manual multi-source data ingestion and format synchronization led to corrupt downstream records and high latency in analytics pipelines.',
    solution: 'Constructed an automated batch ETL engine featuring functional data validation routines, resilient exception interception, and structured JSON telemetry auditing.',
    architecture: [
      'Modular Python ETL processing pipeline with clean functional abstractions',
      'Automated schema validation filters enforcing strict data contract integrity',
      'Structured exception recovery pipeline with timestamped telemetry logging',
      'Automated batch verification scripts integrated with Git version control',
    ],
    features: [
      'Automated batch ETL routines transforming 14.8k+ client records per execution',
      'Dynamic schema anomaly detection intercepting malformed payloads before ingestion',
      'Real-time execution telemetry console reporting runtime benchmarks (<1.25s)',
      '99.9% execution uptime with zero silent data corruption',
    ],
    challenges: [
      'Intercepting corrupt and irregularly formatted external records without aborting batch jobs',
      'Optimizing Python execution memory footprint during high-volume batch streaming',
    ],
    outcomes: [
      { label: 'Pipeline Uptime', value: '99.9%' },
      { label: 'Batch Processing', value: '14.8k Rows' },
      { label: 'Execution Runtime', value: '1.24s' },
      { label: 'Verification', value: 'MSME Certified' },
    ],
    technologies: ['Python 3.12', 'Batch ETL', 'Data Pipelines', 'Schema Validation', 'Git', 'CLI'],
    accentColor: '#F59E0B',
    folderColor: '#FEF3C7',
    githubUrl: 'https://github.com/krunvermaa',
    demoUrl: 'https://github.com/krunvermaa',
    year: '2025',
    highlights: ['Automated Batch ETL', 'Strict Schema Validation', '99.9% Pipeline Uptime'],
    mockupType: 'python-pipeline',
  },
  {
    id: 'hacktour-web3-growth',
    number: '04',
    title: 'HACKTOUR IND Web3 Platform',
    category: 'Decentralized Infrastructure & Developer Systems',
    tagline: 'Decentralized documentation infrastructure, technical developer onboarding',
    description: 'Technical developer infrastructure and onboarding architecture bridging protocols (Arweave, Zcash, Avalanche) with interactive technical documentation, code walkthroughs, and developer activation pipelines.',
    problem: 'High cryptographic complexity, fragmented developer documentation, and steep onboarding curves deter developers from building on decentralized protocols.',
    solution: 'Designed and deployed structured technical documentation frameworks, protocol developer onboarding funnels, and ecosystem telemetry pipelines.',
    architecture: [
      'Decentralized technical documentation architecture for protocol specifications',
      'Developer onboarding funnel with progressive code tutorials and milestone gates',
      'Ecosystem activation pipelines across Arweave Permaweb & Avalanche City Connect',
      'Real-time community engagement velocity and developer retention analytics',
    ],
    features: [
      'Decentralized technical documentation for cutting-edge blockchain protocols',
      'Step-by-step developer onboarding pipelines increasing ecosystem participation',
      'Developer activation across Arweave Buildstation and Avalanche developer summits',
      '+140% developer outreach velocity across multi-channel ecosystem hubs',
    ],
    challenges: [
      'Translating deep cryptographic and zero-knowledge protocol mechanics into accessible technical guides',
      'Maintaining real-time synchronization across rapidly evolving decentralized protocol APIs',
    ],
    outcomes: [
      { label: 'Growth Velocity', value: '+140%' },
      { label: 'Protocol Ecosystems', value: 'Arweave · Zcash · Avax' },
      { label: 'Infrastructure', value: 'Decentralized Docs' },
      { label: 'Term Length', value: '5-Month Internship' },
    ],
    technologies: ['Web3 Protocols', 'Developer Tooling', 'Technical Docs', 'Community Telemetry'],
    accentColor: '#EC4899',
    folderColor: '#FCE7F3',
    githubUrl: 'https://github.com/krunvermaa',
    demoUrl: 'https://github.com/krunvermaa',
    year: '2025',
    highlights: ['Developer Onboarding Pipeline', 'Decentralized Documentation', '+140% Velocity'],
    mockupType: 'web3-growth',
  },
  {
    id: 'tactile-portfolio-os',
    number: '05',
    title: 'Tactile Portfolio OS',
    category: 'Frontend Architecture & Creative Engineering',
    tagline: 'React 19, strict TypeScript contracts, Tailwind token system, 0-jank 60FPS',
    description: 'Production-grade tactile portfolio web operating system engineered with React 19, strict TypeScript interfaces, a tokenized Day/Night atmospheric tint engine, and 60FPS physics-based clothesline geometry.',
    problem: 'Standard portfolio websites are static, generic, lack tactile feedback, and frequently drop animation frames during layout transforms.',
    solution: 'Architected a modular tactile frontend operating system using React 19, fine-grained CSS token engines, spring motion curves, and strict zero-any TypeScript contracts.',
    architecture: [
      'React 19 component architecture with immutable state flows and strict contracts',
      'Tailwind CSS v4 design token system powering dynamic Day/Night atmospheric tint engine',
      'Zero-jank 60FPS clothesline physics engine computing drooping curves and tilts',
      'Natively selectable text architecture with accessible modal dialog keyboard traps',
    ],
    features: [
      'Interactive clothesline physics with responsive curve drooping geometry',
      'Bespoke visual telemetry HUDs for live system status inspection',
      'Zero layout shifts (0 CLS) and sub-50ms interaction response latency',
      'Strict WCAG AAA contrast ratios across Day and Night visual themes',
    ],
    challenges: [
      'Delivering 60FPS hardware-accelerated SVG curve animations without triggering CPU re-flows',
      'Enforcing strict typing contracts across all portfolio data models without loose types',
    ],
    outcomes: [
      { label: 'Animation Cadence', value: '60 FPS (0 Jank)' },
      { label: 'Type Safety', value: '100% Strict TS' },
      { label: 'Cumulative Layout Shift', value: '0 CLS' },
      { label: 'Response Latency', value: '< 50ms' },
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'SVG Geometry', 'Motion'],
    accentColor: '#06B6D4',
    folderColor: '#CFFAFE',
    githubUrl: 'https://github.com/krunvermaa/Portfolio',
    demoUrl: 'https://github.com/krunvermaa',
    year: '2026',
    highlights: ['React 19 Runtime', 'Zero-Jank 60FPS', 'Strict TypeScript Contracts'],
    mockupType: 'os-simulator',
  },
];

// Bespoke Visual Preview for System 5: Tactile Portfolio OS
const TactileOsPreview: React.FC = () => (
  <div className="w-full h-full min-h-[128px] bg-[#0A101D] text-slate-200 p-2.5 flex flex-col justify-between font-mono text-[10px] relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

    {/* Window Header */}
    <div className="flex items-center justify-between border-b border-cyan-900/50 pb-1.5 relative z-10">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-bold text-white text-[11px] font-sans">Tactile Portfolio OS</span>
      </div>
      <span className="text-[9px] font-mono text-cyan-300 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-800 font-bold">
        React 19 · 60FPS
      </span>
    </div>

    {/* Telemetry Metrics Grid */}
    <div className="grid grid-cols-3 gap-1.5 my-1 relative z-10 text-center">
      <div className="p-1 rounded bg-slate-900/90 border border-cyan-800/40">
        <span className="block text-[8px] text-cyan-400 font-bold">FRAME RATE</span>
        <span className="text-white font-bold text-[10px]">60 FPS</span>
      </div>
      <div className="p-1 rounded bg-slate-900/90 border border-cyan-800/40">
        <span className="block text-[8px] text-cyan-400 font-bold">TYPE SAFETY</span>
        <span className="text-emerald-400 font-bold text-[10px]">Strict 100%</span>
      </div>
      <div className="p-1 rounded bg-slate-900/90 border border-cyan-800/40">
        <span className="block text-[8px] text-cyan-400 font-bold">CLS JANK</span>
        <span className="text-cyan-300 font-bold text-[10px]">0.00</span>
      </div>
    </div>

    {/* Terminal / Status Line */}
    <div className="flex items-center justify-between pt-1 border-t border-cyan-950 text-[9px] text-slate-400 relative z-10 font-mono">
      <div className="flex items-center gap-1 truncate max-w-[170px]">
        <Terminal className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
        <span className="text-cyan-300 truncate">vite build: 0 jank runtime</span>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <Activity className="w-2.5 h-2.5 text-emerald-400" />
        <span className="text-emerald-400 font-bold">ACTIVE</span>
      </div>
    </div>
  </div>
);

export const HangingCardsShowcase: React.FC<HangingCardsShowcaseProps> = ({ onSelectProject }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Card tilts following the Astro clothesline curve on desktop: refined subtle angles
  const tiltAngles = [-4.5, -2, 0, 2, 4.5];
  const verticalOffsets = [10, 22, 28, 22, 10]; // Drooping curve offset

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="work" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F7FF] dark:bg-[#060D1A] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300">
      {/* Atmospheric Ambient Lighting Glows - Electric Cyan & Deep Cobalt/Sapphire Blue */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-cyan-400/35 dark:from-cyan-900/30 via-blue-300/25 dark:via-blue-950/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 sm:right-1/4 w-[700px] h-[350px] bg-gradient-to-tr from-blue-300/25 dark:from-indigo-950/20 via-cyan-300/20 to-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-24 w-[450px] h-[250px] bg-sky-200/20 dark:bg-cyan-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10 relative z-10">
        {/* Section Header (Astro aesthetic with unique software deliverables focus) */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-cyan-200/90 dark:border-cyan-800 shadow-2xs text-xs font-mono text-cyan-900 dark:text-cyan-300 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Interactive Clothesline · Production Software Deliverables</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08] transition-colors">
            Engineered systems for <br />
            <span className="text-cyan-600 dark:text-cyan-400">performance</span>, latency & scale.
          </h2>

          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 font-sans max-w-2xl mx-auto transition-colors">
            Inspect verified codebases, backend REST pipelines, spatial graph algorithms, and reactive UI runtimes. Hover to view telemetry or click to open the complete architectural case study.
          </p>

          {/* Mobile Swipe / Scroll Helper Navigation */}
          <div className="lg:hidden flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-surface border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition shadow-2xs cursor-pointer touch-manipulation"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold px-1">
              Swipe 5 Deliverables
            </span>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-surface border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition shadow-2xs cursor-pointer touch-manipulation"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Hanging Clothesline Curve & Cards */}
        <div
          ref={scrollContainerRef}
          className="relative pt-6 sm:pt-8 pb-10 sm:pb-12 overflow-x-auto lg:overflow-visible scrollbar-none snap-x snap-mandatory scroll-smooth"
        >
          {/* SVG Clothesline Wire Curve (ASTRO Reference) - visible on lg screens with cyan/blue ambient highlights */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-24 pointer-events-none z-0">
            <svg
              className="w-full h-full fill-none"
              preserveAspectRatio="none"
              viewBox="0 0 1200 80"
            >
              {/* Cyan/blue ambient highlight curve */}
              <path
                d="M 0,22 Q 600,85 1200,22"
                strokeWidth="5"
                className="stroke-cyan-400/25 dark:stroke-cyan-400/30"
              />
              {/* High-contrast dashed wire cable */}
              <path
                d="M 0,22 Q 600,85 1200,22"
                strokeWidth="2"
                strokeDasharray="5 3"
                className="stroke-slate-400 dark:stroke-slate-500"
              />
            </svg>
          </div>

          {/* Cards Array Suspended Along the Wire: Flexible on mobile, 5-col on desktop with generous end clearance */}
          <div className="flex lg:grid lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-3.5 xl:gap-5 relative z-10 items-start min-w-max lg:min-w-0 px-6 sm:px-8 lg:px-8 xl:px-12 py-3 sm:py-4">
            {/* Mobile/Tablet wire bar running behind all clothespins across the entire scrollable row */}
            <div className="lg:hidden absolute top-7 left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-300 dark:border-slate-700 shadow-[0_0_8px_rgba(6,182,212,0.35)] pointer-events-none z-0" />

            {CURATED_SYSTEMS.map((project, idx) => {
              // On mobile & tablet, keep rotation at 0 to avoid overlapping or clipping bounding boxes during swipe
              const tilt = isDesktop ? tiltAngles[idx % tiltAngles.length] : 0;
              const offset = isDesktop ? verticalOffsets[idx % verticalOffsets.length] : 14;
              const isHovered = hoveredId === project.id;

              return (
                <div
                  key={project.id}
                  style={{
                    transform: `translateY(${offset}px) rotate(${isHovered ? 0 : tilt}deg) scale(${isHovered ? 1.02 : 1})`,
                    transformOrigin: 'top center',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onSelectProject(project)}
                  className="cursor-pointer group relative flex flex-col items-center w-[255px] min-[360px]:w-[268px] sm:w-72 lg:w-full shrink-0 lg:shrink touch-manipulation snap-center"
                >
                  {/* The Cyan Clothesline Clip (ASTRO Reference) - High-contrast cyan with ambient highlights */}
                  <div className="w-4 h-7 rounded-xs bg-cyan-600 dark:bg-cyan-500 border border-cyan-700 dark:border-cyan-400 shadow-sm shadow-cyan-600/30 dark:shadow-cyan-400/30 ring-1 ring-cyan-400/25 dark:ring-cyan-300/30 flex flex-col items-center justify-between py-0.5 z-20 -mb-2.5 transition-transform group-hover:scale-110 group-hover:shadow-md group-hover:shadow-cyan-500/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-100 dark:bg-cyan-200 shadow-xs" />
                    <div className="w-2.5 h-0.5 bg-cyan-800 dark:bg-cyan-950" />
                  </div>

                  {/* The Hanging Card Box */}
                  <div className="w-full bg-white dark:bg-[#131722] rounded-2xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/40 dark:group-hover:border-cyan-400/40 shadow-md sm:shadow-lg dark:shadow-2xl group-hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-3">
                    {/* Visual Preview Frame */}
                    <div className="w-full h-32 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 relative">
                      {project.mockupType === 'os-simulator' || project.id === 'tactile-portfolio-os' ? (
                        <TactileOsPreview />
                      ) : (
                        <ProjectMockup project={project} />
                      )}
                    </div>

                    {/* Card Metadata */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{project.number} / 05</span>
                        <span className="text-cyan-700 dark:text-cyan-300 font-bold bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/60 dark:border-cyan-800/60 px-1.5 py-0.5 rounded">{project.year}</span>
                      </div>
                      <h3 className="text-sm font-display font-bold text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-medium text-slate-700 dark:text-slate-300 min-h-[32px] gap-1.5">
                      <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 truncate max-w-[85px] min-[360px]:max-w-[100px] sm:max-w-[120px] lg:max-w-[85px] xl:max-w-[110px]">
                        {project.technologies[0]} · {project.technologies[1] || ''}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 font-semibold transition shrink-0 text-xs">
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Technology Verification Strip */}
        <div className="pt-5 sm:pt-6 border-t border-slate-300/80 dark:border-slate-800 flex flex-wrap items-center justify-around gap-4 sm:gap-6 text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest px-2">
          <span>FastAPI REST Microservices</span>
          <span className="text-cyan-500/50 dark:text-cyan-400/50 hidden sm:inline">·</span>
          <span>Spatial Graph Algorithms</span>
          <span className="text-cyan-500/50 dark:text-cyan-400/50 hidden sm:inline">·</span>
          <span>Automated Batch ETL</span>
          <span className="text-cyan-500/50 dark:text-cyan-400/50 hidden sm:inline">·</span>
          <span>Decentralized Web3 Tooling</span>
          <span className="text-cyan-500/50 dark:text-cyan-400/50 hidden sm:inline">·</span>
          <span>React 19 & Tailwind Engine</span>
        </div>
      </div>
    </section>
  );
};
