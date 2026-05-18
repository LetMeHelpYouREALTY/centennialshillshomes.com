# V0 Prompt: Site Header & Navigation (Advisor-approved v2.0.0)

**Advisor status:** ready · **Registry ID:** `home-header`  
**Copy everything below the line to [v0.dev](https://v0.dev)**

---

<context>
Global site header for centennialhillshomesforsale.com — used on homepage and all interior pages.
Brand: Centennial Hills Real Estate | Homes by Dr. Jan Duffy
Logo image: `/images/logo.png` (bundled, 40px height) — generate via site-images.md if missing in v0
Phone CTA: Call (702) 903-1952 → tel:+17029031952
Fixed position, z-index 1000, height ~72px.
</context>

<constraints>
- NEVER "Janet" — About menu label: "Dr. Jan Duffy" (link href `/janet-duffy` is fine)
- Logo + nav + phone must fit 1280px+ without wrapping
- Desktop: hover dropdowns; Mobile: hamburger → slide-in panel from right, body scroll lock
- Active route highlight on current section
- Scroll state: add subtle shadow + slightly stronger background after 20px scroll
- WCAG: aria-expanded on dropdowns, focus rings, keyboard Esc closes mobile menu
</constraints>

<design_system>
- Background: white default; scrolled: white + border-bottom + light shadow
- Primary text/nav: #1e3a8a; muted: #6b7280; hover: #1e40af
- Logo text: main "Dr. Jan Duffy" 1.25rem bold; subtitle "Centennial Hills Real Estate" 0.75rem uppercase tracking
- Grid: logo | centered nav | phone CTA button (filled blue, rounded-lg)
- Dropdown panels: white card, rounded-lg, shadow-xl, 2-col link grid where helpful, title + short description per item
- Mobile drawer: full height, overlay backdrop rgba(0,0,0,0.5), nested accordions for dropdown sections
</design_system>

<sections>
**Logo (left)**
- Image + stacked text, links to `/`

**Center nav (desktop)**
1. Home → `/`
2. Centennial Hills (dropdown): Centennial Hills Homes, Homes for Sale, Luxury Homes, New Construction, ZIP 89135, 89138, 89144
3. Buy & Sell (dropdown): Buy a Home, Sell a Home, MLS Search, Home Valuation, Market Analysis, First-Time Buyers, Luxury Buyers
4. Our Listings (dropdown): Luxury Listings, Active Listings, Investment Properties, Luxury Estates, New Construction, Virtual Tours, Recent Sales
5. Communities (dropdown): North Las Vegas, Aliante, Sky Canyon, Providence, Tule Springs, Northwest Las Vegas
6. About (dropdown): About Us, Dr. Jan Duffy, Testimonials, Market Insights, Press & Media
7. Commute Calculator → `/commute-calculator`
8. Contact → `/contact`

**Right CTA**
- Button: "Call (702) 903-1952" with phone icon

**Mobile**
- Hamburger toggles drawer with same links grouped under accordions
</sections>

<technical_output>
React + TypeScript + Tailwind CSS.
Component: `SiteHeader.tsx` with internal state for mobile menu + open dropdown.
Use `usePathname()` or prop `currentPath` for active states.
No external UI library required; shadcn NavigationMenu optional.
Export responsive header only — no page content.
Port note: Qwik `component$()`, `useSignal`, `useLocation`, `onClick$` / `onMouseEnter$`.
</technical_output>

<anti_patterns>
- Centered logo with nav below (must be logo | nav | CTA row)
- Hiding phone CTA on desktop
- Janet in any label
- Dropdowns that require click on desktop (hover preferred)
</anti_patterns>
