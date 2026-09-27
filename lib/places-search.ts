import type { AmenityCategoryId } from "@/lib/community-amenities";

export type NearbyPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  mapsUrl: string;
};

const cache = new Map<string, Promise<NearbyPlaceResult[]>>();

function placeToResult(
  place: google.maps.places.Place,
  categoryId: string,
  index: number,
  fallbackCenter: google.maps.LatLngLiteral,
): NearbyPlaceResult | null {
  const rawName = place.displayName;
  const displayName =
    typeof rawName === "string"
      ? rawName
      : (rawName as { text?: string } | undefined)?.text ?? "Place";
  const loc = place.location;
  if (!loc) return null;
  const json = loc.toJSON?.() ?? { lat: loc.lat(), lng: loc.lng() };
  const lat = json.lat ?? fallbackCenter.lat;
  const lng = json.lng ?? fallbackCenter.lng;
  const address = place.formattedAddress ?? "";
  const mapsUrl =
    place.googleMapsURI ?? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${displayName}, ${address || `${lat},${lng}`}`)}`;
  return {
    id: `${categoryId}-${index}`,
    name: displayName,
    address,
    lat,
    lng,
    mapsUrl,
  };
}

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
  types: string[],
  radiusMeters: number,
): Promise<NearbyPlaceResult[]> {
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI"],
        locationRestriction: { center, radius: radiusMeters },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as unknown as google.maps.places.SearchNearbyRankPreference,
      });
      return places
        .map((place, index) => placeToResult(place, categoryId, index, center))
        .filter((item): item is NearbyPlaceResult => item !== null);
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
