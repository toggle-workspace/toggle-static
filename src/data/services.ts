export type ApproachCard = {
  title: string;
  highlightText: string;
  bodyText: string;
};

export type ServiceApproach = {
  label: string;
  heading: string;
  body: string;
  cards: [ApproachCard, ApproachCard, ApproachCard];
};

export type Service = {
  num: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  headline: string;
  overview: string;
  approach: ServiceApproach;
  whatWeDo: { title: string; description: string }[];
  outcomes: { stat: string; label: string }[];
};

export const SERVICES: Service[] = [
  {
    num: "01",
    slug: "performance-marketing",
    name: "Performance Marketing",
    description:
      "We run ads across Meta, Google, and TikTok, combining audience strategy, creative testing, and conversion data to find what works and scale it.",
    image: "https://picsum.photos/seed/performance-mktg/400/260",
    headline: "Spend Smarter. Scale Faster.",
    overview:
      "Performance marketing at Toggle is built around one goal: profitable growth. We manage and optimise campaigns across Meta, Google, and TikTok combining audience strategy, creative testing, and conversion data to find what works and scale it with confidence. Every dollar is tracked to revenue. Every decision is backed by data. The longer we run, the sharper the spend gets.",
    approach: {
      label: "Our Approach",
      heading: "Built Around Revenue, Not Reports",
      body: "We track every campaign back to what it drives for your business. Clicks and impressions are inputs. Revenue is the outcome.",
      cards: [
        {
          title: "Creative Testing at Scale",
          highlightText: "We test hooks, formats, and messaging systematically.",
          bodyText: "The best performers scale. The rest get cut. No guessing, no gut feel.",
        },
        {
          title: "Multi-Market Expertise",
          highlightText: "We've run campaigns across Asia, the US, Europe, and the Middle East.",
          bodyText: "We know which platforms, audiences, and creative approaches convert in each market.",
        },
        {
          title: "Strategy and Execution in One Team",
          highlightText: "The people who plan your campaigns also run them.",
          bodyText: "No handoffs between strategists and buyers. Faster decisions, cleaner results.",
        },
      ],
    },
    whatWeDo: [
      {
        title: "Paid Social",
        description:
          "Meta, TikTok, and LinkedIn campaigns built around your highest-value audiences, with creative and copy tested at scale.",
      },
      {
        title: "Paid Search",
        description:
          "Google and Bing search campaigns structured for intent, with smart bidding strategies tied directly to conversion goals.",
      },
      {
        title: "Creative Testing",
        description:
          "Systematic A/B and multivariate testing across hooks, formats, and messaging to find what converts, then scale it.",
      },
      {
        title: "Audience Strategy",
        description:
          "Prospecting, retargeting, and lookalike structures built to acquire new customers and re-engage existing ones.",
      },
      {
        title: "Budget Allocation",
        description:
          "We shift budget toward what's working and pull back where performance drops, across every channel in the mix.",
      },
      {
        title: "Attribution & Reporting",
        description:
          "Clear weekly and monthly reporting tied to revenue, not clicks and impressions. You always know your real ROI.",
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
      "We sharpen your positioning, clarify your message, and build a visual identity that holds across every channel, from ads to packaging.",
    image: "https://picsum.photos/seed/branding-id/400/260",
    headline: "Stand for Something. Look the Part.",
    overview:
      "A strong brand is the foundation every other marketing effort builds on. We work with you to sharpen your positioning, clarify your message, and build a visual identity that holds across every channel, from your ads to your packaging to your website. We build the positioning, voice, visual language, and the assets to carry it wherever your audience is.",
    approach: {
      label: "Our Approach",
      heading: "A Brand System You Can Actually Use",
      body: "Most brand projects end with a PDF that never gets opened. We build identity systems that travel across every channel and hold up under pressure.",
      cards: [
        {
          title: "Positioning Before Design",
          highlightText: "We define who you are and who you're for before anything visual gets made.",
          bodyText: "Every design decision builds on a clear strategy. The aesthetic follows the argument.",
        },
        {
          title: "Built for Every Market",
          highlightText: "Your brand needs to work across channels, languages, and regions.",
          bodyText: "We build identity systems that stay coherent whether they're on a billboard in Kuala Lumpur or a campaign in London.",
        },
        {
          title: "Guidelines Your Team Will Use",
          highlightText: "Brand guidelines your designers can follow and your marketers can act on.",
          bodyText: "Templates, component libraries, and documented rules that make consistent output fast.",
        },
      ],
    },
    whatWeDo: [
      {
        title: "Brand Strategy",
        description:
          "We define your positioning, target audience, and competitive differentiation. Every other brand decision builds on this.",
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
          "A practical brand book documenting how to use your identity correctly across every format and channel.",
      },
      {
        title: "Design System",
        description:
          "Reusable component libraries and templates that make it fast and consistent to produce brand-aligned assets at scale.",
      },
      {
        title: "Packaging & Print",
        description:
          "Physical brand expressions across packaging, stationery, and signage that carry your identity beyond the screen.",
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
      "We design and develop websites and landing pages that load fast, communicate clearly, and turn visitors into customers.",
    image: "https://picsum.photos/seed/web-dev/400/260",
    headline: "Websites Built to Convert.",
    overview:
      "Your website is the centre of your marketing system. We design and develop websites and landing pages that load fast, communicate clearly, and turn visitors into leads or customers. Every build is done with your growth goals in mind, not just aesthetics.",
    approach: {
      label: "Our Approach",
      heading: "Conversion Is the Only Metric That Matters",
      body: "Every layout decision, every CTA, every line of copy starts with one question: does this move the visitor closer to taking action?",
      cards: [
        {
          title: "Conversion-First Design",
          highlightText: "We start with your goal and build the page around it.",
          bodyText: "Whether it's leads, sales, or sign-ups, the design serves the conversion. The aesthetic follows.",
        },
        {
          title: "Performance as Standard",
          highlightText: "90+ Lighthouse scores and fast load times on every device.",
          bodyText: "Core Web Vitals are built in from day one, not patched in after the site goes live.",
        },
        {
          title: "Easy for Your Team to Update",
          highlightText: "CMS-integrated builds your team can manage without a developer.",
          bodyText: "Visual or structured editing, built around how your content team actually works.",
        },
      ],
    },
    whatWeDo: [
      {
        title: "Conversion-Led Design",
        description:
          "Every page layout is built around a clear conversion goal, with visual hierarchy, copy, and CTAs aligned to it.",
      },
      {
        title: "Landing Pages",
        description:
          "High-speed, focused landing pages built for paid campaigns, designed to eliminate distraction and drive the action.",
      },
      {
        title: "Marketing Sites",
        description:
          "Full website builds with scalable CMS integration, so your team can update content without touching code.",
      },
      {
        title: "Performance Optimisation",
        description:
          "Core Web Vitals optimisation, image compression, and lazy loading to hit 90+ Lighthouse scores across the board.",
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
      "We build organic search visibility across Google, AI answer engines, and the next generation of discovery. Once built, traffic grows without ongoing media spend.",
    image: "https://picsum.photos/seed/seo-search/400/260",
    headline: "Own the Search Results Your Competitors Are Chasing.",
    overview:
      "SEO at Toggle goes beyond page rankings. We build a search presence that performs across Google, AI-powered answer engines, and the emerging landscape of LLM-driven discovery, so your brand shows up wherever your customers are looking. Whether you're starting from scratch or recovering lost ground, we build a system designed to grow consistently.",
    approach: {
      label: "Our Approach",
      heading: "Rankings That Hold",
      body: "Short-term tactics get short-term results. We build the technical foundations and content depth that keep you at the top once you get there.",
      cards: [
        {
          title: "Technical Before Content",
          highlightText: "No content strategy works on a technically broken site.",
          bodyText: "We fix architecture, crawlability, and Core Web Vitals first, then build content on solid foundations.",
        },
        {
          title: "Optimised for AI Search Too",
          highlightText: "Google is no longer the only answer engine.",
          bodyText: "We structure content to appear in AI Overviews, ChatGPT answers, and conversational results across every major platform.",
        },
        {
          title: "Content That Earns Authority",
          highlightText: "We build topical authority, not just keyword density.",
          bodyText: "Every piece is mapped to intent and structured to earn trust with both readers and search engines.",
        },
      ],
    },
    whatWeDo: [
      {
        title: "Technical SEO",
        description:
          "Site architecture, crawlability, Core Web Vitals, and schema markup. Getting the technical foundations right so search engines can find and rank your content.",
      },
      {
        title: "Keyword Strategy",
        description:
          "Research and prioritisation of the keywords your audience is searching, mapped to intent and funnel stage.",
      },
      {
        title: "Content Strategy",
        description:
          "A content plan built around topical authority, so you rank for the topics your buyers are searching.",
      },
      {
        title: "Link Building",
        description:
          "Link acquisition through PR, digital outreach, and content partnerships that build real domain authority.",
      },
      {
        title: "Local SEO",
        description:
          "Google Business Profile optimisation and local citation building for businesses with a physical presence or local service area.",
      },
      {
        title: "AI Search Optimisation",
        description:
          "Structuring content to appear in AI Overviews, ChatGPT answers, and conversational search results across every major platform.",
      },
    ],
    outcomes: [
      { stat: "3×", label: "Organic traffic growth within 6 months" },
      { stat: "Top 3", label: "Rankings for primary commercial keywords" },
      { stat: "50%", label: "Reduction in paid spend dependency over 12 months" },
    ],
  },
];
