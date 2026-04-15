# SHELTON WATCH SERVICES — COMPLETE CURSOR BUILD BRIEF
## sheltonwatchservices.com
### Version: FINAL — All gaps addressed

---

## 1. PROJECT OVERVIEW

Build a complete multi-page website for **Shelton Watch Services**, an independent watch specialist in Bethlehem, PA. The business buys, sells, and services watches — from battery replacements to full mechanical overhauls to vintage restoration. 12+ years experience.

**Framework:** Astro (static site generator). Outputs plain HTML. Deploys to Netlify.
**Goal:** Dominate local and regional search for watch repair, buying, and selling across the Lehigh Valley PA.

**⚠️ CRITICAL: This is a SERVICE BUSINESS — NOT e-commerce. DO NOT implement any checkout, payment processing, shopping cart, or Stripe integration. All transactions happen offline. Every watch purchase is inquiry-based only.**

**Business contact:**
- Location: By appointment — Bethlehem, PA 18017
- Phone: (484) 291-4029
- Email: info@sheltonwatchservices.com
- Hours: Mon–Fri 9am–5pm · Saturday by appointment
- Service area: Lehigh Valley PA · Mail-in nationwide

---

## 2. DESIGN SYSTEM — HERITAGE GREEN

### Direction
Forest green + ivory + gold. Trusted institution feel. Old money, established authority. Warm, personal, expert. NOT dark luxury, NOT corporate, NOT generic. The one thing visitors remember: deep green and warm ivory — felt like the real deal.

### Color Tokens
```css
:root {
  --forest:   #1E3328;
  --forest2:  #2D4A3E;
  --forest3:  #3A5C4F;
  --ivory:    #FAFAF5;
  --ivory2:   #F2F5F0;
  --ivory3:   #E8EDE6;
  --ivory4:   #DDE5DA;
  --ink:      #1E3328;
  --ink2:     #2D4A3E;
  --ink3:     #4A6155;
  --ink4:     #7A9488;
  --ink5:     #A8BDB6;
  --gold:     #C5A028;
  --gold2:    #D4B23A;
  --rule:     rgba(30,51,40,0.12);
  --rule-lt:  rgba(30,51,40,0.06);
  --serif:    'Cormorant Garamond', Georgia, serif;
  --sans:     'DM Sans', sans-serif;
  --max:      1180px;
}
```

### Global Base Styles
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--ivory);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 14.5px;
  font-weight: 300;
  line-height: 1.85;
  padding-top: 68px; /* accounts for fixed nav height */
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 48px;
}
@media (max-width: 768px) {
  .container { padding: 0 24px; }
  body { padding-top: 68px; }
}

a { color: inherit; }
img { max-width: 100%; display: block; }
```

### Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
```

### Typography Scale
- Hero H1: Cormorant Garamond 300, `clamp(58px,7vw,96px)`, italic for `<em>` words
- H1: Cormorant Garamond 300, `clamp(48px,5vw,72px)`
- H2: Cormorant Garamond 300, `clamp(32px,4vw,52px)`
- H3: Cormorant Garamond 300, `23px`
- Eyebrow: DM Sans 400, `9.5px`, `letter-spacing:0.42em`, uppercase, `color:var(--gold)`
- Body: DM Sans 300, `14.5px`, `line-height:1.85`
- Small/meta: DM Sans 300, `12.5px`
- Price: Cormorant Garamond 400, `22px`, `color:var(--gold)`
- Button: DM Sans 400, `10.5px`, `letter-spacing:0.2em`, uppercase

### Eyebrow Pattern
Used before every section heading. Component: `Eyebrow.astro`
```html
<p class="eyebrow">Category Label</p>
<h2>Section <em>Heading</em></h2>
```
```css
.eyebrow {
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: var(--sans);
  font-size: 9.5px;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
}
.eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: var(--gold);
  flex-shrink: 0;
}
```

### Logo
File: `public/SWS-logo.PNG` — transparent PNG, dark outline letterforms.

**⚠️ OWNER MUST: Drop SWS-logo.PNG into the /public/ folder before first build.**

In nav and footer (dark forest background):
```css
.logo-img {
  filter: brightness(0) invert(1) sepia(0.2) saturate(0.5);
  height: 48px;
  width: auto;
}
```
On ivory backgrounds: no filter — dark letterforms show naturally.

### Navigation
```
Height: 68px
Background: var(--forest)
Position: fixed, top 0, left 0, width 100%, z-index: 100
Border-bottom: 1px solid rgba(255,255,255,0.08)
```

Left to right:
- Logo (href="/") with cream filter
- Nav links: `Shop · Service · Sell · Tools · Learn`
  - Shop → `/shop/`
  - Service → `/service/`
  - Sell → `/sell/`
  - Tools → `/tools/`
  - Learn → `/guide/`
  - Style: `font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(250,247,242,0.5); text-decoration:none; transition:color .2s;`
  - Hover and active: `color:rgba(197,160,40,0.9);`
- "Book Service" CTA: gold border button, gold text, `href="/service/"`

Active state: Use `Astro.url.pathname` to add class `active` to current nav link.

Mobile (below 960px): Hide nav links. Show hamburger ☰ button. On click: slide down full-width panel with forest background, links stacked 20px apart, 18px uppercase.

### Buttons
```css
.btn-primary {
  background: var(--forest); color: var(--ivory);
  padding: 13px 28px; border: none; border-radius: 0;
  font-family: var(--sans); font-size: 10.5px; font-weight: 400;
  letter-spacing: 0.2em; text-transform: uppercase;
  text-decoration: none; display: inline-block; cursor: pointer;
  transition: background .2s;
}
.btn-primary:hover { background: var(--forest2); }

.btn-secondary {
  background: none; color: var(--gold);
  padding: 12px 26px; border: 1px solid rgba(197,160,40,0.45); border-radius: 0;
  font-family: var(--sans); font-size: 10.5px; font-weight: 400;
  letter-spacing: 0.2em; text-transform: uppercase;
  text-decoration: none; display: inline-block;
  transition: all .2s;
}
.btn-secondary:hover { background: rgba(197,160,40,0.08); border-color:var(--gold); }

.btn-ghost {
  background: none; color: var(--ink3);
  padding: 12px 26px; border: 0.5px solid var(--rule); border-radius: 0;
  font-family: var(--sans); font-size: 10.5px; font-weight: 300;
  letter-spacing: 0.2em; text-transform: uppercase;
  text-decoration: none; display: inline-block;
  transition: all .2s;
}
.btn-ghost:hover { color: var(--ink); border-color: var(--ink3); }
```

