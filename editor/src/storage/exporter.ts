import { StudioDocument } from '../model/types';
import { validateDocumentSchema } from '../model/documentModel';

// Trigger browser file download with blob
export function downloadFile(content: string, filename: string, mimeType: string = 'application/json'): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Export entire Studio Document as JSON
export function exportDocumentAsJSON(doc: StudioDocument, filename: string = 'karan-verma-portfolio-backup.json'): void {
  const formatted = JSON.stringify(doc, null, 2);
  downloadFile(formatted, filename, 'application/json');
}

// Parse and validate imported JSON backup
export function parseAndValidateJSON(jsonString: string): { success: boolean; doc?: StudioDocument; errors?: string[] } {
  try {
    const parsed = JSON.parse(jsonString);
    const validation = validateDocumentSchema(parsed);

    if (!validation.valid) {
      return { success: false, errors: validation.errors };
    }

    return {
      success: true,
      doc: parsed as StudioDocument,
    };
  } catch (err: any) {
    return {
      success: false,
      errors: [err.message || 'Invalid JSON format'],
    };
  }
}

// Generate valid, formatted TypeScript matching src/data/portfolioData.ts
export function generatePublishableTypeScript(doc: StudioDocument): string {
  const header = `// ============================================================================
// PORTFOLIO DATA SOURCE — SYNCHRONIZED VIA VISUAL PORTFOLIO EDITOR
// Generated At: ${new Date().toISOString()}
// Author: ${doc.personalInfo.name}
// ============================================================================

export type { Project, SkillCategory, JourneyMilestone, PersonalInfo, EducationInfo } from '../types';
import type { Project, SkillCategory, JourneyMilestone } from '../types';

export const PERSONAL_INFO = ${JSON.stringify(doc.personalInfo, null, 2)};

export const PROJECTS: Project[] = ${JSON.stringify(doc.projects, null, 2)};

export const SKILL_CATEGORIES: SkillCategory[] = ${JSON.stringify(doc.skills, null, 2)};

export const JOURNEY: JourneyMilestone[] = ${JSON.stringify(doc.journey, null, 2)};
export const JOURNEY_MILESTONES: JourneyMilestone[] = JOURNEY;

export const ACHIEVEMENTS = ${JSON.stringify(doc.achievements, null, 2)};

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Factual Rigor & Academic Excellence',
    description: 'True engineering capability starts with disciplined fundamentals. Sustaining top academic standing (College Topper SGPAs) alongside active software building forms the foundation of reliable problem solving.',
  },
  {
    number: '02',
    title: 'Solving Ground-Level Human Problems',
    description: 'Technology is valuable only when it lifts real people. Both MSME Hackathon 5.0 selections—empowering farmers with fair mandi access and commuters with accessible railway navigation—target high-impact societal needs.',
  },
  {
    number: '03',
    title: 'Technical Mastery Meets Leadership',
    description: 'Writing code is only half the mission. Organizing 20+ events, anchoring 35+ institutional ceremonies, and serving as Student Council Vice President instills the communication and stakeholder skills needed in engineering teams.',
  },
  {
    number: '04',
    title: 'Relentless Exploration & Adaptability',
    description: 'From Python production pipelines at IndusAI and Web3 community growth at HACKTOUR IND to rapid hackathon prototyping under 36-hour constraints, adaptability and continuous learning drive long-term engineering growth.',
  },
];
`;

  return header;
}
