# Rule 2: UI & UX Design System

> **Objective:** Design the application as a polished, human-designed consumer product, not an AI-generated template.
> 
> **Emotional North Star:** The overall feeling must be **calm, trustworthy, modern, friendly, intelligent, and human-designed**. The application should feel closer to a polished consumer wellness/self-discovery product than an enterprise dashboard.

---

## Core UX Principles

1. **Mobile-first is mandatory.**
   Every layout, component, and interaction is designed, tested, and optimized for mobile screens first before adapting to tablets or desktops.
2. **Optimize every important interaction for one-handed mobile use.**
   Place primary buttons, answer options, and critical navigation controls within the natural thumb zone (lower two-thirds of the viewport).
3. **Keep navigation obvious and shallow.**
   Navigation paths must never exceed 2–3 levels. Users should always know where they are, where they came from, and how to get back in one tap.
4. **Use generous whitespace.**
   Give content room to breathe. Uncluttered spacing reduces cognitive fatigue during multi-step assessments.
5. **Establish a strong visual hierarchy.**
   Guide the eye effortlessly with clear typography sizing, deliberate weight contrast, and intentional vertical rhythm.
6. **Avoid excessive gradients, glassmorphism, glowing effects, and decorative animations.**
   Keep visual embellishments purposeful. Reject loud, gimmicky trends that distract from readability and focus.
7. **Do not make every card look identical.**
   Vary card treatments based on semantic context—distinguish question prompts, summary stats, insight callouts, and recommendations through layout, borders, and subtle tone variations.
8. **Use typography, spacing, composition, and subtle visual details to create personality.**
   Rely on sophisticated editorial typography, intentional letter spacing, refined border radii, and soft natural shadows rather than flashy surface decorations.
9. **Use meaningful icons rather than decorative icons.**
   Every icon must communicate immediate semantic value or spatial direction. If an icon doesn't serve comprehension, remove it.
10. **Never use an icon when text would improve clarity.**
    Do not force users to decode ambiguous glyphs. Clear plain language always beats an abstract icon.
11. **Primary actions must be visually obvious.**
    Each screen should have one undisputed primary action (e.g. "Continue", "Next", "View My Results") styled with distinct visual weight.
12. **Keep assessment questions focused on one screen.**
    Each question prompt, supplementary context, and answer options must comfortably fit into the mobile viewport without vertical overflow.
13. **Avoid unnecessary scrolling during questions.**
    Users must never lose sight of question options or primary submission buttons due to layout displacement.
14. **Use large touch targets of at least approximately 44px.**
    All interactive elements (buttons, radio cards, pills, back arrows) must have a minimum physical hit area of 44 × 44 pt/px to prevent mis-taps.
15. **Provide immediate visual feedback after answer selection.**
    Selected answers must instantly reflect active/checked states with crisp border, background, or scale micro-transitions before proceeding.
16. **Preserve the user's answer when navigating backward.**
    If a user taps "Previous", their previously selected choice must remain pre-selected and visible.
17. **Show assessment progress clearly.**
    Display unambiguous progress indicators (e.g. "Question 7 of 15" accompanied by a smooth, non-intrusive progress bar).
18. **Never make the user wonder what happens next.**
    Provide reassuring transitional cues, explicit button labels (avoid vague "Submit"), and clear orientation text.
19. **Keep the number of actions per screen low.**
    Prevent decision paralysis by restricting choices. A question screen has only one task: answer the active question or navigate back.
20. **Avoid modal dialogs unless genuinely necessary.**
    Prefer inline disclosures, full-screen transitions, or bottom sheets over intrusive center-screen popups that disrupt mobile ergonomics.
21. **Use animation only when it improves comprehension or perceived continuity.**
    Employ micro-interactions solely to guide attention (e.g. smooth progress bar fill, subtle card slide on step transition). No bouncy, whimsical animations.
22. **Respect `prefers-reduced-motion`.**
    Honor user system settings by disabling non-essential transitions and animations when reduced motion is preferred.
23. **Never rely only on color to communicate information.**
    Pair color signals (errors, warnings, tier levels) with text labels, shapes, or distinct icons for universal accessibility.
24. **Maintain strong contrast and keyboard accessibility.**
    Ensure all text meets or exceeds WCAG AA standards (4.5:1 for body copy), with visible keyboard focus rings and logical tab order.
25. **Design empty, loading, error, and completed states.**
    Every dynamic UI element must have thoughtfully crafted states: skeleton loaders, helpful error recovery, and clear zero-data placeholders.
26. **Results must feel rewarding and visually distinct from the question experience.**
    Shift visually from the focused, distraction-free questionnaire mode into an engaging, celebratory, magazine-style editorial report.
