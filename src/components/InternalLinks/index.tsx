import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface InternalLink {
	href: string;
	text: string;
	description?: string;
}

export interface InternalLinksProps {
	title: string;
	links: InternalLink[];
	className?: string;
}

export const InternalLinks = component$<InternalLinksProps>((props) => {
	const { title, links, className = "" } = props;

	return (
		<section class={`py-8 ${className}`}>
			<div class="container mx-auto px-4">
				<h2 class="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
						>
							<h3 class="text-lg font-semibold text-blue-600 hover:text-blue-700 mb-2">
								{link.text}
							</h3>
							{link.description && (
								<p class="text-gray-600 text-sm">{link.description}</p>
							)}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
});

// Predefined link sets for different page types
export const communityLinks: InternalLink[] = [
	{
		href: "/red-rock-country-club",
		text: "Red Rock Country Club",
		description: "Luxury golf course community with custom estates",
	},
	{
		href: "/the-ridges",
		text: "The Ridges",
		description: "Executive homes with mountain views",
	},
	{
		href: "/summerlin-west",
		text: "Summerlin West",
		description: "Master-planned community with modern amenities",
	},
	{
		href: "/centennial-hills",
		text: "Centennial Hills",
		description: "Family-friendly neighborhood with new construction",
	},
	{
		href: "/lone-mountain",
		text: "Lone Mountain",
		description: "Custom homes with mountain living",
	},
	{
		href: "/north-las-vegas",
		text: "North Las Vegas",
		description: "Growing community with investment potential",
	},
];

export const serviceLinks: InternalLink[] = [
	{
		href: "/luxury-home-sales",
		text: "Luxury Home Sales",
		description: "Expert guidance for luxury property transactions",
	},
	{
		href: "/california-equity-buyers",
		text: "California Equity Buyers",
		description: "Specialized service for California relocations",
	},
	{
		href: "/corporate-relocations",
		text: "Corporate Relocations",
		description: "Executive relocation services",
	},
	{
		href: "/market-analysis",
		text: "Market Analysis",
		description: "Free comprehensive market analysis",
	},
	{
		href: "/same-day-showings",
		text: "Same-Day Showings",
		description: "Flexible showing schedules",
	},
	{
		href: "/investment-properties",
		text: "Investment Properties",
		description: "Investment property guidance",
	},
];

export const mainPageLinks: InternalLink[] = [
	{
		href: "/about",
		text: "About Dr. Jan Duffy",
		description: "Learn about Dr. Duffy's expertise and background",
	},
	{
		href: "/services",
		text: "Our Services",
		description: "Comprehensive real estate services",
	},
	{
		href: "/properties",
		text: "Current Properties",
		description: "Browse available luxury properties",
	},
	{
		href: "/testimonials",
		text: "Client Testimonials",
		description: "Read success stories from satisfied clients",
	},
	{
		href: "/contact",
		text: "Contact Us",
		description: "Get in touch for a free consultation",
	},
	{
		href: "/neighborhoods",
		text: "Neighborhood Guide",
		description: "Compare Las Vegas luxury communities",
	},
];
