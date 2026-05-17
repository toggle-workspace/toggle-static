import CallToAction from "@/components/call-to-action";
import { PageHeader } from "@/components/ui/page-header";
import { Spacer } from "@/components/ui/grid";
import { Heading } from "@/components/heading";
import Content from "@/components/content-3";
import ServicesList from "@/components/services-list";
import CustomerLogos from "@/components/customer-logos";

const allServices = [
  {
    num: "01",
    name: "Performance Marketing",
    headline: "Spend Smarter. Scale Faster.",
    description:
      "We run ads across Meta, Google, and TikTok — combining audience strategy, creative testing, and conversion data to find what works and scale it.",
  },
  {
    num: "02",
    name: "Email Marketing",
    headline: "Your Most Profitable Channel, Done Right.",
    description:
      "Automated flows, segmentation, and campaigns that turn one-time buyers into loyal customers. The highest-ROI channel in digital — when it's done right.",
  },
  {
    num: "03",
    name: "Branding",
    headline: "Stand for Something. Look the Part.",
    description:
      "We sharpen your positioning, clarify your message, and build a visual identity that holds up across every touchpoint — from ads to packaging.",
  },
  {
    num: "04",
    name: "Content Marketing",
    headline: "Content That Builds. Not Just Fills Space.",
    description:
      "Content that gets found, earns trust, and moves people closer to a decision — aligned to your funnel and built for every channel.",
  },
  {
    num: "05",
    name: "Web Development",
    headline: "Websites Built to Convert, Not Just to Impress.",
    description:
      "We design and develop websites and landing pages that load fast, communicate clearly, and turn visitors into customers.",
  },
  {
    num: "06",
    name: "Reporting & Analysis",
    headline: "Know What's Working. Know What to Do Next.",
    description:
      "We build a reporting system that tells you what the numbers mean and what to do about them — not just what they were.",
  },
  {
    num: "07",
    name: "Search Engine Optimisation",
    headline: "Own the Search Results Your Competitors Are Chasing.",
    description:
      "We build search visibility that compounds — across Google, AI answer engines, and the next generation of organic discovery.",
  },
  {
    num: "08",
    name: "Creative Production",
    headline: "Make Things People Actually Stop For.",
    description:
      "Visuals and video assets built with performance in mind — strong concepts, sharp messaging, and formats that work across every channel.",
  },
  {
    num: "09",
    name: "Conversion Optimisation",
    headline: "More Traffic Isn't Always the Answer.",
    description:
      "We run structured testing programmes that remove guesswork — letting data decide what works, so improvements compound over time.",
  },
  {
    num: "10",
    name: "Out of Home",
    headline: "Show Up Where Screens Can't Reach.",
    description:
      "Strategic outdoor media — billboards, transit, digital OOH — placed where your audience moves and tied back to your broader growth objectives.",
  },
  {
    num: "11",
    name: "Online Store Management",
    headline: "A Store That Works as Hard as Your Marketing Does.",
    description:
      "We take ownership of your e-commerce operations and continuously optimise for performance — so your store grows alongside your marketing.",
  },
  {
    num: "12",
    name: "Customer Relationship Management",
    headline: "Turn One-Time Buyers Into Lifelong Customers.",
    description:
      "We build CRM systems that work in the background — continuously nurturing your customer base and recovering revenue that would otherwise walk out the door.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section>
        <PageHeader
          title="Full Stack Digital Solutions"
          subtitle="What We Offer"
          description="From brand awareness to revenue at scale — we cover every channel and growth stage."
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
