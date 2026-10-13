import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Award, CheckCircle2, ShieldCheck, Terminal, Sparkles, ExternalLink } from 'lucide-react';

export const DeveloperLicenseBadge: React.FC = () => {
  const [stampVerified, setStampVerified] = useState(true);

  return (
    <div className="relative w-full max-w-xl mx-auto my-6 select-none perspective-1000">
      {/* Metal Binder Clip at Top (Licencia Creativa Reference) */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 pointer-events-none">
        {/* Metal Wire Loop */}
        <div className="w-8 h-8 rounded-t-full border-2 border-slate-400 dark:border-slate-500 bg-transparent -mb-2 shadow-xs" />
        {/* Silver Bulldog Clip Body */}
        <div className="w-14 h-5 rounded-xs bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 border border-slate-500 shadow-md flex items-center justify-center">
          <div className="w-10 h-1 bg-slate-600/40 dark:bg-slate-800/40 rounded-full" />
        </div>
      </div>

      {/* Clear Acrylic / Transparent ID Badge Holder */}
      <div className="relative p-2.5 sm:p-3 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-2 border-white dark:border-slate-700 shadow-2xl ambient-shadow transition-colors duration-300">
        {/* Paper License Card Inside */}
        <div className="relative rounded-2xl bg-[#FFFDF9] dark:bg-[#121622] border border-amber-900/15 dark:border-slate-800 p-5 sm:p-7 shadow-xs overflow-hidden text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
          {/* Subtle Vintage Paper Texture */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Top Row of Stars (Reference) */}
          <div className="flex items-center justify-between border-b border-amber-900/15 dark:border-slate-800 pb-3 mb-4 text-rose-700 dark:text-rose-400 text-xs">
            <div className="flex items-center gap-1.5 text-xs">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className="font-mono text-[11px] font-bold text-slate-600 dark:text-slate-400 tracking-wider">
              # OF LICENSE <span className="text-slate-950 dark:text-white ml-1 font-extrabold">0026</span>
            </div>
          </div>

          {/* Main License Title & Metadata Header */}
          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-4 items-start mb-4">
            {/* Left Title & Mission */}
            <div className="sm:col-span-7 space-y-1 w-full">
              <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-slate-950 dark:text-white uppercase leading-none">
                CREATIVE <br />
                LICENSE
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 leading-snug pt-1 font-serif italic">
                "This engineering license empowers the developer to build without artificial limits, eliminating AI slop, and delivering zero-latency software."
              </p>
            </div>

            {/* Right: Official Signature & Nationality */}
            <div className="sm:col-span-5 w-full flex flex-row sm:flex-col justify-between sm:justify-start gap-2 text-left sm:text-right font-mono text-[10px] sm:text-[11px] pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-800">
              <div className="border-b-0 sm:border-b border-slate-300 dark:border-slate-800 pb-0 sm:pb-1">
                <span className="text-[9px] text-slate-700 dark:text-slate-300 block uppercase font-bold">Signature:</span>
                <span className="font-serif italic font-bold text-slate-950 dark:text-white text-xs sm:text-sm">
                  Karan Verma
                </span>
              </div>
              <div>
                <span className="text-[9px] text-slate-700 dark:text-slate-300 block uppercase font-bold">First Name:</span>
                <span className="font-bold text-slate-950 dark:text-slate-100 font-sans text-xs">KARAN VERMA</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-700 dark:text-slate-300 block uppercase font-bold">Base:</span>
                <span className="font-bold text-slate-950 dark:text-slate-200 font-sans text-xs">INDIA (DELHI)</span>
              </div>
            </div>
          </div>

          {/* Middle Identity Section: Photo Box + Stamped Badge */}
          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-4 items-center py-3 border-y border-amber-900/15 dark:border-slate-800 relative">
            {/* Left: Photo Box with Paperclip (Reference) */}
            <div className="sm:col-span-4 w-full flex sm:flex-col items-center sm:items-start justify-center gap-3 sm:gap-0 relative">
              {/* Silver Paperclip Holding Photo */}
              <div className="absolute -top-3.5 left-2 sm:left-2 z-20 pointer-events-none hidden sm:block">
                <svg className="w-5 h-8 text-slate-500 dark:text-slate-400 drop-shadow-xs" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 16v20a8 8 0 0 0 16 0V12a6 6 0 0 0-12 0v24a4 4 0 0 0 8 0V16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Developer Portrait Avatar Frame */}
              <div className="relative w-20 sm:w-full aspect-square rounded-xl bg-slate-950 text-white flex flex-col items-center justify-center p-2 shadow-sm border border-slate-300 dark:border-slate-700 overflow-hidden shrink-0">
                {/* Vector Graphic Portrait */}
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-500 flex items-center justify-center text-white font-display font-extrabold text-base sm:text-lg shadow-inner">
                  KV
                </div>
                <div className="text-[8px] sm:text-[9px] font-mono text-slate-300 mt-1 font-semibold">
                  DEVELOPER
                </div>
                <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-emerald-400 border border-slate-900" />
              </div>

              {/* Sticker / Stamp Under Photo (Reference) */}
              <div className="mt-0 sm:mt-2 flex items-center gap-1.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-blue-600 text-white shadow-2xs hover:bg-blue-700 transition cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3 h-3" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-slate-900 dark:bg-slate-800 text-white shadow-2xs hover:bg-slate-700 transition cursor-pointer"
                  title="GitHub"
                >
                  <Github className="w-3 h-3" />
                </a>
                <span className="text-[9px] font-mono font-bold text-slate-600 dark:text-slate-400">
                  NIT '26
                </span>
              </div>
            </div>

            {/* Right: Large Role Title & Rubber Seal */}
            <div className="sm:col-span-8 w-full space-y-2 relative sm:pl-2 text-center sm:text-left">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 font-bold">
                  OFFICIAL CAPACITY
                </div>
                <h4 className="text-lg sm:text-2xl font-display font-black tracking-tight text-slate-950 dark:text-white uppercase leading-tight">
                  FULL-STACK ENGINEER <br className="hidden sm:inline" />
                  & PRODUCT DESIGNER
                </h4>
              </div>

              {/* Rubber Stamp (Licencia Reference) */}
              <div
                onClick={() => setStampVerified(!stampVerified)}
                className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 text-[10px] font-mono font-bold uppercase tracking-wider transform -rotate-1 sm:-rotate-2 transition-transform hover:scale-105 max-w-full truncate ${
                  stampVerified
                    ? 'border-emerald-600 text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 font-extrabold'
                    : 'border-rose-600 text-rose-800 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 font-extrabold'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">AUTHORIZED FOR PRODUCTION · ZERO-SLOP</span>
                <span className="sm:hidden">AUTHORIZED · ZERO-SLOP</span>
              </div>
            </div>
          </div>

          {/* Bottom Barcode & Small-Print Expertise (Reference) */}
          <div className="pt-3 space-y-2">
            <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 items-center">
              {/* Barcode SVG */}
              <div className="sm:col-span-4 w-full flex flex-col items-center sm:items-start">
                <div className="h-6 sm:h-7 w-full max-w-[200px] flex items-center justify-center sm:justify-start gap-[2px]">
                  {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3].map((w, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950 dark:bg-slate-200 h-full"
                      style={{ width: `${w}px` }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[8px] text-slate-500 dark:text-slate-400 tracking-widest pt-0.5 font-bold">
                  2026-KV-NIT-SYSTEMS
                </span>
              </div>

              {/* Expertise Text Rows */}
              <div className="sm:col-span-8 font-mono text-[9px] text-slate-800 dark:text-slate-200 leading-tight space-y-0.5 text-center sm:text-left">
                <div>
                  <strong className="text-slate-950 dark:text-white">Expertise:</strong> TypeScript · React 19 · Go · Rust/Wasm · WebSockets · CRDT
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  Distributed Systems · WCAG AAA · Zero-Runtime Tokens · Sub-100ms
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
