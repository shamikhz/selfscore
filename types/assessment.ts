import { Question } from "./question";
import { ScoreTier } from "./result";

export type AssessmentCategory =
  | "mind"
  | "wellbeing"
  | "productivity"
  | "finance"
  | "career"
  | "relationships";

export interface CategoryInfo {
  id: AssessmentCategory;
  name: string;
  description: string;
  iconName: string;
}

export interface AssessmentMeta {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: AssessmentCategory;
  estimatedDuration: string;
  questionCount: number;
  featured?: boolean;
  popular?: boolean;
  dimensions: string[];
  disclaimer?: string;
  relatedAssessments: string[];
}

export interface AssessmentDefinition {
  meta: AssessmentMeta;
  questions: Question[];
  tiers: ScoreTier[];
  resolveInsights?: (
    overallScore: number,
    dimensionMap: Record<string, number>,
    tier: ScoreTier
  ) => {
    insights: string[];
    strengths: string[];
    growthAreas: string[];
    actionSteps: string[];
  };
}
