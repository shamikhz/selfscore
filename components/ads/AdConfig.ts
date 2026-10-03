import { ADSTERRA_KEYS } from "./AdKeys";

export type AdFormat = "banner728" | "rectangle300" | "skyscraper160" | "mobile320" | "native" | "responsiveBanner";

export interface AdPlacementConfig {
  enabled: boolean;
  format: AdFormat;
  adKey?: string;
  width: number;
  height: number;
  label?: string;
}

export interface AdSystemConfig {
  globalEnabled: boolean;
  mode: "marker" | "live";
  placements: {
    // Homepage
    homeTop: AdPlacementConfig;
    homeMid: AdPlacementConfig;
    homeBottom: AdPlacementConfig;
    homeSidebarLeft: AdPlacementConfig;
    homeSidebarRight: AdPlacementConfig;

    // Explore page
    exploreTop: AdPlacementConfig;
    exploreMid: AdPlacementConfig;
    exploreBottom: AdPlacementConfig;
    exploreSidebar: AdPlacementConfig;

    // Assessment Intro
    assessmentIntroTop: AdPlacementConfig;
    assessmentIntroMid: AdPlacementConfig;
    assessmentIntroBottom: AdPlacementConfig;
    assessmentIntroLeft: AdPlacementConfig;
    assessmentIntroRight: AdPlacementConfig;

    // Question runner
    questionBanner: AdPlacementConfig;
    questionScreen: AdPlacementConfig;
    questionSidebarLeft: AdPlacementConfig;
    questionSidebarRight: AdPlacementConfig;

    // Individual Result page
    resultsTop: AdPlacementConfig;
    resultsMiddle: AdPlacementConfig;
    resultsBottom: AdPlacementConfig;
    resultsSidebarLeft: AdPlacementConfig;
    resultsSidebarRight: AdPlacementConfig;

    // Results History page
    resultsListTop: AdPlacementConfig;
    resultsListMid: AdPlacementConfig;
    resultsListBottom: AdPlacementConfig;

    // About Page
    aboutTop: AdPlacementConfig;
    aboutBottom: AdPlacementConfig;

    // Privacy & Terms Pages
    privacyBottom: AdPlacementConfig;
    termsBottom: AdPlacementConfig;

    // Legacy aliases for backward compatibility
    home: AdPlacementConfig;
    explore: AdPlacementConfig;
    assessmentIntro: AdPlacementConfig;
    resultsList: AdPlacementConfig;
    resultsMain: AdPlacementConfig;
    resultsSecondary: AdPlacementConfig;
  };
}

