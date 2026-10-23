import fs from "node:fs";

const reports = [
  { name: "Home (/)", file: "lh-home.json" },
  { name: "Features Hub (/features)", file: "lh-features.json" },
  { name: "FAQ (/faq)", file: "lh-faq.json" },
];

console.log("================================================================================");
console.log("LIGHTHOUSE MOBILE AUDIT RESULTS (AGAINST PRODUCTION BUILD)");
console.log("================================================================================\n");

for (const report of reports) {
  if (!fs.existsSync(report.file)) {
    console.error(`Missing report file: ${report.file}`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(report.file, "utf-8"));
  const cats = data.categories;

  const perfScore = Math.round((cats.performance?.score || 0) * 100);
  const a11yScore = Math.round((cats.accessibility?.score || 0) * 100);
  const seoScore = Math.round((cats.seo?.score || 0) * 100);
  const bpScore = Math.round((cats["best-practices"]?.score || 0) * 100);

  const lcpAudit = data.audits["largest-contentful-paint"];
  const lcpTime = lcpAudit ? (lcpAudit.numericValue / 1000).toFixed(2) + "s" : "N/A";
  
  const lcpElemAudit = data.audits["largest-contentful-paint-element"];
  let lcpElementDesc = "Unknown";
  if (lcpElemAudit && lcpElemAudit.details && lcpElemAudit.details.items && lcpElemAudit.details.items.length > 0) {
    const item = lcpElemAudit.details.items[0];
    lcpElementDesc = item.node?.snippet || item.node?.selector || item.node?.nodeLabel || "N/A";
  }

  console.log(`Page: ${report.name}`);
  console.log(`  Performance:    ${perfScore}/100`);
  console.log(`  Accessibility:  ${a11yScore}/100`);
  console.log(`  SEO:            ${seoScore}/100`);
  console.log(`  Best Practices: ${bpScore}/100`);
  console.log(`  LCP Time:       ${lcpTime}`);
  console.log(`  LCP Element:    ${lcpElementDesc}`);
  console.log("");
}
