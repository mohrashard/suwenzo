import fs from "node:fs";
import path from "node:path";
import { Resvg } from "@resvg/resvg-js";

const rootDir = process.cwd();
const brandSrcDir = path.join(rootDir, "assets", "brand", "src");
const publicDir = path.join(rootDir, "public");

if (!fs.existsSync(brandSrcDir)) {
  fs.mkdirSync(brandSrcDir, { recursive: true });
}
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Stethoscope continuous SW line path
const SW_PATH = `M 28 25
C 34 25, 43 27, 43 35
C 43 43, 27 43, 27 52
C 27 61, 38 63, 44 58
C 47 55, 49 48, 51 40
L 57 66
L 66 38
L 74 66
L 81 29`;

function renderSvgToPng(svgString, targetWidth, targetHeight) {
  const resvg = new Resvg(svgString, {
    fitTo: {
      mode: "width",
      value: targetWidth,
    },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: "Segoe UI, Arial, sans-serif",
    },
  });
  const pngData = resvg.render();
  return pngData.asPng();
}

function writeAsset(name, svgContent, width, height, exportToPublic = true) {
  // Save source SVG
  const svgPath = path.join(brandSrcDir, `${name}.svg`);
  fs.writeFileSync(svgPath, svgContent, "utf-8");

  // Rasterize to PNG
  const pngBuffer = renderSvgToPng(svgContent, width, height);
  const targetPngPath = exportToPublic
    ? path.join(publicDir, `${name}.png`)
    : path.join(brandSrcDir, `${name}.png`);
  fs.writeFileSync(targetPngPath, pngBuffer);

  const sizeKb = (pngBuffer.length / 1024).toFixed(1);
  console.log(`[Brand] Generated ${name}.png (${width}x${height}, ${sizeKb} KB)`);
  return pngBuffer;
}

