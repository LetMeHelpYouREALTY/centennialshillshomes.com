import CalculatorPage, { calculatorMetadata } from "@/components/templates/CalculatorPage";
import AffordabilityCalculator from "@/components/tools/AffordabilityCalculator";

export const metadata = calculatorMetadata(
  "affordability-calculator",
  "Affordability Calculator",
  "Calculate how much home you can afford in Las Vegas based on income, debt, and down payment.",
);

export default function Page() {
  return (
    <CalculatorPage
      slug="affordability-calculator"
      title="Affordability Calculator"
      description="How much home can you afford?"
      heroSubtitle="Estimate your maximum home price using the 28% income guideline"
    >
      <AffordabilityCalculator />
    </CalculatorPage>
  );
}
