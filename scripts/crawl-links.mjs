import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const serverAppDir = path.join(rootDir, ".next", "server", "app");

// Map of route URL path to its HTML file
function getBuiltHtmlFiles(dir, baseDir = dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getBuiltHtmlFiles(full, baseDir));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      const rel = path.relative(baseDir, full).replace(/\\/g, "/");
      let routePath;
      if (rel === "index.html") {
        routePath = "/";
      } else if (rel.endsWith(".html")) {
        routePath = "/" + rel.slice(0, -5);
      }
      files.push({ routePath, filePath: full, rel });
    }
  }
  return files;
}

const allBuiltPages = getBuiltHtmlFiles(serverAppDir);
const pageMap = new Map();
allBuiltPages.forEach((p) => {
  pageMap.set(p.routePath, p.filePath);
});

console.log("================================================================================");
console.log(`CRAWLING SITE LINKS (Total Built HTML Pages: ${allBuiltPages.length})`);
console.log("================================================================================\n");

const visited = new Set();
const queue = ["/"];
const foundInternalLinks = new Map(); // target -> [sources]
const brokenLinks = [];

while (queue.length > 0) {
  const currentPath = queue.shift();
  if (visited.has(currentPath)) continue;
  visited.add(currentPath);

  const filePath = pageMap.get(currentPath);
  if (!filePath || !fs.existsSync(filePath)) {
    continue;
  }

  const html = fs.readFileSync(filePath, "utf-8");
  const linkRegex = /href=["']([^"'#]*)["']/gi;
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    let target = match[1].trim();
    if (!target) continue;

    // Filter out external, anchor, mailto, tel, go/whatsapp
    if (target.startsWith("http://") || target.startsWith("https://")) {
      if (target.startsWith("https://www.suwenzo.com")) {
        target = target.replace("https://www.suwenzo.com", "") || "/";
      } else {
        continue;
      }
    }
    if (target.startsWith("#") || target.startsWith("mailto:") || target.startsWith("tel:")) {
      continue;
    }
    if (target.startsWith("/go/")) {
      continue;
    }
    if (target.startsWith("/_next/") || target.endsWith(".png") || target.endsWith(".svg") || target.endsWith(".jpg") || target.endsWith(".ico") || target.endsWith(".webmanifest")) {
      continue;
    }

    // Normalize
    const normalizedTarget = target === "/" ? "/" : target.replace(/\/$/, "");

    if (!foundInternalLinks.has(normalizedTarget)) {
      foundInternalLinks.set(normalizedTarget, []);
    }
    foundInternalLinks.get(normalizedTarget).push(currentPath);

    // Check if target is built or recognized
    const isSpecial = ["/rss.xml", "/llms.txt", "/sitemap.xml", "/robots.txt"].includes(normalizedTarget);
    if (!pageMap.has(normalizedTarget) && !isSpecial) {
      brokenLinks.push({ source: currentPath, target: normalizedTarget });
    } else if (pageMap.has(normalizedTarget) && !visited.has(normalizedTarget)) {
      queue.push(normalizedTarget);
    }
  }
}

console.log(`Crawl starting from / completed.`);
console.log(`Total URLs visited: ${visited.size}`);
console.log(`Total internal link references discovered: ${[...foundInternalLinks.values()].reduce((acc, v) => acc + v.length, 0)}`);

console.log("\n--- BROKEN INTERNAL LINKS CHECK ---");
if (brokenLinks.length === 0) {
  console.log("[PASS] 0 broken internal links found!");
} else {
  console.error(`[FAIL] ${brokenLinks.length} broken link(s) found:`);
  brokenLinks.forEach((b) => console.error(`  ${b.source} -> ${b.target}`));
}

console.log("\n--- UNREACHABLE / ORPHAN PAGES CHECK ---");
const unreachablePages = [];
for (const p of allBuiltPages) {
  // Ignore _not-found
  if (p.routePath === "/_not-found") continue;
  if (!visited.has(p.routePath)) {
    unreachablePages.push(p.routePath);
  }
}

if (unreachablePages.length === 0) {
  console.log("[PASS] All built pages are reachable from nav, footer or in-content links!");
} else {
  console.log(`Found ${unreachablePages.length} built page(s) not reachable from crawl:`);
  unreachablePages.forEach((u) => {
    console.log(`  - ${u}`);
  });
}

console.log("\n================================================================================");
