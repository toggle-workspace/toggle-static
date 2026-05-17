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
      "We run ads across Meta, Google, and TikTok, combining audience strategy, creative testing, and conversion data to find what works and scale it.",
  },
  {
    num: "02",
    name: "Email Marketing",
    headline: "Email That Earns.",
    description:
      "Automated flows, segmentation, and campaigns that turn one-time buyers into repeat customers. Email is the highest-ROI channel in digital, when the setup is right.",
  },
  {
    num: "03",
    name: "Branding",
    headline: "Stand for Something. Look the Part.",
    description:
      "We sharpen your positioning, clarify your message, and build a visual identity that holds across every channel, from ads to packaging.",
  },
  {
    num: "04",
    name: "Content Marketing",
    headline: "Content That Earns Trust.",
    description:
      "Content that gets found, earns trust, and moves people closer to a decision. Built for search and every stage of the funnel.",
  },
  {
    num: "05",
    name: "Web Development",
    headline: "Websites Built to Convert.",
    description:
      "We design and develop websites and landing pages that load fast, communicate clearly, and turn visitors into customers.",
  },
  {
    num: "06",
    name: "Reporting & Analysis",
    headline: "Reporting That Tells You What to Do Next.",
    description:
      "We build a reporting system that tells you what the numbers mean and what to do about them, not just what they were.",
  },
  {
    num: "07",
    name: "Search Engine Optimisation",
    headline: "Own the Search Results Your Competitors Are Chasing.",
    description:
      "We build organic search visibility across Google, AI answer engines, and the next generation of discovery. Once built, traffic grows without ongoing media spend.",
  },
  {
    num: "08",
    name: "Creative Production",
    headline: "Creative That Stops the Scroll.",
    description:
      "Visuals and video assets built with performance in mind, strong concepts, sharp messaging, and formats that work across every channel.",
  },
  {
    num: "09",
    name: "Conversion Optimisation",
    headline: "Get More from the Traffic You Have.",
    description:
      "We run structured testing programmes so data decides what works. Improvements build on each other over time.",
  },
  {
    num: "10",
    name: "Out of Home",
    headline: "Show Up Where Screens Can't Reach.",
    description:
      "Strategic outdoor media, billboards, transit, digital OOH, placed where your audience moves and tied back to your broader growth objectives.",
  },
  {
    num: "11",
    name: "Online Store Management",
    headline: "A Store That Works as Hard as Your Marketing Does.",
    description:
      "We take ownership of your e-commerce operations and continuously optimise for performance, so your store grows alongside your marketing.",
  },
  {
    num: "12",
    name: "Customer Relationship Management",
    headline: "Keep the Customers You Already Have.",
    description:
      "We build CRM systems that work in the background, continuously nurturing your customer base and recovering revenue that would otherwise walk out the door.",
  },
];

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