27. **Make result explanations understandable to non-technical users.**
    Translate raw percentiles and algorithmic scores into lucid, relatable insights without statistical jargon.
28. **Avoid robotic language.**
    Write in warm, human, empathetic, and encouraging prose. Speak like an insightful mentor, not a database terminal or LLM chatbot.
29. **Avoid excessive emojis.**
    Refrain from peppering headings, buttons, and paragraphs with gratuitous emojis. Reserve them, if at all, for deliberate contextual anchors.
30. **Avoid visual patterns commonly associated with generic AI-generated dashboards.**
    Reject the "AI template aesthetic": no uniform dark purple backdrops, floating translucent cards with rainbow borders, pulsating neon dots, or generic tech stock imagery.

---

## Detailed UX Guidelines & Patterns

### 1. Mobile Ergonomics & The Thumb Zone

```
+---------------------------------------+
|  [Back]               Progress: 3/10  |  <- Secondary navigation / status
+---------------------------------------+
|                                       |
|  Question Title & Prompt Context      |  <- Viewing Zone (High readability)
|  "How do you typically react when..." |
|                                       |
+---------------------------------------+
|  [ Option A: Never                ]   |
|  [ Option B: Rarely               ]   |  <- Natural Thumb Zone
|  [ Option C: Sometimes            ]   |     (Immediate tap reach, 44px+ min)
|  [ Option D: Always               ]   |
|                                       |
|  [     Continue / Next Button     ]   |  <- Primary Action (Bottom anchored)
+---------------------------------------+
```

- **Bottom-Anchored Actions**: Place primary forward controls close to the bottom screen edge with safe-area insets (`env(safe-area-inset-bottom)`).
- **Single-Screen Budget**: A question screen must calculate its vertical budget: Header (48px) + Prompt (100–140px) + Options (200–260px) + Bottom Action (64px) = under 520px, fitting comfortably on any standard mobile viewport (iPhone SE to large Pro Max).

---

### 2. Anti-AI Template Manifesto

| Generic AI-Generated Pattern | Our Human-Crafted Standard |
|---|---|
| Deep purple/cyan neon gradients everywhere | Curated, calm palette (warm stones, muted slates, soft sages, and crisp accents) |
| Uniform glassmorphism cards with thick blurs | Solid, clean surfaces with crisp 1px borders (`border-neutral-200`) and subtle tactile depth |
| Cloned cards repeating the exact same layout | Context-driven card variation (Hero score card, comparative split card, action checklist) |
| Robotic/clinical headers ("Your Assessment Metrics Engine") | Warm, human editorial framing ("Understanding Your Focus Profile") |
| Gratuitous emojis on every bullet point 🚀🔥💡 | Clean typography, thoughtful whitespace, and intentional bullet indicators |
| Uncontrolled floating particle animations | Purposeful, 150–250ms ease-out transitions solely for state confirmation |

---

### 3. Question Runner UX

- **One Question at a Time**: Isolates focus, prevents premature scanning of future questions, and lowers anxiety.
- **Selection States**:
  - *Default*: Neutral background, subtle border, clear text contrast.
  - *Pressed/Active*: Immediate tactile depression or border highlight (`active:scale-[0.99]`).
  - *Selected*: Crisp contrasting border, tinted subtle background fill, distinct checkmark or radio indicator.
- **Back Navigation**: Tapping back returns to the prior question with the previously chosen answer visibly highlighted, allowing instant reassessment without data loss.

---

### 4. Result Screen Experience

- **Visual Tone Shift**: The results screen transitions from testing mode into a self-discovery report.
- **Score Hero**:
  - Prominent, easy-to-read primary result label (e.g. "Strategic Thinker", "Balanced Sleep Pattern").
  - Clear visual range or level tier rather than an arbitrary isolated number without context.
- **Insights & Actionable Takeaways**:
  - Divided into "Key Strengths" and "Opportunities for Growth".
  - Written in plain, uplifting, actionable language for everyday life.
- **Share & Save**:
  - Single primary action to share or save results locally without requiring social media account linking or email input.

---

### 5. Accessibility & Motion Checklist

- [ ] Minimum 44px height/width on all touch targets.
- [ ] Text contrast ratios satisfy WCAG 2.1 AA (4.5:1 for body copy, 3:1 for large headers).
- [ ] Visual indicators do not rely on color alone (e.g., error fields include text messages and icons).
- [ ] Visible, accessible focus rings for keyboard and assistive navigation.
- [ ] All animations wrapped in `@media (prefers-reduced-motion: reduce)` fallbacks.
- [ ] Semantic HTML (`<main>`, `<nav>`, `<fieldset>`, `<legend>`, `<button>`) for screen reader compatibility.
