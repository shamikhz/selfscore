# Rule 4: Coding Standards & TypeScript Quality

> **Objective:** Write maintainable, production-quality TypeScript.
> 
> **Standard:** The codebase must be robust, strictly typed, self-documenting, and resilient to errors. Code should be clean enough that any developer can read, test, and maintain it with minimal cognitive overhead.

---

## Core Rules

1. **Use strict TypeScript.**
   Enforce `"strict": true` in `tsconfig.json`, including `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, and `noUnusedLocals`.
2. **Define explicit types for assessment, question, answer, scoring, and result objects.**
   All domain entities must be defined in the `/types/` directory with explicit, readable interfaces and type aliases.
3. **Avoid `any`.**
   Never use `any` to bypass the type checker. If a type is unknown upfront, use `unknown` accompanied by type guards, discriminated unions, or Zod/validation checks.
4. **Keep functions small and focused.**
   Each function must do one thing well. Aim for functions under 25–30 lines. Extract sub-operations into dedicated, pure helper functions.
5. **Use descriptive names.**
   Choose clear, intention-revealing names for variables, functions, and components (e.g. `calculateNormalizedScore` instead of `calc`, `selectedAnswerId` instead of `ans`).
6. **Avoid deeply nested components.**
   Flatten component hierarchies. If a JSX component exceeds 3–4 levels of nesting, break sub-trees into distinct, focused sub-components.
7. **Separate business logic from UI.**
   Do not mix math, normalization, local storage writes, or validation routines directly inside React JSX. Place calculations in pure functions in `/lib/` and wire them via custom hooks.
8. **Avoid duplicate code.**
   Consolidate repeated formulas, date formatters, and scoring conversions into shared utilities inside `/lib/`.
9. **Create reusable components only when they represent a real shared concept.**
   Do not prematurely abstract one-off UI. Refactor into a reusable component only when at least 2–3 distinct instances share identical domain semantics.
10. **Keep files reasonably small.**
    Target fewer than 150–200 lines per component or module. If a file grows excessively large, decompose it by separating sub-components, types, and helpers.
11. **Add comments only when explaining non-obvious decisions.**
    Write code that explains *what* and *how*. Reserve comments for explaining *why* a particular trade-off, edge-case mitigation, or non-obvious algorithm was chosen.
12. **Do not add comments that simply restate the code.**
    Avoid trivial noise like `// renders the button` or `// sets the state to true`. Let clean naming and structure document the code.
13. **Do not introduce dependencies without justification.**
    Every npm package introduces maintenance, security, and bundle size liabilities. Prefer modern browser APIs and vanilla TypeScript solutions whenever feasible.
14. **Handle loading, empty, and error states.**
    Every component that reads asynchronous data, imports chunks, or loads local persistence must gracefully render fallback, empty, and error boundaries.
15. **Validate user input.**
    Never assume client inputs or route parameters match expected types. Validate route parameters (`slug`), answer keys, and scale bounds before processing.
16. **Never trust client-side data blindly.**
    Data stored in `localStorage` or `IndexedDB` could be manipulated, malformed, or from a deprecated schema version. Always validate and sanitize upon hydration.
17. **Do not expose secrets in client-side code.**
    Never include API secrets, admin credentials, private keys, or non-public tokens in frontend code or client-exposed variables.
18. **Keep environment variables in `.env.local`.**
    Store private credentials and configuration overrides locally in `.env.local` (git-ignored) and document required keys in `.env.example`.
19. **Never hardcode API keys.**
    Always read configuration values through `process.env` abstractions with strict runtime validation.
20. **Maintain backward compatibility when changing assessment schemas.**
    When revising question IDs, score weights, or result tiers, provide schema migration or fallback handling so users with previously saved results don't experience app crashes.
21. **Do not rewrite working architecture unnecessarily.**
    Respect existing patterns and verified structures. Refactor incrementally with purpose rather than performing disruptive blanket rewrites.
22. **Before creating a new component, search for an existing reusable component.**
    Inspect `/components/ui/`, `/components/assessment/`, and `/components/results/` before building a new element to maintain UI consistency and avoid duplication.
23. **Before installing a package, determine whether the requirement can be solved with native browser APIs or existing dependencies.**
    Evaluate native capabilities (`crypto.randomUUID()`, `Intl.NumberFormat`, Web Share API, native dialogs, CSS animations) before reaching for npm.
24. **Preserve accessibility when modifying UI.**
    Ensure any new or refactored component retains proper ARIA roles, label associations, keyboard navigation (`Enter`/`Space`), and focus indicators.
25. **Test important scoring logic independently from the UI.**
    Keep scoring engines in `/lib/assessment-engine/` as pure, deterministic TypeScript functions with zero React or DOM dependencies so they can be unit-tested in isolation.

---

## TypeScript Domain Model Conventions

All domain types in `/types/` follow strict, discriminated union patterns:

```typescript
// types/question.ts
export type QuestionType = 'single-choice' | 'likert-scale' | 'scenario' | 'slider';

export interface AnswerOption {
  id: string;
  label: string;
  value: number;
  description?: string;
}

export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  type: QuestionType;
  options: AnswerOption[];
  weight?: number;
}
```

```typescript
// types/result.ts
export interface ScoreTier {
  id: string;
  label: string;
  minScore: number;
  maxScore: number;
  summary: string;
  color: string;
}

export interface AssessmentResult {
  schemaVersion: number;
  assessmentId: string;
  completedAt: string; // ISO 8601 string
  rawScore: number;
  normalizedScore: number; // 0 - 100
  tier: ScoreTier;
  breakdown: Record<string, number>;
  insights: string[];
  recommendations: string[];
}
```

---

## Defensive Storage Hydration Pattern

When reading stored assessment results or user progress from `localStorage`, always validate schema integrity defensively:

```typescript
// lib/storage/resultStorage.ts
import { AssessmentResult } from '@/types/result';

export function loadSavedResult(assessmentId: string): AssessmentResult | null {
  try {
    const raw = localStorage.getItem(`assessment_result_${assessmentId}`);
    if (!raw) return null;

    const parsed = JSON.parse(raw);

    // Defensive schema verification
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      typeof parsed.rawScore !== 'number' ||
      typeof parsed.tier?.label !== 'string'
    ) {
      console.warn(`[Storage] Invalid or deprecated result schema for ${assessmentId}`);
      return null;
    }

    return parsed as AssessmentResult;
  } catch (err) {
    console.error(`[Storage] Failed to read result for ${assessmentId}`, err);
    return null;
  }
}
```

---

## Pure Function Engine Design

Calculation functions must remain pure, deterministic, and free of side effects:

```typescript
// lib/assessment-engine/calculateScore.ts
import { Question } from '@/types/question';

export interface ScoringInput {
  answers: Record<string, number>; // { [questionId]: optionValue }
  questions: Question[];
}

/**
 * Pure calculation function: zero DOM, zero React hooks, zero network access.
 * Easily tested via automated unit tests.
 */
export function calculateRawScore(input: ScoringInput): number {
  const { answers, questions } = input;
  let total = 0;

  for (const question of questions) {
    const answerVal = answers[question.id];
    if (typeof answerVal === 'number') {
      const weight = question.weight ?? 1;
      total += answerVal * weight;
    }
  }

  return total;
}
```
