import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { servicePages } from "@/lib/service-content";

const page = servicePages["california-equity-buyers"];

export const metadata = serviceMetadata("california-equity-buyers", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="california-equity-buyers" />;
}
