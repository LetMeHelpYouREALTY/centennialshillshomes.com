import { describe, it, expect } from "vitest";
import { CONTENT_LAST_UPDATED_ISO, CONTENT_LAST_UPDATED_LABEL } from "./content-freshness";

describe("content freshness", () => {
  it("stamps August 2026, not the January 2026 placeholder month", () => {
    expect(CONTENT_LAST_UPDATED_LABEL).toBe("August 2026");
    expect(CONTENT_LAST_UPDATED_ISO).toBe("2026-08-24");
    expect(CONTENT_LAST_UPDATED_LABEL).not.toMatch(/January 2026/);
  });
});
