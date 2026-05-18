import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

// Google Maps type declarations
declare global {
	interface Window {
		google: {
			maps: {
				Map: new (element: HTMLElement, options: any) => any;
				Marker: new (options: any) => any;
				InfoWindow: new (options: any) => any;
				MapTypeId: {
					ROADMAP: string;
				};
			};
		};
	}
}

export interface GoogleMapProps {
	center: { lat: number; lng: number };
	zoom?: number;
	markers?: Array<{
		position: { lat: number; lng: number };
		title: string;
		info?: string;
	}>;
	height?: string;
	className?: string;
}

export const GoogleMap = component$<GoogleMapProps>((props) => {
	const zoom = props.zoom || 15;
	const height = props.height || "400px";
	const mapLoaded = useSignal(false);
	const mapError = useSignal(false);

	useVisibleTask$(async () => {
		// Check if we have a Google Maps API key
		const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

		if (!apiKey) {
			console.log("No Google Maps API key found, showing fallback");
			mapError.value = true;
			return;
		}

		function initializeMap() {
			const mapElement = document.getElementById("google-map");
			if (!mapElement) return;

			const map = new window.google.maps.Map(mapElement, {
				center: props.center,
				zoom: zoom,
				mapTypeId: window.google.maps.MapTypeId.ROADMAP,
				styles: [
					{
						featureType: "poi",
						elementType: "labels",
						stylers: [{ visibility: "off" }],
					},
					{
						featureType: "transit",
						elementType: "labels",
						stylers: [{ visibility: "off" }],
					},
				],
			});

			// Add markers if provided
			if (props.markers) {
				props.markers.forEach((marker) => {
					const mapMarker = new window.google.maps.Marker({
						position: marker.position,
						map: map,
						title: marker.title,
					});

					// Add info window if info is provided
					if (marker.info) {
						const infoWindow = new window.google.maps.InfoWindow({
							content: `<div class="p-2"><h3 class="font-semibold">${marker.title}</h3><p class="text-sm">${marker.info}</p></div>`,
						});

						mapMarker.addListener("click", () => {
							infoWindow.open(map, mapMarker);
						});
					}
				});
			}

			mapLoaded.value = true;
		}

		// Check if Google Maps is already loaded
		if (typeof window !== "undefined" && window.google && window.google.maps) {
			initializeMap();
			return;
		}

		try {
			// Load Google Maps API
			const script = document.createElement("script");
			script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
			script.async = true;
			script.defer = true;
			script.onload = () => {
				initializeMap();
			};
			script.onerror = () => {
				console.error("Failed to load Google Maps API");
				mapError.value = true;
			};
			document.head.appendChild(script);
		} catch (error) {
			console.error("Error initializing Google Maps:", error);
			mapError.value = true;
		}
	});

	// Fallback content when no API key or error
	if (mapError.value) {
		return (
			<div class={`w-full ${props.className || ""}`}>
				<div
					class="w-full rounded-lg shadow-lg bg-gray-100 flex items-center justify-center"
					style={{ height: height }}
				>
					<div class="text-center p-8">
						<div class="text-6xl mb-4">🗺️</div>
						<h3 class="text-xl font-semibold text-gray-800 mb-2">
							Office Location
						</h3>
						<p class="text-gray-600 mb-4">
							1490 Center Crossing Rd
							<br />
							Las Vegas, NV 89144
						</p>
						<a
							href="https://maps.google.com/?q=1490+Center+Crossing+Rd,+Las+Vegas,+NV+89144"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							<span class="mr-2">📍</span>
							View on Google Maps
						</a>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div class={`w-full ${props.className || ""}`}>
			<div
				id="google-map"
				class="w-full rounded-lg shadow-lg"
				style={{ height: height }}
			>
				{!mapLoaded.value && (
					<div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
						<div class="text-center">
							<div class="spinner mx-auto mb-4"></div>
							<p class="text-gray-600">Loading map...</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
});
