import { describe, it, expect } from "vitest";
import { homepageCommunities } from "./homepage-communities";

describe("homepageCommunities", () => {
  it("covers six northwest communities without unverified prices", () => {
    expect(homepageCommunities).toHaveLength(6);
    for (const community of homepageCommunities) {
      expect(community.href.startsWith("/")).toBe(true);
      expect(JSON.stringify(community)).not.toMatch(/\$\d/);
    }
  });
});
