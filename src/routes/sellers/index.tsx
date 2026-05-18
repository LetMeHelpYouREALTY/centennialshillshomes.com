import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Footer } from "~/components/Footer";
import { Navigation } from "~/components/Navigation";
import { SEOOptimizer } from "~/components/SEOOptimizer";
import { SITE_IMAGES, siteImageUrl } from "~/config/site";

export default component$(() => {
	return (
		<>
			<SEOOptimizer
				pageTitle="Sell Your Luxury Home | Dr. Jan Duffy | Centennial Homes"
				pageDescription="Sell your luxury home in Las Vegas with Dr. Jan Duffy, REALTOR®. 30+ years expertise in Red Rock Country Club, The Ridges, Summerlin West, and Centennial Hills. Free market analysis and premium marketing."
				canonicalUrl="https://www.centennialhillshomesforsale.com/sellers"
				keywords={[
					"sell luxury home Las Vegas",
					"Dr. Jan Duffy real estate",
					"Red Rock Country Club homes for sale",
					"The Ridges luxury homes",
					"Summerlin West real estate",
					"Centennial Hills homes",
					"luxury home marketing",
					"free market analysis",
					"top 1% REALTOR",
					"Las Vegas luxury real estate",
				]}
				imageUrl="siteImageUrl(SITE_IMAGES.services.luxuryHomeSellers)"
				breadcrumbItems={[
					{ name: "Home", url: "https://www.centennialhillshomesforsale.com" },
					{
						name: "Sellers",
						url: "https://www.centennialhillshomesforsale.com/sellers",
					},
				]}
			/>

			<Navigation />

			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Sell Your Luxury Home
						</h1>
						<p class="text-xl text-blue-100">
							Maximize Your Home's Value with Dr. Jan Duffy's 30+ Years of
							Expertise
						</p>
					</div>
				</div>
			</section>

			{/* Market Analysis Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Get Your Free Market Analysis
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Discover your home's true market value with Dr. Jan Duffy's
							comprehensive analysis. Includes comparable sales, market trends,
							and pricing strategy.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Dr. Jan Duffy */}
			<section class="py-16 bg-gray-50">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<div class="text-center mb-12">
							<h2 class="text-4xl font-bold text-gray-800 mb-4">
								Why Choose Dr. Jan Duffy to Sell Your Luxury Home?
							</h2>
							<p class="text-xl text-gray-600">
								30+ years of research expertise and luxury real estate mastery
							</p>
						</div>
						<div class="grid md:grid-cols-3 gap-8">
							<div class="bg-white p-8 rounded-lg shadow-lg">
								<div class="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
									<span class="text-white text-2xl font-bold">1%</span>
								</div>
								<h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">
									Top 1% REALTOR®
								</h3>
								<p class="text-gray-600 text-center">
									Consistently ranked among Las Vegas's top luxury real estate
									professionals with proven results.
								</p>
							</div>
							<div class="bg-white p-8 rounded-lg shadow-lg">
								<div class="w-16 h-16 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
									<span class="text-white text-2xl font-bold">$500M+</span>
								</div>
								<h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">
									$500M+ Sold
								</h3>
								<p class="text-gray-600 text-center">
									Extensive track record of successful luxury home sales across
									Las Vegas's premier communities.
								</p>
							</div>
							<div class="bg-white p-8 rounded-lg shadow-lg">
								<div class="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
									<span class="text-white text-2xl font-bold">30+</span>
								</div>
								<h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">
									30+ Years Experience
								</h3>
								<p class="text-gray-600 text-center">
									Decades of research expertise and luxury real estate mastery
									in Las Vegas markets.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Selling Process */}
			<section class="py-16 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<div class="text-center mb-12">
							<h2 class="text-4xl font-bold text-gray-800 mb-4">
								Our Luxury Home Selling Process
							</h2>
							<p class="text-xl text-gray-600">
								Comprehensive approach to maximize your home's value and ensure
								a smooth transaction
							</p>
						</div>
						<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div class="text-center">
								<div class="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span class="text-white font-bold text-xl">1</span>
								</div>
								<h3 class="text-xl font-bold text-gray-800 mb-3">
									Market Analysis
								</h3>
								<p class="text-gray-600">
									Comprehensive evaluation of your home's value, market
									conditions, and pricing strategy.
								</p>
							</div>
							<div class="text-center">
								<div class="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span class="text-white font-bold text-xl">2</span>
								</div>
								<h3 class="text-xl font-bold text-gray-800 mb-3">
									Marketing Strategy
								</h3>
								<p class="text-gray-600">
									Premium marketing campaign including professional photography,
									virtual tours, and targeted advertising.
								</p>
							</div>
							<div class="text-center">
								<div class="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span class="text-white font-bold text-xl">3</span>
								</div>
								<h3 class="text-xl font-bold text-gray-800 mb-3">
									Showings & Negotiations
								</h3>
								<p class="text-gray-600">
									Expert handling of showings, offers, and negotiations to
									secure the best possible terms.
								</p>
							</div>
							<div class="text-center">
								<div class="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span class="text-white font-bold text-xl">4</span>
								</div>
								<h3 class="text-xl font-bold text-gray-800 mb-3">
									Closing Support
								</h3>
								<p class="text-gray-600">
									Complete transaction management from contract to closing,
									ensuring a seamless process.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Luxury Communities */}
			<section class="py-16 bg-gray-50">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<div class="text-center mb-12">
							<h2 class="text-4xl font-bold text-gray-800 mb-4">
								Luxury Communities We Serve
							</h2>
							<p class="text-xl text-gray-600">
								Specialized expertise in Las Vegas's most prestigious
								neighborhoods
							</p>
						</div>
						<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<Link href="/red-rock-country-club" class="group">
								<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
									<h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600">
										Red Rock Country Club
									</h3>
									<p class="text-gray-600">
										Premier golf course community with luxury estates and
										mountain views.
									</p>
								</div>
							</Link>
							<Link href="/the-ridges" class="group">
								<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
									<h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600">
										The Ridges
									</h3>
									<p class="text-gray-600">
										Exclusive gated community with custom homes and panoramic
										city views.
									</p>
								</div>
							</Link>
							<Link href="/summerlin-west" class="group">
								<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
									<h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600">
										Summerlin West
									</h3>
									<p class="text-gray-600">
										Master-planned community with luxury homes and resort-style
										amenities.
									</p>
								</div>
							</Link>
							<Link href="/centennial-hills" class="group">
								<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
									<h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600">
										Centennial Hills
									</h3>
									<p class="text-gray-600">
										Growing luxury community with new construction and
										established neighborhoods.
									</p>
								</div>
							</Link>
							<Link href="/lone-mountain" class="group">
								<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
									<h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600">
										Lone Mountain
									</h3>
									<p class="text-gray-600">
										Upscale community with luxury homes and mountain views.
									</p>
								</div>
							</Link>
							<Link href="/north-las-vegas" class="group">
								<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
									<h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600">
										North Las Vegas
									</h3>
									<p class="text-gray-600">
										Emerging luxury market with new developments and established
										communities.
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="py-16 bg-blue-600 text-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-4xl font-bold mb-6">
							Ready to Sell Your Luxury Home?
						</h2>
						<p class="text-xl mb-8">
							Get your free market analysis and discover how Dr. Jan Duffy can
							help you achieve the best possible price for your luxury home.
						</p>
						<div class="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="tel:+17029031952"
								class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300"
							>
								Call (702) 903-1952
							</a>
							<Link
								href="/contact"
								class="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-all duration-300"
							>
								Schedule Consultation
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
});

