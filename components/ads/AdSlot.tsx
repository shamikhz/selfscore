"use client";

import React, { useEffect, useState } from "react";
import { Megaphone, Sparkles, Tag } from "lucide-react";
import { AD_CONFIG, AdPlacementConfig } from "./AdConfig";
import { ADSTERRA_KEYS } from "./AdKeys";
import { AdsterraBanner } from "./AdsterraBanner";
import { AdsterraNative } from "./AdsterraNative";

export interface AdSlotProps {
  placement: keyof typeof AD_CONFIG.placements;
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ placement, className = "" }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const placementConfig: AdPlacementConfig = AD_CONFIG.placements[placement];

  if (!AD_CONFIG.globalEnabled || !placementConfig || !placementConfig.enabled) {
    return null;
  }

  const {
    format,
    adKey,
    width,
    height,
    label = "Sponsored",
  } = placementConfig;

  // SSR Skeleton / Hydration Guard: Prevents HTML mismatch during hydration
  if (!isMounted) {
    return (
      <aside
        aria-label={label}
        role="complementary"
        className={`w-full flex items-center justify-center my-3 overflow-hidden ${className}`}
        style={{
          minHeight: `${height + (format === "native" ? 20 : 18)}px`,
        }}
      >
        <div
          className="w-full max-w-full rounded-xl border border-surface-border/40 bg-surface-subtle/20"
          style={{ minHeight: `${height}px` }}
        />
      </aside>
    );
  }

  // MARKER MODE: Visually marks ad placement slots without executing any Adsterra scripts/ads
  if (AD_CONFIG.mode === "marker") {
    if (format === "native") {
      return (
        <aside aria-label={label} role="complementary" className={`w-full my-4 ${className}`}>
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-primary/40 bg-primary-subtle/30 text-center min-h-[140px]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Ad Placement Slot • Native Recommendation Feed</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Category: <strong className="text-foreground font-semibold">{label}</strong> • Reserved Zero-CLS Container
            </p>
          </div>
        </aside>
      );
    }

    if (format === "responsiveBanner") {
      return (
        <aside
          aria-label={label}
          role="complementary"
          className={`w-full flex flex-col items-center justify-center my-4 overflow-hidden ${className}`}
        >
          <div className="w-full flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 border-dashed border-primary/40 bg-primary-subtle/30 text-center min-h-[70px] sm:min-h-[90px]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Megaphone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Ad Placement Slot • Responsive Banner (728x90 Desktop / 320x50 Mobile)</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Placement Label: <strong className="text-foreground font-semibold">{label}</strong>
            </p>
          </div>
        </aside>
      );
    }

    return (
      <aside
        aria-label={label}
        role="complementary"
        className={`flex flex-col items-center justify-center my-3 overflow-hidden ${className}`}
        style={{
          minHeight: `${height + 18}px`,
          maxWidth: `${width}px`,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div
          className="w-full flex flex-col items-center justify-center p-3 rounded-xl border-2 border-dashed border-primary/40 bg-primary-subtle/30 text-center overflow-hidden"
          style={{ minHeight: `${height}px` }}
        >
          <div className="flex flex-col items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Tag className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Ad Placement</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-surface-border text-[11px] font-mono font-semibold text-foreground">
              {width}x{height}
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground mt-2">{label}</span>
        </div>
      </aside>
    );
  }

  // LIVE MODE: 1. Native Recommendation Feed
  if (format === "native") {
    return (
      <aside aria-label={label} role="complementary" className={`w-full my-4 ${className}`}>
        <AdsterraNative />
      </aside>
    );
  }

  // LIVE MODE: 2. Responsive Top/Bottom Banner (728x90 on Desktop, 320x50 on Mobile)
  if (format === "responsiveBanner") {
    return (
      <aside
        aria-label={label}
        role="complementary"
        className={`w-full flex flex-col items-center justify-center my-4 overflow-hidden ${className}`}
      >
        <span className="text-[10px] font-semibold tracking-wider uppercase text-muted mb-1">
          {label}
        </span>
        {/* Desktop View (>= 640px): 728x90 */}
        <div className="hidden sm:flex justify-center w-full min-h-[90px]">
          <AdsterraBanner
            adKey={adKey || ADSTERRA_KEYS.LEADERBOARD_728x90}
            width={728}
            height={90}
            label={label}
          />
        </div>
        {/* Mobile View (< 640px): 320x50 */}
        <div className="flex sm:hidden justify-center w-full min-h-[50px]">
          <AdsterraBanner
            adKey={ADSTERRA_KEYS.MOBILE_320x50}
            width={320}
            height={50}
            label={label}
          />
        </div>
      </aside>
    );
  }

  // LIVE MODE: 3. Fixed Format Units (300x250, 160x600, 320x50)
  return (
    <aside
      aria-label={label}
      role="complementary"
      className={`flex flex-col items-center justify-center my-3 overflow-hidden ${className}`}
      style={{
        minHeight: `${height + 18}px`,
        maxWidth: `${width}px`,
        width: "100%",
        margin: "0 auto",
      }}
    >
      <span className="text-[10px] font-semibold tracking-wider uppercase text-muted mb-1 self-center">
        {label}
      </span>
      <div
        className="w-full flex items-center justify-center rounded-xl border border-surface-border bg-surface-subtle/40 p-1 overflow-hidden"
        style={{ minHeight: `${height}px` }}
      >
        <AdsterraBanner
          adKey={adKey || ADSTERRA_KEYS.RECTANGLE_300x250}
          width={width}
          height={height}
          label={label}
        />
      </div>
    </aside>
  );
};

export default AdSlot;
