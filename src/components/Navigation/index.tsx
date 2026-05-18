import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { SITE, SITE_IMAGES } from "~/config/site";

export interface NavigationProps {}

export const Navigation = component$<NavigationProps>((props) => {
	const isMobileMenuOpen = useSignal(false);
	const isScrolled = useSignal(false);

	const toggleMobileMenu = $(() => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value;
	});

	useVisibleTask$(() => {
		const handleScroll = () => {
			isScrolled.value = window.scrollY > 50;
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<nav
			class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled.value ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
			id="navigation"
		>
			<div class="container mx-auto px-4">
				<div class="flex items-center justify-between py-4 lg:py-6">
					{/* Logo + phone */}
					<div class="flex items-center gap-3 lg:gap-4 min-w-0">
						<Link href="/" class="shrink-0 flex items-center gap-2">
							<img
								src={SITE_IMAGES.logo}
								alt={`${SITE.shortName} - ${SITE.agentName}`}
								width={40}
								height={40}
								class="h-9 w-9 lg:h-10 lg:w-10 object-contain"
							/>
							<span
								class="hidden sm:inline font-semibold text-sm lg:text-base truncate max-w-[140px] lg:max-w-none"
								style="color: #f8fafc !important;"
							>
								{SITE.shortName}
							</span>
						</Link>
						<a
							href={`tel:${SITE.phoneTel}`}
							class="hidden md:flex items-center gap-2 font-bold text-sm lg:text-lg shrink-0"
							style="color: #f8fafc !important;"
						>
							{SITE.phone}
						</a>
					</div>

					{/* Center Navigation Links - Evenly Spaced */}
					<div class="hidden lg:flex items-center space-x-8 xl:space-x-12">
						<Link
							href="/properties"
							class="transition-all duration-300 font-light text-sm uppercase tracking-wider hover:text-gray-300 relative group"
							style="color: #f8fafc !important; text-decoration: none !important;"
						>
							OUR LUXURY LISTINGS
							<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link
							href="/buyers"
							class="transition-all duration-300 font-light text-sm uppercase tracking-wider hover:text-gray-300 relative group"
							style="color: #f8fafc !important; text-decoration: none !important;"
						>
							BUY A HOME
							<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link
							href="/sellers"
							class="transition-all duration-300 font-light text-sm uppercase tracking-wider hover:text-gray-300 relative group"
							style="color: #f8fafc !important; text-decoration: none !important;"
						>
							SELL A HOME
							<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link
							href="/about"
							class="transition-all duration-300 font-light text-sm uppercase tracking-wider hover:text-gray-300 relative group"
							style="color: #f8fafc !important; text-decoration: none !important;"
						>
							ABOUT US
							<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link
							href="/communities"
							class="transition-all duration-300 font-light text-sm uppercase tracking-wider hover:text-gray-300 relative group"
							style="color: #f8fafc !important; text-decoration: none !important;"
						>
							LAS VEGAS
							<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link
							href="/contact"
							class="transition-all duration-300 font-light text-sm uppercase tracking-wider hover:text-gray-300 relative group"
							style="color: #f8fafc !important; text-decoration: none !important;"
						>
							NEWPORT OFFICE
							<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</div>

					{/* Right Spacer - Empty div to maintain balance */}
					<div class="w-32"></div>

					{/* Mobile Menu Button - Visible on smaller screens */}
					<div class="lg:hidden">
						<button
							onClick$={toggleMobileMenu}
							class="text-white hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-white/10"
							aria-label="Toggle mobile menu"
						>
							<svg
								class="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
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
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen.value && (
					<div class="lg:hidden bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mt-4 p-6 animate-in slide-in-from-top-4 duration-300">
						{/* Close Button */}
						<div class="flex justify-end mb-4">
							<button
								onClick$={toggleMobileMenu}
								class="text-gray-500 hover:text-gray-700 transition-colors p-1"
								aria-label="Close menu"
							>
								<svg
									class="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						{/* Mobile Phone Number */}
						<div class="mb-6 p-4 bg-blue-600 rounded-lg text-center">
							<a
								href="tel:+17029031952"
								class="flex items-center justify-center space-x-3 text-white"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
								</svg>
								<span class="font-bold text-lg">(702) 903-1952</span>
							</a>
						</div>

						<div class="space-y-3">
							<Link
								href="/properties"
								class="block text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-amber-50"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Our Luxury Listings
							</Link>
							<Link
								href="/buyers"
								class="block text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-amber-50"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Buy a Home
							</Link>
							<Link
								href="/sellers"
								class="block text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-amber-50"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Sell a Home
							</Link>
							<Link
								href="/about"
								class="block text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-amber-50"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								About Us
							</Link>
							<Link
								href="/communities"
								class="block text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-amber-50"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Las Vegas
							</Link>
							<Link
								href="/contact"
								class="block text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-amber-50"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Newport Office
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
});
