// tests/setup.ts — shared test setup (Vitest + React Testing Library + jsdom)
// Requires (once approved in ADR-002): @testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

// jsdom lacks these browser APIs used by scroll spy / theme logic. Mock, don't call real ones.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}
(globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = MockIntersectionObserver;

if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}
