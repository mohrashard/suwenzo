import { NextRequest, NextResponse } from "next/server";
import { APPROVED_WHATSAPP_MESSAGES, WhatsAppMessageKey } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const m = searchParams.get("m") as WhatsAppMessageKey | null;

  // Validate message key strictly against whitelist; fallback to 'demo'
  const validKey: WhatsAppMessageKey =
    m && m in APPROVED_WHATSAPP_MESSAGES ? m : "demo";
  const prefilledText = APPROVED_WHATSAPP_MESSAGES[validKey];

  // Read phone number strictly from server environment or fallback
  const rawNumber = process.env.WHATSAPP_NUMBER || "94719382296";
  const cleanNumber = rawNumber.replace(/\D/g, "");

  const destination = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    prefilledText
  )}`;

  return NextResponse.redirect(destination, 302);
}
