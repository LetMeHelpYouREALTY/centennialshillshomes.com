import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ReviewsSection from "./ReviewsSection";

describe("ReviewsSection", () => {
  it("does not invent named testimonials", () => {
    render(<ReviewsSection />);

    expect(screen.queryByText(/Tom Sanders/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Vitor Palmer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Emily Rodriguez/i)).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view google reviews/i })).toHaveAttribute("href");
    expect(screen.getByText(/4\.9 from 200\+ Google reviews/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /google reviews for dr\. jan duffy/i })).toBeInTheDocument();
  });
});
