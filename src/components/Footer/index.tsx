import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { SITE, SITE_IMAGES } from "~/config/site";

export interface FooterProps {}

export const Footer = component$<FooterProps>((props) => {
	return (
		<footer class="bg-gray-900 text-white">
			{/* Main Footer Content */}
			<div class="container mx-auto px-4 py-16">
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Company Info */}
					<div class="lg:col-span-1">
						<div class="flex items-center space-x-3 mb-6">
							<img
								src={SITE_IMAGES.logo}
								alt={`${SITE.shortName} - ${SITE.agentName}`}
								width={48}
								height={48}
								class="h-12 w-12 object-contain bg-white rounded-lg p-1"
							/>
							<div>
								<div class="text-xl font-bold">{SITE.shortName}</div>
								<div class="text-sm text-gray-400">
									{SITE.agentName} | Top 1% REALTOR®
								</div>
							</div>
						</div>
						<div class="space-y-2">
							<div class="flex items-center text-gray-400">
								<span class="mr-2">📞</span>
								<a
									href={`tel:${SITE.phoneTel}`}
									class="hover:text-white transition-colors"
								>
									{SITE.phone}
								</a>
							</div>
							<div class="flex items-center text-gray-400">
								<span class="mr-2">✉️</span>
								<a
									href={`mailto:${SITE.email}`}
									class="hover:text-white transition-colors text-sm"
								>
									{SITE.email}
								</a>
							</div>
							<div class="flex items-center text-gray-400">
								<span class="mr-2">📍</span>
								<address class="not-italic">
									{SITE.address.streetAddress}, {SITE.address.addressLocality},{" "}
									{SITE.address.addressRegion} {SITE.address.postalCode}
								</address>
							</div>
							<div class="flex items-center text-gray-400">
								<span class="mr-2">⏰</span>
								<span>Daily 6:00 AM – 9:00 PM</span>
							</div>
							<div class="flex flex-wrap gap-3 pt-2">
								<a
									href={SITE.directionsUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="text-amber-400 hover:text-amber-300 text-sm font-medium"
								>
									Directions
								</a>
								<Link
									href="/market-analysis"
									class="text-amber-400 hover:text-amber-300 text-sm font-medium"
								>
									Home value
								</Link>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 class="text-lg font-semibold mb-6">Quick Links</h3>
						<ul class="space-y-3">
							<li>
								<a
									href="/"
									class="text-gray-400 hover:text-white transition-colors"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="/about"
									class="text-gray-400 hover:text-white transition-colors"
								>
									About Dr. Duffy
								</a>
							</li>
							<li>
								<a
									href="/neighborhoods"
									class="text-gray-400 hover:text-white transition-colors"
								>
									Neighborhoods
								</a>
							</li>
							<li>
								<a
									href="/contact"
									class="text-gray-400 hover:text-white transition-colors"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="/testimonials"
									class="text-gray-400 hover:text-white transition-colors"
								>
									Testimonials
								</a>
							</li>
						</ul>
					</div>

					{/* Communities */}
					<div>
						<h3 class="text-lg font-semibold mb-6">Communities</h3>
						<ul class="space-y-3">
							<li>
								<a
									href="/red-rock-country-club"
									class="text-gray-400 hover:text-white transition-colors"
								>
									Red Rock Country Club
								</a>
							</li>
							<li>
								<a
									href="/the-ridges"
									class="text-gray-400 hover:text-white transition-colors"
								>
									The Ridges
								</a>
							</li>
							<li>
								<a
									href="/summerlin-west"
									class="text-gray-400 hover:text-white transition-colors"
								>
									Summerlin West
								</a>
							</li>
							<li>
								<a
									href="/centennial-hills"
									class="text-gray-400 hover:text-white transition-colors"
								>
									Centennial Hills
								</a>
							</li>
							<li>
								<a
									href="/lone-mountain"
									class="text-gray-400 hover:text-white transition-colors"
								>
									Lone Mountain
								</a>
							</li>
							<li>
								<a
									href="/north-las-vegas"
									class="text-gray-400 hover:text-white transition-colors"
								>
									North Las Vegas
								</a>
							</li>
							<li>
								<a
									href="/properties"
									class="text-gray-400 hover:text-white transition-colors font-semibold"
								>
									All Properties
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Social Media & Certifications */}
			<div class="border-t border-gray-800">
				<div class="container mx-auto px-4 py-8">
					<div class="grid md:grid-cols-2 gap-8 items-center">
						{/* Social Media */}
						<div>
							<h4 class="text-lg font-semibold mb-4">Connect With Dr. Duffy</h4>
							<div class="flex space-x-4">
								<a
									href="https://www.facebook.com/SummerlinNewHomesBHHS"
									target="_blank"
									rel="noopener noreferrer"
									class="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
								</a>
								<a
									href="https://www.linkedin.com/company/california-to-vegas-homes"
									target="_blank"
									rel="noopener noreferrer"
									class="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</a>
								<a
									href="https://www.pinterest.com/DrJanDuffy/"
									target="_blank"
									rel="noopener noreferrer"
									class="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
									</svg>
								</a>
								<a
									href="https://www.instagram.com/drjanduffy/"
									target="_blank"
									rel="noopener noreferrer"
									class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
									</svg>
								</a>
								<a
									href="https://www.youtube.com/@DrDuffy"
									target="_blank"
									rel="noopener noreferrer"
									class="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
									</svg>
								</a>
							</div>
						</div>

						{/* Certifications */}
						<div>
							<h4 class="text-lg font-semibold mb-4">
								Certifications & Awards
							</h4>
							<div class="grid grid-cols-2 gap-4 text-sm">
								<div class="flex items-center">
									<span class="text-yellow-400 mr-2">🏆</span>
									<span class="text-gray-400">Top 1% REALTOR®</span>
								</div>
								<div class="flex items-center">
									<span class="text-blue-400 mr-2">📜</span>
									<span class="text-gray-400">Licensed Broker</span>
								</div>
								<div class="flex items-center">
									<span class="text-green-400 mr-2">⭐</span>
									<span class="text-gray-400">30+ Years Experience</span>
								</div>
								<div class="flex items-center">
									<span class="text-purple-400 mr-2">🎯</span>
									<span class="text-gray-400">Luxury Specialist</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div class="border-t border-gray-800">
				<div class="container mx-auto px-4 py-6">
					<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div class="text-gray-400 text-sm">
							© {new Date().getFullYear()} {SITE.agentName}. License{" "}
							{SITE.license} | {SITE.brokerage}
						</div>
						<div class="flex space-x-6 text-sm">
							<a
								href="/privacy"
								class="text-gray-400 hover:text-white transition-colors"
							>
								Privacy Policy
							</a>
							<a
								href="/terms"
								class="text-gray-400 hover:text-white transition-colors"
							>
								Terms of Service
							</a>
							<a
								href="/sitemap.xml"
								class="text-gray-400 hover:text-white transition-colors"
							>
								Sitemap
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
});
