import fs from "node:fs";
import path from "node:path";
import { Resvg } from "@resvg/resvg-js";

const rootDir = process.cwd();
const brandSrcDir = path.join(rootDir, "assets", "brand", "src");
const publicDir = path.join(rootDir, "public");
const illustrationsDir = path.join(publicDir, "illustrations");

if (!fs.existsSync(brandSrcDir)) fs.mkdirSync(brandSrcDir, { recursive: true });
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(illustrationsDir)) fs.mkdirSync(illustrationsDir, { recursive: true });

// Read authentic Suwenzo SVG logo
const swLogoPath = path.join(publicDir, "swlogocopy.svg");
let pathsMatch = "";
if (fs.existsSync(swLogoPath)) {
  const swLogoRaw = fs.readFileSync(swLogoPath, "utf-8");
  pathsMatch = swLogoRaw.substring(
    swLogoRaw.indexOf("<path"),
    swLogoRaw.lastIndexOf("</svg>")
  );
}

function renderSvgToPng(svgString, targetWidth) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: "width", value: targetWidth },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: "Plus Jakarta Sans, Segoe UI, Arial, sans-serif",
    },
  });
  return resvg.render().asPng();
}

function writeOgImage(filename, svgContent) {
  const svgPath = path.join(brandSrcDir, `${filename}.svg`);
  fs.writeFileSync(svgPath, svgContent, "utf-8");

  const pngBuffer = renderSvgToPng(svgContent, 1200);
  const targetPng = path.join(publicDir, `${filename}.png`);
  fs.writeFileSync(targetPng, pngBuffer);
  console.log(`[OG] Generated ${filename}.png (1200x630, ${(pngBuffer.length / 1024).toFixed(1)} KB)`);
}

