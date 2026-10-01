import React from "react";
import Link from "next/link";
import { RotateCcw, ListFilter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ShareResult } from "./ShareResult";
import { AssessmentMeta } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { AssessmentCard } from "@/components/assessment/AssessmentCard";

export interface ResultActionsProps {
  assessment: AssessmentMeta;
  score: number;
  tierLabel: string;
}

export const ResultActions: React.FC<ResultActionsProps> = ({
  assessment,
  score,
  tierLabel,
}) => {
  const related = assessment.relatedAssessments
    .map((slug) => getAssessmentBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  return (
    <div className="space-y-8 pt-4">
      {/* Primary Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-surface border border-surface-border">
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <ShareResult
            assessmentTitle={assessment.title}
            score={score}
            tierLabel={tierLabel}
          />
          <Link href={`/assessment/${assessment.slug}/questions`} className="flex-1 sm:flex-initial">
            <Button variant="ghost" size="md" fullWidth>
              <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>Retake</span>
            </Button>
          </Link>
        </div>

        <Link href="/results" className="w-full sm:w-auto">
          <Button variant="secondary" size="md" fullWidth>
            <ListFilter className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>All My Results</span>
          </Button>
        </Link>
      </div>

      {/* Related Assessments Section */}
      {related.length > 0 && (
        <section className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              Related Self-Assessments
            </h2>
            <Link
              href="/explore"
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {related.slice(0, 2).map((item) => (
              <AssessmentCard key={item.slug} assessment={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
