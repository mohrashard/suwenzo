import {
  SITE_URL,
  CANONICAL_DEFINITION,
  SOCIAL_LINKS,
  INCLUDE_PHONE_IN_SCHEMA,
  INCLUDE_FOUNDER_IN_SCHEMA,
  SCHEMA_PHONE,
  SCHEMA_FOUNDER_NAME,
} from "./site";

export function getOrganizationSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Suwenzo",
    url: SITE_URL,
    logo: `${SITE_URL}/suwenzo-logo.png`,
    image: `${SITE_URL}/suwenzo-mark.png`,
    description: CANONICAL_DEFINITION,
    email: "info@suwenzo.com",
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressCountry: "LK",
    },
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.tiktok,
      SOCIAL_LINKS.linkedin,
    ],
  };

  if (INCLUDE_PHONE_IN_SCHEMA) {
    schema.telephone = SCHEMA_PHONE;
    schema.contactPoint = {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: SCHEMA_PHONE,
      availableLanguage: ["en"],
    };
  }

  if (INCLUDE_FOUNDER_IN_SCHEMA) {
    schema.founder = {
      "@type": "Person",
      name: SCHEMA_FOUNDER_NAME,
    };
  }

  return schema;
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Suwenzo",
    description: CANONICAL_DEFINITION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-LK",
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: "Suwenzo",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    description: CANONICAL_DEFINITION,
    url: SITE_URL,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    // STRICT RULE: No offers, no price, no aggregateRating, no review
  };
}

export function getFaqPageSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
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

export function getBreadcrumbSchema(
  items: Array<{ name: string; item: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http")
        ? crumb.item
        : `${SITE_URL}${crumb.item}`,
    })),
  };
}

export function getArticleSchema(article: {
  headline?: string;
  title?: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  const headline = article.headline || article.title || "";
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description: article.description,
    url: article.url.startsWith("http") ? article.url : `${SITE_URL}${article.url}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: article.image || `${SITE_URL}/og-blog.png`,
    author: {
      "@type": "Organization",
      name: "Suwenzo",
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-LK",
  };
}

export const getBlogPostingSchema = getArticleSchema;

