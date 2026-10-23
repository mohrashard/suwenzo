import type { MetadataRoute } from "next";
import { BRAND } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
    "ClaudeBot",
    "Claude-SearchBot",
    "Google-Extended",
    "Applebot-Extended",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/go/", "/api/"],
      },
      ...aiBots.map((bot) => ({
        userAgent: bot,
        allow: "/",
        disallow: ["/go/", "/api/"],
      })),
    ],
    sitemap: `${BRAND.canonicalUrl}/sitemap.xml`,
    host: BRAND.canonicalUrl,
  };
}
