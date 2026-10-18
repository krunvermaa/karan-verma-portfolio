# TESTING.md — Test Strategy & Stages

Goal: catch defects at the cheapest stage, keep token use low, never ship untested code.

## 1. Test types and what they mean here

| Type | Definition | Box | Tooling (proposed) | Location |
|---|---|---|---|---|
| **Unit** | One function/component/hook in isolation | **White box**: written with knowledge of internals; cover branches, edge cases, error paths | Vitest + React Testing Library + jsdom | `src/**/<Name>.test.ts(x)` |
| **Integration** | Several units together: data → components, theme toggle → tokens, modal open/close flow, scroll spy in `App` | White/gray box | Vitest + React Testing Library | `tests/integration/*.int.test.tsx` |
| **System (E2E)** | Whole built app in a real browser | **Black box**: only what a visitor sees/does; no internals | Playwright against `vite preview` | `tests/e2e/*.spec.ts` |
| **Acceptance** | Meets the iteration goal and quality bar | Black box | Checklist (§4) + axe + Lighthouse | reported in handoff |
| **Smoke (live)** | Critical path on the deployed URL | Black box | Playwright with `SMOKE_URL` | `tests/e2e/smoke.spec.ts` |
| **Regression** | Reproduces a past bug | Either | Whichever level finds it fastest | next to the code |

**White box** = tests designed from the code: every branch, boundary, error handler, hook state transition, data validator.
**Black box** = tests designed from the requirement: "a visitor clicks Night toggle and the page turns dark", with no knowledge of component internals. Black-box tests query by role/label/text, never by class names or implementation details.

## 2. Stages (who, when, what)

| Stage | When | Run | Pass criteria |
|---|---|---|---|
| **S1 Task (unit, white box)** | End of each sub-agent task, before commit | `npm run test:unit -- <changed paths>` | All pass; ≥ 80% lines / 70% branches on changed code; no skipped tests |
| **S2 Integration** | After merging agent branches | `npm run test:integration` | All pass |
| **S3 System (E2E, black box)** | Before release, on production build | `npm run build && npm run test:e2e` | All pass in Chromium; mobile viewport project passes; Day and Night both covered |
| **S4 Acceptance gate** | Before merge to `main` | `npm run verify` + checklist §4 | Everything green; Security Reviewer PASS |
| **S5 Live smoke** | Right after deploy | `SMOKE_URL=<live> npm run test:smoke` | Critical path green; headers present; no `.map` served |
| **Regression** | Every bug fix | Failing test first, then fix | Test fails before fix, passes after |

Token rule: run the **narrowest** command first; run full suites only at S2–S5.

## 3. What to test in this portfolio

**Unit (S1)**
- `portfolioData.ts`: required fields present, no empty strings, valid URLs/dates, unique ids, no placeholder text left (`TODO(karan)` allowed only in drafts, never on `main` for published fields).
- Components: render with fixture props, theme variants, conditional branches (empty/long content), event handlers (click, keyboard, drag callbacks), aria attributes.
- `ThemeToggle`: toggles state, persists choice if implemented, reflects `aria-pressed`/label.
- Hooks/utils: all branches, boundaries, invalid input.
- IST clock (`ContactSection`): use fake timers; assert formatting and timezone offset.

**Integration (S2)**
- `App` renders all sections from `portfolioData`; scroll spy highlights the active nav item (mock `IntersectionObserver`).
- Project card → `CaseStudyModal` open, focus trap, Escape closes, focus returns.
- Theme toggle changes root attribute/class and tokens apply across sections.
- `ProjectsSection` view switching (folder fan / clothesline / archive) keeps selected project state.

**System / black box (S3)**
- Page loads, no console errors, no failed requests.
- Nav links scroll to the right sections; hero visible; each section reachable.
- Day/Night toggle works and persists across reload (if designed to).
- Open a case study, read it, close with keyboard.
- Keyboard-only tab walk reaches all interactive controls with visible focus.
- Mobile viewport (375×812): no horizontal scroll, nav usable.
- `prefers-reduced-motion` emulation: no essential content depends on animation.
- Accessibility: `@axe-core/playwright` has zero serious/critical violations on key sections.
- Performance: Lighthouse (or equivalent) budget — Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95 (record actual numbers in the handoff).
- Contact: any form/mail link works without exposing keys (see `SECURITY.md`).

**Security tests (part of S3/S4, black + white box)**
- `npm run check:dist`: no `.map` files, no secret-looking strings, no `localhost`/internal URLs in `dist/`.
- Black-box: fetch `/.env`, `/.git/config`, `/package.json`, `/harness.md`, `/docs/` on the preview/live URL → expect 404 (not 200).
- Response headers include CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and frame protection (on live host).
- Any serverless function: rejects wrong method/origin, validates input, rate-limit behaves, never echoes secrets, errors don't leak stack traces.

## 4. Acceptance checklist (S4)
- [ ] Iteration goal demonstrably met (black box walk-through)
- [ ] Day and Night, 375 / 768 / 1280 widths
- [ ] Keyboard + focus + reduced motion
- [ ] Axe clean; contrast target met
- [ ] No layout shift (CLS ≈ 0), interactions feel < 50 ms
- [ ] Bundle size not materially worse (note before/after)
- [ ] `check:dist` and secret scan clean
- [ ] Docs updated

## 5. Conventions
- Names: `describe('<Unit>')`, `it('does X when Y')`.
- Arrange–Act–Assert; one behaviour per test; no logic in tests.
- Prefer queries by role/label/text (`getByRole`). Avoid snapshot tests for animated trees; use targeted assertions.
- Mock: network, timers, `IntersectionObserver`, `matchMedia`, animation frames. Never call real third-party services.
- Fixtures contain fake data only. **Never** put real keys, real personal data or `.env` values in tests, snapshots, traces or reports.
- Don't commit `coverage/`, `playwright-report/`, `test-results/`, traces or videos (they can contain page content).
- Flaky test = bug: fix or quarantine with a TASKS entry within the iteration; never ignore.

## 6. Proposed scripts (Orchestrator adds in iteration 001)

```json
{
  "scripts": {
    "lint": "tsc --noEmit",
    "test": "vitest run",
    "test:unit": "vitest run src",
    "test:integration": "vitest run tests/integration",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test --grep-invert @smoke",
    "test:smoke": "playwright test --grep @smoke",
    "check:dist": "node scripts/check-dist.mjs",
    "check:audit": "npm audit --omit=dev",
    "verify": "npm run lint && npm run test:unit && npm run test:integration && npm run build && npm run check:dist && npm run test:e2e"
  }
}
```
Keep the existing `dev`, `build` and `lint` scripts as they are if they already work; only add what's missing.

Proposed devDependencies (each needs a `DECISIONS.md` entry: need, size, maintenance, license, install scripts, network behavior): `vitest`, `@vitest/coverage-v8`, `jsdom`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`, `@playwright/test`, `@axe-core/playwright`.

## 7. Defect handling
1. Reproduce with a failing test (narrowest level).
2. Assign to the owner of the file.
3. Fix, verify the test passes, run the stage again.
4. Log notable defects in the handoff report; recurring classes go to `DECISIONS.md`.
