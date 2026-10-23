import fs from "node:fs";
import path from "node:path";

const targetPages = [
  { name: "Home (/)", file: ".next/server/app/index.html" },
  { name: "Features Hub (/features)", file: ".next/server/app/features.html" },
  { name: "Feature Spoke (/features/digital-prescriptions)", file: ".next/server/app/features/digital-prescriptions.html" },
  { name: "Practice Spoke (/for/clinics-with-dispensary)", file: ".next/server/app/for/clinics-with-dispensary.html" },
  { name: "FAQ (/faq)", file: ".next/server/app/faq.html" },
  { name: "Blog Post (/blog/how-to-choose-clinic-software-sri-lanka)", file: ".next/server/app/blog/how-to-choose-clinic-software-sri-lanka.html" },
];

console.log("================================================================================");
console.log("SCHEMA.ORG STRUCTURED DATA LOCAL VALIDATOR");
console.log("================================================================================\n");

// Schema.org core required / recommended properties per type
const TYPE_RULES = {
  Organization: {
    required: ["@type", "name", "url"],
    recommended: ["logo", "description"],
  },
  WebSite: {
    required: ["@type", "name", "url"],
    recommended: ["description", "publisher"],
  },
  SoftwareApplication: {
    required: ["@type", "name", "applicationCategory", "operatingSystem"],
    recommended: ["offers", "description", "featureList"],
  },
  BreadcrumbList: {
    required: ["@type", "itemListElement"],
    validate: (item, warnings) => {
      if (!Array.isArray(item.itemListElement)) {
        warnings.push("BreadcrumbList itemListElement should be an Array");
      } else {
        item.itemListElement.forEach((el, idx) => {
          if (el["@type"] !== "ListItem") warnings.push(`Breadcrumb item #${idx + 1} @type is not ListItem`);
          if (!el.name) warnings.push(`Breadcrumb item #${idx + 1} is missing 'name'`);
          if (el.position === undefined) warnings.push(`Breadcrumb item #${idx + 1} is missing 'position'`);
        });
      }
    },
  },
  FAQPage: {
    required: ["@type", "mainEntity"],
    validate: (item, warnings) => {
      if (!Array.isArray(item.mainEntity)) {
        warnings.push("FAQPage mainEntity should be an Array of Questions");
      } else {
        item.mainEntity.forEach((q, idx) => {
          if (q["@type"] !== "Question") warnings.push(`FAQ item #${idx + 1} @type is not Question`);
          if (!q.name) warnings.push(`FAQ item #${idx + 1} is missing 'name'`);
          if (!q.acceptedAnswer || q.acceptedAnswer["@type"] !== "Answer") {
            warnings.push(`FAQ item #${idx + 1} is missing valid acceptedAnswer`);
          } else if (!q.acceptedAnswer.text) {
            warnings.push(`FAQ item #${idx + 1} acceptedAnswer is missing 'text'`);
          }
        });
      }
    },
  },
  BlogPosting: {
    required: ["@type", "headline", "datePublished", "author"],
    recommended: ["description", "dateModified", "publisher", "mainEntityOfPage"],
  },
  CollectionPage: {
    required: ["@type", "name", "url"],
    recommended: ["description", "isPartOf"],
  },
  WebPage: {
    required: ["@type", "name", "url"],
    recommended: ["description", "isPartOf"],
  },
};

let totalBlocks = 0;
let totalWarnings = 0;
let totalErrors = 0;

for (const page of targetPages) {
  const filePath = path.join(process.cwd(), page.file);
  console.log(`Validating schemas on: ${page.name}`);

  if (!fs.existsSync(filePath)) {
    console.error(`  [ERROR] File not found: ${filePath}`);
    totalErrors++;
    continue;
  }

  const html = fs.readFileSync(filePath, "utf-8");
  const jsonLdRegex = /<script\b[^>]*?\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let blockIndex = 0;

  while ((match = jsonLdRegex.exec(html)) !== null) {
    blockIndex++;
    totalBlocks++;
    const rawContent = match[1];

    let parsed;
    try {
      parsed = JSON.parse(rawContent);
    } catch (e) {
      console.error(`  [BLOCK #${blockIndex}] [ERROR] JSON Parse Error: ${e.message}`);
      totalErrors++;
      continue;
    }

    // Context check
    if (parsed["@context"] !== "https://schema.org" && parsed["@context"] !== "http://schema.org") {
      console.warn(`  [BLOCK #${blockIndex}] [WARNING] @context should be 'https://schema.org' (found: ${parsed["@context"]})`);
      totalWarnings++;
    }

    const items = parsed["@graph"] ? parsed["@graph"] : [parsed];

    for (const item of items) {
      const type = item["@type"];
      if (!type) {
        console.error(`  [BLOCK #${blockIndex}] [ERROR] Item missing @type`);
        totalErrors++;
        continue;
      }

      const warnings = [];
      const rule = TYPE_RULES[type];

      if (rule) {
        if (rule.required) {
          for (const req of rule.required) {
            if (item[req] === undefined || item[req] === null || item[req] === "") {
              warnings.push(`Missing required Schema.org property '${req}' for @type '${type}'`);
            }
          }
        }
        if (rule.recommended) {
          for (const rec of rule.recommended) {
            if (item[rec] === undefined || item[rec] === null || item[rec] === "") {
              warnings.push(`Missing recommended property '${rec}' for @type '${type}'`);
            }
          }
        }
        if (rule.validate) {
          rule.validate(item, warnings);
        }
      }

      if (warnings.length > 0) {
        console.log(`  [BLOCK #${blockIndex}] [@type: ${type}] - ${warnings.length} warning(s):`);
        for (const w of warnings) {
          console.log(`    - [WARNING] ${w}`);
          totalWarnings++;
        }
      } else {
        console.log(`  [BLOCK #${blockIndex}] [@type: ${type}] -> VALID (0 errors, 0 warnings)`);
      }
    }
  }
  console.log("");
}

console.log("================================================================================");
console.log(`SCHEMA VALIDATION SUMMARY:`);
console.log(`Total Pages Inspected: ${targetPages.length}`);
console.log(`Total JSON-LD Blocks Validated: ${totalBlocks}`);
console.log(`Total Syntax Errors: ${totalErrors}`);
console.log(`Total Schema Warnings: ${totalWarnings}`);
console.log("================================================================================\n");

if (totalErrors > 0) {
  process.exit(1);
}
