import React, { useState, useEffect } from 'react';
import {
  StudioDocument,
  EditorSelection,
  Project,
  Achievement,
  JourneyMilestone,
} from '../model/types';
import { ProjectMockup } from '@portfolio/components/ProjectMockup';
import { DeveloperLicenseBadge } from '@portfolio/components/DeveloperLicenseBadge';
import {
  Sparkles,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Calendar,
  Award,
  Clock,
  Copy,
  Trash2,
  ChevronUp,
  ChevronDown,
  GripVertical,
  Plus,
  Tag,
  Check,
  FileText,
  Send,
  Cpu,
  BadgeCheck,
  FolderGit2,
} from 'lucide-react';
import { useDragDrop } from '../editor/DragDropContext';

interface EditablePortfolioPreviewProps {
  document: StudioDocument;
  selection: EditorSelection;
  onSelectElement: (sel: EditorSelection) => void;
  onUpdateProject: (id: string, updates: Partial<Project>) => void;
  onDuplicateProject: (id: string) => void;
  onDeleteProject: (id: string) => void;
  onReorderProjects: (from: number, to: number) => void;
  onUpdateAchievement: (id: string, updates: Partial<Achievement>) => void;
  onDuplicateAchievement: (id: string) => void;
  onDeleteAchievement: (id: string) => void;
  onReorderAchievements: (from: number, to: number) => void;
  onUpdateMilestone: (index: number, updates: Partial<JourneyMilestone>) => void;
  onDuplicateMilestone: (index: number) => void;
  onDeleteMilestone: (index: number) => void;
  onReorderMilestones: (from: number, to: number) => void;
  onDeleteSkill: (categoryId: string, skillName: string) => void;
  onUpdateProfile: (field: string, value: string) => void;
  onCopyComponent: (item: any, type: any) => void;
}

