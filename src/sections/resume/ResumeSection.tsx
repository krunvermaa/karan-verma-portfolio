import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS } from '@/data/portfolioData';
import { Download, Printer, Copy, Check, Sparkles, ArrowRight, ExternalLink, Phone, Twitter, Mail, Users, Award } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Generates clean markdown resume text for download
  const handleDownloadMarkdown = () => {
    const markdownContent = `# KARAN VERMA
Computer Science and Engineering Undergraduate & Educator
Phone: ${PERSONAL_INFO.phone || '8799577917'}
Email: ${PERSONAL_INFO.email}
Twitter/X: ${PERSONAL_INFO.twitterHandle || '@krunverma'} (${PERSONAL_INFO.twitter})
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}
Credential ID: #MIT-UJJAIN-CSE-TOPPER

## PROFESSIONAL SUMMARY
Computer Science and Engineering undergraduate at Mahakal Institute of Technology, Ujjain, with consistent academic excellence (SGPAs of 8.48, 8.57, and 8.54 - College Topper) and internship experiences at IndusAI Solutions and HACKTOUR IND. Co-Founder and Lead Educator at PRO LEARN COACHING CLASSES with 3+ years of teaching experience, having guided over 50 students in foundational sciences and mathematics. Recognized for innovation through the selection of two ideas under MSME Idea Hackathon 5.0 for grant-in-aid consideration (₹30 Lakh combined), alongside participation in national level hackathons. Vice President of the Student Council, Student Coordinator at Institution's Innovation Council (IIC) & Incubation Centre, and creator/video editor across digital media. Combines technical problem solving with institutional leadership and public communication.

## EDUCATION
- B.Tech in Computer Science and Engineering | Mahakal Institute of Technology, Ujjain (Ongoing)
  SGPA: 8.48 (Semester 1, College Topper) | 8.57 (Semester 2, College Topper) | 8.54 (Semester 3, Runner-up)
- Higher Secondary Certificate (Class XII) | CBSE (2023-24): 93%
- Secondary School Certificate (Class X) | GSEB (2021-22): 88.7%

## EXPERIENCE & LEADERSHIP
- Co-Founder & Lead Educator · PRO LEARN COACHING CLASSES (2023 — Present · 3+ Years)
  Founded coaching institute, guided 50+ students in foundational sciences & mathematics, structured personalized academic roadmaps.
- Python Developer Intern · IndusAI Solutions (Jul 2025 – Aug 2025)
  Completed a 3-week Python Developer internship at IndusAI Solutions (MSME-registered); internship completion certificate issued Aug 2025. Built automated data pipelines and validation scripts.
- Content & Marketing Intern · HACKTOUR IND (Web3 company, Jul 2025 – Nov 2025)
  Handled technical content, documentation, and digital marketing activities for Web3 ecosystems. Active participant and contributor across Arweave / Permaweb Buildstation (Agents of the Permaweb Hackathon), Zcash India meetups, and Avalanche City Connect. Contributor @HackTourIND (X: ${PERSONAL_INFO.twitterHandle || '@krunverma'}).

## SELECTED ACHIEVEMENTS & AWARDS
- MSME Idea Hackathon 5.0 (2025): Two ideas selected for grant-in-aid consideration (₹15 Lakh indicated for each idea, ₹30 Lakh combined):
  1. Smart AI Based Agri Market Access Platform (Team: Sourav Chaudhary, Sneha Patidar, Sneha Sharma, Karan Verma)
  2. AI Based Real Time Navigation Platform for Railway Stations (Team: Sourav Chaudhary, Sneha Patidar, Sneha Sharma, Karan Verma)
  Confirmed via official MIT Group of Institutes Ujjain announcement.
- Masters’ Union The CEO Challenge (Jan 2023): 12th position in India in Round 1; advanced to Round 2.

## CAMPUS GOVERNANCE & LEADERSHIP
- Vice President, Student Council | Mahakal Institute of Technology, Ujjain (2026-27, Current)
- Student Coordinator | Institution's Innovation Council (IIC) & Incubation Centre (2025 — 2026)
  Spearheaded startup incubation drives, orientation sessions, and innovation quizzes across institute batches.
- Joint Secretary, Student Council | Mahakal Institute of Technology, Ujjain (2025-26)
- Class Representative, Student Council | Mahakal Institute of Technology, Ujjain (2024-25)
- Prompt Engineering Lead | MGI Coding Club (2025-26)
- Coordinated and organized 20+ college events across different campus clubs.
- Anchored 35+ college ceremonies and events, building public speaking and stakeholder communication skills.

## HACKATHONS & COMPETITIONS
- HACKWAVE 3.0 | 36 hour national level hackathon, CDGI, Indore (Oct 2026)
- AGNITIA 2026 | 36 hour national hackathon, PIEMR, Indore (Oct 2026)
- .EXECUTE | 36 hour national level hackathon, NMIMS, Indore (Mar 2026)
- ALGORUSH | Bug fixing competition, NMIMS, Indore (Mar 2026)
- Smart India Hackathon (SIH) | Internal institutional hackathons (twice)
- Arweave / Permaweb Buildstation | Agents of the Permaweb Hackathon
- Zcash India Meetups & Community | Active Web3 Contributor
- Avalanche City Connect (Jaipur) | Web3 Ecosystem Delegate

## TECHNICAL SKILLS & CREATIVE MEDIA
- Programming: Python (Internship experience), C (Basic), C++ (Basic), SQL (Currently Learning)
- Web Development: React 19, TypeScript, Tailwind CSS, Modern Web Architecture
- AI & Tools: Prompt Engineering, GitHub, VS Code
- Leadership & Mentorship: Teaching & Mentorship (50+ Students), Academic Roadmaps, Student Council VP
- Creative & Media: Video Editing & Creator Media, Public Speaking (35+ Ceremonies Anchored)
- Languages: Hindi, English, Gujarati, Punjabi
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
    const summary = `Karan Verma — Computer Science & Engineering Undergraduate & Educator
Mahakal Institute of Technology, Ujjain | SGPA: 8.48, 8.57, 8.54 (College Topper)
Phone: ${PERSONAL_INFO.phone || '+91 8799577917'} | Email: ${PERSONAL_INFO.email} | Twitter/X: ${PERSONAL_INFO.twitterHandle || '@krunverma'} (${PERSONAL_INFO.twitter}) | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}
MSME Idea Hackathon 5.0 (Two Ideas Selected for ₹30L Grant-in-aid Consideration — Team: Sourav Chaudhary, Sneha Patidar, Sneha Sharma, Karan Verma)
Co-Founder & Lead Educator (PRO LEARN COACHING CLASSES, 2023—Present · 3+ Years, 50+ Students Guided) | Student Coordinator (Institution's Innovation Council IIC & Incubation Centre 2025—2026) | Vice President, Student Council (CR 24-25 → Joint Sec 25-26 → VP 26-27) | Python Intern (IndusAI Solutions) | Web3 Contributor (HACKTOUR IND) | Video Editing & Creator Media | 35+ Events Anchored`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="resume"
      className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8F9] dark:bg-[#110609] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle crimson/rose studio ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-rose-200/35 dark:from-rose-950/30 via-red-100/15 dark:via-rose-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-rose-200/20 dark:bg-rose-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 relative z-10">
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
              Tactile publication collage featuring an accredited developer pass, crimson education credential, work experience sheet with teaching & campus leadership, and holographic foil skill pack.
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
        <div className="relative mx-auto max-w-5xl rounded-3xl bg-[#080B10] text-slate-100 border-2 border-slate-700/80 dark:border-slate-700 shadow-2xl p-3.5 sm:p-6 md:p-10 overflow-hidden">
          {/* Subtle Stage Lighting Highlight */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-rose-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Top-Left Authentic Dossier Stamp: নথিপত্র (Bengali: Records / Documents) */}
          <div className="absolute top-5 left-5 sm:top-8 sm:left-8 flex items-center gap-2 text-white z-10">
            <span className="font-serif font-black text-xl sm:text-2xl tracking-widest text-slate-100 drop-shadow-md">
              নথিপত্র
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase hidden xs:inline">
              #SPECIMEN-2026
            </span>
          </div>

          {/* Top-Right Four-Point Star Sparkle Emblem */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white z-10">
            <span className="text-2xl sm:text-3xl text-slate-200 font-serif leading-none drop-shadow-sm">✦</span>
          </div>

          {/* ======================================================================= */}
          {/* TOP ROW: WHITE ID CARD (LEFT) + RETRO "HELLO!" POP STICKER (RIGHT) */}
          {/* ======================================================================= */}
          <div className="relative z-20 pt-8 sm:pt-10 flex flex-col lg:flex-row items-center lg:items-start xl:items-center justify-between gap-6 lg:gap-8">
            {/* ------------------------------------------------------------------- */}
            {/* 1. THE WHITE IDENTITY PASS CARD (Image Reference: Top-Left Card) */}
            {/* ------------------------------------------------------------------- */}
            <div className="relative w-full max-w-xl mx-auto lg:mx-0 rounded-2xl bg-[#FFFFFF] text-slate-950 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-slate-300 transform rotate-0 lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
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
                  <div className="absolute -bottom-1 -right-1 transform -rotate-6 pointer-events-none">
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
                        CS Engineer · MIT Ujjain '26
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
                    Computer Science undergraduate at Mahakal Institute of Technology, Ujjain. College topper with dual MSME 5.0 grant selections (₹30L combined), Co-Founder & Educator at PRO LEARN COACHING (50+ students guided).
                  </p>

                  {/* Micro-Data Table with High Contrast Text */}
                  <div className="grid grid-cols-4 gap-1 pt-1.5 border-t border-slate-200 text-[10px] font-mono">
                    <div className="border-r border-slate-200 pr-1">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">Council VP</span>
                      <span className="font-black text-slate-950 truncate block">2026-27</span>
                    </div>
                    <div className="border-r border-slate-200 pr-1 pl-1">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">IIC Council</span>
                      <span className="font-black text-slate-950 truncate block">COORD.</span>
                    </div>
                    <div className="border-r border-slate-200 pr-1 pl-1">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">Mentorship</span>
                      <span className="font-black text-emerald-700 truncate block">50+ GUIDED</span>
                    </div>
                    <div className="pl-1">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">Teaching</span>
                      <span className="font-black text-amber-700 truncate block">3+ YRS EXP</span>
                    </div>
                  </div>

                  {/* Social Handles, Phone, Twitter & SVG QR Matrix */}
                  <div className="pt-2 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 border-t border-slate-200 text-xs font-mono text-slate-800">
                    <div className="space-y-1 min-w-0 pr-2 text-[11px] w-full xs:w-auto">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <a
                          href="tel:8799577917"
                          className="inline-flex items-center gap-1 font-bold text-slate-950 hover:text-rose-600 transition-colors"
                        >
                          <Phone className="w-3 h-3 text-rose-600 shrink-0" />
                          <span>+91 8799577917</span>
                        </a>
                        <span className="text-slate-300">·</span>
                        <a
                          href={PERSONAL_INFO.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-sky-700 hover:text-sky-900 transition-colors"
                        >
                          <Twitter className="w-3 h-3 text-sky-500 fill-current shrink-0" />
                          <span>@krunverma</span>
                        </a>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-slate-700">
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="truncate font-semibold hover:text-slate-950 transition-colors max-w-[170px] sm:max-w-none"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                        <span className="text-slate-300">·</span>
                        <a
                          href={PERSONAL_INFO.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="truncate font-semibold hover:text-slate-950 transition-colors"
                        >
                          github.com/krunvermaa
                        </a>
                      </div>
                    </div>

                    {/* Miniature Pixel QR Code */}
                    <div className="w-8 h-8 bg-slate-950 p-1 rounded-sm shrink-0 self-end xs:self-auto flex flex-col justify-between" title="Portfolio QR (+91 8799577917 / @krunverma)">
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
            <div className="self-center lg:self-auto shrink-0 transform rotate-0 lg:rotate-3 hover:rotate-0 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
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

          {/* Metadata Credentials Bar */}
          <div className="relative z-20 mt-6 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shadow-xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px]">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Topper (8.54+ SGPA)
              </span>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" /> Co-Founder & Lead Educator · Pro Learn (50+ Students Guided · 3+ Yrs)
              </span>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <span className="text-purple-400 font-bold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-purple-400" /> Student Council VP & IIC Coordinator
              </span>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <span className="text-rose-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" /> Video Editing & Creator Media
              </span>
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
              #COLLATERAL-DOSSIER
            </div>
          </div>

          {/* ======================================================================= */}
          {/* MIDDLE & LOWER COLLAGE: WHITE WORK SHEET + RED EDUCATION + BLACK FOIL */}
          {/* ======================================================================= */}
          <div className="relative z-20 mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ------------------------------------------------------------------- */}
            {/* 3. CENTER-LEFT: THE WHITE PERFORATED WORK EXPERIENCE SHEET */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-7 relative rounded-2xl bg-[#FFFFFF] text-slate-950 p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-slate-300 transform rotate-0 lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Top Calligraphic Script: "Work Experience & Leadership" with Direct Contact Row */}
              <div className="pb-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-serif italic font-black text-2xl sm:text-3xl text-slate-950 tracking-tight">
                    Work Experience & Leadership
                  </div>
                  <div className="flex items-center gap-2 pt-0.5 text-xs font-mono text-slate-600">
                    <a href="tel:8799577917" className="hover:text-slate-950 font-bold flex items-center gap-1">
                      <Phone className="w-3 h-3 text-rose-600" />
                      <span>+91 8799577917</span>
                    </a>
                    <span>·</span>
                    <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline font-bold flex items-center gap-1">
                      <Twitter className="w-3 h-3 text-sky-500 fill-current" />
                      <span>@krunverma</span>
                    </a>
                  </div>
                </div>
                <div className="font-mono text-xs font-bold text-slate-600 self-start sm:self-auto">
                  2023 — Present
                </div>
              </div>

              {/* Horizontal Banner for Mobile and Tablet (< 1024px) */}
              <div className="lg:hidden font-display font-black text-lg text-[#E11D48] tracking-widest uppercase pt-3 pb-1 border-b border-slate-100 flex items-center gap-2">
                <span>EXPERIENCE & LEADERSHIP</span>
                <span className="text-slate-400 text-xs font-mono font-normal">/ Production Records</span>
              </div>

              {/* Body: Red Vertical "EXPERIENCE" Spine (Desktop lg: only) + Roles */}
              <div className="flex gap-4 lg:gap-6 pt-4 sm:pt-5">
                {/* Desktop Red Vertical Giant Stencil Banner (Visible only on lg:) */}
                <div className="hidden lg:flex shrink-0 items-center justify-center border-r border-slate-200 pr-3 sm:pr-4">
                  <div
                    className="font-display font-black text-3xl sm:text-4xl text-[#E11D48] tracking-widest uppercase"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    EXPERIENCE
                  </div>
                </div>

                {/* Experience Roles Timeline */}
                <div className="flex-1 space-y-4 sm:space-y-5 min-w-0">
                  {/* Role 1: PRO LEARN COACHING CLASSES */}
                  <div className="space-y-1 border-b border-slate-100 pb-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        PRO LEARN COACHING CLASSES
                      </h4>
                      <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">
                        2023 — Present · 3+ Years
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold text-indigo-700">
                      Co-Founder & Lead Educator
                    </div>
                    <p className="text-xs font-sans text-slate-700 font-medium leading-relaxed">
                      Founded coaching institute, guided 50+ students in foundational sciences & mathematics, structured personalized academic roadmaps.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Founded Coaching Institute</span>
                      <span>✓ Guided 50+ Students</span>
                      <span>✓ Foundational Sciences & Math</span>
                      <span>✓ Personalized Academic Roadmaps</span>
                    </div>
                  </div>

                  {/* Role 2: IndusAI Solutions */}
                  <div className="space-y-1 border-b border-slate-100 pb-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        IndusAI Solutions
                      </h4>
                      <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                        Jul — Aug 2025
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold text-indigo-700">
                      Python Developer Intern (MSME-registered)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Automated Python ETL</span>
                      <span>✓ Data Validation Scripts</span>
                      <span>✓ MSME Certificate Aug 2025</span>
                      <span>✓ 99.9% Pipeline Uptime</span>
                    </div>
                  </div>

                  {/* Role 3: HACKTOUR IND (Web3 company) */}
                  <div className="space-y-1 border-b border-slate-100 pb-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        HACKTOUR IND (Web3 company)
                      </h4>
                      <span className="font-mono text-xs font-bold text-pink-800 bg-pink-50 px-2 py-0.5 rounded border border-pink-200 shrink-0">
                        Jul — Nov 2025
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs font-bold text-indigo-700">
                      <span>Content & Marketing Intern</span>
                      <span className="text-slate-400">·</span>
                      <a
                        href={PERSONAL_INFO.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-700 hover:text-pink-900 inline-flex items-center gap-1"
                      >
                        <Twitter className="w-3 h-3 text-pink-600 fill-current" />
                        <span>Contributor @HackTourIND (@krunverma)</span>
                      </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Arweave / Permaweb Buildstation</span>
                      <span>✓ Zcash India Meetups & Community</span>
                      <span>✓ Avalanche City Connect (Jaipur)</span>
                      <span>✓ Technical Developer Guides</span>
                    </div>
                  </div>

                  {/* Role 4: Campus Governance / Leadership: IIC & Incubation Centre */}
                  <div className="space-y-1 border-b border-slate-100 pb-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        Institution's Innovation Council (IIC) & Incubation Centre
                      </h4>
                      <span className="font-mono text-xs font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 shrink-0">
                        2025 — 2026
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold text-indigo-700">
                      Student Coordinator (2025 — 2026) · Campus Governance / Leadership
                    </div>
                    <p className="text-xs font-sans text-slate-700 font-medium leading-relaxed">
                      Spearheaded startup incubation drives, orientation sessions, and innovation quizzes across institute batches.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Startup Incubation Drives</span>
                      <span>✓ Orientation Sessions</span>
                      <span>✓ Multi-Batch Innovation Quizzes</span>
                      <span>✓ Entrepreneurship Ecosystem</span>
                    </div>
                  </div>

                  {/* Role 5: Campus Governance / Leadership: Student Council */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        Student Council & MGI Coding Club
                      </h4>
                      <span className="font-mono text-xs font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 shrink-0">
                        2024 — Present
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold text-indigo-700">
                      VP (2026-27) · Joint Sec (2025-26) · CR (2024-25) · Prompt Eng Lead
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Council VP (26-27)</span>
                      <span>✓ Joint Secretary (25-26)</span>
                      <span>✓ Class Rep (24-25)</span>
                      <span>✓ 20+ Events · 35+ Ceremonies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perforation Cutout Notch & Dashed Tear Line with Red Tag */}
              <div className="relative my-6 -mx-5 sm:-mx-8 py-2">
                {/* Perforation Circle Notches on Left & Right */}
                <div className="absolute top-1/2 -left-3.5 -translate-y-1/2 w-7 h-7 rounded-full bg-[#FFF8F9] dark:bg-[#110609]" />
                <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 w-7 h-7 rounded-full bg-[#FFF8F9] dark:bg-[#110609]" />

                {/* Dashed Line */}
                <div className="w-full border-t-2 border-dashed border-slate-300" />

                {/* Red Street Marker Script Tag ("Majestic") */}
                <div className="absolute top-1/2 right-10 sm:right-12 -translate-y-1/2 transform -rotate-6 bg-white px-2">
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
                    I am a Computer Science & Engineering undergraduate at Mahakal Institute of Technology, Ujjain, with consistent academic excellence (SGPAs 8.48, 8.57, and 8.54 - College Topper).
                  </p>
                  <p className="text-xs sm:text-[13px] text-slate-800 font-sans leading-relaxed font-medium">
                    Co-Founder and Lead Educator at PRO LEARN COACHING CLASSES (3+ years, 50+ students guided in foundational sciences & mathematics). Recognized for innovation through dual MSME Idea Hackathon 5.0 selections (₹30 Lakh combined grant-in-aid consideration). Active in institutional governance as Student Council VP and IIC Student Coordinator across 35+ anchored ceremonies and 20+ coordinated campus initiatives.
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
                        2026-MIT
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
              <div className="relative rounded-2xl bg-[#CC141D] text-white p-6 sm:p-7 shadow-[0_20px_50px_rgba(204,20,29,0.4)] border border-rose-500 transform rotate-0 lg:rotate-1 hover:rotate-0 transition-transform duration-300 space-y-5 overflow-hidden">
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
                      Ongoing · 2024 — Present
                    </span>
                    <div className="font-display font-black text-lg text-white leading-tight">
                      B.Tech in Computer Science & Engineering
                    </div>
                    <div className="text-xs text-rose-100 font-bold">
                      Mahakal Institute of Technology, Ujjain
                    </div>
                    <div className="text-[11px] text-rose-100/90 font-mono pt-1">
                      SGPA: 8.48 (Sem 1, Topper) · 8.57 (Sem 2, Topper) · 8.54 (Sem 3, Runner-up)
                    </div>
                  </div>

                  <div className="space-y-1 border-t border-white/30 pt-3">
                    <span className="font-mono text-xs font-bold text-white bg-black/25 px-2 py-0.5 rounded inline-block">
                      2023 — 2024
                    </span>
                    <div className="font-display font-bold text-sm text-white">
                      Higher Secondary Certificate (Class XII) · CBSE
                    </div>
                    <div className="text-xs text-rose-100 font-bold">
                      Percentage: 93% · GSEB Class X (2021-22): 88.7%
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
                    MIT-UJJAIN-CSE-TOPPER
                  </div>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* 5. THE GLOSSY BLACK FOIL VACUUM POUCH: "SKILLS" (Bottom-Right) */}
              {/* ----------------------------------------------------------------- */}
              <div className="relative rounded-2xl bg-[#0B0E14] text-white p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-slate-700 space-y-5 overflow-hidden transform rotate-0 lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Iridescent Rainbow Circular Holographic Foil Emblem in Corner */}
                <div className="absolute top-5 right-5 group/foil">
                  <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-pink-400 via-yellow-300 to-indigo-500 shadow-lg transform group-hover/foil:rotate-45 transition-transform duration-500">
                    <div className="w-full h-full rounded-full bg-[#111622] flex items-center justify-center text-white">
                      <span className="text-xl text-cyan-300">✦</span>
                    </div>
                  </div>
                </div>

                {/* Two Columns: TECHNICAL & PEDAGOGY / LEADERSHIP */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs font-sans pr-14 border-b border-slate-800 pb-4">
                  <div className="space-y-1.5">
                    <div className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-300">
                      TECHNICAL & AI
                    </div>
                    <div className="space-y-0.5 text-xs text-white font-medium">
                      <div>Python Data Pipelines</div>
                      <div>Prompt Engineering</div>
                      <div>C / C++ Fundamentals</div>
                      <div>SQL & React Architecture</div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-300">
                      LEADERSHIP & PEDAGOGY
                    </div>
                    <div className="space-y-0.5 text-xs text-white font-medium">
                      <div>Teaching & Mentorship (50+)</div>
                      <div>Video Editing & Creator Media</div>
                      <div>Student Council VP (26-27)</div>
                      <div>Public Speaking & Anchoring (35+)</div>
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

                {/* DOMAINS & METADATA BAR / TAGS */}
                <div className="space-y-2 pt-1 border-t border-slate-800">
                  <div className="font-mono text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                    <span>SPECIALIZATIONS & CREATOR TAGS</span>
                    <span className="text-amber-400 font-mono text-[9px] font-bold">50+ GUIDED · 3+ YRS</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Teaching & Mentorship (50+ Students)',
                      'Video Editing & Creator Media',
                      'IIC Startup Incubation',
                      'Student Governance',
                      '35+ Ceremonies Anchored',
                      'STEM Curriculum Design',
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded font-mono text-xs font-semibold border ${
                          tag.includes('Teaching')
                            ? 'bg-amber-950/70 border-amber-500/50 text-amber-200'
                            : tag.includes('Video')
                            ? 'bg-rose-950/70 border-rose-500/50 text-rose-200'
                            : tag.includes('IIC')
                            ? 'bg-purple-950/70 border-purple-500/50 text-purple-200'
                            : 'bg-slate-900 border-slate-700 text-slate-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* SOFTWARE Section with Tech Chips */}
                <div className="space-y-2 pt-1 border-t border-slate-800">
                  <div className="font-mono text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    SOFTWARE & KERNELS
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'C', 'C++', 'SQL', 'React 19', 'TypeScript', 'Tailwind', 'FastAPI', 'Git', 'GitHub', 'VS Code'].map((item, idx) => (
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
                <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-[10px] font-bold text-slate-300 uppercase">LANGUAGES</span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-white">
                    <span>HINDI</span>
                    <span className="text-slate-500">·</span>
                    <span>ENGLISH</span>
                    <span className="text-slate-500">·</span>
                    <span>GUJARATI</span>
                    <span className="text-slate-500">·</span>
                    <span>PUNJABI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* 6. MSME IDEA HACKATHON 5.0 — ₹30 LAKH GRANT SELECTION PROJECT SPECIMENS */}
          {/* ======================================================================= */}
          <div className="relative z-20 mt-8 sm:mt-10 pt-6 border-t border-slate-800 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="shrink-0 w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                  <Award className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase leading-snug">
                    MSME Idea Hackathon 5.0 — Dual Grant Selections
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Selected for ₹30 Lakh Combined Grant-in-Aid Consideration · Ministry of MSME, Govt. of India
                  </p>
                </div>
              </div>

              {/* Contact Direct Line on MSME Card Header */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono shrink-0">
                <a
                  href="tel:8799577917"
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>+91 8799577917</span>
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-sky-500 text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
                >
                  <Twitter className="w-3 h-3 text-sky-400 fill-current shrink-0" />
                  <span>@krunverma</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* MSME Project 1 */}
              <div className="relative rounded-2xl bg-[#0E131F] text-slate-100 p-5 sm:p-6 border border-emerald-500/30 hover:border-emerald-400/70 shadow-xl space-y-4 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-black uppercase tracking-wider border border-emerald-500/30">
                          Selected: ₹15 Lakh Grant-in-Aid
                        </span>
                      </div>
                      <h4 className="font-display font-black text-lg text-white leading-snug pt-1">
                        Smart AI Based Agri Market Access Platform
                      </h4>
                      <p className="font-mono text-xs text-emerald-400 font-medium">
                        AI & AgriTech / MSME Hackathon 5.0 (2025)
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-300 font-mono font-black text-xs">
                      01
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Empowers regional farmers with real-time fair market mandi pricing, crop yield analytics, and direct linkages to institutional buyers—eliminating intermediary exploitation.
                  </p>

                  {/* Team Roster */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                      <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Project Team Roster</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Sourav Chaudhary', 'Sneha Patidar', 'Sneha Sharma', 'Karan Verma'].map((member, mIdx) => (
                        <span
                          key={mIdx}
                          className={`px-2 py-0.5 rounded text-xs font-mono font-medium ${
                            member === 'Karan Verma'
                              ? 'bg-rose-950 text-rose-300 border border-rose-500/60 font-bold'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                  <span className="leading-tight">Official MIT Group of Institutes Announcement</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1 shrink-0">
                    <Check className="w-3 h-3" /> VERIFIED
                  </span>
                </div>
              </div>

              {/* MSME Project 2 */}
              <div className="relative rounded-2xl bg-[#0E131F] text-slate-100 p-5 sm:p-6 border border-indigo-500/30 hover:border-indigo-400/70 shadow-xl space-y-4 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-black uppercase tracking-wider border border-indigo-500/30">
                          Selected: ₹15 Lakh Grant-in-Aid
                        </span>
                      </div>
                      <h4 className="font-display font-black text-lg text-white leading-snug pt-1">
                        AI Based Real Time Navigation Platform for Railway Stations
                      </h4>
                      <p className="font-mono text-xs text-indigo-400 font-medium">
                        Spatial AI & Urban Transit / MSME 5.0 (2025)
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center shrink-0 text-indigo-300 font-mono font-black text-xs">
                      02
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Real-time indoor navigation system guiding passengers across complex railway junctions with turn-by-turn directions, dynamic platform shift alerts, and accessible ramp routes.
                  </p>

                  {/* Team Roster */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                      <Users className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Project Team Roster</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Sourav Chaudhary', 'Sneha Patidar', 'Sneha Sharma', 'Karan Verma'].map((member, mIdx) => (
                        <span
                          key={mIdx}
                          className={`px-2 py-0.5 rounded text-xs font-mono font-medium ${
                            member === 'Karan Verma'
                              ? 'bg-rose-950 text-rose-300 border border-rose-500/60 font-bold'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                  <span className="leading-tight">Official MIT Group of Institutes Announcement</span>
                  <span className="text-indigo-400 font-bold flex items-center gap-1 shrink-0">
                    <Check className="w-3 h-3" /> VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
