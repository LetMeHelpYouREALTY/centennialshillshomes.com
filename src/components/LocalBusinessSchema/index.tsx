import { component$ } from "@builder.io/qwik";

export interface LocalBusinessSchemaProps {
	businessName: string;
	description: string;
	address: {
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
	};
	phone: string;
	email: string;
	website: string;
	hours: string[];
	services: string[];
	areasServed: string[];
	socialMedia?: {
		facebook?: string;
		instagram?: string;
		linkedin?: string;
		youtube?: string;
		pinterest?: string;
	};
	priceRange?: string;
	paymentAccepted?: string[];
	currenciesAccepted?: string;
	foundingDate?: string;
	employee?: string;
	logo?: string;
	image?: string;
	licenseNumber?: string;
	geo?: {
		latitude: number;
		longitude: number;
	};
}

export const LocalBusinessSchema = component$<LocalBusinessSchemaProps>(
	(props) => {
		const {
			businessName,
			description,
			address,
			phone,
			email,
			website,
			hours,
			services,
			areasServed,
			socialMedia,
			priceRange,
			paymentAccepted,
			currenciesAccepted,
			foundingDate,
			employee,
			logo,
			image,
			licenseNumber,
			geo,
		} = props;

		const schema = {
			"@context": "https://schema.org",
			"@type": "RealEstateAgent",
			"@id": `${website}/#realestateagent`,
			name: businessName,
			description: description,
			url: website,
			telephone: phone,
			email: email,
			address: {
				"@type": "PostalAddress",
				streetAddress: address.streetAddress,
				addressLocality: address.addressLocality,
				addressRegion: address.addressRegion,
				postalCode: address.postalCode,
				addressCountry: address.addressCountry,
			},
			...(geo && {
				geo: {
					"@type": "GeoCoordinates",
					latitude: geo.latitude,
					longitude: geo.longitude,
				},
			}),
			...(licenseNumber && {
				identifier: {
					"@type": "PropertyValue",
					name: "Nevada Real Estate License",
					value: licenseNumber,
				},
			}),
			memberOf: {
				"@type": "Organization",
				name: "Berkshire Hathaway HomeServices Nevada Properties",
			},
			openingHours: hours,
			serviceArea: areasServed.map((area) => ({
				"@type": "City",
				name: area,
			})),
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: "Real Estate Services",
				itemListElement: services.map((service) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: service,
					},
				})),
			},
			...(priceRange && { priceRange }),
			...(paymentAccepted && { paymentAccepted }),
			...(currenciesAccepted && { currenciesAccepted }),
			...(foundingDate && { foundingDate }),
			...(employee && { employee: { "@type": "Person", name: employee } }),
			...(logo && { logo }),
			...(image && { image }),
			...(socialMedia && {
				sameAs: Object.values(socialMedia).filter(Boolean),
			}),
			additionalType: [
				"Real Estate Agency",
				"Real Estate Consultant",
				"Property Management Company",
			],
			knowsAbout: [
				"Luxury Real Estate",
				"West Summerlin Properties",
				"Red Rock Country Club",
				"The Ridges",
				"Summerlin West",
				"California Equity Buyers",
				"Corporate Relocations",
				"Market Analysis",
				"Property Valuation",
			],
			areaServed: areasServed.map((area) => ({
				"@type": "City",
				name: area,
			})),
			hasDriveThrough: false,
			hasKeyDrop: false,
			hasOnlineAppointments: true,
			isFamilyFriendly: true,
			isWheelchairAccessible: true,
			amenityFeature: [
				{
					"@type": "LocationFeatureSpecification",
					name: "Wheelchair accessible restroom",
					value: true,
				},
				{
					"@type": "LocationFeatureSpecification",
					name: "Wheelchair accessible seating",
					value: true,
				},
				{
					"@type": "LocationFeatureSpecification",
					name: "Wheelchair accessible parking lot",
					value: true,
				},
				{
					"@type": "LocationFeatureSpecification",
					name: "Wheelchair accessible entrance",
					value: true,
				},
				{
					"@type": "LocationFeatureSpecification",
					name: "Gender-neutral restroom",
					value: true,
				},
				{
					"@type": "LocationFeatureSpecification",
					name: "LGBTQ+ friendly",
					value: true,
				},
				{
					"@type": "LocationFeatureSpecification",
					name: "Transgender safespace",
					value: true,
				},
				{
					"@type": "LocationFeatureSpecification",
					name: "Free parking lot",
					value: true,
				},
				{
					"@type": "LocationFeatureSpecification",
					name: "Free parking garage",
					value: true,
				},
				{
					"@type": "LocationFeatureSpecification",
					name: "Free street parking",
					value: true,
				},
				{
					"@type": "LocationFeatureSpecification",
					name: "On-site parking",
					value: true,
				},
			],
		};

		return (
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={JSON.stringify(schema)}
			/>
		);
	},
);
