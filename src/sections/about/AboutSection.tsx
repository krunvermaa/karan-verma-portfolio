import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { DeveloperLicenseBadge } from './DeveloperLicenseBadge';
import { GraduationCap, ShieldCheck, BookOpen, Sparkles, Activity } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9F5] dark:bg-[#150C09] text-theme-primary border-t border-orange-200/80 dark:border-orange-950/80 relative overflow-hidden transition-colors duration-300">
      {/* Rich Warm Terracotta & Sunset Copper ambient atmospheric lighting glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-orange-300/35 dark:from-orange-900/30 via-rose-200/20 dark:via-rose-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-28 w-[700px] h-[400px] bg-gradient-to-tr from-amber-300/25 dark:from-orange-950/20 via-orange-300/15 to-rose-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[450px] h-[250px] bg-orange-200/20 dark:bg-orange-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-orange-700 dark:text-orange-400 font-semibold uppercase tracking-wider">
            <span>03 / CREDENTIALS & IDENTITY</span>
            <span>·</span>
            <span>AUTHORIZED DEVELOPER SPECIFICATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] transition-colors">
            Engineering software with <br className="hidden sm:inline" />
            <span className="italic font-serif font-normal text-orange-900 dark:text-orange-200">uncompromising</span> discipline & human taste.
          </h2>
        </div>

        {/* Top Showcase Stage: Two Columns (Left: Creative License ID Badge, Right: Narrative & Editorial Bio) */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Creative License Badge (From Reference 3: Licencia Creativa) */}
          <div className="lg:col-span-6 flex justify-center w-full min-w-0">
            <DeveloperLicenseBadge />
          </div>

          {/* Right Column: Bio Narrative & Philosophy */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base w-full min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 dark:bg-orange-950/70 border border-orange-300/80 dark:border-orange-900/80 text-orange-900 dark:text-orange-200 font-mono text-xs font-bold">
              <span>ENGINEERING PHILOSOPHY & IDENTITY</span>
            </div>

            <p className="text-lg sm:text-xl text-slate-950 dark:text-white font-medium leading-relaxed transition-colors">
              I am a computer science engineering undergraduate, educator, and elected student leader dedicated to computational rigor, campus governance, and empowering future engineers.
            </p>

            <p>
              Pursuing my B.Tech in Computer Science & Engineering at Mahakal Institute of Technology, Ujjain, I ground my work in deep academic excellence—consistently standing as Department Topper across semesters (SGPAs 8.48, 8.57, 8.54). For me, engineering is not about superficial syntax; it is about building reliable mental models, algorithmic discipline, and solving real human problems with precision.
            </p>

            <p>
              Beyond the terminal, I believe leadership is earned through active service and democratic trust. Over three consecutive academic years, my peers have elected me from Class Representative to Joint Secretary, and now to Vice President of the Student Council. In parallel, as Co-Founder & Educator at <strong className="text-slate-950 dark:text-white">Pro Learn Coaching Classes</strong>, I have spent 3+ years guiding 50+ students in foundational mathematics and computing, cultivating clarity, curiosity, and confidence.
            </p>

            {/* Philosophy Highlight Banner */}
            <div className="p-4 rounded-xl bg-orange-50/80 dark:bg-[#1A110D]/80 border-l-4 border-l-orange-500 border border-orange-200/80 dark:border-orange-950/80 text-xs sm:text-sm text-slate-800 dark:text-slate-200 italic font-serif leading-relaxed">
              "Building software with uncompromising discipline, architectural resilience, and genuine human care for the people using it."
            </div>
          </div>
        </div>

        {/* Full-Width Credentials Bento Grid: Positioned Directly Underneath the Creative License & Bio Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 pt-2 sm:pt-4">
          {/* Card 1: Education & Academic Excellence */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs flex flex-col justify-between space-y-4 transition-colors">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 font-bold shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-slate-950 dark:text-white text-base sm:text-lg leading-snug">
                      {PERSONAL_INFO.education.degree}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono font-medium leading-snug">
                      {PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.period}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2.5 py-1 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold self-start sm:self-auto shrink-0">
                  College Topper
                </span>
              </div>

              {/* Semester SGPAs as 3 visual micro-cards */}
              <div className="grid grid-cols-3 gap-2.5 font-mono text-center">
                <div className="p-3 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 flex flex-col justify-between">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Sem 1</span>
                  <span className="text-lg sm:text-xl font-black text-orange-700 dark:text-orange-400 font-display block py-0.5">8.48</span>
                  <span className="text-[9.5px] text-emerald-700 dark:text-emerald-400 font-sans font-bold">Topper</span>
                </div>
                <div className="p-3 rounded-xl bg-orange-100/60 dark:bg-orange-950/60 border border-orange-300 dark:border-orange-800/80 flex flex-col justify-between">
                  <span className="text-[10px] text-orange-800 dark:text-orange-300 uppercase tracking-wider block font-bold">Sem 2</span>
                  <span className="text-lg sm:text-xl font-black text-orange-900 dark:text-orange-200 font-display block py-0.5">8.57</span>
                  <span className="text-[9.5px] text-orange-800 dark:text-orange-300 font-sans font-bold">College Topper</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 flex flex-col justify-between">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Sem 3</span>
                  <span className="text-lg sm:text-xl font-black text-orange-700 dark:text-orange-400 font-display block py-0.5">8.54</span>
                  <span className="text-[9.5px] text-slate-600 dark:text-slate-400 font-sans font-bold">Runner-up</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-700 dark:text-slate-300 font-sans pt-3 border-t border-orange-200/80 dark:border-orange-950/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div>
                <span className="font-semibold text-slate-950 dark:text-white">Schooling Foundation:</span> Class XII CBSE (93%) · Class X GSEB (88.7%)
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">PCM Stream</span>
            </div>
          </div>

          {/* Card 2: 3-Year Student Council Democratic Progression */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs flex flex-col justify-between space-y-4 transition-colors">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 font-bold shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-slate-950 dark:text-white text-base sm:text-lg">
                      3-Year Student Council Progression
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono font-medium">
                      Mahakal Institute of Technology, Ujjain
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2.5 py-1 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold self-start sm:self-auto shrink-0">
                  Elected Leadership
                </span>
              </div>

              {/* Sequential Progression Stepper Cards (3 col) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">2024–25</span>
                      <span className="text-[9px] text-slate-400 font-sans">Year 1</span>
                    </div>
                    <div className="font-display font-bold text-slate-950 dark:text-slate-100 text-xs sm:text-sm mt-1 leading-snug">
                      Class Representative
                    </div>
                  </div>
                  <p className="text-[11px] font-sans text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                    Departmental liaison & peer representation
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">2025–26</span>
                      <span className="text-[9px] text-slate-400 font-sans">Year 2</span>
                    </div>
                    <div className="font-display font-bold text-slate-950 dark:text-slate-100 text-xs sm:text-sm mt-1 leading-snug">
                      Joint Secretary
                    </div>
                  </div>
                  <p className="text-[11px] font-sans text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                    Campus operations & event governance
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-orange-100/60 dark:bg-orange-950/60 border border-orange-300 dark:border-orange-800/80 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-orange-800 dark:text-orange-300 uppercase tracking-wider font-bold">2026–27</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-orange-600 text-white rounded font-sans font-semibold shrink-0">Current</span>
                    </div>
                    <div className="font-display font-bold text-orange-950 dark:text-orange-100 text-xs sm:text-sm mt-1 leading-snug">
                      Vice President
                    </div>
                  </div>
                  <p className="text-[11px] font-sans text-orange-900/90 dark:text-orange-200 mt-1 leading-snug">
                    Apex student council governance & initiatives
                  </p>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 font-sans pt-3 border-t border-orange-200/80 dark:border-orange-950/80 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>• Spearheaded 20+ coordinated campus events</span>
              <span>• Anchored 35+ institutional ceremonies & hackathons</span>
              <span>• Student Coordinator @ IIC & Incubation Centre</span>
            </div>
          </div>

          {/* Card 3: Educator, Founder & Campus Innovation */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs flex flex-col justify-between space-y-4 transition-colors">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 font-bold shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-slate-950 dark:text-white text-base sm:text-lg">
                      Educator, Founder & Campus Innovation
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono font-medium">
                      Pro Learn Coaching Classes · IIC & Incubation Centre
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2.5 py-1 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold self-start sm:self-auto shrink-0">
                  Founder & Educator
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-orange-800 dark:text-orange-400 uppercase tracking-wider font-bold">Co-Founder & Educator</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-orange-100 dark:bg-orange-950/80 text-orange-900 dark:text-orange-300 rounded font-sans font-semibold">3+ Yrs</span>
                    </div>
                    <div className="font-display font-bold text-slate-950 dark:text-white text-xs sm:text-sm mt-1 leading-snug">
                      Pro Learn Coaching Classes
                    </div>
                  </div>
                  <p className="text-[11px] font-sans text-slate-600 dark:text-slate-400 leading-snug">
                    Mentored <strong className="text-slate-900 dark:text-slate-200">50+ students</strong> over 3+ years in foundational subjects, emphasizing concept clarity, analytical reasoning, and academic confidence.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-orange-800 dark:text-orange-400 uppercase tracking-wider font-bold">Student Coordinator</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-orange-100 dark:bg-orange-950/80 text-orange-900 dark:text-orange-300 rounded font-sans font-semibold">Innovation</span>
                    </div>
                    <div className="font-display font-bold text-slate-950 dark:text-white text-xs sm:text-sm mt-1 leading-snug">
                      IIC & Incubation Centre
                    </div>
                  </div>
                  <p className="text-[11px] font-sans text-slate-600 dark:text-slate-400 leading-snug">
                    Coordinating startup initiatives, hackathons, and entrepreneurship outreach at Institution's Innovation Council & Business Incubation Centre, MIT Ujjain.
                  </p>
                </div>
              </div>
            </div>

            {/* Creator & Storyteller callout */}
            <div className="p-3 rounded-xl bg-orange-50/70 dark:bg-orange-950/40 border border-orange-200/80 dark:border-orange-900/60 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-sans">
              <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-950 dark:text-white">Creator & Digital Media Storyteller:</span> Video editor and technical communicator crafting engaging narratives, motion edits, and educational media for tech ecosystems.
              </div>
            </div>
          </div>

          {/* Card 4: Quick Telemetry & Academic Metrics Bento Grid */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs flex flex-col justify-between space-y-4 transition-colors">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 font-bold shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-slate-950 dark:text-white text-base sm:text-lg">
                      Quick Telemetry & Academic Metrics
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono font-medium">
                      Verified Performance & Institutional Records
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2.5 py-1 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold self-start sm:self-auto shrink-0">
                  Telemetry Grid
                </span>
              </div>

              {/* 6 Telemetry metric tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 shadow-2xs transition-colors text-left flex flex-col justify-between">
                  <div className="text-xl sm:text-2xl font-display font-black text-orange-700 dark:text-orange-400 tabular-nums tracking-tight">
                    8.57
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Sem 2 SGPA (College Topper)</div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 shadow-2xs transition-colors text-left flex flex-col justify-between">
                  <div className="text-xl sm:text-2xl font-display font-black text-orange-600 dark:text-orange-300 tabular-nums tracking-tight">
                    3-Year
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Elected Council Progression</div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 shadow-2xs transition-colors text-left flex flex-col justify-between">
                  <div className="text-xl sm:text-2xl font-display font-black text-amber-700 dark:text-amber-400 tabular-nums tracking-tight">
                    50+
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Students Mentored (Pro Learn)</div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 shadow-2xs transition-colors text-left flex flex-col justify-between">
                  <div className="text-xl sm:text-2xl font-display font-black text-slate-950 dark:text-white tabular-nums tracking-tight">
                    3+ Yrs
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Teaching & Mentorship</div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 shadow-2xs transition-colors text-left flex flex-col justify-between">
                  <div className="text-xl sm:text-2xl font-display font-black text-slate-950 dark:text-white tabular-nums tracking-tight">
                    35+
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Ceremonies Anchored</div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 shadow-2xs transition-colors text-left flex flex-col justify-between">
                  <div className="text-xl sm:text-2xl font-display font-black text-orange-700 dark:text-orange-400 tabular-nums tracking-tight">
                    20+
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Campus Events Coordinated</div>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 font-sans pt-3 border-t border-orange-200/80 dark:border-orange-950/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] font-semibold text-slate-800 dark:text-slate-200">Active Academic Session 2026</span>
              </div>
              <span className="font-mono text-[11px] text-orange-700 dark:text-orange-400 font-bold">100% Verified Records</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
