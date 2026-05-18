import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { servicePages } from "@/lib/service-content";

const page = servicePages["investment-properties"];

export const metadata = serviceMetadata("investment-properties", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="investment-properties" />;
}
