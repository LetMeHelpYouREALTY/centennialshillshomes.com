import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AgentBio from "./AgentBio";

describe("AgentBio", () => {
  it("uses verified NAP, license, and brokerage", () => {
    render(<AgentBio />);

    expect(screen.getByRole("heading", { name: /dr\. jan duffy/i })).toBeInTheDocument();
    expect(screen.getByText(/S\.0197614\.LLC/)).toBeInTheDocument();
    expect(screen.getByText(/1490 Center Crossing Rd/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /call \(702\) 903-1952/i })).toHaveAttribute(
      "href",
      "tel:+17029031952",
    );
    expect(screen.queryByText(/S\.0191616/)).not.toBeInTheDocument();
  });
});
