interface HeadingProps {
  title: string;
  description?: string;
}

export function Heading({ title, description }: HeadingProps) {
  return (
    <div className="bg-card/90 rounded">
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-balance text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
