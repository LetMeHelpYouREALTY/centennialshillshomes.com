import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ContactForm } from "~/components/ContactForm";
import { GoogleMap } from "~/components/GoogleMap";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Contact Dr. Jan Duffy
						</h1>
						<p class="text-xl text-blue-100">
							Ready to Find Your Luxury Home? Get Your Free Market Analysis
							Today
						</p>
					</div>
				</div>
			</section>

			{/* Advanced Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Start Your Property Search
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Before contacting Dr. Duffy, explore available luxury properties
							with our advanced search tool. Find homes that match your
							criteria.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Content */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<div class="grid lg:grid-cols-2 gap-12">
							{/* Contact Information */}
							<div class="space-y-8">
								<div class="bg-white rounded-lg shadow-lg p-8">
									<h2 class="text-3xl font-bold mb-6 text-gray-800">
										Get In Touch
									</h2>
									<div class="space-y-6">
										<div class="flex items-start space-x-4">
											<div class="text-2xl">📞</div>
											<div>
												<h3 class="font-semibold text-gray-800">Phone</h3>
												<p class="text-gray-700">(702) 903-1952</p>
												<p class="text-sm text-gray-600">Available 24/7</p>
											</div>
										</div>
										<div class="flex items-start space-x-4">
											<div class="text-2xl">📍</div>
											<div>
												<h3 class="font-semibold text-gray-800">
													Office Location
												</h3>
												<p class="text-gray-700">1490 Center Crossing Rd</p>
												<p class="text-gray-700">Las Vegas, NV 89144</p>
											</div>
										</div>
										<div class="flex items-start space-x-4">
											<div class="text-2xl">⏰</div>
											<div>
												<h3 class="font-semibold text-gray-800">
													Business Hours
												</h3>
												<p class="text-gray-700">Sunday - Saturday</p>
												<p class="text-gray-700">6:00 AM - 9:00 PM</p>
												<p class="text-sm text-gray-600">
													Available 24/7 for urgent matters
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Service Areas */}
								<div class="bg-white rounded-lg shadow-lg p-8">
									<h3 class="text-2xl font-bold mb-6 text-gray-800">
										Service Areas and Communities
									</h3>
									<p class="text-gray-700 mb-4">
										Dr. Jan Duffy specializes in luxury real estate throughout
										West Summerlin's premier communities. Our service areas
										include Red Rock Country Club, The Ridges, Summerlin West,
										Centennial Hills, Lone Mountain, and North Las Vegas.
									</p>
									<p class="text-gray-700 mb-4">
										Whether you're a California equity buyer, corporate
										executive, or luxury home investor, we provide comprehensive
										real estate services tailored to your specific needs and
										timeline.
									</p>
									<div class="grid md:grid-cols-2 gap-4 mt-6">
										<div>
											<h4 class="font-semibold text-gray-800 mb-2">
												Primary Communities
											</h4>
											<ul class="text-gray-700 space-y-1">
												<li>• Red Rock Country Club</li>
												<li>• The Ridges</li>
												<li>• Summerlin West</li>
												<li>• Centennial Hills</li>
											</ul>
										</div>
										<div>
											<h4 class="font-semibold text-gray-800 mb-2">
												Specialized Services
											</h4>
											<ul class="text-gray-700 space-y-1">
												<li>• California Equity Buyers</li>
												<li>• Corporate Relocations</li>
												<li>• Investment Properties</li>
												<li>• Same-Day Showings</li>
											</ul>
										</div>
									</div>
								</div>

								{/* Google Map */}
								<div class="bg-white rounded-lg shadow-lg p-8">
									<h3 class="text-2xl font-bold mb-6 text-gray-800">
										Visit Our Office
									</h3>
									<p class="text-gray-700 mb-4">
										Located in the heart of Las Vegas, our office provides
										convenient access to all major luxury communities. We're
										strategically positioned to serve clients throughout the Las
										Vegas Valley with same-day showings and flexible scheduling.
									</p>
									<GoogleMap
										center={{ lat: 36.1699, lng: -115.1398 }}
										zoom={15}
										markers={[
											{
												position: { lat: 36.1699, lng: -115.1398 },
												title: "Dr. Jan Duffy Real Estate",
												info: "1490 Center Crossing Rd<br>Las Vegas, NV 89144<br><br>📞 (702) 903-1952",
											},
										]}
										height="300px"
									/>
									<div class="mt-4 text-center">
										<a
											href="https://maps.google.com/?q=1490+Center+Crossing+Rd,+Las+Vegas,+NV+89144"
											target="_blank"
											rel="noopener noreferrer"
											class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
										>
											<span class="mr-2">🗺️</span>
											Get Directions
										</a>
									</div>
								</div>

								<div class="bg-blue-50 rounded-lg p-8">
									<h3 class="text-2xl font-bold mb-4 text-gray-800">
										Service Areas
									</h3>
									<div class="grid grid-cols-2 gap-2 text-sm">
										<div>• Red Rock Country Club</div>
										<div>• The Ridges</div>
										<div>• Summerlin West</div>
										<div>• Summerlin North</div>
										<div>• Summerlin South</div>
										<div>• Centennial Hills</div>
										<div>• Lone Mountain</div>
										<div>• North Las Vegas</div>
									</div>
								</div>
							</div>

							{/* Contact Form */}
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Contact Dr. Jan Duffy | (702) 903-1952 | Free Luxury Home Market Analysis | 24/7 Available",
	meta: [
		{
			name: "description",
			content:
				"Contact Dr. Jan Duffy, Top 1% Las Vegas REALTOR® at (702) 903-1952 for your FREE luxury home market analysis. Available 24/7 for California equity buyers & corporate relocations. Same-day showings in Red Rock Country Club, The Ridges & Summerlin West.",
		},
		{
			name: "keywords",
			content:
				"contact Dr. Jan Duffy, (702) 903-1952, free market analysis, luxury homes Las Vegas, Red Rock Country Club, The Ridges, Summerlin West, California equity buyers, corporate relocations, 24/7 available, same-day showings",
		},
		{
			property: "og:title",
			content:
				"Contact Dr. Jan Duffy | (702) 903-1952 | Free Luxury Home Market Analysis | 24/7 Available",
		},
		{
			property: "og:description",
			content:
				"Top 1% Las Vegas REALTOR® available 24/7 at (702) 903-1952. Free luxury home market analysis. Same-day showings for California equity buyers & corporate relocations.",
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
		{
			name: "geo.position",
			content: "36.1699;-115.1398",
		},
	],
};
