import { StudioDocument, Project, Achievement, JourneyMilestone, SkillCategory, ClipboardItem } from './types';

// Cryptographically safe unique ID generator with fallback
export function generateId(prefix: string = 'id'): string {
  try {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return `${prefix}_${crypto.randomUUID().slice(0, 8)}`;
    }
  } catch {
    // Fallback below
  }
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}_${Date.now().toString(36).slice(-4)}`;
}

// Deep clone utility
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// Reorder array helper
export function reorderArray<T>(list: T[], fromIndex: number, toIndex: number): T[] {
  const result = [...list];
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
}

// Clone component with new unique ID
export function cloneWithNewId<T extends { id?: string; title?: string; name?: string; number?: string }>(item: T, type: string): T {
  const clone = deepClone(item);
  const newId = generateId(type);
  clone.id = newId;

  if (clone.title) {
    clone.title = `${clone.title} (Copy)`;
  } else if (clone.name) {
    clone.name = `${clone.name} (Copy)`;
  }

  return clone;
}

// =============================================================
// PROJECT OPERATIONS
// =============================================================

export function addProject(doc: StudioDocument, projectData?: Partial<Project>): { doc: StudioDocument; project: Project } {
  const newProject: Project = {
    id: generateId('proj'),
    number: String(doc.projects.length + 1).padStart(2, '0'),
    title: projectData?.title || 'New Engineered Project',
    category: projectData?.category || 'Full-Stack & Systems',
    tagline: projectData?.tagline || 'High-performance distributed web service',
    description: projectData?.description || 'Engineered with clean architecture, strict typing, and high reliability.',
    problem: projectData?.problem || 'Addressing performance bottlenecks and latency overhead in existing systems.',
    solution: projectData?.solution || 'Designed a modular, event-driven architecture with scalable caching layers.',
    architecture: projectData?.architecture || ['React 19 Frontend with sub-100ms TTI', 'Node.js Express / Go backend cluster', 'PostgreSQL / Redis spatial indexing'],
    features: projectData?.features || ['Real-time duplex synchronization', 'Accessible high-contrast UI', 'Low-latency telemetry streaming'],
    challenges: projectData?.challenges || ['Optimizing memory footprints under concurrent loads'],
    outcomes: projectData?.outcomes || [{ label: 'Performance', value: 'Sub-100ms' }, { label: 'Availability', value: '99.98%' }],
    technologies: projectData?.technologies || ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    accentColor: projectData?.accentColor || '#0284C7',
    folderColor: projectData?.folderColor || '#E0F2FE',
    githubUrl: projectData?.githubUrl || 'https://github.com/krunvermaa',
    demoUrl: projectData?.demoUrl || 'https://github.com/krunvermaa',
    year: projectData?.year || new Date().getFullYear().toString(),
    highlights: projectData?.highlights || ['Production Grade', 'System Design'],
    mockupType: projectData?.mockupType || 'spatial-canvas',
  };

  const updated: StudioDocument = {
    ...doc,
    updatedAt: new Date().toISOString(),
    projects: [...doc.projects, newProject],
  };

  return { doc: updated, project: newProject };
}

export function updateProject(doc: StudioDocument, projectId: string, updates: Partial<Project>): StudioDocument {
  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    projects: doc.projects.map((p) => (p.id === projectId ? { ...p, ...updates } : p)),
  };
}

export function duplicateProject(doc: StudioDocument, projectId: string): { doc: StudioDocument; newProject: Project | null } {
  const target = doc.projects.find((p) => p.id === projectId);
  if (!target) return { doc, newProject: null };

  const clone = cloneWithNewId(target, 'proj');
  clone.number = String(doc.projects.length + 1).padStart(2, '0');

  const targetIdx = doc.projects.findIndex((p) => p.id === projectId);
  const newProjects = [...doc.projects];
  newProjects.splice(targetIdx + 1, 0, clone);

  return {
    doc: {
      ...doc,
      updatedAt: new Date().toISOString(),
      projects: newProjects,
    },
    newProject: clone,
  };
}

export function deleteProject(doc: StudioDocument, projectId: string): StudioDocument {
  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    projects: doc.projects.filter((p) => p.id !== projectId),
  };
}

export function reorderProjects(doc: StudioDocument, fromIndex: number, toIndex: number): StudioDocument {
  const reordered = reorderArray(doc.projects, fromIndex, toIndex);
  // Re-number projects sequentially
  const renumbered = reordered.map((p, idx) => ({
    ...p,
    number: String(idx + 1).padStart(2, '0'),
  }));

  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    projects: renumbered,
  };
}

// =============================================================
// ACHIEVEMENT OPERATIONS
// =============================================================

export function addAchievement(doc: StudioDocument, achievementData?: Partial<Achievement>): { doc: StudioDocument; achievement: Achievement } {
  const newAch: Achievement = {
    id: generateId('ach'),
    title: achievementData?.title || 'New Achievement / Award',
    description: achievementData?.description || 'Honored for technical excellence and impact.',
    organization: achievementData?.organization || 'Organization / Institution',
    date: achievementData?.date || new Date().getFullYear().toString(),
    category: achievementData?.category || 'Honor',
    grantAmount: achievementData?.grantAmount,
    url: achievementData?.url || 'https://github.com/krunvermaa',
    displayOrder: doc.achievements.length,
    visible: true,
  };

  return {
    doc: {
      ...doc,
      updatedAt: new Date().toISOString(),
      achievements: [...doc.achievements, newAch],
    },
    achievement: newAch,
  };
}

export function updateAchievement(doc: StudioDocument, achievementId: string, updates: Partial<Achievement>): StudioDocument {
  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    achievements: doc.achievements.map((a) => (a.id === achievementId ? { ...a, ...updates } : a)),
  };
}

export function duplicateAchievement(doc: StudioDocument, achievementId: string): { doc: StudioDocument; newAchievement: Achievement | null } {
  const target = doc.achievements.find((a) => a.id === achievementId);
  if (!target) return { doc, newAchievement: null };

  const clone = cloneWithNewId(target, 'ach');
  clone.displayOrder = doc.achievements.length;

  const targetIdx = doc.achievements.findIndex((a) => a.id === achievementId);
  const newAchievements = [...doc.achievements];
  newAchievements.splice(targetIdx + 1, 0, clone);

  return {
    doc: {
      ...doc,
      updatedAt: new Date().toISOString(),
      achievements: newAchievements,
    },
    newAchievement: clone,
  };
}

export function deleteAchievement(doc: StudioDocument, achievementId: string): StudioDocument {
  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    achievements: doc.achievements.filter((a) => a.id !== achievementId),
  };
}

export function reorderAchievements(doc: StudioDocument, fromIndex: number, toIndex: number): StudioDocument {
  const reordered = reorderArray(doc.achievements, fromIndex, toIndex);
  const reindexed = reordered.map((a, idx) => ({ ...a, displayOrder: idx }));

  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    achievements: reindexed,
  };
}

// =============================================================
// JOURNEY & MILESTONE OPERATIONS
// =============================================================

export function addMilestone(doc: StudioDocument, milestoneData?: Partial<JourneyMilestone>): { doc: StudioDocument; milestone: JourneyMilestone } {
  const newMilestone: JourneyMilestone = {
    year: milestoneData?.year || new Date().getFullYear().toString(),
    period: milestoneData?.period || 'Q1 — Present',
    role: milestoneData?.role || 'Lead Software Developer',
    organization: milestoneData?.organization || 'Technical Organization',
    category: milestoneData?.category || 'Experience',
    description: milestoneData?.description || 'Led core systems development and architecture delivery.',
    achievements: milestoneData?.achievements || ['Engineered production systems', 'Maintained 99.98% reliability'],
    color: milestoneData?.color || 'blue',
  };

  return {
    doc: {
      ...doc,
      updatedAt: new Date().toISOString(),
      journey: [newMilestone, ...doc.journey],
    },
    milestone: newMilestone,
  };
}

export function updateMilestone(doc: StudioDocument, index: number, updates: Partial<JourneyMilestone>): StudioDocument {
  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    journey: doc.journey.map((m, idx) => (idx === index ? { ...m, ...updates } : m)),
  };
}

export function duplicateMilestone(doc: StudioDocument, index: number): StudioDocument {
  const target = doc.journey[index];
  if (!target) return doc;

  const clone: JourneyMilestone = {
    ...deepClone(target),
    role: `${target.role} (Copy)`,
  };

  const newJourney = [...doc.journey];
  newJourney.splice(index + 1, 0, clone);

  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    journey: newJourney,
  };
}

export function deleteMilestone(doc: StudioDocument, index: number): StudioDocument {
  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    journey: doc.journey.filter((_, idx) => idx !== index),
  };
}

export function reorderMilestones(doc: StudioDocument, fromIndex: number, toIndex: number): StudioDocument {
  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    journey: reorderArray(doc.journey, fromIndex, toIndex),
  };
}

// =============================================================
// SKILLS & STACK OPERATIONS
// =============================================================

export function addSkill(
  doc: StudioDocument,
  categoryId: string,
  skill: { name: string; level: string; experience: string; focus: string; tags: string[] }
): StudioDocument {
  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    skills: doc.skills.map((cat) => (cat.id === categoryId ? { ...cat, skills: [...cat.skills, skill] } : cat)),
  };
}

export function deleteSkill(doc: StudioDocument, categoryId: string, skillName: string): StudioDocument {
  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    skills: doc.skills.map((cat) => (cat.id === categoryId ? { ...cat, skills: cat.skills.filter((s) => s.name !== skillName) } : cat)),
  };
}

// =============================================================
// SECTION MANAGEMENT
// =============================================================

export function toggleSection(doc: StudioDocument, sectionId: string): StudioDocument {
  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    sections: doc.sections.map((s) => (s.id === sectionId ? { ...s, enabled: !s.enabled } : s)),
  };
}

export function reorderSections(doc: StudioDocument, fromIndex: number, toIndex: number): StudioDocument {
  const reordered = reorderArray(doc.sections, fromIndex, toIndex);
  const reindexed = reordered.map((s, idx) => ({ ...s, order: idx }));

  return {
    ...doc,
    updatedAt: new Date().toISOString(),
    sections: reindexed,
  };
}

// =============================================================
// COMPONENT CLIPBOARD OPERATIONS (Copy, Cut, Paste, Duplicate)
// =============================================================

export function copyComponent(item: any, type: ClipboardItem['type']): ClipboardItem {
  return {
    type,
    data: deepClone(item),
    timestamp: Date.now(),
  };
}

export function pasteComponent(
  doc: StudioDocument,
  clipboard: ClipboardItem,
  targetContainerId?: string
): { doc: StudioDocument; success: boolean; newId?: string; newItem?: any; message: string } {
  if (!clipboard || !clipboard.data) {
    return { doc, success: false, message: 'Clipboard is empty' };
  }

  if (clipboard.type === 'project') {
    const clone = cloneWithNewId(clipboard.data as Project, 'proj');
    clone.number = String(doc.projects.length + 1).padStart(2, '0');
    return {
      doc: {
        ...doc,
        updatedAt: new Date().toISOString(),
        projects: [...doc.projects, clone],
      },
      success: true,
      newId: clone.id,
      newItem: clone,
      message: `Pasted project "${clone.title}"`,
    };
  }

  if (clipboard.type === 'achievement') {
    const clone = cloneWithNewId(clipboard.data as Achievement, 'ach');
    clone.displayOrder = doc.achievements.length;
    return {
      doc: {
        ...doc,
        updatedAt: new Date().toISOString(),
        achievements: [...doc.achievements, clone],
      },
      success: true,
      newId: clone.id,
      newItem: clone,
      message: `Pasted achievement "${clone.title}"`,
    };
  }

  if (clipboard.type === 'milestone') {
    const clone: JourneyMilestone = {
      ...deepClone(clipboard.data as JourneyMilestone),
      role: `${(clipboard.data as JourneyMilestone).role} (Copy)`,
    };
    return {
      doc: {
        ...doc,
        updatedAt: new Date().toISOString(),
        journey: [clone, ...doc.journey],
      },
      success: true,
      newItem: clone,
      message: `Pasted milestone "${clone.role}"`,
    };
  }

  return { doc, success: false, message: `Unsupported clipboard type: ${clipboard.type}` };
}

// =============================================================
// SCHEMA VALIDATION
// =============================================================

export function validateDocumentSchema(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Document must be an object'] };
  }

  if (!data.personalInfo || typeof data.personalInfo.name !== 'string') {
    errors.push('personalInfo.name is required');
  }

  if (!Array.isArray(data.projects)) {
    errors.push('projects must be an array');
  } else {
    data.projects.forEach((p: any, idx: number) => {
      if (!p.id) errors.push(`project[${idx}] missing id`);
      if (!p.title) errors.push(`project[${idx}] missing title`);
    });
  }

  if (!Array.isArray(data.achievements)) {
    errors.push('achievements must be an array');
  }

  if (!Array.isArray(data.sections)) {
    errors.push('sections must be an array');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
