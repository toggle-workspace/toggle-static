import type { BlogPost, BlogCategory } from "@/components/blog-section";

const TEAM = {
  yiyang: {
    name: "Yi Yang",
    avatar: "https://placehold.co/46x46/6366f1/ffffff?text=YY",
  },
  jordan: {
    name: "Jordan Pinto",
    avatar: "https://placehold.co/46x46/8b5cf6/ffffff?text=JP",
  },
  zaid: {
    name: "Zaid Saad",
    avatar: "https://placehold.co/46x46/10b981/ffffff?text=ZS",
  },
  shaun: {
    name: "Shaun Boey",
    avatar: "https://placehold.co/46x46/f59e0b/ffffff?text=SB",
  },
  viknesh: {
    name: "Viknesh",
    avatar: "https://placehold.co/46x46/ef4444/ffffff?text=VK",
  },
};

export const featuredPost: BlogPost = {
  image: "https://picsum.photos/seed/unitar-edu/1200/675",
  date: "2025-09-30",
  title: "UNITAR — From Moonshot to Milestone",
  excerpt:
    "UNITAR needed to scale student acquisition without inflating costs. We ran a full-funnel campaign across TikTok, Meta, and Google, capturing 77% of total impressions in the Education category in Malaysia.",
  href: "/work/unitar",
  authors: [TEAM.yiyang, TEAM.jordan],
};

export const posts: BlogPost[] = [
  {
    image: "https://picsum.photos/seed/kith-kin-realty/1200/675",
    date: "2024-03-31",
    title: "Kith & Kin Realty — Unlocking New Growth Channels",
    excerpt:
      "Kith & Kin had never run paid advertising before. They relied entirely on organic referrals and cold-calling. Three months of targeted Meta campaigns later: 392% more leads, RM35 CPL, and a 10% conversion rate from lead to closed deal.",
    href: "/work/kith-and-kin",
    authors: [TEAM.yiyang, TEAM.viknesh],
  },
  {
    image: "https://picsum.photos/seed/cimb-bank/1200/675",
    date: "2024-06-30",
    title: "CIMB Bank — From Authority Gap to Search Dominance",
    excerpt:
      "CIMB's product pages lacked keyword depth and their blog had content that diluted quality signals. We rebuilt their content strategy from the ground up. Organic clicks grew 34.5% within a year.",
    href: "/work/cimb",
    authors: [TEAM.zaid],
  },
  {
    image: "https://picsum.photos/seed/singlife-sg/1200/675",
    date: "2024-08-15",
    title: "Singlife — From Third to First in 90 Days",
    excerpt:
      "Singlife's core insurance keywords sat at position three. Close to the top, but far enough to lose meaningful traffic every month. We rebuilt their on-page content and organic clicks grew 23%.",
    href: "/work/singlife",
    authors: [TEAM.zaid],
  },
  {
    image: "https://picsum.photos/seed/great-eastern-sg/1200/675",
    date: "2024-09-30",
    title: "Great Eastern — Two Months to the Top",
    excerpt:
      "Great Eastern's key insurance pages were stuck at position four. A targeted metadata refresh and content restructure moved them to position one in two months, with a 75% increase in search visibility.",
    href: "/work/great-eastern",
    authors: [TEAM.zaid, TEAM.jordan],
  },
  {
    image: "https://picsum.photos/seed/mahbub-restaurant/1200/675",
    date: "2024-12-31",
    title: "Restoran Mahbub — Online Delivery & Catering Growth",
    excerpt:
      "Mahbub had strong offline trade but negligible online revenue. We ran performance campaigns across Meta and Google and built messaging flows for catering enquiries. The result: RM2.6M+ in online revenue and 46% more catering leads.",
    href: "/work/mahbub",
    authors: [TEAM.yiyang, TEAM.shaun],
  },
  {
    image: "https://picsum.photos/seed/tpl-fresh-meats/1200/675",
    date: "2024-10-31",
    title: "TPL Fresh Meats — From Walk-In to Online Revenue",
    excerpt:
      "TPL had loyal customers walking through the door but no digital sales channel. We ran Meta and Google ads using their existing social content. The result: RM172K+ in revenue at 20x ROAS.",
    href: "/work/tpl",
    authors: [TEAM.yiyang],
  },
];

export const categories: BlogCategory[] = [
  { label: "all" },
  { label: "performance marketing" },
  { label: "seo" },
  { label: "branding" },
  { label: "e-commerce" },
  { label: "f&b" },
];
