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

// 1. Read the authentic Suwenzo SVG logo source
const swLogoPath = path.join(publicDir, "swlogocopy.svg");
if (!fs.existsSync(swLogoPath)) {
  console.error("Error: public/swlogocopy.svg not found!");
  process.exit(1);
}
const swLogoRaw = fs.readFileSync(swLogoPath, "utf-8");
const pathsMatch = swLogoRaw.substring(
  swLogoRaw.indexOf("<path"),
  swLogoRaw.lastIndexOf("</svg>")
);

function renderSvgToPng(svgString, targetWidth, targetHeight) {
  const resvg = new Resvg(svgString, {
    fitTo: {
      mode: "width",
      value: targetWidth,
    },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: "Plus Jakarta Sans, Segoe UI, Arial, sans-serif",
    },
  });
  const pngData = resvg.render();
  return pngData.asPng();
}

function writeAsset(name, svgContent, width, height, exportToPublic = true) {
  const svgPath = path.join(brandSrcDir, `${name}.svg`);
  fs.writeFileSync(svgPath, svgContent, "utf-8");

  const pngBuffer = renderSvgToPng(svgContent, width, height);
  const targetPngPath = exportToPublic
    ? path.join(publicDir, `${name}.png`)
    : path.join(brandSrcDir, `${name}.png`);
  fs.writeFileSync(targetPngPath, pngBuffer);

  const sizeKb = (pngBuffer.length / 1024).toFixed(1);
  console.log(`[Brand] Generated ${name}.png (${width}x${height}, ${sizeKb} KB)`);
  return pngBuffer;
}

