import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import WhoAndWhySection from "@/components/WhoAndWhySection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getSoftwareApplicationSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND, DEFINITION } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Clinic Software for Sri Lanka | Suwenzo",
  description:
    "Suwenzo is clinic software for Sri Lanka: patient records, digital prescriptions, live stock and WhatsApp reminders in one system. Book a 20-minute demo.",
  path: "/",
  ogImage: "/og-home.png",
});

export default function Home() {
  const homeGraph = buildGraphSchema([
    getSoftwareApplicationSchema(),
    {
      "@type": "WebPage",
      "@id": `${BRAND.siteUrl}/#webpage`,
      url: BRAND.siteUrl,
      name: "Clinic Software for Sri Lanka | Suwenzo",
      description: DEFINITION,
      isPartOf: {
        "@id": `${BRAND.siteUrl}/#website`,
      },
      about: {
        "@id": `${BRAND.siteUrl}/#organization`,
      },
    },
  ]);

  return (
    <>
      <JsonLd data={homeGraph} />
      <Navbar />
      <main id="main-content">
        <Hero />
        <HowItWorks />
        <FeaturesSection />
        <WhoAndWhySection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
