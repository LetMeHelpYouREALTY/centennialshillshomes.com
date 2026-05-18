# V0 Prompt: Homepage (Advisor-approved v1.0.0)

**Advisor status:** integrated · **Registry ID:** `homepage`  
**Copy everything below the line to [v0.dev](https://v0.dev)**

---

<context>
Premium real estate homepage for Centennial Hills, Las Vegas.
Agent: Dr. Jan Duffy, Top 1% REALTOR®, Berkshire Hathaway HomeServices Nevada Properties.
Live reference: https://www.centennialhillshomesforsale.com/
Phone: (702) 903-1952 · Address: 1490 Center Crossing Rd, Las Vegas, NV 89144
Service ZIPs: 89135, 89138, 89144
</context>

<constraints>
- NEVER use "Janet" — only "Dr. Jan Duffy"
- ONE "Featured Centennial Hills Properties" section only (MLS widget below hero)
- RealScout: use dashed placeholder boxes `{listingsSlot}` and `{searchSlot}` — no fake MLS cards
- Map: show skeleton, then embed OR error state with "View on Google Maps" — never infinite "Loading map..."
- Semantic HTML: one H1, sections with h2
- Mobile-first, WCAG AA contrast
</constraints>

<design_system>
- Primary: #1e3a8a / #1e40af
- Hero: deep blue bg, white text, stat numbers #fcd34d
- Cards: white, rounded-xl, border #e5e7eb, shadow-sm
- Buttons: primary filled blue, secondary outline, hover translateY(-1px)
- Container max-width 1200px; fixed header offset ~72px on hero
- Font: Inter or system-ui sans-serif
</design_system>

<sections>
1. **Hero** — H1 "Your Centennial Hills Real Estate Expert"; lead with bold "Buying or Selling in Centennial Hills?"; stats $2.4M+ | 150+ | 30+; CTAs Find Home + Home Valuation; right: luxury home image + floating price card ($675,000 · 4 bed · 3 bath · 2,800 sq ft)

2. **Featured listings (single)** — H2 + subtitle; `{listingsSlot}` min-h 400px; CTA "View All Available Properties"

3. **MLS search** — H2; badge "Powered by RealScout MLS Search"; `{searchSlot}` min-h 500px; 3 quick cards: MLS Search | Centennial Hills | Contact Dr. Jan Duffy

4. **Market overview** — 4 stat cards: Median $625k (+8.5%) | DOM 23 (-12%) | Active 142 (+15%) | List-to-sale 98.2% (+2.1%)

5. **Map** — H2 "Explore Centennial Hills Properties"; 500px map area with fallback link

6. **Why Dr. Jan Duffy** — 6 icon cards (Experience, Top 1%, Local, 24/7, Market Analysis, Luxury)

7. **FAQ** — Accordion, 6–8 questions about Centennial Hills / Dr. Jan Duffy services

8. **CTA band** — blue gradient; Schedule | Buy | Sell | Call (702) 903-1952
</sections>

<technical_output>
React + TypeScript + Tailwind CSS (shadcn Card, Button, Accordion optional).
Export component tree with props: `listingsSlot`, `searchSlot` as ReactNode.
Port notes: will convert to Qwik `component$()`, `class` not `className`, `onClick$` handlers.
No lorem ipsum. Polished spacing at sm/md/lg breakpoints.
</technical_output>

<anti_patterns>
- Duplicate featured property grids
- Placeholder addresses (1234 Mountain View Dr) as if live MLS
- Raw markdown ** in hero (use strong/emphasis in JSX)
- "Dr. Janet Duffy" anywhere
</anti_patterns>
