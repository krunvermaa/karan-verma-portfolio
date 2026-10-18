# DECISIONS.md — Short ADRs

Log any non-obvious technical/design choice, new dependency, deviation from the harness, hosting change, or security trade-off. A few lines each.

## ADR-000 — Adopt the AI agent harness (v2)
- **Date:** YYYY-MM-DD
- **Context:** Parallel sub-agents, token efficiency, strict structure, regular commits, per-iteration deploys, staged testing (unit, integration, system, black/white box), secrets and code-leak protection.
- **Decision:** `harness.md` is the operating manual; `docs/SECURITY.md` overrides it.
- **Consequences:** Agents follow the lifecycle, ownership, testing stages, secret rules and required-docs rules.

## ADR-001 — Secrets are server-side only
- **Date:** YYYY-MM-DD
- **Context:** Static Vite site; all `VITE_*` values and bundled code are public.
- **Decision:** No secrets in frontend/repo. Secrets live in host env and are used by server-side functions only.
- **Consequences:** Features needing keys require a serverless function and a new ADR naming the host.

## ADR-002 — Proposed test and security tooling (pending approval)
- **Context:** Need unit/integration/E2E coverage and leak checks.
- **Proposed devDependencies:** vitest, @vitest/coverage-v8, jsdom, @testing-library/react, @testing-library/user-event, @testing-library/jest-dom, @playwright/test, @axe-core/playwright. Optional tool: gitleaks (binary, not an npm dependency).
- **Per-dependency info to fill before install:** need · size · maintenance · license · install scripts · network behavior.
- **Status:** `TODO(karan)` approve.

## ADR-003 — Portfolio Studio visual editor architecture
- **Date:** 2026-10-18
- **Context:** User requested a private, visual, drag-and-drop portfolio editor linked to the existing portfolio, located inside `PORTFOLIO/portfolio-studio/`. Must preserve the original website, reproduce exact appearance, support component-level copy/paste/duplicate, drag-and-drop reordering, structured CMS, undo/redo, autosave, and publishing without breaking git or the live site.
- **Decision:**
  - Create `portfolio-studio/` with clean React 19 + TypeScript + Tailwind CSS architecture.
  - Native HTML5 Drag and Drop engine for zero-dependency, ultra-reliable reordering.
  - In-memory & clipboard-aware component copier for cards, achievements, and sections with unique ID generation.
  - Shared data contracts importing `src/types/portfolio.ts` and `src/data/portfolioData.ts`.
  - Durable `localStorage` draft persistence with debounced autosave, 50-step undo/redo stack, and single-click export/sync publishing.
  - Top toolbar with responsive viewport switching (Desktop 1280px, Tablet 768px, Mobile 375px), left multi-tab CMS & structure tree, central interactive canvas, and right inspector panel.
## ADR-004 — Direct-portfolio visual editor with light theme and one-click live Vercel publishing
- **Date:** 2026-10-18
- **Context:** User requested a clean, light-theme visual editor (`editor/`) that directly renders the actual existing portfolio components rather than an isolated recreation, with native drag-and-drop, inline title editing, contextual action rings (Copy, Duplicate, Delete), and a 1-click live publish pipeline that syncs `src/data/portfolioData.ts` and pushes to git (`main`) to automatically trigger Vercel production deployment (`https://karan-verma-portfolio.vercel.app`).
- **Decision:**
  - Create `editor/` directory running on port 3001 using Vite + React 19 + Tailwind CSS + Lucide icons.
  - Light-theme modern interface (`#FFFFFF`, `#F8FAFC`, `#E2E8F0`, slate-900 typography, crisp borders).
  - Direct import and rendering of existing portfolio components (`Hero`, `HangingCardsShowcase`, `MoovFolderDeepDive`, `AboutSection`, `SkillsSection`, `JourneySection`, `ResumeSection`, `ContactSection`, `Navbar`, `Footer`) wrapped with selection rings, drag handles, and floating action bars.
  - Native HTML5 Drag and Drop reordering for cards, achievements, milestones, and sections.
  - Component Copy, Cut, Paste, and Duplicate with cryptographically unique IDs (`generateId`).
  - 50-step undo/redo stack (`HistoryManager`), localStorage autosave debouncing, and JSON snapshot backup/restore.
  - Vite server middleware plugin (`livePublishPlugin`) on `POST /api/publish` that creates `.backup.ts`, updates `src/data/portfolioData.ts`, and automatically executes `git add`, `git commit`, and `git push origin main` to deploy live to Vercel without manual terminal commands.
- **Consequences:** Karan has a permanent, user-friendly visual editor at `http://localhost:3001` that directly edits and live-publishes his real portfolio with 1-click zero friction.

