import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Layers } from "lucide-react";

export interface ScoreBreakdownProps {
  dimensions: Record<string, number>;
  className?: string;
}

export const ScoreBreakdown: React.FC<ScoreBreakdownProps> = ({
  dimensions,
  className = "",
}) => {
  const dimensionEntries = Object.entries(dimensions);

  if (dimensionEntries.length === 0) return null;

  return (
    <Card variant="default" className={`p-5 sm:p-7 space-y-5 ${className}`}>
      <div className="flex items-center justify-between pb-1 border-b border-surface-border">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-primary" aria-hidden="true" />
          <h2 className="text-base sm:text-lg font-bold text-foreground">
            Dimension Breakdown
          </h2>
        </div>
        <span className="text-xs text-muted-foreground font-medium">
          {dimensionEntries.length} Dimensions Measured
        </span>
      </div>

      <div className="space-y-4">
        {dimensionEntries.map(([name, scoreVal]) => {
          const score = Math.round(scoreVal);
          const status =
            score >= 75
              ? { label: "Strong", variant: "success" as const }
              : score >= 50
              ? { label: "Balanced", variant: "primary" as const }
              : { label: "Growth Area", variant: "neutral" as const };

          return (
            <div key={name} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-foreground">{name}</span>
                <div className="flex items-center gap-2">
                  <Badge variant={status.variant} size="sm">
                    {status.label}
                  </Badge>
                  <span className="font-mono font-bold text-foreground min-w-[36px] text-right">
                    {score}%
                  </span>
                </div>
              </div>

              {/* Accessible Dimension Meter Bar */}
              <div
                role="meter"
                aria-label={name}
                aria-valuenow={score}
                aria-valuemin={0}
                aria-valuemax={100}
                className="w-full bg-surface-subtle h-2.5 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${
                    score >= 75
                      ? "bg-success"
                      : score >= 50
                      ? "bg-primary"
                      : "bg-warning"
                  }`}
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
