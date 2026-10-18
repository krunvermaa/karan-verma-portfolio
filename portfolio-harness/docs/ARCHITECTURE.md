# ARCHITECTURE.md — Structure & Component Map

Keep accurate; update on any structural or component-level change. Short and factual.

## Stack
React 19 · TypeScript 5.x · Vite 8 · Tailwind CSS v4 · Motion · Lucide Icons. Static output (`dist/`).
Test stack (proposed, pending DECISIONS entries): Vitest · React Testing Library · jsdom · Playwright · axe-core.

## Scripts
| Script | Purpose |
|---|---|
| `npm run dev` | Dev server, http://localhost:3000 |
| `npm run lint` | TypeScript typecheck |
| `npm run build` | Production build → `dist/` |
| `npm run test:*`, `check:dist`, `verify` | See `docs/TESTING.md` §6 |

## Folder tree
```
public/            PUBLIC static assets only (favicon.svg, robots.txt)
scripts/           check-dist.mjs (post-build leak check)
tests/             setup.ts · integration/ (*.int.test.tsx) · e2e/ (*.spec.ts)
src/
  components/      <Name>.tsx + <Name>.test.tsx (unit, white box)
  data/            portfolioData.ts (+ .test.ts)
  types/           index.ts (barrel), portfolio.ts
  App.tsx · index.css · main.tsx
docs/              process, security, testing, deployment docs (never shipped)
.env.example       variable names only (committed); real values never committed
index.html · vite.config.ts · playwright.config.ts (after approval)
```
Optional `src/hooks/`, `src/utils/` are created on first use and listed here.

## Component map
| Component | Role |
|---|---|
| `Navbar` | Frosted-glass pill header |
| `Hero` | Editorial typography launchpad |
| `AboutSection` | Identity, philosophy, credentials |
| `ProjectsSection` | Multi-view project archive |
| `FrostedFolderFan` | 3D rotating jewel-toned folder fan |
| `HangingCardsShowcase` | Suspended clothesline project display |
| `MoovFolderDeepDive` | Translucent folder inspector with tabs |
| `CaseStudyModal` | Deep-dive modal dossier |
| `ProjectMockup` | Interactive micro-simulators per project |
| `SkillsSection` | Studio pinboard skill classification |
| `JourneySection` | Career flight log and milestones |
| `ResumeSection` | Curriculum vitae dossier |
| `DeveloperLicenseBadge` | Tactile verification credential badge |
| `ContactSection` | Contact desk and live IST clock |
| `Footer` | Colophon and anchors |
| `ThemeToggle` | Day/night spring switch |

## Data flow
`portfolioData.ts` (typed by `portfolio.ts`) → `App.tsx` and components → rendered. No hard-coded content in components. No secrets anywhere in this flow.

## Theme system
Day (light) and Night (Obsidian) via tokens in `src/index.css`, plus a section-by-section ambient tint engine. Verify both themes on every UI change.

## Server-side (none yet)
If a feature needs a secret, add a host serverless function (see `docs/SECURITY.md` §4.2) and document it here: path, method, env var names, input schema.

## Shared files (Orchestrator-owned by default)
`src/App.tsx`, `src/index.css`, `src/data/portfolioData.ts`, `src/types/*`, `package.json`, `vite.config.ts`, `.env.example`, host config.

## Structure change log
| Date | Change | Commit |
|---|---|---|
| — | Initial map from repo state | — |
