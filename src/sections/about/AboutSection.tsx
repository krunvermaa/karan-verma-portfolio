import React from 'react';
import { PERSONAL_INFO, PHILOSOPHY_PRINCIPLES } from '@/data/portfolioData';
import { DeveloperLicenseBadge } from './DeveloperLicenseBadge';
import { GraduationCap, Compass, ShieldCheck, Globe, BookOpen, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9F5] dark:bg-[#150C09] text-theme-primary border-t border-orange-200/80 dark:border-orange-950/80 relative overflow-hidden transition-colors duration-300">
      {/* Warm Terracotta & Sunset Copper atmospheric background ambient lighting glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-orange-300/35 dark:from-orange-950/30 via-rose-200/20 dark:via-rose-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[400px] bg-amber-300/20 dark:bg-orange-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
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

        {/* Two-Column Grid: Left is the Creative License ID Badge, Right is the Narrative & Education */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Column: Creative License Badge (From Reference 3: Licencia Creativa) */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 flex justify-center w-full min-w-0">
            <DeveloperLicenseBadge />
          </div>

          {/* Right Column: Bio Narrative, Education, Leadership & Community */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base w-full min-w-0">
            <p className="text-lg text-slate-950 dark:text-white font-medium leading-relaxed transition-colors">
              I am a computer science engineering student, software developer, educator, and student leader dedicated to building high-impact technology solutions, empowering student communities, and fostering campus innovation.
            </p>

            <p>
              Pursuing my B.Tech in Computer Science & Engineering at Mahakal Institute of Technology, Ujjain, I maintain consistent academic excellence as College Topper (SGPAs 8.48, 8.57, 8.54). My technical work spans production Python development at IndusAI Solutions, Web3 strategy & technical content at HackTourIND, and two innovations selected for ₹30 Lakh combined grant-in-aid consideration under MSME Idea Hackathon 5.0.
            </p>

            <p>
              Beyond systems code, I am the Co-Founder & Educator at <strong className="text-slate-950 dark:text-white">Pro Learn Coaching Classes</strong> (with 3+ years of teaching experience guiding 50+ students in foundational academic excellence) and serve as Student Coordinator at the <strong className="text-slate-950 dark:text-white">Institution's Innovation Council (IIC) & Business Incubation Centre</strong>, MIT Ujjain. I am also an active creator, video editor, and digital media storyteller bridging complex technical concepts with visual media.
            </p>

            {/* Education Specimen Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs space-y-3 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 font-bold shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base leading-snug">
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

              <div className="text-xs text-slate-700 dark:text-slate-300 font-sans pt-2 border-t border-orange-200/80 dark:border-orange-950/80 space-y-1">
                <div><strong className="text-slate-950 dark:text-white">Academic Performance:</strong> SGPA 8.48 (Sem 1, College Topper) · 8.57 (Sem 2, College Topper) · 8.54 (Sem 3, Runner-up)</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">Schooling: Class XII CBSE (93%) · Class X GSEB (88.7%)</div>
              </div>
            </div>

            {/* 3-Year Student Council Progression Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs space-y-4 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 font-bold shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base">
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

              {/* Sequential Progression Stepper Cards (1 col on mobile, 3 col on tablet/desktop) */}
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

              <div className="text-xs text-slate-600 dark:text-slate-400 font-sans pt-1 border-t border-orange-200/80 dark:border-orange-950/80 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>• Spearheaded 20+ coordinated campus events</span>
                <span>• Anchored 35+ institutional ceremonies & hackathons</span>
                <span>• Student Coordinator @ IIC & Incubation Centre</span>
              </div>
            </div>

            {/* Educator & Founder Dimension Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs space-y-3.5 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 font-bold shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
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

              {/* Creator & Storyteller callout */}
              <div className="p-3 rounded-xl bg-orange-50/70 dark:bg-orange-950/40 border border-orange-200/80 dark:border-orange-900/60 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-sans">
                <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-950 dark:text-white">Creator & Digital Media Storyteller:</span> Video editor and technical communicator crafting engaging narratives, motion edits, and educational media for tech ecosystems.
                </div>
              </div>
            </div>

            {/* Web3 Strategy & Ecosystem Contributions Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs space-y-3.5 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/60 font-bold shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm sm:text-base">
                      Web3 Strategy & Ecosystem Engagement
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono font-medium">
                      Technical Content Contributor @HackTourIND
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-orange-900 dark:text-orange-200 bg-orange-100/70 dark:bg-orange-950/70 px-2.5 py-1 rounded-md border border-orange-300/80 dark:border-orange-900/80 font-bold self-start sm:self-auto shrink-0">
                  Decentralized Web
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Contributor at <strong className="text-slate-950 dark:text-white">@HackTourIND</strong>, creating technical documentation and driving community strategy. Active across top Web3 developer ecosystems:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 flex flex-col justify-between">
                  <div className="font-bold text-slate-950 dark:text-white text-xs leading-snug">Zcash India</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans mt-1 leading-snug">Privacy tech meetups & community dialog</div>
                </div>

                <div className="p-3 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 flex flex-col justify-between">
                  <div className="font-bold text-slate-950 dark:text-white text-xs leading-snug">Arweave / Permaweb</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans mt-1 leading-snug">Buildstation & Agents of the Permaweb Hackathon</div>
                </div>

                <div className="p-3 rounded-xl bg-[#FFFDFB] dark:bg-[#201510]/80 border border-orange-200/70 dark:border-orange-950/80 flex flex-col justify-between">
                  <div className="font-bold text-slate-950 dark:text-white text-xs leading-snug">Avalanche City Connect</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans mt-1 leading-snug">Jaipur ecosystem summit & builder roundtables</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs transition-colors text-left flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-display font-black text-orange-700 dark:text-orange-400 tabular-nums tracking-tight">
                  ₹30 Lakh
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">MSME 5.0 Grant Consideration</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs transition-colors text-left flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-display font-black text-orange-600 dark:text-orange-300 tabular-nums tracking-tight">
                  50+
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Students Guided (Pro Learn)</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs transition-colors text-left flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-display font-black text-amber-700 dark:text-amber-400 tabular-nums tracking-tight">
                  3+ Yrs
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Teaching & Mentorship</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs transition-colors text-left flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-display font-black text-slate-950 dark:text-white tabular-nums tracking-tight">
                  35+
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">College Events Anchored</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs transition-colors text-left flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-display font-black text-slate-950 dark:text-white tabular-nums tracking-tight">
                  20+
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Events Coordinated</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 dark:bg-[#1C120E]/90 border border-orange-200/80 dark:border-orange-950/80 shadow-xs transition-colors text-left flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-display font-black text-orange-700 dark:text-orange-400 tabular-nums tracking-tight">
                  8.54+
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Consistent SGPA (Topper)</div>
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
