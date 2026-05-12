import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-1";
import { Card } from "@/components/ui/card";

const allServices = [
  {
    num: "01",
    name: "Performance Marketing",
    headline: "Spend Smarter. Scale Faster.",
    description:
      "Drive growth with campaign optimization across Meta, Google, and TikTok — combining audience strategy, creative testing, and conversion data to find what works and scale it with confidence.",
  },
  {
    num: "02",
    name: "Email Marketing",
    headline: "Your Most Profitable Channel, Done Right.",
    description:
      "Set up automated flows, segmentation, and campaigns that turn one-time buyers into loyal customers and reduce churn over time — compounding results from your highest-ROI channel.",
  },
  {
    num: "03",
    name: "Branding",
    headline: "Stand for Something. Look the Part.",
    description:
      "Sharpen your positioning, clarify your message, and create a visual identity that holds up across every touchpoint — from ads to packaging to your website.",
  },
  {
    num: "04",
    name: "Content Marketing",
    headline: "Content That Builds. Not Just Fills Space.",
    description:
      "Build a content system that drives traffic, builds trust, and supports conversion — aligned to your funnel and your audience at every stage.",
  },
  {
    num: "05",
    name: "Web Development",
    headline: "Websites Built to Convert, Not Just to Impress.",
    description:
      "Design and develop websites and landing pages that load fast, communicate clearly, and turn visitors into leads or customers — with your growth goals in mind.",
  },
  {
    num: "06",
    name: "Reporting & Analysis",
    headline: "Know What's Working. Know What to Do Next.",
    description:
      "Build a reporting and intelligence system tailored to your business — so you always know where growth is coming from, what's holding it back, and where to focus next.",
  },
  {
    num: "07",
    name: "Search Engine Optimisation",
    headline: "Own the Search Results Your Competitors Are Chasing.",
    description:
      "Build search visibility that compounds over time — across traditional search, AI answers, and the next generation of organic discovery.",
  },
  {
    num: "08",
    name: "Creative Production",
    headline: "Make Things People Actually Stop For.",
    description:
      "Produce scroll-stopping creative assets — video, photography, design, and copy — optimised for performance marketing and built to convert.",
  },
  {
    num: "09",
    name: "Conversion Optimisation",
    headline: "More Traffic Isn't Always the Answer.",
    description:
      "Improve what happens after the click — structured testing programmes that remove guesswork and let data decide what works, so improvements compound over time.",
  },
  {
    num: "10",
    name: "Out of Home",
    headline: "Show Up Where Screens Can't Reach.",
    description:
      "Strategic offline media that puts your brand in front of the right people, in the right places — and ties back to your broader digital growth objectives.",
  },
  {
    num: "11",
    name: "Online Store Management",
    headline: "A Store That Works as Hard as Your Marketing Does.",
    description:
      "Take ownership of your e-commerce operations — optimising product listings, promotions, checkout flows, and store performance continuously.",
  },
  {
    num: "12",
    name: "Customer Relationship Management",
    headline: "Turn One-Time Buyers Into Lifelong Customers.",
    description:
      "Build retention systems that grow customer lifetime value automatically — segmentation, lifecycle flows, and loyalty strategies that keep customers coming back.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-background pt-44 pb-16">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-muted-foreground text-sm mb-3">What We Offer</p>
          <h1 className="font-serif text-5xl font-medium sm:text-6xl text-balance">
            Full Stack Digital Solutions
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl text-balance">
            From brand awareness to final scale, we cover it all. Explore our
            range of services built to grow your business at every stage.
          </p>
        </div>
      </section>

      <Features />

      <section className="bg-background @container py-12 pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <div className="grid gap-3">
            {allServices.map((svc) => (
              <Card
                key={svc.num}
                variant="outline"
                className="p-6 hover:border-foreground/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-muted-foreground font-mono text-sm shrink-0 mt-0.5">
                    ({svc.num})
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-foreground font-medium">{svc.name}</h3>
                    <p className="text-muted-foreground text-sm italic">
                      {svc.headline}
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      {svc.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
