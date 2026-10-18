import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Github, Linkedin, Twitter, Award, ShieldCheck } from 'lucide-react';

export const DeveloperLicenseBadge: React.FC = () => {
  const [stampVerified, setStampVerified] = useState(true);

  return (
    <div className="relative w-full max-w-xl mx-auto pt-7 sm:pt-8 my-1 sm:my-3 perspective-1000">
      {/* Metal Binder Clip at Top (Licencia Creativa Reference) - Sunset Copper Finish */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 pointer-events-none">
        {/* Metal Wire Loop */}
        <div className="w-8 h-8 rounded-t-full border-2 border-orange-400/90 dark:border-orange-500/80 bg-transparent -mb-2 shadow-xs" />
        {/* Sunset Copper Bulldog Clip Body */}
        <div className="w-14 h-5 rounded-xs bg-gradient-to-r from-amber-600 via-orange-300 to-amber-700 dark:from-orange-800 dark:via-orange-400 dark:to-orange-900 border border-orange-600/90 dark:border-orange-700 shadow-md flex items-center justify-center">
          <div className="w-10 h-1 bg-orange-950/40 dark:bg-black/50 rounded-full" />
        </div>
      </div>

      {/* Clear Acrylic / Transparent ID Badge Holder */}
      <div className="relative p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white/85 dark:bg-[#1A110D]/85 backdrop-blur-xl border-2 border-orange-100/90 dark:border-orange-900/50 shadow-2xl ambient-shadow transition-colors duration-300">
        {/* Paper License Card Inside */}
        <div className="relative rounded-xl sm:rounded-2xl bg-[#FFFDF9] dark:bg-[#190F0B] border border-orange-900/20 dark:border-orange-900/40 p-4 sm:p-6 md:p-7 shadow-xs overflow-hidden text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
          {/* Subtle Vintage Paper Texture */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Top Row of Stars (Reference) */}
          <div className="flex items-center justify-between border-b border-orange-900/15 dark:border-orange-900/40 pb-2.5 sm:pb-3 mb-3.5 sm:mb-4 text-orange-600 dark:text-orange-400 text-xs gap-2">
            <div className="flex items-center gap-1 sm:gap-1.5 text-xs">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="hidden sm:inline">★</span>
              <span className="hidden sm:inline">★</span>
              <span className="hidden sm:inline">★</span>
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-600 dark:text-slate-400 tracking-wider shrink-0">
              # OF LICENSE <span className="text-slate-950 dark:text-white ml-1 font-extrabold">0026</span>
            </div>
          </div>

          {/* Main License Title & Metadata Header */}
          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-4 items-start mb-4">
            {/* Left Title & Mission */}
            <div className="sm:col-span-7 space-y-1 w-full">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-black tracking-tight text-slate-950 dark:text-white uppercase leading-none">
                CREATIVE <br className="hidden sm:inline" />
                LICENSE
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 leading-snug pt-1 font-serif italic">
                "This engineering license empowers the developer to build without artificial limits, eliminating AI slop, and delivering zero-latency software."
              </p>
            </div>

            {/* Right: Official Signature & Nationality */}
            <div className="sm:col-span-5 w-full grid grid-cols-3 sm:flex sm:flex-col justify-between sm:justify-start gap-2 text-left sm:text-right font-mono text-[9px] sm:text-[10px] md:text-[11px] pt-2 sm:pt-0 border-t sm:border-t-0 border-orange-200/80 dark:border-orange-950/80">
              <div className="border-b-0 sm:border-b border-orange-200/80 dark:border-orange-950/80 pb-0 sm:pb-1 min-w-0">
                <span className="text-[8px] sm:text-[9px] text-slate-700 dark:text-slate-300 block uppercase font-bold">Signature:</span>
                <span className="font-serif italic font-bold text-slate-950 dark:text-white text-[11px] sm:text-xs md:text-sm truncate block">
                  Karan Verma
                </span>
              </div>
              <div className="min-w-0">
                <span className="text-[8px] sm:text-[9px] text-slate-700 dark:text-slate-300 block uppercase font-bold">First Name:</span>
                <span className="font-bold text-slate-950 dark:text-slate-100 font-sans text-[10px] sm:text-xs truncate block">KARAN VERMA</span>
              </div>
              <div className="min-w-0">
                <span className="text-[8px] sm:text-[9px] text-slate-700 dark:text-slate-300 block uppercase font-bold">Base:</span>
                <span className="font-bold text-slate-950 dark:text-slate-200 font-sans text-[10px] sm:text-xs truncate block">INDIA (MP / UJJAIN)</span>
              </div>
            </div>
          </div>

          {/* Middle Identity Section: Photo Box + Stamped Badge */}
          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-4 items-center py-3 border-y border-orange-900/15 dark:border-orange-900/40 relative">
            {/* Left: Photo Box with Paperclip (Reference) */}
            <div className="sm:col-span-4 w-full flex flex-row sm:flex-col items-center sm:items-start justify-center gap-3 sm:gap-0 relative">
              {/* Copper Paperclip Holding Photo */}
              <div className="absolute -top-3.5 left-2 sm:left-2 z-20 pointer-events-none hidden sm:block">
                <svg className="w-5 h-8 text-orange-400/90 dark:text-orange-500/80 drop-shadow-xs" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 16v20a8 8 0 0 0 16 0V12a6 6 0 0 0-12 0v24a4 4 0 0 0 8 0V16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Developer Portrait Avatar Frame */}
              <div className="relative w-20 sm:w-full max-w-[120px] aspect-square rounded-xl bg-slate-950 text-white flex flex-col items-center justify-center p-2 shadow-sm border border-orange-300/80 dark:border-orange-900/60 overflow-hidden shrink-0">
                {/* Vector Graphic Portrait */}
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 flex items-center justify-center text-white font-display font-extrabold text-base sm:text-lg shadow-inner">
                  KV
                </div>
                <div className="text-[8px] sm:text-[9px] font-mono text-slate-300 mt-1 font-semibold">
                  DEVELOPER
                </div>
                <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-emerald-400 border border-slate-900" />
              </div>

              {/* Sticker / Stamp Under Photo (Reference) */}
              <div className="mt-0 sm:mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-blue-600 text-white shadow-2xs hover:bg-blue-700 transition cursor-pointer"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3 h-3" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-slate-900 dark:bg-slate-800 text-white shadow-2xs hover:bg-slate-700 transition cursor-pointer"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3 h-3" />
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-slate-950 dark:bg-slate-800 text-white shadow-2xs hover:bg-slate-800 dark:hover:bg-slate-700 transition cursor-pointer"
                  title="Twitter / X (@krunverma)"
                  aria-label="Twitter / X Profile"
                >
                  <Twitter className="w-3 h-3" />
                </a>
                <span className="text-[9px] font-mono font-bold text-slate-600 dark:text-slate-400">
                  MIT '26
                </span>
              </div>
            </div>

            {/* Right: Large Role Title & Rubber Seal */}
            <div className="sm:col-span-8 w-full space-y-2 relative sm:pl-2 text-center sm:text-left flex flex-col items-center sm:items-start">
              <div className="space-y-1 w-full">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 font-bold">
                  OFFICIAL CAPACITY & AUTHORIZED ROLES
                </div>
                <h4 className="text-base sm:text-xl md:text-2xl font-display font-black tracking-tight text-slate-950 dark:text-white uppercase leading-tight">
                  CS ENGINEER & <br className="hidden sm:inline" />
                  SOFTWARE DEVELOPER
                </h4>
                <div className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-800 dark:text-slate-200 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 justify-center sm:justify-start pt-0.5">
                  <span className="text-orange-700 dark:text-orange-400">STUDENT COUNCIL VP</span>
                  <span className="text-orange-400/80 dark:text-orange-600/80">·</span>
                  <span className="text-amber-700 dark:text-amber-400">IIC STUDENT COORDINATOR</span>
                  <span className="text-orange-400/80 dark:text-orange-600/80">·</span>
                  <span className="text-orange-800 dark:text-orange-300">CO-FOUNDER · PRO LEARN COACHING</span>
                </div>
              </div>

              {/* Rubber Stamp (Licencia Reference) */}
              <div
                onClick={() => setStampVerified(!stampVerified)}
                className={`cursor-pointer inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border-2 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider transform -rotate-1 sm:-rotate-2 transition-transform hover:scale-105 max-w-full my-1 ${
                  stampVerified
                    ? 'border-emerald-600 text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 font-extrabold'
                    : 'border-orange-600 text-orange-800 dark:text-orange-300 bg-orange-50 dark:bg-orange-950/60 font-extrabold'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">MSME 5.0 RECOGNIZED · COLLEGE TOPPER</span>
                <span className="sm:hidden">MSME 5.0 · COLLEGE TOPPER</span>
              </div>
            </div>
          </div>

          {/* Stat Counters / Credentials Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 py-2 my-1 border-b border-orange-900/15 dark:border-orange-900/40 text-center font-mono text-[9px]">
            <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/25">
              <div className="font-extrabold text-orange-700 dark:text-orange-300 text-[11px] sm:text-xs">50+ GUIDED</div>
              <div className="text-[8px] text-slate-600 dark:text-slate-400 font-semibold uppercase">Students Mentored</div>
            </div>
            <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25">
              <div className="font-extrabold text-amber-800 dark:text-amber-300 text-[11px] sm:text-xs">3+ YRS</div>
              <div className="text-[8px] text-slate-600 dark:text-slate-400 font-semibold uppercase">Teaching Experience</div>
            </div>
            <div className="p-1.5 rounded-lg bg-orange-600/10 border border-orange-600/25">
              <div className="font-extrabold text-orange-700 dark:text-orange-300 text-[11px] sm:text-xs">₹30 LAKH</div>
              <div className="text-[8px] text-slate-600 dark:text-slate-400 font-semibold uppercase">MSME 5.0 Grant</div>
            </div>
            <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/25">
              <div className="font-extrabold text-orange-800 dark:text-orange-300 text-[11px] sm:text-xs">35+ EVENTS</div>
              <div className="text-[8px] text-slate-600 dark:text-slate-400 font-semibold uppercase">Anchored & Led</div>
            </div>
          </div>

          {/* Bottom Barcode & Small-Print Expertise (Reference) */}
          <div className="pt-3 space-y-2.5">
            <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 items-center">
              {/* Barcode SVG */}
              <div className="sm:col-span-4 w-full flex flex-col items-center sm:items-start">
                <div className="h-6 sm:h-7 w-full max-w-[200px] flex items-center justify-center sm:justify-start gap-[1.5px] sm:gap-[2px]">
                  {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3].map((w, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950 dark:bg-slate-200 h-full shrink-0"
                      style={{ width: `${w}px` }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[8px] text-slate-500 dark:text-slate-400 tracking-widest pt-0.5 font-bold">
                  2026-KV-MIT-SYSTEMS
                </span>
              </div>

              {/* Expertise Text Rows */}
              <div className="sm:col-span-8 font-mono text-[9px] text-slate-800 dark:text-slate-200 leading-tight space-y-1 text-center sm:text-left">
                <div>
                  <strong className="text-slate-950 dark:text-white">Expertise:</strong> Python (IndusAI) · C / C++ · SQL · React 19 · Prompt Eng · GitHub
                </div>
                <div>
                  <strong className="text-slate-950 dark:text-white">Credentials:</strong> Student Council VP (2026–27) · IIC Student Coordinator · Co-Founder @ Pro Learn Coaching
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wide">
                  50+ STUDENTS GUIDED · 3+ YRS TEACHING · 35+ EVENTS ANCHORED
                </div>
              </div>
            </div>

            {/* MSME Idea Hackathon 5.0 Official Team Credential Note */}
            <div className="pt-2.5 border-t border-dashed border-orange-900/20 dark:border-orange-900/40">
              <div className="flex items-start gap-1.5 text-left font-mono">
                <Award className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5 min-w-0">
                  <div className="text-[9px] uppercase tracking-wider font-extrabold text-slate-900 dark:text-slate-100 flex flex-wrap items-center gap-1">
                    <span>MSME Idea Hackathon 5.0 Team</span>
                    <span className="text-[8px] font-normal text-slate-500 dark:text-slate-400">
                      (MIT Group of Institutes Ujjain Official Announcement):
                    </span>
                  </div>
                  <div className="font-sans font-semibold text-slate-900 dark:text-slate-200 text-[10px] break-words">
                    Sourav Chaudhary · Sneha Patidar · Sneha Sharma · Karan Verma
                  </div>
                  <div className="text-[8.5px] text-orange-800 dark:text-orange-300 font-medium break-words">
                    Selected for ₹30 Lakh Combined Grant-in-Aid Consideration across 2 Innovations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