function writeIllustration(filename, svgContent, width = 600, height = 450) {
  const svgPath = path.join(illustrationsDir, `${filename}.svg`);
  fs.writeFileSync(svgPath, svgContent, "utf-8");

  const pngBuffer = renderSvgToPng(svgContent, width);
  const targetPng = path.join(illustrationsDir, `${filename}.png`);
  fs.writeFileSync(targetPng, pngBuffer);

  // Also mirror directly in public/ for easy path resolution
  fs.writeFileSync(path.join(publicDir, `${filename}.png`), pngBuffer);
  fs.writeFileSync(path.join(publicDir, `${filename}.svg`), svgContent, "utf-8");

  console.log(`[Illustration] Generated ${filename}.png (${width}x${height}, ${(pngBuffer.length / 1024).toFixed(1)} KB)`);
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function markGroup(x, y, size) {
  const scale = size / 1254;
  return `<g transform="translate(${x}, ${y}) scale(${scale})">${pathsMatch}</g>`;
}

// 1. OG Image Template Generator (1200x630, Safe Area 1000x500)
function generateOgSvg(eyebrow, headline, subtext) {
  const safeEyebrow = escapeXml(eyebrow);
  const safeHeadline = escapeXml(headline);
  const safeSubtext = escapeXml(subtext);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="ogBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F0F7FF" />
      <stop offset="100%" stop-color="#FFFFFF" />
    </linearGradient>
    <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8" />
      <stop offset="50%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#93C5FD" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#ogBg)" />
  <rect x="24" y="24" width="1152" height="582" rx="28" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />

  <!-- Brand Signature -->
  <g transform="translate(80, 68)">
    <rect x="0" y="0" width="64" height="64" rx="16" fill="url(#frameGrad)" />
    <rect x="2" y="2" width="60" height="60" rx="14" fill="#FFFFFF" />
    ${markGroup(2, 2, 60)}
    <text x="80" y="44" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="34" font-weight="800" fill="#0B1B3A" letter-spacing="-1">Suwenzo</text>
    <text x="235" y="44" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="16" font-weight="600" fill="#1D4ED8">: Clinic Software for Sri Lanka</text>
  </g>

  <!-- Central Messaging -->
  <g transform="translate(80, 185)">
    <rect x="0" y="0" width="220" height="34" rx="17" fill="#0F172A" />
    <text x="16" y="23" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" letter-spacing="1">${safeEyebrow.toUpperCase()}</text>

    <text x="0" y="86" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="44" font-weight="800" fill="#0B1B3A" letter-spacing="-1.5">${safeHeadline}</text>
    <text x="0" y="136" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="20" font-weight="400" fill="#475569">${safeSubtext}</text>
  </g>

  <!-- 4 Connected Stations Graphic -->
  <g transform="translate(80, 390)">
    <line x1="120" y1="40" x2="350" y2="40" stroke="#93C5FD" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="390" y1="40" x2="620" y2="40" stroke="#93C5FD" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="660" y1="40" x2="890" y2="40" stroke="#93C5FD" stroke-width="2" stroke-dasharray="4 4" />

    <rect x="0" y="8" width="160" height="64" rx="16" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
    <circle cx="28" cy="40" r="12" fill="#1D4ED8" />
    <text x="28" y="45" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">1</text>
    <text x="48" y="36" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="13" font-weight="700" fill="#0B1B3A">Doctor Desk</text>
    <text x="48" y="52" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" fill="#64748B">Tablet Prescribing</text>

    <rect x="270" y="8" width="160" height="64" rx="16" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
    <circle cx="298" cy="40" r="12" fill="#1D4ED8" />
    <text x="298" y="45" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">2</text>
    <text x="318" y="36" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="13" font-weight="700" fill="#0B1B3A">Patient Files</text>
    <text x="318" y="52" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" fill="#64748B">Instant History</text>

    <rect x="540" y="8" width="160" height="64" rx="16" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
    <circle cx="568" cy="40" r="12" fill="#1D4ED8" />
    <text x="568" y="45" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">3</text>
    <text x="588" y="36" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="13" font-weight="700" fill="#0B1B3A">Dispensary</text>
    <text x="588" y="52" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" fill="#64748B">Label Printing</text>

    <rect x="810" y="8" width="170" height="64" rx="16" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5" />
    <circle cx="838" cy="40" r="12" fill="#16A34A" />
    <text x="838" y="45" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">4</text>
    <text x="858" y="36" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="13" font-weight="700" fill="#065F46">WhatsApp</text>
    <text x="858" y="52" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" fill="#16A34A">Return Reminders</text>
  </g>

  <!-- Footer Info -->
  <text x="80" y="540" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#64748B">Colombo, Sri Lanka : www.suwenzo.com</text>
  <text x="960" y="540" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#1D4ED8">Ready in 48 hours →</text>
</svg>`;
}

// Write All 8 Hub OG Images
writeOgImage("og-default", generateOgSvg("Clinic Software", "Prescribe once. Remember every patient.", "Connects the doctor desk, records and dispensary with WhatsApp reminders."));
writeOgImage("og-home", generateOgSvg("Sri Lanka Healthcare", "Prescribe once. Remember every patient.", "Clinic software connecting doctor desk, records and dispensary in one system."));
writeOgImage("og-how-it-works", generateOgSvg("Workflow Walkthrough", "Prescription to Dispensary to Patient Follow-up", "See how tablet prescribing, packet label printing, and WhatsApp reminders connect."));
writeOgImage("og-features", generateOgSvg("Clinic Modules", "Desk, Records and Dispensary in One Flow", "Live queue updates, thermal packet labels, and automated patient follow-ups."));
writeOgImage("og-for", generateOgSvg("Practice Types", "Built for How Sri Lankan Clinics Run", "Solo doctors, clinics with dispensaries, and multi-doctor outpatient practices."));
writeOgImage("og-for-clinics", generateOgSvg("Practice Types", "Built for How Sri Lankan Clinics Run", "Solo doctors, clinics with dispensaries, and multi-doctor outpatient practices."));
writeOgImage("og-faq", generateOgSvg("Knowledge Base", "Verified Questions Answered for Doctors", "Clear answers about setup time, hardware, internet dropouts, and WhatsApp consent."));
writeOgImage("og-about", generateOgSvg("About Suwenzo", "Built for Private Practices in Sri Lanka", "Designed in Colombo to replace paper files and handwritten medicine packets."));
writeOgImage("og-blog", generateOgSvg("Clinical Practice", "Clinic Management and Dispensary Insights", "Articles on digital prescribing, stock control, and outpatient data protection."));

// 2. Feature Illustrations (Flat, consistent stroke: 2, radius: 16-24, white and blue palette)

// Feature 1: Patient Records
const illRecordsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
  <defs>
    <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0F7FF" />
      <stop offset="100%" stop-color="#E0EFFF" />
    </linearGradient>
  </defs>
  <rect width="600" height="450" rx="24" fill="url(#bgGrad1)" />

  <!-- Main Patient Record Card -->
  <rect x="80" y="50" width="440" height="350" rx="20" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
  
  <!-- Header Bar -->
  <rect x="80" y="50" width="440" height="64" rx="20" fill="#0B1B3A" />
  <rect x="80" y="90" width="440" height="24" fill="#0B1B3A" />
  <circle cx="120" cy="82" r="16" fill="#1D4ED8" />
  <text x="120" y="87" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">SP</text>
  <text x="150" y="80" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Sample patient: K. Perera (48 M)</text>
  <text x="150" y="96" font-family="Arial, sans-serif" font-size="12" fill="#93C5FD">Reg: 2026-0812 | Colombo 05</text>

  <!-- Allergy Banner -->
  <g transform="translate(100, 130)">
    <rect x="0" y="0" width="400" height="36" rx="8" fill="#FEF2F2" stroke="#F87171" stroke-width="1.5" />
    <circle cx="20" cy="18" r="8" fill="#DC2626" />
    <text x="20" y="22" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">!</text>
    <text x="36" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#991B1B">Allergy Alert: Penicillin &amp; Sulfa drugs</text>
  </g>

  <!-- Vitals Summary Chips -->
  <g transform="translate(100, 180)">
    <rect x="0" y="0" width="90" height="46" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="12" y="20" font-family="Arial, sans-serif" font-size="11" fill="#64748B">BP</text>
    <text x="12" y="38" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0B1B3A">128/82</text>

    <rect x="102" y="0" width="90" height="46" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="114" y="20" font-family="Arial, sans-serif" font-size="11" fill="#64748B">Pulse</text>
    <text x="114" y="38" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0B1B3A">74 bpm</text>

    <rect x="204" y="0" width="90" height="46" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="216" y="20" font-family="Arial, sans-serif" font-size="11" fill="#64748B">Weight</text>
    <text x="216" y="38" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0B1B3A">68.5 kg</text>

    <rect x="306" y="0" width="94" height="46" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="318" y="20" font-family="Arial, sans-serif" font-size="11" fill="#64748B">Visits</text>
    <text x="318" y="38" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#1D4ED8">6 visits</text>
  </g>

  <!-- Past Visit List -->
  <g transform="translate(100, 240)">
    <text x="0" y="16" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0B1B3A">Recent Visit History</text>
    
    <rect x="0" y="26" width="400" height="54" rx="10" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1" />
    <text x="14" y="46" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0B1B3A">12 Oct 2026 : Hypertension review</text>
    <text x="14" y="64" font-family="Arial, sans-serif" font-size="11" fill="#475569">Prescribed: Losartan 50mg (30 d) | Dr. Bandara</text>

    <rect x="0" y="88" width="400" height="54" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
    <text x="14" y="108" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0B1B3A">14 Sep 2026 : Routine health check</text>
    <text x="14" y="126" font-family="Arial, sans-serif" font-size="11" fill="#475569">Vitals stable, lipid panel ordered | Dr. Bandara</text>
  </g>
</svg>`;
writeIllustration("illustration-records", illRecordsSvg);

// Feature 2: Digital Prescriptions
const illPrescriptionsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0F7FF" />
      <stop offset="100%" stop-color="#E0EFFF" />
    </linearGradient>
  </defs>
  <rect width="600" height="450" rx="24" fill="url(#bgGrad2)" />

  <!-- Doctor's Tablet Mockup -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="260" height="330" rx="18" fill="#FFFFFF" stroke="#0B1B3A" stroke-width="4" />
    <rect x="15" y="15" width="230" height="30" rx="8" fill="#1D4ED8" />
    <text x="25" y="35" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Tablet Prescribing</text>

    <!-- Medicine Selection Rows -->
    <rect x="15" y="55" width="230" height="50" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
    <text x="25" y="74" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0B1B3A">Amoxicillin 500mg</text>
    <text x="25" y="92" font-family="Arial, sans-serif" font-size="11" fill="#16A34A">Stock: 420 caps | Shelf A2</text>

    <rect x="15" y="112" width="230" height="50" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
    <text x="25" y="131" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0B1B3A">Paracetamol 500mg</text>
    <text x="25" y="149" font-family="Arial, sans-serif" font-size="11" fill="#16A34A">Stock: 1,200 tabs | Shelf B1</text>

    <rect x="15" y="170" width="230" height="50" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
    <text x="25" y="189" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0B1B3A">Cetirizine 10mg</text>
    <text x="25" y="207" font-family="Arial, sans-serif" font-size="11" fill="#16A34A">Stock: 180 tabs | Shelf C3</text>

    <!-- Action Button -->
    <rect x="15" y="250" width="230" height="42" rx="10" fill="#1D4ED8" />
    <text x="130" y="276" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Send to Dispensary →</text>
  </g>

  <!-- Sync Arrow Stream -->
  <g transform="translate(325, 200)">
    <line x1="0" y1="0" x2="35" y2="0" stroke="#1D4ED8" stroke-width="3" stroke-dasharray="6 4" />
    <polygon points="35,-6 47,0 35,6" fill="#1D4ED8" />
    <text x="20" y="-12" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#1D4ED8" text-anchor="middle">&lt; 2s</text>
  </g>

  <!-- Auto-Printed Thermal Packet Label -->
  <g transform="translate(375, 80)">
    <!-- Thermal Printer -->
    <rect x="10" y="0" width="160" height="70" rx="12" fill="#334155" />
    <rect x="30" y="55" width="120" height="10" rx="4" fill="#0F172A" />
    <text x="90" y="35" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#94A3B8" text-anchor="middle">Thermal Printer</text>

    <!-- Emerging Printed Sticker -->
    <g transform="translate(0, 62)">
      <rect x="0" y="0" width="180" height="230" rx="10" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5" />
      <rect x="10" y="12" width="160" height="24" fill="#0B1B3A" rx="4" />
      <text x="90" y="28" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">SUWENZO CLINIC</text>

      <text x="15" y="54" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">Sample patient: K. Perera</text>
      <text x="15" y="70" font-family="Arial, sans-serif" font-size="10" fill="#64748B">Date: 23 Oct 2026</text>

      <line x1="15" y1="80" x2="165" y2="80" stroke="#E2E8F0" stroke-width="1" />

      <text x="15" y="100" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1D4ED8">Amoxicillin 500mg</text>
      <text x="15" y="120" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">1 capsule - 3 times daily</text>
      <text x="15" y="136" font-family="Arial, sans-serif" font-size="10" fill="#475569">After meals for 5 days (15 caps)</text>

      <line x1="15" y1="150" x2="165" y2="150" stroke="#E2E8F0" stroke-width="1" />

      <text x="15" y="170" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#DC2626">Complete the full antibiotic course.</text>
      <text x="15" y="195" font-family="Arial, sans-serif" font-size="9" fill="#64748B">Prescribed by Dr. Bandara</text>
    </g>
  </g>
</svg>`;
writeIllustration("illustration-prescriptions", illPrescriptionsSvg);

// Feature 3: Stock and Expiry Tracking
const illStockSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
  <defs>
    <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0F7FF" />
      <stop offset="100%" stop-color="#E0EFFF" />
    </linearGradient>
  </defs>
  <rect width="600" height="450" rx="24" fill="url(#bgGrad3)" />

  <!-- Dispensary Shelf Layout Card -->
  <rect x="70" y="50" width="460" height="350" rx="20" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
  
  <rect x="70" y="50" width="460" height="56" rx="20" fill="#0B1B3A" />
  <rect x="70" y="80" width="460" height="26" fill="#0B1B3A" />
  <text x="100" y="84" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Dispensary Stock &amp; 60-Day Expiry Warnings</text>

  <!-- 60-Day Expiry Alert Banner -->
  <g transform="translate(95, 120)">
    <rect x="0" y="0" width="410" height="40" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.5" />
    <circle cx="20" cy="20" r="9" fill="#F59E0B" />
    <text x="20" y="24" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">!</text>
    <text x="38" y="25" font-family="Arial, sans-serif" font-size="12.5" font-weight="bold" fill="#B45309">2 batches approaching expiry within 60 days</text>
  </g>

  <!-- Shelf Inventory Table Header -->
  <g transform="translate(95, 175)">
    <rect x="0" y="0" width="410" height="28" fill="#F1F5F9" rx="6" />
    <text x="14" y="18" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#475569">MEDICINE &amp; BATCH</text>
    <text x="190" y="18" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#475569">LOCATION</text>
    <text x="280" y="18" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#475569">STOCK</text>
    <text x="340" y="18" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#475569">EXPIRY</text>

    <!-- Row 1: Healthy Stock -->
    <rect x="0" y="34" width="410" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
    <text x="14" y="54" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0B1B3A">Paracetamol 500mg</text>
    <text x="14" y="70" font-family="Arial, sans-serif" font-size="10" fill="#64748B">Batch: PR-2601</text>
    <text x="190" y="62" font-family="Arial, sans-serif" font-size="12" fill="#0B1B3A">Shelf B1</text>
    <text x="280" y="62" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#16A34A">1,200</text>
    <text x="340" y="62" font-family="Arial, sans-serif" font-size="11" fill="#475569">Dec 2027</text>

    <!-- Row 2: Near Expiry Warning -->
    <rect x="0" y="90" width="410" height="50" rx="8" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1" />
    <text x="14" y="110" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0B1B3A">Ciprofloxacin 500mg</text>
    <text x="14" y="126" font-family="Arial, sans-serif" font-size="10" fill="#92400E">Batch: CP-2490</text>
    <text x="190" y="118" font-family="Arial, sans-serif" font-size="12" fill="#0B1B3A">Shelf A3</text>
    <text x="280" y="118" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#D97706">90</text>
    <text x="340" y="118" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#D97706">Nov 2026</text>

    <!-- Row 3: Live Deducted -->
    <rect x="0" y="146" width="410" height="50" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
    <text x="14" y="166" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0B1B3A">Amoxicillin 500mg</text>
    <text x="14" y="182" font-family="Arial, sans-serif" font-size="10" fill="#64748B">Batch: AM-2512</text>
    <text x="190" y="174" font-family="Arial, sans-serif" font-size="12" fill="#0B1B3A">Shelf A2</text>
    <text x="280" y="174" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#16A34A">420</text>
    <text x="340" y="174" font-family="Arial, sans-serif" font-size="11" fill="#475569">Aug 2027</text>
  </g>
</svg>`;
writeIllustration("illustration-stock", illStockSvg);

// Feature 4: WhatsApp Follow-up Reminders
const illRemindersSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
  <defs>
    <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0F7FF" />
      <stop offset="100%" stop-color="#E0EFFF" />
    </linearGradient>
  </defs>
  <rect width="600" height="450" rx="24" fill="url(#bgGrad4)" />

  <!-- Consent Step Indicator on Left -->
  <g transform="translate(60, 90)">
    <rect x="0" y="0" width="200" height="270" rx="16" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
    <rect x="0" y="0" width="200" height="44" rx="16" fill="#0B1B3A" />
    <rect x="0" y="24" width="200" height="20" fill="#0B1B3A" />
    <text x="20" y="28" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">1-Tap Consent Capture</text>

    <text x="15" y="66" font-family="Arial, sans-serif" font-size="11" fill="#475569">Captured during consultation on tablet:</text>

    <!-- Consent Toggle Mockup -->
    <rect x="15" y="90" width="170" height="54" rx="10" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5" />
    <text x="25" y="112" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#065F46">WhatsApp Opt-in</text>
    <text x="25" y="128" font-family="Arial, sans-serif" font-size="10" fill="#16A34A">Patient agreed</text>
    <circle cx="160" cy="117" r="12" fill="#16A34A" />
    <polyline points="154,117 158,121 166,113" fill="none" stroke="#FFFFFF" stroke-width="2" />

    <text x="15" y="170" font-family="Arial, sans-serif" font-size="10" fill="#64748B">Course duration: 5 days</text>
    <text x="15" y="190" font-family="Arial, sans-serif" font-size="10" fill="#64748B">Scheduled date: 28 Oct 2026</text>
    <text x="15" y="210" font-family="Arial, sans-serif" font-size="10" fill="#64748B">Trigger: Automatic</text>
  </g>

  <!-- Mobile Phone Screen with WhatsApp Reminder -->
  <g transform="translate(290, 45)">
    <rect x="0" y="0" width="250" height="360" rx="24" fill="#0B1B3A" stroke="#334155" stroke-width="3" />
    <rect x="8" y="8" width="234" height="344" rx="18" fill="#ECE5DD" />

    <!-- WhatsApp Header -->
    <rect x="8" y="8" width="234" height="48" rx="18" fill="#075E54" />
    <rect x="8" y="36" width="234" height="20" fill="#075E54" />
    <circle cx="35" cy="32" r="14" fill="#25D366" />
    <text x="35" y="37" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">S</text>
    <text x="58" y="28" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">Suwenzo Clinic</text>
    <text x="58" y="42" font-family="Arial, sans-serif" font-size="10" fill="#A7F3D0">Verified Medical Practice</text>

    <!-- Date Bubble -->
    <rect x="85" y="68" width="80" height="18" rx="9" fill="#E2E8F0" />
    <text x="125" y="81" font-family="Arial, sans-serif" font-size="9" fill="#64748B" text-anchor="middle">TODAY</text>

    <!-- Message Bubble -->
    <g transform="translate(18, 96)">
      <rect x="0" y="0" width="214" height="150" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
      <text x="12" y="20" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">Sample patient: K. Perera</text>
      <text x="12" y="40" font-family="Arial, sans-serif" font-size="10.5" fill="#334155">Your 5-day course of Amoxicillin</text>
      <text x="12" y="56" font-family="Arial, sans-serif" font-size="10.5" fill="#334155">prescribed on 23 Oct ends today.</text>
      <text x="12" y="80" font-family="Arial, sans-serif" font-size="10.5" fill="#334155">If symptoms persist or Dr. Bandara</text>
      <text x="12" y="96" font-family="Arial, sans-serif" font-size="10.5" fill="#334155">recommended a review, please reply</text>
      <text x="12" y="112" font-family="Arial, sans-serif" font-size="10.5" fill="#334155">to confirm your follow-up slot.</text>

      <text x="170" y="138" font-family="Arial, sans-serif" font-size="9" fill="#94A3B8">09:00 AM</text>
    </g>

    <!-- Quick Reply CTA -->
    <rect x="18" y="260" width="214" height="34" rx="8" fill="#25D366" />
    <text x="125" y="282" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Confirm follow-up consultation</text>
  </g>
</svg>`;
writeIllustration("illustration-reminders", illRemindersSvg);

// 3. Practice Type Illustrations (Flat, consistent stroke: 2, radius: 16-24, white and blue palette)

// Practice 1: Clinic with Dispensary
const illDispensarySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
  <defs>
    <linearGradient id="bgGradP1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0F7FF" />
      <stop offset="100%" stop-color="#E0EFFF" />
    </linearGradient>
  </defs>
  <rect width="600" height="450" rx="24" fill="url(#bgGradP1)" />

  <!-- Outer Practice Architecture -->
  <rect x="60" y="50" width="480" height="350" rx="20" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
  
  <rect x="60" y="50" width="480" height="54" rx="20" fill="#0B1B3A" />
  <rect x="60" y="80" width="480" height="24" fill="#0B1B3A" />
  <text x="90" y="82" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Clinics with In-House Dispensary</text>

  <!-- Left: Doctor Desk Station -->
  <g transform="translate(85, 125)">
    <rect x="0" y="0" width="195" height="235" rx="14" fill="#F8FAFC" stroke="#93C5FD" stroke-width="1.5" />
    <rect x="15" y="15" width="165" height="32" rx="8" fill="#1D4ED8" />
    <text x="97" y="36" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Doctor Desk</text>
    
    <text x="15" y="70" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">Live stock visibility</text>
    <text x="15" y="88" font-family="Arial, sans-serif" font-size="10.5" fill="#64748B">Prescribe from real inventory</text>

    <text x="15" y="120" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">Past patient history</text>
    <text x="15" y="138" font-family="Arial, sans-serif" font-size="10.5" fill="#64748B">Allergies and chronic files</text>

    <text x="15" y="170" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">1-tap dispensary send</text>
    <text x="15" y="188" font-family="Arial, sans-serif" font-size="10.5" fill="#64748B">Direct transmission in 2s</text>
  </g>

  <!-- Sync Stream Line -->
  <g transform="translate(285, 230)">
    <line x1="0" y1="0" x2="30" y2="0" stroke="#1D4ED8" stroke-width="3" stroke-dasharray="4 4" />
    <polygon points="30,-5 40,0 30,5" fill="#1D4ED8" />
  </g>

  <!-- Right: Dispensary Counter -->
  <g transform="translate(325, 125)">
    <rect x="0" y="0" width="195" height="235" rx="14" fill="#F8FAFC" stroke="#93C5FD" stroke-width="1.5" />
    <rect x="15" y="15" width="165" height="32" rx="8" fill="#0B1B3A" />
    <text x="97" y="36" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Dispensary Counter</text>
    
    <text x="15" y="70" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">Dispensary order queue</text>
    <text x="15" y="88" font-family="Arial, sans-serif" font-size="10.5" fill="#64748B">Orders appear instantly</text>

    <text x="15" y="120" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">Auto-printed labels</text>
    <text x="15" y="138" font-family="Arial, sans-serif" font-size="10.5" fill="#64748B">Direct thermal packet stickers</text>

    <text x="15" y="170" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">Live stock deduction</text>
    <text x="15" y="188" font-family="Arial, sans-serif" font-size="10.5" fill="#64748B">Shelf counts decrease live</text>
  </g>
</svg>`;
writeIllustration("illustration-dispensary", illDispensarySvg);

// Practice 2: Consulting-Only Practice
const illConsultingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
  <defs>
    <linearGradient id="bgGradP2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0F7FF" />
      <stop offset="100%" stop-color="#E0EFFF" />
    </linearGradient>
  </defs>
  <rect width="600" height="450" rx="24" fill="url(#bgGradP2)" />

  <rect x="70" y="50" width="460" height="350" rx="20" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
  
  <rect x="70" y="50" width="460" height="54" rx="20" fill="#0B1B3A" />
  <rect x="70" y="80" width="460" height="24" fill="#0B1B3A" />
  <text x="100" y="82" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Consulting-Only Practices (No In-House Stock)</text>

  <!-- Central Workstation Card -->
  <g transform="translate(100, 130)">
    <rect x="0" y="0" width="400" height="85" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
    <circle cx="36" cy="42" r="18" fill="#1D4ED8" />
    <text x="36" y="47" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Rx</text>
    <text x="68" y="34" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0B1B3A">Sri Lankan Medicine Formulary</text>
    <text x="68" y="54" font-family="Arial, sans-serif" font-size="11" fill="#475569">Prescribe from registered Sri Lankan brands and generics without entering inventory.</text>
  </g>

  <!-- Dual Prescription Output Option -->
  <g transform="translate(100, 235)">
    <!-- Option A: Thermal / A5 Printed Prescription -->
    <rect x="0" y="0" width="190" height="120" rx="12" fill="#F0F7FF" stroke="#93C5FD" stroke-width="1.5" />
    <text x="16" y="28" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1D4ED8">Printed Prescriptions</text>
    <text x="16" y="52" font-family="Arial, sans-serif" font-size="11" fill="#334155">Hand clean, legible printed slips to patients for outside pharmacy dispensing.</text>
    <rect x="16" y="82" width="158" height="26" rx="6" fill="#1D4ED8" />
    <text x="95" y="99" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Standard A5 / Thermal</text>

    <!-- Option B: WhatsApp Prescription Delivery -->
    <rect x="210" y="0" width="190" height="120" rx="12" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5" />
    <text x="226" y="28" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#065F46">WhatsApp Delivery</text>
    <text x="226" y="52" font-family="Arial, sans-serif" font-size="11" fill="#334155">Send digital prescription slips directly to patient WhatsApp with one tap.</text>
    <rect x="226" y="82" width="158" height="26" rx="6" fill="#16A34A" />
    <text x="305" y="99" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Paperless Delivery</text>
  </g>
</svg>`;
writeIllustration("illustration-consulting", illConsultingSvg);

// Practice 3: Solo Doctor Practice
const illSoloSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
  <defs>
    <linearGradient id="bgGradP3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0F7FF" />
      <stop offset="100%" stop-color="#E0EFFF" />
    </linearGradient>
  </defs>
  <rect width="600" height="450" rx="24" fill="url(#bgGradP3)" />

  <rect x="70" y="50" width="460" height="350" rx="20" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
  
  <rect x="70" y="50" width="460" height="54" rx="20" fill="#0B1B3A" />
  <rect x="70" y="80" width="460" height="24" fill="#0B1B3A" />
  <text x="100" y="82" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Solo Doctor Outpatient Practices</text>

  <!-- Solo Doctor Features Grid -->
  <g transform="translate(95, 125)">
    <rect x="0" y="0" width="195" height="105" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="14" y="26" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1D4ED8">Single-Room Efficiency</text>
    <text x="14" y="46" font-family="Arial, sans-serif" font-size="11" fill="#475569">Consult, prescribe, and dispense or print from one compact desk tablet.</text>

    <rect x="215" y="0" width="195" height="105" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="229" y="26" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1D4ED8">No Carbon Books</text>
    <text x="229" y="46" font-family="Arial, sans-serif" font-size="11" fill="#475569">Retire handwriting pads and paper registers. Keep all patient records secure.</text>

    <rect x="0" y="120" width="195" height="105" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="14" y="146" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1D4ED8">Automated Retention</text>
    <text x="14" y="166" font-family="Arial, sans-serif" font-size="11" fill="#475569">WhatsApp reminders return chronic patients automatically without phone calls.</text>

    <rect x="215" y="120" width="195" height="105" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="229" y="146" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1D4ED8">48-Hour Setup</text>
    <text x="229" y="166" font-family="Arial, sans-serif" font-size="11" fill="#475569">We configure your medicine list and printer. Start seeing patients in 2 days.</text>
  </g>
</svg>`;
writeIllustration("illustration-solo", illSoloSvg);

// Practice 4: Multi-Doctor Centre & Branches
const illMultiDoctorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
  <defs>
    <linearGradient id="bgGradP4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0F7FF" />
      <stop offset="100%" stop-color="#E0EFFF" />
    </linearGradient>
  </defs>
  <rect width="600" height="450" rx="24" fill="url(#bgGradP4)" />

  <rect x="60" y="50" width="480" height="350" rx="20" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
  
  <rect x="60" y="50" width="480" height="54" rx="20" fill="#0B1B3A" />
  <rect x="60" y="80" width="480" height="24" fill="#0B1B3A" />
  <text x="90" y="82" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Multi-Doctor Centres and Multi-Branch Groups</text>

  <!-- Multiple Doctor Desks -->
  <g transform="translate(80, 125)">
    <!-- Room 1 -->
    <rect x="0" y="0" width="130" height="90" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
    <text x="12" y="24" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">Consultation 1</text>
    <text x="12" y="42" font-family="Arial, sans-serif" font-size="10" fill="#1D4ED8">Dr. Perera</text>
    <text x="12" y="60" font-family="Arial, sans-serif" font-size="9" fill="#64748B">Active session</text>

    <!-- Room 2 -->
    <rect x="155" y="0" width="130" height="90" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
    <text x="167" y="24" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">Consultation 2</text>
    <text x="167" y="42" font-family="Arial, sans-serif" font-size="10" fill="#1D4ED8">Dr. Silva</text>
    <text x="167" y="60" font-family="Arial, sans-serif" font-size="9" fill="#64748B">Active session</text>

    <!-- Branch 2 Indicator -->
    <rect x="310" y="0" width="130" height="90" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
    <text x="322" y="24" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0B1B3A">Branch 2 (Galle)</text>
    <text x="322" y="42" font-family="Arial, sans-serif" font-size="10" fill="#1D4ED8">Central DB</text>
    <text x="322" y="60" font-family="Arial, sans-serif" font-size="9" fill="#64748B">Connected</text>
  </g>

  <!-- Central Shared Dispensary & DB -->
  <g transform="translate(80, 245)">
    <rect x="0" y="0" width="440" height="110" rx="14" fill="#F0F7FF" stroke="#93C5FD" stroke-width="2" />
    <text x="20" y="32" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0B1B3A">Central Patient Records &amp; Unified Dispensary Queue</text>
    
    <text x="20" y="60" font-family="Arial, sans-serif" font-size="11" fill="#334155">• Individual doctor logins with private notes and shared cross-consultation visit history</text>
    <text x="20" y="80" font-family="Arial, sans-serif" font-size="11" fill="#334155">• Central dispensary receives digital prescriptions tagged by doctor and room number</text>
    <text x="20" y="100" font-family="Arial, sans-serif" font-size="11" fill="#334155">• Multi-branch inventory tracking with dedicated onboarding manager</text>
  </g>
</svg>`;
writeIllustration("illustration-multi-doctor", illMultiDoctorSvg);

console.log("[Build OG & Illustrations] All assets successfully compiled to SVG and PNG!");
