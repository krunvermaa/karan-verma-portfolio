import React, { useState, useEffect } from 'react';
import { Project, PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HangingCardsShowcase } from './components/HangingCardsShowcase';
import { MoovFolderDeepDive } from './components/MoovFolderDeepDive';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { JourneySection } from './components/JourneySection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  // Theme state persisted in localStorage
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      // Check system preference if no saved theme
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Apply theme to document root via CSS variables and dataset/classes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
    } else {
      root.setAttribute('data-theme', 'light');
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Ignore local storage errors if cookies/storage blocked
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'skills', 'journey', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCaseStudy = (proj: Project) => {
    setSelectedCaseStudy(proj);
  };

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-canvas text-theme-primary font-sans selection:bg-slate-900 selection:text-white dark:selection:bg-white dark:selection:text-slate-950 transition-colors duration-300">
      {/* Top Floating Navbar (Apple-inspired glass pill with Day/Night toggle) */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onContactClick={() => handleNavigate('contact')}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Flow */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* 01. Hero Section: Designer Daishu Folder Fan + Astro Typography */}
        <Hero
          onExploreWork={() => handleNavigate('work')}
          onContact={() => handleNavigate('contact')}
          onSelectProject={handleOpenCaseStudy}
        />

        {/* 02. The Astro Hanging Clothesline Showcase: Suspended Curve & Clothespin Cards */}
        <HangingCardsShowcase onSelectProject={handleOpenCaseStudy} />

        {/* 03. The MOOV Large Floating Folder Deep-Dive with Sheets Peeking Out */}
        <MoovFolderDeepDive onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 04. About & Operating Philosophy */}
        <AboutSection />

        {/* 05. Technical Stack & Matrix */}
        <SkillsSection onSelectTechFilter={() => handleNavigate('work')} />

        {/* 06. Journey & Milestones */}
        <JourneySection />

        {/* 07. Resume Dossier */}
        <ResumeSection />

        {/* 08. Contact Section & Live Clock */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Case Study Full Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onSelectProject={(proj) => setSelectedCaseStudy(proj)}
          allProjects={PROJECTS}
        />
      )}
    </div>
  );
}