### Forms
```css
.form-field {
  width: 100%; background: var(--ivory); border: 0.5px solid var(--rule);
  color: var(--ink); font-family: var(--sans); font-size: 13.5px;
  font-weight: 300; padding: 11px 13px; outline: none;
  border-radius: 0; appearance: none; transition: border-color .2s;
}
.form-field:focus { border-color: var(--forest2); border-width: 1px; }

.form-label {
  display: block; font-size: 9px; letter-spacing: 0.28em;
  text-transform: uppercase; color: var(--ink4); margin-bottom: 7px;
  font-family: var(--sans);
}
.form-group { margin-bottom: 14px; }

.form-submit {
  width: 100%; padding: 15px; background: var(--forest); color: var(--ivory);
  font-family: var(--sans); font-size: 10.5px; font-weight: 400;
  letter-spacing: 0.22em; text-transform: uppercase; border: none;
  cursor: pointer; border-radius: 0; margin-top: 8px; transition: background .2s;
}
.form-submit:hover { background: var(--forest2); }
```

**ALL FORMS — NETLIFY FORMS:**
Every `<form>` element must have:
```html
<form data-netlify="true" name="[form-name]" method="POST">
  <input type="hidden" name="form-name" value="[form-name]" />
  <!-- fields -->
</form>
```

Form names (exact — do not change):
- `sell-quote` — sell quote form (appears on /sell/, /sell/rolex/, /sell-my-watch-today/, /cash-for-watches/)
- `service-request` — service request form (appears on all service pages)
- `purchase-inquiry` — watch inquiry modal
- `contact` — contact page form

### Component Rules
- All borders: `0.5px` solid — NEVER `1px` except focused form fields and the answer-capsule accent
- Box shadows: NONE anywhere on the site
- Card grid gaps: `2px` — flush editorial
- Section padding: `100px 48px` desktop, `72px 24px` mobile
- Max content width: `1180px` centered
- Hover transitions: `0.2s ease` on all interactive elements
- Border radius: `0` on everything — cards, buttons, modals, forms — except pills/badges which use `99px`

**Section background pattern:**
- Odd content sections: `background: var(--ivory)`
- Even content sections: `background: var(--ivory2)`
- Dark sections (trust bar, location strip, footer): `background: var(--forest)`

**Gold appears ONLY on:**
Prices, eyebrow bars, nav CTA, active nav link, card hover top border, trust bar numbers, location label details, footer link hover, sell/service form submit border.

**Gold NEVER appears on:**
H1/H2 headings, body copy, card backgrounds, default card borders, section backgrounds.

### Answer Capsule
Used on ALL guide articles AND service type pages. First content after H1.
```html
<div class="answer-capsule">
  <p>Direct answer to the page question. 40–60 words. Written to be extracted by Google AI Overviews and ChatGPT. No intro. No "in this article." Just the answer.</p>
</div>
```
```css
.answer-capsule {
  background: var(--ivory2);
  border-left: 3px solid var(--gold);
  padding: 16px 20px;
  margin: 20px 0 32px;
  font-size: 15px;
  line-height: 1.75;
  color: var(--ink3);
  border-radius: 0;
}
```

### Footer
Background: `var(--forest)`. Four columns. Logo (cream filter) left-aligned top of column 1.

Column 1: Logo + italic muted tagline: *"Every timepiece tells a story. We make sure it keeps telling it."* (Cormorant Garamond italic, `color:rgba(250,247,242,0.35)`, 14px)

Column 2 — Services:
- Watch Repair → /service/
- Rolex Service → /service/rolex/
- Omega Service → /service/omega/
- Battery Replacement → /service/battery-replacement/
- Full Overhaul → /service/full-overhaul/
- Watch Appraisal → /service/watch-appraisal/

Column 3 — Buy & Sell:
- Shop Watches → /shop/
- Sell Your Watch → /sell/
- Sell Your Rolex → /sell/rolex/
- Cash for Watches → /cash-for-watches/
- Consignment → /sell/ (link to sell page, consignment section)

Column 4 — Connect:
- Instagram → `href="[OWNER: ADD YOUR INSTAGRAM URL]"`
- YouTube → `href="[OWNER: ADD YOUR YOUTUBE URL]"`
- Google Reviews → `href="[OWNER: ADD YOUR GOOGLE BUSINESS PROFILE REVIEW URL]"`
- WatchUSeek → `href="https://www.watchuseek.com"`
- Reddit r/Watches → `href="https://www.reddit.com/r/Watches"`

Bottom bar: `© 2025 Shelton Watch Services · Bethlehem, PA` left. Italic muted: `Serving the Lehigh Valley since 2012` right.

Footer link styles: `color:rgba(250,247,242,0.45); font-size:13px; text-decoration:none; transition:color .2s;`
Footer link hover: `color:var(--gold);`

---

## 3. ASTRO PROJECT STRUCTURE

```
/
├── public/
│   ├── SWS-logo.PNG          ← OWNER ADDS THIS
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│       └── og-image.jpg      ← Create: 1200x630px, forest green bg (#1E3328), SWS logo centered in cream, tagline below in DM Sans ivory
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── TrustBar.astro
│   │   ├── Eyebrow.astro         ← eyebrow + H2 pattern component
│   │   ├── WatchCard.astro
│   │   ├── ServiceCard.astro
│   │   ├── GuideCard.astro
│   │   ├── SellForm.astro
│   │   └── InquiryModal.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── sitemap.astro
│       ├── 404.astro
│       ├── watch-repair-allentown-pa.astro
│       ├── watch-repair-bethlehem-pa.astro
│       ├── watch-repair-lehigh-valley.astro
│       ├── watches-for-sale-allentown-pa.astro
│       ├── watches-for-sale-bethlehem-pa.astro
│       ├── watches-for-sale-lehigh-valley.astro
│       ├── pre-owned-watches-for-sale.astro
│       ├── sell-my-watch-today.astro
│       ├── cash-for-watches.astro
│       ├── service/
│       │   ├── index.astro
│       │   ├── rolex.astro
│       │   ├── omega.astro
│       │   ├── seiko.astro
│       │   ├── cartier.astro
│       │   ├── tudor.astro
│       │   ├── tag-heuer.astro
│       │   ├── battery-replacement.astro
│       │   ├── full-overhaul.astro
│       │   ├── crystal-replacement.astro
│       │   ├── mechanical-watch.astro
│       │   ├── vintage-restoration.astro
│       │   └── watch-appraisal.astro
│       ├── sell/
│       │   ├── index.astro
│       │   └── rolex.astro
│       ├── shop/
│       │   ├── index.astro
│       │   ├── rolex.astro
│       │   ├── omega.astro
│       │   └── seiko.astro
│       ├── tools/
│       │   ├── index.astro
│       │   └── repair-or-sell.astro
│       └── guide/
│           ├── how-often-service-rolex.astro
│           ├── is-my-watch-worth-repairing.astro
│           ├── rolex-service-cost.astro
│           ├── watch-stopped-working.astro
│           ├── why-is-my-watch-losing-time.astro
│           └── how-to-service-watch-at-home.astro
├── astro.config.mjs
├── package.json
└── netlify.toml
```

---

## 4. CONFIG FILES

### astro.config.mjs
```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://sheltonwatchservices.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  adapter: netlify(),
});
```

### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/404"
  status = 404

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### public/robots.txt
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: GoogleOther
Allow: /

Sitemap: https://sheltonwatchservices.com/sitemap.xml
```

---

## 5. SEO AND AI READABILITY — MANDATORY

Every requirement here is mandatory from day one.

### Semantic HTML
- Exactly ONE `<h1>` per page, containing the primary keyword
- `<main>` wraps all page content
- `<article>` wraps guide and service page content
- `<section>` for logical content groups
- `<header>`, `<footer>`, `<nav>`, `<address>` used correctly
- Never use `<div>` for structural meaning

### BaseLayout.astro — Head Section
```astro
---
const { title, description, canonical } = Astro.props;
const canonicalURL = canonical || `https://sheltonwatchservices.com${Astro.url.pathname}`;
---
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://sheltonwatchservices.com/images/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
  <!-- Global styles inlined here -->
  <!-- Schema JSON-LD injected per page via slot -->
  <slot name="head" />
</head>
```

### Meta Title Formulas
- Service brand: `[Brand] Watch Service & Repair | Lehigh Valley PA | Shelton Watch Services`
- Service type: `Watch [Type] | Transparent Pricing | Shelton Watch Services Bethlehem PA`
- Shop brand: `[Brand] Watches For Sale | Pre-Owned | Lehigh Valley PA | Shelton Watch Services`
- Sell page: `Sell Your [Brand] Watch | Best Price | Shelton Watch Services Lehigh Valley`
- Guide: `[Article title as question] | Shelton Watch Services`
- Local repair: `Watch Repair [City] PA | Expert Watchmaker | Shelton Watch Services`
- Local buying: `Watches For Sale [City] PA | Pre-Owned | Shelton Watch Services`
- Max length: 60 characters. All unique.

### Performance
- Use Astro's built-in `<Image>` component for all images — auto WebP, auto width/height
- Hero and logo images: `loading="eager"` — all others: `loading="lazy"`
- Astro outputs zero client JS by default — preserve this, don't add unnecessary scripts
- No render-blocking resources

### Internal Linking — Specific Rules
Every page links to at least 2 other pages. No dead ends.

**Explicit cross-links:**
- `/service/rolex/` → `/shop/rolex/` + `/sell/rolex/` + `/guide/how-often-service-rolex/` + `/guide/rolex-service-cost/`
- `/service/omega/` → `/shop/omega/` + `/sell/` + `/guide/how-often-service-rolex/` (general service guide)
- `/service/battery-replacement/` → `/service/` + `/contact/`
- `/service/vintage-restoration/` → `/sell/vintage/` (phase 2 link — add as placeholder) + `/service/watch-appraisal/`
- `/sell/` → `/sell/rolex/` + `/sell-my-watch-today/` + `/cash-for-watches/` + `/service/watch-appraisal/`
- `/sell/rolex/` → `/service/rolex/` + `/shop/rolex/` + `/guide/rolex-service-cost/`
- `/guide/how-often-service-rolex/` → `/service/rolex/` + `/guide/rolex-service-cost/`
- `/guide/rolex-service-cost/` → `/service/rolex/` + `/sell/rolex/`
- `/guide/is-my-watch-worth-repairing/` → `/tools/repair-or-sell/` + `/service/watch-appraisal/`
- `/guide/watch-stopped-working/` → `/service/` + `/contact/`
- `/guide/why-is-my-watch-losing-time/` → `/service/full-overhaul/` + `/service/`
- `/guide/how-to-service-watch-at-home/` → `/service/` + `/guide/is-my-watch-worth-repairing/`
- Every local page → `/service/` + `/contact/`

### GEO — AI Citation Optimization
Guide and service type pages open with an Answer Capsule (spec in design system).

H2 headings on guide pages MUST be written as questions:
- ✓ `"How Much Does a Rolex Service Cost?"`
- ✓ `"What Happens If You Skip a Watch Service?"`
- ✗ `"Service Costs"` / `"Overview"` / `"Key Points"`

Include at least one specific fact or statistic every 150–200 words in guide content.

FAQPage schema on every guide — minimum 3 Q&A pairs per page.

### Schema Markup — Complete Spec

**Homepage + all 6 local pages — LocalBusiness JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "WatchRepairService"],
  "name": "Shelton Watch Services",
  "description": "Independent watch specialist offering buying, selling, and servicing of fine timepieces in the Lehigh Valley, PA.",
  "url": "https://sheltonwatchservices.com",
  "telephone": "+14842914029",
  "email": "info@sheltonwatchservices.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bethlehem",
    "addressRegion": "PA",
    "postalCode": "18017",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "17:00",
      "description": "By appointment only"
    }
  ],
  "priceRange": "$$",
  "areaServed": ["Bethlehem PA","Allentown PA","Lehigh Valley PA","Easton PA"]
}
```

**All service pages — Service schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[e.g. Rolex Watch Service and Repair]",
  "provider": { "@type": "LocalBusiness", "name": "Shelton Watch Services" },
  "areaServed": "Lehigh Valley, PA",
  "description": "[Page-specific service description]"
}
```

**All guide pages — FAQPage schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct answer. Under 100 words. Written to be extracted by AI Overviews."
      }
    }
  ]
}
```

