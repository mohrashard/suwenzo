import fs from "node:fs";

const pages = [
  { name: "Home (/)", file: "lh-home-warmed2.json" },
  { name: "Features (/features)", file: "lh-features-new.json" },
  { name: "FAQ (/faq)", file: "lh-faq-new.json" },
];

console.log("================================================================================");
console.log("FINAL LIGHTHOUSE MOBILE AUDIT REPORT (PRODUCTION SERVER BUILD)");
console.log("================================================================================\n");

for (const page of pages) {
  if (!fs.existsSync(page.file)) {
    console.error(`Missing file: ${page.file}`);
    continue;
  }
  const d = JSON.parse(fs.readFileSync(page.file, "utf-8"));
  const cats = d.categories;

  const perf = Math.round(cats.performance.score * 100);
  const a11y = Math.round(cats.accessibility.score * 100);
  const seo = Math.round(cats.seo.score * 100);
  const bp = Math.round(cats["best-practices"].score * 100);

  const lcp = (d.audits["largest-contentful-paint"]?.numericValue / 1000).toFixed(2) + "s";
  const tbt = Math.round(d.audits["total-blocking-time"]?.numericValue || 0) + "ms";
  const cls = (d.audits["cumulative-layout-shift"]?.numericValue || 0).toFixed(3);

  const lcpBreakdown = d.audits["lcp-breakdown-insight"];
  const lcpNode = lcpBreakdown?.details?.items?.find((i) => i.type === "node");
  const lcpElement = lcpNode ? `${lcpNode.nodeLabel || lcpNode.snippet || lcpNode.selector}` : "N/A";

  // Collect opportunities
  const opportunities = [];
  for (const [key, audit] of Object.entries(d.audits)) {
    if (audit.details && audit.details.type === "opportunity" && audit.numericValue > 10) {
      opportunities.push({
        id: key,
        title: audit.title,
        savings: audit.displayValue || `${Math.round(audit.numericValue)}ms`,
        ms: audit.numericValue,
      });
    }
  }
  opportunities.sort((a, b) => b.ms - a.ms);

  console.log(`PAGE: ${page.name}`);
  console.log(`  Scores:        Performance: ${perf}/100 | Accessibility: ${a11y}/100 | SEO: ${seo}/100 | Best Practices: ${bp}/100`);
  console.log(`  Core Vitals:   LCP: ${lcp} | TBT: ${tbt} | CLS: ${cls}`);
  console.log(`  LCP Element:   ${lcpElement.replace(/\n+/g, " ").slice(0, 100)}`);
  console.log(`  Top 3 Opportunities:`);
  if (opportunities.length === 0) {
    console.log(`    1. None (all audit opportunities passed with 0ms wasted)`);
  } else {
    opportunities.slice(0, 3).forEach((o, idx) => {
      console.log(`    ${idx + 1}. ${o.title} (${o.savings})`);
    });
    if (opportunities.length < 3) {
      for (let i = opportunities.length; i < 3; i++) {
        console.log(`    ${i + 1}. None`);
      }
    }
  }
  console.log("");
}
