import { SideCol } from "@/components/ui/grid";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="bg-zinc-950/10">
      <section className="overflow-hidden">
        {/* Header Row */}
        <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
          <SideCol wide />
          <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
            <div data-slot="content" className="bg-card/90 h-full rounded p-6 lg:p-12 @3xl:p-12">
              <div className="max-w-2xl">
                <a
                  href="/"
                  className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm transition-colors"
                >
                  <ChevronLeft className="size-4" />
                  All Legal Documents
                </a>
                <h1 className="text-foreground text-balance text-6xl font-semibold uppercase tracking-tight sm:text-8xl sm:font-bold">
                  Privacy Policy
                </h1>
                <p className="text-muted-foreground mt-6">
                  <span className="text-foreground">Effective date:</span> January 15, 2025
                </p>
              </div>
            </div>
          </div>
          <SideCol />
        </div>

        {/* Content Row */}
        <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
          <SideCol wide />
          <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
            <div data-slot="content" className="bg-card/90 h-full rounded p-6 lg:p-12 @3xl:p-12">
              <div className="max-w-3xl">
                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  We collect information you provide directly, information collected automatically when you use our services, and information from third-party sources. This includes:
                </p>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  <strong className="text-foreground font-semibold">Personal Information:</strong>
                </p>
                <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
                  <li className="leading-relaxed">Name and email address</li>
                  <li className="leading-relaxed">Billing and payment information</li>
                  <li className="leading-relaxed">Account credentials</li>
                  <li className="leading-relaxed">Communication preferences</li>
                </ul>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  <strong className="text-foreground font-semibold">Automatically Collected Information:</strong>
                </p>
                <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
                  <li className="leading-relaxed">Device and browser information</li>
                  <li className="leading-relaxed">IP address and location data</li>
                  <li className="leading-relaxed">Usage patterns and interaction data</li>
                  <li className="leading-relaxed">Cookies and similar tracking technologies</li>
                </ul>

                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
                  <li className="leading-relaxed">Provide, maintain, and improve our services</li>
                  <li className="leading-relaxed">Process transactions and send related information</li>
                  <li className="leading-relaxed">Send technical notices, updates, and support messages</li>
                  <li className="leading-relaxed">Respond to your comments, questions, and requests</li>
                  <li className="leading-relaxed">Monitor and analyze trends, usage, and activities</li>
                  <li className="leading-relaxed">Detect, investigate, and prevent fraudulent transactions and abuse</li>
                  <li className="leading-relaxed">Personalize and improve your experience</li>
                </ul>

                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
                  <li className="leading-relaxed">
                    <strong className="text-foreground font-semibold">Service Providers:</strong> With third-party vendors who perform services on our behalf
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground font-semibold">Legal Requirements:</strong> When required by law or to respond to legal process
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground font-semibold">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground font-semibold">Consent:</strong> With your explicit consent or at your direction
                  </li>
                </ul>

                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>

                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  5. Data Retention
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>

                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
                  <li className="leading-relaxed">Access your personal information</li>
                  <li className="leading-relaxed">Correct inaccurate data</li>
                  <li className="leading-relaxed">Request deletion of your data</li>
                  <li className="leading-relaxed">Object to or restrict processing</li>
                  <li className="leading-relaxed">Data portability</li>
                  <li className="leading-relaxed">Withdraw consent</li>
                </ul>

                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  7. Cookies
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  We use cookies and similar technologies to collect information about your browsing activities. You can manage your cookie preferences through your browser settings.
                </p>

                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  8. Children&apos;s Privacy
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If we learn that we have collected such information, we will take steps to delete it.
                </p>

                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  9. International Transfers
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                </p>

                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  10. Changes to This Policy
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
                </p>

                <h2 className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold first:mt-0">
                  11. Contact Us
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  For questions about this Privacy Policy, contact our Data Protection Officer at privacy@company.com.
                </p>
              </div>
            </div>
          </div>
          <SideCol />
        </div>
      </section>
    </main>
  );
}
