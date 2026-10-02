# SelfScore — Mobile-First Assessment PWA

> **SelfScore** is a production-grade, privacy-first progressive web application (PWA) delivering 20 evidence-inspired self-assessments across cognitive reasoning, personality, productivity, wellness, relationships, and financial mindset.

---

## 🎯 Architectural Highlights

1. **Unified Assessment Engine (`/lib/assessment-engine/`):**
   - Single calculation pipeline for all 20 assessments.
   - Dynamic Likert, frequency, scenario, and slider question handling.
   - Normalized 0–100 dimension scoring with automatic reverse-score inversion (`minVal + maxVal - rawVal`).
   - Algorithmic tier resolution and personalized multi-point insight synthesis.

2. **Modular Configuration-Driven Domain Architecture (`/assessments/<slug>/`):**
   - Each assessment is fully self-contained with:
     - `questions.ts`: Exactly 20 structured questions progressing from self-awareness to behavioral choices to high-stakes situational dilemmas.
     - `scoring.ts`: Calibrated scoring tier bands with custom theme tokens.
     - `insights.ts`: Domain-specific insight resolvers producing personalized narrative breakdowns, strengths, growth areas, and next steps.
     - `config.ts`: Strongly typed `AssessmentDefinition` registered in [`assessments/registry.ts`](file:///c:/Users/shami/OneDrive/Desktop/assessment-pwa/assessments/registry.ts).

3. **Privacy & Zero-Backend Architecture:**
   - 100% client-side computation and local persistence via [`lib/storage/`](file:///c:/Users/shami/OneDrive/Desktop/assessment-pwa/lib/storage/).
   - In-progress questionnaires auto-save to `localStorage` with resume & reset capabilities.
   - Zero user tracking, zero accounts, zero analytics cookies.

4. **Zero Cumulative Layout Shift ($\text{CLS} = 0$) Ad System:**
   - Pre-allocated CSS `contain: "layout size"` containers with explicit minimum heights (`140px`, `160px`, `250px`).
   - Strict rule: **Zero ads** during active question answering.
   - Elegant native partner card styling.

5. **Progressive Web App & Offline Resilience:**
   - Pre-cached static application shell and offline fallback page (`/offline`).
   - Service Worker Cache v2 with intelligent stale-while-revalidate and network-first navigation.
   - Native-like install prompt with iOS Safari guide and 7-day snooze mechanism.
   - High-resolution maskable icons (192×192, 512×512, SVG).

---

## 📋 The 20 Self-Assessments

| Slug | Assessment Title | Category | Dimensions Measured |
| :--- | :--- | :--- | :--- |
| `iq` | **Cognitive Pattern & Logic** | Mind | Pattern Recognition, Deductive Reasoning, Spatial Logic, Working Memory |
| `personality` | **Five-Factor Personality Profile** | Mind | Openness, Conscientiousness, Social Energy, Empathy, Resilience |
| `stress` | **Stress & Resilience Index** | Wellbeing | Cognitive Load, Somatic Tension, Emotional Exhaustion, Recovery Reserve |
| `productivity` | **Deep Work & Flow Profile** | Productivity | Goal Clarity, Distraction Control, Execution Stamina, System Consistency |
| `sleep` | **Sleep Hygiene & Alertness** | Wellbeing | Circadian Consistency, Evening Wind-Down, Sleep Quality, Morning Alertness |
| `financial-health` | **Financial Health & Mindset** | Finance | Budget Discipline, Safety Buffer, Debt Management, Future Planning |
| `risk-tolerance` | **Financial Risk Tolerance** | Finance | Loss Aversion, Volatility Comfort, Time Horizon, Calculated Risk Taking |
| `career-interest` | **Career Motivations & Interests** | Career | Analytical, Creative, Leadership, Operational, Service |
| `digital-wellbeing` | **Digital Wellbeing & Screen Habits** | Wellbeing | Notification Resilience, Intentional Usage, Bedtime Disconnect, Focus Protection |
| `relationship` | **Relationship Dynamics & Compatibility** | Relationships | Emotional Attunement, Constructive Conflict, Shared Values, Mutual Growth |
| `communication` | **Communication Style Assessment** | Relationships | Directness, Empathetic Listening, Diplomacy, Nonverbal Sensitivity |
| `learning-style` | **Learning & Cognitive Preferences** | Mind | Visual Synthesis, Applied Practice, Auditory & Dialogue, Conceptual Frameworks |
| `time-management` | **Time Allocation & Pacing Score** | Productivity | Priority Setting, Procrastination Shield, Time Estimation, Buffer Discipline |
| `spending-habits` | **Spending Habits & Impulse Control** | Finance | Impulse Control, Value Alignment, Comparison Shopping, Emotional Spending |
| `emotional-intelligence` | **Emotional Intelligence Score** | Mind | Self-Awareness, Emotional Regulation, Empathy, Social Awareness, Relationship Management |
| `decision-making` | **Decision-Making Style Score** | Mind | Analytical Thinking, Decisiveness, Risk Awareness, Intuition, Reflection |
| `burnout-risk` | **Burnout Risk & Energy Indicator** | Wellbeing | Energy & Exhaustion, Workload Pressure, Recovery, Boundaries, Motivation |
| `confidence` | **Confidence & Self-Esteem Indicator** | Mind | Self-Belief, Assertiveness, Self-Acceptance, Resilience, Social Confidence |
| `focus-attention` | **Focus & Attention Score** | Productivity | Sustained Attention, Distraction Control, Task Switching, Environment Management, Deep Work |
| `goal-achievement` | **Goal Achievement & Execution Score** | Productivity | Goal Clarity, Planning, Consistency, Execution, Follow-Through |

---

## 🛠️ Tech Stack & Constraints

- **Framework:** Next.js 14 App Router (Static Site Generation — 66 pre-rendered static routes)
- **Language:** TypeScript (Strict mode, zero `any`)
- **Styling:** Tailwind CSS + CSS Variables (`Stone-50` background, `Deep Slate Blue` primary, `Warm Ochre` accent)
- **Icons:** Lucide React
- **Bundle Efficiency:** **87.1 kB** shared first-load JavaScript
- **Disclaimers:** Mandatory educational non-diagnostic notice embedded on all sensitive tests.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run TypeScript typecheck
npm run typecheck

# 3. Build optimized production bundle (66 static pages)
npm run build

# 4. Start production server
npm start
# -> Serving at http://localhost:3000
```
