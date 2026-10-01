# Rule 6: Accessibility Standards (a11y)

> **Objective:** Ensure the assessment PWA is fully accessible, inclusive, and usable by everyone, regardless of ability or assistive technology.
> 
> **Standard:** Compliance with WCAG 2.1 AA standards across mobile, tablet, and desktop views.

---

## Core Accessibility Principles

1. **Semantic HTML First**
   - Use native interactive elements (`<button>`, `<a href>`, `<input type="radio">`, `<fieldset>`, `<legend>`).
   - Never replace native buttons with generic `<div>` or `<span>` click handlers without full keyboard and ARIA support.
   - Use landmark elements: `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`, and `<section>`.

2. **Visible Focus States**
   - All interactive elements must exhibit a prominent, high-contrast focus ring (`focus-visible:ring-2 focus-visible:ring-offset-2`).
   - Never suppress outline/focus rings without an equally accessible custom focus indicator.

3. **Color Contrast & Multi-Channel Signaling**
   - Maintain a minimum contrast ratio of **4.5:1** for standard body text and **3:1** for large text and UI components.
   - Never communicate state, score tiers, errors, or selections using color alone. Always pair color with text labels, shapes, or distinct icons.

4. **Keyboard & Touch Navigation**
   - All questions, answer options, navigation buttons, and modals must be completely navigable via keyboard (`Tab`, `Shift+Tab`, `Space`, `Enter`, Arrow keys).
   - Ensure a logical, linear tab order matching the visual flow of the page.
   - Touch targets must be at least **44 × 44px** with adequate spacing to avoid accidental touches.

5. **Screen Reader Support & ARIA**
   - Group question choices inside `<fieldset>` with the question title as `<legend>`.
   - Provide descriptive `aria-label` or `aria-labelledby` attributes for icon-only buttons (e.g. back navigation, close buttons).
   - Use `aria-live="polite"` for dynamic announcements (e.g. question counter updates, validation errors).
   - Mark decorative icons with `aria-hidden="true"`.

6. **Reduced Motion Support**
   - Respect system preference via `@media (prefers-reduced-motion: reduce)`.
   - Disable non-essential transitions and animations when users prefer reduced motion.

7. **Accessible Form Controls**
   - Every input and option card must have an associated `<label>` or explicit ARIA binding.
   - Error messages must be programmatically associated with inputs via `aria-describedby`.
