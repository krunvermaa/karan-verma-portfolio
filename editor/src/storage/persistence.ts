import { StudioDocument } from '../model/types';
import { validateDocumentSchema } from '../model/documentModel';

const DRAFT_STORAGE_KEY = 'portfolio_editor_draft_v1';
const LAST_SAVED_KEY = 'portfolio_editor_last_saved_v1';

export function saveDraft(doc: StudioDocument): boolean {
  try {
    const serialized = JSON.stringify(doc);
    localStorage.setItem(DRAFT_STORAGE_KEY, serialized);
    const timestamp = new Date().toISOString();
    localStorage.setItem(LAST_SAVED_KEY, timestamp);
    return true;
  } catch (err) {
    console.error('Failed to save draft to localStorage:', err);
    return false;
  }
}

export function loadDraft(): StudioDocument | null {
  try {
    const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    const validation = validateDocumentSchema(parsed);
    if (!validation.valid) {
      console.warn('Draft found in storage but failed schema validation:', validation.errors);
      return null;
    }

    return parsed as StudioDocument;
  } catch (err) {
    console.error('Failed to load draft from localStorage:', err);
    return null;
  }
}

export function clearDraft(): void {
  try {
    localStorage.removeItem(DRAFT_STORAGE_KEY);
    localStorage.removeItem(LAST_SAVED_KEY);
  } catch (err) {
    console.error('Failed to clear draft:', err);
  }
}

export function getLastSavedTimestamp(): string | null {
  try {
    return localStorage.getItem(LAST_SAVED_KEY);
  } catch {
    return null;
  }
}

export function hasUnsavedChanges(currentDoc: StudioDocument, baselineDoc: StudioDocument): boolean {
  try {
    return JSON.stringify(currentDoc) !== JSON.stringify(baselineDoc);
  } catch {
    return false;
  }
}
