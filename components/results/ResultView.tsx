"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, RotateCcw } from "lucide-react";
import { AssessmentMeta } from "@/types/assessment";
import { AssessmentResult } from "@/types/result";
import { getSavedResult } from "@/lib/storage/resultStorage";
import { ScoreHero } from "./ScoreHero";
import { ScoreBreakdown } from "./ScoreBreakdown";
import { Strengths } from "./Strengths";
import { Recommendations } from "./Recommendations";
import { ResultInsight } from "./ResultInsight";
import { ResultDisclaimer } from "./ResultDisclaimer";
import { ResultActions } from "./ResultActions";
import { AdSlot } from "@/components/ads/AdSlot";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export interface ResultViewProps {
  assessment: AssessmentMeta;
}

export const ResultView: React.FC<ResultViewProps> = ({ assessment }) => {
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = getSavedResult(assessment.id);
    setResult(saved);
    setIsLoaded(true);
  }, [assessment.id]);

  if (!isLoaded) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-pulse py-4">
        <div className="h-64 rounded-2xl bg-surface-subtle" />
        <div className="h-32 rounded-2xl bg-surface-subtle" />
        <div className="h-48 rounded-2xl bg-surface-subtle" />
      </div>
    );
  }

  // Graceful state when user directly visits /result before completing the questionnaire
  if (!result) {
    return (
      <div className="max-w-xl mx-auto py-12 px-4 text-center">
        <Card variant="subtle" className="p-8 sm:p-12 space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-primary-subtle text-primary flex items-center justify-center mx-auto">
            <HelpCircle className="w-7 h-7" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">
              No Result Recorded Yet
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
              You haven&apos;t completed the <strong>{assessment.title}</strong> yet. Take the
              quick {assessment.estimatedDuration} assessment to receive your score breakdown and
              personalized insights.
            </p>
          </div>

          <div className="pt-2">
            <Link href={`/assessment/${assessment.slug}/questions`}>
              <Button size="lg" className="w-full sm:w-auto font-semibold">
                <span>Start Assessment ({assessment.estimatedDuration})</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 py-2 sm:py-4 animate-in fade-in duration-300">
      {/* 1. TOP AD (Above main results) */}
      <AdSlot placement="resultsTop" className="my-2" />

      {/* Main Score Display with Tier & Interpretation */}
      <ScoreHero result={result} assessmentTitle={assessment.title} />

      {/* Mandatory Non-Diagnostic / Educational Notice */}
      <ResultDisclaimer customDisclaimer={assessment.disclaimer} />

      {/* Dimension-Level Score Breakdown Meters */}
      <ScoreBreakdown dimensions={result.dimensions} />

      {/* Narrative Analysis & Profile Summary */}
      <ResultInsight
        insights={result.insights}
        tierSummary={result.tier.summary}
      />

      {/* 2. IN-BETWEEN AD (Middle of results) */}
      <AdSlot placement="resultsMiddle" className="my-4" />

      {/* Standout Strengths & Opportunities for Growth */}
      <Strengths
        strengths={result.strengths}
        growthAreas={result.growthAreas}
      />

      {/* Actionable Next Steps & Habit Implementation */}
      <Recommendations actionSteps={result.actionSteps} />

      {/* Share, Retake, and Related Assessments Navigation */}
      <ResultActions
        assessment={assessment}
        score={result.score}
        tierLabel={result.tier.label}
      />

      {/* 3. BOTTOM AD (On bottom of results) */}
      <AdSlot placement="resultsBottom" className="my-4" />
    </div>
  );
};
