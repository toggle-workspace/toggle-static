"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin } from "lucide-react";

const caseStudies = [
  {
    client: "UNITAR Education Sdn. Bhd.",
    slug: "unitar",
    industry: "Education",
    location: "Petaling Jaya, Malaysia",
    services: ["Performance Marketing", "Reporting & Analysis", "Content Marketing"],
    headline: "From Moonshot to Milestone",
    result: "Over 32,000 qualified leads generated. CPL reduced by 47% YoY despite scaling ad spend to RM4 million.",
    metrics: [
      { value: "32K+", label: "Qualified Leads" },
      { value: "77%", label: "Total Impressions" },
      { value: "47%", label: "CPL Reduction YoY" },
    ],
  },
  {
    client: "CIMB Bank Berhad",
    slug: "cimb",
    industry: "Banking",
    location: "Kuala Lumpur, Malaysia",
    services: ["Search Engine Optimization"],
    headline: "From Authority Gap to Search Dominance",
    result: "Organic impressions grew by 52.6% and organic clicks increased by 34.5% within twelve months.",
    metrics: [
      { value: "52.6%", label: "Organic Impressions" },
      { value: "34.5%", label: "Organic Clicks Growth" },
    ],
  },
  {
    client: "Kith & Kin Realty Sdn. Bhd.",
    slug: "kith-and-kin",
    industry: "Real Estate",
    location: "Kuala Lumpur, Malaysia",
    services: ["Performance Marketing", "Reporting & Analysis", "Content Marketing"],
    headline: "Unlocking New Growth Channels",
    result: "392% increase in leads over three months. CPL of RM35 maintained throughout.",
    metrics: [
      { value: "392%", label: "Lead Volume Increase" },
      { value: "RM35", label: "Cost Per Lead" },
      { value: "10%", label: "Lead-to-Deal Conversion" },
    ],
  },
  {
    client: "Kualesa Apparel Sdn Bhd",
    slug: "kualesa",
    industry: "Apparel",
    location: "Petaling Jaya, Malaysia",
    services: ["Performance Marketing", "Reporting & Analysis"],
    headline: "Stitching a Movement",
    result: "Established as a leader in responsible fashion, transforming shopping into a positive impact mission.",
    metrics: [],
  },
  {
    client: "Singlife PTE LTD",
    slug: "singlife",
    industry: "Financial Services",
    location: "Singapore",
    services: ["Search Engine Optimization"],
    headline: "From Third to First in 90 Days",
    result: "Core insurance keywords climbed from position three to position one, driving a 23% increase in organic clicks.",
    metrics: [
      { value: "23%", label: "Organic Clicks Increase" },
      { value: "#1", label: "Core Insurance Keywords" },
    ],
  },
  {
    client: "Great Eastern Holdings LTD",
    slug: "great-eastern",
    industry: "Life Insurance",
    location: "Singapore",
    services: ["Search Engine Optimization"],
    headline: "Two Months to the Top",
    result: "Moved from position four to position one. Organic clicks grew 16%. Search visibility increased 75%.",
    metrics: [
      { value: "16%", label: "Organic Clicks Increase" },
      { value: "75%", label: "Search Visibility" },
      { value: "#1", label: "From #4 to #1" },
    ],
  },
  {
    client: "Restoran Mahbub",
    slug: "mahbub",
    industry: "Food & Beverage",
    location: "Malaysia",
    services: ["Performance Marketing", "Creative Production", "Conversion Optimisation"],
    headline: "Online Delivery & Catering Growth",
    result: "RM2.6M+ in online revenue from delivery campaigns. 46% increase in catering leads from Q3 to Q4 2024.",
    metrics: [
      { value: "RM2.6M+", label: "Online Revenue" },
      { value: "+46%", label: "Catering Leads Q3–Q4" },
    ],
  },
  {
    client: "TPL Fresh Meats",
    slug: "tpl",
    industry: "FMCG",
    location: "Malaysia",
    services: ["Performance Marketing", "Reporting & Analysis"],
    headline: "From Walk-In to Online Revenue",
    result: "Generated RM172K+ in online revenue from Meta at +20 ROAS over October 2021–2024.",
    metrics: [
      { value: "RM172K+", label: "Revenue from Meta Ads" },
      { value: "20x", label: "Return on Ad Spend" },
    ],
  },
];

export default function FeatureCarousel() {
  return (
    <section className="bg-background @container overflow-hidden">
      <Carousel
        className="relative mx-auto"
        opts={{ align: "start", loop: true }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4 px-6 pb-6 pt-12 lg:px-8 lg:pb-12">
            <h2 className="text-foreground max-w-xl text-balance text-4xl font-semibold lg:text-5xl">
              Real results for real businesses
            </h2>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static size-8 translate-x-0 translate-y-0 rounded-full" />
              <CarouselNext className="static size-8 translate-x-0 translate-y-0 rounded-full" />
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div aria-hidden="true" className="border-y max-lg:hidden" />
          <div className="mx-auto overflow-hidden border lg:max-w-6xl">
            <CarouselContent className="-ml-4 *:bg-card *:not-dark:bg-card/50 *:p-8 *:pt-12 md:divide-x md:*:basis-1/2 lg:-mr-4 lg:*:basis-1/3">
              {caseStudies.map((cs, i) => (
                <CarouselItem
                  key={i}
                  className="grid-rows-subgrid row-span-2 grid gap-12"
                >
                  <div aria-hidden="true" className="flex flex-col justify-between gap-6">
                    <div className="space-y-1">
                      <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                        <MapPin className="size-3" />
                        {cs.location}
                      </div>
                      <div className="text-foreground text-sm font-semibold">
                        {cs.client}
                      </div>
                      <div className="bg-muted/60 text-muted-foreground inline-block rounded-full px-2 py-0.5 text-xs">
                        {cs.industry}
                      </div>
                    </div>
                    {cs.metrics.length > 0 ? (
                      <div className="grid grid-cols-2 gap-2">
                        {cs.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="bg-muted/40 ring-border-illustration rounded-xl p-3 ring-1"
                          >
                            <div className="text-foreground text-xl font-bold">
                              {m.value}
                            </div>
                            <div className="text-muted-foreground mt-0.5 text-xs">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-muted/40 ring-border-illustration rounded-xl p-4 ring-1">
                        <p className="text-muted-foreground text-sm italic">
                          {cs.result}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {cs.services.map((s) => (
                        <span
                          key={s}
                          className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/65 self-end text-balance font-medium">
                    <strong className="text-foreground font-medium">
                      {cs.headline}
                    </strong>{" "}
                    — {cs.result}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <div aria-hidden="true" className="max-lg:hidden" />
        </div>

        <div className="mx-auto w-full max-w-6xl border-x border-dashed" />
      </Carousel>
    </section>
  );
}
