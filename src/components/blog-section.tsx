"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { PostCard } from "@/components/ui/project-card";

export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  image: string;
  imageAlt?: string;
  date: string | Date;
  title: string;
  excerpt: string;
  href: string;
  authors: Author[];
}

export interface BlogCategory {
  label: string;
  disabled?: boolean;
}

export interface BlogSectionProps {
  featuredPost: BlogPost;
  posts: BlogPost[];
  categories?: BlogCategory[];
  defaultCategory?: string;
}

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function AuthorRow({ name, avatar }: Author) {
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

const DEFAULT_CATEGORIES: BlogCategory[] = [
  { label: "all" },
  { label: "company" },
  { label: "marketing" },
  { label: "newsroom" },
  { label: "partners", disabled: true },
  { label: "engineering", disabled: true },
  { label: "press", disabled: true },
];

export default function BlogSection({
  featuredPost,
  posts,
  categories = DEFAULT_CATEGORIES,
  defaultCategory = "all",
}: BlogSectionProps) {
  const [activeTab, setActiveTab] = useState(defaultCategory);

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
                  alt={featuredPost.imageAlt ?? featuredPost.title}
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
                dateTime={String(featuredPost.date)}
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
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
