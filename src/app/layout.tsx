import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schemas";
import { SITE_URL } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle = "Suwenzo | Clinic Software for Sri Lanka";
const defaultDescription =
  "Clinic software for Sri Lanka that connects the doctor's desk, patient records and dispensary, with WhatsApp reminders so patients return on time.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Suwenzo",
  },
  description: defaultDescription,
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-LK": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: SITE_URL,
    siteName: "Suwenzo",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>{children}</body>
    </html>
  );
}
