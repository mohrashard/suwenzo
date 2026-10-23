import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND, DEFINITION } from "@/content/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: true,
});

const defaultTitle = "Clinic Software for Sri Lanka | Suwenzo";
const defaultDescription =
  "Suwenzo is clinic software for Sri Lanka: patient records, digital prescriptions, live stock and WhatsApp reminders in one system. Book a 20-minute demo.";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.canonicalUrl),
  title: {
    default: defaultTitle,
    template: "%s | Suwenzo",
  },
  description: defaultDescription,
  alternates: {
    canonical: BRAND.canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: BRAND.canonicalUrl,
    siteName: BRAND.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Suwenzo - Clinic Software for Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-default.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      process.env.GOOGLE_SITE_VERIFICATION ||
      undefined,
    other: {
      "msvalidate.01": [
        process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ||
          process.env.BING_SITE_VERIFICATION ||
          "",
      ],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootGraph = buildGraphSchema([
    getOrganizationSchema(),
    getWebSiteSchema(),
  ]);

  return (
    <html lang="en-LK" className={plusJakartaSans.variable} suppressHydrationWarning>
      <head>
        <JsonLd data={rootGraph} />
      </head>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1D4ED8] focus:text-white focus:rounded-full focus:shadow-lg focus:outline-hidden text-sm font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
