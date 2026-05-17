import CallToAction from "@/components/call-to-action";
import { PageHeader } from "@/components/ui/page-header";
import { Spacer } from "@/components/ui/grid";
import ServicesList from "@/components/services-list";
import CustomerLogos from "@/components/customer-logos";

export default function ServicesPage() {
  return (
    <>
      <section>
        <PageHeader
          title="Full Stack Digital Solutions"
          subtitle="What We Offer"
          description="From brand awareness to revenue. We cover every channel and growth stage."
        />
      </section>
      <Spacer />
      <section>
        <ServicesList />
      </section>
      <Spacer />
      <section>
        <CustomerLogos />
      </section>
      <Spacer />
      <section>
        <CallToAction />
      </section>
    </>
  );
}
