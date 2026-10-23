import { DEFINITION, BRAND, SOCIALS, FEATURES } from "@/content/site";

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${BRAND.siteUrl}/#organization`,
    name: BRAND.name,
    url: BRAND.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${BRAND.siteUrl}/icon-512.png`,
      width: 512,
      height: 512,
    },
    description: DEFINITION,
    sameAs: [
      SOCIALS.facebook,
      SOCIALS.instagram,
      SOCIALS.tiktok,
      SOCIALS.linkedin,
    ],
    telephone: BRAND.phoneSchema,
    founder: {
      "@type": "Person",
      name: BRAND.founderName,
    },
    foundingLocation: {
      "@type": "Place",
      name: BRAND.city,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: BRAND.city,
      addressCountry: "LK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "LK",
      availableLanguage: "English",
      telephone: BRAND.phoneSchema,
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${BRAND.siteUrl}/#website`,
    url: BRAND.siteUrl,
    name: BRAND.name,
    description: DEFINITION,
    publisher: {
      "@id": `${BRAND.siteUrl}/#organization`,
    },
    inLanguage: "en-LK",
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@type": "SoftwareApplication",
    "@id": `${BRAND.siteUrl}/#software`,
    name: BRAND.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    description: DEFINITION,
    url: BRAND.siteUrl,
    featureList: FEATURES.map((f) => f.name),
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Private clinics, doctors and medical practices in Sri Lanka",
    },
    provider: {
      "@id": `${BRAND.siteUrl}/#organization`,
    },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http")
        ? crumb.item
        : `${BRAND.siteUrl}${crumb.item}`,
    })),
  };
}

export function getFaqPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getAboutPageSchema() {
  return {
    "@type": "AboutPage",
    "@id": `${BRAND.siteUrl}/about/#webpage`,
    url: `${BRAND.siteUrl}/about`,
    name: "About Suwenzo",
    description: DEFINITION,
    isPartOf: {
      "@id": `${BRAND.siteUrl}/#website`,
    },
    about: {
      "@id": `${BRAND.siteUrl}/#organization`,
    },
  };
}

export function getContactPageSchema() {
  return {
    "@type": "ContactPage",
    "@id": `${BRAND.siteUrl}/contact/#webpage`,
    url: `${BRAND.siteUrl}/contact`,
    name: "Contact Suwenzo",
    description: "Book a 20-minute clinic demo or message the Suwenzo team on WhatsApp.",
    isPartOf: {
      "@id": `${BRAND.siteUrl}/#website`,
    },
    about: {
      "@id": `${BRAND.siteUrl}/#organization`,
    },
  };
}

export function getCollectionPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const fullUrl = url.startsWith("http") ? url : `${BRAND.siteUrl}${url}`;
  return {
    "@type": "CollectionPage",
    "@id": `${fullUrl}/#webpage`,
    url: fullUrl,
    name,
    description,
    isPartOf: {
      "@id": `${BRAND.siteUrl}/#website`,
    },
  };
}

export function getBlogPostingSchema(article: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  const fullUrl = article.url.startsWith("http")
    ? article.url
    : `${BRAND.siteUrl}${article.url}`;
  return {
    "@type": "BlogPosting",
    headline: article.headline,
    description: article.description,
    url: fullUrl,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: article.image || `${BRAND.siteUrl}/og-blog.png`,
    author: {
      "@type": "Organization",
      name: "Suwenzo",
      url: BRAND.siteUrl,
    },
    publisher: {
      "@id": `${BRAND.siteUrl}/#organization`,
    },
    inLanguage: "en-LK",
  };
}

export function buildGraphSchema(elements: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": elements,
  };
}
