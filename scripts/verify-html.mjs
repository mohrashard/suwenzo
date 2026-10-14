import fs from "fs";

const pages = [
  { name: "Home (/)", path: ".next/server/app/index.html" },
  { name: "FAQ (/faq)", path: ".next/server/app/faq.html" },
  { name: "Patient Records (/features/patient-records)", path: ".next/server/app/features/patient-records.html" },
  { name: "Fact Sheet (/facts)", path: ".next/server/app/facts.html" },
  { name: "Blog Post (/blog/paper-vs-digital-clinic-records-sri-lanka)", path: ".next/server/app/blog/paper-vs-digital-clinic-records-sri-lanka.html" },
];

for (const p of pages) {
  if (!fs.existsSync(p.path)) {
    console.log(`Page ${p.name} not found at ${p.path}`);
    continue;
  }
  const html = fs.readFileSync(p.path, "utf8");
  console.log(`\n========================================`);
  console.log(`PAGE: ${p.name}`);
  console.log(`========================================`);

  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
  const ogDescMatch = html.match(/<meta property="og:description" content="([^"]+)"/);
  const ogUrlMatch = html.match(/<meta property="og:url" content="([^"]+)"/);
  const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
  const twCardMatch = html.match(/<meta name="twitter:card" content="([^"]+)"/);

  console.log(`Title (${titleMatch ? titleMatch[1].length : 0} chars): ${titleMatch ? titleMatch[1] : "MISSING"}`);
  console.log(`Description (${descMatch ? descMatch[1].length : 0} chars): ${descMatch ? descMatch[1] : "MISSING"}`);
  console.log(`Canonical: ${canonicalMatch ? canonicalMatch[1] : "MISSING"}`);
  console.log(`OG Title: ${ogTitleMatch ? ogTitleMatch[1] : "MISSING"}`);
  console.log(`OG Description: ${ogDescMatch ? ogDescMatch[1] : "MISSING"}`);
  console.log(`OG URL: ${ogUrlMatch ? ogUrlMatch[1] : "MISSING"}`);
  console.log(`OG Image: ${ogImageMatch ? ogImageMatch[1] : "MISSING"}`);
  console.log(`Twitter Card: ${twCardMatch ? twCardMatch[1] : "MISSING"}`);

  const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  let count = 0;
  while ((match = jsonLdRegex.exec(html)) !== null) {
    count++;
    try {
      const parsed = JSON.parse(match[1]);
      const type = parsed["@type"] || "(no type)";
      const id = parsed["@id"] ? `[@id: ${parsed["@id"]}]` : "";
      console.log(`  JSON-LD #${count}: @type = ${type} ${id}`);
    } catch (err) {
      console.log(`  JSON-LD #${count}: Failed to parse JSON: ${err.message}`);
    }
  }
}
