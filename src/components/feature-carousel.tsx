"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PostCard } from "@/components/ui/project-card";

const mockPosts = [
  {
    id: 1,
    title: "How We Cut CPL by 47% While Scaling Ad Spend to RM4 Million",
    slug: "cut-cpl-47-percent-scaling-ad-spend",
    excerpt: "A deep dive into the performance marketing strategy that generated over 32,000 qualified leads for a leading Malaysian university — without sacrificing efficiency.",
    author: "Toggle Team",
    publishedAt: "2024-11-15T08:00:00.000Z",
    featuredImage: { url: "https://picsum.photos/seed/blog1/700/400", alt: "Performance marketing campaign analytics" },
  },
  {
    id: 2,
    title: "SEO for Banks: What Moves the Needle in a High-Competition Niche",
    slug: "seo-for-banks-high-competition",
    excerpt: "Organic search in the banking sector is brutally competitive. Here's the content and technical approach that drove a 52.6% impression uplift for CIMB within twelve months.",
    author: "Toggle Team",
    publishedAt: "2024-10-03T08:00:00.000Z",
    featuredImage: { url: "https://picsum.photos/seed/blog2/700/400", alt: "SEO strategy for banking" },
  },
  {
    id: 3,
    title: "From Zero to RM2.6M: Building an Online Revenue Engine for a F&B Brand",
    slug: "zero-to-rm2m-fb-online-revenue",
    excerpt: "Delivery campaigns and catering leads don't grow themselves. We break down the creative and targeting mix behind Restoran Mahbub's digital revenue growth.",
    author: "Toggle Team",
    publishedAt: "2024-09-20T08:00:00.000Z",
    featuredImage: { url: "https://picsum.photos/seed/blog3/700/400", alt: "F&B online revenue growth" },
  },
  {
    id: 4,
    title: "Why Most Real Estate Lead Gen Campaigns Fail (And How to Fix Them)",
    slug: "real-estate-lead-gen-why-campaigns-fail",
    excerpt: "A 392% increase in leads at a fixed RM35 CPL isn't luck — it's a repeatable system. We share the framework we used for Kith & Kin Realty.",
    author: "Toggle Team",
    publishedAt: "2024-08-11T08:00:00.000Z",
    featuredImage: { url: "https://picsum.photos/seed/blog4/700/400", alt: "Real estate lead generation" },
  },
  {
    id: 5,
    title: "Ranking #1 in 90 Days: An SEO Playbook for Insurance Keywords",
    slug: "ranking-1-in-90-days-insurance-seo",
    excerpt: "Core insurance keywords are among the hardest to rank for. This is the exact playbook that moved Singlife from position three to position one.",
    author: "Toggle Team",
    publishedAt: "2024-07-05T08:00:00.000Z",
    featuredImage: { url: "https://picsum.photos/seed/blog5/700/400", alt: "Insurance SEO keyword ranking" },
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
              Latest from the blog
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
            <CarouselContent className="ml-0 md:*:basis-1/2 lg:*:basis-1/3">
              {mockPosts.map((post) => (
                <CarouselItem key={post.id} className="flex flex-col pl-0">
                  <PostCard
                    image={post.featuredImage.url}
                    imageAlt={post.featuredImage.alt}
                    date={post.publishedAt}
                    title={post.title}
                    excerpt={post.excerpt}
                    href={`/blog/${post.slug}`}
                    authors={[{ name: post.author, avatar: `https://picsum.photos/seed/author${post.id}/46/46` }]}
                  />
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
