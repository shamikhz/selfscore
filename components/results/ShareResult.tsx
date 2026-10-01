"use client";

import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface ShareResultProps {
  assessmentTitle: string;
  score: number;
  tierLabel: string;
}

export const ShareResult: React.FC<ShareResultProps> = ({
  assessmentTitle,
  score,
  tierLabel,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${assessmentTitle} Score | SelfScore`,
      text: `I completed the ${assessmentTitle} self-assessment on SelfScore and scored ${score}/100 (${tierLabel}). Check your score:`,
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    if (
      typeof navigator !== "undefined" &&
      navigator.share &&
      navigator.canShare &&
      navigator.canShare(shareData)
    ) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // User cancelled or share dismissed - continue to fallback
        if ((err as Error)?.name === "AbortError") return;
      }
    }

    // Fallback: Copy link to clipboard
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(
          `${shareData.text} ${shareData.url}`
        );
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.warn("[Share] Clipboard write failed:", err);
      }
    }
  };

  return (
    <Button
      variant="outline"
      size="md"
      onClick={handleShare}
      className="flex-1 sm:flex-initial min-w-[130px]"
      aria-label="Share assessment result"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-2 text-success" aria-hidden="true" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
          <span>Share Result</span>
        </>
      )}
    </Button>
  );
};
