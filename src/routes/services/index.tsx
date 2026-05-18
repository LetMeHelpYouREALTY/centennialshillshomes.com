import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ServiceCard } from "~/components/ServiceCard";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Luxury Real Estate Services
						</h1>
						<p class="text-xl text-blue-100">
							Expert Guidance for Discerning Buyers and Sellers in West
							Summerlin
						</p>
					</div>
				</div>
			</section>

			{/* Advanced Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Find Your Perfect Luxury Home
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Start your luxury home search with our advanced property finder.
							Filter by community, price range, amenities, and more.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Our Specialized Services
						</h2>
						<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<ServiceCard
								title="Luxury Home Sales"
								description="Specializing in luxury homes $400K-$750K in Red Rock Country Club, The Ridges, and Summerlin West communities"
								icon="🏆"
							/>
							<ServiceCard
								title="California Equity Buyers"
								description="Expert guidance for California equity buyers relocating to Las Vegas luxury communities with seamless transitions"
								icon="🌴"
							/>
							<ServiceCard
								title="Corporate Relocations"
								description="Comprehensive support for executive clients and corporate relocations with same-day showings and flexible scheduling"
								icon="🏢"
							/>
							<ServiceCard
								title="Market Analysis"
								description="Complimentary market analysis and property valuation for all luxury properties in West Summerlin"
								icon="📊"
							/>
							<ServiceCard
								title="Investment Properties"
								description="Strategic guidance for luxury real estate investments with detailed market insights and ROI analysis"
								icon="💰"
							/>
							<ServiceCard
								title="24/7 Availability"
								description="Available around the clock for urgent transactions and executive client needs with immediate response"
								icon="⏰"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section class="py-16 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Our Process
						</h2>
						<div class="grid md:grid-cols-3 gap-8">
							<div class="text-center">
								<div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-2xl font-bold text-blue-600">1</span>
								</div>
								<h3 class="text-xl font-semibold mb-3 text-gray-800">
									Initial Consultation
								</h3>
								<p class="text-gray-600">
									Free market analysis and property assessment tailored to your
									specific needs and budget
								</p>
							</div>
							<div class="text-center">
								<div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-2xl font-bold text-blue-600">2</span>
								</div>
								<h3 class="text-xl font-semibold mb-3 text-gray-800">
									Property Search
								</h3>
								<p class="text-gray-600">
									Curated selection of luxury properties with same-day showings
									and exclusive off-market opportunities
								</p>
							</div>
							<div class="text-center">
								<div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-2xl font-bold text-blue-600">3</span>
								</div>
								<h3 class="text-xl font-semibold mb-3 text-gray-800">
									Transaction Support
								</h3>
								<p class="text-gray-600">
									Complete transaction management from offer to closing with
									24/7 support throughout the process
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Specializations */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Community Specializations
						</h2>
						<div class="grid md:grid-cols-2 gap-8">
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Red Rock Country Club
								</h3>
								<p class="text-gray-700 mb-4">
									Exclusive gated community with championship golf course,
									luxury amenities, and custom estates ranging from $600K to
									$1M+.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Custom luxury homes</li>
									<li>• Golf course views</li>
									<li>• Resort-style amenities</li>
									<li>• Gated security</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									The Ridges
								</h3>
								<p class="text-gray-700 mb-4">
									Premier executive community featuring modern luxury homes with
									mountain views and high-end finishes.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Executive homes</li>
									<li>• Mountain views</li>
									<li>• Modern architecture</li>
									<li>• High-end finishes</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Summerlin West
								</h3>
								<p class="text-gray-700 mb-4">
									Established luxury community with mature landscaping,
									excellent schools, and diverse luxury home options.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Mature communities</li>
									<li>• Top-rated schools</li>
									<li>• Diverse home styles</li>
									<li>• Established amenities</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Centennial Hills
								</h3>
								<p class="text-gray-700 mb-4">
									Growing luxury community with new construction and resale
									opportunities, perfect for families and executives.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• New construction</li>
									<li>• Family-friendly</li>
									<li>• Growing community</li>
									<li>• Modern amenities</li>
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
						Ready to Experience Luxury Real Estate Service?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for personalized luxury real estate guidance
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
							Schedule Consultation
						</a>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Luxury Real Estate Services | Dr. Jan Duffy | Red Rock Country Club & The Ridges Specialist",
	meta: [
		{
			name: "description",
			content:
				"Professional luxury real estate services by Dr. Jan Duffy, Top 1% Las Vegas REALTOR®. Specializing in Red Rock Country Club, The Ridges & Summerlin West. California equity buyers & corporate relocations welcome. Same-day showings & complimentary market analysis.",
		},
		{
			name: "keywords",
			content:
				"luxury real estate services, Dr. Jan Duffy, Top 1% Las Vegas REALTOR, Red Rock Country Club specialist, The Ridges expert, Summerlin West agent, California equity buyers, corporate relocations, same-day showings, complimentary market analysis, luxury homes Las Vegas",
		},
		{
			property: "og:title",
			content:
				"Luxury Real Estate Services | Dr. Jan Duffy | Red Rock Country Club & The Ridges Specialist",
		},
		{
			property: "og:description",
			content:
				"Top 1% Las Vegas REALTOR® specializing in luxury real estate services. Red Rock Country Club, The Ridges & Summerlin West expert. Same-day showings available.",
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