export const head: DocumentHead = {
	title: "Sell Your Luxury Home | Dr. Jan Duffy | Centennial Homes",
	meta: [
		{
			name: "description",
			content:
				"Sell your luxury home in Las Vegas with Dr. Jan Duffy, REALTOR®. 30+ years expertise in Red Rock Country Club, The Ridges, Summerlin West, and Centennial Hills. Free market analysis and premium marketing.",
		},
		{
			property: "og:title",
			content: "Sell Your Luxury Home | Dr. Jan Duffy | Centennial Homes",
		},
		{
			property: "og:description",
			content:
				"Sell your luxury home in Las Vegas with Dr. Jan Duffy, REALTOR®. 30+ years expertise in Red Rock Country Club, The Ridges, Summerlin West, and Centennial Hills. Free market analysis and premium marketing.",
		},
		{
			property: "og:url",
			content: "https://www.centennialhillshomesforsale.com/sellers",
		},
		{
			property: "og:image",
			content: "siteImageUrl(SITE_IMAGES.services.luxuryHomeSellers)",
		},
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "keywords",
			content:
				"sell luxury home Las Vegas, Dr. Jan Duffy real estate, Red Rock Country Club homes for sale, The Ridges luxury homes, Summerlin West real estate, Centennial Hills homes, luxury home marketing, free market analysis, top 1% REALTOR, Las Vegas luxury real estate",
		},
	],
};
