# Rule 5: Assessment Design, Methodology & Result Generation

> **Objective:** Create assessments using a structured progression from general questions to specific questions.
> 
> **Standard Length:** Each assessment should normally contain approximately **20–30 questions** unless there is a strong, documented reason otherwise.

---

## The 4-Stage Question Progression Model

Every assessment flows through four intentional psychological stages to ease cognitive load and yield accurate self-reflection:

```
[ Stage 1: Broad / General ]  -> Warm-up: high-level feelings, overall self-perceptions
             ↓
[ Stage 2: Behavioral ]       -> Concrete habits, frequency of actions, everyday routines
             ↓
[ Stage 3: Situational ]      -> Realistic scenarios: "When faced with X, how do you handle Y?"
             ↓
[ Stage 4: Specific / Nuanced]-> Targeted deep-dives: edge cases, trade-offs, values
```

---

## Question Design & Methodology Principles

1. **Start with broad/general questions.**
   Open the assessment with low-friction, welcoming prompts that allow users to acclimate to the topic without feeling evaluated.
2. **Progress toward behavioral questions.**
   Shift from general feelings into observable behaviors (e.g. "How often do you plan your day in advance?").
3. **Introduce situational questions.**
   Present realistic scenarios and hypothetical choices to test how values and habits translate into actual decisions.
4. **End with more specific questions.**
   Conclude with nuanced questions that probe specific priorities, trade-offs, and boundary conditions.
5. **Avoid repetitive questions.**
   Value the user's time. Do not ask slight variations of the same prompt unless specifically required for psychometric reliability checks.
6. **Avoid leading questions.**
   Phrase questions neutrally. Never steer or nudge the user toward what feels like the "correct" or "virtuous" response.
7. **Avoid emotionally manipulative wording.**
   Never guilt, shame, or sensationalize questions. Keep the tone calm, objective, and supportive.
8. **Avoid ambiguous wording.**
   Ensure terms are unambiguous. Avoid words like "sometimes", "regularly", or "often" without contextual scale points.
9. **Use simple language.**
   Write at an accessible 7th-grade reading level. Eliminate unnecessary academic, psychological, or clinical jargon.
10. **Keep each question focused on one concept.**
    Every prompt must measure exactly one variable or behavior.
11. **Avoid double-barreled questions.**
    Never combine two questions into one (e.g. *avoid:* "Do you eat well and exercise daily?"; *instead:* separate nutrition from physical activity).
12. **Mix question formats where appropriate.**
    Utilize single-choice, Likert scales (e.g. 5-point Strongly Disagree to Strongly Agree), and scenario-based questions to maintain user engagement.
13. **Include reverse-scored questions where methodologically appropriate.**
    Incorporate reverse-scored items to identify acquiescence bias (yea-saying) and ensure attentive reading.
14. **Clearly define the scoring direction for every scored question.**
    Document whether higher values indicate positive or negative traits, and explicitly mark reverse-scored items with appropriate inverted weights.
15. **Normalize scores to a consistent user-friendly range where appropriate.**
    Translate diverse raw score ranges into a uniform, intuitive scale (typically 0–100 or standard quartile percentiles).
16. **Separate raw score calculation from interpretation.**
    Keep algorithmic score summing completely decoupled from editorial outcome descriptions, tiers, and recommendations.
17. **Store assessment content as structured data rather than hardcoding it into components.**
    All questions, weights, options, tiers, and insights must reside in typed configuration files (`config.ts`, `questions.ts`, `scoring.ts`, `insights.ts`).
18. **Each assessment must define its own scoring dimensions.**
    Assessments should measure distinct sub-facets (e.g. Personality: Openness, Conscientiousness, Extraversion; Productivity: Focus, Planning, Execution).
19. **Each assessment must define result ranges.**
    Define distinct score brackets (e.g. 0–39: Foundation, 40–69: Developing, 70–89: Proficient, 90–100: Mastery).
20. **Each result range must have human-readable interpretation.**
    Provide rich, constructive explanations for every result tier that contextualize what the score means in everyday life.
21. **Recommendations should be practical and non-judgmental.**
    Deliver concrete, achievable next steps that empower the user rather than criticizing their shortcomings.
22. **Never present informal assessments as medical, psychological, or professional diagnoses.**
    Frame all assessments as self-discovery and educational tools. Include clear, visible disclaimers.
23. **Clearly communicate limitations where appropriate.**
    Be transparent about the scope and boundary conditions of each assessment.
24. **Avoid claiming scientific validity unless the methodology actually supports that claim.**
    Never use pseudo-scientific claims or fabricate peer-reviewed backing. Be honest and transparent about methodology.

---

## The 6 Essential Questions Every Result Must Answer

Every assessment result screen must provide clear, actionable answers to these six core user questions:

