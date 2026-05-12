import { Card } from "@/components/ui/card";
import CallToAction from "@/components/call-to-action";
import { PageHeader } from "@/components/ui/page-header";
import { Spacer } from "@/components/ui/grid";

const caseStudies = [
  {
    client: "UNITAR Education Sdn. Bhd.",
    slug: "unitar",
    industry: "Education",
    location: "Petaling Jaya, Malaysia",
    services: [
      "Performance Marketing",
      "Reporting & Analysis",
      "Content Marketing",
    ],
    headline: "From Moonshot to Milestone",
    overview:
      "UNITAR International University is a leading private university in Malaysia, recognized for its innovative approach to education and a strong commitment to producing workforce-ready graduates.",
    challenge:
      "Aggressive student acquisition targets in a saturated market. By mid-2024, acquisition costs were spiraling — TikTok CPLs hitting RM525 and Facebook reaching RM291.",
    result:
      "Over 32,000 qualified leads generated from June to September 2025. CPL reduced by 47% year-on-year despite scaling ad spend to RM4 million. UNITAR captured 77% of total impressions in the Education & Training category in Malaysia.",
    metrics: [
      { value: "32K+", label: "Qualified Leads from Ads" },
      { value: "77%", label: "Total Impressions Across Malaysia" },
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
    overview:
      "CIMB Malaysia is one of the region's leading banking institutions. Organic search visibility is critical to capturing high-intent users researching banking solutions.",
    challenge:
      "Despite dominant brand presence, CIMB's organic performance wasn't keeping pace with its market position. Product pages lacked keyword depth and internal approval processes slowed publishing cycles.",
    result:
      "Within twelve months, CIMB's organic impressions grew by 52.6% and organic clicks increased by 34.5%, driven by a content system designed to compound rather than spike.",
    metrics: [
      { value: "52.6%", label: "Increase in Organic Impressions" },
      { value: "34.5%", label: "Growth in Organic Clicks" },
    ],
  },
  {
    client: "Kith & Kin Realty Sdn. Bhd.",
    slug: "kith-and-kin",
    industry: "Real Estate",
    location: "Kuala Lumpur, Malaysia",
    services: [
      "Performance Marketing",
      "Reporting & Analysis",
      "Content Marketing",
    ],
    headline: "Unlocking New Growth Channels",
    overview:
      "Kith and Kin are a reputable real estate agency specializing in development projects across Kuala Lumpur and Selangor.",
    challenge:
      "The client had never run paid advertising before — relying solely on organic methods and traditional cold-calling, which struggled to deliver consistent results.",
    result:
      "The campaign delivered 392% increase in leads over three months. Maintained CPL of RM35 throughout. Drove a 10% conversion rate from leads to closed deals.",
    metrics: [
      { value: "392%", label: "Increase in Lead Volume" },
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
    overview:
      "Kualesa Co. is a Malaysian eco-fashion brand committed to sustainability and ethical practices — proving high fashion and low carbon footprints can coexist.",
    challenge:
      "Breaking the stigma that eco-friendly clothing is boring or ill-fitting in an industry dominated by fast, cheap, and disposable fashion.",
    result:
      "Kualesa established itself as a leader in responsible fashion, transforming the shopping experience into a positive impact mission. Customers don't just buy the product — they join the movement.",
    metrics: [],
  },
  {
    client: "Singlife PTE LTD",
    slug: "singlife",
    industry: "Financial Services",
    location: "Singapore",
    services: ["Search Engine Optimization"],
    headline: "From Third to First in 90 Days",
    overview:
      "Singlife is a leading digital-first insurance provider in Singapore. As a YMYL brand, organic search visibility directly influences lead generation and long-term customer acquisition.",
    challenge:
      "Core insurance keywords sitting around position #3 — close to the top but far enough to feel the traffic gap every month.",
    result:
      "Within three months, core insurance keywords climbed from position three to position one, driving a 23% increase in organic clicks across high-value search categories.",
    metrics: [
      { value: "23%", label: "Increase in Organic Clicks" },
      { value: "#1", label: "Ranking for Core Insurance Keywords" },
    ],
  },
  {
    client: "Great Eastern Holdings LTD",
    slug: "great-eastern",
    industry: "Life Insurance",
    location: "Singapore",
    services: ["Search Engine Optimization"],
    headline: "Two Months to the Top",
    overview:
      "Great Eastern Singapore is one of the region's most established insurance providers with strong brand recognition.",
    challenge:
      "Core keywords plateaued around position #4. Meta titles lacked keyword targeting. Competitors were aggressively refining SEO strategies.",
    result:
      "Within two months, Great Eastern moved from position four to position one for core insurance search terms. Organic clicks grew by 16%. Search visibility increased by 75%.",
    metrics: [
      { value: "16%", label: "Increase in Organic Clicks" },
      { value: "75%", label: "Increase in Search Visibility" },
      { value: "#1", label: "From #4 to #1 Rankings" },
    ],
  },
  {
    client: "Restoran Mahbub",
    slug: "mahbub",
    industry: "Food & Beverage",
    location: "Malaysia",
    services: [
      "Performance Marketing",
      "Creative Production",
      "Conversion Optimisation",
    ],
    headline: "Online Delivery & Catering Growth",
    overview:
      "A well-established restaurant performing well offline but struggling to grow its online food delivery and catering business.",
    challenge:
      "Strong offline presence but minimal online revenue. Catering inquiries were inconsistent and hard to scale.",
    result:
      "RM2.6M+ in online revenue from delivery campaigns. A 46% increase in catering leads from Q3 to Q4 2024, with 300+ message conversations generated for their catering offering.",
    metrics: [
      { value: "RM2.6M+", label: "Online Revenue Generated" },
      { value: "+46%", label: "Catering Leads (Q3 to Q4 2024)" },
    ],
  },
  {
    client: "TPL Fresh Meats",
    slug: "tpl",
    industry: "FMCG",
    location: "Malaysia",
    services: ["Performance Marketing", "Reporting & Analysis"],
    headline: "From Walk-In to Online Revenue",
    overview:
      "Retail stores with good walk-in sales but struggling to generate online sales and reach new potential customers.",
    challenge:
      "Strong offline presence with no effective online sales channel — leaving a large portion of potential revenue untapped.",
    result:
      "Generated RM172K+ in online revenue from Meta at +20 ROAS over October 2021–2024, creating a reliable digital sales channel alongside the physical stores.",
    metrics: [
      { value: "RM172K+", label: "Revenue from Meta Ads" },
      { value: "20x", label: "Return on Ad Spend (ROAS)" },
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      <section>
        <PageHeader
          title="Real results for real businesses."
          subtitle="our work"
          description="Here's how we've helped brands grow across Malaysia and Southeast Asia."
        />
      </section>
      <Spacer />

      <section className="bg-background @container pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <div className="grid gap-6">
            {caseStudies.map((study) => (
              <Card
                key={study.slug}
                id={study.slug}
                variant="outline"
                className="p-6 md:p-8 scroll-mt-24"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">
                      {study.industry} · {study.location}
                    </p>
                    <h2 className="text-foreground font-serif text-2xl font-medium">
                      {study.client}
                    </h2>
                    <p className="text-muted-foreground text-sm italic mt-0.5">
                      {study.headline}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((svc) => (
                      <span
                        key={svc}
                        className="bg-muted text-muted-foreground rounded-full px-3 py-0.5 text-xs"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">{study.challenge}</p>
                  <p className="text-foreground">{study.result}</p>
                </div>

                {study.metrics.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-6 border-t pt-4">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-foreground font-serif text-2xl font-medium">
                          {m.value}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
