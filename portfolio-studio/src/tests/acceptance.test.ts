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
  console.log('PORTFOLIO STUDIO — AUTOMATED ACCEPTANCE TEST SUITE');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, testName: string, detail?: string) {
    if (condition) {
      console.log(`[PASS] ${testName}`);
      passed++;
    } else {
      console.error(`[FAIL] ${testName}${detail ? ` -> ${detail}` : ''}`);
      failed++;
    }
  }

  // ----------------------------------------------------------------
  // TEST 1: Initial Document Hydration & Schema Validation
  // ----------------------------------------------------------------
  const doc = createInitialDocument();
  const schemaValidation = validateDocumentSchema(doc);
  assert(schemaValidation.valid, 'Test 1: Initial document passes strict schema validation');
  assert(doc.projects.length >= 5, 'Test 1b: Initial document contains all curated projects');
  assert(doc.achievements.length >= 4, 'Test 1c: Initial document contains MSME grants and academic honors');
  assert(doc.sections.length >= 8, 'Test 1d: Initial document contains all 8 core portfolio sections');

  // ----------------------------------------------------------------
  // TEST 2: Unique ID Generation & Component Cloning
  // ----------------------------------------------------------------
  const id1 = generateId('proj');
  const id2 = generateId('proj');
  assert(id1 !== id2, 'Test 2a: Cryptographic ID generator produces distinct IDs');
  assert(id1.startsWith('proj_'), 'Test 2b: Generated IDs retain semantic prefixes');

  const sampleProject = doc.projects[0];
  const cloned = cloneWithNewId(sampleProject, 'proj');
  assert(cloned.id !== sampleProject.id, 'Test 2c: Cloned project has new unique ID');
  assert(cloned.title.includes('(Copy)'), 'Test 2d: Cloned project title indicates copy');

  // ----------------------------------------------------------------
  // TEST 3: Projects CMS Operations
  // ----------------------------------------------------------------
  const { doc: docWithNewProj, project: newProj } = addProject(doc, {
    title: 'Autonomous Multi-Agent Orchestrator',
    category: 'Distributed Systems',
  });
  assert(docWithNewProj.projects.length === doc.projects.length + 1, 'Test 3a: addProject increases count');
  assert(newProj.title === 'Autonomous Multi-Agent Orchestrator', 'Test 3b: Project attributes applied');

  const docWithUpdatedProj = updateProject(docWithNewProj, newProj.id, { tagline: 'Zero-latency pipeline' });
  const fetchedUpdated = docWithUpdatedProj.projects.find((p) => p.id === newProj.id);
  assert(fetchedUpdated?.tagline === 'Zero-latency pipeline', 'Test 3c: updateProject updates fields');

  const { doc: docWithDup, newProject: dupProj } = duplicateProject(docWithUpdatedProj, newProj.id);
  assert(dupProj !== null && dupProj.id !== newProj.id, 'Test 3d: duplicateProject creates separate entry');
  assert(docWithDup.projects.length === docWithUpdatedProj.projects.length + 1, 'Test 3e: Duplicate added to array');

  const docAfterDelete = deleteProject(docWithDup, newProj.id);
  assert(!docAfterDelete.projects.some((p) => p.id === newProj.id), 'Test 3f: deleteProject removes target');

  // ----------------------------------------------------------------
  // TEST 4: Drag-and-Drop Reordering
  // ----------------------------------------------------------------
  const firstProjId = doc.projects[0].id;
  const reorderedDoc = reorderProjects(doc, 0, 2);
  assert(reorderedDoc.projects[2].id === firstProjId, 'Test 4a: reorderProjects shifts item from index 0 to 2');

  const firstSecId = doc.sections[0].id;
  const reorderedSecDoc = reorderSections(doc, 0, 1);
  assert(reorderedSecDoc.sections[1].id === firstSecId, 'Test 4b: reorderSections reorders page sections');

  // ----------------------------------------------------------------
  // TEST 5: Achievements & Grants CMS (Dual MSME 5.0)
  // ----------------------------------------------------------------
  const msmeGrants = doc.achievements.filter((a) => a.grantAmount === '₹15 Lakh');
  assert(msmeGrants.length >= 2, 'Test 5a: Dual MSME 5.0 ₹15L grants properly represented');

  const { doc: docWithAch, achievement: newAch } = addAchievement(doc, {
    title: 'Smart India Hackathon Finalist',
    grantAmount: '₹1 Lakh',
    category: 'Hackathon',
  });
  assert(docWithAch.achievements.length === doc.achievements.length + 1, 'Test 5b: addAchievement increases count');

  const docAfterAchDelete = deleteAchievement(docWithAch, newAch.id);
  assert(docAfterAchDelete.achievements.length === doc.achievements.length, 'Test 5c: deleteAchievement removes item');

  // ----------------------------------------------------------------
  // TEST 6: Clipboard Operations (Copy & Paste)
  // ----------------------------------------------------------------
  const clipboardItem = copyComponent(doc.projects[1], 'project');
  assert(clipboardItem.type === 'project', 'Test 6a: copyComponent sets correct type');
  assert(clipboardItem.data.id === doc.projects[1].id, 'Test 6b: copyComponent stores element data');

  const { doc: docAfterPaste, newItem: pastedProj } = pasteComponent(doc, clipboardItem);
  assert(pastedProj !== null, 'Test 6c: pasteComponent succeeds');
  assert(pastedProj.id !== doc.projects[1].id, 'Test 6d: Pasted component has fresh unique ID');
  assert(docAfterPaste.projects.length === doc.projects.length + 1, 'Test 6e: Pasted project added to collection');

  // ----------------------------------------------------------------
  // TEST 7: 50-Step Undo / Redo History Stack
  // ----------------------------------------------------------------
  const history = new HistoryManager(doc);
  assert(!history.canUndo, 'Test 7a: Initial history has no undo steps');
  assert(!history.canRedo, 'Test 7b: Initial history has no redo steps');

  // Push 5 mutations
  let currentDocState = doc;
  for (let i = 1; i <= 5; i++) {
    const res = addProject(currentDocState, { title: `Sequential Project ${i}` });
    currentDocState = res.doc;
    history.push(currentDocState);
  }

  assert(history.canUndo, 'Test 7c: canUndo is true after actions');
  assert(history.historyDepth.past === 5, 'Test 7d: 5 past steps recorded');

  const undoDoc1 = history.undo();
  assert(undoDoc1?.projects.length === currentDocState.projects.length - 1, 'Test 7e: undo steps backward');
  assert(history.canRedo, 'Test 7f: canRedo is true after undo');

  const redoDoc1 = history.redo();
  assert(redoDoc1?.projects.length === currentDocState.projects.length, 'Test 7g: redo restores forward state');

  // ----------------------------------------------------------------
  // TEST 8: Section Toggling & Visibility
  // ----------------------------------------------------------------
  const heroSection = doc.sections.find((s) => s.id === 'hero');
  assert(heroSection?.enabled === true, 'Test 8a: Hero section initially enabled');

  const toggledDoc = toggleSection(doc, 'hero');
  const toggledHero = toggledDoc.sections.find((s) => s.id === 'hero');
  assert(toggledHero?.enabled === false, 'Test 8b: toggleSection toggles visibility to false');

  // ----------------------------------------------------------------
  // TEST 9: Skills Matrix Operations
  // ----------------------------------------------------------------
  const langCat = doc.skills[0];
  const docWithSkill = addSkill(doc, langCat.id, {
    name: 'Rust',
    level: 'Advanced',
    experience: '2+ years',
    focus: 'Low-latency systems',
    tags: ['Rust', 'Systems'],
  });
  const updatedLangCat = docWithSkill.skills.find((c) => c.id === langCat.id);
  assert(updatedLangCat?.skills.some((s) => s.name === 'Rust') === true, 'Test 9a: addSkill adds skill to category');

  const docWithoutSkill = deleteSkill(docWithSkill, langCat.id, 'Rust');
  const postDeleteLangCat = docWithoutSkill.skills.find((c) => c.id === langCat.id);
  assert(postDeleteLangCat?.skills.some((s) => s.name === 'Rust') === false, 'Test 9b: deleteSkill removes skill');

  // ----------------------------------------------------------------
  // TEST 10: Publishing & Backup Serialization
  // ----------------------------------------------------------------
  const tsCode = generatePublishableTypeScript(doc);
  assert(tsCode.includes('export const PROJECTS: Project[]'), 'Test 10a: Generates valid TypeScript export for projects');
  assert(tsCode.includes('export const PERSONAL_INFO'), 'Test 10b: Generates valid TypeScript export for personal info');
  assert(tsCode.includes('export const SKILL_CATEGORIES'), 'Test 10c: Generates valid TypeScript export for skills');

  const jsonString = JSON.stringify(doc);
  const parseResult = parseAndValidateJSON(jsonString);
  assert(parseResult.success === true, 'Test 10d: JSON backup snapshot parses and passes validation');

  const auditReport = createPublishAuditReport(doc);
  assert(auditReport.projectCount >= 5, 'Test 10e: Audit report accurately calculates project totals');
  assert(auditReport.achievementCount >= 4, 'Test 10f: Audit report accounts for achievements');

  console.log('\n----------------------------------------------------');
  console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('----------------------------------------------------');

  if (failed > 0) {
    throw new Error(`${failed} tests failed!`);
  }
}

runTestSuite();
