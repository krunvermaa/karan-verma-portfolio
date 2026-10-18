import { StudioDocument } from '../model/types';
import { generatePublishableTypeScript, downloadFile } from './exporter';

export interface PublishResult {
  success: boolean;
  method: 'git-vercel-live' | 'server-sync' | 'file-download';
  message: string;
  timestamp: string;
  commitHash?: string;
  liveUrl?: string;
}

// Publish changes to the live portfolio
export async function publishPortfolioData(doc: StudioDocument): Promise<PublishResult> {
  const codeContent = generatePublishableTypeScript(doc);
  const timestamp = new Date().toISOString();

  // 1. Try local dev server API middleware with Git and Vercel sync
  try {
    const response = await fetch('/api/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ codeContent }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        method: data.method || 'git-vercel-live',
        commitHash: data.commitHash,
        liveUrl: data.liveUrl || 'https://karan-verma-portfolio.vercel.app',
        message: data.message || 'Successfully synchronized and pushed to origin main for Vercel deployment.',
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
    message: 'Downloaded updated portfolioData.ts file. Replace src/data/portfolioData.ts to apply.',
    timestamp,
    liveUrl: 'https://karan-verma-portfolio.vercel.app',
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
Total Grants & Honors: ${doc.achievements.length}
Technical Categories: ${doc.skills.length}
Career Milestones: ${doc.journey.length}
Active Sections: ${activeSections.length} of ${doc.sections.length}
Last Updated: ${doc.updatedAt}`;

  return {
    projectCount: doc.projects.length,
    achievementCount: doc.achievements.length,
    skillCategoryCount: doc.skills.length,
    milestoneCount: doc.journey.length,
    activeSectionsCount: activeSections.length,
    summary,
  };
}
