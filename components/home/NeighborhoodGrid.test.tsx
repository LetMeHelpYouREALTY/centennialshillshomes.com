import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NeighborhoodGrid from "./NeighborhoodGrid";

describe("NeighborhoodGrid", () => {
  it("renders the six Figma Make northwest communities", () => {
    render(<NeighborhoodGrid />);

    for (const name of [
      "Providence",
      "Skye Canyon",
      "Tule Springs",
      "Centennial Hills",
      "Lone Mountain",
      "Sheep Mountain",
    ]) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    }

    expect(screen.queryByText(/family-friendly/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/good schools/i)).not.toBeInTheDocument();
  });
});
