import React from "react";
import { Card } from "@/components/ui/Card";
import { Compass, CheckSquare } from "lucide-react";

export interface RecommendationsProps {
  actionSteps?: string[];
  className?: string;
}

export const Recommendations: React.FC<RecommendationsProps> = ({
  actionSteps = [],
  className = "",
}) => {
  if (actionSteps.length === 0) return null;

  return (
    <Card variant="default" className={`p-5 sm:p-7 space-y-5 ${className}`}>
      <div className="flex items-center justify-between pb-1 border-b border-surface-border">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-primary" aria-hidden="true" />
          <h2 className="text-base sm:text-lg font-bold text-foreground">
            Recommended Action Steps
          </h2>
        </div>
        <span className="text-xs text-muted-foreground font-medium">
          Practical Application
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {actionSteps.map((step, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-surface-subtle/60 border border-surface-border flex flex-col justify-between space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Action {index + 1}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground leading-relaxed flex-1">
              {step}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};
