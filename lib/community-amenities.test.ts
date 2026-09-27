import { describe, expect, it } from "vitest";
import {
  communityAmenitiesConfig,
  googleMapsEmbedUrl,
  curatedPlacesForCategory,
} from "./community-amenities";

describe("community-amenities", () => {
  it("builds keyless embed URL for map fallback", () => {
    const url = googleMapsEmbedUrl(
      communityAmenitiesConfig.center.lat,
      communityAmenitiesConfig.center.lng,
    );
    expect(url).toContain("output=embed");
    expect(url).toContain(String(communityAmenitiesConfig.center.lat));
  });

  it("includes verified parks in curated list", () => {
    const parks = curatedPlacesForCategory("parks");
    expect(parks.some((p) => p.name.includes("Centennial Hills Park"))).toBe(true);
  });
});
