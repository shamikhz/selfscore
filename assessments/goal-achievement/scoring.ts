import { ScoreTier } from "@/types/result";

export const goalAchievementTiers: ScoreTier[] = [
  {
    id: "goal_finisher",
    label: "Master Finisher & Strategic Executor",
    minScore: 80,
    maxScore: 100,
    summary: "You demonstrate high goal clarity, rigorous milestone planning, compound consistency, and exceptional follow-through through the final mile.",
    color: "var(--success)",
  },
  {
    id: "strong_executor",
    label: "Consistent Builder & High Executor",
    minScore: 60,
    maxScore: 79,
    summary: "You reliably translate ideas into structured action and achieve major milestones, with minor friction during long plateaus or final polishing phases.",
    color: "var(--primary)",
  },
  {
    id: "structured_planner",
    label: "Structured Planner / Developing Execution",
    minScore: 40,
    maxScore: 59,
    summary: "You excel at envisioning targets and creating initial plans, but encounter friction sustaining consistency when initial novelty fades.",
    color: "var(--warning)",
  },
  {
    id: "goal_explorer",
    label: "Goal Explorer / Emerging Builder",
    minScore: 0,
    maxScore: 39,
    summary: "Your responses suggest frequent goal shifting, planning friction, or unfinished projects. Establishing micro-habits and accountability systems will transform your execution.",
    color: "var(--info)",
  },
];
