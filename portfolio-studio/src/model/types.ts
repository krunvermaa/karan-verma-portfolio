import { Project, SkillCategory, JourneyMilestone, PersonalInfo, EducationInfo } from '@portfolio/types';

export type { Project, SkillCategory, JourneyMilestone, PersonalInfo, EducationInfo };

export interface Achievement {
  id: string;
  title: string;
  description: string;
  organization: string;
  date: string;
  category: 'Hackathon' | 'Grant' | 'Academic' | 'Leadership' | 'Industry' | 'Honor';
  url?: string;
  displayOrder: number;
  visible: boolean;
  image?: string;
  grantAmount?: string;
}

export interface SectionConfig {
  id: string;
  name: string;
  enabled: boolean;
  order: number;
  icon: string;
}

export interface EditorSelection {
  type: 'none' | 'section' | 'project' | 'achievement' | 'skill' | 'journey' | 'profile';
  id: string;
  subId?: string;
  fieldPath?: string;
}

export interface ClipboardItem {
  type: 'project' | 'achievement' | 'milestone' | 'skill' | 'section';
  data: any;
  timestamp: number;
}

export interface StudioDocument {
  version: string;
  updatedAt: string;
  personalInfo: PersonalInfo & {
    twitterHandle?: string;
    announcement?: string;
  };
  projects: Project[];
  achievements: Achievement[];
  skills: SkillCategory[];
  journey: JourneyMilestone[];
  sections: SectionConfig[];
  theme: 'light' | 'dark';
}

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export type StudioTab = 'tree' | 'projects' | 'achievements' | 'journey' | 'skills' | 'profile' | 'settings';

export interface HistoryState {
  past: StudioDocument[];
  present: StudioDocument;
  future: StudioDocument[];
}
