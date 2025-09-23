import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PropertyCard } from "~/components/PropertyCard";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Luxury Properties
						</h1>
						<p class="text-xl text-blue-100">
							Discover Premium Homes in West Summerlin's Most Exclusive
							Communities
						</p>
					</div>
				</div>
			</section>

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

			{/* Properties Grid */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-7xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Featured Luxury Properties
						</h2>
						<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<PropertyCard
								title="Red Rock Country Club Estate"
								price="$725,000"
								bedrooms="5"
								bathrooms="4"
								sqft="3,200"
								address="Red Rock Country Club, Las Vegas, NV"
								image="/api/placeholder/400/300"
							/>
							<PropertyCard
								title="The Ridges Executive Home"
								price="$650,000"
								bedrooms="4"
								bathrooms="3.5"
								sqft="2,800"
								address="The Ridges, Summerlin West, NV"
								image="/api/placeholder/400/300"
							/>
							<PropertyCard
								title="Summerlin West Luxury"
								price="$575,000"
								bedrooms="4"
								bathrooms="3"
								sqft="2,500"
								address="Summerlin West, Las Vegas, NV"
								image="/api/placeholder/400/300"
							/>
							<PropertyCard
								title="Centennial Hills Estate"
								price="$525,000"
								bedrooms="4"
								bathrooms="3"
								sqft="2,400"
								address="Centennial Hills, Las Vegas, NV"
								image="/api/placeholder/400/300"
							/>
							<PropertyCard
								title="Lone Mountain Luxury"
								price="$600,000"
								bedrooms="4"
								bathrooms="3.5"
								sqft="2,600"
								address="Lone Mountain, Las Vegas, NV"
								image="/api/placeholder/400/300"
							/>
							<PropertyCard
								title="North Las Vegas Executive"
								price="$475,000"
								bedrooms="3"
								bathrooms="2.5"
								sqft="2,200"
								address="North Las Vegas, NV"
								image="/api/placeholder/400/300"
							/>
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
