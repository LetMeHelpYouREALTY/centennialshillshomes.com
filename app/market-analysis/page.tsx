import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { servicePages } from "@/lib/service-content";

const page = servicePages["market-analysis"];

export const metadata = serviceMetadata("market-analysis", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="market-analysis" />;
}
