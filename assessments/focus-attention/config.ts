import { AssessmentDefinition } from "@/types/assessment";
import { focusAttentionQuestions } from "./questions";
import { focusAttentionTiers } from "./scoring";
import { resolveFocusAttentionInsights } from "./insights";

export const focusAttentionAssessmentDefinition: AssessmentDefinition = {
  meta: {
    id: "focus-attention",
    slug: "focus-attention",
    title: "Focus & Attention Score",
    shortDescription: "Measure everyday concentration depth, distraction control, and deep work habits.",
    description: "Discover your cognitive focus endurance, how you manage digital distractions, navigate task-switching, and establish high-flow environments.",
    category: "productivity",
    estimatedDuration: "4–6 min",
    questionCount: 20,
    featured: false,
    popular: true,
    dimensions: [
      "Sustained Attention",
      "Distraction Control",
      "Task Switching",
      "Environment Management",
      "Deep Work",
    ],
    disclaimer: "This informal self-assessment evaluates everyday workplace and study focus habits. It is not an ADHD screening or clinical medical assessment.",
    relatedAssessments: ["productivity", "time-management", "digital-wellbeing"],
  },
  questions: focusAttentionQuestions,
  tiers: focusAttentionTiers,
  resolveInsights: resolveFocusAttentionInsights,
};
