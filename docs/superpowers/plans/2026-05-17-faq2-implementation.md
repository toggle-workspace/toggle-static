# FAQ2 Component Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create and integrate the FAQ2 component—a full-width, multi-column alternative FAQ layout for service detail pages.

**Architecture:** FAQ2 uses the raw three-column grid structure from DESIGN.md (SideCol + center content + SideCol) with visible side borders. Inside, a responsive multi-column accordion grid displays FAQ categories and items. The component is hardcoded for now and placed before CallToAction on service pages.

**Tech Stack:** React (Server Component) · Next.js · Tailwind CSS · Radix UI Accordion · Existing UI components (SideCol, Accordion, AccordionItem, AccordionTrigger, AccordionContent)

---

## File Structure

**Files to create:**
- `src/components/faq-2.tsx` — The FAQ2 component with hardcoded data

**Files to modify:**
- `src/app/(frontend)/services/[slug]/page.tsx` — Import and render FAQ2 before CallToAction

---

## Task 1: Create FAQ2 Component Structure

**Files:**
- Create: `src/components/faq-2.tsx`

- [ ] **Step 1: Write the FAQ2 component with hardcoded data and raw three-column grid structure**

Create `src/components/faq-2.tsx`:

```tsx
'use server'

import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SideCol } from "@/components/ui/grid"

const faqGroups = [
  {
    title: "General",
    items: [
      {
        value: "general-1",
        question: "What do I get in the Free Brand Audit?",
        answer:
          "Our Free Brand Audit is a comprehensive review of your current marketing channels, funnel performance and growth opportunities. You'll receive a detailed roadmap including 3–5 prioritized growth levers, identification of quick wins to boost conversion rates, and recommended next steps to improve results.",
      },
      {
        value: "general-2",
        question: "How long does it take to receive the audit?",
        answer:
          "We value speed without compromising quality. Typically, we will respond to your initial request within 24 hours and deliver the completed audit within 3–5 business days, depending on the complexity of your current setup and data availability.",
      },
      {
        value: "general-3",
        question: "Who will I work with?",
        answer:
          "You won't be handed off to a junior team. Every client gets a dedicated team of three: a Senior Account Manager as your strategic partner and main point of contact, a Senior Performance Marketer expert in media buying and campaign optimization, and a Backup Performance Marketing Specialist to ensure coverage and support.",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        value: "services-1",
        question: "What type of brands are you the best fit for?",
        answer:
          "We've consulted and helped clients across all verticals including Education & EdTech, Healthcare, Technology, Professional services, Food & Beverage, FMCG, E-commerce, Lifestyle Brands, and many others. If you're a brand that's serious about growth, we're built to work with you regardless of industry.",
      },
      {
        value: "services-2",
        question: "Do you do performance marketing only?",
        answer:
          "Performance marketing is one part of what we do but sustainable growth requires more. We build growth systems that span Paid Media, Creative Strategy, SEO & CRO, Content, Email and Lifecycle Marketing, CRM and sales integration, and AI-powered automation — all working together under one strategy.",
      },
      {
        value: "services-3",
        question: "What results can I expect and how fast?",
        answer:
          "While every business is unique, our framework is designed for rapid impact. Leads and sales can start coming in immediately upon campaign launch (Day 1). Early performance improvements often become visible within Weeks 2–4. More meaningful, compounding growth typically builds over Days 60–90 as we test, optimise and scale what's working.",
      },
    ],
  },
]

export default function FAQ2() {
  return (
    <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-border">
      <SideCol wide />
      
      <div className="max-w-276 lg:min-w-276 mx-auto w-full">
        <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px]">
          <div className="@2xl:grid-cols-[1fr_auto_1fr] @4xl:grid-cols-4 grid gap-px">
            {/* Left spacer (hidden on mobile/tablet, visible at @2xl+) */}
            <div
              aria-hidden="true"
              data-grid-content="true"
              className="@max-2xl:hidden"
            />

            {/* Center content column */}
            <div className="@2xl:@max-4xl:col-span-1 @4xl:col-span-2 w-full">
              <div className="flex flex-col gap-px">
                {/* Heading section */}
                <div data-grid-content="true" className="@4xl:p-8 p-6">
                  <h2 className="text-foreground text-4xl font-semibold">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-muted-foreground mt-4 text-balance text-lg">
                    Discover quick and comprehensive answers to common questions
                    about our platform, services, and features.
                  </p>
                </div>

                {/* FAQ groups */}
                <div data-grid-content="true" className="@4xl:pt-8 @4xl:px-2 space-y-8 pb-2 pt-6">
                  {faqGroups.map((group) => (
                    <div key={group.title} className="space-y-2">
                      <h3 className="text-foreground pl-6 text-lg font-semibold">
                        {group.title}
                      </h3>
                      <Accordion className="-space-y-1">
                        {group.items.map((item) => (
                          <AccordionItem
                            key={item.value}
                            value={item.value}
                            className="border-b last:border-b-0 data-open:bg-muted group peer rounded-xl px-6 py-1 data-open:border-none"
                          >
                            <AccordionTrigger className="cursor-pointer rounded-none text-base transition-none hover:no-underline data-open:border-transparent">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-muted-foreground pb-4">
                                {item.answer}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>

                {/* Support section */}
                <div data-grid-content="true" className="p-6">
                  <p className="text-muted-foreground text-balance">
                    Can&apos;t find what you&apos;re looking for? Contact our{" "}
                    <Link
                      href="/contact"
                      className="text-primary font-medium hover:underline"
                    >
                      customer support team
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Right spacer (hidden on mobile/tablet, visible at @2xl+) */}
            <div
              aria-hidden="true"
              data-grid-content="true"
              className="@max-2xl:hidden"
            />
          </div>
        </div>
      </div>

      <SideCol />
    </div>
  )
}
```

