import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { agentInfo } from "@/lib/site-config";

vi.mock("next/navigation", () => ({
  usePathname: () => "/listings",
}));

describe("Navbar engagement", () => {
  it("exposes search and call CTAs with a labeled main navigation", () => {
    render(<Navbar />);

    expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /search listings/i }).length).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: new RegExp(agentInfo.phone.replace(/[()]/g, "\\$&")) })
        .length,
    ).toBeGreaterThan(0);
  });
});

describe("Footer engagement", () => {
  it("puts call, directions, reviews, and schedule CTAs in the footer", () => {
    render(<Footer />);

    expect(screen.getAllByRole("link", { name: /call \(702\) 903-1952/i })[0]).toHaveAttribute(
      "href",
      agentInfo.phoneTel,
    );
    expect(screen.getByRole("link", { name: /get directions/i })).toHaveAttribute("href");
    expect(screen.getByRole("link", { name: /view google reviews/i })).toHaveAttribute("href");
    expect(screen.getByRole("link", { name: /schedule consultation/i })).toHaveAttribute(
      "href",
      "/contact",
    );
  });
});
