import { component$ } from '@builder.io/qwik';

type ConsultationCtaProps = {
  title?: string;
  description?: string;
  class?: string;
};

export default component$<ConsultationCtaProps>((props) => {
  const title = props.title ?? 'Ready to Find Your Dream Home?';
  const description =
    props.description ??
    "Get personalized guidance from Las Vegas' top real estate expert. Dr. Jan Duffy serves Centennial Hills and northwest Las Vegas (ZIPs 89135, 89138, 89144).";

  return (
    <section class={`cta-section ${props.class ?? ''}`} aria-label="Contact Dr. Jan Duffy">
      <div class="container mx-auto px-4 py-12">
        <div class="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">{description}</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="/contact" class="btn btn-white">
              Schedule Consultation
            </a>
            <a href="/buy-a-home" class="btn btn-outline-white">
              Buy a Home
            </a>
            <a href="/sell-a-home" class="btn btn-outline-white">
              Sell a Home
            </a>
            <a href="/home-valuation" class="btn btn-outline-white">
              Home Valuation
            </a>
            <a href="tel:+17029031952" class="btn btn-outline-white">
              Call (702) 903-1952
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
