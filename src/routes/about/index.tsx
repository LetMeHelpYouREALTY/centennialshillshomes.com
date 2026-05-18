import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { OptimizedImage } from "~/components/OptimizedImage";
import { SITE, SITE_IMAGES } from "~/config/site";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="relative text-white py-20 bg-gradient-to-r from-blue-700 to-blue-900">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<OptimizedImage
							src={SITE_IMAGES.agentHero}
							alt={`${SITE.agentName} - Las Vegas luxury REALTOR`}
							width={176}
							height={176}
							priority
							className="mx-auto mb-6 w-36 h-36 rounded-full border-4 border-white/80 shadow-lg"
						/>
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							About {SITE.agentName}
						</h1>
						<p class="text-xl text-blue-100">
							Top 1% Las Vegas REALTOR® | Luxury Real Estate Specialist
						</p>
					</div>
				</div>
			</section>

			{/* Advanced Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Ready to Work with Dr. Duffy?
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Start your luxury home search with Dr. Jan Duffy's advanced
							property finder. Find your perfect home in Las Vegas's most
							prestigious communities.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* About Content */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<div class="bg-white rounded-lg shadow-lg p-8 mb-8">
							<h2 class="text-3xl font-bold mb-6 text-gray-800">
								Professional Background
							</h2>
							<p class="text-lg text-gray-700 mb-6">
								Dr. Jan Duffy brings over 30 years of research expertise to the
								Las Vegas luxury real estate market, specializing in West
								Summerlin's premier neighborhoods including Red Rock Country
								Club, The Ridges, and Summerlin West communities. As a Top 1%
								Las Vegas REALTOR®, Dr. Duffy provides unmatched insight into
								luxury homes ranging from $400K to $750K.
							</p>
							<p class="text-lg text-gray-700 mb-6">
								Her expertise extends to serving California equity buyers and
								corporate relocations, offering same-day showings and
								complimentary market analysis. Dr. Duffy is available 24/7 for
								executive clients and luxury home investments, making her the
								preferred choice for discerning buyers and sellers.
							</p>
						</div>

						<div class="grid md:grid-cols-2 gap-8">
							<div class="bg-white rounded-lg shadow-lg p-8">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Education & Certifications
								</h3>
								<ul class="space-y-3 text-gray-700">
									<li>• Doctorate in Business Administration</li>
									<li>• Licensed Real Estate Broker</li>
									<li>• Certified Residential Specialist (CRS)</li>
									<li>• Accredited Buyer's Representative (ABR)</li>
									<li>• Graduate Realtor Institute (GRI)</li>
								</ul>
							</div>

							<div class="bg-white rounded-lg shadow-lg p-8">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Areas of Expertise
								</h3>
								<ul class="space-y-3 text-gray-700">
									<li>• Red Rock Country Club Luxury Homes</li>
									<li>• The Ridges Executive Properties</li>
									<li>• Summerlin West Communities</li>
									<li>• California Equity Buyer Relocations</li>
									<li>• Corporate Executive Services</li>
								</ul>
							</div>
						</div>

						<div class="bg-blue-50 rounded-lg p-8 mt-8">
							<h3 class="text-2xl font-bold mb-4 text-gray-800">
								Why Choose Dr. Duffy?
							</h3>
							<div class="grid md:grid-cols-2 gap-6">
								<div>
									<h4 class="font-semibold text-gray-800 mb-2">
										Luxury Market Expertise
									</h4>
									<p class="text-gray-700">
										Deep understanding of West Summerlin luxury market trends
										and property values.
									</p>
								</div>
								<div>
									<h4 class="font-semibold text-gray-800 mb-2">
										24/7 Availability
									</h4>
									<p class="text-gray-700">
										Available around the clock for executive clients and urgent
										transactions.
									</p>
								</div>
								<div>
									<h4 class="font-semibold text-gray-800 mb-2">
										Same-Day Showings
									</h4>
									<p class="text-gray-700">
										Flexible scheduling with same-day property showings for busy
										executives.
									</p>
								</div>
								<div>
									<h4 class="font-semibold text-gray-800 mb-2">
										Complimentary Analysis
									</h4>
									<p class="text-gray-700">
										Free market analysis and property valuation for all clients.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"About Dr. Jan Duffy | Top 1% Las Vegas REALTOR® | 30+ Years Luxury Real Estate Expertise",
	meta: [
		{
			name: "description",
			content:
				"Meet Dr. Jan Duffy, Top 1% Las Vegas REALTOR® with 30+ years expertise in luxury homes $400K-$750K. Specializing in Red Rock Country Club, The Ridges & Summerlin West. Available 24/7 for California equity buyers & corporate relocations. Same-day showings & complimentary market analysis.",
		},
		{
			name: "keywords",
			content:
				"Dr. Jan Duffy biography, Top 1% Las Vegas REALTOR, luxury real estate expert, Red Rock Country Club specialist, The Ridges expert, Summerlin West agent, California equity buyers, corporate relocations, 30 years experience, luxury homes Las Vegas",
		},
		{
			property: "og:title",
			content:
				"About Dr. Jan Duffy | Top 1% Las Vegas REALTOR® | 30+ Years Luxury Real Estate Expertise",
		},
		{
			property: "og:description",
			content:
				"Top 1% Las Vegas REALTOR® with 30+ years expertise in luxury homes $400K-$750K. Red Rock Country Club, The Ridges & Summerlin West specialist. Available 24/7.",
		},
		{
			property: "og:type",
			content: "profile",
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