- [ ] **Step 2: Verify the component file exists and has no syntax errors**

Run: `cat src/components/faq-2.tsx | head -20`

Expected: File contains the imports and component definition

---

## Task 2: Integrate FAQ2 into Service Detail Page

**Files:**
- Modify: `src/app/(frontend)/services/[slug]/page.tsx`

- [ ] **Step 1: Read the current service page to find the correct insertion point**

Run: `tail -20 src/app/(frontend)/services/[slug]/page.tsx`

Expected: Shows the CallToAction section at the end

- [ ] **Step 2: Add FAQ2 import at the top of the file**

In `src/app/(frontend)/services/[slug]/page.tsx`, add to the import section after other component imports:

```tsx
import FAQ2 from "@/components/faq-2"
```

- [ ] **Step 3: Add FAQ2 component before CallToAction in the JSX**

In the JSX before `<section><CallToAction /></section>`, add:

```tsx
      <Spacer />

      <FAQ2 />
```

Final structure should look like:
```tsx
      {/* Related case studies */}
      <FeatureCarousel />

      <Spacer />

      <FAQ2 />

      <Spacer />

      <section>
        <CallToAction />
      </section>
    </main>
  );
}
```

- [ ] **Step 4: Verify the service page builds without errors**

Run: `npm run build 2>&1 | tail -50`

Expected: No TypeScript errors, build completes successfully

---

## Task 3: Test the Integration

**Files:**
- Test: Visual inspection on browser

- [ ] **Step 1: Start the dev server**

Run: `npm run dev`

Expected: Dev server starts at http://localhost:3000

- [ ] **Step 2: Navigate to a service page**

Open browser: `http://localhost:3000/services/paid-media` (or any service slug)

Expected: Page loads without errors

- [ ] **Step 3: Scroll to the bottom and verify FAQ2 renders**

Check:
- FAQ2 appears before CallToAction section
- "Frequently Asked Questions" heading visible
- FAQ categories ("General", "Services") visible
- Accordion items are clickable and expand/collapse
- Grid borders are visible on sides
- Layout is responsive on mobile/tablet/desktop

Expected: All of the above work correctly

- [ ] **Step 4: Test accordion interactions**

Click on FAQ items:
- Question expands to show answer
- Answer collapses when clicked again
- Multiple items can be open at once

Expected: Accordion works smoothly without issues

---

## Task 4: Commit

**Files:**
- Created: `src/components/faq-2.tsx`
- Modified: `src/app/(frontend)/services/[slug]/page.tsx`

- [ ] **Step 1: Stage and commit the changes**

Run:
```bash
git add src/components/faq-2.tsx src/app/\(frontend\)/services/\[slug\]/page.tsx
git commit -m "feat: add FAQ2 component to service pages

- Create FAQ2 component with hardcoded FAQ groups
- Use raw three-column grid structure with visible borders
- Responsive multi-column accordion layout (1 col mobile, 2 cols @2xl, 4 cols @4xl)
- Integrate into service detail pages before CallToAction
- Uses existing UI components (SideCol, Accordion)"
```

Expected: Changes committed successfully

---

## Spec Coverage Check

✓ **Raw three-column grid structure** — Task 1 implements SideCol + center + SideCol with `bg-border`  
✓ **Visible side borders** — `bg-border` + padding structure makes grid lines visible  
✓ **Multi-column responsive layout** — Task 1: 1 col mobile, 2 cols @2xl, 4 cols @4xl  
✓ **Accordion-style Q&A** — Task 1 uses existing Accordion components with category grouping  
✓ **Hardcoded data** — Task 1 defines `faqGroups` constant  
✓ **Integration into service pages** — Task 2 imports and places FAQ2 before CallToAction  
✓ **Styling consistency** — Task 1 uses existing UI classes and design tokens  
✓ **Component dependencies** — Task 1 imports SideCol and Accordion components correctly  

All spec requirements covered.
