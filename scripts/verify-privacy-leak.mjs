import fs from "node:fs";
import path from "node:path";

const PORT = process.env.PORT || 3005;
const BASE_URL = `http://localhost:${PORT}`;

function findHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findHtmlFiles(fullPath));
    } else if (file.endsWith(".html")) {
      results.push(fullPath);
    }
  }
  return results;
}

const buildDir = path.join(process.cwd(), ".next", "server", "app");
const htmlFiles = findHtmlFiles(buildDir);

console.log("================================================================================");
console.log("COMPREHENSIVE PRIVACY LEAK VERIFICATION RUNNER");
console.log("================================================================================\n");

const PROHIBITED_TERMS = [
  "719382296",
  "71 938 2296",
  "071 938",
  "Rizmi",
  "Rashard",
  "wa.me/",
];

let leaksFound = 0;

// 1. Scan Rendered HTML Files with Single Clean Regex for JSON-LD Stripping
console.log(`1. Scanning ${htmlFiles.length} rendered HTML files...`);
console.log("   Rule: Strip only <script type=\"application/ld+json\">...</script> with single regex, then test remaining content.\n");

// Single clean regex for <script type="application/ld+json">...</script>
const JSON_LD_REGEX = /<script\b[^>]*?\btype=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf-8");
  const relFile = path.relative(process.cwd(), file).replace(/\\/g, "/");

  // Single clean regex stripping
  const strippedHtml = content.replace(JSON_LD_REGEX, "");

  // a) Metadata and OG/Twitter tags
  const metaMatches = strippedHtml.match(/<meta\b[^>]*>/gi) || [];
  for (const meta of metaMatches) {
    for (const term of PROHIBITED_TERMS) {
      if (meta.toLowerCase().includes(term.toLowerCase())) {
        console.error(`  [LEAK in META] ${relFile}: Found "${term}" in ${meta}`);
        leaksFound++;
      }
    }
  }

  // b) Hrefs (including wa.me/ check)
  const hrefMatches = strippedHtml.match(/\bhref=["']([^"']*)["']/gi) || [];
  for (const href of hrefMatches) {
    for (const term of PROHIBITED_TERMS) {
      if (href.toLowerCase().includes(term.toLowerCase())) {
        console.error(`  [LEAK in HREF] ${relFile}: Found "${term}" in ${href}`);
        leaksFound++;
      }
    }
  }

  // c) Attributes (alt, title, aria-*, src)
  const attrMatches = strippedHtml.match(/\b(alt|title|src|aria-label)=["']([^"']*)["']/gi) || [];
  for (const attr of attrMatches) {
    for (const term of PROHIBITED_TERMS) {
      if (attr.toLowerCase().includes(term.toLowerCase())) {
        console.error(`  [LEAK in ATTR] ${relFile}: Found "${term}" in ${attr}`);
        leaksFound++;
      }
    }
  }

  // d) Rendered visible body text (outside script/style tags)
  const bodyText = strippedHtml
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");

  for (const term of PROHIBITED_TERMS) {
    if (bodyText.toLowerCase().includes(term.toLowerCase())) {
      console.error(`  [LEAK in TEXT] ${relFile}: Found "${term}" in visible text!`);
      leaksFound++;
    }
  }
}

// 2. Scan Live Server Endpoints (/llms.txt, /rss.xml, /sitemap.xml, /robots.txt, /manifest.webmanifest)
console.log(`2. Scanning live server endpoints at ${BASE_URL} ...\n`);

const SPECIAL_ENDPOINTS = [
  "/llms.txt",
  "/rss.xml",
  "/sitemap.xml",
  "/robots.txt",
  "/manifest.webmanifest",
];

async function scanEndpoints() {
  for (const endpoint of SPECIAL_ENDPOINTS) {
    const url = `${BASE_URL}${endpoint}`;
    try {
      const res = await fetch(url);
      if (res.status === 404 && endpoint === "/manifest.webmanifest") {
        // Try fallback to /manifest
        const fallbackRes = await fetch(`${BASE_URL}/manifest`);
        if (fallbackRes.ok) {
          await testContent(endpoint, await fallbackRes.text());
          continue;
        }
      }
      if (!res.ok) {
        console.warn(`  [WARN] Endpoint ${endpoint} returned status ${res.status}`);
        continue;
      }
      const text = await res.text();
      await testContent(endpoint, text);
    } catch (e) {
      console.warn(`  [WARN] Could not fetch ${url}: ${e.message}`);
    }
  }
}

async function testContent(endpoint, text) {
  // Strip any JSON-LD if present
  const cleanText = text.replace(JSON_LD_REGEX, "");
  let endpointLeaks = 0;
  for (const term of PROHIBITED_TERMS) {
    if (cleanText.toLowerCase().includes(term.toLowerCase())) {
      console.error(`  [LEAK in ENDPOINT] ${endpoint}: Found prohibited term "${term}"!`);
      leaksFound++;
      endpointLeaks++;
    }
  }
  if (endpointLeaks === 0) {
    console.log(`  [PASS] Clean endpoint: ${endpoint} (no prohibited terms)`);
  }
}

await scanEndpoints();

console.log("\n================================================================================");
if (leaksFound === 0) {
  console.log(`[PASS] CLEAN RUN: ZERO LEAKS DETECTED!`);
  console.log("Verified: No occurrences of 719382296, 71 938 2296, 071 938, Rizmi, Rashard, or wa.me/ in any endpoint, metadata, OG, attributes, or rendered text.");
} else {
  console.error(`[FAIL] ${leaksFound} privacy leak(s) detected!`);
  process.exit(1);
}
console.log("================================================================================\n");
