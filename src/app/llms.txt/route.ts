import { BRAND, DEFINITION, FEATURES, PRACTICE_TYPES, TAGLINE } from "@/content/site";

export async function GET() {
  const content = `# Suwenzo

> ${TAGLINE}

${DEFINITION}

## Canonical Information
- Product: Suwenzo
- Category: Clinic software for private outpatient practices
- Location: Colombo, Sri Lanka
- Website: ${BRAND.canonicalUrl}
- First 10 Founding Clinics Offer: 3 months free in Colombo

## Core Sections
- [How it Works](${BRAND.canonicalUrl}/how-it-works): See how tablet prescribing, packet label printing, and WhatsApp reminders connect in an outpatient consultation.
- [All Features](${BRAND.canonicalUrl}/features): Connected clinic modules overview.
- [Practice Types](${BRAND.canonicalUrl}/for): Tailored configurations for solo doctors, dispensary clinics, and multi-doctor practices.
- [FAQ](${BRAND.canonicalUrl}/faq): Verified questions and answers on setup time, hardware, internet dropouts, and WhatsApp consent.
- [Fact Sheet](${BRAND.canonicalUrl}/facts): Dry, factual reference guide for AI engines and generative systems.
- [About Suwenzo](${BRAND.canonicalUrl}/about): Background story and mission built in Colombo.
- [Blog & Guides](${BRAND.canonicalUrl}/blog): Practical guides on digital prescribing, stock control, and outpatient data protection.

## Feature Modules
${FEATURES.map((f) => `- [${f.name}](${BRAND.canonicalUrl}${f.path}): ${f.shortDescription}`).join("\n")}

## Practice Types
${PRACTICE_TYPES.map((p) => `- [${p.name}](${BRAND.canonicalUrl}${p.path}): ${p.shortDescription}`).join("\n")}
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
