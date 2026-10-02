import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug, ASSESSMENTS_CATALOG } from "@/lib/assessments-catalog";
import { buildDefaultAssessmentDefinition } from "@/lib/default-assessment-builder";

// Custom assessment definitions for all 20 catalog assessments
import { iqAssessmentDefinition } from "./iq/config";
import { personalityAssessmentDefinition } from "./personality/config";
import { stressAssessmentDefinition } from "./stress/config";
import { productivityAssessmentDefinition } from "./productivity/config";
import { sleepAssessmentDefinition } from "./sleep/config";
import { financialHealthAssessmentDefinition } from "./financial-health/config";
import { riskToleranceAssessmentDefinition } from "./risk-tolerance/config";
import { careerInterestAssessmentDefinition } from "./career-interest/config";
import { digitalWellbeingAssessmentDefinition } from "./digital-wellbeing/config";
import { relationshipAssessmentDefinition } from "./relationship/config";
import { communicationAssessmentDefinition } from "./communication/config";
import { learningStyleAssessmentDefinition } from "./learning-style/config";
import { timeManagementAssessmentDefinition } from "./time-management/config";
import { spendingHabitsAssessmentDefinition } from "./spending-habits/config";
import { emotionalIntelligenceAssessmentDefinition } from "./emotional-intelligence/config";
import { decisionMakingAssessmentDefinition } from "./decision-making/config";
import { burnoutRiskAssessmentDefinition } from "./burnout-risk/config";
import { confidenceAssessmentDefinition } from "./confidence/config";
import { focusAttentionAssessmentDefinition } from "./focus-attention/config";
import { goalAchievementAssessmentDefinition } from "./goal-achievement/config";

interface PartialAssessmentDefinition {
  questions: any[];
  tiers: any[];
  resolveInsights?: any;
  meta?: any;
}

const customDefinitions: Record<string, PartialAssessmentDefinition> = {
  iq: iqAssessmentDefinition,
  personality: personalityAssessmentDefinition,
  stress: stressAssessmentDefinition,
  productivity: productivityAssessmentDefinition,
  sleep: sleepAssessmentDefinition,
  "financial-health": financialHealthAssessmentDefinition,
  "risk-tolerance": riskToleranceAssessmentDefinition,
  "career-interest": careerInterestAssessmentDefinition,
  "digital-wellbeing": digitalWellbeingAssessmentDefinition,
  relationship: relationshipAssessmentDefinition,
  communication: communicationAssessmentDefinition,
  "learning-style": learningStyleAssessmentDefinition,
  "time-management": timeManagementAssessmentDefinition,
  "spending-habits": spendingHabitsAssessmentDefinition,
  "emotional-intelligence": emotionalIntelligenceAssessmentDefinition,
  "decision-making": decisionMakingAssessmentDefinition,
  "burnout-risk": burnoutRiskAssessmentDefinition,
  confidence: confidenceAssessmentDefinition,
  "focus-attention": focusAttentionAssessmentDefinition,
  "goal-achievement": goalAchievementAssessmentDefinition,
};

/**
 * Retrieves the full AssessmentDefinition for a given slug.
 * Safely associates the catalog metadata at call time to prevent circular dependencies.
 */
export function getAssessmentDefinition(slug: string): AssessmentDefinition | null {
  const meta = getAssessmentBySlug(slug);
  if (!meta) return null;

  const custom = customDefinitions[slug];
  if (custom && custom.questions && custom.questions.length > 0) {
    return {
      meta: {
        ...meta,
        questionCount: custom.questions.length,
      },
      questions: custom.questions,
      tiers: custom.tiers,
      resolveInsights: custom.resolveInsights,
    };
  }

  return buildDefaultAssessmentDefinition(meta);
}

/**
 * Returns all assessment definitions across the application
 */
export function getAllAssessmentDefinitions(): AssessmentDefinition[] {
  return ASSESSMENTS_CATALOG.map((meta) => {
    return getAssessmentDefinition(meta.slug) || buildDefaultAssessmentDefinition(meta);
  });
}
