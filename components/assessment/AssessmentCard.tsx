import React from "react";
import Link from "next/link";
import { Clock, HelpCircle, ArrowRight } from "lucide-react";
import { AssessmentMeta } from "@/types/assessment";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface AssessmentCardProps {
  assessment: AssessmentMeta;
  isCompleted?: boolean;
}

export const AssessmentCard: React.FC<AssessmentCardProps> = ({
  assessment,
  isCompleted = false,
}) => {
  return (
    <Link
      href={`/assessment/${assessment.slug}`}
      className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
    >
      <Card
        variant="interactive"
        className="h-full flex flex-col justify-between"
      >
        <div>
          {/* Header row: Category & Completed Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <Badge variant="neutral" size="sm" className="capitalize">
              {assessment.category}
            </Badge>

            {isCompleted ? (
              <Badge variant="success" size="sm">
                Completed
              </Badge>
            ) : assessment.popular ? (
              <Badge variant="primary" size="sm">
                Popular
              </Badge>
            ) : null}
          </div>

          {/* Title & Description */}
          <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors tracking-tight">
            {assessment.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
            {assessment.shortDescription}
          </p>
        </div>

        {/* Footer: Metadata & Arrow CTA */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-surface-border/60 text-xs text-muted">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {assessment.estimatedDuration}
            </span>
            <span className="inline-flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
              {assessment.questionCount} Qs
            </span>
          </div>

          <span className="inline-flex items-center gap-1 font-medium text-primary group-hover:translate-x-0.5 transition-transform">
            Start <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </div>
      </Card>
    </Link>
  );
};
