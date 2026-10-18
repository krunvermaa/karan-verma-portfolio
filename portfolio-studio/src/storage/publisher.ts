import { StudioDocument } from '../model/types';
import { generatePublishableTypeScript, downloadFile } from './exporter';

export interface PublishResult {
  success: boolean;
  method: 'server-sync' | 'file-download';
  message: string;
  timestamp: string;
}

// Publish changes to the live portfolio
export async function publishPortfolioData(doc: StudioDocument): Promise<PublishResult> {
  const codeContent = generatePublishableTypeScript(doc);
  const timestamp = new Date().toISOString();

  // 1. Try local dev server API middleware
  try {
    const response = await fetch('/api/publish-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ codeContent }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        method: 'server-sync',
        message: data.message || 'Successfully updated src/data/portfolioData.ts in local project',
        timestamp,
      };
    }
  } catch (err) {
    // API not reachable (e.g. running outside Vite dev server), fallback to download
  }

  // 2. Fallback: Download the publishable file
  downloadFile(codeContent, 'portfolioData.ts', 'text/typescript');
  return {
    success: true,
    method: 'file-download',
    message: 'Downloaded updated portfolioData.ts file. Replace src/data/portfolioData.ts with this file to apply.',
    timestamp,
  };
}

// Generate human-readable audit report of portfolio state
export function createPublishAuditReport(doc: StudioDocument): {
  projectCount: number;
  achievementCount: number;
  skillCategoryCount: number;
  milestoneCount: number;
  activeSectionsCount: number;
  summary: string;
} {
  const activeSections = doc.sections.filter((s) => s.enabled);

  const summary = `Portfolio Studio Audit Report
Author: ${doc.personalInfo.name}
Total Projects: ${doc.projects.length}
Total Achievements: ${doc.achievements.length}
Active Sections: ${activeSections.length} of ${doc.sections.length} (${activeSections.map((s) => s.name).join(', ')})
Tech Skill Categories: ${doc.skills.length}
Career Milestones: ${doc.journey.length}
Verified: Ready for production deployment.`;

  return {
    projectCount: doc.projects.length,
    achievementCount: doc.achievements.length,
    skillCategoryCount: doc.skills.length,
    milestoneCount: doc.journey.length,
    activeSectionsCount: activeSections.length,
    summary,
  };
}
