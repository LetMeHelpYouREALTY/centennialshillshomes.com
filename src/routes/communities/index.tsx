import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Footer } from "~/components/Footer";
import { LocalBusinessSchema } from "~/components/LocalBusinessSchema";
import { Navigation } from "~/components/Navigation";
import { SEOOptimizer } from "~/components/SEOOptimizer";
import { SITE_IMAGES, siteImageUrl } from "~/config/site";

export default component$(() => {
	return (
		<>
			{/* SEO Optimization */}
			<SEOOptimizer
				pageTitle="Las Vegas Luxury Communities | Centennial Homes | Dr. Jan Duffy REALTOR®"
				pageDescription="Explore Las Vegas luxury communities with Centennial Homes. Dr. Jan Duffy specializes in Red Rock Country Club, The Ridges, Summerlin West, Centennial Hills, Lone Mountain, and North Las Vegas luxury real estate."
				canonicalUrl="https://www.centennialhillshomesforsale.com/communities"
				keywords={[
					"Las Vegas luxury communities",
					"Red Rock Country Club",
					"The Ridges Las Vegas",
					"Summerlin West",
					"Centennial Hills",
					"Lone Mountain Las Vegas",
					"North Las Vegas luxury",
					"Centennial Homes",
					"Dr. Jan Duffy",
					"luxury real estate Las Vegas",
				]}
				imageUrl="siteImageUrl(SITE_IMAGES.communities.lasVegasLuxury)"
				breadcrumbItems={[
					{ name: "Home", url: "https://www.centennialhillshomesforsale.com" },
					{
						name: "Communities",
						url: "https://www.centennialhillshomesforsale.com/communities",
					},
				]}
			/>

			{/* Navigation */}
			<Navigation />

			{/* Local Business Schema */}
			<LocalBusinessSchema
				businessName="Centennial Homes | Dr. Jan Duffy Luxury Real Estate"
				description="Centennial Homes offers premium luxury real estate services in Las Vegas with Dr. Jan Duffy, REALTOR®. 30+ years expertise specializing in Red Rock Country Club, The Ridges, Summerlin West, and Centennial Hills. Top 1% luxury market leader."
				address={{
					streetAddress: "1490 Center Crossing Rd",
					addressLocality: "Las Vegas",
					addressRegion: "NV",
					postalCode: "89144",
					addressCountry: "US",
				}}
				phone="+17029031952"
				email="DrDuffy@CentennialHillsHomesForSale.com"
				website="https://www.centennialhillshomesforsale.com"
				hours={["Mo-Su 06:00-21:00"]}
				services={[
					"Luxury Home Sales",
					"California Equity Buyers",
					"Corporate Relocations",
					"Market Analysis",
					"Same-Day Showings",
					"Investment Properties",
					"Real Estate Consulting",
					"Property Valuation",
					"Luxury Property Marketing",
					"Executive Relocation Services",
				]}
				areasServed={[
					"Red Rock Country Club, Las Vegas, NV",
					"The Ridges, Las Vegas, NV",
					"Summerlin West, Las Vegas, NV",
					"Centennial Hills, Las Vegas, NV",
					"Lone Mountain, Las Vegas, NV",
					"North Las Vegas, NV",
				]}
				socialMedia={{
					linkedin:
						"https://www.linkedin.com/company/california-to-vegas-homes",
					instagram: "https://www.instagram.com/drjanduffy/",
					facebook: "https://www.facebook.com/SummerlinNewHomesBHHS",
					youtube: "https://www.youtube.com/@DrDuffy",
					pinterest: "https://www.pinterest.com/DrJanDuffy/",
				}}
				priceRange="$400K-$2M+"
				paymentAccepted={["Cash", "Check", "Credit Card", "Wire Transfer"]}
				currenciesAccepted="USD"
				foundingDate="1993-09-01"
				employee="Dr. Jan Duffy"
				logo="siteImageUrl(SITE_IMAGES.logoRaster)"
				image="siteImageUrl(SITE_IMAGES.agentHero)"
			/>

			{/* Hero Section */}
			<section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
				{/* Background Pattern */}
				<div class="absolute inset-0 opacity-10">
					<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
				</div>

				<div class="relative z-10 min-h-screen flex items-center justify-center py-20">
					<div class="max-w-6xl mx-auto px-4 text-center">
						<h1 class="text-4xl md:text-6xl font-bold text-white mb-8">
							Las Vegas Luxury{" "}
							<span class="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
								Communities
							</span>
						</h1>
						<p class="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
							Discover Las Vegas's most prestigious neighborhoods with Dr. Jan
							Duffy's expertise. From Red Rock Country Club to Centennial Hills,
							find your luxury home in the perfect community.
						</p>
						<div class="flex flex-col sm:flex-row gap-6 justify-center">
							<Link
								href="/properties"
								class="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-10 py-4 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
							>
								View All Properties
							</Link>
							<Link
								href="/contact"
								class="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
							>
								Schedule Community Tour
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Communities Overview */}
			<section class="py-24 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-7xl mx-auto">
						<div class="text-center mb-20">
							<h2 class="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
								Premier{" "}
								<span class="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
									Communities
								</span>
							</h2>
							<p class="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
								Centennial Homes specializes in Las Vegas's most exclusive
								neighborhoods, where luxury meets lifestyle and every home tells
								a story of success.
							</p>
						</div>

						<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{/* Red Rock Country Club */}
							<Link href="/red-rock-country-club" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-red-300 transform hover:-translate-y-2">
									<div class="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
										<span class="text-white font-bold text-xl">RR</span>
									</div>
									<h3 class="text-2xl font-bold text-slate-900 mb-4 text-center">
										Red Rock Country Club
									</h3>
									<p class="text-slate-600 mb-6 text-center">
										Premier golf course community with luxury estates and
										breathtaking mountain views. Exclusive gated living at its
										finest.
									</p>
									<div class="text-center">
										<div class="text-red-600 font-semibold group-hover:text-red-700">
											<span>Explore Red Rock Properties</span>
										</div>
									</div>
								</div>
							</Link>

							{/* The Ridges */}
							<Link href="/the-ridges" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 transform hover:-translate-y-2">
									<div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
										<span class="text-white font-bold text-xl">TR</span>
									</div>
									<h3 class="text-2xl font-bold text-slate-900 mb-4 text-center">
										The Ridges
									</h3>
									<p class="text-slate-600 mb-6 text-center">
										Exclusive gated community with custom homes and panoramic
										city views. Where luxury meets privacy and sophistication.
									</p>
									<div class="text-center">
										<div class="text-blue-600 font-semibold group-hover:text-blue-700">
											<span>Explore The Ridges Properties</span>
										</div>
									</div>
								</div>
							</Link>

							{/* Summerlin West */}
							<Link href="/summerlin-west" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-green-300 transform hover:-translate-y-2">
									<div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
										<span class="text-white font-bold text-xl">SW</span>
									</div>
									<h3 class="text-2xl font-bold text-slate-900 mb-4 text-center">
										Summerlin West
									</h3>
									<p class="text-slate-600 mb-6 text-center">
										Master-planned community with luxury homes and resort-style
										amenities. Perfect for families seeking the ultimate
										lifestyle.
									</p>
									<div class="text-center">
										<div class="text-green-600 font-semibold group-hover:text-green-700">
											<span>Explore Summerlin West Properties</span>
										</div>
									</div>
								</div>
							</Link>

							{/* Centennial Hills */}
							<Link href="/centennial-hills" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-purple-300 transform hover:-translate-y-2">
									<div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
										<span class="text-white font-bold text-xl">CH</span>
									</div>
									<h3 class="text-2xl font-bold text-slate-900 mb-4 text-center">
										Centennial Hills
									</h3>
									<p class="text-slate-600 mb-6 text-center">
										Growing luxury community with new construction and
										established neighborhoods. Modern living with mountain
										views.
									</p>
									<div class="text-center">
										<div class="text-purple-600 font-semibold group-hover:text-purple-700">
											<span>Explore Centennial Hills Properties</span>
										</div>
									</div>
								</div>
							</Link>

							{/* Lone Mountain */}
							<Link href="/lone-mountain" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-orange-300 transform hover:-translate-y-2">
									<div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
										<span class="text-white font-bold text-xl">LM</span>
									</div>
									<h3 class="text-2xl font-bold text-slate-900 mb-4 text-center">
										Lone Mountain
									</h3>
									<p class="text-slate-600 mb-6 text-center">
										Serene mountain community with custom estates and pristine
										natural surroundings. Privacy and luxury combined.
									</p>
									<div class="text-center">
										<div class="text-orange-600 font-semibold group-hover:text-orange-700">
											<span>Explore Lone Mountain Properties</span>
										</div>
									</div>
								</div>
							</Link>

							{/* North Las Vegas */}
							<Link href="/north-las-vegas" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-teal-300 transform hover:-translate-y-2">
									<div class="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
										<span class="text-white font-bold text-xl">NLV</span>
									</div>
									<h3 class="text-2xl font-bold text-slate-900 mb-4 text-center">
										North Las Vegas
									</h3>
									<p class="text-slate-600 mb-6 text-center">
										Emerging luxury market with new developments and established
										neighborhoods. Value and growth potential.
									</p>
									<div class="text-center">
										<div class="text-teal-600 font-semibold group-hover:text-teal-700">
											<span>Explore North Las Vegas Properties</span>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Community Comparison */}
			<section class="py-24 bg-gradient-to-br from-slate-50 to-white">
				<div class="container mx-auto px-4">
					<div class="max-w-7xl mx-auto">
						<div class="text-center mb-20">
							<h2 class="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
								Community{" "}
								<span class="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
									Comparison
								</span>
							</h2>
							<p class="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
								Compare Las Vegas luxury communities to find the perfect match
								for your lifestyle and investment goals.
							</p>
						</div>

						<div class="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
							<div class="overflow-x-auto">
								<table class="w-full">
									<thead>
										<tr class="border-b border-slate-200">
											<th class="text-left py-4 px-6 font-semibold text-slate-900">
												Community
											</th>
											<th class="text-left py-4 px-6 font-semibold text-slate-900">
												Price Range
											</th>
											<th class="text-left py-4 px-6 font-semibold text-slate-900">
												Home Types
											</th>
											<th class="text-left py-4 px-6 font-semibold text-slate-900">
												Key Features
											</th>
										</tr>
									</thead>
									<tbody class="divide-y divide-slate-100">
										<tr class="hover:bg-slate-50 transition-colors">
											<td class="py-4 px-6 font-medium text-slate-900">
												Red Rock Country Club
											</td>
											<td class="py-4 px-6 text-slate-600">$800K - $3M+</td>
											<td class="py-4 px-6 text-slate-600">
												Custom Estates, Luxury Homes
											</td>
											<td class="py-4 px-6 text-slate-600">
												Golf Course, Mountain Views, Gated
											</td>
										</tr>
										<tr class="hover:bg-slate-50 transition-colors">
											<td class="py-4 px-6 font-medium text-slate-900">
												The Ridges
											</td>
											<td class="py-4 px-6 text-slate-600">$600K - $2M+</td>
											<td class="py-4 px-6 text-slate-600">
												Custom Homes, Estates
											</td>
											<td class="py-4 px-6 text-slate-600">
												City Views, Privacy, Exclusive
											</td>
										</tr>
										<tr class="hover:bg-slate-50 transition-colors">
											<td class="py-4 px-6 font-medium text-slate-900">
												Summerlin West
											</td>
											<td class="py-4 px-6 text-slate-600">$500K - $1.5M</td>
											<td class="py-4 px-6 text-slate-600">
												Single Family, Townhomes
											</td>
											<td class="py-4 px-6 text-slate-600">
												Master Planned, Amenities, Family-Friendly
											</td>
										</tr>
										<tr class="hover:bg-slate-50 transition-colors">
											<td class="py-4 px-6 font-medium text-slate-900">
												Centennial Hills
											</td>
											<td class="py-4 px-6 text-slate-600">$400K - $1M</td>
											<td class="py-4 px-6 text-slate-600">
												New Construction, Established
											</td>
											<td class="py-4 px-6 text-slate-600">
												Growing Area, Mountain Views, Value
											</td>
										</tr>
										<tr class="hover:bg-slate-50 transition-colors">
											<td class="py-4 px-6 font-medium text-slate-900">
												Lone Mountain
											</td>
											<td class="py-4 px-6 text-slate-600">$700K - $2M+</td>
											<td class="py-4 px-6 text-slate-600">
												Custom Estates, Luxury Homes
											</td>
											<td class="py-4 px-6 text-slate-600">
												Mountain Living, Privacy, Natural
											</td>
										</tr>
										<tr class="hover:bg-slate-50 transition-colors">
											<td class="py-4 px-6 font-medium text-slate-900">
												North Las Vegas
											</td>
											<td class="py-4 px-6 text-slate-600">$300K - $800K</td>
											<td class="py-4 px-6 text-slate-600">
												New Developments, Established
											</td>
											<td class="py-4 px-6 text-slate-600">
												Growth Potential, Value, Emerging
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="py-24 bg-gradient-to-r from-amber-500 to-amber-600">
				<div class="container mx-auto px-4">
					<div class="max-w-5xl mx-auto text-center">
						<h2 class="text-4xl md:text-6xl font-bold text-white mb-8">
							Ready to Find Your{" "}
							<span class="text-slate-900">Perfect Community</span>?
						</h2>
						<p class="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
							Let Dr. Jan Duffy guide you through Las Vegas's most exclusive
							neighborhoods and find the luxury home that matches your
							lifestyle.
						</p>
						<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<a
								href="tel:+17029031952"
								class="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
							>
								Call (702) 903-1952
							</a>
							<Link
								href="/contact"
								class="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
							>
								Schedule Community Tour
							</Link>
						</div>
						<div class="mt-8 text-white/80 text-sm">
							<p>
								Free Community Analysis • Private Tours • 30+ Years Experience
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</>
	);
});

