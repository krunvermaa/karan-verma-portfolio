import { StudioDocument, HistoryState } from './types';
import { deepClone } from './documentModel';

const MAX_HISTORY_STEPS = 50;

export class HistoryManager {
  private state: HistoryState;

  constructor(initialDocument: StudioDocument) {
    this.state = {
      past: [],
      present: deepClone(initialDocument),
      future: [],
    };
  }

  get current(): StudioDocument {
    return this.state.present;
  }

  get canUndo(): boolean {
    return this.state.past.length > 0;
  }

  get canRedo(): boolean {
    return this.state.future.length > 0;
  }

  get historyDepth(): { past: number; future: number } {
    return {
      past: this.state.past.length,
      future: this.state.future.length,
    };
  }

  push(newDoc: StudioDocument): StudioDocument {
    // If identical, don't create history entry
    if (JSON.stringify(newDoc) === JSON.stringify(this.state.present)) {
      return this.state.present;
    }

    const newPast = [...this.state.past, deepClone(this.state.present)];
    if (newPast.length > MAX_HISTORY_STEPS) {
      newPast.shift(); // Evict oldest
    }

    this.state = {
      past: newPast,
      present: deepClone(newDoc),
      future: [], // New action invalidates future
    };

    return this.state.present;
  }

  undo(): StudioDocument | null {
    if (!this.canUndo) return null;

    const previous = this.state.past[this.state.past.length - 1];
    const newPast = this.state.past.slice(0, this.state.past.length - 1);

    this.state = {
      past: newPast,
      present: previous,
      future: [deepClone(this.state.present), ...this.state.future],
    };

    return this.state.present;
  }

  redo(): StudioDocument | null {
    if (!this.canRedo) return null;

    const next = this.state.future[0];
    const newFuture = this.state.future.slice(1);

    this.state = {
      past: [...this.state.past, deepClone(this.state.present)],
      present: next,
      future: newFuture,
    };

    return this.state.present;
  }

  reset(doc: StudioDocument): void {
    this.state = {
      past: [],
      present: deepClone(doc),
      future: [],
    };
  }
}
