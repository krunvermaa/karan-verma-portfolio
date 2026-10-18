import React from 'react';
import { PERSONAL_INFO, PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';
import { DeveloperLicenseBadge } from './DeveloperLicenseBadge';
import { GraduationCap, Compass, ShieldCheck, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFDF9] dark:bg-[#120F0A] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300">
      {/* Subtle warm amber/antique paper studio ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-amber-200/40 dark:from-amber-900/25 via-orange-100/20 dark:via-orange-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-amber-200/25 dark:bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
            <span>03 / CREDENTIALS & IDENTITY</span>
            <span>·</span>
            <span>AUTHORIZED DEVELOPER SPECIFICATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] transition-colors">
            Engineering software with <br className="hidden sm:inline" />
            <span className="italic font-serif font-normal text-slate-800 dark:text-slate-300">uncompromising</span> discipline & human taste.
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
              I am a computer science engineering student, software developer, and student leader dedicated to building high-impact technology solutions.
            </p>

            <p>
              Pursuing my B.Tech in Computer Science & Engineering at Mahakal Institute of Technology, Ujjain, I maintain consistent academic excellence as College Topper (SGPAs 8.48, 8.57, 8.54). My work spans production Python development at IndusAI Solutions, Web3 strategy & technical content at HackTourIND, and two innovations selected for ₹30 Lakh combined grant-in-aid consideration under MSME Idea Hackathon 5.0.
            </p>

            {/* Education Specimen Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs space-y-3 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/60 font-bold shrink-0">
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

                <span className="text-[11px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2.5 py-1 rounded-md border border-emerald-300 dark:border-emerald-800 font-bold self-start sm:self-auto shrink-0">
                  College Topper
                </span>
              </div>

              <div className="text-xs text-slate-700 dark:text-slate-300 font-sans pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
                <div><strong className="text-slate-950 dark:text-white">Academic Performance:</strong> SGPA 8.48 (Sem 1, College Topper) · 8.57 (Sem 2, College Topper) · 8.54 (Sem 3, Runner-up)</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">Schooling: Class XII CBSE (93%) · Class X GSEB (88.7%)</div>
              </div>
            </div>

            {/* 3-Year Student Council Progression Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/60 font-bold shrink-0">
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

                <span className="text-[11px] font-mono text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/70 px-2.5 py-1 rounded-md border border-amber-300 dark:border-amber-800 font-bold self-start sm:self-auto shrink-0">
                  Elected Leadership
                </span>
              </div>

              {/* Sequential Progression Stepper Cards (1 col on mobile, 3 col on tablet/desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 transition-colors flex flex-col justify-between">
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

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 transition-colors flex flex-col justify-between">
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

                <div className="p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-300 dark:border-indigo-800/80 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-indigo-700 dark:text-indigo-400 uppercase tracking-wider font-bold">2026–27</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-indigo-600 text-white rounded font-sans font-semibold shrink-0">Current</span>
                    </div>
                    <div className="font-display font-bold text-indigo-950 dark:text-indigo-200 text-xs sm:text-sm mt-1 leading-snug">
                      Vice President
                    </div>
                  </div>
                  <p className="text-[11px] font-sans text-indigo-800/90 dark:text-indigo-300 mt-1 leading-snug">
                    Apex student council governance & initiatives
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 font-sans pt-1 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>• Spearheaded 20+ coordinated campus events</span>
                <span>• Anchored 35+ institutional ceremonies & hackathons</span>
              </div>
            </div>

            {/* Web3 Strategy & Ecosystem Contributions Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs space-y-3.5 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-900/60 font-bold shrink-0">
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

                <span className="text-[11px] font-mono text-purple-800 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/70 px-2.5 py-1 rounded-md border border-purple-300 dark:border-purple-800 font-bold self-start sm:self-auto shrink-0">
                  Decentralized Web
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Contributor at <strong className="text-slate-950 dark:text-white">@HackTourIND</strong>, creating technical documentation and driving community strategy. Active across top Web3 developer ecosystems:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div className="font-bold text-slate-950 dark:text-white text-xs leading-snug">Zcash India</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans mt-1 leading-snug">Privacy tech meetups & community dialog</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div className="font-bold text-slate-950 dark:text-white text-xs leading-snug">Arweave / Permaweb</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans mt-1 leading-snug">Buildstation & Agents of the Permaweb Hackathon</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div className="font-bold text-slate-950 dark:text-white text-xs leading-snug">Avalanche City Connect</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans mt-1 leading-snug">Jaipur ecosystem summit & builder roundtables</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 sm:p-3.5 rounded-xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs transition-colors text-left flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-display font-black text-slate-950 dark:text-white tabular-nums tracking-tight">
                  ₹30 Lakh
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">MSME 5.0 Grant Consideration</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs transition-colors text-left flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-display font-black text-slate-950 dark:text-white tabular-nums tracking-tight">
                  35+
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">College Events Anchored</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs transition-colors text-left flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-display font-black text-slate-950 dark:text-white tabular-nums tracking-tight">
                  20+
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Events Coordinated</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs transition-colors text-left flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-display font-black text-slate-950 dark:text-white tabular-nums tracking-tight">
                  8.54+
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-tight mt-1">Consistent SGPA Average</div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Principles Grid */}
        <div className="pt-10 border-t border-slate-300 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
            <Compass className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Core Engineering Values & Anti-Slop Principles</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="p-5 rounded-2xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xs space-y-3 transition-colors"
              >
                <div className="font-mono text-xs font-black text-indigo-600 dark:text-indigo-400">
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
