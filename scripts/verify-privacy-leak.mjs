import fs from "node:fs";
import path from "node:path";

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

console.log(`Checking ${htmlFiles.length} rendered HTML files for privacy leaks...`);
console.log("Rule: Strip only <script type=\"application/ld+json\"> blocks, then search remaining HTML (text, attributes, meta, hrefs) for prohibited terms.\n");

const PROHIBITED_TERMS = [
  "719382296",
  "71 938 2296",
  "071 938",
  "Rizmi",
  "Rashard",
  "wa.me/",
];

let leaksFound = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf-8");
  const relFile = path.relative(process.cwd(), file).replace(/\\/g, "/");

  // 1. Strip only <script type="application/ld+json"> blocks (both raw HTML tags and RSC payload serialized instances)
  const strippedHtml = content
    .replace(/<script\b[^>]*?\btype=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*?\\"application\/ld\+json\\"[^>]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\\"[^"]*?application\/ld\+json[^"]*?\\"[\s\S]*?<\/script>/gi, "");

  // 2. Parse and search remaining HTML:
  // a) Meta tags
  const metaMatches = strippedHtml.match(/<meta\b[^>]*>/gi) || [];
  for (const meta of metaMatches) {
    for (const term of PROHIBITED_TERMS) {
      if (meta.toLowerCase().includes(term.toLowerCase())) {
        console.error(`[LEAK in META] ${relFile}: Found "${term}" in ${meta}`);
        leaksFound++;
      }
    }
  }

  // b) Href attributes (including wa.me/ check)
  const hrefMatches = strippedHtml.match(/\bhref=["']([^"']*)["']/gi) || [];
  for (const href of hrefMatches) {
    for (const term of PROHIBITED_TERMS) {
      if (href.toLowerCase().includes(term.toLowerCase())) {
        console.error(`[LEAK in HREF] ${relFile}: Found "${term}" in ${href}`);
        leaksFound++;
      }
    }
  }

  // c) Other attributes (alt, title, aria-*, src)
  const attrMatches = strippedHtml.match(/\b(alt|title|src|aria-label)=["']([^"']*)["']/gi) || [];
  for (const attr of attrMatches) {
    for (const term of PROHIBITED_TERMS) {
      if (attr.toLowerCase().includes(term.toLowerCase())) {
        console.error(`[LEAK in ATTR] ${relFile}: Found "${term}" in ${attr}`);
        leaksFound++;
      }
    }
  }

  // d) Rendered visible text nodes (outside script and style tags)
  const textOnly = strippedHtml
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");

  for (const term of PROHIBITED_TERMS) {
    if (textOnly.toLowerCase().includes(term.toLowerCase())) {
      console.error(`[LEAK in TEXT] ${relFile}: Found "${term}" in rendered body text!`);
      leaksFound++;
    }
  }
}

console.log("================================================================================");
if (leaksFound === 0) {
  console.log(`[PASS] CLEAN RUN: ZERO LEAKS DETECTED across all ${htmlFiles.length} rendered HTML files!`);
  console.log("Verified: No occurrences of 719382296, 71 938 2296, 071 938, Rizmi, Rashard, or wa.me/ in text, attributes, meta, or hrefs.");
} else {
  console.error(`[FAIL] ${leaksFound} privacy leak(s) detected!`);
  process.exit(1);
}
console.log("================================================================================\n");
