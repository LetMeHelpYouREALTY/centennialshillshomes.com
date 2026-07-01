import CalculatorPage, { calculatorMetadata } from "@/components/templates/CalculatorPage";
import MortgageCalculator from "@/components/tools/MortgageCalculator";

export const metadata = calculatorMetadata(
  "mortgage-calculator",
  "Mortgage Calculator",
  "Free mortgage calculator for Las Vegas home buyers. Estimate monthly payments, interest, and total cost with Dr. Jan Duffy.",
);

export default function Page() {
  return (
    <CalculatorPage
      slug="mortgage-calculator"
      title="Mortgage Calculator"
      description="Estimate your monthly mortgage payment"
      heroSubtitle="Calculate monthly payments for your Las Vegas home purchase"
    >
      <MortgageCalculator />
    </CalculatorPage>
  );
}
