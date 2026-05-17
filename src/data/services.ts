export type Service = {
  num: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  headline: string;
  overview: string;
  whatWeDo: { title: string; description: string }[];
  outcomes: { stat: string; label: string }[];
};

export const SERVICES: Service[] = [
  {
    num: "01",
    slug: "performance-marketing",
    name: "Performance Marketing",
    description:
      "Drive growth with campaign optimization across Meta, Google, and TikTok — combining audience strategy, creative testing, and conversion data to find what works and scale it with confidence.",
    image: "https://picsum.photos/seed/performance-mktg/400/260",
    headline: "Spend Smarter. Scale Faster.",
    overview:
      "We manage your paid media end-to-end — from audience research and creative strategy to bidding, testing, and optimization. Every dollar is tracked to revenue, and every decision is backed by data. The result is a growth engine that compounds as we learn what works.",
    whatWeDo: [
      {
        title: "Paid Social",
        description:
          "Meta, TikTok, and LinkedIn campaigns built around your highest-value audiences — with creative and copy tested at scale.",
      },
      {
        title: "Paid Search",
        description:
          "Google and Bing search campaigns structured for intent, with smart bidding strategies tied directly to conversion goals.",
      },
      {
        title: "Creative Testing",
        description:
          "Systematic A/B and multivariate testing across hooks, formats, and messaging to find what converts — then scale it.",
      },
      {
        title: "Audience Strategy",
        description:
          "Prospecting, retargeting, and lookalike structures built to acquire new customers and re-engage existing ones efficiently.",
      },
      {
        title: "Budget Allocation",
        description:
          "Cross-channel budget modeling that moves spend toward what's working and pulls back where performance drops.",
      },
      {
        title: "Attribution & Reporting",
        description:
          "Clear weekly and monthly reporting tied to revenue — not just clicks and impressions — so you always know your real ROI.",
      },
    ],
    outcomes: [
      { stat: "3–5×", label: "Average ROAS improvement within 90 days" },
      { stat: "40%", label: "Reduction in customer acquisition cost" },
      { stat: "2×", label: "Increase in conversion rate from testing" },
    ],
  },
  {
    num: "02",
    slug: "branding",
    name: "Branding",
    description:
      "Sharpen your positioning, clarify your message, and create a visual identity that holds up across every touchpoint — from ads to packaging to your website.",
    image: "https://picsum.photos/seed/branding-id/400/260",
    headline: "Stand for Something. Look the Part.",
    overview:
      "A strong brand isn't just a logo — it's a system that communicates who you are before anyone reads a word. We build the full identity: positioning, voice, visual language, and the assets to execute it consistently at scale.",
    whatWeDo: [
      {
        title: "Brand Strategy",
        description:
          "Defining your positioning, target audience, and competitive differentiation — the foundation everything else is built on.",
      },
      {
        title: "Visual Identity",
        description:
          "Logo system, typography, colour palette, and iconography designed to work across digital, print, and packaging.",
      },
      {
        title: "Brand Voice",
        description:
          "Messaging frameworks and tone-of-voice guidelines that give your team a consistent way to communicate your brand.",
      },
      {
        title: "Brand Guidelines",
        description:
          "A comprehensive brand book that documents how to use your identity correctly across every format and channel.",
      },
      {
        title: "Design System",
        description:
          "Reusable component libraries and templates that make it fast and consistent to produce brand-aligned assets at scale.",
      },
      {
        title: "Packaging & Print",
        description:
          "Physical brand expressions — packaging, stationery, signage — that carry your identity beyond the screen.",
      },
    ],
    outcomes: [
      { stat: "60%", label: "Increase in brand recall after identity refresh" },
      { stat: "2×", label: "Faster content production with a design system" },
      { stat: "35%", label: "Higher perceived value vs competitors" },
    ],
  },
  {
    num: "03",
    slug: "web-development",
    name: "Web Development",
    description:
      "Design and develop websites and landing pages that load fast, communicate clearly, and turn visitors into leads or customers — with your growth goals in mind.",
    image: "https://picsum.photos/seed/web-dev/400/260",
    headline: "Websites Built to Convert, Not Just to Impress.",
    overview:
      "We design and build marketing websites and landing pages that do more than look good — they perform. Every layout decision, copy choice, and interaction is made with conversion in mind, built on a stack that's fast, maintainable, and easy to update.",
    whatWeDo: [
      {
        title: "Conversion-Led Design",
        description:
          "Every page layout is built around a clear conversion goal — with visual hierarchy, copy, and CTAs working together.",
      },
      {
        title: "Landing Pages",
        description:
          "High-speed, focused landing pages built for paid campaigns — designed to eliminate distraction and drive the action.",
      },
      {
        title: "Marketing Sites",
        description:
          "Full website builds with scalable CMS integration, so your team can update content without touching code.",
      },
      {
        title: "Performance Optimization",
        description:
          "Core Web Vitals optimization, image compression, and lazy loading to hit 90+ Lighthouse scores across the board.",
      },
      {
        title: "Analytics Setup",
        description:
          "GA4, GTM, and conversion tracking configured correctly from day one so your data is clean and actionable.",
      },
      {
        title: "A/B Testing Infrastructure",
        description:
          "Testing frameworks built into the site so you can continuously run experiments without developer involvement.",
      },
    ],
    outcomes: [
      { stat: "2.5×", label: "Average conversion rate uplift post-launch" },
      { stat: "95+", label: "Lighthouse performance scores as standard" },
      { stat: "60%", label: "Faster page load times vs previous sites" },
    ],
  },
  {
    num: "04",
    slug: "search-engine-optimisation",
    name: "Search Engine Optimisation",
    description:
      "Build search visibility that compounds over time — across traditional search, AI answers, and the next generation of organic discovery.",
    image: "https://picsum.photos/seed/seo-search/400/260",
    headline: "Own the Search Results Your Competitors Are Chasing.",
    overview:
      "SEO that compounds. We build sustainable organic visibility through technical foundations, content that earns authority, and a strategy that tracks the changing landscape — from traditional search to AI-powered answers. The result is a channel that grows without a media budget.",
    whatWeDo: [
      {
        title: "Technical SEO",
        description:
          "Site architecture, crawlability, Core Web Vitals, and schema markup — getting the technical foundations right so search engines can index and rank your content.",
      },
      {
        title: "Keyword Strategy",
        description:
          "Research and prioritization of keywords your target audience is actually searching — mapped to intent and funnel stage.",
      },
      {
        title: "Content Strategy",
        description:
          "A content plan built around topical authority — so you own the conversation in your category, not just individual keywords.",
      },
      {
        title: "Link Building",
        description:
          "Ethical, white-hat link acquisition through PR, digital outreach, and content partnerships that build real domain authority.",
      },
      {
        title: "Local SEO",
        description:
          "Google Business Profile optimization and local citation building for businesses with a physical presence or local service area.",
      },
      {
        title: "AI Search Optimization",
        description:
          "Structuring content to appear in AI Overviews, ChatGPT answers, and the next generation of conversational search results.",
      },
    ],
    outcomes: [
      { stat: "3×", label: "Organic traffic growth within 6 months" },
      { stat: "Top 3", label: "Rankings for primary commercial keywords" },
      { stat: "50%", label: "Reduction in paid spend dependency over 12 months" },
    ],
  },
];
