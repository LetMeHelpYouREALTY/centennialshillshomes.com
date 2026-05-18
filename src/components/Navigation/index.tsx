import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { SITE, SITE_IMAGES } from "~/config/site";

const navLinkClass =
	"text-slate-100/90 text-sm font-medium uppercase tracking-wide hover:text-amber-400 transition-colors relative group";

export const Navigation = component$(() => {
	const isMobileMenuOpen = useSignal(false);
	const isScrolled = useSignal(false);

	const toggleMobileMenu = $(() => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value;
	});

	useVisibleTask$(() => {
		const handleScroll = () => {
			isScrolled.value = window.scrollY > 24;
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	const navShell = isScrolled.value
		? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/5"
		: "bg-slate-900/80 backdrop-blur-sm";

	return (
		<nav
			class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navShell}`}
			id="navigation"
		>
			<div class="container mx-auto px-4">
				<div class="flex items-center justify-between gap-4 py-3 lg:py-4">
					<div class="flex min-w-0 items-center gap-3">
						<Link href="/" class="flex shrink-0 items-center gap-2.5">
							<img
								src={SITE_IMAGES.logo}
								alt={`${SITE.shortName} - ${SITE.agentName}`}
								width={40}
								height={40}
								class="h-9 w-9 rounded-md bg-white/95 object-contain p-0.5 lg:h-10 lg:w-10"
							/>
							<span class="hidden truncate font-semibold text-slate-50 sm:inline">
								{SITE.shortName}
							</span>
						</Link>
						<a
							href={`tel:${SITE.phoneTel}`}
							class="hidden font-bold text-amber-400 hover:text-amber-300 md:inline lg:text-lg"
						>
							{SITE.phone}
						</a>
					</div>

					<div class="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
						<Link href="/properties" class={navLinkClass}>
							Listings
							<span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all group-hover:w-full" />
						</Link>
						<Link href="/buyers" class={navLinkClass}>
							Buyers
							<span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all group-hover:w-full" />
						</Link>
						<Link href="/sellers" class={navLinkClass}>
							Sellers
							<span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all group-hover:w-full" />
						</Link>
						<Link href="/neighborhoods" class={navLinkClass}>
							Neighborhoods
							<span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all group-hover:w-full" />
						</Link>
						<Link href="/about" class={navLinkClass}>
							About
							<span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all group-hover:w-full" />
						</Link>
						<Link href="/contact" class={navLinkClass}>
							Contact
							<span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all group-hover:w-full" />
						</Link>
					</div>

					<button
						type="button"
						class="rounded-lg p-2 text-slate-100 hover:bg-white/10 lg:hidden"
						onClick$={toggleMobileMenu}
						aria-expanded={isMobileMenuOpen.value}
						aria-label="Toggle menu"
					>
						<svg
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{isMobileMenuOpen.value && (
					<div class="border-t border-white/10 pb-4 lg:hidden">
						<a
							href={`tel:${SITE.phoneTel}`}
							class="mb-3 mt-3 flex items-center justify-center rounded-lg bg-amber-500 py-3 font-bold text-slate-900"
							onClick$={() => (isMobileMenuOpen.value = false)}
						>
							Call {SITE.phone}
						</a>
						<div class="grid gap-1">
							<Link
								href="/properties"
								class="rounded-lg px-3 py-2.5 text-slate-100 hover:bg-white/10"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Listings
							</Link>
							<Link
								href="/buyers"
								class="rounded-lg px-3 py-2.5 text-slate-100 hover:bg-white/10"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Buyers
							</Link>
							<Link
								href="/sellers"
								class="rounded-lg px-3 py-2.5 text-slate-100 hover:bg-white/10"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Sellers
							</Link>
							<Link
								href="/neighborhoods"
								class="rounded-lg px-3 py-2.5 text-slate-100 hover:bg-white/10"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Neighborhoods
							</Link>
							<Link
								href="/about"
								class="rounded-lg px-3 py-2.5 text-slate-100 hover:bg-white/10"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								About
							</Link>
							<Link
								href="/contact"
								class="rounded-lg px-3 py-2.5 text-slate-100 hover:bg-white/10"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Contact
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
});
