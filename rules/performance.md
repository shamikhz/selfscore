# Rule 3: Performance & Core Web Vitals

> **Objective:** Treat performance as a first-class product requirement.
> 
> **Core Mandate:** **Performance must never be sacrificed for unnecessary visual effects.** The application must load instantly, respond effortlessly to touch, and run smoothly on modest mobile hardware and flaky mobile networks.

---

## Performance Requirements

1. **Mobile-first performance is mandatory.**
   Benchmark, optimize, and profile against mid-to-low-tier mobile hardware (e.g. Moto G / budget Android devices) and congested 3G/4G connections before assessing high-end desktop speeds.
2. **Minimize client-side JavaScript.**
   Every kilobyte of shipped JavaScript requires parse, compile, and execution time on mobile CPUs. Keep runtime bundles lean.
3. **Prefer Server Components where appropriate.**
   Default to React Server Components (RSC) for landing, explore, legal, static marketing pages, and outer layouts to eliminate unnecessary client hydration overhead.
4. **Use Client Components only when interaction requires them.**
   Restrict `'use client'` strictly to interactive leaves (e.g. `QuestionCard`, `AnswerOption`, interactive score sliders) rather than marking entire page routes as client components.
5. **Lazy-load non-critical components.**
   Defer components that are below the fold, hidden inside drawers, or only needed post-interaction (e.g., share dialogs, detailed score breakdowns, feedback modals).
6. **Avoid large UI libraries.**
   Do not import heavyweight component libraries or monolithic CSS/JS frameworks (e.g., MUI, Chakra, Ant Design). Build lightweight, purpose-built components with Vanilla CSS.
7. **Optimize images and use modern formats.**
   Serve assets exclusively in AVIF or WebP with responsive `srcset` resolutions. Minify SVG icons and inline small critical vector glyphs.
8. **Avoid unnecessary animations.**
   Do not introduce continuous background animations, loops, or complex physics springs that trigger continuous compositor re-paints and drain mobile batteries.
9. **Avoid layout shifts.**
   Achieve a Cumulative Layout Shift (CLS) as close to **0.00** as possible. Content must never jump or reflow as assets, fonts, or scripts finish loading.
10. **Reserve dimensions for media and advertisements.**
    Always set explicit `width`, `height`, `aspect-ratio`, or `min-height` on containers holding images, dynamic illustrations, and ad placements.
11. **Never allow advertisements to cause major layout jumps.**
    Wrap all ad components (`TopAd`, `ResultAd`, `AdSlot`) inside rigidly reserved slots with CSS `contain: layout size` so delayed ad auctions never displace user content.
12. **Keep assessment question rendering lightweight.**
    Question transitions must happen in under 16ms (60fps). Avoid re-mounting heavy trees between questions; update question props in-place.
13. **Do not load all assessment data into the initial page unnecessarily.**
    The root bundle must never contain the question banks, rubrics, and insights of all 13+ assessments.
14. **Load assessment-specific data when needed.**
    Fetch or dynamically import `/assessments/<slug>/` definitions strictly when the user navigates to that specific assessment route.
15. **Cache static assets appropriately.**
    Use aggressive cache headers (`Cache-Control: public, max-age=31536000, immutable`) for content-hashed JS, CSS, fonts, and static icons.
16. **Use the PWA service worker carefully.**
    Implement clear caching boundaries. Never allow an over-aggressive service worker cache to trap users on obsolete builds or break routing.
17. **Do not cache stale assessment results incorrectly.**
    Dynamic user results and generated score reports must always invalidate appropriately so users never view outdated or mismatched evaluations.
18. **Keep local storage operations lightweight.**
    `localStorage` calls are synchronous and block the main thread. Keep payloads small, avoid repeated reads inside render loops, and deserialize only what is needed.
19. **Debounce expensive operations where appropriate.**
    Debounce or throttle frequent events (scroll, resize, rapid repeated taps) to prevent event handler saturation.
20. **Avoid unnecessary React re-renders.**
    Structure component state locally so answering a question or ticking a box does not re-render parent layouts, headers, or sibling widgets.
21. **Use memoization only when it provides measurable value.**
    Do not wrap every function or object in `useMemo` or `useCallback` speculatively. Profile first; only apply memoization to heavy computational loops or referential equality blockers.
22. **Test on low-end Android devices and slow mobile networks.**
    Regularly test via Chrome DevTools Mobile Emulation with 4x CPU slowdown and "Fast 3G" or "Slow 4G" network throttling profiles.
23. **Target excellent Core Web Vitals.**
    Maintain scores in the "Good" range (green thresholds) across all three primary Google Core Web Vitals metrics.
24. **Avoid dependencies that significantly increase bundle size without strong justification.**
    Inspect package cost with tools like Bundlephobia before adding any npm package. If a utility can be written in 15 lines of vanilla TypeScript, do not install a library.
25. **Measure performance before optimizing speculative bottlenecks.**
    Base performance refactoring on real profiles (Lighthouse, Web Vitals, Performance panel) rather than premature micro-optimizations.

---

## Core Web Vitals Targets

| Metric | Target (Mobile) | Hard Ceiling | Strategy |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | `< 1.5s` | `< 2.5s` | Server render hero text, preload primary fonts, inline critical CSS, prioritize LCP image |
| **INP** (Interaction to Next Paint) | `< 100ms` | `< 200ms` | Keep event handlers under 50ms, avoid synchronous storage locks, split long tasks |
| **CLS** (Cumulative Layout Shift) | `0.00` | `< 0.05` | Reserve layout dimensions for all ads, media, and dynamic cards; use `font-display: optional` or swap fallbacks |

---

## Architectural Performance Patterns

### 1. Dynamic Assessment Loading

```typescript
// Good: Dynamic on-demand assessment loading in app/assessment/[slug]/page.tsx
export async function getAssessmentData(slug: string) {
  switch (slug) {
    case 'iq':
      return await import('@/assessments/iq');
    case 'personality':
      return await import('@/assessments/personality');
    default:
      throw new Error(`Assessment not found: ${slug}`);
  }
}
```
*Result:* Visiting `/assessment/iq` only downloads the IQ question dataset, keeping initial bundle size minimal.

---

### 2. Zero-Shift Ad Placement Pattern

```css
/* Defensive container for Ad Slots */
.ad-slot-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px; /* Pre-allocated mobile MREC dimensions */
  width: 100%;
  max-width: 336px;
  margin: 1.5rem auto;
  contain: layout size; /* Isolates layout reflows from the rest of the DOM */
  background-color: var(--color-surface-subtle);
  border-radius: var(--radius-md);
}
```

---

### 3. Server vs. Client Component Boundaries

```
[Server Component: AssessmentLayout (Static Shell, Header, SEO metadata)]
  │
  ├── [Server Component: AssessmentIntro (Static instructions & benefits)]
  │
  └── [Client Component: QuestionRunner ('use client' - State, Timer, Input)]
        │
        ├── [Client Component: AnswerOption (Tap handler, active state)]
        └── [Client Component: ProgressBar (Animated CSS width transition)]
```

---

### 4. Storage Hygiene Protocol

- **Never** read `localStorage.getItem()` inside an active render function; read it once during initial hydration or hook initialization.
- **Never** store redundant state: serialize only `{ [questionId]: answerId }`, not the full question objects or text strings.
- **Throttle / Debounce** autosave actions when handling rapid continuous input.
