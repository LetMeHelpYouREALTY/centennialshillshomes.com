# V0 Prompt: Market Report Page (Advisor-approved v1.0.0)

**Advisor status:** ready · **Registry ID:** `market-report-template`  
**Copy below the line to [v0.dev](https://v0.dev)**

---

<context>
Reusable market report / market analysis page for Las Vegas & Centennial Hills real estate.
Examples: /centennial-hills-market-report, /market-reports, /market-analysis
Agent: Dr. Jan Duffy · (702) 903-1952 · ZIPs 89135, 89138, 89144
</context>

<constraints>
- NEVER "Janet" — Dr. Jan Duffy only
- ONE H1
- **Images:** use `/images/centennial-hills-hero-bg.jpg` or generate in v0 (see prompts/v0/site-images.md) — NO external hotlinks
- Stats are editorial ranges, not live MLS — label "illustrative" subtly if shown
- Include internal links: market-reports, centennial-hills-market-report, recent-sales, home-valuation
</constraints>

<design_system>
Hero blue #1e3a8a with gold highlight span · stat cards like homepage · prose max-w-3xl · charts as simple CSS bar visuals (no fake API)
</design_system>

<sections>
1. Hero — H1 "{Market Name} Market Report" + subtitle + Dr. Jan Duffy attribution
2. Key metrics row — 4 cards: Median Price, Days on Market, Active Inventory, YoY Change (props)
3. Market overview — 2 paragraphs
4. Trends list — bullet cards with icons
5. ZIP breakdown — 89135, 89138, 89144 comparison table
6. Buyer/seller implications — 2 columns
7. FAQ accordion (4 items)
8. CTA — Free market analysis + Call
</sections>

<example_props>
`marketName`: "Centennial Hills" · `medianPrice`: "$625,000" · `dom`: "23" · `inventory`: "142" · `yoy`: "+8.5%"
</example_props>

<technical_output>
React + TypeScript + Tailwind. `MarketReportPage.tsx` with props. Image: local `/images/centennial-hills-hero-bg.jpg` in hero side panel or background with overlay.
</technical_output>
