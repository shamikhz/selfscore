import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { emotionalIntelligenceQuestions } from "./questions";
import { emotionalIntelligenceTiers } from "./scoring";
import { resolveEmotionalIntelligenceInsights } from "./insights";

export const emotionalIntelligenceAssessmentDefinition: AssessmentDefinition = {
  meta: {
    id: "emotional-intelligence",
    slug: "emotional-intelligence",
    title: "Emotional Intelligence Score",
    shortDescription: "Estimate self-awareness, empathy, emotional regulation, and relationship dynamics.",
    description: "Explore how you recognize emotional cues, regulate reactions under pressure, practice empathetic listening, and manage interpersonal relationships.",
    category: "mind",
    estimatedDuration: "5–7 min",
    questionCount: 20,
    featured: true,
    popular: true,
    dimensions: [
      "Self-Awareness",
      "Emotional Regulation",
      "Empathy",
      "Social Awareness",
      "Relationship Management",
    ],
    disclaimer: "This informal self-assessment provides personal reflection on everyday emotional patterns and does not constitute a clinical or psychological evaluation.",
    relatedAssessments: ["communication", "relationship", "personality"],
  },
  questions: emotionalIntelligenceQuestions,
  tiers: emotionalIntelligenceTiers,
  resolveInsights: resolveEmotionalIntelligenceInsights,
};