export const EditablePortfolioPreview: React.FC<EditablePortfolioPreviewProps> = ({
  document,
  selection,
  onSelectElement,
  onUpdateProject,
  onDuplicateProject,
  onDeleteProject,
  onReorderProjects,
  onUpdateAchievement,
  onDuplicateAchievement,
  onDeleteAchievement,
  onReorderAchievements,
  onUpdateMilestone,
  onDuplicateMilestone,
  onDeleteMilestone,
  onReorderMilestones,
  onDeleteSkill,
  onUpdateProfile,
  onCopyComponent,
}) => {
  const { dragItem, dragOverTarget, startDrag, setDragOver, endDrag } = useDragDrop();
  const [activeDossierIdx, setActiveDossierIdx] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const { personalInfo, projects, achievements, skills, journey, sections } = document;
  const currentDossierProject = projects[activeDossierIdx] || projects[0];

  return (
    <div className="relative min-h-screen bg-canvas text-theme-primary font-sans transition-colors duration-300 pb-20">
      {/* ======================================================== */}
      {/* 1. FLOATING STUDIO NAVPILL */}
      {/* ======================================================== */}
      <nav className="sticky top-4 z-40 max-w-4xl mx-auto px-4 pointer-events-none">
        <div className="pointer-events-auto bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-full px-5 py-2.5 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-xs tracking-wider text-slate-900 dark:text-white uppercase">
              {personalInfo.name || 'KARAN VERMA'}
            </span>
            <span className="h-3 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block" />
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold hidden sm:inline">
              ● AVAILABLE FOR 2025–26
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-500 dark:text-slate-400 hidden md:inline">
              {personalInfo.location || 'Ujjain, India'}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700">
              {currentTime || '05:30 PM IST'}
            </span>
          </div>
        </div>
      </nav>

      {/* ======================================================== */}
      {/* SECTIONS FLOW BASED ON DOCUMENT CONFIG */}
      {/* ======================================================== */}
      {sections.map((secConfig) => {
        if (!secConfig.enabled) return null;

        // ----------------------------------------------------
        // HERO SECTION
        // ----------------------------------------------------
        if (secConfig.id === 'hero') {
          const isSelected = selection.type === 'section' && selection.id === 'hero';
          return (
            <section
              key="hero"
              id="home"
              onClick={() => onSelectElement({ type: 'section', id: 'hero' })}
              className={`relative pt-20 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFF] dark:bg-[#080B15] text-theme-primary overflow-hidden transition-all duration-200 cursor-pointer ${
                isSelected ? 'ring-2 ring-sky-500 shadow-xl' : 'hover:outline hover:outline-sky-400/30'
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 left-4 z-30 flex items-center gap-2 bg-sky-600 text-white text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md shadow-md">
                  <span>SECTION: HERO</span>
                </div>
              )}

              {/* Ambient lighting */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-indigo-300/35 dark:from-indigo-900/30 via-blue-200/20 dark:via-blue-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center items-center text-center space-y-6 sm:space-y-8">
                {/* Identity Tagline */}
                <div className="flex flex-col items-center gap-1 pt-2">
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-slate-900 dark:text-white uppercase">
                    {personalInfo.name}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-slate-600 dark:text-slate-400 uppercase font-semibold">
                    SELECTED WORKS / 2025–26
                  </span>
                </div>

                {/* Hero Headline */}
                <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto px-1 sm:px-4">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-[1.05] uppercase">
                    <span className="block">I BUILD SOFTWARE</span>
                    <span className="block text-slate-800 dark:text-slate-200">THAT FEELS AS GOOD</span>
                    <span className="block text-slate-950 dark:text-white">AS IT WORKS.</span>
                  </h1>

                  <p className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-tight text-indigo-700 dark:text-indigo-400 uppercase">
                    {personalInfo.tagline}
                  </p>

                  <p className="max-w-xl mx-auto text-xs sm:text-base text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    {personalInfo.bio}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const el = window.document.getElementById('work');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-mono text-xs font-bold hover:bg-slate-800 transition shadow-md"
                  >
                    <span>EXPLORE PROJECTS ({projects.length})</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>
          );
        }

        // ----------------------------------------------------
        // HANGING CARDS SHOWCASE (ASTRO CLOTHESLINE)
        // ----------------------------------------------------
        if (secConfig.id === 'hanging-cards') {
          const isSecSelected = selection.type === 'section' && selection.id === 'hanging-cards';
          return (
            <section
              key="hanging-cards"
              onClick={() => onSelectElement({ type: 'section', id: 'hanging-cards' })}
              className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F6FCF8] dark:bg-[#06140E] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-all duration-200 ${
                isSecSelected ? 'ring-2 ring-sky-500 shadow-xl' : ''
              }`}
            >
              {isSecSelected && (
                <div className="absolute top-3 left-4 z-30 flex items-center gap-2 bg-emerald-600 text-white text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md shadow-md">
                  <span>SECTION: CLOTHESLINE SHOWCASE</span>
                </div>
              )}

              <div className="max-w-7xl mx-auto space-y-8 relative z-10">
                <div className="text-center space-y-3 max-w-3xl mx-auto px-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Interactive Clothesline · Drag & Drop to Reorder</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08]">
                    Curated systems for <br />
                    <span className="text-emerald-600 dark:text-emerald-400">performance</span> & scale.
                  </h2>
                </div>

                {/* The Clothesline Wire and Hanging Cards */}
                <div className="relative pt-6 pb-8 overflow-x-auto scrollbar-none">
                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-start">
                    {projects.map((proj, idx) => {
                      const isCardSelected = selection.type === 'project' && selection.id === proj.id;
                      const isDropTarget = dragOverTarget?.type === 'project' && dragOverTarget.id === proj.id;

                      return (
                        <div
                          key={proj.id}
                          draggable
                          onDragStart={() => startDrag({ type: 'project', id: proj.id, index: idx })}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setDragOver({ type: 'project', id: proj.id, index: idx });
                          }}
                          onDrop={(e) => {
                            e.preventDefault();
                            if (dragItem && dragItem.type === 'project') {
                              onReorderProjects(dragItem.index, idx);
                              endDrag();
                            }
                          }}
                          onDragEnd={endDrag}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectElement({ type: 'project', id: proj.id });
                          }}
                          className={`relative flex flex-col items-center transition-all duration-200 cursor-pointer group ${
                            isDropTarget ? 'scale-105 ring-2 ring-emerald-500' : ''
                          }`}
                        >
                          {/* Clothesline Clip */}
                          <div className="w-4 h-7 rounded-xs bg-emerald-600 dark:bg-emerald-500 border border-emerald-700 dark:border-emerald-400 shadow-sm flex flex-col items-center justify-between py-0.5 z-20 -mb-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-100" />
                            <div className="w-2.5 h-0.5 bg-emerald-800" />
                          </div>

                          {/* Card Body */}
                          <div
                            className={`w-full bg-white dark:bg-[#131722] rounded-2xl p-4 border shadow-md transition-all duration-200 flex flex-col justify-between space-y-3 relative ${
                              isCardSelected
                                ? 'ring-2 ring-sky-500 border-sky-500 shadow-2xl scale-[1.02]'
                                : 'border-slate-200 dark:border-slate-800 hover:border-slate-400'
                            }`}
                          >
                            {/* Floating Toolbar when Card is Selected */}
                            {isCardSelected && (
                              <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 bg-[#101623] border border-[#222C3E] rounded-lg px-2 py-1 shadow-xl text-slate-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <button
                                  type="button"
                                  onClick={() => onCopyComponent(proj, 'project')}
                                  title="Copy Card"
                                  className="p-1 hover:text-white hover:bg-slate-800 rounded text-xs flex items-center gap-1 font-mono"
                                >
                                  <Copy className="w-3 h-3 text-sky-400" />
                                  <span>Copy</span>
                                </button>
                                <div className="h-3 w-px bg-slate-700" />
                                <button
                                  type="button"
                                  onClick={() => onDuplicateProject(proj.id)}
                                  title="Duplicate Card"
                                  className="p-1 hover:text-white hover:bg-slate-800 rounded text-xs font-mono"
                                >
                                  <span>Duplicate</span>
                                </button>
                                <div className="h-3 w-px bg-slate-700" />
                                <button
                                  type="button"
                                  disabled={idx === 0}
                                  onClick={() => onReorderProjects(idx, idx - 1)}
                                  className="p-1 hover:text-white disabled:opacity-20"
                                  title="Move Left"
                                >
                                  <ChevronLeft className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  disabled={idx === projects.length - 1}
                                  onClick={() => onReorderProjects(idx, idx + 1)}
                                  className="p-1 hover:text-white disabled:opacity-20"
                                  title="Move Right"
                                >
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                                <div className="h-3 w-px bg-slate-700" />
                                <button
                                  type="button"
                                  onClick={() => onDeleteProject(proj.id)}
                                  title="Delete Card"
                                  className="p-1 text-red-400 hover:text-red-300 hover:bg-slate-800 rounded"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            )}

                            {/* Mockup Frame */}
                            <div className="w-full h-32 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 relative pointer-events-none">
                              <ProjectMockup project={proj} />
                            </div>

                            {/* Metadata */}
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
                                <span className="font-semibold text-slate-700 dark:text-slate-300">
                                  {proj.number} / {String(projects.length).padStart(2, '0')}
                                </span>
                                <span className="text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                                  {proj.year}
                                </span>
                              </div>

                              {/* Editable Title */}
                              <input
                                type="text"
                                value={proj.title}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => onUpdateProject(proj.id, { title: e.target.value })}
                                className="w-full text-sm font-display font-bold text-slate-950 dark:text-white bg-transparent border-0 focus:outline-hidden focus:ring-1 focus:ring-sky-500 rounded px-1 truncate"
                              />

                              <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans line-clamp-2 leading-relaxed">
                                {proj.tagline}
                              </p>
                            </div>

                            {/* Footer */}
                            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 truncate max-w-[120px]">
                                {proj.technologies[0] || 'TypeScript'}
                              </span>
                              <span className="text-sky-600 dark:text-sky-400 font-semibold text-[11px]">
                                Click to Inspect
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        }

        // ----------------------------------------------------
        // WORK / MOOV DOSSIER DEEP DIVE SECTION
        // ----------------------------------------------------
        if (secConfig.id === 'work') {
          const isSecSelected = selection.type === 'section' && selection.id === 'work';
          if (!currentDossierProject) return null;

          return (
            <section
              key="work"
              id="work"
              onClick={() => onSelectElement({ type: 'section', id: 'work' })}
              className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-canvas text-theme-primary relative transition-all duration-200 ${
                isSecSelected ? 'ring-2 ring-sky-500' : ''
              }`}
            >
              <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      TECHNICAL DOSSIER & ARCHITECTURE
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 dark:text-white mt-1">
                      Production Engineering Deep-Dive
                    </h2>
                  </div>

                  {/* Project Selector Tabs */}
                  <div className="flex flex-wrap gap-2">
                    {projects.map((p, idx) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDossierIdx(idx);
                          onSelectElement({ type: 'project', id: p.id });
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                          activeDossierIdx === idx
                            ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {p.number}. {p.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Dossier Card */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectElement({ type: 'project', id: currentDossierProject.id });
                  }}
                  className={`bg-white dark:bg-[#111622] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl transition-all ${
                    selection.type === 'project' && selection.id === currentDossierProject.id
                      ? 'ring-2 ring-sky-500'
                      : ''
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Info */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded">
                          PROJECT {currentDossierProject.number}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">· {currentDossierProject.year}</span>
                        <span className="text-xs text-slate-400 font-mono">· {currentDossierProject.category}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 dark:text-white">
                        {currentDossierProject.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {currentDossierProject.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Architecture Specifications
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                          {currentDossierProject.architecture.map((arch, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-sky-500 font-bold shrink-0">▸</span>
                              <span>{arch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {currentDossierProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Mockup */}
                    <div className="lg:col-span-6">
                      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                        <ProjectMockup project={currentDossierProject} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        // ----------------------------------------------------
        // ABOUT & DEVELOPER LICENSE SECTION
        // ----------------------------------------------------
        if (secConfig.id === 'about') {
          const isSecSelected = selection.type === 'section' && selection.id === 'about';
          return (
            <section
              key="about"
              id="about"
              onClick={() => onSelectElement({ type: 'section', id: 'about' })}
              className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFBFD] dark:bg-[#070A14] text-theme-primary transition-all duration-200 ${
                isSecSelected ? 'ring-2 ring-sky-500' : ''
              }`}
            >
              <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    PHILOSOPHY & CREDENTIALS
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-950 dark:text-white">
                    Creative Developer License
                  </h2>
                </div>

                <DeveloperLicenseBadge />
              </div>
            </section>
          );
        }

        // ----------------------------------------------------
        // GRANTS, HONORS & ACHIEVEMENTS SHOWCASE
        // ----------------------------------------------------
        if (secConfig.id === 'achievements' || secConfig.id === 'about') {
          // Render achievements right under about or as dedicated section
          if (secConfig.id === 'about') {
            return (
              <section
                key="achievements-showcase"
                className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#090D18] border-y border-slate-200 dark:border-slate-800/80"
              >
                <div className="max-w-6xl mx-auto space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Award className="w-4 h-4" />
                        <span>GRANTS, FELLOWSHIPS & AWARDS</span>
                      </span>
                      <h3 className="text-2xl font-display font-bold text-slate-950 dark:text-white mt-1">
                        Government Grants & Academic Honors
                      </h3>
                    </div>
                  </div>

                  {/* Achievements Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((ach, idx) => {
                      const isAchSelected = selection.type === 'achievement' && selection.id === ach.id;
                      return (
                        <div
                          key={ach.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectElement({ type: 'achievement', id: ach.id });
                          }}
                          className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
                            isAchSelected
                              ? 'bg-amber-500/10 border-amber-500 ring-2 ring-amber-500/50 shadow-lg'
                              : 'bg-white dark:bg-[#121724] border-slate-200 dark:border-slate-800 hover:border-amber-400/50'
                          }`}
                        >
                          {/* Floating Actions on Selection */}
                          {isAchSelected && (
                            <div
                              className="absolute -top-9 right-4 z-30 flex items-center gap-1 bg-[#101623] border border-[#222C3E] rounded-lg px-2 py-1 shadow-xl text-slate-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <button
                                type="button"
                                onClick={() => onDuplicateAchievement(ach.id)}
                                className="p-1 hover:text-white rounded text-xs font-mono"
                              >
                                Duplicate
                              </button>
                              <div className="h-3 w-px bg-slate-700" />
                              <button
                                type="button"
                                onClick={() => onDeleteAchievement(ach.id)}
                                className="p-1 text-red-400 hover:text-red-300 rounded"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                                  {ach.category}
                                </span>
                                {ach.grantAmount && (
                                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                                    {ach.grantAmount}
                                  </span>
                                )}
                                <span className="text-xs font-mono text-slate-400">{ach.date}</span>
                              </div>
                              <h4 className="text-base font-bold text-slate-950 dark:text-white">{ach.title}</h4>
                              <p className="text-xs text-amber-700 dark:text-amber-400 font-medium mt-0.5">
                                {ach.organization}
                              </p>
                            </div>
                          </div>

                          <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            {ach.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          }
        }

        // ----------------------------------------------------
        // TECHNICAL STACK / SKILLS SECTION
        // ----------------------------------------------------
        if (secConfig.id === 'skills') {
          const isSecSelected = selection.type === 'section' && selection.id === 'skills';
          return (
            <section
              key="skills"
              id="skills"
              onClick={() => onSelectElement({ type: 'section', id: 'skills' })}
              className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-canvas text-theme-primary transition-all duration-200 ${
                isSecSelected ? 'ring-2 ring-sky-500' : ''
              }`}
            >
              <div className="max-w-6xl mx-auto space-y-8">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    STUDIO PINBOARD & EXPERTISE
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-950 dark:text-white">
                    Engineered Technical Stack
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((cat) => {
                    const isCatSelected = selection.type === 'skill' && selection.id === cat.id;
                    return (
                      <div
                        key={cat.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectElement({ type: 'skill', id: cat.id });
                        }}
                        className={`bg-white dark:bg-[#111624] rounded-2xl p-5 border shadow-sm transition-all cursor-pointer ${
                          isCatSelected
                            ? 'ring-2 ring-sky-500 border-sky-500'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-400'
                        }`}
                      >
                        <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-3 flex items-center justify-between">
                          <span>{cat.name}</span>
                          <span className="text-[10px] font-mono text-slate-400">{cat.skills.length} tools</span>
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((s) => (
                            <span
                              key={s.name}
                              className="group inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-slate-400 transition-colors"
                            >
                              <span>{s.name}</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onDeleteSkill(cat.id, s.name);
                                }}
                                title="Remove Skill"
                                className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-400 font-bold"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ----------------------------------------------------
        // JOURNEY / CAREER MILESTONES SECTION
        // ----------------------------------------------------
        if (secConfig.id === 'journey') {
          const isSecSelected = selection.type === 'section' && selection.id === 'journey';
          return (
            <section
              key="journey"
              id="journey"
              onClick={() => onSelectElement({ type: 'section', id: 'journey' })}
              className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070A14] text-theme-primary transition-all duration-200 ${
                isSecSelected ? 'ring-2 ring-sky-500' : ''
              }`}
            >
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    FLIGHT LOG & TRAJECTORY
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-950 dark:text-white">
                    Journey Milestones
                  </h2>
                </div>

                <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 md:ml-8 pl-6 md:pl-8 space-y-8">
                  {journey.map((m, idx) => {
                    const mId = `journey-${idx}`;
                    const isMSelected = selection.type === 'journey' && selection.id === mId;
                    return (
                      <div
                        key={mId}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectElement({ type: 'journey', id: mId });
                        }}
                        className={`relative p-5 rounded-2xl border transition-all cursor-pointer ${
                          isMSelected
                            ? 'bg-indigo-500/10 border-indigo-500 ring-2 ring-indigo-500/50 shadow-lg'
                            : 'bg-white dark:bg-[#111624] border-slate-200 dark:border-slate-800 hover:border-indigo-400/50'
                        }`}
                      >
                        {/* Timeline Node Icon */}
                        <div className="absolute -left-[35px] md:-left-[43px] top-6 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950" />

                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">
                            {m.year}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 capitalize">{m.category}</span>
                        </div>

                        <h4 className="text-base font-bold text-slate-950 dark:text-white">{m.role}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{m.organization}</p>
                        <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{m.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ----------------------------------------------------
        // RESUME SECTION
        // ----------------------------------------------------
        if (secConfig.id === 'resume') {
          return (
            <section
              key="resume"
              id="resume"
              onClick={() => onSelectElement({ type: 'section', id: 'resume' })}
              className="py-16 px-4 sm:px-6 lg:px-8 bg-canvas text-center"
            >
              <div className="max-w-3xl mx-auto space-y-4">
                <FileText className="w-8 h-8 text-sky-500 mx-auto" />
                <h3 className="text-2xl font-display font-bold text-slate-950 dark:text-white">
                  Official Resume Dossier
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Comprehensive breakdown of education, grants, technical stack, and software implementations.
                </p>
                <div className="pt-2">
                  <a
                    href="/KaranVermaResume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-mono font-bold shadow-md hover:bg-slate-800 transition"
                  >
                    <span>VIEW RESUME PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>
          );
        }

        // ----------------------------------------------------
        // CONTACT SECTION
        // ----------------------------------------------------
        if (secConfig.id === 'contact') {
          return (
            <section
              key="contact"
              id="contact"
              onClick={() => onSelectElement({ type: 'section', id: 'contact' })}
              className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#070A12] border-t border-slate-200 dark:border-slate-800/80"
            >
              <div className="max-w-4xl mx-auto space-y-8 text-center">
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                    DIRECT INQUIRIES & COMMISSIONS
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-950 dark:text-white">
                    Let's Engineer Together
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
                    Interested in discussing software architecture, MSME innovation, or full-time opportunities?
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-bold shadow-lg transition"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{personalInfo.email}</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs font-bold shadow-sm hover:border-slate-400 transition"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800 text-center text-xs font-mono text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="text-[10px] mt-1 text-slate-400 dark:text-slate-600">
          Engineered with Portfolio Studio · Linked to Production Data
        </p>
      </footer>
    </div>
  );
};
