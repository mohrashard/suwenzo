export const SITE_URL = "https://www.suwenzo.com";
export const SITE_NAME = "Suwenzo";
export const SITE_LOCALE = "en_LK";

export const CANONICAL_DEFINITION =
  "Suwenzo is clinic software for Sri Lanka that connects the doctor's desk, patient records and dispensary in one system, with WhatsApp reminders so patients return on time.";

export const SOCIAL_LINKS = {
  facebook: "https://web.facebook.com/profile.php?id=61595082452726",
  instagram: "https://www.instagram.com/suwenzo",
  tiktok: "https://www.tiktok.com/@suwenzo",
  linkedin: "https://www.linkedin.com/company/suwenzo/",
} as const;

// Controlled schema toggles (NOT displayed in visible UI)
export const INCLUDE_PHONE_IN_SCHEMA = false;
export const INCLUDE_FOUNDER_IN_SCHEMA = false;

export const SCHEMA_PHONE = "+94719382296";
export const SCHEMA_FOUNDER_NAME = "Mohamed Rashard Rizmi";

// Server-side approved WhatsApp messages map
// Never accept freeform text from users
export const APPROVED_WHATSAPP_MESSAGES = {
  demo: "Hi, I would like to book a 20-minute demo for Suwenzo.",
  question: "Hi, I have a question about Suwenzo for my clinic.",
  inquiry: "Hi, I have an inquiry about Suwenzo.",
  "multi-branch": "Hi, I would like to discuss Suwenzo for our multi-branch or larger medical centre.",
} as const;

export type WhatsAppMessageKey = keyof typeof APPROVED_WHATSAPP_MESSAGES;

export function getWhatsAppRedirectUrl(
  placement: string,
  messageKey: WhatsAppMessageKey = "demo"
): string {
  return `/go/whatsapp?src=${encodeURIComponent(placement)}&m=${encodeURIComponent(messageKey)}`;
}
