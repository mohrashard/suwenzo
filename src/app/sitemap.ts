import type { MetadataRoute } from "next";
import { BRAND } from "@/content/site";
import { getPublishedBlogPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date("2026-10-23T08:00:00+05:30");

  const coreRoutes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    lastModified?: Date;
  }> = [
    // Core & Hubs
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/how-it-works", changeFrequency: "weekly", priority: 0.9 },
    { path: "/features", changeFrequency: "weekly", priority: 0.9 },
    { path: "/for", changeFrequency: "weekly", priority: 0.9 },
    { path: "/faq", changeFrequency: "weekly", priority: 0.8 },
    { path: "/facts", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },

    // Feature Spokes
    { path: "/features/patient-records", changeFrequency: "weekly", priority: 0.8 },
    { path: "/features/digital-prescriptions", changeFrequency: "weekly", priority: 0.8 },
    { path: "/features/stock-and-expiry", changeFrequency: "weekly", priority: 0.8 },
    { path: "/features/whatsapp-reminders", changeFrequency: "weekly", priority: 0.8 },

    // Practice Type Spokes
    { path: "/for/solo-doctors", changeFrequency: "weekly", priority: 0.8 },
    { path: "/for/clinics-with-dispensary", changeFrequency: "weekly", priority: 0.8 },
    { path: "/for/consulting-only-practices", changeFrequency: "weekly", priority: 0.8 },
    { path: "/for/multi-doctor-practices", changeFrequency: "weekly", priority: 0.8 },

    // Blog Hub
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },

    // Legal & Policy
    { path: "/privacy", changeFrequency: "monthly", priority: 0.4 },
    { path: "/terms", changeFrequency: "monthly", priority: 0.4 },
  ];

  const blogRoutes = getPublishedBlogPosts().map((post) => ({
    url: `${BRAND.canonicalUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const coreSitemapEntries = coreRoutes.map((route) => ({
    url: `${BRAND.canonicalUrl}${route.path}`,
    lastModified: route.lastModified || currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...coreSitemapEntries, ...blogRoutes];
}
