import React from "react";
import { AD_CONFIG, AdPlacementConfig } from "./AdConfig";
import { Sparkles, ExternalLink } from "lucide-react";

export interface AdSlotProps {
  placement: keyof typeof AD_CONFIG.placements;
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ placement, className = "" }) => {
  const placementConfig: AdPlacementConfig = AD_CONFIG.placements[placement];

  if (!AD_CONFIG.globalEnabled || !placementConfig || !placementConfig.enabled) {
    return null;
  }

  const {
    minHeight,
    label = "Sponsored",
    sponsorName = "Growth Partner",
    sponsorTagline = "Curated resources for mindful living and personal reflection.",
    format = "nativeCard",
  } = placementConfig;

  return (
    <aside
      aria-label={label}
      role="complementary"
      className={`w-full max-w-xl mx-auto my-6 px-1 ${className}`}
      style={{
        minHeight: `${minHeight}px`,
        contain: "layout size", // Guarantees zero Cumulative Layout Shift (CLS = 0)
      }}
    >
      {format === "nativeCard" ? (
        <div
          style={{ minHeight: `${minHeight}px` }}
          className="w-full flex flex-col justify-between p-4 rounded-xl border border-surface-border bg-surface-subtle/80 hover:bg-surface-subtle transition-colors shadow-subtle text-left"
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-surface border border-surface-border">
              <Sparkles className="w-2.5 h-2.5 text-accent" aria-hidden="true" />
              <span>{label}</span>
            </span>

            <span className="text-[11px] text-muted flex items-center gap-1 font-medium">
              <span>Partner</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-foreground tracking-tight">
              {sponsorName}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {sponsorTagline}
            </p>
          </div>

          <div className="mt-3 pt-2 border-t border-surface-border/60 flex items-center justify-between text-[11px] text-muted">
            <span>Non-intrusive sponsor notice</span>
            <span className="text-primary font-medium hover:underline cursor-pointer">
              Learn more →
            </span>
          </div>
        </div>
      ) : (
        <div
          style={{ minHeight: `${minHeight}px` }}
          className="w-full flex flex-col items-center justify-center p-4 rounded-xl border border-dashed border-surface-border bg-surface-subtle/60 text-center select-none"
        >
          <span className="text-[10px] uppercase tracking-wider font-semibold text-muted mb-1">
            {label}
          </span>
          <div className="text-xs text-muted-foreground max-w-xs">
            {AD_CONFIG.isDevelopmentPlaceholder ? (
              <span>Ad space reserved ({minHeight}px fixed container)</span>
            ) : (
              <div id={`ad-slot-${placement}`} className="w-full h-full" />
            )}
          </div>
        </div>
      )}
    </aside>
  );
};
