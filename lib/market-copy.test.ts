import { describe, it, expect } from "vitest";
import {
  areaPriceFaq,
  currentMarketIntro,
  currentMarketItems,
  evergreenMarketFaqs,
  listingTourFaqs,
} from "./market-copy";

const FAIR_HOUSING_PROXIES =
  /family-friendly|good schools|safe neighborhood|top-rated schools|low crime/i;

const INVENTED_MEDIANS = /\$450,000|\$452,500|\$550,000|\$4\.2 Million|\$4\.2M/i;

describe("market-copy", () => {
  it("does not use Fair Housing proxies or invented MLS medians", () => {
    const blobs = [
      currentMarketIntro("Skye Canyon", "89166"),
      areaPriceFaq("Skye Canyon", "89166").answer,
      ...evergreenMarketFaqs().map((f) => `${f.question} ${f.answer}`),
      ...listingTourFaqs.map((f) => `${f.question} ${f.answer}`),
      ...currentMarketItems("Centennial Hills").map((i) => `${i.value} ${i.label}`),
    ].join(" ");

    expect(blobs).not.toMatch(FAIR_HOUSING_PROXIES);
    expect(blobs).not.toMatch(INVENTED_MEDIANS);
    expect(blobs).toMatch(/702\) 903-1952/);
  });

  it("points buyers to a live CMA instead of a stale snapshot", () => {
    expect(areaPriceFaq("Centennial Hills", "89144").answer).toMatch(/complimentary CMA/i);
    expect(currentMarketItems("Centennial Hills")[0].value).toBe("Live MLS");
  });
});
