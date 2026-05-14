import { GridRow, Spacer } from "@/components/ui/grid";

interface PageHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  description,
  children,
}: PageHeaderProps) {
  return (
    <div className="bg-zinc-950/10">
      <div
        data-grid-content="true"
        className="@4xl:p-12 col-span-full p-6 sm:col-span-8 bg-background rounded"
      >
        {subtitle && (
          <span className="text-muted-foreground text-sm font-medium font-mono uppercase">
            {subtitle}
          </span>
        )}
        <h1 className="text-foreground text-balance text-5xl font-semibold tracking-tight lg:text-6xl mt-12">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground mx-auto mb-6 mt-4 text-balance text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
