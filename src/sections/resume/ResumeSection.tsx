import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  Download,
  Printer,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Phone,
  Twitter,
  Mail,
  Users,
  Award,
  ShieldCheck,
  GraduationCap,
  Building,
  Calendar,
  Briefcase,
  BadgeCheck,
  FileText,
  MapPin,
  Clock,
  Compass,
} from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Generates clean, comprehensive markdown resume text for recruiters & engineering managers
  const handleDownloadMarkdown = () => {
    const markdownContent = `# KARAN VERMA
Computer Science & Engineering Undergraduate · Software Developer · Educator
Department of Computer Science & Engineering, Mahakal Institute of Technology, Ujjain
Verification ID: #MIT-UJJAIN-CSE-TOPPER | Status: Open to Software Engineering & Summer 2026 Internships

Phone: ${PERSONAL_INFO.phone || '+91 8799577917'}
Email: ${PERSONAL_INFO.email}
Twitter/X: ${PERSONAL_INFO.twitterHandle || '@krunverma'} (${PERSONAL_INFO.twitter})
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}

---

## PROFESSIONAL SUMMARY & ACCREDITED DOSSIER
Pre-final year Computer Science & Engineering undergraduate at Mahakal Institute of Technology, Ujjain, with consistent academic excellence as College Topper (Semester SGPAs: 8.48, 8.57, and 8.54). Hands-on production experience in Python backend automation pipelines at IndusAI Solutions (MSME Certified) and Web3 technical advocacy & documentation at HACKTOUR IND. Co-Founder and Lead Educator at PRO LEARN COACHING CLASSES with 3+ years of teaching tenure mentoring over 50 students in foundational sciences and mathematics. Recognized for engineering innovation through two project selections under MSME Idea Hackathon 5.0 for ₹30 Lakh combined grant-in-aid consideration. Elected Vice President of the Student Council and Student Coordinator at the Institution's Innovation Council (IIC). Open to Software Engineering & Summer 2026 Internships.

---

## EDUCATION SPECIMEN
- **Bachelor of Technology (B.Tech) in Computer Science & Engineering**
  Mahakal Institute of Technology, Ujjain (Ongoing · 2024 — Present)
  - Semester 1 SGPA: 8.48 (College Topper)
  - Semester 2 SGPA: 8.57 (College Topper)
  - Semester 3 SGPA: 8.54 (College Runner-up)
  - Official Standing: Rank #1 across Department Computer Science Cohort
- **Higher Secondary Certificate (Class XII) · Central Board of Secondary Education (CBSE)**
  Year of Passing: 2023 — 2024 | Score: 93.0% (Science Stream with Mathematics & CS)
- **Secondary School Certificate (Class X) · Gujarat Secondary & Higher Secondary Education Board (GSEB)**
  Year of Passing: 2021 — 2022 | Score: 88.7% (Distinction)

---

## FORMAL WORK EXPERIENCE & LEADERSHIP TENURE
- **Python Developer Intern · IndusAI Solutions** (MSME-Registered)
  *Jul 2025 – Aug 2025 | Remote Production Sprint*
  - Engineered production Python data pipelines and automated ETL scripts maintaining 99.9% uptime.
  - Implemented automated schema validation and exception logging, reducing pipeline error incidents by 40%.
  - Awarded official MSME-registered Internship Completion Certificate in August 2025 for high-caliber deliverables.

- **Web3 Strategy & Content Intern · HACKTOUR IND**
  *Jul 2025 – Nov 2025 · 5-Month Tenure | Ecosystem Contributor*
  - Authored developer-focused technical documentation, protocol guides, and architecture teardowns for Web3 protocols.
  - Active participant and contributor across Arweave / Permaweb Buildstation (Agents of the Permaweb Hackathon), Zcash India meetups, and Avalanche City Connect (Jaipur).
  - Managed developer advocacy and technical distribution under @HackTourIND on X/Twitter.

- **Co-Founder & Lead Educator · PRO LEARN COACHING CLASSES**
  *2023 — Present · 3+ Years Operating | Ujjain*
  - Established and scaled coaching institute, mentoring 50+ students in foundational STEM, physics, and mathematics.
  - Architected personalized diagnostic assessments and academic roadmaps, driving a 90%+ academic improvement rate across enrolled cohorts.
  - Directed institutional operations, mentoring schedules, and stakeholder consultations.

- **Student Coordinator (IIC) & Vice President (Student Council)**
  *Mahakal Institute of Technology, Ujjain | 2024 — Present*
  - Elected Vice President of the Student Council (2026-27) after successive tenures as Joint Secretary (2025-26) and Class Representative (2024-25).
  - Directed university startup incubation drives, IIC innovation quizzes, and hackathon ideation workshops under Govt. of India mandate.
  - Anchored 35+ formal university convocations, symposiums, and institutional ceremonies; coordinated 20+ campus-wide events.

---

## SELECTED ACHIEVEMENTS & RESEARCH GRANTS
- **MSME Idea Hackathon 5.0 (2025) — Ministry of MSME, Govt. of India**:
  Two ideas selected for grant-in-aid consideration (₹15 Lakh per idea, ₹30 Lakh combined allocation):
  1. *Smart AI Based Agri Market Access Platform* (Team: Sourav Chaudhary, Sneha Patidar, Sneha Sharma, Karan Verma)
  2. *AI Based Real Time Navigation Platform for Railway Stations* (Team: Sourav Chaudhary, Sneha Patidar, Sneha Sharma, Karan Verma)
- **Masters' Union The CEO Challenge (Jan 2023)**: 12th Rank nationwide in Round 1; advanced to Round 2.
- **National Hackathon Competitions**: HACKWAVE 3.0 (CDGI Indore), AGNITIA 2026 (PIEMR Indore), .EXECUTE & ALGORUSH (NMIMS Indore), Smart India Hackathon (SIH internal rounds).

---

## TECHNICAL SKILLS & VERIFIED TOOLKIT
- **Core Languages**: Python (Production Automation & Pipelines), C (Pointers & Memory), C++ (OOP & STL), SQL (Relational Queries)
- **Web & Modern Architecture**: React 19, TypeScript, Tailwind CSS, REST APIs, Git, GitHub, VS Code
- **AI & Systems**: Prompt Engineering, Automated Data Pipelines, Schema Validation
- **Spoken Languages**: English (Fluent), Hindi (Native), Gujarati (Fluent), Punjabi (Conversational)

---

## RECRUITER CLEARANCE & HIRING CHECKSHEET
- **Availability**: Summer 2026 Software Engineering Internships (May – Aug 2026) & Technical Contracts
- **Work Mode**: Open to Remote, Hybrid, or On-site (Bangalore, Pune, NCR/Delhi, Mumbai, Indore, Hyderabad)
- **Eligibility**: Indian National · Full legal working authorization · Valid international passport
- **University Authorization**: MIT Ujjain / RGPV compliant with official university internship NOC and credits
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Karan_Verma_Recruiter_Resume_2026.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summary = `KARAN VERMA — Computer Science & Engineering Undergraduate & Educator
Status: Open to Software Engineering & Summer 2026 Internships | Dept. of CSE, MIT Ujjain
Academic Record: SGPAs 8.48, 8.57, 8.54 (College Topper) | CBSE XII: 93% | GSEB X: 88.7%
Experience:
• Python Developer Intern @ IndusAI Solutions (Jul-Aug 2025 · MSME Certified · Automated ETL & Pipelines)
• Web3 Strategy & Content Intern @ HACKTOUR IND (Jul-Nov 2025 · 5 Months · Developer Docs & Protocols)
• Co-Founder & Lead Educator @ PRO LEARN COACHING (2023-Present · 3+ Yrs · 50+ Students Mentored)
• VP Student Council & Student Coordinator @ Institution's Innovation Council (IIC & Incubation Centre)
Grants & Honors: MSME Idea Hackathon 5.0 (Dual ₹15L Grant Selections — ₹30L Combined Consideration)
Contact: +91 8799577917 | ${PERSONAL_INFO.email} | Twitter: @krunverma | GitHub: github.com/krunvermaa | LinkedIn: ${PERSONAL_INFO.linkedin}
Verification Code: #MIT-UJJAIN-CSE-TOPPER`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="resume"
      className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8F9] dark:bg-[#110609] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Rich Luminous Atmospheric Ambient Lighting Glows - Crimson & Rose Quartz */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-rose-300/35 dark:from-rose-900/30 via-pink-200/20 dark:via-rose-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 sm:right-1/4 w-[700px] h-[400px] bg-gradient-to-tr from-pink-300/25 dark:from-rose-950/20 via-rose-300/15 to-red-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-24 w-[450px] h-[250px] bg-rose-200/20 dark:bg-rose-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 relative z-10">
        {/* Section Header & Actions Toolbar with High Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider">
              <span>06 / FORMAL CAREER COLLATERAL</span>
              <span>·</span>
              <span>ACCREDITED RECRUITER DOSSIER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white uppercase">
              Curriculum Vitae.
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl font-sans font-medium">
              Accredited career dossier and verified collateral for engineering leaders, hiring managers, and technical recruiters. Features official candidate credentialing, structured employment experience sheets, and institutional academic transcripts.
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

          {/* ======================================================================= */}
          {/* TOP ROW: THE ACCREDITED DEVELOPER PASS CARD */}
          {/* ======================================================================= */}
          <div className="relative z-20 pt-2 sm:pt-4">
            <div className="relative w-full rounded-2xl bg-[#FFFFFF] text-slate-950 p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-slate-300 transition-all duration-300">
              {/* Official Recruiter Verification Status Strip */}
              <div className="mb-4 pb-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>OFFICIAL VERIFICATION: Open to Software Engineering & Summer 2026 Internships</span>
                </div>
                <div className="text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-500" />
                  <span>Department of Computer Science & Engineering · MIT Ujjain</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                {/* Photo Specimen Box */}
                <div className="relative shrink-0 w-32 h-36 sm:w-40 sm:h-44 rounded-xl overflow-hidden bg-slate-950 border-2 border-slate-950 shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    alt="Karan Verma"
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 text-white font-mono text-[9px] text-center py-0.5 rounded px-1 font-bold">
                    ID: #KV-2026-CSE
                  </div>
                </div>

                {/* Card Right: Name, Seal, Bio, Micro-Data & Direct Contacts */}
                <div className="flex-1 space-y-3 w-full min-w-0">
                  {/* Name and Seal */}
                  <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-2.5">
                    <div className="min-w-0">
                      <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none text-slate-950 uppercase truncate">
                        KARAN VERMA
                      </h3>
                      <p className="font-mono text-xs font-bold text-rose-700 uppercase tracking-wider pt-1.5 truncate">
                        CS Engineer · MIT Ujjain '26 · College Topper (8.54+ SGPA)
                      </p>
                    </div>

                    {/* Rainbow Holographic Square Seal */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl p-[2px] bg-gradient-to-tr from-cyan-400 via-pink-400 via-yellow-300 to-indigo-500 shadow-md shrink-0 transform rotate-2">
                      <div className="w-full h-full rounded-[10px] bg-slate-950 flex flex-col items-center justify-center text-center p-1 text-white">
                        <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
                        <span className="font-mono text-[8px] font-black leading-none mt-0.5">KV</span>
                        <span className="font-mono text-[6px] font-bold text-amber-300 leading-none">SEAL</span>
                      </div>
                    </div>
                  </div>

                  {/* Recruiter Qualifications Statement */}
                  <p className="text-xs sm:text-[13px] text-slate-800 font-sans font-medium leading-relaxed">
                    Pre-final year Computer Science & Engineering undergraduate with consistent #1 academic standing (SGPAs: 8.48, 8.57, 8.54). Proven production experience across Python ETL pipelines (IndusAI Solutions), Web3 developer documentation (HACKTOUR IND), dual MSME 5.0 grant selections (₹30L combined), and 3+ years founding educational leadership (50+ students guided).
                  </p>

                  {/* Micro-Data Table with High Contrast Text */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-200 text-[10px] font-mono">
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">Candidacy</span>
                      <span className="font-black text-emerald-800 truncate block text-xs">SUMMER 2026</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">Academic Standing</span>
                      <span className="font-black text-slate-950 truncate block text-xs">8.54+ SGPA (TOPPER)</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">Mentorship Tenure</span>
                      <span className="font-black text-amber-800 truncate block text-xs">50+ GUIDED · 3+ YRS</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-slate-600 block text-[9px] uppercase font-bold">Governance</span>
                      <span className="font-black text-indigo-900 truncate block text-xs">COUNCIL VP '26-27</span>
                    </div>
                  </div>

                  {/* Social Handles, Phone, Twitter & Links */}
                  <div className="pt-2.5 flex flex-wrap items-center justify-between gap-2.5 border-t border-slate-200 text-xs font-mono text-slate-800">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a
                        href="tel:8799577917"
                        className="inline-flex items-center gap-1.5 font-bold text-slate-950 hover:text-rose-600 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>+91 8799577917</span>
                      </a>
                      <span className="text-slate-300">·</span>
                      <a
                        href={PERSONAL_INFO.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-sky-700 hover:text-sky-900 transition-colors"
                      >
                        <Twitter className="w-3.5 h-3.5 text-sky-500 fill-current shrink-0" />
                        <span>@krunverma</span>
                      </a>
                      <span className="text-slate-300">·</span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-slate-950 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{PERSONAL_INFO.email}</span>
                      </a>
                      <span className="text-slate-300">·</span>
                      <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-slate-950 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>github.com/krunvermaa</span>
                      </a>
                    </div>
                    <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      #MIT-UJJAIN-CSE-TOPPER
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
                <BadgeCheck className="w-3.5 h-3.5" /> Topper (8.54+ SGPA · Rank #1)
              </span>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> IndusAI (Python Intern) & HACKTOUR IND (Web3)
              </span>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" /> Pro Learn Classes (50+ Students Guided · 3+ Yrs)
              </span>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <span className="text-purple-400 font-bold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-purple-400" /> Council VP & IIC Coordinator
              </span>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <span className="text-rose-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" /> MSME 5.0 (Dual ₹15L Selections)
              </span>
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
              #ACCREDITED-DOSSIER
            </div>
          </div>

          {/* ======================================================================= */}
          {/* MIDDLE & LOWER COLLAGE: WHITE WORK SHEET + RED EDUCATION + BLACK FOIL */}
          {/* ======================================================================= */}
          <div className="relative z-20 mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ------------------------------------------------------------------- */}
            {/* CENTER-LEFT: THE WHITE PERFORATED WORK EXPERIENCE SHEET */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-7 relative rounded-2xl bg-[#FFFFFF] text-slate-950 p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-slate-300 transform rotate-0 lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Top Calligraphic Script: "Work Experience & Accreditations" with Direct Contact Row */}
              <div className="pb-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-serif italic font-black text-2xl sm:text-3xl text-slate-950 tracking-tight">
                    Work Experience & Accreditations
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
                <span>EXPERIENCE & ACCREDITATIONS</span>
                <span className="text-slate-400 text-xs font-mono font-normal">/ Formal Employment Sheets</span>
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
                  {/* Role 1: IndusAI Solutions */}
                  <div className="space-y-1.5 border-b border-slate-100 pb-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        IndusAI Solutions
                      </h4>
                      <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                        Jul — Aug 2025 · MSME Certified
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold text-indigo-700">
                      Python Developer Intern (MSME-Registered)
                    </div>
                    <p className="text-xs font-sans text-slate-700 font-medium leading-relaxed">
                      Completed 3-week production sprint developing automated backend data pipelines and verification scripts under MSME framework; certificate officially issued August 2025.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Automated Python ETL data pipelines</span>
                      <span>✓ Data schema validation & exception alerts</span>
                      <span>✓ Reduced processing failures by 40%</span>
                      <span>✓ MSME Certificate Awarded (Aug 2025)</span>
                    </div>
                  </div>

                  {/* Role 2: HACKTOUR IND */}
                  <div className="space-y-1.5 border-b border-slate-100 pb-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        HACKTOUR IND (Web3 Ecosystem)
                      </h4>
                      <span className="font-mono text-xs font-bold text-pink-800 bg-pink-50 px-2 py-0.5 rounded border border-pink-200 shrink-0">
                        Jul — Nov 2025 · 5 Months
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs font-bold text-indigo-700">
                      <span>Web3 Strategy & Content Intern</span>
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
                    <p className="text-xs font-sans text-slate-700 font-medium leading-relaxed">
                      Managed technical content strategy, protocol explainers, and developer ecosystem advocacy across leading decentralized networks.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Arweave / Permaweb Buildstation Hackathon</span>
                      <span>✓ Zcash India Developer Meetups</span>
                      <span>✓ Avalanche City Connect (Jaipur) Contributor</span>
                      <span>✓ Protocol Teardowns & Developer Guides</span>
                    </div>
                  </div>

                  {/* Role 3: PRO LEARN COACHING CLASSES */}
                  <div className="space-y-1.5 border-b border-slate-100 pb-3.5">
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
                      Co-founded academic coaching center, mentoring 50+ students in foundational STEM, physics, and mathematics with structured milestone roadmaps.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Guided 50+ Students in Foundational STEM</span>
                      <span>✓ Structured Diagnostic Assessments</span>
                      <span>✓ 90%+ Academic Improvement Rate</span>
                      <span>✓ Scaled 3+ Years of Continuous Operations</span>
                    </div>
                  </div>

                  {/* Role 4: Institution's Innovation Council & Student Council */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-black text-base sm:text-lg text-slate-950 tracking-tight">
                        Institution's Innovation Council & Student Council
                      </h4>
                      <span className="font-mono text-xs font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 shrink-0">
                        2024 — Present · MIT Ujjain
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold text-indigo-700">
                      Student Coordinator (IIC) & Vice President (Student Council)
                    </div>
                    <p className="text-xs font-sans text-slate-700 font-medium leading-relaxed">
                      Elected Student Council VP (2026-27) following terms as Joint Secretary (2025-26) and Class Representative (2024-25). Coordinated startup incubation and campus operations.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5 text-xs font-sans text-slate-800 font-medium">
                      <span>✓ Student Council VP (2026-27)</span>
                      <span>✓ IIC Startup Incubation Drives</span>
                      <span>✓ Prompt Engineering Lead (MGI Coding Club)</span>
                      <span>✓ Anchored 35+ Formal University Ceremonies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Section Divider */}
              <div className="my-6 border-t border-slate-200" />

              {/* RECRUITER & HIRING MANAGER CHECKSHEET (Unique to Resume Section) */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h4 className="font-display font-black text-base sm:text-lg tracking-tight text-slate-950 uppercase">
                      Recruiter Clearance & Hiring Checksheet
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase tracking-wider">
                    Screening Ready
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-slate-800 font-medium">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-slate-900">
                      <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>Availability Window</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Open for Summer 2026 Software Engineering Internships (May – Aug 2026) and technical contract projects.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-slate-900">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>Work Mode & Locations</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Open to Remote, Hybrid, or On-site in Bangalore, Pune, NCR/Delhi, Mumbai, Indore, and Hyderabad.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-slate-900">
                      <BadgeCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Work Authorization</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Indian Citizen with full legal employment eligibility and valid international passport for global assignments.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-slate-900">
                      <GraduationCap className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>University Clearance</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      MIT Ujjain / RGPV compliant with official university internship NOC and academic credit allocations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: RED EDUCATION CARD + BLACK GLOSSY SKILLS POUCH */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              {/* ----------------------------------------------------------------- */}
              {/* THE CRIMSON RED EDUCATION CARD (Middle-Right) */}
              {/* ----------------------------------------------------------------- */}
              <div className="relative rounded-2xl bg-[#CC141D] text-white p-6 sm:p-7 shadow-[0_20px_50px_rgba(204,20,29,0.4)] border border-rose-500 transform rotate-0 lg:rotate-1 hover:rotate-0 transition-transform duration-300 space-y-5 overflow-hidden">
                <div className="absolute top-4 right-4 text-white font-serif text-lg">✦</div>

                {/* Header: "Education Specimen" */}
                <div className="relative pb-2 border-b border-white/40">
                  <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white">
                    Education
                  </h3>
                  <div className="w-28 h-1 bg-white rounded-full mt-1" />
                </div>

                {/* Degree & Institutional Details with High Contrast */}
                <div className="space-y-4 font-sans">
                  {/* B.Tech CSE */}
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
                    <div className="text-[11px] text-rose-100/90 font-mono pt-1 leading-snug">
                      SGPA: 8.48 (Sem 1, Topper) · 8.57 (Sem 2, Topper) · 8.54 (Sem 3, Runner-up)
                    </div>
                    <div className="text-[10px] text-emerald-200 font-mono font-bold pt-0.5">
                      ✓ Cumulative Rank #1 Across Computer Science Cohort
                    </div>
                  </div>

                  {/* Class XII */}
                  <div className="space-y-1 border-t border-white/30 pt-3">
                    <span className="font-mono text-xs font-bold text-white bg-black/25 px-2 py-0.5 rounded inline-block">
                      2023 — 2024
                    </span>
                    <div className="font-display font-bold text-sm text-white">
                      Higher Secondary Certificate (Class XII) · CBSE
                    </div>
                    <div className="text-xs text-rose-100 font-bold">
                      Percentage: 93.0% · Science Stream with Mathematics & CS
                    </div>
                  </div>

                  {/* Class X */}
                  <div className="space-y-1 border-t border-white/30 pt-3">
                    <span className="font-mono text-xs font-bold text-white bg-black/25 px-2 py-0.5 rounded inline-block">
                      2021 — 2022
                    </span>
                    <div className="font-display font-bold text-sm text-white">
                      Secondary School Certificate (Class X) · GSEB
                    </div>
                    <div className="text-xs text-rose-100 font-bold">
                      Percentage: 88.7% · Distinction
                    </div>
                  </div>
                </div>

                {/* Academic Standing & Credential Verification */}
                <div className="pt-3 border-t border-white/30 flex items-center justify-between text-xs font-mono">
                  <span className="text-rose-100 font-medium">Academic Standing</span>
                  <span className="font-mono font-black tracking-widest text-white uppercase bg-black/35 px-2.5 py-1 rounded">
                    #MIT-UJJAIN-CSE-TOPPER
                  </span>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* THE GLOSSY BLACK FOIL VACUUM POUCH: "SKILLS" (Bottom-Right) */}
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
                    <span>SPECIALIZATIONS & LEADERSHIP</span>
                    <span className="text-amber-400 font-mono text-[9px] font-bold">50+ GUIDED · 3+ YRS</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Teaching & Mentorship (50+ Students)',
                      'Video Editing & Creator Media',
                      'IIC Startup Incubation',
                      'Student Governance VP',
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
          {/* MSME IDEA HACKATHON 5.0 — DUAL GRANT ACCREDITATION SPECIMENS */}
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

              {/* Direct Recruiter Contact on Accreditation Bar */}
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
