import React from 'react';
import { PERSONAL_INFO, PHILOSOPHY_PRINCIPLES } from '@/data/portfolioData';
import { DeveloperLicenseBadge } from './DeveloperLicenseBadge';
import { GraduationCap, Compass, ShieldCheck, Globe, BookOpen, Sparkles, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9F5] dark:bg-[#150C09] text-theme-primary border-t border-orange-200/80 dark:border-orange-950/80 relative overflow-hidden transition-colors duration-300">
      {/* Warm Terracotta & Sunset Copper atmospheric background ambient lighting glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-orange-300/35 dark:from-orange-950/30 via-rose-200/20 dark:via-rose-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[400px] bg-amber-300/20 dark:bg-orange-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl xl:max-w-7xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-orange-700 dark:text-orange-400 font-semibold uppercase tracking-wider">
            <span>03 / CREDENTIALS & IDENTITY</span>
            <span>·</span>
            <span>AUTHORIZED DEVELOPER SPECIFICATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08] transition-colors">
            Engineering software with <br className="hidden sm:inline" />
            <span className="italic font-serif font-normal text-orange-900 dark:text-orange-200">uncompromising</span> discipline & human taste.
          </h2>
        </div>

        {/* Two-Column Grid: Left is Creative License Badge, Right is Narrative & 2-Col Cards Subgrid */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-10 xl:gap-12 items-start">
          {/* Left Column: Creative License Badge (Sticky on Desktop) */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-24 flex justify-center w-full min-w-0">
            <DeveloperLicenseBadge />
          </div>

          {/* Right Column: Bio Narrative + 2-Column Cards Subgrid */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base w-full min-w-0">
            {/* Bio Narrative */}
            <div className="space-y-3 sm:space-y-3.5">
              <p className="text-base sm:text-lg text-slate-950 dark:text-white font-medium leading-relaxed transition-colors">
                I am a computer science engineering student, software developer, educator, and student leader dedicated to building high-impact technology solutions, empowering student communities, and fostering campus innovation.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Pursuing my B.Tech in Computer Science & Engineering at Mahakal Institute of Technology, Ujjain, I maintain consistent academic excellence as College Topper (SGPAs 8.48, 8.57, 8.54). My technical work spans production Python development at IndusAI Solutions, Web3 strategy & technical content at HackTourIND, and two innovations selected for ₹30 Lakh combined grant-in-aid consideration under MSME Idea Hackathon 5.0.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Beyond systems code, I am the Co-Founder & Educator at <strong className="text-slate-950 dark:text-white">Pro Learn Coaching Classes</strong> (guiding 50+ students over 3+ years in foundational academic excellence) and serve as Student Coordinator at the <strong className="text-slate-950 dark:text-white">Institution's Innovation Council (IIC) & Business Incubation Centre</strong>, MIT Ujjain.
              </p>
            </div>

            {/* Reorganized Credential & Leadership Bento Subgrid (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
              {/* Card 1: Education & Academic Excellence */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs flex flex-col justify-between space-y-3 transition-colors hover:border-orange-300 dark:hover:border-orange-900/80">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 shrink-0">
                        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base leading-snug">
                          {PERSONAL_INFO.education.degree}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-mono font-medium truncate">
                          {PERSONAL_INFO.education.institution}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2 py-0.5 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold shrink-0">
                      Topper
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-sans">
                    <div className="p-2.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-orange-800 dark:text-orange-300">
                        <span>SGPA Excellence</span>
                        <span className="text-orange-700 dark:text-orange-400 font-black">8.54+ Avg</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono leading-tight">
                        Sem 1: <strong className="text-slate-900 dark:text-slate-200">8.48</strong> (Topper) · Sem 2: <strong className="text-slate-900 dark:text-slate-200">8.57</strong> (Topper) · Sem 3: <strong className="text-slate-900 dark:text-slate-200">8.54</strong>
                      </p>
                    </div>

                    <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono flex items-center justify-between px-0.5">
                      <span>Schooling:</span>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">XII CBSE 93% · X GSEB 88.7%</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-sans pt-2 border-t border-orange-200/70 dark:border-orange-950/80 flex items-center justify-between">
                  <span>Academic Rank: College Topper</span>
                  <span>•</span>
                  <span>2024–2028</span>
                </div>
              </div>

              {/* Card 2: 3-Year Student Council Progression */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs flex flex-col justify-between space-y-3 transition-colors hover:border-orange-300 dark:hover:border-orange-900/80">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 shrink-0">
                        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base leading-snug">
                          Student Council Track
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-mono font-medium truncate">
                          Mahakal Inst. of Technology
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2 py-0.5 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold shrink-0">
                      Elected
                    </span>
                  </div>

                  {/* Sequential Progression Steps */}
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between p-1.5 px-2.5 rounded-lg bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 text-[11px]">
                      <span className="text-slate-500 font-semibold">2024–25</span>
                      <span className="font-sans font-bold text-slate-900 dark:text-slate-200">Class Representative</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 px-2.5 rounded-lg bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 text-[11px]">
                      <span className="text-slate-500 font-semibold">2025–26</span>
                      <span className="font-sans font-bold text-slate-900 dark:text-slate-200">Joint Secretary</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 px-2.5 rounded-lg bg-orange-100/70 dark:bg-orange-950/70 border border-orange-300 dark:border-orange-800/80 text-[11px]">
                      <span className="text-orange-800 dark:text-orange-300 font-bold">2026–27</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-sans font-extrabold text-orange-950 dark:text-orange-100">Vice President</span>
                        <span className="text-[9px] px-1 py-0.2 bg-orange-600 text-white rounded font-sans font-semibold">Current</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-sans pt-2 border-t border-orange-200/70 dark:border-orange-950/80 flex items-center justify-between">
                  <span>35+ Ceremonies Anchored</span>
                  <span>•</span>
                  <span>20+ Events Led</span>
                </div>
              </div>

              {/* Card 3: Educator & Founder */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs flex flex-col justify-between space-y-3 transition-colors hover:border-orange-300 dark:hover:border-orange-900/80">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 shrink-0">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base leading-snug">
                          Educator & Founder
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-mono font-medium truncate">
                          Pro Learn Coaching Classes
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2 py-0.5 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold shrink-0">
                      3+ Yrs
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-orange-800 dark:text-orange-300">
                      <span>Co-Founder & Mentor</span>
                      <span className="text-orange-700 dark:text-orange-400 font-black">50+ Students</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      Mentored 50+ students in foundational academic excellence, emphasizing concept clarity, mathematical reasoning, and analytical confidence over 3+ years.
                    </p>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-sans pt-2 border-t border-orange-200/70 dark:border-orange-950/80 flex items-center justify-between">
                  <span>Concept Clarity Focus</span>
                  <span>•</span>
                  <span>Academic Mentorship</span>
                </div>
              </div>

              {/* Card 4: Campus Innovation & Incubation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs flex flex-col justify-between space-y-3 transition-colors hover:border-orange-300 dark:hover:border-orange-900/80">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 shrink-0">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base leading-snug">
                          Innovation & Incubation
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-mono font-medium truncate">
                          IIC & Business Incubation Centre
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2 py-0.5 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold shrink-0">
                      IIC Lead
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-orange-800 dark:text-orange-300">
                      <span>Student Coordinator</span>
                      <span className="text-orange-700 dark:text-orange-400 font-black">MIT Ujjain</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      Coordinating startup incubation, hackathons, and innovation drives at Institution's Innovation Council. Digital media storyteller and motion video editor.
                    </p>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-sans pt-2 border-t border-orange-200/70 dark:border-orange-950/80 flex items-center justify-between">
                  <span>Startup Incubation</span>
                  <span>•</span>
                  <span>Creator & Media</span>
                </div>
              </div>

              {/* Card 5: Web3 Strategy & Ecosystem Contributions */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs flex flex-col justify-between space-y-3 transition-colors hover:border-orange-300 dark:hover:border-orange-900/80">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 shrink-0">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base leading-snug">
                          Web3 & Ecosystems
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-mono font-medium truncate">
                          HackTourIND Contributor
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2 py-0.5 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold shrink-0">
                      Web3
                    </span>
                  </div>

                  {/* 3 Ecosystem Mini Pills */}
                  <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
                    <div className="p-2 rounded-lg bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 flex flex-col justify-center">
                      <span className="font-bold text-slate-950 dark:text-white truncate">Zcash</span>
                      <span className="text-[9px] text-slate-500 font-sans truncate">Privacy Tech</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 flex flex-col justify-center">
                      <span className="font-bold text-slate-950 dark:text-white truncate">Arweave</span>
                      <span className="text-[9px] text-slate-500 font-sans truncate">Permaweb</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 flex flex-col justify-center">
                      <span className="font-bold text-slate-950 dark:text-white truncate">Avalanche</span>
                      <span className="text-[9px] text-slate-500 font-sans truncate">City Connect</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-sans pt-2 border-t border-orange-200/70 dark:border-orange-950/80 flex items-center justify-between">
                  <span>Technical Documentation</span>
                  <span>•</span>
                  <span>Community Strategy</span>
                </div>
              </div>

              {/* Card 6: National Hackathons & Accolades */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs flex flex-col justify-between space-y-3 transition-colors hover:border-orange-300 dark:hover:border-orange-900/80">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 shrink-0">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base leading-snug">
                          Hackathons & Grants
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-mono font-medium truncate">
                          MSME 5.0 · Algorush · Agnitia
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2 py-0.5 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold shrink-0">
                      ₹30L Track
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-orange-800 dark:text-orange-300">
                      <span>MSME Idea Hackathon 5.0</span>
                      <span className="text-orange-700 dark:text-orange-400 font-black">₹30 Lakh</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      Dual projects under ₹30L combined grant-in-aid consideration; National Finalist across Algorush, Agnitia, and HackWave hackathons.
                    </p>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-sans pt-2 border-t border-orange-200/70 dark:border-orange-950/80 flex items-center justify-between">
                  <span>Dual Project Consideration</span>
                  <span>•</span>
                  <span>National Finalist</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Principles Grid */}
        <div className="pt-10 border-t border-orange-200/80 dark:border-orange-950/80 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-orange-800 dark:text-orange-300 uppercase tracking-wider font-semibold">
            <Compass className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>Core Engineering Values & Anti-Slop Principles</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="p-5 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs space-y-3 transition-colors"
              >
                <div className="font-mono text-xs font-black text-orange-600 dark:text-orange-400">
                  {principle.number}
                </div>
                <h4 className="font-display font-bold text-sm text-slate-950 dark:text-white">
                  {principle.title}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
