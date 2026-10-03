import React from "react";
import type { Metadata } from "next";
import { ResultsHistoryClient } from "@/components/results/ResultsHistoryClient";

export const metadata: Metadata = {
  title: "My Saved Results | SelfScore",
  description:
    "View your completed assessment history, cognitive reflections, and personal score breakdowns privately stored on this device.",
  alternates: {
    canonical: "https://selfscore.pages.dev/results",
  },
  openGraph: {
    title: "My Saved Results | SelfScore",
    description:
      "View your completed assessment history, cognitive reflections, and personal score breakdowns.",
    url: "https://selfscore.pages.dev/results",
    type: "website",
    images: [
      {
        url: "/icons/icon-512.png",
        width: 512,
        height: 512,
        alt: "SelfScore Saved Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Saved Results | SelfScore",
    description: "Privately view and reflect on your completed self-assessment results.",
    images: ["/icons/icon-512.png"],
  },
};

export default function ResultsPage() {
  return <ResultsHistoryClient />;
}
