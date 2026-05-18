import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Breadcrumb } from "~/components/Breadcrumb";
import { CommunityComparison } from "~/components/CommunityComparison";
import { ServiceCard } from "~/components/ServiceCard";
import { FeaturedListings } from "~/components/sections/FeaturedListings";
import { SITE_IMAGES } from "~/config/site";

export default component$(() => {
	const communities = [
		{
			id: "red-rock-country-club",
			name: "Red Rock Country Club",
			priceRange: "$600K - $1.5M",
			homeTypes: ["Custom Estates", "Golf Course Homes", "Mountain View"],
			amenities: [
				"Championship Golf Course",
				"Resort-Style Clubhouse",
				"Fine Dining",
				"Tennis Courts",
				"24/7 Gated Security",
			],
			pros: ["Golf Course Access", "Luxury Amenities", "Privacy"],
			cons: ["Higher HOA Fees", "Limited Availability"],
			bestFor: "Golf Enthusiasts & Luxury Buyers",
			image: SITE_IMAGES.communities.redRockCountryClub,
		},
		{
			id: "the-ridges",
			name: "The Ridges",
			priceRange: "$600K - $1.2M",
			homeTypes: ["Executive Homes", "Modern Estates", "Contemporary"],
			amenities: [
				"Mountain Views",
				"Modern Architecture",
				"Executive Amenities",
				"Community Pool",
				"Walking Trails",
			],
			pros: ["Modern Design", "Mountain Views", "Executive Lifestyle"],
			cons: ["Higher Price Point", "Limited Inventory"],
			bestFor: "Executives & Modern Home Buyers",
			image: SITE_IMAGES.communities.theRidges,
		},
		{
			id: "summerlin-west",
			name: "Summerlin West",
			priceRange: "$500K - $800K",
			homeTypes: ["Master-Planned", "Family Homes", "Luxury Estates"],
			amenities: [
				"Red Rock Canyon Access",
				"Multiple Golf Courses",
				"Shopping Centers",
				"Top Schools",
				"Parks & Recreation",
			],
			pros: ["Master-Planned", "Great Schools", "Amenities"],
			cons: ["Higher Density", "Traffic"],
			bestFor: "Families & Master-Planned Living",
			image: SITE_IMAGES.communities.summerlinWest,
		},
		{
			id: "centennial-hills",
			name: "Centennial Hills",
			priceRange: "$400K - $700K",
			homeTypes: ["New Construction", "Family Homes", "Modern"],
			amenities: [
				"New Construction",
				"Family Parks",
				"Shopping Centers",
				"Top Schools",
				"Community Events",
			],
			pros: ["New Construction", "Family-Friendly", "Growth Potential"],
			cons: ["Developing Area", "Limited Amenities"],
			bestFor: "Families & First-Time Buyers",
			image: SITE_IMAGES.communities.centennialHills,
		},
		{
			id: "lone-mountain",
			name: "Lone Mountain",
			priceRange: "$450K - $750K",
			homeTypes: ["Custom Homes", "Mountain Living", "Unique Architecture"],
			amenities: [
				"Mountain Views",
				"Hiking Trails",
				"Custom Architecture",
				"Privacy",
				"Natural Beauty",
			],
			pros: ["Mountain Living", "Privacy", "Custom Options"],
			cons: ["Limited Amenities", "Remote Location"],
			bestFor: "Nature Lovers & Privacy Seekers",
			image: SITE_IMAGES.communities.loneMountain,
		},
		{
			id: "north-las-vegas",
			name: "North Las Vegas",
			priceRange: "$350K - $600K",
			homeTypes: [
				"New Construction",
				"Investment Properties",
				"Affordable Luxury",
			],
			amenities: [
				"New Developments",
				"Growing Amenities",
				"Investment Potential",
				"Affordable Options",
				"Future Growth",
			],
			pros: ["Affordable", "Growth Potential", "New Construction"],
			cons: ["Developing Area", "Limited Amenities"],
			bestFor: "Investors & Budget-Conscious Buyers",
			image: SITE_IMAGES.communities.northLasVegas,
		},
	];

	return (
		<div class="min-h-screen bg-gray-50">
			{/* Breadcrumb Navigation */}
			<Breadcrumb
				items={[
					{ label: "Home", href: "/" },
					{ label: "Neighborhoods", href: "/neighborhoods" },
				]}
			/>

			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Las Vegas Luxury Neighborhoods
						</h1>
						<p class="text-xl text-blue-100">
							Discover the perfect community for your lifestyle and budget
						</p>
					</div>
				</div>
			</section>

			{/* Advanced Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Search Properties by Neighborhood
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Find luxury homes in specific communities with our advanced search
							tool. Filter by neighborhood, price range, and amenities.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* Community Comparison Tool */}
			<CommunityComparison communities={communities} />

			{/* Featured Listings */}
			<FeaturedListings
				title="Current Luxury Listings Across All Communities"
				subtitle="Explore available luxury properties across Las Vegas's most prestigious neighborhoods. From golf course estates to modern family homes, find your perfect community match."
				ctaText="Schedule Multi-Community Tour"
				ctaLink="/contact"
			/>

			{/* Neighborhood Services */}
			<section class="py-16 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Neighborhood-Specific Services
						</h2>
						<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<ServiceCard
								title="Community Analysis"
								description="Detailed analysis of each neighborhood's market trends, amenities, and investment potential"
								icon="📊"
							/>
							<ServiceCard
								title="Multi-Community Tours"
								description="Compare multiple neighborhoods in a single day to find your perfect match"
								icon="🚗"
							/>
							<ServiceCard
								title="Neighborhood Matching"
								description="Personalized recommendations based on your lifestyle, budget, and preferences"
								icon="🎯"
							/>
							<ServiceCard
								title="Market Comparisons"
								description="Side-by-side comparison of property values, appreciation rates, and market trends"
								icon="📈"
							/>
							<ServiceCard
								title="Amenity Mapping"
								description="Detailed maps showing proximity to schools, shopping, dining, and recreational facilities"
								icon="🗺️"
							/>
							<ServiceCard
								title="Investment Analysis"
								description="ROI analysis and investment potential for each neighborhood and property type"
								icon="💰"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Dr. Duffy for Neighborhood Selection */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Why Choose Dr. Jan Duffy for Neighborhood Selection?
						</h2>
						<div class="grid md:grid-cols-2 gap-8">
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									30+ Years Local Expertise
								</h3>
								<p class="text-gray-700 mb-4">
									Dr. Duffy has witnessed the evolution of Las Vegas
									neighborhoods over three decades, providing insider knowledge
									of market trends, development plans, and community changes.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Deep knowledge of all luxury communities</li>
									<li>• Understanding of future development plans</li>
									<li>• Historical market trend analysis</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Personalized Matching
								</h3>
								<p class="text-gray-700 mb-4">
									Every client receives personalized neighborhood
									recommendations based on their lifestyle, budget, family
									needs, and long-term goals.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Lifestyle compatibility assessment</li>
									<li>• Budget optimization strategies</li>
									<li>• Long-term investment planning</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="py-16 bg-blue-600 text-white">
				<div class="container mx-auto px-4 text-center">
					<h2 class="text-3xl font-bold mb-4">
						Ready to Find Your Perfect Neighborhood?
					</h2>
					<p class="text-xl mb-8">
						Let Dr. Jan Duffy guide you to the community that matches your
						lifestyle and investment goals
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
							Schedule Neighborhood Consultation
						</a>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Las Vegas Luxury Neighborhoods | Dr. Jan Duffy | Community Comparison Guide",
	meta: [
		{
			name: "description",
			content:
				"Compare Las Vegas luxury neighborhoods with Dr. Jan Duffy. Expert analysis of Red Rock Country Club, The Ridges, Summerlin West, Centennial Hills, Lone Mountain, and North Las Vegas communities.",
		},
		{
			name: "keywords",
			content:
				"Las Vegas luxury neighborhoods, community comparison, Red Rock Country Club, The Ridges, Summerlin West, Centennial Hills, Lone Mountain, North Las Vegas, Dr. Jan Duffy",
		},
		{
			property: "og:title",
			content:
				"Las Vegas Luxury Neighborhoods | Dr. Jan Duffy | Community Comparison Guide",
		},
		{
			property: "og:description",
			content:
				"Compare luxury neighborhoods in Las Vegas with expert guidance from Dr. Jan Duffy.",
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
