export type AdFormat = "banner" | "rectangle" | "nativeCard";

export interface AdPlacementConfig {
  enabled: boolean;
  format: AdFormat;
  minHeight: number;
  label?: string;
  sponsorName?: string;
  sponsorTagline?: string;
  sponsorUrl?: string;
  liveAdTag?: string;
  liveAdSlotId?: string;
}

export interface AdSystemConfig {
  globalEnabled: boolean;
  isDevelopmentPlaceholder: boolean;
  placements: {
    home: AdPlacementConfig;
    homeBottom: AdPlacementConfig;
    explore: AdPlacementConfig;
    assessmentIntro: AdPlacementConfig;
    questionScreen: AdPlacementConfig;
    resultsMain: AdPlacementConfig;
    resultsSecondary: AdPlacementConfig;
    resultsList: AdPlacementConfig;
    resultsTop: AdPlacementConfig;
    resultsMiddle: AdPlacementConfig;
    resultsBottom: AdPlacementConfig;
    questionBanner: AdPlacementConfig;
    questionSidebarLeft: AdPlacementConfig;
    questionSidebarRight: AdPlacementConfig;
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
      sponsorUrl: "https://selfscore.pages.dev/about",
    },
    homeBottom: {
      enabled: true,
      format: "nativeCard",
      minHeight: 140,
      label: "Partner Feature",
      sponsorName: "DeepHabits App",
      sponsorTagline: "Turn your assessment strengths into lasting daily routines without burnout.",
      sponsorUrl: "https://selfscore.pages.dev/about",
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
      enabled: true,
      format: "nativeCard",
      minHeight: 130,
      label: "Sponsored Partner",
      sponsorName: "Growth Partner",
      sponsorTagline: "Curated tools and resources for intentional self-reflection.",
    },
    questionScreen: {
      enabled: true,
      format: "nativeCard",
      minHeight: 110,
      label: "Sponsored",
      sponsorName: "FocusCraft",
      sponsorTagline: "Mindfulness & productivity tools to sharpen your focus.",
    },
    questionBanner: {
      enabled: true,
      format: "nativeCard",
      minHeight: 90,
      label: "Sponsored Banner",
      sponsorName: "FocusCraft Tools",
      sponsorTagline: "Elevate daily focus with evidence-based cognitive routines.",
    },
    questionSidebarLeft: {
      enabled: true,
      format: "nativeCard",
      minHeight: 250,
      label: "Partner Feature",
      sponsorName: "DeepHabits App",
      sponsorTagline: "Turn reflection into daily action with structured goal tracking.",
    },
    questionSidebarRight: {
      enabled: true,
      format: "nativeCard",
      minHeight: 250,
      label: "Sponsored Tool",
      sponsorName: "Mindful Workspace",
      sponsorTagline: "Distraction-free environment for deep analytical thinking.",
    },
    resultsMain: {
      enabled: true,
      format: "nativeCard",
      minHeight: 140,
      label: "Growth Partner Offer",
      sponsorName: "Mindful Clarity Guide",
      sponsorTagline: "Structured frameworks to cultivate cognitive calm and financial intentionality.",
    },
    resultsSecondary: {
      enabled: true,
      format: "nativeCard",
      minHeight: 130,
      label: "Partner Resource",
      sponsorName: "FocusCraft Journal",
      sponsorTagline: "Daily reflection prompts & habits designed for high-performance minds.",
    },
    resultsList: {
      enabled: true,
      format: "nativeCard",
      minHeight: 130,
      label: "Recommended Tool",
      sponsorName: "Personal Growth Digest",
      sponsorTagline: "Weekly evidence-based essays on psychology, decision making, and focus.",
    },
    resultsTop: {
      enabled: true,
      format: "nativeCard",
      minHeight: 130,
      label: "Sponsored Partner",
      sponsorName: "Mindful Clarity Guide",
      sponsorTagline: "Structured frameworks to cultivate cognitive calm and financial intentionality.",
    },
    resultsMiddle: {
      enabled: true,
      format: "nativeCard",
      minHeight: 130,
      label: "Growth Partner",
      sponsorName: "FocusCraft Journal",
      sponsorTagline: "Daily reflection prompts & habits designed for high-performance minds.",
    },
    resultsBottom: {
      enabled: true,
      format: "nativeCard",
      minHeight: 130,
      label: "Recommended Partner",
      sponsorName: "Personal Growth Digest",
      sponsorTagline: "Weekly evidence-based essays on psychology, decision making, and focus.",
    },
  },
};
