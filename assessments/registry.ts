import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug, ASSESSMENTS_CATALOG } from "@/lib/assessments-catalog";
import { buildDefaultAssessmentDefinition } from "@/lib/default-assessment-builder";

// Custom assessment definitions for all 14 catalog assessments
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

const customDefinitions: Record<string, AssessmentDefinition> = {
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
};

/**
 * Retrieves the full AssessmentDefinition for a given slug.
 * If custom questions are defined, returns the custom definition;
 * otherwise falls back to building a fully functional multi-dimensional structured definition.
 */
export function getAssessmentDefinition(slug: string): AssessmentDefinition | null {
  const meta = getAssessmentBySlug(slug);
  if (!meta) return null;

  const custom = customDefinitions[slug];
  if (custom && custom.questions && custom.questions.length > 0) {
    return custom;
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
