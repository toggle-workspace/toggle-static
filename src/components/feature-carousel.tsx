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
    title:
      "How We Cut CPL by 47% While Generating 32,000 Leads for a Malaysian University",
    slug: "cut-cpl-47-percent-scaling-ad-spend",
    excerpt:
      "UNITAR needed to scale student acquisition without inflating costs. We ran a full-funnel campaign across TikTok, Meta, and Google, capturing 77% of total impressions in the Education category in Malaysia.",
    author: "Toggle Team",
    publishedAt: "2024-11-15T08:00:00.000Z",
    featuredImage: {
      url: "https://picsum.photos/seed/blog1/700/400",
      alt: "Performance marketing campaign analytics",
    },
  },
  {
    id: 2,
    title:
      "52.6% More Organic Impressions in 12 Months: CIMB Bank's SEO Rebuild",
    slug: "seo-for-banks-high-competition",
    excerpt:
      "CIMB's product pages lacked keyword depth and their blog had content that diluted quality signals. We rebuilt their content strategy from the ground up. Organic clicks grew 34.5% within a year.",
    author: "Toggle Team",
    publishedAt: "2024-10-03T08:00:00.000Z",
    featuredImage: {
      url: "https://picsum.photos/seed/blog2/700/400",
      alt: "SEO strategy for banking",
    },
  },
  {
    id: 3,
    title: "392% More Leads at RM35 CPL: A Real Estate Performance Playbook",
    slug: "real-estate-lead-gen-why-campaigns-fail",
    excerpt:
      "Kith & Kin had never run paid advertising before. They relied entirely on organic referrals and cold-calling. Three months of targeted Meta campaigns later: 392% more leads, RM35 CPL, and a 10% conversion rate from lead to closed deal.",
    author: "Toggle Team",
    publishedAt: "2024-09-20T08:00:00.000Z",
    featuredImage: {
      url: "https://picsum.photos/seed/blog3/700/400",
      alt: "Real estate lead generation",
    },
  },
  {
    id: 4,
    title: "Position Three to Position One in 90 Days: The Singlife SEO Case",
    slug: "ranking-1-in-90-days-insurance-seo",
    excerpt:
      "Singlife's core insurance keywords sat at position three. Close to the top, but far enough to lose meaningful traffic every month. We rebuilt their on-page content and organic clicks grew 23%.",
    author: "Toggle Team",
    publishedAt: "2024-08-11T08:00:00.000Z",
    featuredImage: {
      url: "https://picsum.photos/seed/blog4/700/400",
      alt: "Insurance SEO keyword ranking",
    },
  },
  {
    id: 5,
    title:
      "#1 for Core Insurance Keywords in Two Months: Great Eastern Singapore",
    slug: "great-eastern-seo-insurance-keywords",
    excerpt:
      "Great Eastern's key insurance pages were stuck at position four. A targeted metadata refresh and content restructure moved them to position one in two months, with a 75% increase in search visibility.",
    author: "Toggle Team",
    publishedAt: "2024-07-05T08:00:00.000Z",
    featuredImage: {
      url: "https://picsum.photos/seed/blog5/700/400",
      alt: "Great Eastern insurance SEO",
    },
  },
];

export default function FeatureCarousel() {
  return (
    <section className="bg-card/90 @container overflow-hidden">
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
                    authors={[
                      {
                        name: post.author,
                        avatar: `https://picsum.photos/seed/author${post.id}/46/46`,
                      },
                    ]}
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
