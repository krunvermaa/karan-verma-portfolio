import React from 'react';
import { Project } from '../data/portfolioData';

interface ProjectMockupProps {
  project: Project;
  interactive?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project }) => {
  const { mockupType, accentColor } = project;

  if (mockupType === 'telemedicine') {
    return (
      <div className="w-full h-full min-h-[260px] bg-slate-50 dark:bg-slate-900/95 rounded-xl p-4 flex flex-col justify-between border border-slate-300 dark:border-slate-800 text-xs font-mono select-none overflow-hidden relative transition-colors">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-950 dark:text-white font-sans text-xs">Saksham Triage Engine v2.4</span>
          </div>
          <span className="text-[11px] text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2 py-0.5 rounded font-bold border border-emerald-300 dark:border-emerald-800">
            Offline Cache: 4,820 Synced
          </span>
        </div>

        {/* Middle telemetry & patient cards */}
        <div className="grid grid-cols-12 gap-3 my-3 relative z-10 font-sans">
          {/* Vitals wave */}
          <div className="col-span-7 bg-white dark:bg-[#161B28] p-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-900 dark:text-slate-100">Patient Vitals Telemetry</span>
              <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">98.4°F · 72 BPM</span>
            </div>
            
            {/* SVG Wave */}
            <div className="py-2">
              <svg className="w-full h-12 stroke-emerald-600 dark:stroke-emerald-400 fill-none" viewBox="0 0 240 40">
                <path
                  d="M0,20 L40,20 L50,8 L60,34 L70,16 L80,20 L130,20 L140,4 L150,38 L160,18 L170,20 L240,20"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono font-medium">
              <span>WebRTC Mesh: 32kbps</span>
              <span>Audio: Lossless OPUS</span>
            </div>
          </div>

          {/* Triage Queue */}
          <div className="col-span-5 bg-white dark:bg-[#161B28] p-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs flex flex-col justify-between">
            <span className="text-[11px] font-bold text-slate-900 dark:text-slate-100">Triage Priority</span>
            <div className="space-y-1.5 my-1">
              <div className="flex items-center justify-between text-[11px] p-1 rounded bg-amber-50 dark:bg-amber-950/70 text-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-800">
                <span className="font-bold">#104 Ward A</span>
                <span className="text-[10px] font-mono font-bold">Priority 1</span>
              </div>
              <div className="flex items-center justify-between text-[11px] p-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700">
                <span className="font-medium">#105 Clinic B</span>
                <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold">Priority 3</span>
              </div>
            </div>
            <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono flex items-center gap-1 font-bold">
              <span>✓ Auto-diagnostics verified</span>
            </div>
          </div>
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 relative z-10">
          <span>Client: PWA (IndexedDB v3)</span>
          <span className="font-mono text-slate-800 dark:text-slate-200 font-semibold">Local-First Architecture</span>
        </div>
      </div>
    );
  }

  if (mockupType === 'design-system') {
    return (
      <div className="w-full h-full min-h-[260px] bg-slate-50 dark:bg-slate-900/95 rounded-xl p-4 flex flex-col justify-between border border-slate-300 dark:border-slate-800 text-xs select-none overflow-hidden relative transition-colors">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-indigo-600 text-white text-[9px] font-bold flex items-center justify-center font-mono">
              A
            </div>
            <span className="font-bold text-slate-950 dark:text-white font-sans">Aura Design Tokens · Specimen</span>
          </div>
          <span className="text-[11px] font-mono text-indigo-800 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 px-2 py-0.5 rounded font-bold border border-indigo-300 dark:border-indigo-800">
            0.0 KB CSS Runtime
          </span>
        </div>

        {/* Middle Tokens & Components */}
        <div className="grid grid-cols-2 gap-3 my-3 relative z-10 font-sans">
          {/* Component States */}
          <div className="bg-white dark:bg-[#161B28] p-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs space-y-2">
            <span className="text-[11px] text-slate-600 dark:text-slate-400 font-bold">Headless Primitives</span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button type="button" className="px-3 py-1 bg-indigo-600 text-white rounded-md text-[11px] font-bold shadow-xs hover:bg-indigo-700 transition">
                Primary Button
              </button>
              <button type="button" className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-md text-[11px] font-bold transition">
                Secondary
              </button>
            </div>
            <div className="p-2 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[10px] font-mono text-slate-800 dark:text-slate-200 font-semibold">
              <code>&lt;Dialog.Root focusTrap=true&gt;</code>
            </div>
          </div>

          {/* Design Token Mapping */}
          <div className="bg-white dark:bg-[#161B28] p-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs font-mono text-[10px] space-y-1">
            <span className="text-[11px] font-sans font-bold text-slate-600 dark:text-slate-400 block mb-1">Token Compilation</span>
            <div className="text-indigo-700 dark:text-indigo-400 font-bold">--color-brand: #6366f1;</div>
            <div className="text-slate-700 dark:text-slate-300">--radius-card: 16px;</div>
            <div className="text-slate-700 dark:text-slate-300">--font-sans: 'Plus Jakarta';</div>
            <div className="text-emerald-700 dark:text-emerald-400 font-bold">--elevation-soft: 0 4px 20px;</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 relative z-10 font-medium">
          <span>Radix UI + Style Dictionary</span>
          <span className="font-mono text-indigo-700 dark:text-indigo-400 font-bold">100% WCAG AAA</span>
        </div>
      </div>
    );
  }

  if (mockupType === 'os-simulator') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#1E293B] dark:bg-[#0F172A] text-slate-200 rounded-xl p-4 flex flex-col justify-between border border-slate-700 dark:border-slate-800 text-xs font-mono select-none overflow-hidden relative transition-colors">
        {/* Terminal top bar */}
        <div className="flex items-center justify-between border-b border-slate-700 dark:border-slate-800 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="ml-2 text-slate-400 text-[11px]">karan@kernelfs-wasm: ~/vfs</span>
          </div>
          <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/80">
            Rust Core · Wasm 84KB
          </span>
        </div>

        {/* Middle interactive simulation preview */}
        <div className="my-2 space-y-1.5 text-[11px]">
          <div className="text-slate-400">$ ls -la /sys/kernel/sched</div>
          <div className="text-emerald-400">drwxr-xr-x 4 root root 4096 round_robin</div>
          <div className="text-emerald-400">-rw-r--r-- 1 root root  512 time_slice_ms</div>
          
          {/* Visual memory block */}
          <div className="p-2 bg-slate-900/80 rounded border border-slate-700/80 mt-2">
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
              <span>Virtual Page Table (4KB Pages)</span>
              <span className="text-amber-400">Allocated: 64%</span>
            </div>
            <div className="grid grid-cols-8 gap-1">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className={`h-3 rounded-xs ${
                    i % 3 === 0
                      ? 'bg-amber-500'
                      : i % 2 === 0
                      ? 'bg-emerald-500'
                      : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-700 dark:border-slate-800 text-[10px] text-slate-400">
          <span>VT100 Terminal Emulation</span>
          <span className="text-emerald-400 font-mono">60 FPS Canvas</span>
        </div>
      </div>
    );
  }

  if (mockupType === 'spatial-canvas') {
    return (
      <div className="w-full h-full min-h-[260px] bg-white dark:bg-slate-900/90 rounded-xl p-4 flex flex-col justify-between border border-slate-200 dark:border-slate-800 text-xs select-none overflow-hidden relative transition-colors">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800 dark:text-slate-200 font-sans">Chrono Spatial Canvas</span>
            <span className="text-[10px] font-mono text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded border border-pink-200 dark:border-pink-800">
              Yjs CRDT Active
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">4 Peers Live</span>
          </div>
        </div>

        {/* Middle Canvas Node Objects */}
        <div className="relative h-28 my-2 z-10">
          {/* Card 1 */}
          <div className="absolute left-2 top-2 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 p-2.5 rounded-lg shadow-xs w-36 transform -rotate-2">
            <div className="text-[10px] font-semibold text-amber-900 dark:text-amber-200 font-sans">Architecture Node</div>
            <div className="text-[9px] text-amber-700 dark:text-amber-400 mt-0.5">CRDT Sync State #814</div>
          </div>

          {/* Connector SVG Curve */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-pink-400 fill-none" strokeDasharray="3 3">
            <path d="M 140 30 Q 180 30, 200 65" strokeWidth="2" />
          </svg>

          {/* Card 2 */}
          <div className="absolute right-4 bottom-1 bg-pink-50 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 p-2.5 rounded-lg shadow-xs w-36 transform rotate-1">
            <div className="text-[10px] font-semibold text-pink-900 dark:text-pink-200 font-sans">Vector Layer</div>
            <div className="text-[9px] text-pink-700 dark:text-pink-400 mt-0.5">Sub-pixel stroke path</div>
          </div>

          {/* Floating Cursor */}
          <div className="absolute left-40 top-12 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-indigo-600 fill-current" viewBox="0 0 24 24">
              <path d="M4 0l16 12-7 2-4 9z" />
            </svg>
            <span className="text-[9px] bg-indigo-600 text-white px-1.5 py-0.5 rounded font-sans">
              karan.dev
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 relative z-10">
          <span>Quadtree Frustum Culling</span>
          <span className="font-mono text-pink-600 dark:text-pink-400 font-medium">50,000+ Nodes</span>
        </div>
      </div>
    );
  }

  // metrics-dashboard (Pulse)
  return (
    <div className="w-full h-full min-h-[260px] bg-slate-900 dark:bg-[#0B0F19] text-slate-100 rounded-xl p-4 flex flex-col justify-between border border-slate-800 text-xs font-mono select-none overflow-hidden relative transition-colors">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
          <span className="font-semibold text-white font-sans text-xs">Pulse Edge Ingestion</span>
        </div>
        <span className="text-[10px] text-sky-300 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
          12,400 req/sec
        </span>
      </div>

      {/* Real-time bar streams */}
      <div className="my-2 space-y-2">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>P95 Core Web Vitals (INP)</span>
          <span className="text-emerald-400 font-semibold font-mono">18ms (Fast)</span>
        </div>

        {/* SVG Stream visualizer */}
        <div className="h-16 w-full flex items-end gap-1 pt-2">
          {[35, 52, 45, 60, 48, 70, 85, 62, 55, 78, 65, 90, 82, 74, 88, 95, 68, 72, 80, 85].map((val, idx) => (
            <div
              key={idx}
              className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-xs transition-all duration-300"
              style={{ height: `${val}%` }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>Beacon: 1.2 KB (No Cookies)</span>
          <span className="text-sky-300">ClickHouse Columnar Engine</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400">
        <span>Zero Client-side CPU Impact</span>
        <span className="text-sky-400">Global P99: 42ms</span>
      </div>
    </div>
  );
};