**Shop pages — Product schema per watch:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Watch name e.g. Rolex Datejust 41 Ref. 126334]",
  "brand": { "@type": "Brand", "name": "[Brand]" },
  "offers": {
    "@type": "Offer",
    "price": "[price number only, no $ sign]",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Shelton Watch Services" }
  }
}
```

---

## 6. PAGE SPECIFICATIONS — ALL 42 LAUNCH PAGES

### Homepage (/)
**Title:** `Shelton Watch Services | Buy, Sell & Service Fine Watches | Lehigh Valley PA`
**Description:** `Expert watch repair, buying, and selling in the Lehigh Valley. Transparent pricing, 12+ years experience. Rolex, Omega, Seiko, vintage and more. Bethlehem PA.`
**Schema:** LocalBusiness + WatchRepairService

**Section 1 — HERO**
Two-column grid (1fr 1fr). Min-height: `calc(100vh - 68px)`. Ivory background.

Left:
- Eyebrow: "Bethlehem, Pennsylvania"
- H1: `Watchmaker. Collector. <em>Your guy in the Valley.</em>`
- Subtext (DM Sans 300, 15px, ink3): "I've been servicing and buying watches in the Lehigh Valley for over 12 years. Every watch I touch gets treated like it matters — because to someone, it does."
- Buttons: `btn-primary "Browse Watches" /shop/` · `btn-secondary "Book Service" /service/` · `btn-ghost "Sell Your Watch" /sell/`

Right:
- Three preview watch cards (ivory2 bg, brand in gold eyebrow, model in Cormorant H3, reference in DM Sans 12.5px muted, price in gold Cormorant, condition badge)
- Floating "Now Available" label top-right: forest bg, ivory text, 9px uppercase
- Cards subtly stacked/offset for depth

**Section 2 — TRUST BAR** (forest bg)
⚠️ **OWNER: Replace these numbers with your real stats before launch.**
Five stats in a row: `500+` Watches Serviced · `12+` Years Experience · `50+` Brands Covered · `4.9★` Google Rating · `PA` Lehigh Valley Based
Numbers: Cormorant 300 28px gold. Labels: DM Sans 9px 0.22em uppercase muted ivory.

**Section 3 — SHOP PREVIEW** (ivory bg)
Eyebrow "Curated Inventory" + H2 `Shop <em>Timepieces</em>`
6 watch cards, 3-col, 2px gap. Each card: SVG watch face illustration (ivory/green palette, minimal decorative), gold brand eyebrow, Cormorant model name, reference/details small muted, gold price, condition badge (Mint/Excellent/Very Good), "Inquire to Purchase" button → opens modal.
Card hover: background ivory3.
Footer bar: "New pieces added regularly. Inventory changes frequently." + btn-ghost "View All Inventory" `/shop/`

**Section 4 — SERVICE PREVIEW** (ivory2 bg)
Eyebrow "Expert Care" + H2 `Watch Service <em>& Repair</em>`
Two-col: left heading+description, right callout box (gold left border 3px, ivory bg, padding 16px): "Mail-in service nationwide · Local drop-off Bethlehem, PA · Free written estimate before any work begins"
4-card 2×2 grid. Each card: large muted Cormorant numeral (01–04), service name H3, description, italic gold price, small bordered tag pills. Hover: gold top border appears.
Dark footer strip (forest bg): btn-ghost "Get a Free Service Estimate →" `/service/`

**Section 5 — SELL** (ivory bg)
Eyebrow "Get an Offer" + H2 `Sell Your <em>Timepiece</em>`
Two-col: left = process + consignment note. Right = quote form.
Left: numbered 3-step process in large muted Cormorant numerals (1. Submit details / 2. Receive offer within 24hrs / 3. Get paid fast). Below: small bordered consignment callout "Prefer consignment? We offer that too."
Right: sell-quote form (see form spec below).

**Section 6 — TOOLS** (ivory2 bg)
Eyebrow "Free Resources" + H2 `Watch <em>Tools</em>`
6 cards 3-col: Watch Value Estimator / Service Due Calculator / Repair or Sell? / Movement Lookup / Instant Service Quote / Condition Grader.
Each: gold unicode icon, Cormorant name, DM Sans italic hook (the question it answers), description 2 lines, "Use tool →" text link.
Card hover: gold top border, ivory3 bg.

**Section 7 — GUIDE** (ivory bg)
Eyebrow "Knowledge Base" + H2 `The Watch <em>Guide</em>`
6 article cards 3-col. Each: gold category label (DM Sans 9px uppercase), Cormorant article title, excerpt 2 lines muted, "Read article →" link.

**Section 8 — LOCATION STRIP** (forest bg)
Three columns with vertical gold 1px dividers:
Left: `"Bethlehem, Pennsylvania."` (Cormorant 32px italic ivory) + `"Serving the Lehigh Valley and all of PA by appointment. Mail-in watch service accepted nationwide."` (DM Sans muted ivory small)
Center: vertical gold line
Right: contact rows — each row has gold 9px uppercase label + value: Local · Mail-In · Hours · Email
CTA: btn-secondary "Book a Service" `/contact/`

---

### 404 Page (/404/)
**Title:** `Page Not Found | Shelton Watch Services`
**Description:** `The page you're looking for doesn't exist. Browse our watch services, shop, or sell your watch.`

Simple, on-brand. Forest green hero strip. Cormorant "404" large muted. Below: "That page has stopped working." Small DM Sans. Three navigation options: Browse Shop / Book Service / Sell Your Watch. No schema needed.

---

### HTML Sitemap (/sitemap/)
**Title:** `Sitemap | Shelton Watch Services`
**Description:** `Complete sitemap for Shelton Watch Services — all service, shop, sell, and guide pages.`

Organized list of all pages grouped by section with anchor links:
- Core: Home, About, Contact
- Service: hub + all brand + all type pages
- Shop: hub + brand pages
- Sell: hub + brand pages + urgent pages
- Tools: hub + tools
- Local: all local repair + buying pages
- Guides: all guide articles

Style: clean ivory page, section headers in Cormorant, links in DM Sans, gold left border on each section header.

---

### About (/about/)
**Title:** `About Shelton Watch Services | Independent Watchmaker in Bethlehem PA`
**Description:** `Meet the watchmaker behind Shelton Watch Services. 12+ years servicing fine timepieces in the Lehigh Valley. Personal, expert, transparent.`
**H1:** `About Shelton Watch Services`

Sections:
- Pull quote (italic Cormorant large): *"I've been opening watches since before most people knew what a movement was."*
- Two-col: Left = photo placeholder (ivory3 bg, centered text: "Your photo here — at your bench, warm natural light") · Right = `[OWNER BIO — Write in first person. Cover: how you got into watchmaking, how long you've been doing it (12+ years), what the Lehigh Valley means to you, what makes SWS different from chain jewelry stores and sending watches away to unknown service centers, your philosophy on transparency and pricing. 3–4 paragraphs.]`
- Credentials section: Brands serviced list, training/certifications `[OWNER: Add your actual credentials]`, equipment `[OWNER: Add your equipment — timegrapher, ultrasonic cleaner, etc.]`
- Trust stats bar (same as homepage but on ivory bg)
- Pull quote 2: `[OWNER: Add your favorite quote about watchmaking or your approach]`
- CTA: btn-primary "Book a Service" `/service/` · btn-ghost "See Available Watches" `/shop/`

---

### Contact (/contact/)
**Title:** `Contact Shelton Watch Services | Book a Watch Service | Bethlehem PA`
**Description:** `Contact Shelton Watch Services in Bethlehem, PA. Book a service appointment, mail in your watch, or ask about buying and selling. (484) 291-4029.`
**H1:** `Contact Shelton Watch Services`

```html
<address>
  Shelton Watch Services<br>
  By appointment — Bethlehem, PA 18017<br>
  <a href="tel:+14842914029">(484) 291-4029</a><br>
  <a href="mailto:info@sheltonwatchservices.com">info@sheltonwatchservices.com</a>
</address>
```

Hours: Mon–Fri 9am–5pm · Saturday by appointment

Mail-in section: `[OWNER: Describe your mail-in process — how to package, where to ship, what info to include, insurance instructions]`

Map: `[EMBED GOOGLE MAPS — search "Bethlehem PA" area, Share > Embed a map, paste iframe here]`

Contact form (Netlify name="contact"): Name, Email, Subject (select: Service Inquiry / Buy a Watch / Sell My Watch / Other), Message. Forest submit.

---

### Local Service Pages
Applies to: `/watch-repair-allentown-pa/` · `/watch-repair-bethlehem-pa/` · `/watch-repair-lehigh-valley/`

**H1 pattern:** `Watch Repair in [City], PA`
**Title pattern:** `Watch Repair [City] PA | Expert Watchmaker | Shelton Watch Services`
**Description pattern:** `Expert watch repair in [City], PA. Battery replacement, full overhaul, crystal replacement, vintage restoration. Rolex, Omega, Seiko and more. (484) 291-4029.`
**Schema:** Full LocalBusiness JSON-LD on EVERY local page

Sections:
1. Local intro — mention city name naturally 3–5 times. Reference surrounding towns.
2. Services offered: Battery Replacement from $25 · Crystal Replacement from $80 · Full Overhaul from $250 · Vintage Restoration from $350+ · Bracelet Repair · Watch Appraisal
3. How to reach us: By appointment, phone, mail-in. Phone as `<a href="tel:+14842914029">`.
4. Address in `<address>` element.
5. Service request form (Netlify name="service-request")
6. FAQ with FAQPage schema (3 locally-flavored Q&As): "Is there a watch repair shop in [City] PA?" / "Do you service Rolex in [City]?" / "Can I mail my watch to you from [City]?"
7. Nearby cities: "Also serving Allentown, Bethlehem, Easton, and all of Lehigh Valley."

---

### Local Buying Pages
Applies to: `/watches-for-sale-allentown-pa/` · `/watches-for-sale-bethlehem-pa/` · `/watches-for-sale-lehigh-valley/`

**H1 pattern:** `Watches For Sale in [City], PA`
**Title pattern:** `Watches For Sale [City] PA | Pre-Owned | Shelton Watch Services`
**Description pattern:** `Shop pre-owned and used watches near [City], PA. Rolex, Omega, Seiko, Tudor and more. Every watch personally inspected. Inquiry-based purchasing.`

Inventory preview grid + local trust: "Every watch personally inspected by an independent watchmaker with 12+ years experience. No auction risk. No shipping uncertainty." + Link to full inventory at /pre-owned-watches-for-sale/ + Inquiry modal on all watch cards.

---

### /pre-owned-watches-for-sale/
**Title:** `Pre-Owned Watches For Sale | Authenticated | Shelton Watch Services PA`
**Description:** `Browse pre-owned and used watches for sale. Rolex, Omega, Seiko, Tudor, Cartier and more. Every used watch personally inspected and authenticated.`
**H1:** `Pre-Owned Watches For Sale`
**⚠️ Use both "pre-owned" AND "used watches" naturally throughout content — this page must rank for both terms.**

Full inventory grid. Authentication process explanation. Why buy locally vs Chrono24/eBay. Product schema per watch. Inquiry modal on all cards.

---

### /sell-my-watch-today/
**Title:** `Sell My Watch Today | Same-Day Offers | Shelton Watch Services Bethlehem PA`
**Description:** `Sell your watch today. Same-day response, fair market value, cash payment options. Local Bethlehem PA drop-off or mail-in. No obligation quote.`
**H1:** `Sell My Watch Today — Same-Day Offers, Bethlehem PA`

Urgent, direct tone. Same-day local response. Cash options. Local drop-off available. Not a pawn shop — fair market value from a specialist. Sell form (Netlify name="sell-quote"). FAQPage schema: "Can I get an offer the same day?" / "Do you pay cash for watches?" / "What watches do you buy?"

---

### /cash-for-watches/
**Title:** `Cash for Watches | Fair Market Value | Shelton Watch Services Lehigh Valley`
**Description:** `Get cash for your watches in the Lehigh Valley. Fair market prices — not pawn shop rates. Rolex, Omega, and all luxury brands. Free no-obligation valuation.`
**H1:** `Cash for Watches — Lehigh Valley PA`

Not pawn shop positioned. Fair market value from a specialist. Transparent valuation process. All brands, all conditions. Sell form. FAQPage schema: "How much cash will I get for my watch?" / "Do you buy watches in any condition?" / "How is your offer different from a pawn shop?"

---

### Service Hub (/service/)
**Title:** `Watch Repair & Service | Transparent Pricing | Shelton Watch Services Bethlehem PA`
**Description:** `Expert watch repair in Lehigh Valley PA. Battery replacement from $25, full overhaul from $250. All brands. Free written estimate. Mail-in nationwide.`
**H1:** `Watch Service & Repair`
**Schema:** Service + LocalBusiness

Sections:
1. Two-col intro: heading/description left, callout box right (gold left border): "Mail-in service nationwide · Local Bethlehem PA · Free written estimate · No work done without your approval"
2. **All brands we service** (even ones without individual pages yet): Rolex · Omega · Seiko · Cartier · Tudor · Tag Heuer · Hamilton · Citizen · Bulova · Longines · Waltham · Elgin + "many more including vintage and pocket watches"
3. Brand grid (6 cards): the 6 with individual pages — each links to brand service page
4. Service types with prices: Battery from $25 / Crystal from $80 / Band/Bracelet Repair from $40 / Full Overhaul from $250 / Vintage Restoration from $350 / Watch Appraisal from $50 / Polishing from $75 / Stem & Crown Repair from $85
5. Service request form (Netlify name="service-request")
6. FAQPage schema: "How long does a watch service take?" / "Do you service watches by mail?" / "Do you offer a warranty on repairs?"
7. CTA link → /sell/ "Also buying watches — get a free quote"

---

### Service Brand Pages
Applies to: `/service/rolex/` · `/service/omega/` · `/service/seiko/` · `/service/cartier/` · `/service/tudor/` · `/service/tag-heuer/`

**H1 pattern:** `[Brand] Watch Service & Repair — Lehigh Valley PA`
**Schema:** Service + LocalBusiness

Sections:
1. Answer capsule: direct 40-60 word answer about servicing this brand (cost, interval, what's included)
2. Brand intro: what makes this brand's service specific, what SWS does, why choose an independent specialist
3. Services offered for this brand with pricing
4. Service request form (Netlify name="service-request")
5. Cross-links section: "Shop [Brand]" → /shop/[brand]/ · "Sell Your [Brand]" → /sell/ (or /sell/[brand]/ if exists) · "Guide: [related article]"
6. FAQPage schema: 3 brand-specific Q&As
   - Rolex: "How much does it cost to service a Rolex?" / "How long does a Rolex service take?" / "Can an independent watchmaker service my Rolex without voiding warranty?"
   - Omega: "How often does an Omega need servicing?" / "What does an Omega service include?" / "How much does Omega service cost?"
   - (similar for others)

---

### Service Type Pages
Applies to: `/service/battery-replacement/` · `/service/full-overhaul/` · `/service/crystal-replacement/` · `/service/mechanical-watch/` · `/service/vintage-restoration/` · `/service/watch-appraisal/`

**H1 pattern:** `Watch [Service Type] | Shelton Watch Services Bethlehem PA`
**Schema:** Service

Sections:
1. Answer capsule (40-60 words direct answer)
2. What's included in this service
3. Brands covered (list brands)
4. Pricing table
5. Service request form
6. FAQPage schema: 3 Q&As specific to this service type

**Special note for /service/vintage-restoration/:** Specifically mention: Elgin, Waltham, Hamilton, Illinois, and other American pocket watches. Mention that pocket watches are a specialty. This captures "pocket watch repair [city]" queries that competitors appear for.

---

### Sell Hub (/sell/)
**Title:** `Sell Your Watch | Best Price in Lehigh Valley | Shelton Watch Services`
**Description:** `Get a fair offer for your watch within 24 hours. Rolex, Omega, vintage and more. No obligation. Same-day payment available. Bethlehem PA or mail-in.`
**H1:** `Sell Your Timepiece`

Sections:
1. Value prop: fair price, 24hr response, no obligation, cash options
2. 3-step process (large muted Cormorant numbers)
3. **Full sell-quote form** (Netlify name="sell-quote"):
   - Brand (select: Rolex / Omega / Seiko / Cartier / Tudor / Tag Heuer / Hamilton / Citizen / Other Luxury / Vintage / Other)
   - Model/Reference (text)
   - Condition (select: Mint/Unworn · Excellent · Very Good · Good · Fair · Not Working)
   - Included with watch (select: Full Box & Papers · Box Only · Papers Only · No Box or Papers)
   - **Interested in consignment?** (select: No, I want to sell outright · Yes, tell me about consignment)
   - Name
   - Email
   - Phone
   - Additional notes (textarea)
   - Forest submit: "Submit for Offer →"
   - Note below form: "No obligation. We respond within 24 hours. Your information is never shared."
4. Consignment section: explain consignment option — SWS sells the watch on your behalf for a commission, you get a higher price than outright sale
5. Brand sell links: "Selling a Rolex?" → /sell/rolex/ · "Selling your Omega, Cartier, or vintage piece?" → this page
6. FAQPage schema: "How do you determine the value of my watch?" / "How quickly do I get paid?" / "Do you buy watches that aren't working?"

---

### /sell/rolex/
**Title:** `Sell Your Rolex | Best Price | Shelton Watch Services Lehigh Valley`
**Description:** `Get the best price for your Rolex in the Lehigh Valley. Fair market offers, 24hr response, cash payment. All Rolex models considered.`
**H1:** `Sell Your Rolex — Get a Fair Offer in 24 Hours`

What we look for when buying a Rolex. How value is determined (reference, condition, box/papers, year). Current Rolex market context (2025 pre-owned market is strong). Sell form. Cross-links: `/service/rolex/` + `/shop/rolex/`.
FAQPage schema: "How much is my Rolex worth?" / "Do box and papers matter when selling a Rolex?" / "Will you buy my Rolex if it needs service?"

---

### Shop Hub (/shop/)
**Title:** `Pre-Owned Watches For Sale | Rolex, Omega, Seiko & More | Shelton Watch Services`
**Description:** `Shop authenticated pre-owned and used watches. Rolex, Omega, Seiko, Tudor, Cartier and more. Every watch personally inspected. Inquiry-based — no checkout needed.`
**H1:** `Shop Pre-Owned Watches`

**⚠️ INQUIRY-BASED ONLY — NO checkout, no cart, no payment processing.**

Sections:
1. Intro: "Every watch in our collection has been personally inspected, tested for accuracy, and documented. No auction risk. No mystery condition."
2. Full inventory grid — all 6 placeholder watches + space for more
3. Brand filter links: Rolex / Omega / Seiko / Tudor / Cartier / Tag Heuer / Vintage → respective shop pages
4. "Looking for something specific?" mini-form: Name, Email, What you're looking for
5. Why buy from SWS: personal inspection, accurate descriptions, local pickup option, real watchmaker doing the assessment
6. Product schema per watch

---

### Shop Brand Pages
Applies to: `/shop/rolex/` · `/shop/omega/` · `/shop/seiko/`

**H1 pattern:** `[Brand] Watches For Sale | Pre-Owned | Lehigh Valley PA`
**Title:** `[Brand] Watches For Sale | Pre-Owned | Lehigh Valley PA | Shelton Watch Services`
**Description:** `Shop pre-owned [Brand] watches. Personally inspected, accurately described. Inquiry-based purchasing from a specialist watchmaker in Bethlehem PA.`

Filtered inventory for that brand. Product schema per watch. Inquiry modal on all cards. Cross-link to `/service/[brand]/` and `/sell/`. Buying guide note specific to that brand.

---

### Tools Hub (/tools/)
**Title:** `Free Watch Tools | Shelton Watch Services`
**Description:** `Free interactive tools to help you make smarter watch decisions. Watch value estimator, service calculator, repair-or-sell guide and more. No signup required.`
**H1:** `Free Watch Tools`

6 tool cards. Intro: "Free tools to help you understand your timepiece better. No signup, no email required."

Cards:
1. Watch Value Estimator → /tools/watch-value-estimator/ (Phase 2 — link to /sell/ for now)
2. Service Due Calculator → /tools/service-due-calculator/ (Phase 2 — link to /service/ for now)
3. Repair or Sell? → /tools/repair-or-sell/ ← LIVE ON LAUNCH
4. Movement Lookup → /tools/movement-lookup/ (Phase 2 — link to /guide/ for now)
5. Instant Service Quote → /tools/service-quote/ (Phase 2 — link to /service/ for now)
6. Condition Grader → (Phase 2 — link to /sell/ for now)

For Phase 2 tools that aren't built yet: show the card but button says "Coming soon" and links to the relevant hub page. Never show a broken link.

---

### /tools/repair-or-sell/
**Title:** `Should I Repair or Sell My Watch? | Free Tool | Shelton Watch Services`
**Description:** `Free interactive tool to help you decide whether to repair or sell your watch. Takes 60 seconds. No signup required.`
**H1:** `Should I Repair or Sell My Watch?`

**BUILD AS A REAL INTERACTIVE MULTI-STEP TOOL in vanilla JavaScript.**

5 steps with visual progress bar (gold fill, ivory track, 0.5px border):

Step 1: "What brand is your watch?"
(Select: Rolex / Omega / Seiko / Cartier / Tudor / Tag Heuer / Hamilton / Citizen / Other luxury brand / Vintage / Fashion watch / Unsure)

Step 2: "What is it approximately worth?"
(Buttons: Under $500 / $500–$2,000 / $2,000–$5,000 / Over $5,000 / Not sure)

Step 3: "What would it cost to repair?"
(Buttons: Under $100 / $100–$300 / Over $300 / I don't know yet)

Step 4: "What's the issue?"
(Buttons: Running inaccurately / Stopped completely / Damaged crystal or case / Needs full service/overhaul / Multiple issues)

Step 5: "Does this watch have sentimental value?"
(Buttons: Yes, it means a lot to me / No, it's purely monetary)

Result logic (show result in ivory2 card with gold left border):
- Repair cost > 50% of value AND sentimental = no → "Consider Selling" — "At this repair-to-value ratio, selling is likely your better option. We'd be happy to give you a free, no-obligation offer." + btn-primary "Get a Free Offer" /sell/
- Repair cost < 30% of value → "Worth Repairing" — "Good news — at this price point, the repair cost is well justified. Book a free estimate and we'll confirm the exact cost before any work begins." + btn-primary "Book Free Estimate" /service/
- Sentimental = yes → "Repair It" — "If this watch matters to you, the decision is already made. We'll take great care of it." + btn-primary "Book Service" /service/
- All other → "Let's Take a Look" — "The answer depends on factors we'd need to assess in person. A free appraisal takes 15 minutes and we'll give you an honest recommendation." + btn-primary "Get Free Appraisal" /service/watch-appraisal/

Each result also shows: "Change my answers" link to restart.

---

### Guide Articles — 6 Launch Pages

**Structure every article identically:**
```
1. H1 with primary keyword (question format)
2. Answer Capsule (40-60 words, gold left border, FIRST content after H1)
3. Introduction paragraph — context [CONTENT PLACEHOLDER]
4. H2: written as question (e.g. "What Does Rolex Officially Recommend?") [CONTENT PLACEHOLDER]
5. H2: second question [CONTENT PLACEHOLDER]
6. H2: cost/data question [CONTENT PLACEHOLDER]
7. H2: "Frequently Asked Questions"
8. 3 Q&As with FAQPage JSON-LD schema
9. CTA section (forest bg, ivory text): relevant service link
```

Use `[CONTENT: Write 2-3 paragraphs about X here]` for body text — the HTML structure, schema, and styling must be 100% correct even with placeholder content.

**Article 1: /guide/how-often-service-rolex/**
Title: `How Often Should You Service a Rolex Watch? | Shelton Watch Services`
H1: `How Often Should You Service a Rolex Watch?`
Answer capsule: Direct answer about 10-year official recommendation vs 5-7 year independent recommendation for daily wear.
FAQ Q&As:
- "What does a Rolex service include?"
- "How much does it cost to service a Rolex?"
- "Can an independent watchmaker service my Rolex?"
CTA → /service/rolex/ · Cross-links: /guide/rolex-service-cost/

**Article 2: /guide/is-my-watch-worth-repairing/**
Title: `Is My Watch Worth Repairing? | Shelton Watch Services`
H1: `Is My Watch Worth Repairing?`
Answer capsule: Direct answer with the rule of thumb (repair cost vs watch value ratio).
FAQ Q&As:
- "How do I know if my watch is worth repairing?"
- "What watches are generally not worth repairing?"
- "How much should I expect to pay for watch repair?"
CTA → /tools/repair-or-sell/ · Cross-links: /service/watch-appraisal/

**Article 3: /guide/rolex-service-cost/**
Title: `How Much Does a Rolex Service Cost? | Shelton Watch Services`
H1: `How Much Does a Rolex Service Cost?`
Answer capsule: Direct answer with price ranges (Rolex authorized $800-$1500+ / independent specialist $300-$700).
FAQ Q&As:
- "Why is Rolex service so expensive?"
- "How long does a Rolex service take?"
- "Is it cheaper to service a Rolex at an independent watchmaker?"
CTA → /service/rolex/ · Cross-links: /guide/how-often-service-rolex/

**Article 4: /guide/watch-stopped-working/**
Title: `My Watch Stopped Working — What Should I Do? | Shelton Watch Services`
H1: `My Watch Stopped Working — What Should I Do?`
Answer capsule: Direct answer — check battery first (quartz), check if fully wound (mechanical), then professional assessment.
FAQ Q&As:
- "Why did my watch suddenly stop working?"
- "Can a completely stopped watch be repaired?"
- "How much does it cost to fix a watch that stopped working?"
CTA → /service/ · Cross-links: /guide/is-my-watch-worth-repairing/

**Article 5: /guide/why-is-my-watch-losing-time/**
Title: `Why Is My Watch Losing Time? | Shelton Watch Services`
H1: `Why Is My Watch Losing Time?`
Answer capsule: Direct answer — magnetism, worn lubricants, needs regulation, position sensitivity.
FAQ Q&As:
- "What causes a watch to lose time?"
- "Can magnetism cause a watch to run slow or fast?"
- "How do I fix a watch that runs slow?"
CTA → /service/full-overhaul/ · Cross-links: /service/mechanical-watch/

**Article 6: /guide/how-to-service-watch-at-home/**
Title: `How to Service a Watch at Home | Shelton Watch Services`
H1: `How to Service a Watch at Home`
Answer capsule: Direct answer — basic maintenance (cleaning case, checking crown, avoiding water) is doable; movement servicing (opening the case, cleaning, oiling) requires professional tools and training.
FAQ Q&As:
- "What basic watch maintenance can I do at home?"
- "What tools do I need to maintain my watch at home?"
- "When should I take my watch to a professional instead of doing it myself?"
CTA → /service/ · Cross-links: /guide/is-my-watch-worth-repairing/ · Note: be honest — encourage proper professional service, don't discourage people from the craft

---

## 7. WATCH INVENTORY — PLACEHOLDER DATA

Owner replaces all of this with real inventory before launch.

```js
const watches = [
  {
    brand: "Rolex",
    model: "Datejust 41",
    reference: "Ref. 126334 · Steel & White Gold Fluted Bezel",
    extras: "Full box & papers · Serviced 2023 · Purchased 2021",
    price: 8450,
    priceDisplay: "$8,450",
    condition: "Excellent",
    slug: "rolex-datejust-41-126334"
  },
  {
    brand: "Omega",
    model: "Seamaster 300M",
    reference: "Co-Axial Master Chronometer · Blue Wave Dial",
    extras: "Box only · Circa 2019 · 42mm",
    price: 3200,
    priceDisplay: "$3,200",
    condition: "Very Good",
    slug: "omega-seamaster-300m"
  },
  {
    brand: "Tudor",
    model: "Black Bay 58",
    reference: "Navy Blue Dial · Fabric & Steel Bracelet",
    extras: "Full set · Unworn with stickers",
    price: 2900,
    priceDisplay: "$2,900",
    condition: "Mint",
    slug: "tudor-black-bay-58-navy"
  },
  {
    brand: "IWC",
    model: "Portofino Automatic",
    reference: "Ref. IW356504 · Silver Sunray Dial · 40mm",
    extras: "Box & papers · Purchased 2021",
    price: 4800,
    priceDisplay: "$4,800",
    condition: "Excellent",
    slug: "iwc-portofino-iw356504"
  },
  {
    brand: "Longines",
    model: "Master Collection",
    reference: "40mm · Silver Guilloche Dial · Croc Strap",
    extras: "Box & papers · Recently serviced",
    price: 1650,
    priceDisplay: "$1,650",
    condition: "Excellent",
    slug: "longines-master-collection-40"
  },
  {
    brand: "Seiko",
    model: "Cocktail Time",
    reference: "SARB033 · White Textured Dial · 38mm",
    extras: "No box · Serviced · Original bracelet",
    price: 520,
    priceDisplay: "$520",
    condition: "Good",
    slug: "seiko-sarb033-cocktail-time"
  }
];
```

Watch card SVG illustrations: minimal watch face silhouettes in ivory/muted green tones. Purely decorative placeholders. Real photography replaces these — owner will provide photos.

---

## 8. TECHNICAL CHECKLIST

Verify ALL before build is complete. Do not skip any item.

**Build:**
- [ ] `npm run build` completes without errors or warnings
- [ ] All 42 launch pages exist and return 200 at correct trailing-slash URLs
- [ ] All internal links resolve — zero 404s
- [ ] 404.astro exists and renders on-brand

**Forms:**
- [ ] All 4 forms have `data-netlify="true"` and correct `name` attribute
- [ ] All 4 forms have hidden `form-name` input
- [ ] Form names: sell-quote / service-request / purchase-inquiry / contact

**Files:**
- [ ] robots.txt in /public/ — GPTBot, PerplexityBot, ClaudeBot all explicitly allowed
- [ ] sitemap.xml generates in dist/ at build
- [ ] og-image.jpg exists in /public/images/ (1200×630px)
- [ ] SWS-logo.PNG in /public/ (owner to add)

**SEO:**
- [ ] All 42 meta titles unique — no two pages share a title
- [ ] All 42 meta descriptions unique and under 160 characters
- [ ] Canonical tag on every page
- [ ] Trailing slashes consistent on all internal links
- [ ] Exactly one `<h1>` per page
- [ ] All guide H2s written as questions
- [ ] Answer capsule present on all 6 guide articles and all 6 service type pages

**Schema:**
- [ ] LocalBusiness JSON-LD on homepage + all 6 local pages (12 total)
- [ ] FAQPage JSON-LD on all 6 guide articles (min 3 Q&As each)
- [ ] Service schema on all 13 service pages
- [ ] Product schema on all watch cards across all shop pages

**Design:**
- [ ] Logo: cream filter in nav and footer, no filter on ivory backgrounds
- [ ] Body has padding-top: 68px (accounts for fixed nav)
- [ ] Mobile hamburger menu opens and closes correctly
- [ ] Google Fonts load with preconnect + display=swap
- [ ] No box shadows anywhere
- [ ] All borders 0.5px (except focused form fields)
- [ ] Gold appears only where specified

**Functionality:**
- [ ] Purchase inquiry modal opens, populates with watch data, closes correctly
- [ ] Modal closes on backdrop click AND ✕ button click
- [ ] Repair-or-sell tool: all 5 steps work, all 4 result branches work, restart works
- [ ] Phase 2 tool cards show "Coming soon" — no broken links
- [ ] Consignment option in sell form

**Accessibility/Technical:**
- [ ] All images have alt text + width + height
- [ ] Phone number is `tel:` link everywhere it appears
- [ ] Email is `mailto:` link everywhere it appears
- [ ] Address is in `<address>` element on contact and local pages
- [ ] No `<b>` tags — use `<strong>` for semantic bold
- [ ] No empty or invisible sections — all [PLACEHOLDER] text is visible to owner

---

## 9. PRE-LAUNCH CHECKLIST FOR OWNER

Before going live, owner must complete:

- [ ] Add SWS-logo.PNG to /public/ folder
- [ ] Update trust bar numbers with real stats (500+ watches, 12+ years, your real Google rating)
- [ ] Write and add About page bio
- [ ] Replace placeholder watch inventory with real watches
- [ ] Add social media URLs to footer (Instagram, YouTube)
- [ ] Add Google Business Profile review URL to footer
- [ ] Set up Cloudflare Email Routing (free): sheltonwatchservices.com → forward to your Gmail
  - Go to cloudflare.com → add your domain → Email → Email Routing → create rule: info@sheltonwatchservices.com → your Gmail
  - Then in Gmail: Settings → Accounts → Add another email address → send from info@sheltonwatchservices.com
  - Total time: 15 minutes. Total cost: $0.
- [ ] Add mail-in service instructions to contact page
- [ ] Add Google Maps embed to contact page
- [ ] Add your credentials to About page

---

## 10. DEPLOYMENT INSTRUCTIONS

1. Run `npm install` then `npm run build` — fix any errors
2. Create free account at github.com
3. In terminal: `git init` → `git add .` → `git commit -m "initial build"`
4. Create new GitHub repo named `sheltonwatchservices`
5. `git remote add origin [your repo URL]` → `git push -u origin main`
6. Go to netlify.com → "Add new site" → "Import from Git" → connect GitHub → select repo
7. Build command: `npm run build` · Publish directory: `dist` → Deploy Site
8. Site goes live on a `.netlify.app` URL first — test everything here
9. Netlify → Domain management → Add custom domain → `sheltonwatchservices.com`
10. Update DNS at your domain registrar: set nameservers to Netlify's (provided in Netlify UI)
11. HTTPS enables automatically via Let's Encrypt — takes up to 24hrs
12. Go to search.google.com/search-console → Add property → verify via DNS TXT record
13. Submit sitemap: Search Console → Sitemaps → Enter `sitemap.xml` → Submit
14. Set up Google Business Profile at business.google.com:
    - Primary category: **Watch repair service**
    - Secondary categories: **Used watch store** · **Jewelry store**
    - NAP must match schema exactly: Shelton Watch Services · Bethlehem, PA 18017 · (484) 291-4029
    - Upload photos: your bench, your tools, any watches
    - Enable messaging
    - Post first update on day of launch

---

## 11. FINAL NOTES TO CURSOR

This is a real business website for an independent watch specialist in Bethlehem, PA.

**Follow exactly:** Color tokens, typography scale, button styles, form styles, gold usage rules, URL file structure, Netlify form names, robots.txt, trailing slash config, schema types, and internal linking rules.

**Use your judgment:** Astro component architecture, responsive layout implementation, SVG watch illustrations within ivory/green palette, section spacing rhythm, animation subtlety. Execute the Heritage Green design direction beautifully.

**Where content says [PLACEHOLDER] or [OWNER: ...]:** Build the correct HTML structure with visible placeholder text. Never leave empty sections. Owner must be able to see exactly where to add their content.

**Where Phase 2 links are needed:** Link to the hub page (/sell/, /service/, /guide/) — never to a non-existent URL.

**The goal:** A site that looks professionally designed and agency-built. Warm, trustworthy, distinctive. Heritage Green — not dark luxury, not generic, not AI-generated-looking. Someone who knows watches should see this site and think "this person knows what they're doing."

Do not deviate from URL structure. Do not add payment processing. Do not change color tokens. Do not skip schema. Do not remove Netlify form attributes.
