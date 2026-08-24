import Link from "next/link";
import Image from "next/image";
import { homepageCommunities } from "@/lib/homepage-communities";

export default function NeighborhoodGrid() {
  return (
    <section className="bg-ivory py-16 md:py-24" id="neighborhoods">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
          Explore by community
        </p>
        <h2 className="mt-3 font-display text-3xl italic text-ink md:text-5xl">
          Centennial Hills & Northwest Las Vegas Neighborhoods
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homepageCommunities.map((community) => (
            <Link
              key={community.slug}
              href={community.href}
              className="group relative block h-72 overflow-hidden rounded-2xl bg-ink text-white no-underline"
            >
              <Image
                src={community.image}
                alt={`${community.name} homes for sale in northwest Las Vegas near Centennial Hills`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 z-[1] bg-gradient-to-t from-ink via-ink/55 to-ink/20"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 z-[2] p-5">
                <h3 className="font-display text-2xl">{community.name}</h3>
                <p className="mt-1 text-sm text-white/85">{community.description}</p>
                <p className="mt-3 text-sm font-semibold text-terracotta-light">{community.zipHint}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/neighborhoods"
            className="text-sm font-semibold text-terracotta no-underline hover:text-terracotta-dark"
          >
            View all neighborhoods →
          </Link>
        </div>
      </div>
    </section>
  );
}
