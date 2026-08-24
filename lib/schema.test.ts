import { describe, it, expect } from "vitest";
import {
  generateRealEstateAgentSchema,
  generateReviewSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "./schema";
import { generateLocalBusinessSchema } from "./gbp-schema";
import { siteConfig, agentStats } from "./site-config";

const AGENT_ID = `${siteConfig.url}#organization`;

describe("review snippet JSON-LD", () => {
  it("nests a single AggregateRating on the site-wide RealEstateAgent", () => {
    const schema = generateRealEstateAgentSchema();

    expect(schema["@id"]).toBe(AGENT_ID);
    expect(schema.name).toBeTruthy();
    expect(schema.aggregateRating).toEqual({
      "@type": "AggregateRating",
      ratingValue: agentStats.averageRating.toString(),
      reviewCount: agentStats.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    });
    expect(schema.aggregateRating).not.toHaveProperty("itemReviewed");
    expect(schema).not.toHaveProperty("review");
  });

  it("does not add a second AggregateRating on GBP LocalBusiness markup", () => {
    const local = generateLocalBusinessSchema();

    expect(local["@id"]).toBe(AGENT_ID);
    expect(local).not.toHaveProperty("aggregateRating");
    expect(local).not.toHaveProperty("review");
  });

  it("uses Person authors and omits itemReviewed when reviews are nested", () => {
    const schema = generateReviewSchema([
      {
        author: "Google reviewer",
        rating: 5,
        reviewBody: "Closed in Centennial Hills 89144.",
        datePublished: "2026-08-01",
      },
    ]);

    expect(schema["@id"]).toBe(AGENT_ID);
    expect(schema).not.toHaveProperty("aggregateRating");
    const review = schema.review[0];
    expect(review).not.toHaveProperty("itemReviewed");
    expect(review.author).toEqual({
      "@type": "Person",
      name: "Google reviewer",
    });
    expect(typeof review.author).not.toBe("string");
  });

  it("keeps one AggregateRating when site-wide schemas are combined", () => {
    const graph = combineSchemas(
      generateRealEstateAgentSchema(),
      generateWebSiteSchema(),
      generateLocalBusinessSchema(),
    ) as { "@graph": Array<Record<string, unknown>> };

    const ratings = graph["@graph"].filter((node) => node.aggregateRating);
    expect(ratings).toHaveLength(1);
    expect(ratings[0]["@id"]).toBe(AGENT_ID);
  });
});
