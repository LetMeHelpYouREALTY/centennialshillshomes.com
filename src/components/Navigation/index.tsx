import { $, component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface NavigationProps {}

export const Navigation = component$<NavigationProps>((props) => {
	const isMobileMenuOpen = useSignal(false);

	const toggleMobileMenu = $(() => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value;
	});

	return (
		<nav class="bg-white shadow-lg sticky top-0 z-50">
			<div class="container mx-auto px-4">
				<div class="flex justify-between items-center py-4">
					{/* Logo */}
					<Link href="/" class="flex items-center space-x-3">
						<div class="bg-blue-600 text-white p-2 rounded-lg">
							<span class="text-xl font-bold">JD</span>
						</div>
						<div class="hidden sm:block">
							<div class="text-xl font-bold text-gray-800">Dr. Jan Duffy</div>
							<div class="text-sm text-gray-600">Top 1% Las Vegas REALTOR®</div>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div class="hidden lg:flex items-center space-x-8">
						<Link
							href="/"
							class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
						>
							Home
						</Link>
						<div class="relative group">
							<button class="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center">
								Communities
								<svg
									class="w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
							<div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
								<div class="py-2">
									<Link
										href="/red-rock-country-club"
										class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
									>
										Red Rock Country Club
									</Link>
									<Link
										href="/the-ridges"
										class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
									>
										The Ridges
									</Link>
									<Link
										href="/summerlin-west"
										class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
									>
										Summerlin West
									</Link>
									<Link
										href="/properties"
										class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
									>
										All Properties
									</Link>
								</div>
							</div>
						</div>
						<Link
							href="/services"
							class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
						>
							Services
						</Link>
						<Link
							href="/about"
							class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
						>
							About
						</Link>
						<Link
							href="/testimonials"
							class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
						>
							Testimonials
						</Link>
						<Link
							href="/contact"
							class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
						>
							Contact
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						class="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
						onClick$={toggleMobileMenu}
					>
						{isMobileMenuOpen.value ? (
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
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
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
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen.value && (
					<div class="lg:hidden border-t border-gray-200 py-4">
						<div class="space-y-2">
							<Link
								href="/"
								class="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Home
							</Link>
							<div class="space-y-1 pl-4">
								<div class="text-sm font-semibold text-gray-500 uppercase tracking-wide">
									Communities
								</div>
								<Link
									href="/red-rock-country-club"
									class="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
									onClick$={() => (isMobileMenuOpen.value = false)}
								>
									Red Rock Country Club
								</Link>
								<Link
									href="/the-ridges"
									class="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
									onClick$={() => (isMobileMenuOpen.value = false)}
								>
									The Ridges
								</Link>
								<Link
									href="/summerlin-west"
									class="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
									onClick$={() => (isMobileMenuOpen.value = false)}
								>
									Summerlin West
								</Link>
								<Link
									href="/properties"
									class="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
									onClick$={() => (isMobileMenuOpen.value = false)}
								>
									All Properties
								</Link>
							</div>
							<Link
								href="/services"
								class="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Services
							</Link>
							<Link
								href="/about"
								class="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								About
							</Link>
							<Link
								href="/testimonials"
								class="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Testimonials
							</Link>
							<Link
								href="/contact"
								class="block py-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
								onClick$={() => (isMobileMenuOpen.value = false)}
							>
								Contact Dr. Duffy
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
});
