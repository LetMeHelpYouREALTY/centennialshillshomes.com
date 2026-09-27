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
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/google-maps-loader";
import { searchCategory, type NearbyPlaceResult } from "@/lib/places-search";

type AmenityMapProps = {
  compact?: boolean;
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

function buildInfoWindowContent(place: NearbyPlaceResult): HTMLElement {
  const wrap = document.createElement("div");
  wrap.style.maxWidth = "240px";
  wrap.style.padding = "4px 2px";
  wrap.style.fontFamily = "system-ui, sans-serif";

  const title = document.createElement("strong");
  title.style.fontSize = "14px";
  title.textContent = place.name;
  wrap.appendChild(title);

  if (place.address) {
    const addr = document.createElement("p");
    addr.style.margin = "6px 0 8px";
    addr.style.fontSize = "12px";
    addr.style.color = "#555";
    addr.textContent = place.address;
    wrap.appendChild(addr);
  }

  const link = document.createElement("a");
  link.href = place.mapsUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.fontSize = "13px";
  link.style.color = "#1d4ed8";
  link.style.fontWeight = "600";
  link.textContent = "Directions";
  wrap.appendChild(link);

  return wrap;
}

export default function AmenityMap({
  compact = false,
  showCuratedList = true,
  className = "",
}: AmenityMapProps) {
  const apiKey = getApiKey();
  const mapId = getMapId();
  const { center, communityMarker, searchRadiusMeters } = communityAmenitiesConfig;
  const height = compact ? MAP_HEIGHT_COMPACT : MAP_HEIGHT_FULL;

  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>("parks");
  const [useFallback, setUseFallback] = useState(!apiKey || mapsAuthFailed);
  const [isVisible, setIsVisible] = useState(false);
  const [places, setPlaces] = useState<NearbyPlaceResult[]>([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [placesFailed, setPlacesFailed] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const markersRef = useRef<Array<google.maps.Marker | google.maps.marker.AdvancedMarkerElement>>([]);
  const communityMarkerRef = useRef<google.maps.Marker | google.maps.marker.AdvancedMarkerElement | null>(
    null,
  );
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const filterGroupId = useId();

  const clearMarkers = useCallback(() => {
    const gmaps = typeof window !== "undefined" ? window.google?.maps : undefined;
    if (!gmaps) {
      markersRef.current = [];
      return;
    }
    for (const marker of markersRef.current) {
      if (marker instanceof gmaps.Marker) {
        marker.setMap(null);
      } else {
        marker.map = null;
      }
    }
    markersRef.current = [];
  }, []);

  const enterFallback = useCallback(() => {
    setUseFallback(true);
    mapRef.current = null;
    setMapReady(false);
    clearMarkers();
  }, [clearMarkers]);

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

  useEffect(() => {
    if (mapsAuthFailed) {
      enterFallback();
    }
    const onAuthFailure = () => enterFallback();
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  const initMap = useCallback(async () => {
    if (!apiKey || mapsAuthFailed || !mapDivRef.current || mapRef.current) return;

    try {
      await loadGoogleMaps(apiKey);
      if (mapId) {
        await google.maps.importLibrary("marker");
      }
      await google.maps.importLibrary("places");
      const mapOptions: google.maps.MapOptions = {
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
      infoWindowRef.current = new google.maps.InfoWindow();
      setMapReady(true);

      const communityPosition = { lat: center.lat, lng: center.lng };
      const communityTitle = `${communityMarker.title} — ${communityMarker.subtitle}`;

      if (mapId && google.maps.marker?.AdvancedMarkerElement) {
        const pin = document.createElement("div");
        pin.className =
          "rounded-full bg-terracotta px-3 py-1 text-xs font-bold text-ink shadow-md border-2 border-white";
        pin.textContent = communityMarker.title;
        communityMarkerRef.current = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: communityPosition,
          title: communityTitle,
          content: pin,
        });
      } else {
        communityMarkerRef.current = new google.maps.Marker({
          map,
          position: communityPosition,
          title: communityTitle,
          label: { text: "★", color: "#ffffff", fontWeight: "bold" },
        });
      }
    } catch {
      enterFallback();
    }
  }, [apiKey, center.lat, center.lng, communityMarker.subtitle, communityMarker.title, enterFallback, mapId]);

  useEffect(() => {
    if (!isVisible || useFallback || !apiKey || mapsAuthFailed) return;
    void initMap();
  }, [apiKey, initMap, isVisible, useFallback]);

  const fetchPlaces = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!apiKey || useFallback || mapsAuthFailed || !mapRef.current) return;

      const category = amenityCategories.find((c) => c.id === categoryId);
      if (!category) return;

      setLoadingPlaces(true);
      setPlacesFailed(false);
      try {
        const centerLiteral = { lat: center.lat, lng: center.lng };
        const parsed = await searchCategory(
          centerLiteral,
          categoryId,
          category.placeTypes,
          searchRadiusMeters,
        );

        setPlaces(parsed);
        clearMarkers();

        const map = mapRef.current;
        const infoWindow = infoWindowRef.current;
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(centerLiteral);

        for (const place of parsed) {
          const position = { lat: place.lat, lng: place.lng };
          bounds.extend(position);

          let marker: google.maps.Marker | google.maps.marker.AdvancedMarkerElement;
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

          const openInfo = () => {
            infoWindow?.setContent(buildInfoWindowContent(place));
            infoWindow?.close();
            infoWindow?.open({ map, anchor: marker });
          };
          marker.addListener("click", openInfo);
          markersRef.current.push(marker);
        }

        if (parsed.length > 0) {
          map.fitBounds(bounds);
        }
      } catch {
        setPlaces([]);
        setPlacesFailed(true);
      } finally {
        setLoadingPlaces(false);
      }
    },
    [apiKey, center.lat, center.lng, clearMarkers, mapId, searchRadiusMeters, useFallback],
  );

  useEffect(() => {
    if (!mapReady || useFallback) return;
    void fetchPlaces(activeCategory);
  }, [activeCategory, fetchPlaces, mapReady, useFallback]);

  const showEmbed = useFallback || !apiKey || mapsAuthFailed;
  const curated = curatedPlacesForCategory(activeCategory);
  const listItems =
    !showEmbed && places.length > 0
      ? places
      : placesFailed || showEmbed
        ? curated
        : places.length > 0
          ? places
          : curated;

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
        </div>

        {showCuratedList ? (
          <div className="rounded-2xl border border-stone-200 bg-ivory p-5">
            <h3 className="font-display text-lg text-ink">
              {amenityCategories.find((c) => c.id === activeCategory)?.label ?? "Places"} near{" "}
              {communityAmenitiesConfig.communityName}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-stone-700">
              {listItems.map((item) => {
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
              {listItems.length === 0 ? (
                <li className="text-stone-500">Explore other categories for curated local places.</li>
              ) : null}
            </ul>
            {!showEmbed && (placesFailed || places.length === 0) && curated.length > 0 ? (
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
