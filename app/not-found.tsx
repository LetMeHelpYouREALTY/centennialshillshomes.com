import type { Metadata } from "next";
import Link from "next/link";
import { agentInfo, officeInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page not found | Centennial Hills Homes",
  description: `This URL is not a live page. Browse Centennial Hills homes for sale or call ${agentInfo.phone}.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">404</p>
      <h1 className="mt-3 font-display text-4xl text-ink">This page is not on the site</h1>
      <p className="mt-4 text-stone-600">
        Google may have an old URL from a previous site version. Use a live page below, or call{" "}
        <a href={agentInfo.phoneTel} className="font-semibold text-terracotta">
          {agentInfo.phone}
        </a>
        .
      </p>
      <p className="mt-2 text-sm text-stone-500">{officeInfo.address.full}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-terracotta px-5 py-2.5 font-semibold text-white no-underline"
        >
          Home
        </Link>
        <Link
          href="/listings"
          className="rounded-xl border border-stone-300 px-5 py-2.5 font-semibold text-ink no-underline"
        >
          Live MLS listings
        </Link>
        <Link
          href="/neighborhoods"
          className="rounded-xl border border-stone-300 px-5 py-2.5 font-semibold text-ink no-underline"
        >
          Neighborhoods
        </Link>
      </div>
    </main>
  );
}
