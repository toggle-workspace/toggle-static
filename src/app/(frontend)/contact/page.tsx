import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SideCol({ wide }: { wide?: boolean }) {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }}
    >
      <div aria-hidden="true" className={`p-[0.5px]${wide ? " w-full" : ""}`}>
        <div className="bg-card/90 h-full w-2 rounded md:w-6 lg:w-full" />
      </div>
    </div>
  );
}

function GridRow({
  children,
  plain,
}: {
  children: React.ReactNode;
  plain?: boolean;
}) {
  if (plain) {
    return (
      <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
        <SideCol wide />
        <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
          <div data-slot="content" className="bg-card/90 h-full rounded">
            {children}
          </div>
        </div>
        <SideCol />
      </div>
    );
  }
  return (
    <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
      <SideCol wide />
      <div className="max-w-276 lg:min-w-276 mx-auto w-full">
        <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px]">
          {children}
        </div>
      </div>
      <SideCol />
    </div>
  );
}

const features = [
  "24/7 support availability",
  "Dedicated account manager",
  "Custom integrations",
  "Priority response time",
];

const countries = [
  { value: "my", label: "🇲🇾 Malaysia" },
  { value: "sg", label: "🇸🇬 Singapore" },
  { value: "us", label: "🇺🇸 United States" },
  { value: "gb", label: "🇬🇧 United Kingdom" },
  { value: "au", label: "🇦🇺 Australia" },
];

const jobFunctions = [
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "finance", label: "Finance" },
  { value: "education", label: "Education" },
  { value: "legal", label: "Legal" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  return (
    <main role="main" className="bg-zinc-950/10">
      {/* Top spacer */}
      <div
        aria-hidden="true"
        className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]"
      >
        <SideCol wide />
        <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
          <div data-slot="content" className="bg-card/90 h-full rounded">
            <div className="h-6" />
          </div>
        </div>
        <SideCol />
      </div>

      <section id="home">
        {/* "Sales" label row */}
        <GridRow plain>
          <div className="@4xl:px-12 px-6 py-3">
            <span className="text-muted-foreground font-mono text-sm uppercase">
              Sales
            </span>
          </div>
        </GridRow>

        {/* Two-column content row */}
        <GridRow>
          <div className="@4xl:grid-cols-2 grid gap-px">
            {/* Left col */}
            <div data-grid-content="true" className="@4xl:p-12 p-6">
              <h1 className="text-foreground text-balance text-5xl font-semibold tracking-tight">
                Ready to scale your business?
              </h1>
              <p className="text-muted-foreground mt-6 text-balance text-lg">
                Get in touch with our sales team to discuss custom solutions for
                your organization.
              </p>

              <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CircleCheck className="size-4 shrink-0 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-muted-foreground mt-8 text-sm">
                Looking for general support?{" "}
                <Link
                  href="#support"
                  className="text-primary font-medium hover:underline"
                >
                  Visit our help center
                </Link>
              </div>

              <div className="mt-12 space-y-6 *:space-y-2">
                <div>
                  <h3 className="text-muted-foreground text-sm">Email</h3>
                  <Link
                    href="mailto:marketing@togglesolutions.com"
                    className="text-foreground hover:decoration-primary text-sm font-medium hover:underline"
                  >
                    marketing@togglesolutions.com
                  </Link>
                </div>
                <div>
                  <h3 className="text-muted-foreground text-sm">Phone</h3>
                  <Link
                    href="tel:+60125688681"
                    className="text-foreground hover:decoration-primary text-sm font-medium hover:underline"
                  >
                    +60 12-568 8681
                  </Link>
                </div>
                <div>
                  <h3 className="text-muted-foreground text-sm">Office</h3>
                  <p className="text-foreground text-sm font-medium">
                    Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>
            </div>

            {/* Right col — form */}
            <div data-grid-content="true" className="@4xl:p-12 p-6">
              <h2 className="text-foreground font-medium">Talk to our team</h2>
              <p className="text-muted-foreground mb-12 mt-2 text-sm">
                Fill out the form and we&apos;ll be in touch within 24 hours.
              </p>

              <form
                action=""
                className="**:[&>label]:block relative space-y-6 *:space-y-3"
              >
                <div className="grid gap-3 *:space-y-3 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="text-sm">
                      Full name
                    </Label>
                    <Input type="text" id="name" name="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm">
                      Work Email
                    </Label>
                    <Input type="email" id="email" name="email" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country" className="text-sm">
                    Country/Region
                  </Label>
                  <Select name="country">
                    <SelectTrigger id="country" className="w-full">
                      <SelectValue placeholder="Select Country/Region" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="website" className="text-sm">
                    Company Website
                  </Label>
                  <div className="relative">
                    <Input
                      type="url"
                      id="website"
                      name="website"
                      placeholder="yourcompany.com"
                      className="pl-16"
                    />
                    <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm">
                      https://
                    </span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="job" className="text-sm">
                    Job function
                  </Label>
                  <Select name="job">
                    <SelectTrigger id="job" className="w-full">
                      <SelectValue placeholder="Select Job Function" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobFunctions.map((j) => (
                        <SelectItem key={j.value} value={j.value}>
                          {j.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="min-h-16"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
                  <p className="text-muted-foreground text-balance text-sm">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy" className="text-primary underline">
                      Privacy Policy
                    </Link>
                  </p>
                  <Button className="max-sm:row-start-1">Get in touch</Button>
                </div>
              </form>
            </div>
          </div>
        </GridRow>
      </section>
    </main>
  );
}
