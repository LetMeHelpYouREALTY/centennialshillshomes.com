import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

import { FAQPageSchema } from "~/components/FAQPageSchema";
import {
	communityLinks,
	InternalLinks,
	mainPageLinks,
} from "~/components/InternalLinks";
import { LocalBusinessSchema } from "~/components/LocalBusinessSchema";
import { OptimizedImage } from "~/components/OptimizedImage";
import { SEOOptimizer } from "~/components/SEOOptimizer";
import { AnswerSummary } from "~/components/sections/AnswerSummary";
import { FAQAccordion } from "~/components/sections/FAQAccordion";
import { FeaturedListings } from "~/components/sections/FeaturedListings";
import { LocalMapSection } from "~/components/sections/LocalMapSection";
import { ZipCodeHub } from "~/components/sections/ZipCodeHub";
import { TestimonialSlider } from "~/components/TestimonialSlider";
import {
	HOME_FAQ,
	HOME_SEO,
	SITE,
	SITE_IMAGES,
	siteImageUrl,
} from "~/config/site";

export default component$(() => {
	return (
		<>
			{/* SEO Optimization */}
			<SEOOptimizer
				pageTitle={HOME_SEO.title}
				pageDescription={HOME_SEO.description}
				canonicalUrl={SITE.url}
				keywords={[...HOME_SEO.keywords]}
				imageUrl={siteImageUrl(SITE_IMAGES.agentHero)}
				author={SITE.agentName}
				breadcrumbItems={[{ name: "Home", url: SITE.url }]}
			/>

			<FAQPageSchema items={[...HOME_FAQ]} />

			<LocalBusinessSchema
				businessName={SITE.name}
				description={HOME_SEO.description}
				address={{
					streetAddress: SITE.address.streetAddress,
					addressLocality: SITE.address.addressLocality,
					addressRegion: SITE.address.addressRegion,
					postalCode: SITE.address.postalCode,
					addressCountry: SITE.address.addressCountry,
				}}
				phone={SITE.phoneTel}
				email={SITE.email}
				website={SITE.url}
				hours={[...SITE.hours]}
				licenseNumber={SITE.license}
				geo={SITE.geo}
				services={[
					"Luxury Home Sales",
					"California Equity Buyers",
					"Corporate Relocations",
					"Market Analysis",
					"Same-Day Showings",
					"Investment Properties",
				]}
				areasServed={[...SITE.areasServed]}
				socialMedia={{
					linkedin:
						"https://www.linkedin.com/company/california-to-vegas-homes",
					instagram: "https://www.instagram.com/drjanduffy/",
					facebook: "https://www.facebook.com/SummerlinNewHomesBHHS",
					youtube: "https://www.youtube.com/@DrDuffy",
					pinterest: "https://www.pinterest.com/DrJanDuffy/",
				}}
				priceRange={SITE.priceRange}
				paymentAccepted={["Cash", "Check", "Credit Card", "Wire Transfer"]}
				currenciesAccepted="USD"
				foundingDate="1993-09-01"
				employee={SITE.agentName}
				logo={siteImageUrl(SITE_IMAGES.logoRaster)}
				image={siteImageUrl(SITE_IMAGES.agentHero)}
			/>

			{/* Hero */}
			<section class="hero-dark relative -mt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-28 pb-14 md:pt-32 md:pb-16">
				<div
					class="pointer-events-none absolute inset-0 opacity-40"
					aria-hidden="true"
					style="background-image: radial-gradient(circle at 15% 20%, rgba(251, 191, 36, 0.12), transparent 42%), radial-gradient(circle at 85% 75%, rgba(59, 130, 246, 0.1), transparent 45%);"
				/>
				<div class="relative z-10 container mx-auto px-4">
					<div class="mx-auto max-w-3xl text-center text-white">
						<OptimizedImage
							src={SITE_IMAGES.agentHero}
							alt={`${SITE.agentName} - Centennial Hills luxury real estate`}
							width={144}
							height={144}
							priority
							className="mx-auto mb-5 h-28 w-28 rounded-full border-4 border-amber-400/90 object-cover shadow-lg md:h-36 md:w-36"
						/>
						<p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 md:text-sm">
							Centennial Hills · Las Vegas · {SITE.zipCodes.join(" · ")}
						</p>
						<h1 class="mb-4 text-3xl font-bold leading-tight md:text-5xl">
							Centennial Hills Homes for Sale
						</h1>
						<p class="mb-8 text-base text-slate-200 md:text-lg">
							{SITE.agentName} · Top 1% REALTOR® · Same-day showings · Free
							market analysis
						</p>
						<div class="mb-10 flex flex-col justify-center gap-3 sm:flex-row">
							<a
								href={`tel:${SITE.phoneTel}`}
								class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-8 py-3 text-base font-bold text-slate-900 transition-colors hover:bg-amber-400"
							>
								Call {SITE.phone}
							</a>
							<Link
								href="/properties"
								class="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
							>
								Browse MLS Listings
							</Link>
						</div>
					</div>
					<div class="mx-auto grid max-w-3xl grid-cols-2 gap-3 md:gap-4">
						<Link
							href="/sellers"
							class="rounded-lg border border-white/20 bg-white/5 px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-white/10 md:text-sm"
						>
							List your home
						</Link>
						<Link
							href="/buyers"
							class="rounded-lg border border-white/20 bg-white/5 px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-white/10 md:text-sm"
						>
							Buy a home
						</Link>
						<Link
							href="/centennial-hills"
							class="rounded-lg border border-white/20 bg-white/5 px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-white/10 md:text-sm"
						>
							Centennial Hills
						</Link>
						<Link
							href="/communities"
							class="rounded-lg border border-white/20 bg-white/5 px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-white/10 md:text-sm"
						>
							Communities
						</Link>
					</div>
				</div>
			</section>

			<AnswerSummary />

			<section class="py-16 bg-slate-50 border-b border-slate-200">
				<div class="container mx-auto px-4 max-w-5xl text-center">
					<h2 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
						Your Centennial Hills Real Estate Expert
					</h2>
					<p class="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
						Buying or selling in Centennial Hills? {SITE.agentName}, a Top 1%
						Las Vegas REALTOR®, specializes in luxury homes in ZIP codes{" "}
						{SITE.zipCodes.join(", ")} with same-day showings and complimentary
						market analysis.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/properties"
							class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
						>
							Find Your Centennial Hills Home
						</Link>
						<Link
							href="/market-analysis"
							class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
						>
							Get Your Home Value
						</Link>
					</div>
				</div>
			</section>

			{/* Trust Indicators */}
			<section class="py-16 bg-white border-b border-slate-200">
				<div class="container mx-auto px-4">
					<div class="max-w-5xl mx-auto">
						<div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
							<div class="flex items-center space-x-2">
								<div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
									<span class="text-white text-sm font-bold">✓</span>
								</div>
								<span class="text-slate-700 font-medium">
									Licensed REALTOR®
								</span>
							</div>
							<div class="flex items-center space-x-2">
								<div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
									<span class="text-white text-sm font-bold">★</span>
								</div>
								<span class="text-slate-700 font-medium">Top 1% Producer</span>
							</div>
							<div class="flex items-center space-x-2">
								<div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
									<span class="text-white text-sm font-bold">★</span>
								</div>
								<span class="text-slate-700 font-medium">5-Star Reviews</span>
							</div>
							<div class="flex items-center space-x-2">
								<div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
									<span class="text-white text-sm font-bold">🔐</span>
								</div>
								<span class="text-slate-700 font-medium">
									Secure Transactions
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Advanced Search Widget */}
			<section class="py-24 bg-gradient-to-br from-slate-50 to-white">
				<div class="container mx-auto px-4">
					<div class="max-w-5xl mx-auto text-center">
						<div class="mb-16">
							<h2 class="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
								Find Your{" "}
								<span class="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
									Dream Home
								</span>
							</h2>
							<p class="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
								Discover luxury properties in Las Vegas's most prestigious
								communities with our advanced search technology.
							</p>
						</div>
						<div class="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200 min-h-[420px]">
							<realscout-advanced-search
								agent-encoded-id={SITE.realScoutAgentId}
							></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Listings */}
			<FeaturedListings />

			{/* Centennial Homes Excellence Section */}
			<section class="py-24 bg-gradient-to-r from-slate-900 to-slate-800 scroll-fade-in">
				<div class="container mx-auto px-4">
					<div class="max-w-7xl mx-auto">
						<div class="text-center mb-20">
							<h2 class="text-4xl md:text-6xl font-bold text-white mb-8">
								Centennial Homes{" "}
								<span class="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
									Excellence
								</span>
							</h2>
							<p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
								Dr. Jan Duffy brings decades of research expertise and luxury
								real estate mastery to every Centennial Homes transaction.
							</p>
						</div>
						<div class="grid md:grid-cols-4 gap-8">
							<div class="text-center">
								<h3 class="text-4xl font-bold text-white mb-2">30+ Years</h3>
								<p class="text-slate-400">
									Research & luxury real estate expertise
								</p>
							</div>
							<div class="text-center">
								<h3 class="text-4xl font-bold text-white mb-2">Top 1%</h3>
								<p class="text-slate-400">Las Vegas luxury market leader</p>
							</div>
							<div class="text-center">
								<h3 class="text-4xl font-bold text-white mb-2">5-Star</h3>
								<p class="text-slate-400">Client-rated service</p>
							</div>
							<div class="text-center">
								<h3 class="text-4xl font-bold text-white mb-2">24/7</h3>
								<p class="text-slate-400">Executive-level service</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Centennial Homes Services Section */}
			<section class="py-24 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-7xl mx-auto">
						<div class="text-center mb-20">
							<h2 class="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
								Centennial Homes{" "}
								<span class="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
									Services
								</span>
							</h2>
							<p class="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
								Premium real estate solutions by Dr. Jan Duffy, specializing in
								Las Vegas luxury communities including Red Rock Country Club,
								The Ridges, Summerlin West, and Centennial Hills.
							</p>
						</div>
						<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<Link href="/luxury-home-sales" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-300 transform hover:-translate-y-2">
									<h3 class="text-2xl font-bold text-slate-900 mb-4">
										Luxury Home Sales
									</h3>
									<p class="text-slate-600 mb-6">
										Expert guidance for high-end properties in Red Rock Country
										Club, The Ridges, and Summerlin West.
									</p>
									<div class="text-amber-600 font-semibold group-hover:text-amber-700">
										<span>Learn More</span>
									</div>
								</div>
							</Link>
							<Link href="/california-equity-buyers" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-300 transform hover:-translate-y-2">
									<h3 class="text-2xl font-bold text-slate-900 mb-4">
										California Equity Buyers
									</h3>
									<p class="text-slate-600 mb-6">
										Seamless relocation services for buyers leveraging
										California home equity.
									</p>
									<div class="text-amber-600 font-semibold group-hover:text-amber-700">
										<span>Learn More</span>
									</div>
								</div>
							</Link>
							<Link href="/corporate-relocations" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-300 transform hover:-translate-y-2">
									<h3 class="text-2xl font-bold text-slate-900 mb-4">
										Corporate Relocations
									</h3>
									<p class="text-slate-600 mb-6">
										Expert assistance for executives and professionals
										relocating to Las Vegas.
									</p>
									<div class="text-amber-600 font-semibold group-hover:text-amber-700">
										<span>Learn More</span>
									</div>
								</div>
							</Link>
							<Link href="/market-analysis" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-300 transform hover:-translate-y-2">
									<h3 class="text-2xl font-bold text-slate-900 mb-4">
										Market Analysis
									</h3>
									<p class="text-slate-600 mb-6">
										Receive a complimentary, in-depth market analysis for your
										luxury property.
									</p>
									<div class="text-amber-600 font-semibold group-hover:text-amber-700">
										<span>Learn More</span>
									</div>
								</div>
							</Link>
							<Link href="/same-day-showings" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-300 transform hover:-translate-y-2">
									<h3 class="text-2xl font-bold text-slate-900 mb-4">
										Same-Day Showings
									</h3>
									<p class="text-slate-600 mb-6">
										Flexible and prompt property viewings to fit your busy
										schedule.
									</p>
									<div class="text-amber-600 font-semibold group-hover:text-amber-700">
										<span>Learn More</span>
									</div>
								</div>
							</Link>
							<Link href="/investment-properties" class="group">
								<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-300 transform hover:-translate-y-2">
									<h3 class="text-2xl font-bold text-slate-900 mb-4">
										Investment Properties
									</h3>
									<p class="text-slate-600 mb-6">
										Identify lucrative real estate investment opportunities in
										the Las Vegas market.
									</p>
									<div class="text-amber-600 font-semibold group-hover:text-amber-700">
										<span>Learn More</span>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Luxury Communities Section */}
			<section class="py-24 bg-gradient-to-br from-slate-50 to-white">
				<div class="container mx-auto px-4">
					<div class="max-w-7xl mx-auto">
						<div class="text-center mb-20">
							<h2 class="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
								Las Vegas Luxury{" "}
								<span class="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
									Communities
								</span>
							</h2>
							<p class="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
								Centennial Homes specializes in Las Vegas's most prestigious
								neighborhoods, where luxury meets lifestyle.
							</p>
						</div>
						<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div class="text-center group">
								<div class="bg-gradient-to-br from-slate-100 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-300 transform hover:-translate-y-2">
									<div class="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
										<span class="text-white font-bold text-xl">RR</span>
									</div>
									<h3 class="text-xl font-bold text-slate-900 mb-3">
										Red Rock Country Club
									</h3>
									<p class="text-slate-600 mb-4">
										Premier golf course community with luxury estates and
										mountain views.
									</p>
									<div class="text-amber-600 font-semibold group-hover:text-amber-700">
										<span>Explore Properties</span>
									</div>
								</div>
							</div>
							<div class="text-center group">
								<div class="bg-gradient-to-br from-slate-100 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-300 transform hover:-translate-y-2">
									<div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
										<span class="text-white font-bold text-xl">TR</span>
									</div>
									<h3 class="text-xl font-bold text-slate-900 mb-3">
										The Ridges
									</h3>
									<p class="text-slate-600 mb-4">
										Exclusive gated community with custom homes and panoramic
										city views.
									</p>
									<div class="text-amber-600 font-semibold group-hover:text-amber-700">
										<span>Explore Properties</span>
									</div>
								</div>
							</div>
							<div class="text-center group">
								<div class="bg-gradient-to-br from-slate-100 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-300 transform hover:-translate-y-2">
									<div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
										<span class="text-white font-bold text-xl">SW</span>
									</div>
									<h3 class="text-xl font-bold text-slate-900 mb-3">
										Summerlin West
									</h3>
									<p class="text-slate-600 mb-4">
										Master-planned community with luxury homes and resort-style
										amenities.
									</p>
									<div class="text-amber-600 font-semibold group-hover:text-amber-700">
										<span>Explore Properties</span>
									</div>
								</div>
							</div>
							<div class="text-center group">
								<div class="bg-gradient-to-br from-slate-100 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-300 transform hover:-translate-y-2">
									<div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
										<span class="text-white font-bold text-xl">CH</span>
									</div>
									<h3 class="text-xl font-bold text-slate-900 mb-3">
										Centennial Hills
									</h3>
									<p class="text-slate-600 mb-4">
										Growing luxury community with new construction and
										established neighborhoods.
									</p>
									<div class="text-amber-600 font-semibold group-hover:text-amber-700">
										<span>Explore Properties</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Client Success Stories — see Testimonials for verified reviews */}
			<section class="hidden py-20 bg-gradient-to-r from-slate-900 to-slate-800">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<div class="text-center mb-16">
							<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
								Client{" "}
								<span class="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
									Success Stories
								</span>
							</h2>
							<p class="text-xl text-slate-300 max-w-2xl mx-auto">
								Real results from real clients who chose Centennial Homes and
								Dr. Jan Duffy for their luxury real estate journey.
							</p>
						</div>
						<div class="grid md:grid-cols-3 gap-8">
							<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
								<div class="text-amber-400 text-4xl font-bold mb-4">$2.1M</div>
								<h3 class="text-xl font-bold text-white mb-3">
									Red Rock Country Club Sale
								</h3>
								<p class="text-slate-300 mb-4">
									"Dr. Jan Duffy's market expertise helped us sell our luxury
									estate 15% above asking price in just 3 weeks."
								</p>
								<div class="text-sm text-slate-400">
									- Executive Couple, California
								</div>
							</div>
							<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
								<div class="text-amber-400 text-4xl font-bold mb-4">$1.8M</div>
								<h3 class="text-xl font-bold text-white mb-3">
									The Ridges Purchase
								</h3>
								<p class="text-slate-300 mb-4">
									"Centennial Homes made our relocation from Silicon Valley
									seamless. Found our dream home before we even moved."
								</p>
								<div class="text-sm text-slate-400">
									- Tech Executive, Bay Area
								</div>
							</div>
							<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
								<div class="text-amber-400 text-4xl font-bold mb-4">$1.2M</div>
								<h3 class="text-xl font-bold text-white mb-3">
									Summerlin West Investment
								</h3>
								<p class="text-slate-300 mb-4">
									"Dr. Jan Duffy's investment property analysis led to a 25% ROI
									in the first year. Exceptional market knowledge."
								</p>
								<div class="text-sm text-slate-400">
									- Investment Group, New York
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Slider */}
			<TestimonialSlider />

			<ZipCodeHub />

			<InternalLinks
				title="Las Vegas luxury communities"
				links={communityLinks}
				className="bg-gradient-to-br from-slate-50 to-white"
			/>

			<InternalLinks
				title="Explore our website"
				links={mainPageLinks}
				className="bg-white"
			/>

			<FAQAccordion items={HOME_FAQ} />

			<LocalMapSection />

			<section class="hidden py-20 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<div class="text-center mb-16">
							<h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
								Frequently Asked{" "}
								<span class="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
									Questions
								</span>
							</h2>
							<p class="text-xl text-slate-600 max-w-2xl mx-auto">
								Common questions about luxury real estate in Las Vegas with
								Centennial Homes and Dr. Jan Duffy.
							</p>
						</div>
						<div class="space-y-8">
							<div class="bg-slate-50 rounded-lg p-6">
								<h3 class="text-xl font-bold text-slate-900 mb-3">
									What luxury communities does Centennial Homes serve?
								</h3>
								<p class="text-slate-600">
									Centennial Homes specializes in Las Vegas luxury communities
									including Red Rock Country Club, The Ridges, Summerlin West,
									and Centennial Hills. Dr. Jan Duffy has extensive expertise in
									these premier neighborhoods.
								</p>
							</div>
							<div class="bg-slate-50 rounded-lg p-6">
								<h3 class="text-xl font-bold text-slate-900 mb-3">
									How much experience does Dr. Jan Duffy have?
								</h3>
								<p class="text-slate-600">
									Dr. Jan Duffy brings over 30 years of research expertise and
									luxury real estate mastery to every Centennial Homes
									transaction. She's a top 1% REALTOR® in the Las Vegas luxury
									market.
								</p>
							</div>
							<div class="bg-slate-50 rounded-lg p-6">
								<h3 class="text-xl font-bold text-slate-900 mb-3">
									What services does Centennial Homes offer?
								</h3>
								<p class="text-slate-600">
									Centennial Homes offers comprehensive luxury real estate
									services including luxury home sales, California equity buyer
									assistance, corporate relocations, market analysis, same-day
									showings, and investment property consulting.
								</p>
							</div>
							<div class="bg-slate-50 rounded-lg p-6">
								<h3 class="text-xl font-bold text-slate-900 mb-3">
									Do you offer free market analysis?
								</h3>
								<p class="text-slate-600">
									Yes, Centennial Homes provides complimentary market analysis
									for luxury properties. Dr. Jan Duffy's research background
									ensures detailed, accurate property valuations for informed
									decision-making.
								</p>
							</div>
							<div class="bg-slate-50 rounded-lg p-6">
								<h3 class="text-xl font-bold text-slate-900 mb-3">
									What price range do you work with?
								</h3>
								<p class="text-slate-600">
									Centennial Homes specializes in luxury properties ranging from
									$400K to $2M+ in Las Vegas's most prestigious communities. We
									cater to discerning clients seeking premium real estate
									solutions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Centennial Homes CTA Section */}
			<section class="py-24 bg-gradient-to-r from-amber-500 to-amber-600">
				<div class="container mx-auto px-4">
					<div class="max-w-5xl mx-auto text-center">
						<h2 class="text-4xl md:text-6xl font-bold text-white mb-8">
							Ready to Experience{" "}
							<span class="text-slate-900">Centennial Homes</span> Excellence?
						</h2>
						<p class="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
							Join hundreds of satisfied clients who chose Dr. Jan Duffy for
							their luxury real estate journey in Las Vegas.
						</p>
						<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<a
								href={`tel:${SITE.phoneTel}`}
								class="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
							>
								Call {SITE.phone}
							</a>
							<Link
								href="/contact"
								class="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
							>
								Schedule Consultation
							</Link>
						</div>
						<div class="mt-8 text-white/80 text-sm">
							<p>
								Free Market Analysis • Same-Day Showings • 30+ Years Experience
							</p>
						</div>
						<div class="mt-6 flex justify-center space-x-6">
							<div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
								<span class="text-white text-sm font-medium">
									Top 1% REALTOR®
								</span>
							</div>
							<div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
								<span class="text-white text-sm font-medium">
									5-Star Reviews
								</span>
							</div>
							<div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
								<span class="text-white text-sm font-medium">
									{SITE.brokerage}
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Floating Phone Button - Mobile Only */}
			<div class="fixed bottom-6 right-6 z-50 lg:hidden">
				<a
					href="tel:+17029031952"
					class="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
					aria-label="Call Centennial Homes (702) 903-1952"
				>
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
					</svg>
				</a>
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: HOME_SEO.title,
	meta: [
		{ name: "description", content: HOME_SEO.description },
		{ property: "og:title", content: HOME_SEO.title },
		{ property: "og:description", content: HOME_SEO.description },
		{ property: "og:url", content: SITE.url },
		{
			property: "og:image",
			content: siteImageUrl(SITE_IMAGES.agentHero),
		},
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "keywords", content: HOME_SEO.keywords.join(", ") },
	],
};
