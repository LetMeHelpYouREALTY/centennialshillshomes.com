"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  amenityCategories,
  communityAmenitiesConfig,
  curatedPlacesForCategory,
  directionsUrlForPlace,
  googleMapsEmbedUrl,
  type AmenityCategoryId,
} from "@/lib/community-amenities";

type MapPlaceResult = {
  id: string;
  name: string;
  address: string;
  rating?: number;
  lat: number;
  lng: number;
  mapsUrl: string;
};

type AmenityMapProps = {
  /** Shorter map on homepage sections */
  compact?: boolean;
  /** Show static curated list beside or below map */
  showCuratedList?: boolean;
  className?: string;
};

const MAP_HEIGHT_COMPACT = 360;
const MAP_HEIGHT_FULL = 480;

function getApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined;
}

function getMapId(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() || undefined;
}

declare global {
  interface Window {
    google?: {
      maps: {
        importLibrary: (name: string) => Promise<unknown>;
        Map: new (
          el: HTMLElement,
          opts: Record<string, unknown>,
        ) => {
          setCenter: (c: { lat: number; lng: number }) => void;
          setZoom: (z: number) => void;
          fitBounds: (b: unknown) => void;
        };
        InfoWindow: new (opts: { content: string }) => {
          open: (opts: { map: unknown; anchor?: unknown }) => void;
          close: () => void;
        };
        LatLng: new (lat: number, lng: number) => unknown;
        LatLngBounds: new () => {
          extend: (latLng: unknown) => void;
        };
        marker?: {
          AdvancedMarkerElement: new (opts: Record<string, unknown>) => {
            map: unknown;
            position: unknown;
            title: string;
            addListener: (event: string, fn: () => void) => void;
          };
        };
        Marker: new (opts: Record<string, unknown>) => {
          setMap: (map: unknown | null) => void;
          addListener: (event: string, fn: () => void) => void;
        };
      };
    };
  }
}

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>("script[data-centennial-amenity-map]");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Maps script error")));
      return;
    }

    const callbackName = `__centennialAmenityMapsCb_${Math.random().toString(36).slice(2)}`;
    const win = window as unknown as Record<string, () => void>;
    win[callbackName] = () => {
      delete win[callbackName];
      resolve();
    };

    const script = document.createElement("script");
    script.dataset.centennialAmenityMap = "true";
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places,marker&loading=async&callback=${callbackName}`;
    script.onerror = () => reject(new Error("Maps script failed"));
    document.head.appendChild(script);
  });
}

function infoWindowHtml(place: MapPlaceResult): string {
  const rating =
    place.rating !== undefined
      ? `<p style="margin:4px 0;font-size:13px;color:#444">Rating: ${place.rating.toFixed(1)}</p>`
      : "";
  return `<div style="max-width:240px;padding:4px 2px;font-family:system-ui,sans-serif">
    <strong style="font-size:14px">${place.name}</strong>
    ${rating}
    <p style="margin:6px 0 8px;font-size:12px;color:#555">${place.address}</p>
    <a href="${place.mapsUrl}" target="_blank" rel="noopener noreferrer" style="font-size:13px;color:#1d4ed8;font-weight:600">Directions</a>
  </div>`;
}

export default function AmenityMap({
  compact = false,
  showCuratedList = true,
  className = "",
}: AmenityMapProps) {
  const apiKey = getApiKey();
  const mapId = getMapId();
  const { center, communityMarker } = communityAmenitiesConfig;
  const height = compact ? MAP_HEIGHT_COMPACT : MAP_HEIGHT_FULL;

  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>("parks");
  const [useFallback, setUseFallback] = useState(!apiKey);
  const [loadError, setLoadError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [places, setPlaces] = useState<MapPlaceResult[]>([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);
  const [mapReady, setMapReady] = useState(false);
  const markersRef = useRef<unknown[]>([]);
  const communityMarkerRef = useRef<unknown>(null);
  const infoWindowRef = useRef<{
    close: () => void;
    open: (o: { map: unknown; anchor?: unknown }) => void;
    setContent: (html: string) => void;
  } | null>(null);

  const filterGroupId = useId();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearMarkers = useCallback(() => {
    for (const marker of markersRef.current) {
      if (marker && typeof marker === "object" && "setMap" in marker) {
        (marker as { setMap: (m: null) => void }).setMap(null);
      } else if (marker && typeof marker === "object" && "map" in marker) {
        (marker as { map: null }).map = null;
      }
    }
    markersRef.current = [];
  }, []);

  const initMap = useCallback(async () => {
    if (!apiKey || !mapDivRef.current || mapRef.current) return;

    try {
      await loadGoogleMapsScript(apiKey);
      const google = window.google;
      if (!google?.maps) {
        setUseFallback(true);
        return;
      }

      const mapOptions: Record<string, unknown> = {
        center: { lat: center.lat, lng: center.lng },
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      };
      if (mapId) {
        mapOptions.mapId = mapId;
      }

      const map = new google.maps.Map(mapDivRef.current, mapOptions);
      mapRef.current = map;
      infoWindowRef.current = new google.maps.InfoWindow({ content: "" }) as typeof infoWindowRef.current;
      setMapReady(true);

      const communityPosition = { lat: center.lat, lng: center.lng };
      const communityTitle = `${communityMarker.title} — ${communityMarker.subtitle}`;

      if (mapId && google.maps.marker?.AdvancedMarkerElement) {
        const pin = document.createElement("div");
        pin.className =
          "rounded-full bg-terracotta px-3 py-1 text-xs font-bold text-ink shadow-md border-2 border-white";
        pin.textContent = communityMarker.title;
        const adv = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: communityPosition,
          title: communityTitle,
          content: pin,
        });
        communityMarkerRef.current = adv;
      } else {
        communityMarkerRef.current = new google.maps.Marker({
          map,
          position: communityPosition,
          title: communityTitle,
          label: { text: "★", color: "#ffffff", fontWeight: "bold" },
        });
      }
    } catch {
      setLoadError(true);
      setUseFallback(true);
    }
  }, [apiKey, center.lat, center.lng, communityMarker.subtitle, communityMarker.title, mapId]);

  useEffect(() => {
    if (!isVisible || useFallback || !apiKey) return;
    void initMap();
  }, [apiKey, initMap, isVisible, useFallback]);

  const fetchPlaces = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!apiKey || useFallback || !mapRef.current) return;

      const category = amenityCategories.find((c) => c.id === categoryId);
      if (!category) return;

      setLoadingPlaces(true);
      try {
        const google = window.google;
        if (!google?.maps?.importLibrary) {
          setUseFallback(true);
          return;
        }

        const placesLib = (await google.maps.importLibrary("places")) as {
          Place: {
            searchNearby: (req: Record<string, unknown>) => Promise<{ places: Array<Record<string, unknown>> }>;
          };
        };

        const { places: rawPlaces } = await placesLib.Place.searchNearby({
          fields: ["displayName", "location", "formattedAddress", "rating", "googleMapsURI"],
          locationRestriction: {
            center: { lat: center.lat, lng: center.lng },
            radius: communityAmenitiesConfig.searchRadiusMeters,
          },
          includedPrimaryTypes: category.placeTypes,
          maxResultCount: 12,
        });

        const parsed: MapPlaceResult[] = rawPlaces
          .map((p, index) => {
            const loc = p.location as { lat: () => number; lng: () => number } | undefined;
            const lat = loc?.lat?.() ?? center.lat;
            const lng = loc?.lng?.() ?? center.lng;
            const displayName = (p.displayName as { text?: string })?.text ?? "Place";
            const address = (p.formattedAddress as string) ?? "";
            const rating = typeof p.rating === "number" ? p.rating : undefined;
            const mapsUrl =
              (p.googleMapsURI as string) ??
              directionsUrlForPlace(displayName, address || `${lat},${lng}`);
            return {
              id: `${categoryId}-${index}`,
              name: displayName,
              address,
              rating,
              lat,
              lng,
              mapsUrl,
            };
          })
          .filter((p) => p.name);

        setPlaces(parsed);
        clearMarkers();

        const map = mapRef.current;
        const infoWindow = infoWindowRef.current;
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(new google.maps.LatLng(center.lat, center.lng));

        for (const place of parsed) {
          const position = { lat: place.lat, lng: place.lng };
          bounds.extend(new google.maps.LatLng(place.lat, place.lng));

          let marker: { addListener: (e: string, fn: () => void) => void };
          if (mapId && google.maps.marker?.AdvancedMarkerElement) {
            marker = new google.maps.marker.AdvancedMarkerElement({
              map,
              position,
              title: place.name,
            });
          } else {
            marker = new google.maps.Marker({
              map,
              position,
              title: place.name,
            });
          }

          marker.addListener("click", () => {
            infoWindow?.setContent(infoWindowHtml(place));
            infoWindow?.close();
            infoWindow?.open({
              map,
              anchor: marker as unknown,
            });
          });
          markersRef.current.push(marker);
        }

        if (parsed.length > 0 && map && typeof map === "object" && "fitBounds" in map) {
          (map as { fitBounds: (b: unknown) => void }).fitBounds(bounds);
        }
      } catch {
        setPlaces([]);
      } finally {
        setLoadingPlaces(false);
      }
    },
    [apiKey, center.lat, center.lng, clearMarkers, mapId, useFallback],
  );

  useEffect(() => {
    if (!mapReady || useFallback) return;
    void fetchPlaces(activeCategory);
  }, [activeCategory, fetchPlaces, mapReady, useFallback]);

  const showEmbed = useFallback || loadError || !apiKey;
  const curated = curatedPlacesForCategory(activeCategory);

  return (
    <div ref={containerRef} className={className}>
      <div
        role="tablist"
        aria-label="Filter nearby amenities by category"
        className="mb-4 flex flex-wrap gap-2"
      >
        {amenityCategories.map((cat) => {
          const selected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              id={`${filterGroupId}-${cat.id}`}
              aria-selected={selected}
              aria-controls={`${filterGroupId}-panel`}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
                selected
                  ? "bg-terracotta text-ink"
                  : "border border-stone-300 bg-white text-stone-700 hover:bg-stone-50"
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${filterGroupId}-panel`}
        role="tabpanel"
        aria-labelledby={`${filterGroupId}-${activeCategory}`}
        className="grid gap-6 lg:grid-cols-3"
      >
        <div className="lg:col-span-2">
          <div
            className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm"
            style={{ minHeight: height }}
          >
            {showEmbed ? (
              <iframe
                title={`Map of ${communityAmenitiesConfig.communityName}, ${communityAmenitiesConfig.city}`}
                src={googleMapsEmbedUrl(center.lat, center.lng)}
                className="h-full w-full border-0"
                style={{ height }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div
                ref={mapDivRef}
                className="h-full w-full"
                style={{ height }}
                aria-label={`Interactive map of amenities near ${communityAmenitiesConfig.communityName}`}
              />
            )}
          </div>
          {!showEmbed && loadingPlaces ? (
            <p className="mt-2 text-sm text-stone-500" aria-live="polite">Loading places…</p>
          ) : null}
          {showEmbed && apiKey && isVisible && !loadError ? (
            <p className="mt-2 text-sm text-stone-500">
              Interactive map unavailable — showing map preview. Check API key configuration in Vercel.
            </p>
          ) : null}
        </div>

        {showCuratedList ? (
          <div className="rounded-2xl border border-stone-200 bg-ivory p-5">
            <h3 className="font-display text-lg text-ink">
              {amenityCategories.find((c) => c.id === activeCategory)?.label ?? "Places"} near{" "}
              {communityAmenitiesConfig.communityName}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-stone-700">
              {(places.length > 0 && !showEmbed ? places : curated).map((item) => {
                const name = "name" in item ? item.name : "";
                const address = "address" in item ? item.address : "";
                const mapsUrl =
                  "mapsUrl" in item && item.mapsUrl
                    ? item.mapsUrl
                    : directionsUrlForPlace(name, address);
                return (
                  <li key={`${name}-${address}`} className="border-b border-stone-200 pb-3 last:border-0">
                    <p className="font-semibold text-ink">{name}</p>
                    {address ? <p className="mt-0.5 text-stone-600">{address}</p> : null}
                    {"rating" in item && item.rating !== undefined ? (
                      <p className="text-xs text-stone-500">Google rating: {item.rating.toFixed(1)}</p>
                    ) : null}
                    {"note" in item && item.note ? (
                      <p className="mt-1 text-xs text-stone-500">{item.note}</p>
                    ) : null}
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs font-semibold text-terracotta-dark hover:underline"
                    >
                      Directions
                    </a>
                  </li>
                );
              })}
              {places.length === 0 && curated.length === 0 ? (
                <li className="text-stone-500">Explore other categories for curated local places.</li>
              ) : null}
            </ul>
            {!showEmbed && places.length === 0 && curated.length > 0 ? (
              <p className="mt-3 text-xs text-stone-500">
                Showing verified local highlights while live results load.
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
