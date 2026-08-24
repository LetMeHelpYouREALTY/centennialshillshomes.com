import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StatsBand from "./StatsBand";

describe("StatsBand", () => {
  it("shows verified credential stats without invented volume figures", () => {
    render(<StatsBand />);

    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("Top 1%")).toBeInTheDocument();
    expect(screen.getByText("4.9★")).toBeInTheDocument();
    expect(screen.queryByText(/\$638M/i)).not.toBeInTheDocument();
  });
});
