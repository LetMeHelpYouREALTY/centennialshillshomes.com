import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { servicePages } from "@/lib/service-content";

const page = servicePages["luxury-home-sales"];

export const metadata = serviceMetadata("luxury-home-sales", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="luxury-home-sales" />;
}
