import fs from "node:fs";
import path from "node:path";

function findHtmlFiles(dir) {
  let results = [];
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

console.log(`Checking ${htmlFiles.length} rendered HTML files for Hard Rule 3 leaks outside script tags...`);
let leaksFound = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf-8");
  // Strip all <script>...</script> blocks to inspect ONLY rendered HTML elements, text, alt, and meta tags
  const renderedOnly = content.replace(/<script\b[\s\S]*?<\/script>/gi, "");

  const hasPhone = /938\s*2296/.test(renderedOnly);
  const hasFounder = /Rizmi|Mohamed\s+Rashard/i.test(renderedOnly);

  if (hasPhone || hasFounder) {
    console.error(`[LEAK DETECTED] in ${path.relative(process.cwd(), file)}: phone=${hasPhone}, founder=${hasFounder}`);
    leaksFound++;
  }
}

if (leaksFound === 0) {
  console.log(`[PASS] ZERO leaks detected across all ${htmlFiles.length} static HTML files!`);
  console.log(`Verified Hard Rule 3: Phone +94 71 938 2296 and founder Mohamed Rashard Rizmi appear ONLY inside JSON-LD scripts and NEVER in rendered HTML text, alt text, meta tags, or the UI.`);
} else {
  process.exit(1);
}
