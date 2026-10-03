import { MetadataRoute } from "next";
import { ASSESSMENTS_CATALOG } from "@/lib/assessments-catalog";

const BASE_URL = "https://selfscore.pages.dev";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core static marketing and platform routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/explore`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/results`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic assessment hub routes generated from catalog
  const assessmentRoutes: MetadataRoute.Sitemap = ASSESSMENTS_CATALOG.map((assessment) => ({
    url: `${BASE_URL}/assessment/${assessment.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: assessment.featured ? 0.9 : 0.8,
  }));

  return [...staticRoutes, ...assessmentRoutes];
}