| Question | Purpose | Implementation Layer |
|---|---|---|
| **1. What does my score mean?** | Translates raw points into clear, contextual level descriptors (e.g. "Balanced Rhythm", "Analytical Mindset"). | [ScoreHero.tsx](file:///c:/Users/shami/OneDrive/Desktop/assessment-pwa/components/results/ScoreHero.tsx) + `insights.ts:tier` |
| **2. What am I doing well?** | Highlights positive patterns, strengths, and validated abilities. | [Strengths.tsx](file:///c:/Users/shami/OneDrive/Desktop/assessment-pwa/components/results/Strengths.tsx) + `insights.ts:strengths` |
| **3. What pattern does my result suggest?** | Synthesizes answers across multiple dimensions to reveal cognitive or behavioral habits. | [ScoreBreakdown.tsx](file:///c:/Users/shami/OneDrive/Desktop/assessment-pwa/components/results/ScoreBreakdown.tsx) + `insights.ts:patterns` |
| **4. What could I improve?** | Identifies friction points or growth blindspots constructively and without shame. | [ResultInsight.tsx](file:///c:/Users/shami/OneDrive/Desktop/assessment-pwa/components/results/ResultInsight.tsx) + `insights.ts:growthAreas` |
| **5. What practical step can I take next?** | Provides 2–3 immediate, bite-sized, real-world habits or actions to apply today. | [Recommendations.tsx](file:///c:/Users/shami/OneDrive/Desktop/assessment-pwa/components/results/Recommendations.tsx) + `insights.ts:actionSteps` |
| **6. Which assessment should I try next?** | Recommends a logical companion assessment from the platform to expand self-discovery. | [ShareResult.tsx](file:///c:/Users/shami/OneDrive/Desktop/assessment-pwa/components/results/ShareResult.tsx) / NextSteps + `config.ts:relatedAssessments` |

---

## Assessment Module Anatomy

Every directory inside `/assessments/<slug>/` adheres strictly to this structure:

```
assessments/<assessment-id>/
├── config.ts       # Title, description, slug, estimatedTime (e.g. "5–7 mins"),
│                   # questionCount (20–30), dimensions, disclaimers
│
├── questions.ts    # Array of 20–30 Question objects progressing through:
│                   # Stage 1: General (Q1–Q6)
│                   # Stage 2: Behavioral (Q7–Q14)
│                   # Stage 3: Situational (Q15–Q22)
│                   # Stage 4: Specific (Q23–Q30)
│
├── scoring.ts      # Dimension mappings, reverse-score conversions:
│                   # rawScore = sum(itemValues)
│                   # normalizedScore = ((raw - min) / (max - min)) * 100
│
└── insights.ts     # Result tiers (e.g. 4 tiers), strengths library,
                    # growth areas, actionable recommendations, and next assessment links
```
---

## Scientific Validity & Responsible Disclaimer Policy

> **Core Mandate:** **Do not treat or market assessments as scientifically validated unless using a properly validated instrument and methodology.** 
> Unless an assessment implements a standardized, peer-reviewed, and rigorously validated instrument with appropriate normed scoring, always present it as a **self-assessment / educational tool**, never as a clinical, medical, legal, or diagnostic test. This protects both user experience and overall product positioning.

### High-Sensitivity Domains & Required Positioning

| Assessment Category | Permitted Framing (Self-Discovery & Education) | Prohibited Framing (Diagnostic & Pseudo-Scientific) |
|---|---|---|
| **IQ** | "Pattern Recognition & Cognitive Habits Explorer", "Problem-Solving Exercise" | "Official IQ Test", "Clinically Validated Intelligence Quotient", "Mensa Equivalent" |
| **Personality** | "Work Style & Personality Preferences", "Self-Reflection Profile" | "Definitive Psychological Diagnosis", "Pathology Screening" |
| **Stress** | "Daily Stress & Routine Awareness Check", "Perceived Lifestyle Load" | "Clinical Anxiety Screening", "Depression Test", "Burnout Diagnosis" |
| **Sleep** | "Sleep Habits & Evening Routine Self-Assessment" | "Insomnia Diagnosis", "Sleep Apnea Assessment" |
| **Financial Health** | "Spending Habits & Financial Mindset Check-in" | "Certified Financial Advice", "Fiduciary Credit Scoring" |
| **Relationship Compatibility** | "Communication Dynamics & Partnership Reflection" | "Guaranteed Compatibility Rating", "Clinical Relationship Assessment" |
| **Career Interest** | "Career Curiosity & Workplace Motivations Guide" | "Certified Vocational Aptitude Assessment", "Guaranteed Career Placement" |
| **Mental / Digital Wellbeing** | "Mindfulness & Screen-Time Balance Check-in" | "Clinical Psychiatric Evaluation", "Addiction Assessment" |

---

### Mandatory Disclaimer Language

Every assessment—especially the high-sensitivity categories above—must display this clear disclaimer prominently on both the **Start/Overview screen** ([AssessmentIntro.tsx](file:///c:/Users/shami/OneDrive/Desktop/assessment-pwa/components/assessment/AssessmentIntro.tsx)) and the **Results screen** ([ScoreHero.tsx](file:///c:/Users/shami/OneDrive/Desktop/assessment-pwa/components/results/ScoreHero.tsx)):

> *"This assessment provides an informal indication based on your answers. It is not a clinical diagnosis or professional evaluation."*

### Editorial Tone & Language Guardrails

- **Use Non-Diagnostic Phrases**:
  - *Recommended:* "Your answers suggest a preference for...", "This profile highlights potential strengths in...", "Common patterns among people with similar answers include..."
  - *Forbidden:* "You suffer from...", "Our test proves you have...", "Scientifically diagnosed with...", "Clinically verified..."
- **Highlight Constructive Self-Exploration**: Keep the focus on encouraging self-awareness, curiosity, and practical daily habits rather than fixed labels or medicalized categories.

