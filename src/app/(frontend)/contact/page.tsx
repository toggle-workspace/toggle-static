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
import { GridRow, SideCol } from "@/components/ui/grid";

const features = [
  "Free, no-obligation consultation call",
  "No sales pitches, no pressure",
  "Simple, transparent pricing",
];

const jobFunctions = [
  { value: "Performance Marketing", label: "Performance Marketing" },
  { value: "SEO & Content", label: "SEO & Content" },
  { value: "Branding & Web", label: "Branding & Web" },
  { value: "Email & CRM", label: "Email & CRM" },
  { value: "Not sure yet", label: "Not sure yet" },
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
              Book a Consultation
            </span>
          </div>
        </GridRow>

        {/* Two-column content row */}
        <GridRow>
          <div className="@4xl:grid-cols-2 grid gap-px">
            {/* Left col */}
            <div data-grid-content="true" className="@4xl:p-12 p-6">
              <h1 className="text-foreground text-balance text-5xl font-semibold tracking-tight">
                Connect with our marketing experts.
              </h1>
              <p className="text-muted-foreground mt-6 text-balance text-lg">
                Fill the form and we'll be in touch within 24 hours to
                schedule a call.
              </p>

              <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CircleCheck className="size-4 shrink-0 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>


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
              <h2 className="text-foreground font-medium">Tell us about your business.</h2>
              <p className="text-muted-foreground mb-12 mt-2 text-sm">
                We&apos;ll review your details before the call so we can make
                the most of your time.
              </p>

              <form
                action=""
                className="**:[&>label]:block relative space-y-6 *:space-y-3"
              >
                <div className="grid gap-3 *:space-y-3 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="text-sm">
                      Name
                    </Label>
                    <Input type="text" id="name" name="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm">
                      Email
                    </Label>
                    <Input type="email" id="email" name="email" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="website" className="text-sm">
                    Website URL
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
                    Services you&apos;re interested in
                  </Label>
                  <Select name="job">
                    <SelectTrigger id="job" className="w-full">
                      <SelectValue placeholder="Select a service" />
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
                    How can we help?
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
                    <Link
                      href="/privacy-policy"
                      className="text-primary underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                  <Button className="max-sm:row-start-1">Book a Consultation</Button>
                </div>
              </form>
            </div>
          </div>
        </GridRow>
      </section>
    </main>
  );
}
