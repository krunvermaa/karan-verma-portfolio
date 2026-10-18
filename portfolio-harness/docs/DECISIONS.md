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

<!-- Template
## ADR-NNN — <title>
- **Date:**  - **Context:**  - **Decision:**  - **Consequences:**
- **Dependency info (if any):** need · size · maintenance · license · network/install scripts
-->
