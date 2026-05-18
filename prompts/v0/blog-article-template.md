# V0 Prompt: Blog & Article Layout (Advisor-approved v1.0.0)

**Advisor status:** ready · **Registry ID:** `blog-article-template`  
**Copy below the line to [v0.dev](https://v0.dev)**

---

<context>
Blog hub + article layout for centennialhillshomesforsale.com
Routes: /blog, /blog/category/*, RSS-driven feed
Author: Dr. Jan Duffy · Publisher: Centennial Hills Real Estate
</context>

<constraints>
- NEVER "Janet"
- **Images required on every card:** use `image` field — thumbnail top of card, lazy load, descriptive alt
- Fallback image: `/images/blog-default.jpg` (local, not external URL)
- RSS slot: `{feedSlot}` placeholder for feed list — each item shows image if present
- External article links open `target="_blank"` rel="noopener noreferrer"
- Category hub: Buyer's Guide, Seller's Guide, Market Insights (3 cards with icons)
</constraints>

<design_system>
Clean editorial: max-w-4xl hub, article max-w-3xl · white cards shadow-md · blue links #1e40af · category emojis or lucide icons
</design_system>

<sections>
**Blog index (`BlogIndexPage`)**
1. Header — H1 "Centennial Hills Real Estate Blog" + subtitle
2. Category grid — 3 cards with image thumbnails (/images/blog-default.jpg or section-specific)
3. `{feedSlot}` — list of article cards: image 16:9, title, excerpt 200 chars, date, "Read More →"
4. Featured local articles — 2-col grid with images
5. Newsletter strip (optional)

**Article card component (`BlogPostCard`)**
- Props: `title`, `excerpt`, `date`, `image`, `href`, `category?`
- Image top `h-48 object-cover rounded-t-lg` — **never omit image block**

**Single article (`BlogArticlePage`)** — for static posts
- Hero image full-width max-h-96 object-cover
- Breadcrumb, H1, byline Dr. Jan Duffy, date
- Prose body, related posts row with thumbnails
</sections>

<example_feed_item>
```json
{
  "title": "Las Vegas Housing Inventory Trends",
  "excerpt": "Inventory shifts in northwest Las Vegas may create opportunities for buyers...",
  "image": "/images/blog-default.jpg",
  "link": "https://example.com/post",
  "pubDate": "2026-05-01"
}
```
</example_feed_item>

<technical_output>
React + TypeScript + Tailwind. Export `BlogIndexPage`, `BlogPostCard`, `BlogArticlePage`. Use next/image pattern or plain img with local paths only.
</technical_output>

<anti_patterns>
- Text-only blog cards without image area
- hotlinked Unsplash in v0 preview
- Stripping images from RSS items
</anti_patterns>
