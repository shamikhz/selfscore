import React from "react";

export interface ProgressBarProps {
  value: number; // current value
  max?: number; // total max value (default 100)
  label?: string; // accessible description
  className?: string;
  showPercent?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label = "Assessment Progress",
  className = "",
  showPercent = false,
}) => {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {showPercent && (
        <div className="flex justify-between items-center text-xs text-muted-foreground mb-1.5 font-medium">
          <span>{label}</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className="w-full h-2 bg-surface-subtle border border-surface-border/50 rounded-full overflow-hidden"
      >
        <div
          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
