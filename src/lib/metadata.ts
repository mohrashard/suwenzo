import type { Metadata } from "next";
import { BRAND } from "@/content/site";

export interface BuildMetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/og-default.png",
  noindex = false,
}: BuildMetadataParams): Metadata {
  const canonicalPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${BRAND.siteUrl}${canonicalPath}`;
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${BRAND.siteUrl}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_LK",
      url: canonicalUrl,
      siteName: BRAND.name,
      title,
      description,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: `${title} | Suwenzo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullOgImage],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
