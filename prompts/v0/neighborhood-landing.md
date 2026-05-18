# V0 Prompt: Neighborhood Landing Page (Advisor-approved v1.0.0)

**Advisor status:** ready · **Registry ID:** `neighborhood-landing`  
**Copy everything below the line to [v0.dev](https://v0.dev)**

---

<context>
Reusable neighborhood/community landing page template for Las Vegas real estate (Qwik site).
Example pages: Aliante, Providence, Tule Springs, Sky Canyon, North Las Vegas, Northwest Las Vegas, Lone Mountain, Red Rock Country Club, The Ridges, Summerlin West.
Agent: Dr. Jan Duffy · Phone (702) 903-1952 · Primary market: Centennial Hills ZIPs 89135, 89138, 89144.
Design one polished template; content is driven by props (see below).
</context>

<constraints>
- NEVER "Janet" — only Dr. Jan Duffy
- ONE H1 per page (neighborhood name in title)
- MLS listings: use placeholder `{listingsSlot}` min-height 420px — do not invent listing cards with fake addresses
- Map: placeholder `{mapSlot}` or static embed area 480px — no infinite loading state
- Include FAQ accordion (3–5 items) + FAQ schema-ready markup
- Bottom CTA band before footer (or assume global layout adds CTA — include slim inline CTA if standalone)
- Fair housing friendly copy; no discriminatory language
</constraints>

<design_system>
- Hero: deep blue #1e3a8a OR soft gradient blue-to-slate (match homepage family); white text; highlight span in gold #fcd34d or cyan accent
- Content sections: white bg alternating with #f9fafb
- Typography: H1 2.5–3rem, H2 1.875rem, body #374151, links #1e40af
- Cards: lifestyle, schools, amenities — icon + title + 2-line description in 3-col grid desktop
- Buttons: primary #1e40af, secondary outline
- Internal links styled clearly for SEO (localized anchor text)
</design_system>

<sections>
**1. Neighborhood hero**
- Props: `neighborhoodName`, `tagline`, `heroDescription` (2 sentences max)
- H1: "{neighborhoodName} Real Estate — {tagline}"
- Subtitle paragraph
- CTAs: "Find {neighborhoodName} Homes" (primary → /contact or /mls-search) + "View All Properties" (secondary)

**2. Overview** (props: `overviewParagraphs[]`)
- H2: "Living in {neighborhoodName}"
- 2–3 prose blocks with readable line length (max-w-3xl)

**3. Lifestyle & amenities** (props: `highlights[]` with `title`, `description`, `icon`)
- H2: "Lifestyle & Amenities"
- 6-card grid (parks, shopping, dining, recreation, etc.)

**4. Schools** (props: `schoolsNote` string)
- H2: "Schools & Education"
- Short SEO paragraph + link text "best schools in Centennial Hills" where relevant

**5. Market snapshot** (props: `medianPrice`, `dom`, `activeListings`, `yoyChange`)
- H2: "{neighborhoodName} Market at a Glance"
- 4 stat cards (same visual language as homepage market overview)

**6. Featured listings**
- H2: "Homes for Sale in {neighborhoodName}"
- `{listingsSlot}` placeholder with dashed border and label "MLS listings widget"

**7. Map**
- H2: "Explore {neighborhoodName} on the Map"
- `{mapSlot}` placeholder

**8. Why Dr. Jan Duffy** (static short section)
- 3 bullets: local expertise, 30+ years, Top 1% REALTOR®

**9. FAQ** (props: `faqs[]` question/answer)
- Accordion, accessible

**10. CTA band**
- "Ready to explore {neighborhoodName}?" + Schedule Consultation + Call (702) 903-1952
</sections>

<example_props>
Use this sample data in the v0 preview:

```json
{
  "neighborhoodName": "Aliante",
  "tagline": "Master-Planned Community",
  "heroDescription": "Thoughtfully designed neighborhoods, extensive amenities, and a strong sense of community in North Las Vegas.",
  "overviewParagraphs": ["Aliante features...", "Residents enjoy..."],
  "highlights": [
    { "title": "Parks & Trails", "description": "..." },
    { "title": "Shopping & Dining", "description": "..." }
  ],
  "medianPrice": "$425,000",
  "dom": "28",
  "activeListings": "86",
  "yoyChange": "+6.2%",
  "faqs": [
    { "question": "What is the average home price in Aliante?", "answer": "..." }
  ]
}
```
</example_props>

<technical_output>
React + TypeScript + Tailwind.
Export `NeighborhoodLandingPage.tsx` accepting props interface `NeighborhoodPageProps`.
Children slots: `listingsSlot?: ReactNode`, `mapSlot?: ReactNode`.
Semantic HTML: main, section, article patterns.
Mobile-first; lighthouse-friendly (no heavy carousels).
Port note: Qwik component with `component$()` and prop types in separate file.
</technical_output>

<anti_patterns>
- Duplicate hero + duplicate H1
- Lorem ipsum
- Placeholder street addresses in fake listing cards
- Competing CTAs every screen (max 2 CTA bands)
- Generic "Las Vegas" copy with no neighborhood name repetition
</anti_patterns>
