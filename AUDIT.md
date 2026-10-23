# Suwenzo Comprehensive SEO, AEO, and GEO Technical Audit (Phase 0)

## 1. Environment and Framework Architecture
- Next.js Version: 16.3.7
- React Version: 19.2.8
- Router: App Router (located at `src/app/`)
- Styling: Tailwind CSS v4 (`@tailwindcss/postcss` 4.3.3) with standard CSS variables
- Image Rendering / Vector Tooling: `@resvg/resvg-js` (2.6.2) available for server-side rasterization

## 2. Metadata Architecture
- Root Metadata (`src/app/layout.tsx`):
  - Uses `metadataBase: new URL("https://www.suwenzo.com")`.
  - Defines default title, template, description, OpenGraph, and Twitter tags.
  - Current gap: `buildMetadata` helper is missing; pages define metadata ad hoc with varying formats. Several page titles exceed 60 characters and descriptions fall outside the 120 to 155 character requirement.
  - Root `html` tag currently uses `lang="en"`; required value is `lang="en-LK"`, with no hreflang tags since this is a single-language site.

## 3. Route Inventory and Structure
### Existing Discovered Routes
- `/` (`src/app/page.tsx`): Homepage
- `/about` (`src/app/about/page.tsx`): About page
- `/contact` (`src/app/contact/page.tsx`): Contact page
- `/facts` (`src/app/facts/page.tsx`): Fact sheet
- `/faq` (`src/app/faq/page.tsx`): FAQ directory
- `/features/patient-records` (`src/app/features/patient-records/page.tsx`)
- `/features/digital-prescriptions` (`src/app/features/digital-prescriptions/page.tsx`)
- `/features/stock-and-expiry` (`src/app/features/stock-and-expiry/page.tsx`)
- `/features/whatsapp-reminders` (`src/app/features/whatsapp-reminders/page.tsx`)
- `/for/solo-doctors` (`src/app/for/solo-doctors/page.tsx`)
- `/for/clinics-with-dispensary` (`src/app/for/clinics-with-dispensary/page.tsx`)
- `/for/consulting-only-practices` (`src/app/for/consulting-only-practices/page.tsx`)
- `/for/multi-doctor-practices` (`src/app/for/multi-doctor-practices/page.tsx`)
- `/blog` (`src/app/blog/page.tsx`): Blog listing
- `/blog/paper-vs-digital-clinic-records-sri-lanka`
- `/blog/prescription-flow-doctor-to-dispensary`
- `/blog/what-to-look-for-in-clinic-software-sri-lanka`
- `/go/whatsapp` (`src/app/go/whatsapp/route.ts`): WhatsApp redirection handler

### Missing Routes Required by Specification
- `/how-it-works`: Process walkthrough
- `/features`: Features hub page
- `/for`: Practice types hub page
- `/privacy`: Privacy policy detailing consent-based messaging
- `/terms`: Terms of service
- `/llms.txt`: Structured plain markdown overview for LLM scrapers
- Standardized blog collection with 6 specific article slugs (with articles 1 and 4 written in full: 1,000 to 1,400 words)

## 4. Sitemap and Robots Status
- `src/app/robots.ts`:
  - Allows all standard search user agents.
  - Explicitly handles `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, `Google-Extended`, and `Applebot-Extended`.
  - Disallows `/go/` and `/api/`.
  - References `https://www.suwenzo.com/sitemap.xml`.
- `src/app/sitemap.ts`:
  - Hardcoded list missing the new hub pages (`/how-it-works`, `/features`, `/for`), legal pages (`/privacy`, `/terms`), and new blog articles. Needs dynamic or complete list with accurate lastmod dates.

## 5. Existing JSON-LD Schema
- `src/lib/schemas.ts`:
  - Provides discrete schema generators (`getOrganizationSchema`, `getWebSiteSchema`, `getSoftwareApplicationSchema`, `getFaqPageSchema`, `getBreadcrumbSchema`, `getArticleSchema`).
  - Organization schema currently disables phone and founder due to boolean flags (`INCLUDE_PHONE_IN_SCHEMA`, `INCLUDE_FOUNDER_IN_SCHEMA`).
  - Gap vs requirement: Must output an integrated `@graph` with stable `@id` references (`#organization`, `#website`, `#software`).
  - Must include telephone (+94719382296) and founder (Mohamed Rashard Rizmi) strictly inside JSON-LD (and never in HTML, alt text, or UI).
  - SoftwareApplication must strictly avoid offers, price, or ratings.

