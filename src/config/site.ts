/** Canonical NAP + branding — must match Google Business Profile. Use Jan, never Janet. */
export const SITE = {
	name: "Centennial Hills Real Estate | Homes by Dr. Jan Duffy",
	shortName: "Centennial Hills Homes",
	firstName: "Jan",
	agentName: "Dr. Jan Duffy",
	license: "S.0197614.LLC",
	brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
	url: "https://www.centennialhillshomesforsale.com",
	phone: "(702) 903-1952",
	phoneTel: "+17029031952",
	email: "DrDuffy@CentennialHillsHomesForSale.com",
	address: {
		streetAddress: "1490 Center Crossing Rd",
		addressLocality: "Las Vegas",
		addressRegion: "NV",
		postalCode: "89144",
		addressCountry: "US",
	},
	geo: {
		latitude: 36.2792,
		longitude: -115.2744,
	},
	hours: ["Mo-Su 06:00-21:00"],
	zipCodes: ["89135", "89138", "89144"],
	areasServed: [
		"Centennial Hills, Las Vegas, NV",
		"Red Rock Country Club, Las Vegas, NV",
		"The Ridges, Las Vegas, NV",
		"Summerlin West, Las Vegas, NV",
		"Lone Mountain, Las Vegas, NV",
		"North Las Vegas, NV",
	],
	priceRange: "$400K-$750K",
	realScoutAgentId: "QWdlbnQtMjI1MDUw",
	/** Google Maps directions — matches GBP pin */
	directionsUrl:
		"https://www.google.com/maps/dir/?api=1&destination=1490+Center+Crossing+Rd,+Las+Vegas,+NV+89144",
	mapEmbedUrl:
		"https://www.google.com/maps?q=1490+Center+Crossing+Rd,+Las+Vegas,+NV+89144&hl=en&z=15&output=embed",
} as const;

/** Root-relative static image paths (files live in public/) */
export const SITE_IMAGES = {
	/** Visible header/footer mark */
	logo: "/logo.svg",
	/** JSON-LD / OG (raster) */
	logoRaster: "/logo.png",
	ogDefault: "/og-image.jpg",
	fallback: "/media/fallback.svg",
	agentHero: "/media/dr-jan-duffy-luxury-real-estate.jpg",
	communities: {
		lasVegasLuxury: "/media/las-vegas-luxury-communities.jpg",
		redRockCountryClub: "/media/red-rock-country-club.jpg",
		theRidges: "/media/the-ridges.jpg",
		summerlinWest: "/media/summerlin-west.jpg",
		centennialHills: "/media/centennial-hills.jpg",
		loneMountain: "/media/lone-mountain.jpg",
		northLasVegas: "/media/north-las-vegas.jpg",
	},
	services: {
		luxuryHomeSales: "/media/luxury-home-sales-dr-jan-duffy.jpg",
		luxuryHomeSellers: "/media/luxury-home-sellers-dr-jan-duffy.jpg",
		californiaEquityBuyers: "/media/california-equity-buyers-dr-jan-duffy.jpg",
		corporateRelocations: "/media/corporate-relocations-dr-jan-duffy.jpg",
		marketAnalysis: "/media/market-analysis-dr-jan-duffy.jpg",
		sameDayShowings: "/media/same-day-showings-dr-jan-duffy.jpg",
		investmentProperties: "/media/investment-properties-dr-jan-duffy.jpg",
	},
} as const;

export function siteImageUrl(path: string): string {
	return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export type FaqItem = { question: string; answer: string };

/** Shared FAQ copy — must match FAQPageSchema on the homepage */
export const HOME_FAQ: FaqItem[] = [
	{
		question: "What areas does Dr. Jan Duffy serve in Las Vegas?",
		answer:
			"Dr. Jan Duffy specializes in Centennial Hills and northwest Las Vegas, including ZIP codes 89135, 89138, and 89144, plus Red Rock Country Club, The Ridges, Summerlin West, Lone Mountain, and North Las Vegas.",
	},
	{
		question: "What price range does Dr. Jan Duffy specialize in?",
		answer:
			"Her focus is luxury and move-up homes roughly $400K–$750K in Centennial Hills and adjacent northwest Las Vegas communities, with experience across a wider range for buyers and sellers.",
	},
	{
		question: "How quickly can Dr. Jan Duffy schedule property showings?",
		answer:
			"Same-day showings are available for qualified buyers. Executive clients receive 24/7 scheduling, including evenings and weekends.",
	},
	{
		question: "Does Dr. Jan Duffy provide free market analysis?",
		answer:
			"Yes. Complimentary market analysis is available for buyers and sellers, including comparable sales, pricing strategy, and neighborhood trends for Centennial Hills.",
	},
	{
		question:
			"What luxury communities does Dr. Jan Duffy serve near Centennial Hills?",
		answer:
			"Red Rock Country Club, The Ridges, Summerlin West, Centennial Hills, Lone Mountain, and North Las Vegas — with deep knowledge of golf-course, guard-gated, and new-build neighborhoods.",
	},
	{
		question: "How do I contact Dr. Jan Duffy's office?",
		answer:
			"Call (702) 903-1952, email DrDuffy@CentennialHillsHomesForSale.com, or visit 1490 Center Crossing Rd, Las Vegas, NV 89144. Office hours are 6:00 AM–9:00 PM daily.",
	},
];

export const HOME_SEO = {
	title:
		"Centennial Hills Real Estate | Homes by Dr. Jan Duffy - Top 1% Las Vegas REALTOR®",
	description:
		"Buying or selling in Centennial Hills? Dr. Jan Duffy, Top 1% Las Vegas REALTOR®, serves ZIP codes 89138, 89144, and 89135 with luxury homes, same-day showings, and complimentary market analysis.",
	keywords: [
		"Centennial Hills homes for sale",
		"89138 homes",
		"89144 real estate",
		"89135 Las Vegas",
		"Dr. Jan Duffy",
		"northwest Las Vegas REALTOR",
		"Summerlin West",
		"California equity buyers",
	],
} as const;
