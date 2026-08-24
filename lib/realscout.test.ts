import { describe, it, expect } from "vitest";
import {
  REALSCOUT_OFFICE_LISTINGS_HTML,
  REALSCOUT_YOUR_LISTINGS_HTML,
  realScoutAgentEncodedId,
} from "./realscout";

describe("realScoutAgentEncodedId", () => {
  it("uses the verified encoded id by default", () => {
    expect(realScoutAgentEncodedId("")).toBe("QWdlbnQtMjI1MDUw");
    expect(realScoutAgentEncodedId(null)).toBe("QWdlbnQtMjI1MDUw");
  });

  it("encodes a numeric agent id instead of passing it through", () => {
    expect(realScoutAgentEncodedId("225050")).toBe("QWdlbnQtMjI1MDUw");
  });

  it("keeps an already-encoded id", () => {
    expect(realScoutAgentEncodedId("QWdlbnQtMjI1MDUw")).toBe("QWdlbnQtMjI1MDUw");
  });

  it("omits price-min/max so the office widget is not emptied by a narrow band", () => {
    expect(REALSCOUT_OFFICE_LISTINGS_HTML()).not.toMatch(/price-min/);
    expect(REALSCOUT_OFFICE_LISTINGS_HTML()).toContain("QWdlbnQtMjI1MDUw");
    expect(REALSCOUT_YOUR_LISTINGS_HTML()).toContain("realscout-your-listings");
  });
});
