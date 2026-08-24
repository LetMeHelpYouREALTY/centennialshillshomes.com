import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeHero from "./HomeHero";

describe("HomeHero", () => {
  it("renders Centennial Hills headline and live search tabs", () => {
    render(<HomeHero />);

    expect(
      screen.getByRole("heading", { name: /centennial hills/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Buy" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByPlaceholderText(/neighborhood, zip, or address/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("switches listing status tabs", async () => {
    const user = userEvent.setup();
    render(<HomeHero />);

    await user.click(screen.getByRole("tab", { name: "Sold" }));
    expect(screen.getByRole("tab", { name: "Sold" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});
