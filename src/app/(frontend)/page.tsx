import HeroSection from "@/components/hero-section";
import Content from "@/components/content-3";
import ServicesGrid from "@/components/services-grid";
import FAQs from "@/components/faqs";
import CallToAction from "@/components/call-to-action";
import { Spacer } from "@/components/ui/grid";
import FeatureCarousel from "@/components/feature-carousel";
import { Heading } from "@/components/heading";
import FeaturesTwo from "@/components/features-2";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Spacer />
      <Heading
        title="Trusted by 50+ Brands Across Southeast Asia"
        description="We deliver measurable results that help ambitious brands grow sustainably — across every channel and every stage."
      />
      <FeaturesTwo />
      <Spacer />
      <Heading
        title="Built to Grow the Whole Business"
        description="We build a full-funnel system across ads, creative, lifecycle, and reporting so every part of your marketing works toward the same goal: sustainable, measurable growth you can scale with confidence."
      />
      <Content />
      <Spacer />
      <Heading
        title="Full Stack Digital Solutions"
        description="From brand awareness to final scale, we cover every channel and growth stage — built to compound over time."
      />
      <ServicesGrid />
      <Spacer />
      <FeatureCarousel />
      <Spacer />
      <FAQs />
      <Spacer />
      <CallToAction />
    </>
  );
}