export const head: DocumentHead = {
	title:
		"Las Vegas Luxury Communities | Centennial Homes | Dr. Jan Duffy REALTOR®",
	meta: [
		{
			name: "description",
			content:
				"Explore Las Vegas luxury communities with Centennial Homes. Dr. Jan Duffy specializes in Red Rock Country Club, The Ridges, Summerlin West, Centennial Hills, Lone Mountain, and North Las Vegas luxury real estate.",
		},
		{
			property: "og:title",
			content:
				"Las Vegas Luxury Communities | Centennial Homes | Dr. Jan Duffy REALTOR®",
		},
		{
			property: "og:description",
			content:
				"Explore Las Vegas luxury communities with Centennial Homes. Dr. Jan Duffy specializes in Red Rock Country Club, The Ridges, Summerlin West, Centennial Hills, Lone Mountain, and North Las Vegas luxury real estate.",
		},
		{
			property: "og:url",
			content: "https://www.centennialhillshomesforsale.com/communities",
		},
		{
			property: "og:image",
			content: "siteImageUrl(SITE_IMAGES.communities.lasVegasLuxury)",
		},
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "keywords",
			content:
				"Las Vegas luxury communities, Red Rock Country Club, The Ridges Las Vegas, Summerlin West, Centennial Hills, Lone Mountain Las Vegas, North Las Vegas luxury, Centennial Homes, Dr. Jan Duffy, luxury real estate Las Vegas",
		},
	],
};
