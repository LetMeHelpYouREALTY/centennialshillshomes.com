# V0 Prompt: Navigation Tailwind (Advisor-approved v1.1.0)

**Advisor status:** ready · **Registry ID:** `navigation`  
**Copy below the line to [v0.dev](https://v0.dev)**

---

<context>
Glassmorphism navigation for centennialhillshomesforsale.com
Subtitle: "Homes by Dr. Jan Duffy"
</context>

<constraints>
- NEVER "Janet" in labels — use Dr. Jan Duffy in About dropdown
- Logo + text left; horizontal nav + dropdowns; Call (702) 903-1952 CTA
- Mobile: slide-in from right, backdrop blur
</constraints>

<design_system>
Primary #1e3a8a, text #374151, white/blur header, breakpoint 768px
</design_system>

<technical_output>
Qwik component$(), useSignal, onMouseEnter$/Leave$ dropdowns, onClick$ mobile.
Tailwind utilities only in v0 output. TypeScript, ARIA, focus states.
</technical_output>
