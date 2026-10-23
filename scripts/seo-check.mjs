import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const serverAppDir = path.join(rootDir, ".next", "server", "app");

const ROUTES = [
  { urlPath: "/", filePath: path.join(serverAppDir, "index.html") },
  { urlPath: "/how-it-works", filePath: path.join(serverAppDir, "how-it-works.html") },
  { urlPath: "/features", filePath: path.join(serverAppDir, "features.html") },
  { urlPath: "/features/patient-records", filePath: path.join(serverAppDir, "features", "patient-records.html") },
  { urlPath: "/features/digital-prescriptions", filePath: path.join(serverAppDir, "features", "digital-prescriptions.html") },
  { urlPath: "/features/stock-and-expiry", filePath: path.join(serverAppDir, "features", "stock-and-expiry.html") },
  { urlPath: "/features/whatsapp-reminders", filePath: path.join(serverAppDir, "features", "whatsapp-reminders.html") },
  { urlPath: "/for", filePath: path.join(serverAppDir, "for.html") },
  { urlPath: "/for/solo-doctors", filePath: path.join(serverAppDir, "for", "solo-doctors.html") },
  { urlPath: "/for/clinics-with-dispensary", filePath: path.join(serverAppDir, "for", "clinics-with-dispensary.html") },
  { urlPath: "/for/consulting-only-practices", filePath: path.join(serverAppDir, "for", "consulting-only-practices.html") },
  { urlPath: "/for/multi-doctor-practices", filePath: path.join(serverAppDir, "for", "multi-doctor-practices.html") },
  { urlPath: "/faq", filePath: path.join(serverAppDir, "faq.html") },
  { urlPath: "/facts", filePath: path.join(serverAppDir, "facts.html") },
  { urlPath: "/about", filePath: path.join(serverAppDir, "about.html") },
  { urlPath: "/contact", filePath: path.join(serverAppDir, "contact.html") },
  { urlPath: "/privacy", filePath: path.join(serverAppDir, "privacy.html") },
  { urlPath: "/terms", filePath: path.join(serverAppDir, "terms.html") },
  { urlPath: "/blog", filePath: path.join(serverAppDir, "blog.html") },
  { urlPath: "/blog/how-to-choose-clinic-software-sri-lanka", filePath: path.join(serverAppDir, "blog", "how-to-choose-clinic-software-sri-lanka.html") },
  { urlPath: "/blog/paper-vs-digital-prescriptions-sri-lanka", filePath: path.join(serverAppDir, "blog", "paper-vs-digital-prescriptions-sri-lanka.html") },
  { urlPath: "/blog/manage-medicine-stock-expiry-clinic-dispensary", filePath: path.join(serverAppDir, "blog", "manage-medicine-stock-expiry-clinic-dispensary.html") },
  { urlPath: "/blog/sri-lanka-data-protection-law-clinic-2027", filePath: path.join(serverAppDir, "blog", "sri-lanka-data-protection-law-clinic-2027.html") },
  { urlPath: "/blog/how-to-bring-patients-back-medicine-course-ends", filePath: path.join(serverAppDir, "blog", "how-to-bring-patients-back-medicine-course-ends.html") },
  { urlPath: "/blog/clinic-hardware-digital-prescriptions", filePath: path.join(serverAppDir, "blog", "clinic-hardware-digital-prescriptions.html") },
];

let totalErrors = 0;
const titlesMap = new Map();
const descriptionsMap = new Map();
const allFoundLinks = new Set();

console.log("================================================================================");
console.log("SUWENZO COMPREHENSIVE SEO / AEO / GEO VERIFICATION RUNNER");
console.log("================================================================================\n");

if (!fs.existsSync(serverAppDir)) {
  console.error(`ERROR: Build output directory not found at ${serverAppDir}`);
  console.error("Please run `npm run build` before executing seo-check.");
  process.exit(1);
}

