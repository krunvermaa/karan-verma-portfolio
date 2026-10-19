import React, { useState, useEffect } from 'react';
import { Project, PROJECTS } from '@/data/portfolioData';
import { Navbar, Footer } from '@/components/layout';
import { CaseStudyModal } from '@/components/modals';
import {
  Hero,
  HangingCardsShowcase,
  AboutSection,
  SkillsSection,
  JourneySection,
  ResumeSection,
  ContactSection,
} from '@/sections';

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
        {/* 01. Hero Section: Clean Positioning & Typography */}
        <Hero
          onExploreWork={() => handleNavigate('work')}
          onContact={() => handleNavigate('contact')}
        />

        {/* Seamless Blending Divider: Hero -> Work */}
        <div
          aria-hidden="true"
          className="relative z-10 h-16 sm:h-24 w-full -my-8 sm:-my-12 pointer-events-none bg-gradient-to-b from-[#F8FAFF] to-[#F0F7FF] dark:from-[#080B15] dark:to-[#060D1A]"
        />

        {/* 02. The Astro Hanging Clothesline Showcase: Suspended Curve & Clothespin Cards */}
        <HangingCardsShowcase onSelectProject={handleOpenCaseStudy} />

        {/* Seamless Blending Divider: Work -> About */}
        <div
          aria-hidden="true"
          className="relative z-10 h-16 sm:h-24 w-full -my-8 sm:-my-12 pointer-events-none bg-gradient-to-b from-[#F0F7FF] to-[#FFF9F5] dark:from-[#060D1A] dark:to-[#150C09]"
        />

        {/* 03. About & Operating Philosophy */}
        <AboutSection />

        {/* Seamless Blending Divider: About -> Skills */}
        <div
          aria-hidden="true"
          className="relative z-10 h-16 sm:h-24 w-full -my-8 sm:-my-12 pointer-events-none bg-gradient-to-b from-[#FFF9F5] to-[#FFFBEB] dark:from-[#150C09] dark:to-[#0B0F19]"
        />

        {/* 04. Technical Stack & Matrix */}
        <SkillsSection onSelectTechFilter={() => handleNavigate('work')} />

        {/* Seamless Blending Divider: Skills -> Journey */}
        <div
          aria-hidden="true"
          className="relative z-10 h-16 sm:h-24 w-full -my-8 sm:-my-12 pointer-events-none bg-gradient-to-b from-[#FFFBEB] to-[#FBF8FF] dark:from-[#0B0F19] dark:to-[#0E061B]"
        />

        {/* 05. Journey & Milestones */}
        <JourneySection />

        {/* Seamless Blending Divider: Journey -> Resume */}
        <div
          aria-hidden="true"
          className="relative z-10 h-16 sm:h-24 w-full -my-8 sm:-my-12 pointer-events-none bg-gradient-to-b from-[#FBF8FF] to-[#FFF8F9] dark:from-[#0E061B] dark:to-[#110609]"
        />

        {/* 06. Resume Dossier */}
        <ResumeSection />

        {/* Seamless Blending Divider: Resume -> Contact */}
        <div
          aria-hidden="true"
          className="relative z-10 h-16 sm:h-24 w-full -my-8 sm:-my-12 pointer-events-none bg-gradient-to-b from-[#FFF8F9] to-[#F8F6FF] dark:from-[#110609] dark:to-[#080711]"
        />

        {/* 07. Contact Section & Live Clock */}
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
