"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { PostCard, PostCardGrid } from "@/components/ui/project-card";

const BASE =
  "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/";

const featuredPost = {
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

const posts = [
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
    excerpt:
      "Discover new technologies protecting businesses from digital threats.",
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

const categories = [
  { label: "all", disabled: false },
  { label: "company", disabled: false },
  { label: "marketing", disabled: false },
  { label: "newsroom", disabled: false },
  { label: "partners", disabled: true },
  { label: "engineering", disabled: true },
  { label: "press", disabled: true },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function AuthorRow({ name, avatar }: { name: string; avatar: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-2">
      <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded border border-transparent shadow-md shadow-black/15 ring-1">
        <Image
          src={avatar}
          alt={name}
          width={46}
          height={46}
          className="size-full object-cover"
        />
      </div>
      <span className="text-muted-foreground line-clamp-1 text-sm">{name}</span>
    </div>
  );
}

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="bg-foreground/9 @container">
      {/* Featured post */}
      <div className="p-[0.5px]">
        <div className="group relative rounded">
          <article className="group grid gap-px sm:grid-cols-2">
            <div className="bg-card/75 group-hover:bg-card rounded p-6">
              <div className="before:border-foreground/10 before:inset-ring-1 before:inset-ring-background/10 relative aspect-auto overflow-hidden rounded-[10px] shadow-md shadow-black/10 before:absolute before:inset-0 before:rounded-[10px] before:border">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={6394}
                  height={4500}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>
            <div className="bg-card flex flex-col space-y-4 rounded p-6 md:py-12">
              <time
                className="text-muted-foreground block text-sm"
                dateTime={featuredPost.date}
              >
                {formatDate(featuredPost.date)}
              </time>
              <h2 className="text-foreground text-balance text-lg font-semibold md:text-xl">
                <Link
                  href={featuredPost.href}
                  className="before:absolute before:inset-0"
                >
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-muted-foreground">{featuredPost.excerpt}</p>
              <div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                <div className="space-y-2">
                  {featuredPost.authors.map((a) => (
                    <AuthorRow key={a.name} {...a} />
                  ))}
                </div>
                <div className="flex h-6 items-center">
                  <span
                    aria-label={`Read ${featuredPost.title}`}
                    className="text-primary group-hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                  >
                    Read
                    <ChevronRight
                      className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Category tabs */}
      <div className="bg-card/75 lg:bg-card rounded py-3 md:px-6">
        <div
          className="-ml-0.5 flex snap-x snap-mandatory overflow-x-auto py-3 max-md:px-6"
          role="tablist"
          aria-label="Blog categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.label}
              role="tab"
              disabled={cat.disabled}
              aria-selected={activeTab === cat.label}
              onClick={() => !cat.disabled && setActiveTab(cat.label)}
              className="text-muted-foreground group snap-center px-1 disabled:pointer-events-none disabled:opacity-50"
            >
              <span
                className={`flex w-fit items-center gap-2 rounded px-3 py-1 text-sm transition-colors [&>svg]:size-4 ${
                  activeTab === cat.label
                    ? "bg-card ring-foreground/5 text-primary font-medium shadow-sm ring-1"
                    : "hover:text-foreground group-hover:bg-foreground/5"
                }`}
              >
                <span className="capitalize">{cat.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Post grid */}
      <div className="bg-foreground/1 rounded">
        <h2 className="sr-only">More Articles</h2>
        <PostCardGrid>
          {posts.map((post) => (
            <PostCard key={post.title} {...post} />
          ))}
        </PostCardGrid>
      </div>
    </div>
  );
}
