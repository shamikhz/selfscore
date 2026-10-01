import React from "react";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, TrendingUp } from "lucide-react";

export interface StrengthsProps {
  strengths?: string[];
  growthAreas?: string[];
  className?: string;
}

export const Strengths: React.FC<StrengthsProps> = ({
  strengths = [],
  growthAreas = [],
  className = "",
}) => {
  if (strengths.length === 0 && growthAreas.length === 0) return null;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {/* Standout Strengths Card */}
      {strengths.length > 0 && (
        <Card variant="default" className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 pb-1 border-b border-surface-border">
            <div className="w-6 h-6 rounded-md bg-success/10 text-success flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-foreground">
              Key Strengths
            </h3>
          </div>

          <ul className="space-y-3">
            {strengths.map((strength, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Areas for Growth Card */}
      {growthAreas.length > 0 && (
        <Card variant="default" className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 pb-1 border-b border-surface-border">
            <div className="w-6 h-6 rounded-md bg-warning/10 text-warning flex items-center justify-center">
              <TrendingUp className="w-4 h-4" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-foreground">
              Growth Opportunities
            </h3>
          </div>

          <ul className="space-y-3">
            {growthAreas.map((area, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};
