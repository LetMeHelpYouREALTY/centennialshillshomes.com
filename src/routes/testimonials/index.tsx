import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { TestimonialCard } from "~/components/TestimonialCard";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Client Testimonials
						</h1>
						<p class="text-xl text-blue-100">
							What Our Luxury Clients Say About Dr. Jan Duffy
						</p>
					</div>
				</div>
			</section>

			{/* Advanced Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Ready to Find Your Dream Home?
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Join our satisfied clients and start your luxury home search
							today. Use our advanced property finder to discover homes in Las
							Vegas's most prestigious communities.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Grid */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Luxury Real Estate Success Stories
						</h2>
						<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<TestimonialCard
								name="Sarah Chen"
								rating={5}
								text="Dr. Duffy's expertise in luxury properties is unmatched. She helped us find our dream home in Red Rock Country Club within weeks of our initial consultation. Her attention to detail and market knowledge made all the difference."
								location="Red Rock Country Club"
							/>
							<TestimonialCard
								name="Michael Rodriguez"
								rating={5}
								text="As California equity buyers, we needed someone who understood our unique situation. Dr. Duffy exceeded all expectations, providing seamless guidance through our relocation process. Highly recommend!"
								location="The Ridges"
							/>
							<TestimonialCard
								name="Jennifer Thompson"
								rating={5}
								text="Professional, knowledgeable, and available 24/7. Dr. Duffy made our corporate relocation seamless and stress-free. Her same-day showing capability was exactly what we needed as busy executives."
								location="Summerlin West"
							/>
							<TestimonialCard
								name="David Kim"
								rating={5}
								text="Dr. Duffy's complimentary market analysis was incredibly detailed and accurate. She helped us sell our luxury home above asking price in just 3 weeks. Her marketing strategies are top-notch."
								location="Centennial Hills"
							/>
							<TestimonialCard
								name="Lisa Martinez"
								rating={5}
								text="From start to finish, Dr. Duffy provided exceptional service. Her understanding of the luxury market and ability to negotiate on our behalf resulted in the perfect home for our family."
								location="Lone Mountain"
							/>
							<TestimonialCard
								name="Robert Johnson"
								rating={5}
								text="Dr. Duffy's investment property guidance was invaluable. She helped us identify the perfect luxury rental property that has exceeded our ROI expectations. Her market insights are spot-on."
								location="North Las Vegas"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section class="py-16 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Client Success Metrics
						</h2>
						<div class="grid md:grid-cols-4 gap-8 text-center">
							<div>
								<div class="text-4xl font-bold text-blue-600 mb-2">30+</div>
								<div class="text-gray-600">Years Experience</div>
							</div>
							<div>
								<div class="text-4xl font-bold text-blue-600 mb-2">Top 1%</div>
								<div class="text-gray-600">Las Vegas REALTOR®</div>
							</div>
							<div>
								<div class="text-4xl font-bold text-blue-600 mb-2">24/7</div>
								<div class="text-gray-600">Availability</div>
							</div>
							<div>
								<div class="text-4xl font-bold text-blue-600 mb-2">100%</div>
								<div class="text-gray-600">Client Satisfaction</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Community Testimonials */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Community-Specific Success Stories
						</h2>
						<div class="space-y-8">
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Red Rock Country Club
								</h3>
								<div class="grid md:grid-cols-2 gap-6">
									<div>
										<p class="text-gray-700 italic mb-4">
											"Dr. Duffy's knowledge of Red Rock Country Club is
											exceptional. She helped us navigate the gated community
											requirements and found us the perfect golf course view
											home."
										</p>
										<p class="text-sm text-gray-600">- Amanda & James Wilson</p>
									</div>
									<div>
										<p class="text-gray-700 italic mb-4">
											"The luxury amenities and custom home options in Red Rock
											are incredible. Dr. Duffy made the entire process smooth
											and stress-free."
										</p>
										<p class="text-sm text-gray-600">- Maria Santos</p>
									</div>
								</div>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									The Ridges
								</h3>
								<div class="grid md:grid-cols-2 gap-6">
									<div>
										<p class="text-gray-700 italic mb-4">
											"Executive living at its finest. Dr. Duffy understood our
											need for modern luxury and mountain views. The Ridges
											community is perfect for our lifestyle."
										</p>
										<p class="text-sm text-gray-600">- Thomas & Rebecca Chen</p>
									</div>
									<div>
										<p class="text-gray-700 italic mb-4">
											"The high-end finishes and modern architecture in The
											Ridges exceeded our expectations. Dr. Duffy's expertise
											was invaluable."
										</p>
										<p class="text-sm text-gray-600">- Kevin Park</p>
									</div>
								</div>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Summerlin West
								</h3>
								<div class="grid md:grid-cols-2 gap-6">
									<div>
										<p class="text-gray-700 italic mb-4">
											"Perfect for families with excellent schools and mature
											communities. Dr. Duffy helped us find the ideal family
											home in Summerlin West."
										</p>
										<p class="text-sm text-gray-600">- The Anderson Family</p>
									</div>
									<div>
										<p class="text-gray-700 italic mb-4">
											"The established amenities and diverse home styles in
											Summerlin West offer something for everyone. Dr. Duffy's
											local knowledge was key."
										</p>
										<p class="text-sm text-gray-600">- Patricia & Mark Davis</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="py-16 bg-blue-600 text-white">
				<div class="container mx-auto px-4 text-center">
					<h2 class="text-3xl font-bold mb-4">
						Ready to Join Our Success Stories?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for your luxury real estate success story
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
							Start Your Success Story
						</a>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Client Testimonials | Dr. Jan Duffy | Top 1% Las Vegas REALTOR® Success Stories",
	meta: [
		{
			name: "description",
			content:
				"Read client testimonials & success stories from Dr. Jan Duffy's luxury real estate clients. Red Rock Country Club, The Ridges & Summerlin West success stories. Top 1% Las Vegas REALTOR® with 30+ years expertise & 100% client satisfaction.",
		},
		{
			name: "keywords",
			content:
				"Dr. Jan Duffy testimonials, Top 1% Las Vegas REALTOR reviews, luxury real estate success stories, Red Rock Country Club testimonials, The Ridges client reviews, Summerlin West success stories, California equity buyers testimonials, corporate relocations reviews, luxury homes Las Vegas testimonials",
		},
		{
			property: "og:title",
			content:
				"Client Testimonials | Dr. Jan Duffy | Top 1% Las Vegas REALTOR® Success Stories",
		},
		{
			property: "og:description",
			content:
				"Top 1% Las Vegas REALTOR® client testimonials & success stories. Red Rock Country Club, The Ridges & Summerlin West luxury real estate success stories.",
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
