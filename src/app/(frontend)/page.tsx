import HeroSection from "@/components/hero-section";
import Content from "@/components/content-3";
import FAQs from "@/components/faqs";
import CallToAction from "@/components/call-to-action";
import { Spacer } from "@/components/ui/grid";
import FeatureCarousel from "@/components/feature-carousel";
import { Heading } from "@/components/heading";
import FeaturesTwo from "@/components/features-2";
import CustomerLogos from "@/components/customer-logos";
import ServicesList from "@/components/services-list";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Spacer />
      <Heading
        title="Trusted by 50+ Brands Across Southeast Asia"
        description="Real results for brands across Malaysia and Southeast Asia, at every stage of growth."
      />
      <FeaturesTwo />
      <Spacer />
      <Heading
        title="How We Work"
        description="Three steps. One system."
      />
      <Content />
      <Spacer />
      <Heading
        title="Full Stack Digital Solutions"
        description="From brand awareness to revenue. We cover every channel and growth stage."
      />
      <ServicesList />
      <Spacer />
      <CustomerLogos />
      <Spacer />
      <FeatureCarousel />
      <Spacer />
      <FAQs />
      <Spacer />
      <CallToAction />
    </>
  );
}