for (const route of ROUTES) {
  console.log(`Checking route: ${route.urlPath} ...`);
  if (!fs.existsSync(route.filePath)) {
    console.error(`  [FAIL] Missing built HTML file: ${route.filePath}`);
    totalErrors++;
    continue;
  }

  const html = fs.readFileSync(route.filePath, "utf-8");

  // 1. H1 Count check (exactly 1)
  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`  [FAIL] H1 count is ${h1Matches.length} (expected exactly 1)`);
    totalErrors++;
  } else {
    const h1ContentMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const rawH1 = h1ContentMatch ? h1ContentMatch[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() : "";
    console.log(`  [PASS] H1 (1): "${rawH1.slice(0, 50)}${rawH1.length > 50 ? "..." : ""}"`);
  }

  // 2. Title check (max 60 chars)
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch) {
    console.error("  [FAIL] Missing <title> tag");
    totalErrors++;
  } else {
    const title = titleMatch[1].trim();
    if (title.length > 60) {
      console.error(`  [FAIL] Title exceeds 60 characters (${title.length} chars): "${title}"`);
      totalErrors++;
    } else {
      console.log(`  [PASS] Title (${title.length} chars): "${title}"`);
    }

    if (titlesMap.has(title)) {
      console.error(`  [FAIL] Duplicate title with ${titlesMap.get(title)}: "${title}"`);
      totalErrors++;
    } else {
      titlesMap.set(title, route.urlPath);
    }
  }

  // 3. Description check (120 to 155 chars)
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) ||
                    html.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i);
  if (!descMatch) {
    console.error("  [FAIL] Missing meta description");
    totalErrors++;
  } else {
    const desc = descMatch[1].trim();
    if (desc.length < 120 || desc.length > 155) {
      console.error(`  [FAIL] Meta description length ${desc.length} chars outside 120-155 range: "${desc}"`);
      totalErrors++;
    } else {
      console.log(`  [PASS] Description (${desc.length} chars): "${desc.slice(0, 50)}..."`);
    }

    if (descriptionsMap.has(desc)) {
      console.error(`  [FAIL] Duplicate description with ${descriptionsMap.get(desc)}`);
      totalErrors++;
    } else {
      descriptionsMap.set(desc, route.urlPath);
    }
  }

  // 4. Absolute Canonical check
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i) ||
                        html.match(/<link\s+href=["']([^"']+)["']\s+rel=["']canonical["']/i);
  const expectedCanonical = `https://www.suwenzo.com${route.urlPath === "/" ? "" : route.urlPath}`;
  if (!canonicalMatch) {
    console.error("  [FAIL] Missing canonical tag");
    totalErrors++;
  } else if (canonicalMatch[1] !== expectedCanonical) {
    console.error(`  [FAIL] Canonical mismatch. Got "${canonicalMatch[1]}", expected "${expectedCanonical}"`);
    totalErrors++;
  } else {
    console.log(`  [PASS] Canonical: ${canonicalMatch[1]}`);
  }

  // 5. OpenGraph & Twitter tags
  const ogTitle = html.match(/<meta\s+property=["']og:title["']/i);
  const ogDesc = html.match(/<meta\s+property=["']og:description["']/i);
  const ogUrl = html.match(/<meta\s+property=["']og:url["']/i);
  const ogImage = html.match(/<meta\s+property=["']og:image["']/i);
  const twCard = html.match(/<meta\s+name=["']twitter:card["']/i);

  if (!ogTitle || !ogDesc || !ogUrl || !ogImage || !twCard) {
    console.error("  [FAIL] Missing OpenGraph or Twitter meta tags");
    totalErrors++;
  } else {
    console.log("  [PASS] OpenGraph & Twitter metadata present");
  }

  // 6. Breadcrumb on non-home pages
  if (route.urlPath !== "/") {
    const hasBreadcrumb = html.includes("BreadcrumbList");
    if (!hasBreadcrumb) {
      console.error("  [FAIL] Missing BreadcrumbList schema on non-home page");
      totalErrors++;
    } else {
      console.log("  [PASS] BreadcrumbList schema verified");
    }
  }

  // 7. Parse all JSON-LD blocks (matching any attribute order on script tag)
  const jsonLdRegex = /<script\b[^>]*?\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jsonMatch;
  let jsonCount = 0;
  while ((jsonMatch = jsonLdRegex.exec(html)) !== null) {
    jsonCount++;
    try {
      const parsed = JSON.parse(jsonMatch[1]);
      if (parsed["@graph"]) {
        const types = parsed["@graph"].map((item) => item["@type"]).join(", ");
        console.log(`  [PASS] JSON-LD @graph #${jsonCount} parsed successfully (${types})`);
      } else {
        console.log(`  [PASS] JSON-LD #${jsonCount} parsed successfully (@type: ${parsed["@type"]})`);
      }
    } catch (err) {
      console.error(`  [FAIL] JSON-LD #${jsonCount} syntax error: ${err.message}`);
      totalErrors++;
    }
  }

  // 8. Rendered HTML text rules: No phone number, no founder name, no em dashes in UI / HTML
  // Strip all <script>...</script> and <style>...</style> blocks to inspect rendered document
  const renderedHtml = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "");

  // Phone number test
  if (renderedHtml.includes("+94719382296") || renderedHtml.includes("+94 71 938 2296") || renderedHtml.includes("0719382296")) {
    console.error("  [FAIL] Hard Rule 3 violation: Phone number found in rendered HTML / UI text!");
    totalErrors++;
  }

  // Founder name test
  if (renderedHtml.includes("Mohamed Rashard") || renderedHtml.includes("Rizmi")) {
    console.error("  [FAIL] Hard Rule 3 violation: Founder name found in rendered HTML / UI text!");
    totalErrors++;
  }

  // Price claims test (look for actual currency amounts: Rs. 500, LKR 2000, $50)
  if (/Rs\.\s*\d+|\bLKR\s*\d+|\bUSD\s*\d+|\$\s*[1-9]\d{1,}/.test(renderedHtml)) {
    console.error("  [FAIL] Hard Rule 1 violation: Price figure found in rendered HTML!");
    totalErrors++;
  }

  // Unverifiable claims test
  if (/HIPAA\s+compliant/i.test(renderedHtml) || /PDPA\s+compliant/i.test(renderedHtml)) {
    console.error("  [FAIL] Hard Rule 4 violation: Disallowed compliance claim in HTML!");
    totalErrors++;
  }

  // Em dash test
  const emDashRegex = new RegExp("[" + String.fromCharCode(8212) + String.fromCharCode(8211) + "]");
  if (emDashRegex.test(renderedHtml)) {
    console.error("  [FAIL] Hard Rule 6 violation: Em dash or En dash found in rendered HTML!");
    totalErrors++;
  }

  // Collect internal links
  const linkRegex = /href=["'](\/[^"'#?]*)["']/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    allFoundLinks.add(linkMatch[1]);
  }

  console.log("");
}

// 9. Check internal links integrity
console.log("Checking internal link integrity across site...");
const knownPaths = new Set(ROUTES.map((r) => r.urlPath));
knownPaths.add("/rss.xml");
knownPaths.add("/llms.txt");
knownPaths.add("/sitemap.xml");

let brokenLinks = 0;
for (const link of allFoundLinks) {
  const clean = link === "/" ? "/" : link.replace(/\/$/, "");
  // Ignore static assets, browser manifests, or /go/ redirects
  if (
    clean.startsWith("/go/") ||
    clean.startsWith("/_next/") ||
    clean.endsWith(".png") ||
    clean.endsWith(".svg") ||
    clean.endsWith(".txt") ||
    clean.endsWith(".webmanifest")
  ) {
    continue;
  }
  if (!knownPaths.has(clean)) {
    console.error(`  [FAIL] Broken internal link found targeting: "${clean}"`);
    brokenLinks++;
    totalErrors++;
  }
}
if (brokenLinks === 0) {
  console.log(`  [PASS] All ${allFoundLinks.size} discovered internal links resolve to valid destinations.`);
}

console.log("\n================================================================================");
console.log(`SEO CHECK SUMMARY: ${totalErrors === 0 ? "PASSED (0 ERRORS)" : `FAILED (${totalErrors} ERRORS)`}`);
console.log(`Total Pages Validated: ${ROUTES.length}`);
console.log(`Total Unique Titles: ${titlesMap.size}`);
console.log(`Total Unique Descriptions: ${descriptionsMap.size}`);
console.log("================================================================================\n");

if (totalErrors > 0) {
  process.exit(1);
}
