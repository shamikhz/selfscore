import React from "react";
import { Check } from "lucide-react";
import { AnswerOption as AnswerOptionType } from "@/types/question";

export interface LikertScaleProps {
  options: AnswerOptionType[];
  selectedValue?: number;
  selectedOptionId?: string;
  onSelect: (value: number, optionId: string) => void;
}

export const LikertScale: React.FC<LikertScaleProps> = ({
  options,
  selectedValue,
  selectedOptionId,
  onSelect,
}) => {
  return (
    <div
      role="radiogroup"
      aria-label="Rating scale"
      className="space-y-2.5 sm:space-y-3"
    >
      {options.map((option, idx) => {
        const isSelected = selectedOptionId
          ? selectedOptionId === option.id
          : typeof selectedValue === "number" && selectedValue === option.value;

        return (
          <button
            key={option.id || option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(option.value, option.id)}
            className={`w-full min-h-touch px-4 py-3.5 rounded-xl text-left transition-all select-none no-select flex items-center justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.99] touch-manipulation border ${
              isSelected
                ? "bg-primary-subtle/80 border-primary text-foreground shadow-subtle"
                : "bg-surface border-surface-border text-foreground/90 hover:bg-surface-subtle/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors ${
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted/40 text-muted bg-surface-subtle"
                }`}
              >
                {idx + 1}
              </span>
              <span className="text-sm sm:text-base font-medium">
                {option.label}
              </span>
            </div>

            {isSelected && (
              <Check className="w-4 h-4 text-primary shrink-0 stroke-[2.5]" aria-hidden="true" />
            )}
          </button>
        );
      })}
    </div>
  );
};
