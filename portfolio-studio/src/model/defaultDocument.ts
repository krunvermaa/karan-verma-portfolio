import { StudioDocument, Achievement, SectionConfig } from './types';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, JOURNEY } from '@portfolio/data/portfolioData';

export const INITIAL_SECTIONS: SectionConfig[] = [
  { id: 'hero', name: 'Hero / Launchpad', enabled: true, order: 0, icon: 'Sparkles' },
  { id: 'hanging-cards', name: 'Hanging Cards Clothesline', enabled: true, order: 1, icon: 'Flame' },
  { id: 'work', name: 'MOOV Project Dossier Deep-Dive', enabled: true, order: 2, icon: 'FolderGit2' },
  { id: 'about', name: 'About & Developer License', enabled: true, order: 3, icon: 'BadgeCheck' },
  { id: 'skills', name: 'Technical Stack Studio Pinboard', enabled: true, order: 4, icon: 'Cpu' },
  { id: 'journey', name: 'Flight Log & Career Milestones', enabled: true, order: 5, icon: 'Compass' },
  { id: 'resume', name: 'Official Resume Dossier', enabled: true, order: 6, icon: 'FileText' },
  { id: 'contact', name: 'Stationery Desk & Live Clock', enabled: true, order: 7, icon: 'Send' },
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-msme-5-agri',
    title: 'MSME Idea Hackathon 5.0 — Smart AI Agri Market',
    description: 'Selected for ₹15 Lakh grant-in-aid consideration by the Ministry of MSME, Govt of India for agricultural marketplace innovation.',
    organization: 'Ministry of MSME, Govt of India',
    date: '2025',
    category: 'Grant',
    grantAmount: '₹15 Lakh',
    displayOrder: 0,
    visible: true,
    url: 'https://github.com/krunvermaa',
  },
  {
    id: 'ach-msme-5-rail',
    title: 'MSME Idea Hackathon 5.0 — AI Railway Navigation',
    description: 'Selected for ₹15 Lakh grant-in-aid consideration for real-time indoor railway junction routing and accessible transit intelligence.',
    organization: 'Ministry of MSME, Govt of India',
    date: '2025',
    category: 'Grant',
    grantAmount: '₹15 Lakh',
    displayOrder: 1,
    visible: true,
    url: 'https://github.com/krunvermaa',
  },
  {
    id: 'ach-college-topper',
    title: 'College Topper & Consistent Academic Honors',
    description: 'Achieved outstanding SGPAs (8.48, 8.57, 8.54) in Computer Science & Engineering at Mahakal Institute of Technology, Ujjain.',
    organization: 'Mahakal Institute of Technology, Ujjain',
    date: '2024 — Present',
    category: 'Academic',
    displayOrder: 2,
    visible: true,
  },
  {
    id: 'ach-student-vp',
    title: 'Student Council Vice President & Coding Club Lead',
    description: 'Elected Vice President of Student Council and Prompt Engineering Lead at MGI Coding Club; organized 35+ campus technical events.',
    organization: 'MIT Group of Institutes',
    date: '2024 — 2025',
    category: 'Leadership',
    displayOrder: 3,
    visible: true,
  },
];

export function createInitialDocument(): StudioDocument {
  return {
    version: '1.0.0',
    updatedAt: new Date().toISOString(),
    personalInfo: {
      ...PERSONAL_INFO,
    },
    // Clone arrays to prevent mutation of base data
    projects: JSON.parse(JSON.stringify(PROJECTS)),
    achievements: JSON.parse(JSON.stringify(INITIAL_ACHIEVEMENTS)),
    skills: JSON.parse(JSON.stringify(SKILL_CATEGORIES)),
    journey: JSON.parse(JSON.stringify(JOURNEY)),
    sections: JSON.parse(JSON.stringify(INITIAL_SECTIONS)),
    theme: 'dark',
  };
}
