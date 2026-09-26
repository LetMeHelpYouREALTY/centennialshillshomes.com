import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { servicePages } from "@/lib/service-content";

const page = servicePages["property-management"];

export const metadata = serviceMetadata("property-management", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="property-management" />;
}