// Helper to scale authentic mark paths
function markGroup(x, y, size) {
  const scale = size / 1254;
  return `<g transform="translate(${x}, ${y}) scale(${scale})">${pathsMatch}</g>`;
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

console.log("[Brand] Generating authentic assets from public/swlogocopy.svg...");

// 1. Pure Authentic Mark (1254x1254 viewBox)
const markSquareSvg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1254 1254" width="1254" height="1254">
${pathsMatch}
</svg>`;

// Save mark SVG to brand src and public
fs.writeFileSync(path.join(brandSrcDir, "suwenzo-mark.svg"), markSquareSvg, "utf-8");
fs.writeFileSync(path.join(publicDir, "suwenzo-mark.svg"), markSquareSvg, "utf-8");
fs.writeFileSync(path.join(publicDir, "favicon.svg"), markSquareSvg, "utf-8");

// Render standard square icon sizes
const icon512Png = renderSvgToPng(markSquareSvg, 512, 512);
fs.writeFileSync(path.join(publicDir, "icon.png"), icon512Png);
fs.writeFileSync(path.join(publicDir, "icon-512.png"), icon512Png);
fs.writeFileSync(path.join(publicDir, "suwenzo-mark.png"), icon512Png);
fs.writeFileSync(path.join(publicDir, "suwenzo-mark-gradient.png"), icon512Png);

// In src/app/ for Next.js metadata icons
const appIconPng = path.join(rootDir, "src", "app", "icon.png");
const appAppleIconPng = path.join(rootDir, "src", "app", "apple-icon.png");
fs.writeFileSync(appIconPng, icon512Png);

const icon192Png = renderSvgToPng(markSquareSvg, 192, 192);
fs.writeFileSync(path.join(publicDir, "icon-192.png"), icon192Png);

const icon180Png = renderSvgToPng(markSquareSvg, 180, 180);
fs.writeFileSync(path.join(publicDir, "apple-icon.png"), icon180Png);
fs.writeFileSync(appAppleIconPng, icon180Png);

const icon32Png = renderSvgToPng(markSquareSvg, 32, 32);
fs.writeFileSync(path.join(publicDir, "favicon.png"), icon32Png);

console.log("[Brand] Icons (favicon, apple-icon, icon-192, icon-512) generated.");

// 2. Horizontal Logo (Navy on White with Precision Gradient Frame)
const logoHorizontalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200">
  <defs>
    <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8" />
      <stop offset="50%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#93C5FD" />
    </linearGradient>
  </defs>
  <rect width="800" height="200" fill="#FFFFFF" />
  <!-- Precision Gradient Frame -->
  <rect x="30" y="24" width="152" height="152" rx="36" fill="url(#frameGrad)" />
  <rect x="33" y="27" width="146" height="146" rx="33" fill="#FFFFFF" />
  ${markGroup(33, 27, 146)}
  <!-- Brand Wordmark -->
  <text x="212" y="128" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="82" font-weight="800" fill="#0B1B3A" letter-spacing="-2">Suwenzo</text>
</svg>`;

const logoHorizontalPng = renderSvgToPng(logoHorizontalSvg, 800, 200);
fs.writeFileSync(path.join(publicDir, "suwenzo-logo.png"), logoHorizontalPng);
fs.writeFileSync(path.join(publicDir, "suwenzo-logo-horizontal.png"), logoHorizontalPng);
fs.writeFileSync(path.join(publicDir, "suwenzo-logo.svg"), logoHorizontalSvg, "utf-8");
fs.writeFileSync(path.join(publicDir, "suwenzo-logo-horizontal.svg"), logoHorizontalSvg, "utf-8");
fs.writeFileSync(path.join(brandSrcDir, "suwenzo-logo.svg"), logoHorizontalSvg, "utf-8");
fs.writeFileSync(path.join(brandSrcDir, "suwenzo-logo-horizontal.svg"), logoHorizontalSvg, "utf-8");

// 3. Horizontal Logo White on Blue Gradient
const logoHorizontalWhiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
    <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#93C5FD" />
      <stop offset="100%" stop-color="#FFFFFF" />
    </linearGradient>
  </defs>
  <rect width="800" height="200" fill="url(#bgGrad)" />
  <rect x="30" y="24" width="152" height="152" rx="36" fill="url(#frameGrad)" />
  <rect x="33" y="27" width="146" height="146" rx="33" fill="#FFFFFF" />
  ${markGroup(33, 27, 146)}
  <text x="212" y="128" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="82" font-weight="800" fill="#FFFFFF" letter-spacing="-2">Suwenzo</text>
</svg>`;
const logoHorizontalWhitePng = renderSvgToPng(logoHorizontalWhiteSvg, 800, 200);
fs.writeFileSync(path.join(publicDir, "suwenzo-logo-horizontal-white.png"), logoHorizontalWhitePng);
fs.writeFileSync(path.join(brandSrcDir, "suwenzo-logo-horizontal-white.svg"), logoHorizontalWhiteSvg, "utf-8");

console.log("[Brand] Horizontal logos generated.");

// 4. Social Avatar (1080x1080) with centered circle-safe mark
const socialAvatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
    <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8" />
      <stop offset="50%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#93C5FD" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#avatarBg)" />
  
  <!-- Subtle circular guide / glow inside safe area -->
  <circle cx="540" cy="540" r="480" fill="none" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="2" />

  <!-- Centered Precision Gradient Card -->
  <rect x="260" y="260" width="560" height="560" rx="130" fill="url(#frameGrad)" />
  <rect x="270" y="270" width="540" height="540" rx="120" fill="#FFFFFF" />
  ${markGroup(270, 270, 540)}
</svg>`;
writeAsset("social-avatar", socialAvatarSvg, 1080, 1080);

// 5. Facebook Cover (1640x624)
const facebookCoverSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1640 624" width="1640" height="624">
  <defs>
    <linearGradient id="coverBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06182E" />
      <stop offset="45%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>
    <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8" />
      <stop offset="50%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#93C5FD" />
    </linearGradient>
  </defs>
  <rect width="1640" height="624" fill="url(#coverBg)" />

  <!-- Subtle grid lines -->
  <g stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1">
    <line x1="200" y1="0" x2="200" y2="624" />
    <line x1="600" y1="0" x2="600" y2="624" />
    <line x1="1040" y1="0" x2="1040" y2="624" />
    <line x1="1440" y1="0" x2="1440" y2="624" />
  </g>

  <!-- Left: Real Logo Badge -->
  <g transform="translate(180, 150)">
    <rect x="0" y="0" width="160" height="160" rx="36" fill="url(#frameGrad)" />
    <rect x="3" y="3" width="154" height="154" rx="33" fill="#FFFFFF" />
    ${markGroup(3, 3, 154)}
  </g>

  <!-- Center Content -->
  <text x="380" y="235" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="64" font-weight="800" fill="#FFFFFF" letter-spacing="-1.5">Suwenzo</text>
  <text x="380" y="295" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="28" font-weight="600" fill="#93C5FD">Clinic Software for Sri Lanka</text>
  <text x="380" y="345" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="19" font-weight="400" fill="#E2E8F0">Doctor's Desk • Patient Records • Dispensary • WhatsApp Reminders</text>

  <!-- Bottom Strip -->
  <text x="380" y="440" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="16" font-weight="600" fill="#93C5FD">Colombo, Sri Lanka • www.suwenzo.com</text>
</svg>`;
writeAsset("social-facebook-cover", facebookCoverSvg, 1640, 624);

// 6. LinkedIn Banner (1584x396)
const linkedinBannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1584 396" width="1584" height="396">
  <defs>
    <linearGradient id="inBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#08223D" />
      <stop offset="50%" stop-color="#0A3A66" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>
    <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8" />
      <stop offset="50%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#93C5FD" />
    </linearGradient>
  </defs>
  <rect width="1584" height="396" fill="url(#inBg)" />

  <g transform="translate(140, 95)">
    <rect x="0" y="0" width="140" height="140" rx="32" fill="url(#frameGrad)" />
    <rect x="3" y="3" width="134" height="134" rx="29" fill="#FFFFFF" />
    ${markGroup(3, 3, 134)}
  </g>

  <text x="320" y="170" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="56" font-weight="800" fill="#FFFFFF" letter-spacing="-1.5">Suwenzo</text>
  <text x="320" y="222" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="24" font-weight="600" fill="#93C5FD">Clinic Software for Sri Lanka</text>
  <text x="320" y="265" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="16" font-weight="400" fill="#E2E8F0">Connects the doctor's desk, patient records and dispensary in one system</text>

  <text x="1200" y="222" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="16" font-weight="600" fill="#93C5FD">Colombo, Sri Lanka</text>
  <text x="1200" y="250" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="14" font-weight="400" fill="#E2E8F0">www.suwenzo.com</text>
</svg>`;
writeAsset("social-linkedin-banner", linkedinBannerSvg, 1584, 396);

// 7. OG Image Generator (1200x630, Safe Area 1000x500)
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

  <!-- Outer frame border -->
  <rect x="24" y="24" width="1152" height="582" rx="28" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />

  <!-- Top-left Brand Badge -->
  <g transform="translate(80, 68)">
    <rect x="0" y="0" width="64" height="64" rx="16" fill="url(#frameGrad)" />
    <rect x="2" y="2" width="60" height="60" rx="14" fill="#FFFFFF" />
    ${markGroup(2, 2, 60)}
    <text x="80" y="44" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="34" font-weight="800" fill="#0B1B3A" letter-spacing="-1">Suwenzo</text>
    <text x="235" y="44" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="16" font-weight="600" fill="#1D4ED8">• Clinic Software for Sri Lanka</text>
  </g>

  <!-- Central Content (Inside Safe Area) -->
  <g transform="translate(80, 185)">
    <!-- Eyebrow Pill -->
    <rect x="0" y="0" width="180" height="34" rx="17" fill="#0F172A" />
    <text x="16" y="23" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" letter-spacing="1">${safeEyebrow.toUpperCase()}</text>

    <!-- Main Headline -->
    <text x="0" y="86" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="46" font-weight="800" fill="#0B1B3A" letter-spacing="-1.5">${safeHeadline}</text>

    <!-- Subtext -->
    <text x="0" y="136" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="20" font-weight="400" fill="#475569">${safeSubtext}</text>
  </g>

  <!-- 4-Node Connected Graphic: Doctor's Desk, Records, Dispensary, Reminders -->
  <g transform="translate(80, 390)">
    <line x1="120" y1="40" x2="350" y2="40" stroke="#93C5FD" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="390" y1="40" x2="620" y2="40" stroke="#93C5FD" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="660" y1="40" x2="890" y2="40" stroke="#93C5FD" stroke-width="2" stroke-dasharray="4 4" />

    <!-- Node 1: Doctor's Desk -->
    <rect x="0" y="8" width="160" height="64" rx="16" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
    <circle cx="28" cy="40" r="12" fill="#1D4ED8" />
    <text x="28" y="45" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">1</text>
    <text x="48" y="36" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="13" font-weight="700" fill="#0B1B3A">Doctor Desk</text>
    <text x="48" y="52" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" fill="#64748B">Tablet Prescribing</text>

    <!-- Node 2: Records -->
    <rect x="270" y="8" width="160" height="64" rx="16" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
    <circle cx="298" cy="40" r="12" fill="#1D4ED8" />
    <text x="298" y="45" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">2</text>
    <text x="318" y="36" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="13" font-weight="700" fill="#0B1B3A">Patient Files</text>
    <text x="318" y="52" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" fill="#64748B">Instant History</text>

    <!-- Node 3: Dispensary -->
    <rect x="540" y="8" width="160" height="64" rx="16" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
    <circle cx="568" cy="40" r="12" fill="#1D4ED8" />
    <text x="568" y="45" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">3</text>
    <text x="588" y="36" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="13" font-weight="700" fill="#0B1B3A">Dispensary</text>
    <text x="588" y="52" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" fill="#64748B">Label Printing</text>

    <!-- Node 4: Reminders -->
    <rect x="810" y="8" width="170" height="64" rx="16" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5" />
    <circle cx="838" cy="40" r="12" fill="#16A34A" />
    <text x="838" y="45" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">4</text>
    <text x="858" y="36" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="13" font-weight="700" fill="#065F46">WhatsApp</text>
    <text x="858" y="52" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11" fill="#16A34A">Return Reminders</text>
  </g>

  <!-- Bottom Brand Signature Strip -->
  <text x="80" y="540" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#64748B">Colombo, Sri Lanka • https://www.suwenzo.com</text>
  <text x="960" y="540" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#1D4ED8">Ready in 48 hours →</text>
</svg>`;
}

// Generate all OpenGraph variants
writeAsset(
  "og-default",
  generateOgSvg(
    "Clinic Software",
    "Prescribe once. Remember every patient.",
    "Connects the doctor's desk, records and dispensary with WhatsApp reminders."
  ),
  1200,
  630
);

writeAsset(
  "og-home",
  generateOgSvg(
    "Sri Lanka Healthcare",
    "Prescribe once. Remember every patient.",
    "Clinic software connecting doctor desk, records and dispensary in one system."
  ),
  1200,
  630
);

writeAsset(
  "og-features",
  generateOgSvg(
    "Clinic Modules",
    "Desk, Records & Dispensary in One Flow",
    "Live queue updates, thermal envelope labels, and automated patient follow-ups."
  ),
  1200,
  630
);

writeAsset(
  "og-for-clinics",
  generateOgSvg(
    "Practice Types",
    "Built for How Sri Lankan Clinics Run",
    "Solo doctors, clinics with dispensaries, and multi-doctor outpatient practices."
  ),
  1200,
  630
);

writeAsset(
  "og-faq",
  generateOgSvg(
    "Knowledge Base",
    "20 Verified Questions Answered for Doctors",
    "Clear, honest answers about setup, hardware, offline sync and WhatsApp reminders."
  ),
  1200,
  630
);

writeAsset(
  "og-about",
  generateOgSvg(
    "About Suwenzo",
    "Built for Private Practices in Sri Lanka",
    "Designed in Colombo to replace paper files and handwritten medicine packets."
  ),
  1200,
  630
);

writeAsset(
  "og-blog",
  generateOgSvg(
    "Clinical Practice",
    "Clinic Management & Dispensary Insights",
    "Articles on paper vs. digital records and modern clinic workflows in Sri Lanka."
  ),
  1200,
  630
);

console.log("[Brand] All brand assets successfully built with the authentic Suwenzo mark!");
