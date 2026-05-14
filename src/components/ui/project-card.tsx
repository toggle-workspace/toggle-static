import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Author {
  name: string;
  avatar: string;
}

interface PostCardProps {
  image: string;
  imageAlt?: string;
  date: string | Date;
  title: string;
  excerpt: string;
  href: string;
  authors: Author[];
}

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function PostCard({
  image,
  imageAlt = "",
  date,
  title,
  excerpt,
  href,
  authors,
}: PostCardProps) {
  return (
    <article className="bg-card hover:bg-card/75 group relative flex flex-col space-y-4 rounded p-6 duration-200">
      <div className="before:border-foreground/10 before:inset-ring-1 before:inset-ring-background/10 relative aspect-video overflow-hidden rounded-[10px] shadow-md shadow-black/10 before:absolute before:inset-0 before:rounded-[10px] before:border">
        <Image
          src={image}
          alt={imageAlt}
          width={6394}
          height={4500}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <time
        className="text-muted-foreground block text-sm"
        dateTime={new Date(date).toISOString()}
      >
        {formatDate(date)}
      </time>

      <h3 className="text-foreground font-semibold">
        <Link href={href} className="before:absolute before:inset-0">
          {title}
        </Link>
      </h3>

      <p className="text-muted-foreground">{excerpt}</p>

      <div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
        <div className="space-y-2">
          {authors.map((author) => (
            <div
              key={author.name}
              className="grid grid-cols-[auto_1fr] items-center gap-2"
            >
              <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={46}
                  height={46}
                  className="size-full object-cover"
                />
              </div>
              <span className="text-muted-foreground line-clamp-1 text-sm">
                {author.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex h-6 items-center">
          <span
            aria-label={`Read ${title}`}
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
    </article>
  );
}

export function PostCardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
}
