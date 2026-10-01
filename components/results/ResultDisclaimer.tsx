import React from "react";
import { Card } from "@/components/ui/Card";
import { ShieldAlert } from "lucide-react";

export interface ResultDisclaimerProps {
  customDisclaimer?: string;
  className?: string;
}

export const ResultDisclaimer: React.FC<ResultDisclaimerProps> = ({
  customDisclaimer,
  className = "",
}) => {
  return (
    <Card
      variant="subtle"
      className={`p-4 sm:p-5 border border-surface-border/80 flex items-start gap-3.5 ${className}`}
    >
      <div className="p-1.5 rounded-lg bg-surface text-muted-foreground shrink-0 mt-0.5">
        <ShieldAlert className="w-4 h-4 text-muted" aria-hidden="true" />
      </div>

      <div className="space-y-1 text-xs text-muted-foreground leading-relaxed">
        <p className="font-semibold text-foreground">
          Educational Self-Assessment Notice
        </p>
        <p>
          {customDisclaimer ||
            "This assessment provides an informal indication based on your self-reported answers. It is designed for personal insight and educational reflection, and is not a clinical diagnosis, psychological evaluation, or professional consultation."}
        </p>
      </div>
    </Card>
  );
};
