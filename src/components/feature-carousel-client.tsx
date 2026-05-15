"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PostCard } from "@/components/ui/project-card";

type Post = {
  id: number;
  title: string;
  slug?: string | null;
  excerpt?: string | null;
  author?: string | null;
  publishedAt?: string | null;
  featuredImage?: { url?: string | null; alt?: string | null } | null;
};

export default function FeatureCarouselClient({ posts }: { posts: Post[] }) {
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
            <CarouselContent className="ml-0 *:bg-card *:not-dark:bg-card/50 *:p-8 *:pt-12 md:divide-x md:*:basis-1/2 lg:*:basis-1/3">
              {posts.map((post) => (
                <CarouselItem key={post.id} className="h-full pl-0">
                  <PostCard
                    image={post.featuredImage?.url ?? ""}
                    imageAlt={post.featuredImage?.alt ?? post.title}
                    date={post.publishedAt ?? new Date().toISOString()}
                    title={post.title}
                    excerpt={post.excerpt ?? ""}
                    href={`/blog/${post.slug ?? ""}`}
                    authors={post.author ? [{ name: post.author }] : []}
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
