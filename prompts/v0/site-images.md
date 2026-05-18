# V0 Prompt: Site Image Pack (Advisor-approved v1.0.0)

**Advisor status:** ready · **Registry ID:** `site-images`  
**Use when:** v0 blocks external images, broken `/images/*` paths, or empty placeholders.

---

## Why images were blocked

1. `public/images/` had no files (paths 404 in v0 preview and production)
2. v0 blocks many hotlinked domains (Unsplash, random CDNs)
3. Remote URLs in prompts fail CSP or CORS in v0 sandbox

## Fix: use bundled assets OR generate in v0

**Production repo paths** (now populated): see `public/images/image-manifest.json`

| Section | File | Use in v0 prompt |
|---------|------|------------------|
| Header / footer logo | `/images/logo.png` | `<img src="/images/logo.png" />` |
| Homepage hero | `/images/modern-home-exterior.jpg` | Hero right column |
| Property cards | `/images/modern-home-exterior.jpg` | Listing placeholders |
| Luxury / golf | `/images/clubhouse-exterior.jpg` | Community pages |
| Amenities grid | `community-lounge.jpg`, `fitness-center.jpg`, `swimming-pool.jpg`, etc. | 3-col cards |
| Agent / About | `/images/dr-jan-duffy.jpg` | Sidebar or hero |
| Blog / OG | `/images/blog-default.jpg` | Article hero |
| Hero background | `/images/centennial-hills-hero-bg.jpg` | Optional bg |

---

## v0.dev: generate images per section

For each UI section in v0, **use v0's image generation** with these exact prompts (do not use external URLs):

### Homepage hero
> Photorealistic modern single-story luxury home in Las Vegas desert community, reddish tile roof, stone veneer, xeriscape landscaping, Red Rock Canyon style mountains in background, golden hour, 16:9, no people, no text

### Logo (if regenerating)
> Minimal real estate logo, deep blue #1e3a8a and gold accent, house icon + text area "Centennial Hills", clean vector style on transparent background, 400x120

### Neighborhood hero (template)
> Aerial-suburban master-planned community in North Las Vegas, desert mountains, green parks, modern homes, bright sky, 16:9, no text

### Market report hero
> Clean data visualization aesthetic, Las Vegas skyline silhouette, charts overlay subtle, professional blue #1e3a8a theme, 16:9, no readable fake numbers

### Blog article hero
> Las Vegas residential street with luxury homes, editorial photography style, warm light, 2:1 banner, no text

### Amenity cards (generate 6)
1. Community lounge — white sofas, fireplace, modern  
2. Resort pool — lounge chairs, pergola, mountains  
3. Fitness center — Technogym style equipment, windows  
4. Pickleball courts — blue surface, desert backdrop  
5. Outdoor patio — fire pit, Adirondack chairs  
6. Community kitchen — white marble island, bar stools  

### Agent headshot
> Professional female real estate agent portrait, business attire, warm confident smile, neutral office background, shoulders up, photorealistic (generic, not celebrity)

---

## v0 component rules

```tsx
// ✅ CORRECT — local path (after assets committed) or v0-generated blob
<img src="/images/modern-home-exterior.jpg" alt="Modern luxury home in Centennial Hills, Las Vegas" loading="lazy" />

// ✅ CORRECT — v0 Image Generation in chat: "Generate image for hero using prompt above"

// ❌ WRONG — blocked in v0
<img src="https://images.unsplash.com/..." />
<img src="/images/missing-file.jpg" />  // 404
```

- Always set descriptive `alt` with location (Centennial Hills, Las Vegas)
- Hero: `loading="eager"` · below-fold: `loading="lazy"`
- RSS/external feeds: keep `item.image` from parser; fallback `/images/blog-default.jpg`

---

## Map to V0 templates

| V0 prompt file | Images to attach |
|----------------|------------------|
| `home-hero.md` | modern-home-exterior.jpg |
| `home-header.md` | logo.png |
| `neighborhood-landing.md` | modern-home-exterior + 3 amenity shots |
| `homepage.md` | hero + logo |
| `market-report-template.md` | blog-default or centennial-hills-hero-bg |
| `blog-article-template.md` | blog-default.jpg |

---

## After v0 export

1. Download any new v0-generated images into `public/images/` (kebab-case names)
2. Run `npm run optimize:images` if sharp installed
3. Verify live: `https://www.centennialhillshomesforsale.com/images/modern-home-exterior.jpg`