## 6. OpenGraph and Social Assets
- Existing script `scripts/build-brand.mjs` generates social avatars, banners, and default OG images.
- Gap vs requirement: Need a dedicated `scripts/build-og.mjs` that generates 1200x630 PNG images from handwritten SVGs for all hubs: home, how-it-works, features, for, faq, blog.
- Need 4 feature illustrations and 4 practice-type illustrations in flat style with consistent stroke and corner radius.

## 7. Typography and Fonts
- `next/font/google` loads `Plus_Jakarta_Sans` with `display: 'swap'` and `subsets: ["latin"]`.
- Variable `--font-plus-jakarta` is applied to `html`.

## 8. Image Delivery and Optimization
- `Hero.tsx` uses background image `clinic-hero.jpg` and overlay `bluewhite.jpg`.
- Gap vs requirement: Hero image must use `next/image`, `priority`, `sizes="100vw"`, `quality={70}`, descriptive alt, AVIF/WebP enabled, and device widths capped in `next.config.ts` to prevent serving oversized 3840w assets to mobile viewports.

## 9. Navigation and Footer Architecture
- `Navbar.tsx`:
  - Contains 5 links: "Home", "How it works" (/#how-it-works), "Features" (/#features), "Who it's for" (/#who-and-why), "FAQ" (/faq).
  - Uses hash fragment scrolling on homepage.
  - Gap vs requirement: Must contain exactly 4 links plus CTA:
    - How it works: `/how-it-works`
    - Features: `/features`
    - Who it's for: `/for`
    - FAQ: `/faq`
    - CTA: Book a Demo (`/go/whatsapp?src=navbar&m=demo`)
    - Logo serves as the Home link.
    - Clean URLs everywhere with active-state styling and `aria-current`.
- `Footer.tsx`:
  - 3 columns: Features, Practice Types, Resources.
  - Gap vs requirement: Resources column must include FAQ, Fact sheet, About, Contact, Blog, Privacy, Terms. Missing `/privacy` and `/terms`.

## 10. Homepage Structure and Anchor IDs
- Current sections in `src/app/page.tsx`:
  - Hero, VideoSection, ProblemSection, HowItWorks, FeaturesSection, WhoAndWhySection, FaqSection, FinalCta.
- Gap vs requirement: Must be consolidated into Hero + exactly 4 content sections + Demo Band + Footer:
  1. Section 1: `id="how-it-works"`
  2. Section 2: `id="features"`
  3. Section 3: `id="who-its-for"` (with `id="who-and-why"` preserved as an alias)
  4. Section 4: `id="faq"`
  - Hero `<h1>` must contain `<span class="eyebrow">Clinic software for Sri Lanka</span> Prescribe once. Remember every patient.`.
  - Merged problem, cost chips, 4-station strip, 3 steps, founder note (max 3 sentences without founder name, linking to `/about`).

## 11. FAQ Content Single Source of Truth
- Currently, FAQ questions are duplicated and declared locally across `src/components/FaqSection.tsx`, `src/components/FaqDirectoryClient.tsx`, and feature pages.
- Gap vs requirement: Must create `src/content/site.ts` exporting `DEFINITION`, `BRAND`, `SOCIALS`, `FAQ` items, `FEATURES`, and `PRACTICE_TYPES`. All pages and JSON-LD must import from this single source.

## 12. Copy and Compliance Invariants
- Em dashes found in several existing files (e.g., `src/app/about/page.tsx`, `Hero.tsx`). All em dashes must be replaced with commas, colons, or full stops.
- Grep checks needed to guarantee that phone number (+94 71 938 2296) and founder name (Mohamed Rashard Rizmi) never appear in rendered HTML, alt text, or UI.

## 13. Immediate Execution Plan
1. Create `docs/keyword-map.md`.
2. Commit Phase 0 & Keyword Map.
3. Establish `src/content/site.ts` single source of truth for all content, FAQs, definitions, and features.
4. Implement metadata and JSON-LD graph builder in `src/lib/`.
5. Reconstruct Navigation and Footer to exact specifications.
6. Build new hub pages: `/how-it-works`, `/features`, `/for`, `/privacy`, `/terms`, `/llms.txt`.
7. Refactor Homepage to exact 4-section architecture.
8. Refactor all existing feature and practice spoke pages to meet page specs, meta lengths, single H1, and internal linking rules.
9. Scaffold blog system, write Posts 1 and 4 in full, build RSS feed.
10. Generate brand SVG illustrations and PNG OG assets via `scripts/build-og.mjs`.
11. Implement automated test scripts (`scripts/seo-check.mjs`) and verify all constraints.
