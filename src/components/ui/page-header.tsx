import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface PageHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  description,
  breadcrumb,
  children,
}: PageHeaderProps) {
  return (
    <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-border">
      <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
        <div data-slot="content" className="bg-card/90 h-full rounded p-6 lg:p-12">
          <header className="max-w-2xl">
            {breadcrumb && breadcrumb.length > 0 ? (
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumb.map((item, i) => (
                    <>
                      {i > 0 && <BreadcrumbSeparator key={`sep-${i}`} />}
                      <BreadcrumbItem key={item.label}>
                        {item.href ? (
                          <BreadcrumbLink render={<Link href={item.href} />}>
                            {item.label}
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                    </>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            ) : subtitle ? (
              <span className="text-muted-foreground text-sm font-medium font-mono uppercase">
                {subtitle}
              </span>
            ) : null}

            <h1
              className={
                breadcrumb
                  ? "text-foreground mt-6 text-balance text-3xl font-bold md:text-4xl"
                  : "text-foreground mt-12 text-balance text-5xl font-semibold tracking-tight lg:text-6xl"
              }
            >
              {title}
            </h1>

            {description && (
              <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">
                {description}
              </p>
            )}

            {children}
          </header>
        </div>
      </div>
    </div>
  );
}
