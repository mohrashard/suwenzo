import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suwenzo | Clinic Software for Sri Lanka",
  description: "Suwenzo connects your doctor's desk, patient records and dispensary in one system.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Suwenzo",
    "url": "https://suwenzo.com",
    "logo": "https://suwenzo.com/swlogocopy.jpeg",
    "description":
      "Suwenzo is clinic software for Sri Lanka that connects the doctor, the dispensary and the stock list in one system.",
    "areaServed": "LK",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Colombo",
      "addressCountry": "LK",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+94719382296",
      "availableLanguage": ["en", "si", "ta"],
    },
    "sameAs": [],
  };

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
