# V0 Prompt: Header & Navigation (Advisor-approved v1.1.0)

**Advisor status:** ready · **Registry ID:** `header-nav`  
**Copy below the line to [v0.dev](https://v0.dev)**

---

<context>
Centered header for Centennial Hills Real Estate | Homes by Dr. Jan Duffy.
Logo: /images/logo.png · Phone CTA: (702) 903-1952
</context>

<constraints>
- NEVER "Janet" — About dropdown: "Dr. Jan Duffy" (href may stay /janet-duffy)
- Fixed header, scroll opacity increase
- Keyboard accessible dropdowns + mobile drawer
</constraints>

<design_system>
Primary #1e3a8a, gray #6b7280, white glassmorphism, hover #1e40af
Logo left · nav centered · phone CTA right · hamburger &lt;768px
</design_system>

<sections>
Nav: Home | Centennial Hills (7 links) | Buy & Sell (7) | Our Listings (7) | Communities (6) | About (About Us, **Dr. Jan Duffy**, Testimonials, Market Insights, Press) | Commute Calculator | Contact
</sections>

<technical_output>
Qwik + TypeScript + CSS Modules OR React+Tailwind for v0 then port.
useSignal, useLocation, useVisibleTask$ for scroll. Production-ready header.
</technical_output>
