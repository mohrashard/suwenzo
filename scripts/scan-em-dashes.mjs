import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const excludedDirs = new Set(["node_modules", ".git", ".gemini", "dist"]);

function scanDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".next") {
        // Only include .next/server/app/**/*.html
        const serverAppPath = path.join(fullPath, "server", "app");
        if (fs.existsSync(serverAppPath)) {
          scanHtmlOnly(serverAppPath, fileList);
        }
      } else if (!excludedDirs.has(entry.name)) {
        scanDir(fullPath, fileList);
      }
    } else if (entry.isFile()) {
      // Don't scan binary media files
      const ext = path.extname(entry.name).toLowerCase();
      if (![".png", ".jpg", ".jpeg", ".ico", ".woff", ".woff2", ".ttf", ".webp", ".pdf"].includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

function scanHtmlOnly(dir, fileList) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanHtmlOnly(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      fileList.push(fullPath);
    }
  }
}

const allFiles = scanDir(rootDir);
console.log(`Scanning ${allFiles.length} files for em/en dashes and entities...`);

const dashRegex = /[\u2014\u2013]|&mdash;|&ndash;|\\u2014|\\u2013/g;
let hits = 0;

for (const file of allFiles) {
  // Skip this scan script itself so it doesn't match its own regex
  if (file.endsWith("scan-em-dashes.mjs")) continue;

  const content = fs.readFileSync(file, "utf-8");
  const lines = content.split(/\r?\n/);
  lines.forEach((line, lineNum) => {
    if (dashRegex.test(line)) {
      hits++;
      const relPath = path.relative(rootDir, file).replace(/\\/g, "/");
      console.log(`HIT in ${relPath}:${lineNum + 1}: ${line.trim()}`);
    }
  });
}

console.log("\n=======================================================");
console.log(`EM DASH SCAN COMPLETE: ${hits} HITS FOUND`);
console.log("=======================================================");

if (hits > 0) {
  process.exit(1);
}
