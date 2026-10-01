import React from "react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";

export interface QuestionProgressProps {
  currentIndex: number; // 0-based
  totalQuestions: number;
  dimension?: string;
  className?: string;
}

export const QuestionProgress: React.FC<QuestionProgressProps> = ({
  currentIndex,
  totalQuestions,
  dimension,
  className = "",
}) => {
  const currentNumber = currentIndex + 1;
  const percentage = Math.round((currentNumber / totalQuestions) * 100);

  return (
    <div className={`space-y-2 select-none no-select ${className}`}>
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">
            Question {currentNumber} of {totalQuestions}
          </span>
          {dimension && (
            <Badge variant="neutral" size="sm">
              {dimension}
            </Badge>
          )}
        </div>
        <span className="text-muted font-medium" aria-hidden="true">
          {percentage}%
        </span>
      </div>

      <ProgressBar
        value={currentNumber}
        max={totalQuestions}
        label={`Question ${currentNumber} of ${totalQuestions}`}
      />
    </div>
  );
};
