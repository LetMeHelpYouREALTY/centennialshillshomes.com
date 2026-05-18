import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Breadcrumb } from "~/components/Breadcrumb";
import { OptimizedImage } from "~/components/OptimizedImage";
import { FeaturedListings } from "~/components/sections/FeaturedListings";
import { SITE, SITE_IMAGES } from "~/config/site";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Breadcrumb Navigation */}
			<Breadcrumb
				items={[
					{ label: "Home", href: "/" },
					{ label: "Properties", href: "/properties" },
				]}
			/>

			<section
				class="relative text-white py-20 bg-cover bg-center"
				style={`background-image: linear-gradient(to right, rgba(37, 99, 235, 0.9), rgba(30, 64, 175, 0.92)), url('${SITE_IMAGES.communities.lasVegasLuxury}');`}
			>
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Luxury Properties
						</h1>
						<p class="text-xl text-blue-100">
							Discover premium MLS listings in Centennial Hills and northwest
							Las Vegas with {SITE.agentName}
						</p>
					</div>
				</div>
			</section>

			{/* Advanced Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Advanced Property Search
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Use our advanced search tool to find your perfect luxury home with
							detailed filters and criteria.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Listings - Browse all available properties */}
			<FeaturedListings
				title="Browse All Available Luxury Properties in Las Vegas"
				subtitle="Explore comprehensive MLS listings across Summerlin, Red Rock Country Club, The Ridges, and Centennial Hills. Updated in real-time with the latest market activity."
				ctaText="Schedule Private Property Tours"
				ctaLink="/contact"
			/>

			{/* Filter Section */}
			<section class="py-8 bg-white shadow-sm">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<div class="grid md:grid-cols-4 gap-4">
							<select class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
								<option>All Communities</option>
								<option>Red Rock Country Club</option>
								<option>The Ridges</option>
								<option>Summerlin West</option>
								<option>Summerlin North</option>
								<option>Centennial Hills</option>
							</select>
							<select class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
								<option>Price Range</option>
								<option>$400K - $500K</option>
								<option>$500K - $600K</option>
								<option>$600K - $750K</option>
								<option>$750K+</option>
							</select>
							<select class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
								<option>Bedrooms</option>
								<option>3+ Bedrooms</option>
								<option>4+ Bedrooms</option>
								<option>5+ Bedrooms</option>
							</select>
							<button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
								Search Properties
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="py-16 bg-blue-600 text-white">
				<div class="container mx-auto px-4 text-center">
					<h2 class="text-3xl font-bold mb-4">
						Don't See What You're Looking For?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for exclusive off-market luxury properties
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="tel:+17029031952"
							class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
						>
							Call (702) 903-1952
						</a>
						<a
							href="/contact"
							class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
						>
							Request Custom Search
						</a>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Luxury Properties Las Vegas | Red Rock Country Club & The Ridges Homes | Dr. Jan Duffy",
	meta: [
		{
			name: "description",
			content:
				"Browse luxury properties in Red Rock Country Club, The Ridges & Summerlin West with Dr. Jan Duffy, Top 1% Las Vegas REALTOR®. Luxury homes $400K-$750K with same-day showings. California equity buyers & corporate relocations welcome.",
		},
		{
			name: "keywords",
			content:
				"luxury properties Las Vegas, Red Rock Country Club homes, The Ridges real estate, Summerlin West luxury homes, Dr. Jan Duffy, luxury homes $400K-$750K, California equity buyers, corporate relocations, same-day showings, luxury real estate Las Vegas",
		},
		{
			property: "og:title",
			content:
				"Luxury Properties Las Vegas | Red Rock Country Club & The Ridges Homes | Dr. Jan Duffy",
		},
		{
			property: "og:description",
			content:
				"Top 1% Las Vegas REALTOR® showcasing luxury properties in Red Rock Country Club, The Ridges & Summerlin West. Same-day showings available.",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			name: "robots",
			content: "index, follow",
		},
		{
			name: "author",
			content: "Dr. Jan Duffy",
		},
		{
			name: "geo.region",
			content: "US-NV",
		},
		{
			name: "geo.placename",
			content: "Las Vegas",
		},
	],
};
