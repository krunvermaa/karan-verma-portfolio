import React from 'react';
import { Project } from '@/types';

interface ProjectMockupProps {
  project: Project;
  interactive?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project }) => {
  const { mockupType } = project;

  // 1. Smart AI Agri Market Access Platform (MSME Idea Hackathon 5.0)
  if (mockupType === 'agri-market') {
    return (
      <div className="w-full h-full min-h-[260px] bg-slate-50 dark:bg-slate-900/95 rounded-xl p-4 flex flex-col justify-between border border-slate-300 dark:border-slate-800 text-xs font-mono select-none overflow-hidden relative transition-colors">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-950 dark:text-white font-sans text-xs">AgriMarket AI · Mandi Terminal</span>
          </div>
          <span className="text-[11px] text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2 py-0.5 rounded font-bold border border-emerald-300 dark:border-emerald-800">
            MSME 5.0 · ₹15L Selected
          </span>
        </div>

        {/* Middle telemetry & crop matching */}
        <div className="grid grid-cols-12 gap-3 my-3 relative z-10 font-sans">
          {/* Real-time Mandi Rates */}
          <div className="col-span-7 bg-white dark:bg-[#161B28] p-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-900 dark:text-slate-100">Live Mandi Price Stream</span>
              <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">Ujjain / Dewas</span>
            </div>

            {/* Price trend graph */}
            <div className="py-1.5">
              <div className="flex items-center justify-between text-[10px] text-slate-600 dark:text-slate-400 font-mono mb-1">
                <span>Soyabean (Yellow)</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">₹4,860/qtl (+4.2%)</span>
              </div>
              <svg className="w-full h-8 stroke-emerald-600 dark:stroke-emerald-400 fill-none" viewBox="0 0 200 30">
                <path
                  d="M0,24 Q 40,26 80,18 T 140,10 T 200,6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono font-medium">
              <span>Wheat: ₹2,450/qtl</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Direct Buyer Linked</span>
            </div>
          </div>

          {/* AI Crop Match Card */}
          <div className="col-span-5 bg-white dark:bg-[#161B28] p-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs flex flex-col justify-between">
            <span className="text-[11px] font-bold text-slate-900 dark:text-slate-100">Farmer Lot Match</span>
            <div className="space-y-1 my-1">
              <div className="flex items-center justify-between text-[10px] p-1 rounded bg-emerald-50 dark:bg-emerald-950/70 text-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800">
                <span className="font-bold">Lot #402 (50 Qtl)</span>
                <span className="font-mono font-bold">Matched</span>
              </div>
              <div className="flex items-center justify-between text-[10px] p-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700">
                <span className="font-medium">Direct Buyer</span>
                <span className="font-mono text-emerald-600 font-bold">0% Comm.</span>
              </div>
            </div>
            <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono flex items-center gap-1 font-bold">
              <span>✓ Fair Price Certified</span>
            </div>
          </div>
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 relative z-10">
          <span>AI Demand Forecaster</span>
          <span className="font-mono text-slate-800 dark:text-slate-200 font-semibold">Sub-200ms Mandi Query</span>
        </div>
      </div>
    );
  }

  // 2. AI Real-Time Railway Station Navigation Platform (MSME Idea Hackathon 5.0)
  if (mockupType === 'railway-nav') {
    return (
      <div className="w-full h-full min-h-[260px] bg-slate-50 dark:bg-slate-900/95 rounded-xl p-4 flex flex-col justify-between border border-slate-300 dark:border-slate-800 text-xs font-mono select-none overflow-hidden relative transition-colors">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="font-bold text-slate-950 dark:text-white font-sans text-xs">TransitWay AI · Railway Indoor Nav</span>
          </div>
          <span className="text-[11px] font-mono text-indigo-800 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 px-2 py-0.5 rounded font-bold border border-indigo-300 dark:border-indigo-800">
            MSME 5.0 · ₹15L Selected
          </span>
        </div>

        {/* Middle Navigation & Platform Layout */}
        <div className="grid grid-cols-12 gap-3 my-3 relative z-10 font-sans">
          {/* Spatial Station Map */}
          <div className="col-span-7 bg-white dark:bg-[#161B28] p-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-900 dark:text-slate-100">Live Station Route</span>
              <span className="font-mono text-indigo-700 dark:text-indigo-400 font-bold">Gate 1 &rarr; Platform 3</span>
            </div>

            {/* Platform graph visualization */}
            <div className="py-2 flex items-center justify-between gap-1 text-[10px] font-mono">
              <div className="p-1.5 rounded bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-300 dark:border-indigo-800 text-center flex-1">
                <span className="block font-bold text-indigo-700 dark:text-indigo-300">Concourse</span>
                <span className="text-[8px] text-slate-500">Entry A</span>
              </div>
              <span className="text-indigo-500 font-bold">&rarr;</span>
              <div className="p-1.5 rounded bg-indigo-100 dark:bg-indigo-900/60 border border-indigo-400 dark:border-indigo-700 text-center flex-1">
                <span className="block font-bold text-indigo-800 dark:text-indigo-200">Overbridge</span>
                <span className="text-[8px] text-emerald-600 font-bold">Ramp Active</span>
              </div>
              <span className="text-indigo-500 font-bold">&rarr;</span>
              <div className="p-1.5 rounded bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-center flex-1">
                <span className="block font-bold text-emerald-700 dark:text-emerald-300">Platform 3</span>
                <span className="text-[8px] text-emerald-600 font-bold">Coach B4</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono">
              <span>Walking Time: 2 min 40s</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">Accessibility-First</span>
            </div>
          </div>

          {/* Train Status Feed */}
          <div className="col-span-5 bg-white dark:bg-[#161B28] p-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs flex flex-col justify-between">
            <span className="text-[11px] font-bold text-slate-900 dark:text-slate-100">Live Train Telemetry</span>
            <div className="space-y-1.5 my-1">
              <div className="p-1.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <div className="text-[10px] font-bold text-slate-950 dark:text-white">Malwa Express</div>
                <div className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">PF 3 · Expected 14:22</div>
              </div>
            </div>
            <div className="text-[10px] text-indigo-700 dark:text-indigo-400 font-mono font-bold flex items-center gap-1">
              <span>✓ Reroute Sync: &lt; 150ms</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 relative z-10 font-medium">
          <span>Graph-based Dijkstra Engine</span>
          <span className="font-mono text-indigo-700 dark:text-indigo-400 font-bold">Turn-by-Turn Wayfinding</span>
        </div>
      </div>
    );
  }

  // 3. IndusAI Automation & Python Pipeline
  if (mockupType === 'python-pipeline') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#1E293B] dark:bg-[#0F172A] text-slate-200 rounded-xl p-4 flex flex-col justify-between border border-slate-700 dark:border-slate-800 text-xs font-mono select-none overflow-hidden relative transition-colors">
        {/* Terminal top bar */}
        <div className="flex items-center justify-between border-b border-slate-700 dark:border-slate-800 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="ml-2 text-slate-400 text-[11px]">karan@indusai-workstation: ~/pipeline</span>
          </div>
          <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/80">
            IndusAI Solutions · Python 3.12
          </span>
        </div>

        {/* Python pipeline execution output */}
        <div className="my-2 space-y-1 text-[11px]">
          <div className="text-slate-400">$ python -m indusai.etl --batch=2025_08 --validate</div>
          <div className="text-emerald-400">[INFO] Ingesting client records: 14,820 rows</div>
          <div className="text-emerald-400">[SUCCESS] Schema validation passed (0 corrupt records)</div>
          
          {/* Script Execution Metrics */}
          <div className="p-2 bg-slate-900/80 rounded border border-slate-700/80 mt-2 font-mono">
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
              <span>Pipeline Execution Telemetry</span>
              <span className="text-amber-400 font-bold">Status: Completed</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
              <div className="bg-slate-800/80 p-1 rounded">
                <span className="text-slate-400 block text-[8px]">ROWS</span>
                <span className="text-white font-bold">14.8k</span>
              </div>
              <div className="bg-slate-800/80 p-1 rounded">
                <span className="text-slate-400 block text-[8px]">ERRORS</span>
                <span className="text-emerald-400 font-bold">0</span>
              </div>
              <div className="bg-slate-800/80 p-1 rounded">
                <span className="text-slate-400 block text-[8px]">RUNTIME</span>
                <span className="text-amber-400 font-bold">1.24s</span>
              </div>
              <div className="bg-slate-800/80 p-1 rounded">
                <span className="text-slate-400 block text-[8px]">UPTIME</span>
                <span className="text-emerald-400 font-bold">99.9%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-700 dark:border-slate-800 text-[10px] text-slate-400">
          <span>MSME Internship · Certificate Aug 2025</span>
          <span className="text-emerald-400 font-mono">Automated ETL Verified</span>
        </div>
      </div>
    );
  }

  // 4. HACKTOUR IND Web3 Growth Platform
  if (mockupType === 'web3-growth') {
    return (
      <div className="w-full h-full min-h-[260px] bg-slate-900 dark:bg-[#0B0F19] text-slate-100 rounded-xl p-4 flex flex-col justify-between border border-slate-800 text-xs font-mono select-none overflow-hidden relative transition-colors">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
            <span className="font-bold text-white font-sans text-xs">HACKTOUR IND · Web3 Campaign Hub</span>
          </div>
          <span className="text-[10px] text-pink-300 bg-pink-950/80 px-2 py-0.5 rounded font-bold border border-pink-800">
            Jul–Nov 2025 · 5-Mo Term
          </span>
        </div>

        {/* Ecosystem Activations & Badges */}
        <div className="my-2 space-y-2 relative z-10">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-sans">
            <span className="font-semibold text-slate-200">Ecosystem Activations & Developer Circles</span>
            <span className="text-pink-400 font-mono text-[10px] font-bold">Contributor @HackTourIND</span>
          </div>

          {/* 3 Prominent Web3 Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {/* Arweave / Permaweb Buildstation */}
            <div className="p-2 sm:p-2.5 rounded-lg bg-slate-800/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between shadow-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-cyan-300 font-sans truncate">Arweave / Permaweb</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              </div>
              <div className="text-[9px] text-slate-200 font-sans font-medium leading-tight">
                Buildstation (Agents of the Permaweb Hackathon)
              </div>
              <div className="text-[8px] font-mono text-cyan-400 font-semibold mt-1">
                Permaweb Builder
              </div>
            </div>

            {/* Zcash India Meetups */}
            <div className="p-2 sm:p-2.5 rounded-lg bg-slate-800/90 border border-amber-500/30 hover:border-amber-400/60 transition-all flex flex-col justify-between shadow-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-amber-300 font-sans truncate">Zcash India</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              </div>
              <div className="text-[9px] text-slate-200 font-sans font-medium leading-tight">
                Zcash India Meetups & Community
              </div>
              <div className="text-[8px] font-mono text-amber-400 font-semibold mt-1">
                Privacy & Protocol Meetups
              </div>
            </div>

            {/* Avalanche City Connect Jaipur */}
            <div className="p-2 sm:p-2.5 rounded-lg bg-slate-800/90 border border-rose-500/30 hover:border-rose-400/60 transition-all flex flex-col justify-between shadow-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-rose-300 font-sans truncate">Avalanche Network</span>
                <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
              </div>
              <div className="text-[9px] text-slate-200 font-sans font-medium leading-tight">
                Avalanche City Connect Jaipur
              </div>
              <div className="text-[8px] font-mono text-rose-400 font-semibold mt-1">
                Developer Summit
              </div>
            </div>
          </div>

          {/* Growth visualizer mini stream */}
          <div className="p-2 bg-slate-950/60 rounded-lg border border-slate-800/80">
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
              <span>Developer Outreach & Ecosystem Retention</span>
              <span className="text-pink-400 font-mono font-bold">+140% Velocity</span>
            </div>
            <div className="h-7 w-full flex items-end gap-1">
              {[25, 32, 40, 48, 55, 62, 70, 75, 82, 88, 92, 95, 98, 100].map((val, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-pink-600 via-rose-500 to-amber-400 rounded-t-xs transition-all duration-300"
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 relative z-10">
          <span>Decentralized Brand Strategy</span>
          <span className="text-pink-400 font-mono font-semibold">Multi-Channel Campaigns</span>
        </div>
      </div>
    );
  }

  // 5. MGI Campus Coordination & Event Portal (Student Council & Prompt Lead)
  return (
    <div className="w-full h-full min-h-[260px] bg-slate-50 dark:bg-slate-900/95 rounded-xl p-4 flex flex-col justify-between border border-slate-300 dark:border-slate-800 text-xs font-mono select-none overflow-hidden relative transition-colors">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
          <span className="font-bold text-slate-950 dark:text-white font-sans text-xs">MGI Event & Council Operations</span>
        </div>
        <span className="text-[11px] font-mono text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/70 px-2 py-0.5 rounded font-bold border border-sky-300 dark:border-sky-800">
          VP Council · Prompt Lead
        </span>
      </div>

      {/* Middle Operations Matrix */}
      <div className="grid grid-cols-12 gap-3 my-3 relative z-10 font-sans">
        {/* Event Matrix */}
        <div className="col-span-7 bg-white dark:bg-[#161B28] p-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-slate-900 dark:text-slate-100">Live Stage & Anchoring Queue</span>
            <span className="font-mono text-sky-700 dark:text-sky-400 font-bold">35+ Anchored</span>
          </div>

          <div className="space-y-1.5 my-1.5 text-[10px]">
            <div className="flex items-center justify-between p-1 rounded bg-sky-50 dark:bg-sky-950/70 text-sky-950 dark:text-sky-200 border border-sky-200 dark:border-sky-800">
              <span className="font-bold">Prompt Engineering Workshop</span>
              <span className="font-mono font-bold text-emerald-600">Active</span>
            </div>
            <div className="flex items-center justify-between p-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700">
              <span className="font-medium">National Hackathon Contingent</span>
              <span className="font-mono text-slate-500">Coordinated</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono">
            <span>20+ Events Organized</span>
            <span className="text-sky-600 dark:text-sky-400 font-bold">Multi-Club Governance</span>
          </div>
        </div>

        {/* Prompt Studio Lead Card */}
        <div className="col-span-5 bg-white dark:bg-[#161B28] p-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs flex flex-col justify-between">
          <span className="text-[11px] font-bold text-slate-900 dark:text-slate-100">Prompt Studio</span>
          <div className="p-1.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[10px] font-mono">
            <div className="text-slate-600 dark:text-slate-400">Context Strategy:</div>
            <div className="text-sky-600 dark:text-sky-400 font-bold mt-0.5">Structured Few-Shot</div>
          </div>
          <div className="text-[10px] text-sky-700 dark:text-sky-400 font-mono font-bold flex items-center gap-1">
            <span>✓ Public Speaking & Anchoring</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 relative z-10 font-medium">
        <span>Mahakal Institute of Technology, Ujjain</span>
        <span className="font-mono text-sky-700 dark:text-sky-400 font-bold">Student Council 2026–27</span>
      </div>
    </div>
  );
};
