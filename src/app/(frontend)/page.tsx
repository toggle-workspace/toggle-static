import HeroSection from "@/components/hero-section";
import Stats from "@/components/stats-2";
import Content from "@/components/content-3";
import Features from "@/components/features-1";
import FAQs from "@/components/faqs";
import CallToAction from "@/components/call-to-action";
import { Spacer } from "@/components/ui/grid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Content />
      <Features />
      <Spacer />
      <FAQs />
      <Spacer />
      <CallToAction />
    </>
  );
}
