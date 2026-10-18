export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  challenges: string[];
  outcomes: { label: string; value: string }[];
  technologies: string[];
  accentColor: string;
  folderColor: string;
  githubUrl: string;
  demoUrl: string;
  year: string;
  highlights: string[];
  mockupType: 'agri-market' | 'railway-nav' | 'python-pipeline' | 'web3-growth' | 'event-hub' | 'telemedicine' | 'design-system' | 'os-simulator' | 'spatial-canvas' | 'metrics-dashboard';
  team?: string[];
  announcement?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    focus: string;
    tags: string[];
  }[];
}

export interface JourneyMilestone {
  year: string;
  period: string;
  role: string;
  organization: string;
  category: 'Experience' | 'Education' | 'Hackathon' | 'Leadership' | 'Achievement' | 'Open Source';
  description: string;
  achievements: string[];
  color: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  focus: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  twitter: string;
  location: string;
  status: string;
  experienceYears: string;
  education: EducationInfo;
}
