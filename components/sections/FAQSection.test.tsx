import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FAQSection from "./FAQSection";

describe("FAQSection", () => {
  it("keeps every answer in the document for SEO even when collapsed", () => {
    render(
      <FAQSection
        faqs={[
          { question: "What areas does Dr. Jan Duffy serve in Las Vegas?", answer: "Centennial Hills ZIP 89144." },
          { question: "Does Dr. Jan Duffy provide free market analysis?", answer: "Yes. Complimentary CMA." },
        ]}
      />,
    );

    expect(screen.getByText("Centennial Hills ZIP 89144.")).toBeInTheDocument();
    expect(screen.getByText("Yes. Complimentary CMA.")).toBeInTheDocument();
  });
});