// 1. Mark Gradient (White Canvas)
const markGradientSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="swGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="#FFFFFF" />
  <circle cx="24" cy="25" r="4.5" fill="url(#swGrad)" />
  <path d="${SW_PATH}" fill="none" stroke="url(#swGrad)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="51" cy="38" r="3.2" fill="url(#swGrad)" />
  <circle cx="81" cy="27" r="3.2" fill="url(#swGrad)" />
</svg>`;

// 2. Mark White on Gradient
const markWhiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" fill="url(#bgGrad)" />
  <circle cx="24" cy="25" r="4.5" fill="#FFFFFF" />
  <path d="${SW_PATH}" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="51" cy="38" r="3.2" fill="#FFFFFF" />
  <circle cx="81" cy="27" r="3.2" fill="#FFFFFF" />
</svg>`;

// 3. Horizontal Logo (Navy on White)
const logoHorizontalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 80" width="340" height="80">
  <defs>
    <linearGradient id="swGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <g transform="translate(10, 8) scale(0.64)">
    <rect width="100" height="100" rx="22" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
    <circle cx="24" cy="25" r="4.5" fill="url(#swGrad)" />
    <path d="${SW_PATH}" fill="none" stroke="url(#swGrad)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="51" cy="38" r="3.2" fill="url(#swGrad)" />
    <circle cx="81" cy="27" r="3.2" fill="url(#swGrad)" />
  </g>
  <text x="86" y="52" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="34" font-weight="800" fill="#0B1B3A" letter-spacing="-0.03em">Suwenzo</text>
</svg>`;

// 4. Horizontal Logo (White on Gradient)
const logoHorizontalWhiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 80" width="340" height="80">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <rect width="340" height="80" rx="16" fill="url(#bgGrad)" />
  <g transform="translate(14, 8) scale(0.64)">
    <circle cx="24" cy="25" r="4.5" fill="#FFFFFF" />
    <path d="${SW_PATH}" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="51" cy="38" r="3.2" fill="#FFFFFF" />
    <circle cx="81" cy="27" r="3.2" fill="#FFFFFF" />
  </g>
  <text x="90" y="52" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="34" font-weight="800" fill="#FFFFFF" letter-spacing="-0.03em">Suwenzo</text>
</svg>`;

// 5. Favicon SVG
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <defs>
    <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="url(#favGrad)" />
  <g transform="scale(0.32)">
    <circle cx="24" cy="25" r="5" fill="#FFFFFF" />
    <path d="${SW_PATH}" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="51" cy="38" r="4" fill="#FFFFFF" />
    <circle cx="81" cy="27" r="4" fill="#FFFFFF" />
  </g>
</svg>`;

function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// 6. Template for OpenGraph (1200x630)
function generateOgSvg(badge, title, subtitle) {
  const safeBadge = escapeXml(badge);
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#EBF3FE" />
    </linearGradient>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  
  <!-- Subtle architectural border -->
  <rect x="24" y="24" width="1152" height="582" rx="24" fill="none" stroke="#DBEAFE" stroke-width="2" />
  
  <!-- Brand Header: Mark + Name -->
  <g transform="translate(80, 70)">
    <rect width="64" height="64" rx="16" fill="url(#brandGrad)" />
    <g transform="scale(0.64)">
      <circle cx="24" cy="25" r="4.5" fill="#FFFFFF" />
      <path d="${SW_PATH}" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="51" cy="38" r="3.2" fill="#FFFFFF" />
      <circle cx="81" cy="27" r="3.2" fill="#FFFFFF" />
    </g>
    <text x="80" y="44" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="34" font-weight="800" fill="#0B1B3A" letter-spacing="-0.03em">Suwenzo</text>
    <rect x="230" y="16" width="168" height="32" rx="16" fill="#DBEAFE" />
    <text x="244" y="38" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#2563EB" letter-spacing="0.04em">SRI LANKA CLINIC</text>
  </g>

  <!-- Central Content Area (Safe Zone) -->
  <g transform="translate(80, 210)">
    <!-- Badge -->
    <rect x="0" y="0" width="${safeBadge.length * 10 + 28}" height="32" rx="16" fill="#0B1B3A" />
    <text x="14" y="21" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" letter-spacing="0.05em">${safeBadge.toUpperCase()}</text>
    
    <!-- Title -->
    <text x="0" y="85" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="52" font-weight="800" fill="#0B1B3A" letter-spacing="-0.03em">${safeTitle}</text>
    
    <!-- Subtitle -->
    <text x="0" y="145" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="24" font-weight="500" fill="#475569" letter-spacing="-0.01em">${safeSubtitle}</text>
  </g>

  <!-- Abstract 4-Node Connected Clinic Graphic (Doctor Desk -> Dispensary -> Records -> Reminders) -->
  <g transform="translate(80, 440)">
    <!-- Line Connectors -->
    <line x1="120" y1="40" x2="360" y2="40" stroke="#93C5FD" stroke-width="3" stroke-dasharray="6,4" />
    <line x1="360" y1="40" x2="600" y2="40" stroke="#93C5FD" stroke-width="3" stroke-dasharray="6,4" />
    <line x1="600" y1="40" x2="840" y2="40" stroke="#93C5FD" stroke-width="3" stroke-dasharray="6,4" />

    <!-- Node 1: Doctor's Desk -->
    <rect x="30" y="15" width="180" height="50" rx="25" fill="#FFFFFF" stroke="#BFDBFE" stroke-width="2" />
    <circle cx="55" cy="40" r="8" fill="#2563EB" />
    <text x="75" y="46" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#0B1B3A">Doctor's Desk</text>

    <!-- Node 2: Records -->
    <rect x="270" y="15" width="180" height="50" rx="25" fill="#FFFFFF" stroke="#BFDBFE" stroke-width="2" />
    <circle cx="295" cy="40" r="8" fill="#2563EB" />
    <text x="315" y="46" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#0B1B3A">Patient File</text>

    <!-- Node 3: Dispensary -->
    <rect x="510" y="15" width="180" height="50" rx="25" fill="#FFFFFF" stroke="#BFDBFE" stroke-width="2" />
    <circle cx="535" cy="40" r="8" fill="#2563EB" />
    <text x="555" y="46" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#0B1B3A">Dispensary</text>

    <!-- Node 4: WhatsApp -->
    <rect x="750" y="15" width="180" height="50" rx="25" fill="#FFFFFF" stroke="#BFDBFE" stroke-width="2" />
    <circle cx="775" cy="40" r="8" fill="#10B981" />
    <text x="795" y="46" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#0B1B3A">WhatsApp</text>
  </g>

  <!-- URL watermark -->
  <text x="1120" y="565" text-anchor="end" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#2563EB">www.suwenzo.com</text>
</svg>`;
}

// 7. Social Avatar (1080x1080)
const socialAvatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#bgGrad)" />
  
  <!-- Circular Safe Zone Highlight -->
  <circle cx="540" cy="540" r="480" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="4" />
  
  <!-- Scaled Monogram in Center -->
  <g transform="translate(240, 240) scale(6)">
    <circle cx="24" cy="25" r="4.5" fill="#FFFFFF" />
    <path d="${SW_PATH}" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="51" cy="38" r="3.2" fill="#FFFFFF" />
    <circle cx="81" cy="27" r="3.2" fill="#FFFFFF" />
  </g>
</svg>`;

// 8. Facebook Cover (1640x624)
const facebookCoverSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1640 624" width="1640" height="624">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <rect width="1640" height="624" fill="url(#bgGrad)" />
  
  <!-- Left Side: Brand Mark -->
  <g transform="translate(140, 162) scale(3)">
    <circle cx="24" cy="25" r="4.5" fill="#FFFFFF" />
    <path d="${SW_PATH}" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="51" cy="38" r="3.2" fill="#FFFFFF" />
    <circle cx="81" cy="27" r="3.2" fill="#FFFFFF" />
  </g>

  <!-- Center Text Content -->
  <g transform="translate(480, 220)">
    <text x="0" y="40" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="64" font-weight="800" fill="#FFFFFF" letter-spacing="-0.03em">Suwenzo</text>
    <text x="0" y="110" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="34" font-weight="700" fill="#93C5FD">Clinic Software for Sri Lanka</text>
    <text x="0" y="160" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="22" font-weight="500" fill="#E0F2FE">Doctor's Desk · Patient Records · Dispensary · WhatsApp Reminders</text>
    <text x="0" y="210" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#FFFFFF">www.suwenzo.com</text>
  </g>
</svg>`;

// 9. LinkedIn Banner (1584x396)
const linkedinBannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1584 396" width="1584" height="396">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <rect width="1584" height="396" fill="url(#bgGrad)" />
  
  <g transform="translate(100, 78) scale(2.4)">
    <circle cx="24" cy="25" r="4.5" fill="#FFFFFF" />
    <path d="${SW_PATH}" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="51" cy="38" r="3.2" fill="#FFFFFF" />
    <circle cx="81" cy="27" r="3.2" fill="#FFFFFF" />
  </g>

  <g transform="translate(380, 140)">
    <text x="0" y="30" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="48" font-weight="800" fill="#FFFFFF" letter-spacing="-0.03em">Suwenzo</text>
    <text x="0" y="85" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#93C5FD">Connected Clinic Software for Sri Lanka</text>
    <text x="0" y="130" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="18" font-weight="500" fill="#E0F2FE">Doctor's Desk · Patient Records · Dispensary · WhatsApp Follow-Up Reminders</text>
    <text x="0" y="170" font-family="Plus Jakarta Sans, Segoe UI, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Colombo, Sri Lanka · www.suwenzo.com</text>
  </g>
</svg>`;

console.log("[Brand] Starting asset generation...");

// Generate Marks & Logos
writeAsset("suwenzo-mark-gradient", markGradientSvg, 512, 512);
writeAsset("suwenzo-mark-white", markWhiteSvg, 512, 512);
writeAsset("suwenzo-logo-horizontal", logoHorizontalSvg, 680, 160);
writeAsset("suwenzo-logo-horizontal-white", logoHorizontalWhiteSvg, 680, 160);

// Copy primary logo & mark to standard public names
fs.writeFileSync(path.join(publicDir, "suwenzo-logo.png"), renderSvgToPng(logoHorizontalSvg, 680, 160));
fs.writeFileSync(path.join(publicDir, "suwenzo-logo.svg"), logoHorizontalSvg, "utf-8");
fs.writeFileSync(path.join(publicDir, "suwenzo-mark.png"), renderSvgToPng(markGradientSvg, 512, 512));
fs.writeFileSync(path.join(publicDir, "suwenzo-mark.svg"), markGradientSvg, "utf-8");

// Generate Icons
writeAsset("icon", markGradientSvg, 512, 512);
writeAsset("icon-512", markGradientSvg, 512, 512);
writeAsset("icon-192", markGradientSvg, 192, 192);
writeAsset("apple-icon", markGradientSvg, 180, 180);
writeAsset("favicon", faviconSvg, 32, 32);
fs.writeFileSync(path.join(publicDir, "favicon.svg"), faviconSvg, "utf-8");
fs.writeFileSync(path.join(publicDir, "favicon.png"), renderSvgToPng(faviconSvg, 32, 32));

// Overwrite app icons in src/app if present
const appIconPng = path.join(rootDir, "src", "app", "icon.png");
const appAppleIconPng = path.join(rootDir, "src", "app", "apple-icon.png");
fs.writeFileSync(appIconPng, renderSvgToPng(markGradientSvg, 512, 512));
fs.writeFileSync(appAppleIconPng, renderSvgToPng(markGradientSvg, 180, 180));

// Generate OpenGraph Images (1200x630)
const ogDefaultSvg = generateOgSvg(
  "Clinic Software",
  "Prescribe once. Remember every patient.",
  "Connects the doctor's desk, records and dispensary with WhatsApp reminders."
);
writeAsset("og-default", ogDefaultSvg, 1200, 630);

const ogHomeSvg = generateOgSvg(
  "Sri Lanka Healthcare",
  "Prescribe once. Remember every patient.",
  "Clinic software connecting doctor desk, records and dispensary in one system."
);
writeAsset("og-home", ogHomeSvg, 1200, 630);

const ogFeaturesSvg = generateOgSvg(
  "System Features",
  "Desk, Records & Dispensary in One Flow",
  "Real-time stock checking, thermal packet labels, and automated patient follow-ups."
);
writeAsset("og-features", ogFeaturesSvg, 1200, 630);

const ogForClinicsSvg = generateOgSvg(
  "Practice Workflows",
  "Built for How Sri Lankan Clinics Run",
  "Solo doctors, clinics with dispensaries, and multi-doctor outpatient practices."
);
writeAsset("og-for-clinics", ogForClinicsSvg, 1200, 630);

const ogFaqSvg = generateOgSvg(
  "Knowledge Base",
  "Frequently Asked Questions for Doctors",
  "Clear, honest answers about setup, hardware, offline sync and WhatsApp reminders."
);
writeAsset("og-faq", ogFaqSvg, 1200, 630);

const ogAboutSvg = generateOgSvg(
  "About Suwenzo",
  "Built for Private Practices in Sri Lanka",
  "Why we built Suwenzo to replace paper drawers and handwritten medicine packets."
);
writeAsset("og-about", ogAboutSvg, 1200, 630);

const ogBlogSvg = generateOgSvg(
  "Clinical Practice",
  "Clinic Management & Dispensary Insights",
  "Articles on paper vs. digital records and modern clinic workflows in Sri Lanka."
);
writeAsset("og-blog", ogBlogSvg, 1200, 630);

// Generate Social Media Banners
writeAsset("social-avatar", socialAvatarSvg, 1080, 1080);
writeAsset("social-facebook-cover", facebookCoverSvg, 1640, 624);
writeAsset("social-linkedin-banner", linkedinBannerSvg, 1584, 396);

console.log("[Brand] All brand assets successfully generated!");
