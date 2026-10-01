import React from "react";
import { Check } from "lucide-react";
import { AnswerOption as AnswerOptionType } from "@/types/question";

export interface AnswerOptionProps {
  option: AnswerOptionType;
  isSelected: boolean;
  onSelect: (value: number) => void;
  index: number;
}

const INDEX_LABELS = ["A", "B", "C", "D", "E", "F", "G"];

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  option,
  isSelected,
  onSelect,
  index,
}) => {
  const labelPrefix = INDEX_LABELS[index] || `${index + 1}`;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={() => onSelect(option.value)}
      className={`w-full min-h-touch p-4 rounded-xl text-left transition-all select-none no-select flex items-start gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.99] touch-manipulation border ${
        isSelected
          ? "bg-primary-subtle/70 border-primary text-foreground shadow-subtle"
          : "bg-surface border-surface-border text-foreground/90 hover:border-surface-border hover:bg-surface-subtle/50"
      }`}
    >
      {/* Option Key Badge or Checkmark */}
      <div
        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-semibold shrink-0 transition-colors mt-0.5 ${
          isSelected
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-surface-subtle text-muted-foreground border border-surface-border"
        }`}
      >
        {isSelected ? (
          <Check className="w-3.5 h-3.5 stroke-[3]" aria-hidden="true" />
        ) : (
          labelPrefix
        )}
      </div>

      {/* Option Text and Description */}
      <div className="flex-1 space-y-0.5">
        <div className="text-sm sm:text-base font-medium leading-snug">
          {option.label}
        </div>
        {option.description && (
          <p className="text-xs text-muted-foreground leading-relaxed">
            {option.description}
          </p>
        )}
      </div>
    </button>
  );
};
