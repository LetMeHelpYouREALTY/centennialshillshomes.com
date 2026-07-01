import LegalPage, { legalMetadata } from "@/components/templates/LegalPage";
import { legalPages } from "@/lib/legal-content";

const page = legalPages["fair-housing"];

export const metadata = legalMetadata(page);

export default function Page() {
  return <LegalPage page={page} />;
}