export const AD_CONFIG: AdSystemConfig = {
  globalEnabled: true,
  mode: "marker",
  placements: {
    // 1. Homepage Placements (3-4 ads)
    homeTop: {
      enabled: true,
      format: "responsiveBanner",
      adKey: ADSTERRA_KEYS.LEADERBOARD_728x90,
      width: 728,
      height: 90,
      label: "Sponsored Resource",
    },
    homeMid: {
      enabled: true,
      format: "rectangle300",
      adKey: ADSTERRA_KEYS.RECTANGLE_300x250,
      width: 300,
      height: 250,
      label: "Partner Feature",
    },
    homeBottom: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Recommended Resources",
    },
    homeSidebarLeft: {
      enabled: true,
      format: "skyscraper160",
      adKey: ADSTERRA_KEYS.SKYSCRAPER_160x600,
      width: 160,
      height: 600,
      label: "Sponsored",
    },
    homeSidebarRight: {
      enabled: true,
      format: "skyscraper160",
      adKey: ADSTERRA_KEYS.SKYSCRAPER_160x600,
      width: 160,
      height: 600,
      label: "Sponsored",
    },

    // 2. Explore Page Placements (3-4 ads)
    exploreTop: {
      enabled: true,
      format: "responsiveBanner",
      adKey: ADSTERRA_KEYS.LEADERBOARD_728x90,
      width: 728,
      height: 90,
      label: "Sponsored",
    },
    exploreMid: {
      enabled: true,
      format: "rectangle300",
      adKey: ADSTERRA_KEYS.RECTANGLE_300x250,
      width: 300,
      height: 250,
      label: "Partner Content",
    },
    exploreBottom: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Recommended For You",
    },
    exploreSidebar: {
      enabled: true,
      format: "skyscraper160",
      adKey: ADSTERRA_KEYS.SKYSCRAPER_160x600,
      width: 160,
      height: 600,
      label: "Sponsored Partner",
    },

    // 3. Assessment Intro Placements (3-4 ads)
    assessmentIntroTop: {
      enabled: true,
      format: "responsiveBanner",
      adKey: ADSTERRA_KEYS.LEADERBOARD_728x90,
      width: 728,
      height: 90,
      label: "Sponsored Partner",
    },
    assessmentIntroMid: {
      enabled: true,
      format: "rectangle300",
      adKey: ADSTERRA_KEYS.RECTANGLE_300x250,
      width: 300,
      height: 250,
      label: "Curated Resource",
    },
    assessmentIntroBottom: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Recommended Tools",
    },
    assessmentIntroLeft: {
      enabled: true,
      format: "skyscraper160",
      adKey: ADSTERRA_KEYS.SKYSCRAPER_160x600,
      width: 160,
      height: 600,
      label: "Sponsored",
    },
    assessmentIntroRight: {
      enabled: true,
      format: "rectangle300",
      adKey: ADSTERRA_KEYS.RECTANGLE_300x250,
      width: 300,
      height: 250,
      label: "Partner Tool",
    },

    // 4. Question Runner Quiz Screen (3-4 ads)
    questionBanner: {
      enabled: true,
      format: "mobile320",
      adKey: ADSTERRA_KEYS.MOBILE_320x50,
      width: 320,
      height: 50,
      label: "Sponsored Banner",
    },
    questionScreen: {
      enabled: true,
      format: "rectangle300",
      adKey: ADSTERRA_KEYS.RECTANGLE_300x250,
      width: 300,
      height: 250,
      label: "Sponsored",
    },
    questionSidebarLeft: {
      enabled: true,
      format: "skyscraper160",
      adKey: ADSTERRA_KEYS.SKYSCRAPER_160x600,
      width: 160,
      height: 600,
      label: "Partner Feature",
    },
    questionSidebarRight: {
      enabled: true,
      format: "skyscraper160",
      adKey: ADSTERRA_KEYS.SKYSCRAPER_160x600,
      width: 160,
      height: 600,
      label: "Sponsored Tool",
    },

    // 5. Result Page Placements (3-4 ads)
    resultsTop: {
      enabled: true,
      format: "responsiveBanner",
      adKey: ADSTERRA_KEYS.LEADERBOARD_728x90,
      width: 728,
      height: 90,
      label: "Partner Offer",
    },
    resultsMiddle: {
      enabled: true,
      format: "rectangle300",
      adKey: ADSTERRA_KEYS.RECTANGLE_300x250,
      width: 300,
      height: 250,
      label: "Growth Partner",
    },
    resultsBottom: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Recommended Next Steps",
    },
    resultsSidebarLeft: {
      enabled: true,
      format: "skyscraper160",
      adKey: ADSTERRA_KEYS.SKYSCRAPER_160x600,
      width: 160,
      height: 600,
      label: "Sponsored",
    },
    resultsSidebarRight: {
      enabled: true,
      format: "skyscraper160",
      adKey: ADSTERRA_KEYS.SKYSCRAPER_160x600,
      width: 160,
      height: 600,
      label: "Sponsored",
    },

    // 6. Results History Placements (3-4 ads)
    resultsListTop: {
      enabled: true,
      format: "responsiveBanner",
      adKey: ADSTERRA_KEYS.LEADERBOARD_728x90,
      width: 728,
      height: 90,
      label: "Sponsored",
    },
    resultsListMid: {
      enabled: true,
      format: "rectangle300",
      adKey: ADSTERRA_KEYS.RECTANGLE_300x250,
      width: 300,
      height: 250,
      label: "Growth Partner",
    },
    resultsListBottom: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Recommended Tools",
    },

    // 7. About Page Placements
    aboutTop: {
      enabled: true,
      format: "responsiveBanner",
      adKey: ADSTERRA_KEYS.LEADERBOARD_728x90,
      width: 728,
      height: 90,
      label: "Sponsored Resource",
    },
    aboutBottom: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Recommended Resources",
    },

    // 8. Privacy & Terms Placements
    privacyBottom: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Sponsored Tools",
    },
    termsBottom: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Sponsored Tools",
    },

    // Aliases
    home: {
      enabled: true,
      format: "responsiveBanner",
      adKey: ADSTERRA_KEYS.LEADERBOARD_728x90,
      width: 728,
      height: 90,
      label: "Sponsored Resource",
    },
    explore: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Recommended For You",
    },
    assessmentIntro: {
      enabled: true,
      format: "rectangle300",
      adKey: ADSTERRA_KEYS.RECTANGLE_300x250,
      width: 300,
      height: 250,
      label: "Sponsored Partner",
    },
    resultsList: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Recommended Tools",
    },
    resultsMain: {
      enabled: true,
      format: "rectangle300",
      adKey: ADSTERRA_KEYS.RECTANGLE_300x250,
      width: 300,
      height: 250,
      label: "Sponsored Partner",
    },
    resultsSecondary: {
      enabled: true,
      format: "native",
      width: 728,
      height: 160,
      label: "Recommended Resources",
    },
  },
};
