import React from "react";
import { Card } from "@/components/ui/Card";
import { Sparkles, Info } from "lucide-react";

export interface ResultInsightProps {
  insights?: string[];
  tierSummary: string;
  className?: string;
}

export const ResultInsight: React.FC<ResultInsightProps> = ({
  insights = [],
  tierSummary,
  className = "",
}) => {
  return (
    <Card variant="default" className={`p-5 sm:p-7 space-y-4 ${className}`}>
      <div className="flex items-center gap-2 pb-1 border-b border-surface-border">
        <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
        <h2 className="text-base sm:text-lg font-bold text-foreground">
          Profile Analysis & Insights
        </h2>
      </div>

      <div className="space-y-3 text-xs sm:text-sm text-foreground/90 leading-relaxed">
        {insights.length > 0 ? (
          insights.map((insight, idx) => (
            <p key={idx} className="leading-relaxed">
              {insight}
            </p>
          ))
        ) : (
          <p>{tierSummary}</p>
        )}
      </div>
    </Card>
  );
};
