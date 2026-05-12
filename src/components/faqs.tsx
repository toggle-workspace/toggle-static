import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SideCol({ wide }: { wide?: boolean }) {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }}
    >
      <div aria-hidden="true" className={`p-[0.5px]${wide ? " w-full" : ""}`}>
        <div className="bg-card/90 h-full w-2 rounded md:w-6 lg:w-full" />
      </div>
    </div>
  );
}

function GridRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-zinc-950/10">
      <SideCol wide />
      <div className="max-w-276 lg:min-w-276 mx-auto w-full">
        <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px] md:**:data-[slot=content]:py-0">
          {children}
        </div>
      </div>
      <SideCol />
    </div>
  );
}

const faqGroups = [
  {
    title: "General",
    items: [
      {
        value: "general-1",
        question: "What do I get in the Free Brand Audit?",
        answer:
          "Our Free Brand Audit is a comprehensive review of your current marketing channels, funnel performance and growth opportunities. You'll receive a detailed roadmap including 3–5 prioritized growth levers, identification of quick wins to boost conversion rates, and recommended next steps to improve results.",
      },
      {
        value: "general-2",
        question: "How long does it take to receive the audit?",
        answer:
          "We value speed without compromising quality. Typically, we will respond to your initial request within 24 hours and deliver the completed audit within 3–5 business days, depending on the complexity of your current setup and data availability.",
      },
      {
        value: "general-3",
        question: "Who will I work with?",
        answer:
          "You won't be handed off to a junior team. Every client gets a dedicated team of three: a Senior Account Manager as your strategic partner and main point of contact, a Senior Performance Marketer expert in media buying and campaign optimization, and a Backup Performance Marketing Specialist to ensure coverage and support.",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        value: "services-1",
        question: "What type of brands are you the best fit for?",
        answer:
          "We've consulted and helped clients across all verticals including Education & EdTech, Healthcare, Technology, Professional services, Food & Beverage, FMCG, E-commerce, Lifestyle Brands, and many others. If you're a brand that's serious about growth, we're built to work with you regardless of industry.",
      },
      {
        value: "services-2",
        question: "Do you do performance marketing only?",
        answer:
          "Performance marketing is one part of what we do but sustainable growth requires more. We build growth systems that span Paid Media, Creative Strategy, SEO & CRO, Content, Email and Lifecycle Marketing, CRM and sales integration, and AI-powered automation — all working together under one strategy.",
      },
      {
        value: "services-3",
        question: "What results can I expect and how fast?",
        answer:
          "While every business is unique, our framework is designed for rapid impact. Leads and sales can start coming in immediately upon campaign launch (Day 1). Early performance improvements often become visible within Weeks 2–4. More meaningful, compounding growth typically builds over Days 60–90 as we test, optimise and scale what's working.",
      },
    ],
  },
];

export default function FAQs() {
  return (
    <GridRow>
      <div className="grid gap-px md:grid-cols-5">
        {/* Left — heading */}
        <div
          data-grid-content="true"
          className="max-w-lg py-6 max-md:px-6 md:col-span-2 md:p-10 lg:p-12"
        >
          <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
          <p className="text-muted-foreground mt-4 text-balance text-lg">
            Your questions answered
          </p>
          <p className="text-muted-foreground mt-6 max-md:hidden">
            Can&apos;t find what you&apos;re looking for? Contact our{" "}
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              customer support team
            </Link>
          </p>
        </div>

        {/* Right — accordion groups */}
        <div
          data-grid-content="true"
          className="space-y-12 pt-6 md:col-span-3 md:px-4 md:pb-4 md:pt-10 lg:pt-12"
        >
          {faqGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-foreground pl-6 text-lg font-semibold">
                {group.title}
              </h3>
              <Accordion className="-space-y-1">
                {group.items.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="border-b last:border-b-0 data-open:bg-card data-open:ring-foreground/5 group peer rounded-xl border-none px-6 py-1 data-open:border-none data-open:shadow data-open:ring-1"
                  >
                    <AccordionTrigger className="cursor-pointer rounded-none text-base transition-none hover:no-underline data-open:border-transparent">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground pb-4">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Mobile support link */}
        <div data-grid-content="true" className="md:hidden">
          <p className="text-muted-foreground p-6">
            Can&apos;t find what you&apos;re looking for? Contact our{" "}
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </GridRow>
  );
}
