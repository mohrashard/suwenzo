# Suwenzo: Owner Launch & Off-Site Action Checklist

This checklist contains all external actions, credentials, off-site citations, directory listings, and facts requiring owner verification to complete Suwenzo's SEO, AEO, and GEO launch.

---

## 1. Production Hosting & Environment Variables

- [ ] **Set `WHATSAPP_NUMBER` on Production Hosting (Vercel / Cloudflare):**
  - Variable Name: `WHATSAPP_NUMBER`
  - Value: `94719382296` (no `+`, no spaces, international format)
  - *Why:* The `/go/whatsapp` server route reads this environment variable to perform 302 redirects to `https://wa.me/94719382296?text=...`. The phone number is never hardcoded in client bundles.
- [ ] **Verify Apex to WWW 301 Redirect:**
  - Verify that navigating to `http://suwenzo.com` and `https://suwenzo.com` permanently redirects with HTTP 301 to `https://www.suwenzo.com`.
  - Next.js configuration in `next.config.ts` handles this, but DNS/edge proxy (e.g. Cloudflare / Vercel domain settings) should also enforce apex &rarr; www redirection.

---

## 2. Search Console & Search Engine Verification

- [ ] **Google Search Console:**
  - Add property: `https://www.suwenzo.com`
  - Verify ownership via DNS TXT record or HTML tag.
  - Submit sitemap: `https://www.suwenzo.com/sitemap.xml`
  - Request indexing for the homepage (`/`), `/faq`, `/facts`, and feature pages.
- [ ] **Bing Webmaster Tools:**
  - Add property: `https://www.suwenzo.com` (can import directly from Google Search Console).
  - Submit sitemap: `https://www.suwenzo.com/sitemap.xml`
  - Enables indexing for Bing, Yahoo, and Microsoft Copilot.

---

## 3. Entity Consistency & Knowledge Graph (GEO Citations)

To ensure citations by ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews, Suwenzo must exist as a verified entity with consistent information across the web:

- [ ] **Google Business Profile (GBP):**
  - Set up a listing for **Suwenzo**.
  - Business type: **Service-Area Business (SAB)** based in Colombo, Sri Lanka (do not publish a home residential address).
  - Service area: Colombo District, Western Province, Sri Lanka.
  - Primary category: *Software Company* / *Medical Software*.
  - Website: `https://www.suwenzo.com`
  - Description: Use the exact canonical definition from `SOCIAL_BIOS.md`.
  - Assets: Upload `public/social-avatar.png` as logo and `public/og-default.png` as cover.
- [ ] **Software Directory Profiles:**
  - [ ] **SoftwareSuggest:** Submit Suwenzo under *Clinic Management Software* (widely indexed in South Asia).
  - [ ] **Capterra / Gartner Digital Markets:** Submit product profile.
  - [ ] **GetApp:** Product profile submission.
  - [ ] **G2:** Claim or create product profile.
- [ ] **Social Profiles Activation:**
  - Copy and paste bios from `SOCIAL_BIOS.md`:
    - [ ] Facebook: Update Page intro, about description, profile picture (`social-avatar.png`), and cover (`social-facebook-cover.png`).
    - [ ] Instagram: Update bio, category, and profile picture.
    - [ ] TikTok: Update bio and profile picture.
    - [ ] LinkedIn: Update company page tagline, about section, logo, and banner (`social-linkedin-banner.png`).

---

## 4. Brand & Local Medical Ecosystem Outreach

- [ ] **Pilot Clinic Testimonials & Quotes:**
  - Secure 3 to 5 verified pilot clinic quotes from Colombo general practitioners or clinic directors.
  - Ensure written consent to feature the clinic name, doctor's name, and photo.
  - *Rule compliance:* Real doctor quotes should replace generic placeholders once written consent is obtained.
- [ ] **Sri Lankan Medical Community / Press Mentions:**
  - Reach out to local medical and healthcare publications, Sri Lankan startup directories, and medical association event bulletins to establish authoritative inbound editorial links.

---

## 5. Unconfirmed Facts & Roadmap Items (Do Not Claim Until Confirmed)

The following items are deliberately omitted or written around on the live website to adhere to strict truthfulness rules. Once verified, they can be incorporated:

1. **Reminder Languages:**
   - *Current status:* Omitted from copy. Unconfirmed whether WhatsApp reminders support Sinhala, Tamil, English, or automated trilingual templates.
   - *Action required:* Confirm supported message templates before publishing language claims.
2. **SMS / Email Fallback:**
   - *Current status:* Only WhatsApp reminders are claimed.
   - *Action required:* Confirm if an SMS gateway (e.g. Dialog/Mobitel SMS) will be added as a fallback channel for patients without WhatsApp.
3. **Lab / Diagnostic Module & Analyzer Interfacing:**
   - *Current status:* Explicitly excluded. Not claimed anywhere on the site.
   - *Action required:* Confirm roadmap timeline before listing lab integrations.
4. **Multi-Branch Synchronization:**
   - *Current status:* Multi-doctor single-location practices are supported. Multi-branch cloud sync is not claimed as currently shipped.
5. **CEO & Phone Number in Schema:**
   - *Current status:* Controlled by boolean flags `INCLUDE_PHONE_IN_SCHEMA` and `INCLUDE_FOUNDER_IN_SCHEMA` in `src/lib/site.ts` (currently `false` to keep them hidden from crawlers).
   - *Action required:* If you decide to link your LinkedIn founder profile or business phone in the JSON-LD Organization schema later, toggle these booleans to `true`.
