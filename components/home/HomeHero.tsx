"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search } from "lucide-react";
import { agentInfo, agentStats, siteConfig, siteImages } from "@/lib/site-config";

type SearchTab = "buy" | "rent" | "sold";

const TABS: { id: SearchTab; label: string }[] = [
  { id: "buy", label: "Buy" },
  { id: "rent", label: "Rent" },
  { id: "sold", label: "Sold" },
];

function searchHref(tab: SearchTab, query: string): string {
  const q = query.trim();
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (tab === "rent") params.set("status", "for-rent");
  if (tab === "sold") params.set("status", "sold");
  const qs = params.toString();
  return qs ? `/listings?${qs}` : "/listings";
}

export default function HomeHero() {
  const router = useRouter();
  const [tab, setTab] = useState<SearchTab>("buy");
  const [query, setQuery] = useState("");
  const years = new Date().getFullYear() - agentStats.servingSince;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(searchHref(tab, query));
  }

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-white">
      <Image
        src={siteImages.hero[0]}
        alt="Aerial view of Centennial Hills homes in northwest Las Vegas at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/45 to-ink/85" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 pt-32 md:pb-24 md:pt-40">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-terracotta-light md:text-sm">
          Northwest Las Vegas · {siteConfig.brandName}
        </p>
        <h1 className="font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl">
          Centennial Hills Homes for Sale
          <span className="mt-2 block text-2xl italic font-normal md:text-4xl lg:text-5xl">
            Dr. Jan Duffy, REALTOR®
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/90 md:text-xl">
          {agentStats.transactionsClosed}+ closings. Hyperlocal expertise across Providence, Skye
          Canyon, Tule Springs, and ZIP codes {siteConfig.zipCodes.join(", ")}. {agentInfo.name} —
          Top 1% Nevada, since {agentStats.servingSince}.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 overflow-hidden rounded-2xl bg-ink/70 shadow-2xl ring-1 ring-white/15 backdrop-blur-md"
          role="search"
          aria-label="Search Centennial Hills homes"
        >
          <div className="flex gap-1 p-2" role="tablist" aria-label="Listing status">
            {TABS.map((item) => {
              const selected = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`search-tab-${item.id}`}
                  onClick={() => setTab(item.id)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    selected
                      ? "bg-terracotta text-ink"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 p-2 sm:flex-row sm:items-stretch">
            <label className="sr-only" htmlFor="home-search-query">
              Neighborhood, ZIP, or address
            </label>
            <input
              id="home-search-query"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Neighborhood, ZIP, or address..."
              className="h-12 flex-1 rounded-xl border-0 bg-white/95 px-4 text-ink placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-terracotta px-6 font-semibold text-ink hover:bg-terracotta-dark hover:text-white"
            >
              <Search className="h-4 w-4" aria-hidden />
              Search
            </button>
          </div>
        </form>
        <p className="mt-3 text-xs text-white/70">
          Live MLS search · {years} years in northwest Las Vegas · Same-day showings
        </p>
      </div>
    </section>
  );
}
