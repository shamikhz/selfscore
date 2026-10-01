import React from "react";
import { AdSlot } from "./AdSlot";
import { AD_CONFIG } from "./AdConfig";

export interface InlineAdProps {
  placement?: keyof typeof AD_CONFIG.placements;
  className?: string;
}

export const InlineAd: React.FC<InlineAdProps> = ({
  placement = "home",
  className = "",
}) => {
  return <AdSlot placement={placement} className={className} />;
};
