from pathlib import Path

p = Path(r"C:\Users\geneb\centennialshillshomes.com\src\routes\index.tsx")
lines = p.read_text(encoding="utf-8").splitlines(keepends=True)

start = next(i for i, L in enumerate(lines) if "Luxury Hero Section" in L or "{/* Hero */}" in L)
end = next(i for i, L in enumerate(lines) if i > start and L.strip() == "</section>" and "AnswerSummary" in "".join(lines[i + 1 : i + 4]))

hero = '''\t\t\t{/* Hero */}
\t\t\t<section class="hero-dark relative -mt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-28 pb-14 md:pt-32 md:pb-16">
\t\t\t\t<div
\t\t\t\t\tclass="pointer-events-none absolute inset-0 opacity-40"
\t\t\t\t\taria-hidden="true"
\t\t\t\t\tstyle="background-image: radial-gradient(circle at 15% 20%, rgba(251, 191, 36, 0.12), transparent 42%), radial-gradient(circle at 85% 75%, rgba(59, 130, 246, 0.1), transparent 45%);"
\t\t\t\t/>
\t\t\t\t<div class="relative z-10 container mx-auto px-4">
\t\t\t\t\t<div class="mx-auto max-w-3xl text-center text-white">
\t\t\t\t\t\t<OptimizedImage
\t\t\t\t\t\t\tsrc={SITE_IMAGES.agentHero}
\t\t\t\t\t\t\talt={`${SITE.agentName} - Centennial Hills luxury real estate`}
\t\t\t\t\t\t\twidth={144}
\t\t\t\t\t\t\theight={144}
\t\t\t\t\t\t\tpriority
\t\t\t\t\t\t\tclassName="mx-auto mb-5 h-28 w-28 rounded-full border-4 border-amber-400/90 object-cover shadow-lg md:h-36 md:w-36"
\t\t\t\t\t\t/>
\t\t\t\t\t\t<p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 md:text-sm">
\t\t\t\t\t\t\tCentennial Hills · Las Vegas · {SITE.zipCodes.join(" · ")}
\t\t\t\t\t\t</p>
\t\t\t\t\t\t<h1 class="mb-4 text-3xl font-bold leading-tight md:text-5xl">
\t\t\t\t\t\t\tCentennial Hills Homes for Sale
\t\t\t\t\t\t</h1>
\t\t\t\t\t\t<p class="mb-8 text-base text-slate-200 md:text-lg">
\t\t\t\t\t\t\t{SITE.agentName} · Top 1% REALTOR® · Same-day showings · Free
\t\t\t\t\t\t\tmarket analysis
\t\t\t\t\t\t</p>
\t\t\t\t\t\t<div class="mb-10 flex flex-col justify-center gap-3 sm:flex-row">
\t\t\t\t\t\t\t<a
\t\t\t\t\t\t\t\thref={`tel:${SITE.phoneTel}`}
\t\t\t\t\t\t\t\tclass="inline-flex items-center justify-center rounded-lg bg-amber-500 px-8 py-3 text-base font-bold text-slate-900 transition-colors hover:bg-amber-400"
\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\tCall {SITE.phone}
\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t<Link
\t\t\t\t\t\t\t\thref="/properties"
\t\t\t\t\t\t\t\tclass="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\tBrowse MLS Listings
\t\t\t\t\t\t\t</Link>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="mx-auto grid max-w-3xl grid-cols-2 gap-3 md:gap-4">
\t\t\t\t\t\t<Link
\t\t\t\t\t\t\thref="/sellers"
\t\t\t\t\t\t\tclass="rounded-lg border border-white/20 bg-white/5 px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-white/10 md:text-sm"
\t\t\t\t\t\t>
\t\t\t\t\t\t\tList your home
\t\t\t\t\t\t</Link>
\t\t\t\t\t\t<Link
\t\t\t\t\t\t\thref="/buyers"
\t\t\t\t\t\t\tclass="rounded-lg border border-white/20 bg-white/5 px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-white/10 md:text-sm"
\t\t\t\t\t\t>
\t\t\t\t\t\t\tBuy a home
\t\t\t\t\t\t</Link>
\t\t\t\t\t\t<Link
\t\t\t\t\t\t\thref="/centennial-hills"
\t\t\t\t\t\t\tclass="rounded-lg border border-white/20 bg-white/5 px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-white/10 md:text-sm"
\t\t\t\t\t\t>
\t\t\t\t\t\t\tCentennial Hills
\t\t\t\t\t\t</Link>
\t\t\t\t\t\t<Link
\t\t\t\t\t\t\thref="/communities"
\t\t\t\t\t\t\tclass="rounded-lg border border-white/20 bg-white/5 px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-white/10 md:text-sm"
\t\t\t\t\t\t>
\t\t\t\t\t\t\tCommunities
\t\t\t\t\t\t</Link>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</section>
'''

hero = hero.replace("</div>", "</div>").replace("<motion.div", "<motion.div")
new_lines = lines[:start] + [hero] + lines[end + 1 :]
p.write_text("".join(new_lines), encoding="utf-8")
print(f"replaced lines {start+1}-{end+1}")
