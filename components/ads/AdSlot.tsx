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
    sponsorUrl = "https://selfscore.pages.dev/about",
    format = "nativeCard",
    liveAdTag,
  } = placementConfig;

  return (
    <aside
      aria-label={label}
      role="complementary"
      className={`w-full max-w-xl mx-auto px-1 ${className}`}
      style={{
        minHeight: `${minHeight}px`,
      }}
    >
      {format === "nativeCard" ? (
        <div
          style={{ minHeight: `${minHeight}px` }}
          className="w-full flex flex-col justify-between p-4 rounded-xl border border-surface-border bg-surface-subtle/80 hover:bg-surface-subtle transition-colors shadow-subtle text-left"
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-surface border border-surface-border">
              <Sparkles className="w-2.5 h-2.5 text-accent" aria-hidden="true" />
              <span>{label}</span>
            </span>

            <span className="text-xs text-muted flex items-center gap-1 font-medium">
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

          <div className="mt-3 pt-2 border-t border-surface-border/60 flex items-center justify-between text-xs text-muted">
            <span>Non-intrusive partner resource</span>
            <a
              href={sponsorUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-1"
            >
              Learn more →
            </a>
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
          <div className="text-xs text-muted-foreground max-w-xs w-full">
            {AD_CONFIG.isDevelopmentPlaceholder || !liveAdTag ? (
              <span>Ad space reserved ({minHeight}px fixed container)</span>
            ) : (
              <div
                id={`ad-slot-${placement}`}
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: liveAdTag }}
              />
            )}
          </div>
        </div>
      )}
    </aside>
  );
};
