import React, { useState, useEffect } from 'react';
import { Project, PROJECTS } from '@/data/portfolioData';
import { Navbar, Footer } from '@/components/layout';
import { CaseStudyModal } from '@/components/modals';
import {
  ScrollProgressHUD,
  SectionTransitionPortal,
  SmoothScrollIndicator,
} from '@/components/transitions';
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
      {/* Dynamic Specular Laser Progress Bar & Floating Radar HUD */}
      <ScrollProgressHUD
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

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

        {/* Kinetic Scroll Conduit: Hero → Work */}
        <SectionTransitionPortal
          fromSection="home"
          toSection="work"
          fromColor="#6366F1"
          toColor="#06B6D4"
          indexLabel="01 // HERO → 02 // WORK"
        />

        {/* 02. The Astro Hanging Clothesline Showcase: Suspended Curve & Clothespin Cards */}
        <HangingCardsShowcase onSelectProject={handleOpenCaseStudy} />

        {/* Kinetic Scroll Conduit: Work → About */}
        <SectionTransitionPortal
          fromSection="work"
          toSection="about"
          fromColor="#06B6D4"
          toColor="#EA580C"
          indexLabel="02 // WORK → 03 // ABOUT"
        />

        {/* 03. About & Operating Philosophy */}
        <AboutSection />

        {/* Kinetic Scroll Conduit: About → Stack */}
        <SectionTransitionPortal
          fromSection="about"
          toSection="skills"
          fromColor="#EA580C"
          toColor="#D97706"
          indexLabel="03 // ABOUT → 04 // STACK"
        />

        {/* 04. Technical Stack & Matrix */}
        <SkillsSection onSelectTechFilter={() => handleNavigate('work')} />

        {/* Kinetic Scroll Conduit: Stack → Journey */}
        <SectionTransitionPortal
          fromSection="skills"
          toSection="journey"
          fromColor="#D97706"
          toColor="#9333EA"
          indexLabel="04 // STACK → 05 // JOURNEY"
        />

        {/* 05. Journey & Milestones */}
        <JourneySection />

        {/* Kinetic Scroll Conduit: Journey → Resume */}
        <SectionTransitionPortal
          fromSection="journey"
          toSection="resume"
          fromColor="#9333EA"
          toColor="#E11D48"
          indexLabel="05 // JOURNEY → 06 // RESUME"
        />

        {/* 06. Resume Dossier */}
        <ResumeSection />

        {/* Kinetic Scroll Conduit: Resume → Contact */}
        <SectionTransitionPortal
          fromSection="resume"
          toSection="contact"
          fromColor="#E11D48"
          toColor="#8B5CF6"
          indexLabel="06 // RESUME → 07 // TRANSMISSION"
        />

        {/* 07. Contact Section & Live Clock */}
        <ContactSection />
      </main>

      {/* Floating Kinetic Scroll Velocity Telemetry Pill */}
      <SmoothScrollIndicator onNavigate={handleNavigate} />

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
