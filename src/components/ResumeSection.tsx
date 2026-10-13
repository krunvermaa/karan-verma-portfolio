import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { Download, Printer, Copy, Check, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Generates clean markdown resume text for download
  const handleDownloadMarkdown = () => {
    const markdownContent = `# KARAN VERMA
Full-Stack Developer & Product Designer
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}
License ID: #0026-NIT-SYSTEMS

## EDUCATION
${PERSONAL_INFO.education.degree}
${PERSONAL_INFO.education.institution} (${PERSONAL_INFO.education.period})
Focus: ${PERSONAL_INFO.education.focus}

## TECHNICAL COMPETENCIES
- Languages: TypeScript, JavaScript, Go, Rust, Python, SQL
- Frontend: React 19, Next.js, Tailwind CSS, Canvas API, Radix UI, Performance Optimization
- Backend: Node.js, Express, PostgreSQL, WebSockets, WebRTC, Redis, CRDT
- Tooling: Vite, Git, Docker, Linux, Figma Tokens, Vitest, Playwright

## PRODUCTION EXPERIENCE
- Lead Product Engineer · Aura Design System & Community (2025 — Present)
  Authored open-source design token pipelines and accessible headless primitives used by over 1,200 developers. Maintained 100% WCAG AAA accessibility.
- Software Engineering Intern · FinTech Analytics Hub (2024 Q3 — Q4)
  Engineered real-time trade execution ticker handling 4,000 updates/sec. Slashed portal initial paint time by 48% via dynamic code splitting.
- Systems Developer · NIT Campus Cloud & Labs (2023)
  Engineered WebSocket broadcast pipelines and local-first offline CRDT sync engines.

## VERIFIED PROJECTS
${PROJECTS.map(
  (p) => `### ${p.title} (${p.year})
${p.tagline}
- Stack: ${p.technologies.join(', ')}
- Source: ${p.githubUrl}
- Outcomes: ${p.outcomes.map((o) => `${o.label}: ${o.value}`).join(' | ')}
`
).join('\n')}

## ENGINEERING ETHOS
- Performance as an Aesthetic: Sub-50ms interaction feedback
- Zero-AI Slop: Human-crafted architecture, robust schemas, editorial typography
- Local-First Resilience: IndexedDB + CRDT offline synchronization
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Karan_Verma_Resume_2026.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summary = `Karan Verma — Full-Stack Developer & Product Designer
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github}
B.Tech CSE (2022-2026) | National Institute of Technology
Specialization: React 19, TypeScript, Go, Rust/Wasm, WebSockets, Design Systems, Offline-First Web Applications.`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="resume"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8F9] dark:bg-[#110609] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 select-none transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle crimson/rose studio ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-rose-200/35 dark:from-rose-950/30 via-red-100/15 dark:via-rose-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-rose-200/20 dark:bg-rose-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Section Header & Actions Toolbar with High Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider">
              <span>06 / PHYSICAL COLLATERAL DOSSIER</span>
              <span>·</span>
              <span>CURRICULUM VITAE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white uppercase">
              Curriculum Vitae.
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-xl font-sans font-medium">
              Tactile publication collage featuring an accredited developer pass, crimson education credential, work experience sheet, and holographic foil skill pack.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition border border-slate-300 dark:border-slate-700 shadow-xs cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Summary Copied' : 'Copy Summary'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition border border-slate-300 dark:border-slate-700 shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-950 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold shadow-md transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (.md)</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THE FARHAN SUZAT ARTISTIC COLLAGE CANVAS (High Contrast Stage) */}
        {/* ========================================================================= */}
        <div className="relative mx-auto max-w-5xl rounded-3xl bg-[#080B10] text-slate-100 border-2 border-slate-700/80 dark:border-slate-700 shadow-2xl p-4 sm:p-8 md:p-12 overflow-hidden">
          {/* Subtle Stage Lighting Highlight */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-rose-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Top-Left Authentic Dossier Stamp: নথিপত্র (Bengali: Records / Documents) */}
          <div className="absolute top-5 left-5 sm:top-8 sm:left-8 flex items-center gap-2 text-white select-none z-10">
            <span className="font-serif font-black text-xl sm:text-2xl tracking-widest text-slate-100 drop-shadow-md">
              নথিপত্র
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase hidden xs:inline">
              #SPECIMEN-2026
            </span>
          </div>

          {/* Top-Right Four-Point Star Sparkle Emblem */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white select-none z-10">
            <span className="text-2xl sm:text-3xl text-slate-200 font-serif leading-none drop-shadow-sm">✦</span>
          </div>

          {/* ======================================================================= */}
          {/* TOP ROW: WHITE ID CARD (LEFT) + RETRO "HELLO!" POP STICKER (RIGHT) */}
          {/* ======================================================================= */}
          <div className="relative z-20 pt-8 sm:pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* ------------------------------------------------------------------- */}
            {/* 1. THE WHITE IDENTITY PASS CARD (Image Reference: Top-Left Card) */}
            {/* ------------------------------------------------------------------- */}
            <div className="relative w-full max-w-xl rounded-2xl bg-[#FFFFFF] text-slate-950 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-slate-300 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Corner Star Accent */}
              <div className="absolute top-3 left-3 text-slate-950 font-serif text-sm">✦</div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 pt-1">
                {/* Photo Specimen Box with Red Spraypaint Graffiti Signature */}
                <div className="relative shrink-0 w-28 h-32 sm:w-36 sm:h-40 rounded-xl overflow-hidden bg-slate-950 border-2 border-slate-950 shadow-md group">
                  {/* Grayscale Developer Photo */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    alt="Karan Verma"
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Grain Overlay */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />

                  {/* Red Graffiti Tag Signature Over the Photo */}
                  <div className="absolute -bottom-1 -right-1 transform -rotate-6 select-none pointer-events-none">
                    <span className="font-serif italic font-black text-2xl sm:text-3xl text-[#E11D48] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-tighter">
                      Karan
                    </span>
                  </div>
                </div>

                {/* Card Right: Name, Holographic Foil, Bio & Metadata Table */}
                <div className="flex-1 space-y-2.5 w-full min-w-0">
                  {/* Name and Hologram Badge */}
                  <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-2">
                    <div className="min-w-0">
                      <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none text-slate-950 uppercase truncate">
                        KARAN <br />
                        <span className="tracking-wide">VERMA</span>
                      </h3>
                      <p className="font-mono text-xs font-bold text-rose-700 uppercase tracking-wider pt-1 truncate">
                        Full-Stack Engineer · NIT '26
                      </p>
                    </div>

                    {/* Rainbow Holographic Square Seal */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl p-[2px] bg-gradient-to-tr from-cyan-400 via-pink-400 via-yellow-300 to-indigo-500 shadow-md shrink-0 transform rotate-3">
                      <div className="w-full h-full rounded-[10px] bg-slate-950 flex flex-col items-center justify-center text-center p-1 text-white">
                        <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
                        <span className="font-mono text-[8px] font-black leading-none mt-0.5">KV</span>
                        <span className="font-mono text-[6px] font-bold text-amber-300 leading-none">SEAL</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio statement */}
                  <p className="text-xs sm:text-[13px] text-slate-800 font-sans font-medium leading-relaxed">
                    A computer science engineer and product designer crafting resilient systems and sub-50ms web experiences.
                  </p>

                  {/* Micro-Data Table with High Contrast Text */}
                  <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-slate-200 text-[10px] font-mono">
                    <div className="border-r border-slate-200 pr-1">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">Gender</span>
                      <span className="font-black text-slate-950">MALE</span>
                    </div>
                    <div className="border-r border-slate-200 pr-1 pl-1">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">Birth Year</span>
                      <span className="font-black text-slate-950">2004</span>
                    </div>
                    <div className="pl-1">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">Nationality</span>
                      <span className="font-black text-slate-950">INDIAN</span>
                    </div>
                  </div>

                  {/* Social Handles & SVG QR Matrix */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-200 text-xs font-mono text-slate-800">
                    <div className="space-y-0.5 min-w-0 pr-2">
                      <div className="truncate font-bold text-slate-900">{PERSONAL_INFO.email}</div>
                      <div className="truncate text-slate-700 font-semibold">github.com/karanverma</div>
                    </div>

                    {/* Miniature Pixel QR Code */}
                    <div className="w-8 h-8 bg-slate-950 p-1 rounded-sm shrink-0 flex flex-col justify-between" title="Portfolio QR">
                      <div className="flex justify-between">
                        <div className="w-2 h-2 bg-white" />
                        <div className="w-2 h-2 bg-white" />
                      </div>
                      <div className="flex justify-center">
                        <div className="w-1.5 h-1.5 bg-white" />
                      </div>
                      <div className="flex justify-between">
                        <div className="w-2 h-2 bg-white" />
                        <div className="w-2 h-2 bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* 2. THE RETRO "HELLO!" POP ART STICKER WITH EYE (Top-Right) */}
            {/* ------------------------------------------------------------------- */}
            <div className="self-center md:self-auto shrink-0 transform rotate-3 hover:rotate-0 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
              <div className="relative p-2 rounded-2xl bg-black border-2 border-white space-y-2">
                {/* Speech Bubble Header: "HELLO!" */}
                <div className="px-5 py-1.5 rounded-xl bg-[#00F0FF] border-2 border-black text-black font-display font-black text-2xl sm:text-3xl tracking-tight text-center uppercase shadow-sm">
                  HELLO!
                </div>

                {/* Chromatic Pop Eye of Craft */}
                <div className="w-24 h-14 sm:w-32 sm:h-20 rounded-full bg-white border-2 border-black p-1 flex items-center justify-center relative overflow-hidden shadow-inner mx-auto">
                  {/* Rainbow Chromatic Iris */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-500 to-amber-300 border-2 border-black flex items-center justify-center relative">
                    {/* Black Pupil */}
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black flex items-center justify-center">
                      {/* Specular White Catchlight */}
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white -mt-1 -ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* MIDDLE & LOWER COLLAGE: WHITE WORK SHEET + RED EDUCATION + BLACK FOIL */}
          {/* ======================================================================= */}
          <div className="relative z-20 mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ------------------------------------------------------------------- */}
            {/* 3. CENTER-LEFT: THE WHITE PERFORATED WORK EXPERIENCE SHEET */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-7 relative rounded-2xl bg-[#FFFFFF] text-slate-950 p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-slate-300 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Top Calligraphic Script: "Work Experience" with Street Brush Style */}
              <div className="pb-4 border-b border-slate-200 flex items-center justify-between">
                <div className="font-serif italic font-black text-2xl sm:text-3xl text-slate-950 tracking-tight">
                  Work Experience
                </div>
                <div className="font-mono text-xs font-bold text-slate-600">
                  2022 — 2026
                </div>
              </div>

              {/* Mobile Horizontal Banner for Small Screens (< 640px) */}
              <div className="sm:hidden font-display font-black text-lg text-[#E11D48] tracking-widest uppercase pt-3 pb-1 border-b border-slate-100 flex items-center gap-2">
                <span>EXPERIENCE</span>
                <span className="text-slate-400 text-xs font-mono font-normal">/ Production Records</span>
              </div>

              {/* Body: Red Vertical "EXPERIENCE" Spine + Roles */}
              <div className="flex gap-4 sm:gap-6 pt-4 sm:pt-5">
                {/* Desktop Red Vertical Giant Stencil Banner */}
                <div className="hidden sm:flex shrink-0 items-center justify-center border-r border-slate-200 pr-3 sm:pr-4">
                  <div
                    className="font-display font-black text-3xl sm:text-4xl text-[#E11D48] tracking-widest uppercase select-none"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    EXPERIENCE
                  </div>
                </div>

                {/* Experience Roles Timeline */}
                <div className="flex-1 space-y-5 sm:space-y-6 min-w-0">
                  {/* Role 1: 2025 */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        Aura Design System & Open Source
                      </h4>
                      <span className="font-mono text-xs font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 shrink-0">
                        2025
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold text-indigo-700">
                      Lead Product Engineer & Architect
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 pt-1 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Design Tokens Pipeline</span>
                      <span>✓ Headless Primitives</span>
                      <span>✓ 100% WCAG AAA Compliant</span>
                      <span>✓ 1,200+ Active Devs</span>
                    </div>
                  </div>

                  {/* Role 2: 2024 */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        FinTech Analytics Hub
                      </h4>
                      <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                        2024
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold text-indigo-700">
                      Software Engineering Intern
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 pt-1 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Real-Time Trade Ticker</span>
                      <span>✓ Sub-50ms Interaction</span>
                      <span>✓ Dynamic Code Splitting</span>
                      <span>✓ 4,000 updates/sec</span>
                    </div>
                  </div>

                  {/* Role 3: 2023 */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        NIT Campus Cloud & Labs
                      </h4>
                      <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-300 shrink-0">
                        2023
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold text-indigo-700">
                      Systems Software Engineer
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 pt-1 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ WebSocket Broadcast</span>
                      <span>✓ Local-First CRDT Sync</span>
                      <span>✓ Microservices Setup</span>
                      <span>✓ Performance Profiling</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perforation Cutout Notch & Dashed Tear Line with Red Tag */}
              <div className="relative my-6 -mx-5 sm:-mx-8 py-2">
                {/* Perforation Circle Notches on Left & Right */}
                <div className="absolute top-1/2 -left-3.5 -translate-y-1/2 w-7 h-7 rounded-full bg-[#080B10]" />
                <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 w-7 h-7 rounded-full bg-[#080B10]" />

                {/* Dashed Line */}
                <div className="w-full border-t-2 border-dashed border-slate-300" />

                {/* Red Street Marker Script Tag ("Majestic") */}
                <div className="absolute top-1/2 right-10 sm:right-12 -translate-y-1/2 transform -rotate-6 select-none bg-white px-2">
                  <span className="font-serif italic font-black text-xl sm:text-2xl text-[#E11D48]">
                    Majestic
                  </span>
                </div>
              </div>

              {/* ABOUT ME SECTION (Lower Half of White Sheet) */}
              <div className="grid sm:grid-cols-12 gap-5 items-end">
                {/* Left Narrative */}
                <div className="sm:col-span-8 space-y-2">
                  <h4 className="font-display font-black text-2xl tracking-tight text-[#E11D48] uppercase">
                    ABOUT ME
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-800 font-sans leading-relaxed font-medium">
                    I am a full-stack engineer and product designer specializing in high-performance digital products, focusing on robust architecture and human craftsmanship.
                  </p>
                  <p className="text-xs sm:text-[13px] text-slate-800 font-sans leading-relaxed font-medium">
                    My work combines low-level systems speed with modern editorial elegance. I adapt to any constraint to deliver verified, zero-slop production software.
                  </p>
                </div>

                {/* Right Engraved Postal Stamp Specimen (Scalloped Edges) */}
                <div className="sm:col-span-4 flex justify-start sm:justify-end pt-2 sm:pt-0">
                  <div className="relative p-1.5 bg-black border-2 border-slate-800 shadow-md rounded-sm transform rotate-3">
                    {/* Postage Scalloped Border Simulation */}
                    <div className="w-24 h-28 bg-[#121622] border border-dashed border-slate-500 p-2 flex flex-col items-center justify-between text-center overflow-hidden">
                      <div className="text-[8px] font-mono text-amber-400 font-black tracking-widest uppercase">
                        INDIA POST
                      </div>
                      {/* Celestial Ray Icon */}
                      <div className="w-12 h-12 rounded-full border border-rose-500 bg-gradient-to-tr from-rose-950 to-indigo-950 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-rose-300" />
                      </div>
                      <div className="text-[9px] font-mono text-slate-200 font-bold tracking-widest">
                        2026-NIT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: RED EDUCATION CARD + BLACK GLOSSY SKILLS POUCH */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              {/* ----------------------------------------------------------------- */}
              {/* 4. THE CRIMSON RED EDUCATION CARD (Middle-Right) */}
              {/* ----------------------------------------------------------------- */}
              <div className="relative rounded-2xl bg-[#CC141D] text-white p-6 sm:p-7 shadow-[0_20px_50px_rgba(204,20,29,0.4)] border border-rose-500 transform rotate-1 hover:rotate-0 transition-transform duration-300 space-y-5 overflow-hidden">
                {/* Star Accent */}
                <div className="absolute top-4 right-4 text-white font-serif text-lg">✦</div>

                {/* Curved Oval Arch Header: "Education" */}
                <div className="relative pb-2 border-b border-white/40">
                  <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white">
                    Education
                  </h3>
                  <div className="w-28 h-1 bg-white rounded-full mt-1" />
                </div>

                {/* Degree & Institutional Details with High Contrast */}
                <div className="space-y-4 font-sans">
                  <div className="space-y-1">
                    <span className="font-mono text-xs font-bold text-white bg-black/25 px-2 py-0.5 rounded inline-block">
                      2022 — 2026
                    </span>
                    <div className="font-display font-black text-lg text-white leading-tight">
                      B.Tech in Computer Science & Engineering
                    </div>
                    <div className="text-xs text-rose-100 font-bold">
                      National Institute of Technology (NIT)
                    </div>
                  </div>

                  <div className="space-y-1 border-t border-white/30 pt-3">
                    <span className="font-mono text-xs font-bold text-white bg-black/25 px-2 py-0.5 rounded inline-block">
                      2020 — 2022
                    </span>
                    <div className="font-display font-bold text-sm text-white">
                      Senior Secondary School (PCM)
                    </div>
                    <div className="text-xs text-rose-100 font-medium">
                      Focus: Distributed Systems, HCI, Low-Latency Web Engines
                    </div>
                  </div>
                </div>

                {/* Wavy Distortion Optical Barcode Graphic at Bottom */}
                <div className="pt-3 border-t border-white/40 space-y-1.5">
                  <div className="h-10 w-full flex items-center justify-between gap-[2px]">
                    {[4, 1, 3, 1, 5, 2, 1, 4, 1, 3, 2, 4, 1, 2, 5, 1, 3, 2, 4, 1, 3, 2, 4, 1].map((w, i) => (
                      <div
                        key={i}
                        className="bg-black h-full rounded-xs transform skew-x-2"
                        style={{ width: `${w * 1.5}px` }}
                      />
                    ))}
                  </div>
                  <div className="text-[10px] font-mono font-black tracking-widest text-white uppercase text-center bg-black/40 px-2 py-0.5 rounded">
                    NIT-ENG-11800109-EDU
                  </div>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* 5. THE GLOSSY BLACK FOIL VACUUM POUCH: "SKILLS" (Bottom-Right) */}
              {/* ----------------------------------------------------------------- */}
              <div className="relative rounded-2xl bg-[#0B0E14] text-white p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-slate-700 space-y-5 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Iridescent Rainbow Circular Holographic Foil Emblem in Corner */}
                <div className="absolute top-5 right-5 group/foil">
                  <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-pink-400 via-yellow-300 to-indigo-500 shadow-lg transform group-hover/foil:rotate-45 transition-transform duration-500">
                    <div className="w-full h-full rounded-full bg-[#111622] flex items-center justify-center text-white">
                      <span className="text-xl text-cyan-300">✦</span>
                    </div>
                  </div>
                </div>

                {/* Two Columns: ABILITIES & SOFT SKILLS */}
                <div className="grid grid-cols-2 gap-4 text-xs font-sans pr-14 border-b border-slate-800 pb-4">
                  <div className="space-y-1.5">
                    <div className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-300">
                      ABILITIES
                    </div>
                    <div className="space-y-0.5 text-xs text-white font-medium">
                      <div>Full-Stack Arch</div>
                      <div>Distributed Systems</div>
                      <div>Local-First / CRDT</div>
                      <div>Sub-50ms UI Engines</div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-300">
                      SOFT SKILLS
                    </div>
                    <div className="space-y-0.5 text-xs text-white font-medium">
                      <div>Team Leadership</div>
                      <div>System Architecture</div>
                      <div>Zero-Bloat Discipline</div>
                      <div>Autonomous Work</div>
                    </div>
                  </div>
                </div>

                {/* Giant Bold Headline: SKILLS */}
                <div className="space-y-1">
                  <h3 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white uppercase leading-none">
                    SKILLS
                  </h3>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                    VERIFIED PRODUCTION TOOLKIT
                  </div>
                </div>

                {/* SOFTWARE Section with Tech Chips */}
                <div className="space-y-2 pt-1 border-t border-slate-800">
                  <div className="font-mono text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    SOFTWARE & KERNELS
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['TypeScript', 'React 19', 'Go', 'Rust', 'PostgreSQL', 'Next.js', 'Docker', 'WebSockets', 'Tailwind', 'Canvas 2D', 'Vitest'].map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 font-mono text-xs font-semibold text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LANGUAGE Row */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] font-bold text-slate-300 uppercase">LANGUAGE</span>
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span>ENGLISH (FLUENT)</span>
                    <span className="text-slate-500">·</span>
                    <span>HINDI (NATIVE)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
