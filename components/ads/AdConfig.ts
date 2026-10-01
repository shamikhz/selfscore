export type AdFormat = "banner" | "rectangle" | "nativeCard";

export interface AdPlacementConfig {
  enabled: boolean;
  format: AdFormat;
  minHeight: number;
  label?: string;
  sponsorName?: string;
  sponsorTagline?: string;
}

export interface AdSystemConfig {
  globalEnabled: boolean;
  isDevelopmentPlaceholder: boolean;
  placements: {
    home: AdPlacementConfig;
    explore: AdPlacementConfig;
    assessmentIntro: AdPlacementConfig;
    questionScreen: AdPlacementConfig;
    resultsMain: AdPlacementConfig;
    resultsSecondary: AdPlacementConfig;
    resultsList: AdPlacementConfig;
  };
}

export const AD_CONFIG: AdSystemConfig = {
  globalEnabled: true,
  // Show elegant native placeholder cards in development or when live scripts are not configured
  isDevelopmentPlaceholder: true,
  placements: {
    home: {
      enabled: true,
      format: "nativeCard",
      minHeight: 140,
      label: "Sponsored Resource",
      sponsorName: "FocusCraft",
      sponsorTagline: "Science-backed tools & journaling prompts for daily cognitive performance.",
    },
    explore: {
      enabled: true,
      format: "nativeCard",
      minHeight: 140,
      label: "Partner Feature",
      sponsorName: "DeepHabits App",
      sponsorTagline: "Turn your assessment strengths into lasting daily routines without burnout.",
    },
    assessmentIntro: {
      enabled: false,
      format: "banner",
      minHeight: 90,
      label: "Sponsored",
    },
    questionScreen: {
      // STRICT RULE: Strictly disabled during active question runner (Zero distraction & 0 layout shift)
      enabled: false,
      format: "banner",
      minHeight: 0,
    },
    resultsMain: {
      enabled: true,
      format: "nativeCard",
      minHeight: 160,
      label: "Growth Partner Offer",
      sponsorName: "Mindful Clarity Guide",
      sponsorTagline: "Structured frameworks to cultivate cognitive calm and financial intentionality.",
    },
    resultsSecondary: {
      enabled: false,
      format: "rectangle",
      minHeight: 250,
      label: "Sponsored",
    },
    resultsList: {
      enabled: true,
      format: "nativeCard",
      minHeight: 130,
      label: "Recommended Tool",
      sponsorName: "Personal Growth Digest",
      sponsorTagline: "Weekly evidence-based essays on psychology, decision making, and focus.",
    },
  },
};
