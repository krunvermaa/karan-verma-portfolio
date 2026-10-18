import { createInitialDocument } from '../model/defaultDocument';
import {
  generateId,
  cloneWithNewId,
  addProject,
  updateProject,
  duplicateProject,
  deleteProject,
  reorderProjects,
  addAchievement,
  updateAchievement,
  duplicateAchievement,
  deleteAchievement,
  reorderAchievements,
  addMilestone,
  updateMilestone,
  duplicateMilestone,
  deleteMilestone,
  reorderMilestones,
  addSkill,
  deleteSkill,
  toggleSection,
  reorderSections,
  copyComponent,
  pasteComponent,
  validateDocumentSchema,
} from '../model/documentModel';
import { HistoryManager } from '../model/historyManager';
import { generatePublishableTypeScript, parseAndValidateJSON } from '../storage/exporter';
import { createPublishAuditReport } from '../storage/publisher';

function runTestSuite() {
  console.log('====================================================');
  console.log('VISUAL PORTFOLIO EDITOR — ACCEPTANCE TEST SUITE');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition: unknown, testName: string, detail?: string) {
    if (Boolean(condition)) {
      console.log(`[PASS] ${testName}`);
      passed++;
    } else {
      console.error(`[FAIL] ${testName}${detail ? ` -> ${detail}` : ''}`);
      failed++;
    }
  }

  // ----------------------------------------------------------------
  // TEST 1: Existing Website Integration & Schema Verification
  // ----------------------------------------------------------------
  const doc = createInitialDocument();
  const schemaValidation = validateDocumentSchema(doc);
  assert(schemaValidation.valid, 'Test 1a: Initial document passes strict schema validation');
  assert(doc.projects.length >= 5, 'Test 1b: Document contains all curated projects from existing portfolio');
  assert(doc.achievements.length >= 4, 'Test 1c: Document contains MSME grants and academic honors');
  assert(doc.sections.length >= 8, 'Test 1d: Document contains all core portfolio sections');
  assert(doc.personalInfo.name.includes('Karan'), 'Test 1e: Personal info reflects Karan Verma');

  // ----------------------------------------------------------------
  // TEST 2: Edit an Existing Element
  // ----------------------------------------------------------------
  const targetProj = doc.projects[0];
  const updatedDoc = updateProject(doc, targetProj.id, {
    title: 'Smart AI Agri Market Access 2.0',
    tagline: 'Empowering 50,000+ farmers with fair mandi price intelligence',
  });
  const updatedProj = updatedDoc.projects.find((p) => p.id === targetProj.id);
  assert(updatedProj?.title === 'Smart AI Agri Market Access 2.0', 'Test 2a: Project title updated in document model');
  assert(updatedProj?.tagline.includes('50,000+ farmers'), 'Test 2b: Project tagline updated in document model');
  assert(targetProj.title !== updatedProj?.title, 'Test 2c: Original project object immutability preserved');

  // ----------------------------------------------------------------
  // TEST 3: Component Copy, Duplicate, and Paste
  // ----------------------------------------------------------------
  const { doc: docWithDup, newProject: duplicatedProj } = duplicateProject(doc, targetProj.id);
  assert(duplicatedProj !== null, 'Test 3a: duplicateProject creates a new instance');
  assert(duplicatedProj?.id !== targetProj.id, 'Test 3b: Duplicated project has a fresh unique ID');
  assert(duplicatedProj?.title.includes('(Copy)'), 'Test 3c: Duplicated project title indicates copy');
  assert(docWithDup.projects.length === doc.projects.length + 1, 'Test 3d: Projects count incremented by 1');

  // Clipboard copy and paste
  const clipboardItem = copyComponent(doc.projects[1], 'project');
  assert(clipboardItem.type === 'project', 'Test 3e: copyComponent sets correct clipboard type');
  assert(clipboardItem.data.id === doc.projects[1].id, 'Test 3f: copyComponent deep clones project data');

  const { doc: docAfterPaste, newItem: pastedProj } = pasteComponent(doc, clipboardItem);
  assert(pastedProj !== null, 'Test 3g: pasteComponent succeeds');
  assert(pastedProj.id !== doc.projects[1].id, 'Test 3h: Pasted component receives cryptographically unique ID');
  assert(docAfterPaste.projects.length === doc.projects.length + 1, 'Test 3i: Pasted project successfully appended');

  // ----------------------------------------------------------------
  // TEST 4: Drag and Drop Reordering
  // ----------------------------------------------------------------
  const originalFirstId = doc.projects[0].id;
  const reorderedDoc = reorderProjects(doc, 0, 2);
  assert(reorderedDoc.projects[2].id === originalFirstId, 'Test 4a: reorderProjects shifts item from index 0 to 2');

  const originalFirstSectionId = doc.sections[0].id;
  const reorderedSecDoc = reorderSections(doc, 0, 1);
  assert(reorderedSecDoc.sections[1].id === originalFirstSectionId, 'Test 4b: reorderSections reorders page sections');

  // ----------------------------------------------------------------
  // TEST 5: Add an Achievement & MSME Grant
  // ----------------------------------------------------------------
  const msmeGrants = doc.achievements.filter((a) => a.grantAmount === '₹15 Lakh');
  assert(msmeGrants.length >= 2, 'Test 5a: Dual MSME 5.0 ₹15L grants properly represented');

  const { doc: docWithAch, achievement: newAch } = addAchievement(doc, {
    title: 'Smart India Hackathon Finalist',
    grantAmount: '₹1 Lakh',
    category: 'Hackathon',
  });
  assert(docWithAch.achievements.length === doc.achievements.length + 1, 'Test 5b: addAchievement increases count');
  assert(newAch.category === 'Hackathon', 'Test 5c: Achievement category applied');

  const docAfterAchDelete = deleteAchievement(docWithAch, newAch.id);
  assert(docAfterAchDelete.achievements.length === doc.achievements.length, 'Test 5d: deleteAchievement removes item');

  // ----------------------------------------------------------------
  // TEST 6: Save, Recover & Persistence
  // ----------------------------------------------------------------
  const jsonSnapshot = JSON.stringify(doc);
  const parseResult = parseAndValidateJSON(jsonSnapshot);
  assert(parseResult.success === true, 'Test 6a: JSON snapshot parses and validates');
  assert(parseResult.doc?.projects.length === doc.projects.length, 'Test 6b: Snapshot restores full project collection');

  // ----------------------------------------------------------------
  // TEST 7: 50-Step Undo & Redo History Stack
  // ----------------------------------------------------------------
  const history = new HistoryManager(doc);
  assert(!history.canUndo, 'Test 7a: Initial history has no undo steps');
  assert(!history.canRedo, 'Test 7b: Initial history has no redo steps');

  let currentDocState = doc;
  for (let i = 1; i <= 5; i++) {
    const res = addProject(currentDocState, { title: `Sequential Project ${i}` });
    currentDocState = res.doc;
    history.push(currentDocState);
  }

  assert(history.canUndo, 'Test 7c: canUndo is true after actions');
  assert(history.historyDepth.past === 5, 'Test 7d: 5 past steps recorded in history');

  const undoDoc1 = history.undo();
  assert(undoDoc1?.projects.length === currentDocState.projects.length - 1, 'Test 7e: undo steps backward');
  assert(history.canRedo, 'Test 7f: canRedo is true after undo');

  const redoDoc1 = history.redo();
  assert(redoDoc1?.projects.length === currentDocState.projects.length, 'Test 7g: redo restores forward state');

  // ----------------------------------------------------------------
  // TEST 8: Live One-Click Publishing Pipeline
  // ----------------------------------------------------------------
  const tsCode = generatePublishableTypeScript(doc);
  assert(tsCode.includes('export const PROJECTS: Project[]'), 'Test 8a: Generates valid TypeScript export for projects');
  assert(tsCode.includes('export const PERSONAL_INFO'), 'Test 8b: Generates valid TypeScript export for personal info');
  assert(tsCode.includes('export const SKILL_CATEGORIES'), 'Test 8c: Generates valid TypeScript export for skills');
  assert(tsCode.includes('export const JOURNEY'), 'Test 8d: Generates valid TypeScript export for journey');
  assert(tsCode.includes('export const ACHIEVEMENTS'), 'Test 8e: Generates valid TypeScript export for achievements');

  const auditReport = createPublishAuditReport(doc);
  assert(auditReport.projectCount >= 5, 'Test 8f: Audit report accurately calculates project totals');
  assert(auditReport.achievementCount >= 4, 'Test 8g: Audit report accounts for achievements');

  // ----------------------------------------------------------------
  // TEST 9: Deployment Failure & Input Safety
  // ----------------------------------------------------------------
  const invalidJson = '{ "version": "1.0.0", "projects": "not-an-array" }';
  const invalidParse = parseAndValidateJSON(invalidJson);
  assert(invalidParse.success === false, 'Test 9a: Malformed document correctly rejected by validation');
  assert(invalidParse.errors && invalidParse.errors.length > 0, 'Test 9b: Informative validation errors returned');

  // ----------------------------------------------------------------
  // TEST 10: Regression & Component Preservation
  // ----------------------------------------------------------------
  const heroSection = doc.sections.find((s) => s.id === 'hero');
  assert(heroSection?.enabled === true, 'Test 10a: Hero section initially enabled');
  const toggledDoc = toggleSection(doc, 'hero');
  const toggledHero = toggledDoc.sections.find((s) => s.id === 'hero');
  assert(toggledHero?.enabled === false, 'Test 10b: toggleSection toggles visibility');

  const langCat = doc.skills[0];
  const docWithSkill = addSkill(doc, langCat.id, {
    name: 'Rust',
    level: 'Advanced',
    experience: '2+ years',
    focus: 'Low-latency systems',
    tags: ['Rust', 'Systems'],
  });
  const updatedLangCat = docWithSkill.skills.find((c) => c.id === langCat.id);
  assert(updatedLangCat?.skills.some((s) => s.name === 'Rust') === true, 'Test 10c: addSkill adds skill to category');

  const docWithoutSkill = deleteSkill(docWithSkill, langCat.id, 'Rust');
  const postDeleteLangCat = docWithoutSkill.skills.find((c) => c.id === langCat.id);
  assert(postDeleteLangCat?.skills.some((s) => s.name === 'Rust') === false, 'Test 10d: deleteSkill removes skill');

  console.log('\n----------------------------------------------------');
  console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('----------------------------------------------------');

  if (failed > 0) {
    throw new Error(`${failed} tests failed!`);
  }
}

runTestSuite();
