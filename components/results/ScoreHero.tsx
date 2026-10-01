import React from "react";
import { AssessmentResult } from "@/types/result";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Award, Calendar, CheckCircle } from "lucide-react";

export interface ScoreHeroProps {
  result: AssessmentResult;
  assessmentTitle: string;
}

export const ScoreHero: React.FC<ScoreHeroProps> = ({ result, assessmentTitle }) => {
  const { score, tier, completedAt } = result;
  const formattedDate = new Date(completedAt).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Calculate SVG stroke offset for radial ring (radius 44 => circumference ~276.46)
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <Card
      variant="default"
      className="p-6 sm:p-8 text-center relative overflow-hidden space-y-6"
    >
      {/* Top Meta info */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5 font-medium">
          <Award className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
          <span>Official Evaluation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
          <time dateTime={completedAt}>{formattedDate}</time>
        </div>
      </div>

      {/* Main Radial Score Display */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg
            className="w-full h-full -rotate-90 transform"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            {/* Background Track */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="7"
              fill="transparent"
              className="text-surface-subtle"
            />
            {/* Animated Score Progress */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="7"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="text-primary transition-all duration-1000 ease-out"
            />
          </svg>

          {/* Centered Score Number */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="text-4xl font-extrabold tracking-tight text-foreground font-mono"
              aria-label={`Score: ${score} out of 100`}
            >
              {score}
            </span>
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
              out of 100
            </span>
          </div>
        </div>

        {/* Tier Classification Badge */}
        <div className="pt-1">
          <Badge
            variant={score >= 75 ? "success" : score >= 50 ? "primary" : "neutral"}
            size="md"
            className="px-3 py-1 font-semibold tracking-wide"
          >
            {tier.label}
          </Badge>
        </div>
      </div>

      {/* Summary Interpretation */}
      <div className="max-w-md mx-auto space-y-2">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          {assessmentTitle}
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {tier.summary}
        </p>
      </div>
    </Card>
  );
};
