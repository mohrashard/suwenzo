import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/faq", changeFrequency: "weekly", priority: 0.9 },
    { path: "/facts", changeFrequency: "weekly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    // Features
    { path: "/features/patient-records", changeFrequency: "weekly", priority: 0.8 },
    { path: "/features/digital-prescriptions", changeFrequency: "weekly", priority: 0.8 },
    { path: "/features/stock-and-expiry", changeFrequency: "weekly", priority: 0.8 },
    { path: "/features/whatsapp-reminders", changeFrequency: "weekly", priority: 0.8 },
    // For Clinics
    { path: "/for/solo-doctors", changeFrequency: "weekly", priority: 0.8 },
    { path: "/for/clinics-with-dispensary", changeFrequency: "weekly", priority: 0.8 },
    { path: "/for/consulting-only-practices", changeFrequency: "weekly", priority: 0.8 },
    { path: "/for/multi-doctor-practices", changeFrequency: "weekly", priority: 0.8 },
    // Blog
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/blog/paper-vs-digital-clinic-records-sri-lanka", changeFrequency: "monthly", priority: 0.6 },
    { path: "/blog/prescription-flow-doctor-to-dispensary", changeFrequency: "monthly", priority: 0.6 },
    { path: "/blog/what-to-look-for-in-clinic-software-sri-lanka", changeFrequency: "monthly", priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
