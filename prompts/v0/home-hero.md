# V0 Prompt: Homepage Hero (Advisor-approved v1.0.0)

**Advisor status:** ready · **Registry ID:** `home-hero`  
**Copy everything below the line to [v0.dev](https://v0.dev)**

---

<context>
Homepage hero only for centennialhillshomesforsale.com — Centennial Hills / Northwest Las Vegas luxury real estate.
Agent: Dr. Jan Duffy, Top 1% REALTOR®, 30+ years. Phone (702) 903-1952.
Sits below a fixed 72px header (add padding-top ~100px).
</context>

<constraints>
- NEVER use "Janet" — only Dr. Jan Duffy
- Do NOT include navigation or footer — hero section only
- No raw markdown asterisks in copy — use semantic emphasis in JSX
- Hero image: **must use** `/images/modern-home-exterior.jpg` (bundled asset) OR generate in v0 with site-images.md prompt — never hotlink Unsplash
- Stats and price card are illustrative marketing numbers (not live MLS)
</constraints>

<design_system>
- Background: deep blue #1e3a8a, white text
- Stat numbers: gold #fcd34d, labels 80% white opacity
- Primary CTA: filled #1e40af, white text, hover #1e3a8a, slight lift
- Secondary CTA: white outline, transparent fill, hover fill white + blue text
- Layout: 2-column grid at lg (1024px+), stacked on mobile
- Max content width 1200px, horizontal padding 2rem
- Title: 3.5rem/800 weight desktop, scale down on mobile
- Image: rounded-xl, shadow-lg, floating price card bottom-right (glass white 95%, blur)
</design_system>

<sections>
**Left column**
- H1: "Your Centennial Hills Real Estate Expert"
- Lead paragraph: opening line **"Buying or Selling in Centennial Hills?"** in semibold, then body about Dr. Jan Duffy, Top 1%, ZIPs 89138, 89144, 89135, 24/7 service
- Stat row (3 items horizontal, wrap on mobile):
  - $2.4M+ / Total Sales Volume
  - 150+ / Homes Sold
  - 30+ / Years Experience
- CTA row: "Find Your Centennial Hills Home" (primary) + "Get Your Home Value" (secondary)

**Right column**
- Large property photo (modern Las Vegas home, desert landscaping)
- Overlay card: $675,000 · 4 bed • 3 bath • 2,800 sq ft
</sections>

<technical_output>
React + TypeScript + Tailwind CSS only for this hero component.
Export as `HomeHero.tsx` with no external dependencies beyond lucide-react optional.
Props optional for future CMS: `title`, `subtitle`, `stats`, `imageSrc`, `priceCard`.
Mobile-first responsive; prefers-reduced-motion safe transitions.
Port note: will convert to Qwik `component$()` with `class` not `className`.
</technical_output>

<anti_patterns>
- Full homepage layout (listings, FAQ, map)
- Duplicate H1 or secondary hero bands
- Stock photo of non-desert climates without context
- Cluttered badges or auto-playing video
</anti_patterns>
