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
      "We run ads across Meta, Google, and TikTok — combining audience strategy, creative testing, and conversion data to find what works and scale it.",
    image: "https://picsum.photos/seed/performance-mktg/400/260",
    headline: "Spend Smarter. Scale Faster.",
    overview:
      "We manage your paid media end-to-end: audience research, creative strategy, bidding, testing, and optimisation. Every dollar is tracked to revenue, and every decision is backed by data. The longer we run, the more efficient your spend gets.",
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
          "Clear weekly and monthly reporting tied to revenue, not just clicks and impressions, so you always know your real ROI.",
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
      "We sharpen your positioning, clarify your message, and build a visual identity that holds up across every touchpoint — from ads to packaging.",
    image: "https://picsum.photos/seed/branding-id/400/260",
    headline: "Stand for Something. Look the Part.",
    overview:
      "Your brand communicates before anyone reads a word. We build the full identity: positioning, voice, visual language, and the assets to execute it consistently across every channel and format.",
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
      "We design and develop websites and landing pages that load fast, communicate clearly, and turn visitors into customers.",
    image: "https://picsum.photos/seed/web-dev/400/260",
    headline: "Websites Built to Convert, Not Just to Impress.",
    overview:
      "We design and build marketing websites and landing pages with one priority: conversion. Every layout and line of copy is built to move visitors toward a decision, on a stack that's fast, maintainable, and easy to update.",
    whatWeDo: [
      {
        title: "Conversion-Led Design",
        description:
          "Every page layout is built around a clear conversion goal, with visual hierarchy, copy, and CTAs aligned to it.",
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
      "We build search visibility that compounds — across Google, AI answer engines, and the next generation of organic discovery.",
    image: "https://picsum.photos/seed/seo-search/400/260",
    headline: "Own the Search Results Your Competitors Are Chasing.",
    overview:
      "We build organic search visibility through technical SEO, content that earns authority, and a strategy covering both traditional search and AI-powered answers. Once it's built, traffic grows without ongoing media spend.",
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
          "A content plan built around topical authority, so you own the conversation in your category.",
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
