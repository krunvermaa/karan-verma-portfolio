# TASKS.md — Live Task Board

Updated by the Orchestrator at iteration start, on every task state change, and at close. First file read after `harness.md`.

## Current iteration
- **Iteration:** 003 — `iter/003-visual-portfolio-editor-direct-live`
- **Goal:** Visual Drag-and-Drop Editor (`editor/`) directly rendering existing portfolio components with light-theme UI and 1-click live Vercel production deployment.
- **Status:** completed

### Test plan for this iteration
| Stage | What | Status |
|---|---|---|
| S1 unit (white box) | Document model, selection state, drag-and-drop state reducer, copy/paste/duplicate logic, serialization | Passed |
| S2 integration | Studio shell + direct component rendering, selection rings, drag handles, inspector | Passed |
| S3 system (black box) | Visual element selection, inline editing, drag-and-drop reordering, copy/cut/paste, undo/redo, persistence | Passed |
| S4 acceptance | 10 acceptance tests: preservation, editing, duplication, drag-and-drop, history, live publish, schema | Passed (45/45) |
| S5 live smoke | Portfolio Editor dev server (port 3001) + main portfolio dev server (port 3000) validation | Passed (HTTP 200) |

### Tasks
| ID | Task | Owner (role) | Owned files | State | Notes |
|---|---|---|---|---|---|
| 003-1 | Cleanup legacy prototype & establish `editor/` architecture | Agent 1 (Arch Auditor) | `package.json`, `.gitignore` | done | Clean baseline |
| 003-2 | Direct Component Integration: Render existing portfolio sections in live canvas | Agent 2 (UI Analyst) | `editor/src/preview/*` | done | 100% preservation |
| 003-3 | Light-Theme Visual Workspace: Toolbar, Canvas, Sidebar, Inspector | Agent 3 (Editor Engineer) | `editor/src/ui/*` | done | User-friendly light UI |
| 003-4 | Core Editing Engine: Drag & drop, clone with new ID, copy/cut/paste | Agent 4 (Content Engineer) | `editor/src/model/*` | done | Immutable pure ops |
| 003-5 | One-Click Live Vercel Publishing & Persistence: Server middleware + git push | Agent 5 (Persistence Engineer) | `editor/src/storage/*`, `editor/vite.config.ts` | done | Auto git commit & push |
| 003-6 | QA, Type Check & Acceptance Testing: 45 automated assertions, zero errors | Agent 6 (QA & Security) | `editor/src/tests/*` | done | All 45 tests passing |

States: `todo` · `in-progress` · `blocked` · `review` · `done`

## Backlog
- (Karan adds goals; Orchestrator groups them into iterations)

## Completed iterations
| # | Slug | Date | Commit/Tag | Live URL |
|---|---|---|---|---|
| 001 | `iter/001-responsive-realignment` | 2026-10-18 | `4163ae9` | `http://localhost:3000` |
| 002 | `iter/002-portfolio-studio-visual-editor` | 2026-10-18 | `HEAD` | `http://localhost:3001` |
| 003 | `iter/003-visual-portfolio-editor-direct-live` | 2026-10-18 | `HEAD` | `http://localhost:3001` |

## Session handoff (if a session must end mid-iteration)
- Last completed step: Visual Drag-and-Drop Editor (`editor/`) fully implemented and running at `http://localhost:3001`. Features direct existing portfolio component rendering, light-theme UI, drag-and-drop reordering, copy/duplicate/paste with unique IDs, 50-step undo/redo, autosave, and 1-click live Vercel production publishing via Vite middleware `git push origin main`. All 45 acceptance test assertions passed.
- Next step: All tasks completed and verified.
- Open risks: none


