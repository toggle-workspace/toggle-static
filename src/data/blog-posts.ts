import type { BlogPost, BlogCategory } from "@/components/blog-section";

const BASE =
  "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/";

export const featuredPost: BlogPost = {
  image: `${BASE}blog-1_roo7z2.png`,
  date: "2025-08-18",
  title:
    "Embracing Remote Work Culture: Strategies for Success in a Distributed Workforce",
  excerpt:
    "Explore the transformative shift towards remote work and how it has reshaped business operations globally.",
  href: "#",
  authors: [
    {
      name: "Shadcn",
      avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
    },
    {
      name: "Meschac Irung",
      avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
    },
  ],
};

export const posts: BlogPost[] = [
  {
    image: `${BASE}blog-2_cazz7h.png`,
    date: "2025-09-10",
    title:
      "The Top Industries and Business Models Using AI for Fraud Prevention and Detection",
    excerpt:
      "Discover how various industries leverage AI tools to enhance fraud prevention and detection.",
    href: "#",
    authors: [
      {
        name: "Theo Balick",
        avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
      },
      {
        name: "Méschac Irung",
        avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
      },
    ],
  },
  {
    image: `${BASE}blog-4_lojema.jpg`,
    date: "2025-10-05",
    title: "Cutting-Edge Innovations in Data Analytics",
    excerpt:
      "Learn about the latest trends in data analytics and how they can drive business growth.",
    href: "#",
    authors: [
      {
        name: "Shadcn",
        avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
      },
      {
        name: "Meschac Irung",
        avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
      },
    ],
  },
  {
    image: `${BASE}blog-5_gpo4j1.png`,
    date: "2025-10-15",
    title: "Advancements in Cybersecurity Technologies",
    excerpt: "Discover new technologies protecting businesses from digital threats.",
    href: "#",
    authors: [
      {
        name: "Meschac Irung",
        avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
      },
    ],
  },
  {
    image: `${BASE}blog-7_rlrsyt.jpg`,
    date: "2025-11-01",
    title: "The Role of Blockchain in Modern Finance",
    excerpt: "Understand how blockchain is reshaping the financial landscape.",
    href: "#",
    authors: [
      {
        name: "Theo Balick",
        avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
      },
    ],
  },
  {
    image: `${BASE}blog-4_lojema.jpg`,
    date: "2025-11-10",
    title: "Sustainability in Tech: A Growing Focus",
    excerpt: "Explore efforts towards sustainable practices in technology.",
    href: "#",
    authors: [
      {
        name: "Shadcn",
        avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
      },
    ],
  },
  {
    image: `${BASE}blog-5_widlus.jpg`,
    date: "2025-12-05",
    title: "Big Data as a Strategic Asset",
    excerpt: "See how big data analytics can unlock new opportunities.",
    href: "#",
    authors: [
      {
        name: "Bernard Ngandu",
        avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
      },
    ],
  },
];

export const categories: BlogCategory[] = [
  { label: "all" },
  { label: "company" },
  { label: "marketing" },
  { label: "newsroom" },
  { label: "partners", disabled: true },
  { label: "engineering", disabled: true },
  { label: "press", disabled: true },
];
