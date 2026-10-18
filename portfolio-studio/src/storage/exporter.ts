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
// PORTFOLIO DATA SOURCE — SYNCHRONIZED VIA PORTFOLIO STUDIO
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
`;

  return header;
}
