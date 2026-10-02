import { AssessmentDefinition } from "@/types/assessment";
import { goalAchievementQuestions } from "./questions";
import { goalAchievementTiers } from "./scoring";
import { resolveGoalAchievementInsights } from "./insights";

export const goalAchievementAssessmentDefinition: AssessmentDefinition = {
  meta: {
    id: "goal-achievement",
    slug: "goal-achievement",
    title: "Goal Achievement & Execution Score",
    shortDescription: "Evaluate your goal clarity, milestone planning, consistency, and follow-through.",
    description: "Discover how effectively you define objectives, break projects into daily milestones, maintain consistency during plateaus, and cross the finish line.",
    category: "productivity",
    estimatedDuration: "5–7 min",
    questionCount: 20,
    featured: false,
    popular: true,
    dimensions: [
      "Goal Clarity",
      "Planning",
      "Consistency",
      "Execution",
      "Follow-Through",
    ],
    disclaimer: "This self-assessment evaluates everyday goal-setting and execution habits for personal productivity and professional development.",
    relatedAssessments: ["time-management", "productivity", "focus-attention"],
  },
  questions: goalAchievementQuestions,
  tiers: goalAchievementTiers,
  resolveInsights: resolveGoalAchievementInsights,
};
