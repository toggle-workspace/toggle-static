# Toggle Solutions — Website Content

> **Last updated:** 2026-05-17
> **Note:** This file reflects the current live copy across the codebase after the `update-copywriting` branch rewrites. All em dashes removed, binary contrasts eliminated, jargon replaced with plain language. See the Skills section at the bottom for the tools used.

---

## Company Information

- **Company Name:** Toggle Solutions
- **Website:** https://toggle.solutions/
- **Email:** hello@toggle.com
- **Phone:** +60 12-568 8681 (Viknesh, Sales Director)
- **Legal Contact:** hello@togglesolutions.com

---

## Navigation

- Our Work → `/work`
- Services → `/services`
- About → `/#about`
  - FAQ → `/#faq`

---

## Meta / SEO

**Page Title:** Toggle Solutions — Your Digital Growth Partner

**Meta Description:**
Performance marketing and growth systems for brands worldwide. Paid media, SEO, creative, and CRM under one strategy.

---

## Hero Section

**Label (eyebrow):** Your Digital Growth Partner

**Headline:**
The Agency Behind 50+ Growing Brands

**Subheading:**
We run paid media, creative, and lifecycle marketing as one system. Every channel points at the same goal: more revenue, less wasted spend.

**CTA Buttons:**

- Primary: Book a Consultation → `/contact`
- Secondary: See Our Work → `/work`

**Trust Indicators:**

- 4.9/5 stars
- Trusted by 50+ clients

---

## Partners / Clients Section

**Tagline:** 50+ brands trust Toggle with their growth.

**Client/Logo List:**
Bruno, CIMB Bank, Clarins, CNI, ESP, Great Eastern, GuruLabs, Kith & Kin, Kualesa, Leica, Maxis, Nihon, Puteri, Secom, Singlife, SuperMamaLab, Thompson, Toyota, Una Brands, Unitar, PetsMore

---

## Features / "How We Work" Section

**Section Heading:** One Strategy Across Every Channel

**Body Copy:**
Paid media, creative, SEO, email, and analytics run under one strategy here. When the channels share the same goal, each one makes the others work harder.

**Checklist:**

- Paid media across Meta, Google, and TikTok
- Creative production built for performance
- SEO, email, and lifecycle marketing

**CTA:** Explore Our Services → `/services`

**Stats Cards:**

- **50+ Active Brands** — Trusted by growing brands across Asia, the US, Europe, and beyond.
- **RM60M+ Managed** — Ad budget managed across Meta, Google, TikTok, and emerging platforms.
- **4.9/5 Rating** — Rated top by clients for results, reporting, and reliability.
- **Global Reach** — We've run campaigns across Asia, the US, Europe, and the Middle East.

---

## Process Section ("How We Work")

**Section Heading:** How We Work
**Subheading:** Three steps. One system.

**Step 1 — Audit:**
We start by understanding your business. A strategy call and marketing audit identifies gaps, quick wins, and the biggest growth levers for your brand.

**Step 2 — Launch:**
Campaigns go live fast. We build and launch across your highest-priority channels, without the slow agency handoffs.

**Step 3 — Scale:**
Results build over time. Every week we test, refine, and scale what's working, so performance improves the longer we work together.

---

## Services Page

**Label:** What We Offer
**Heading:** Full Stack Digital Solutions
**Description:** From brand awareness to revenue. We cover every channel and growth stage.

### Service Detail Page Structure (`/services/[slug]`)

Pages exist for: Performance Marketing, Branding, Web Development, Search Engine Optimisation.

Each detail page follows this flow:

1. **Header** — service name + short description (`service.description`)
2. **Hero image**
3. **Overview** — service headline as label, full overview paragraph (`service.headline` + `service.overview`)
4. **Our Approach** — FeaturesThree block with 3 service-specific pillars (`service.approach`) — label, heading, body + 3 cards each with a highlighted sentence and body
5. **What's included** — deliverables grid (`service.whatWeDo`)
6. **FAQ** — standard FAQ accordion
7. **CTA** — Book a Free Consultation

> Services without a detail page (Email Marketing, Content Marketing, Reporting, Creative Production, CRO, OOH, Online Store, CRM) only appear on `/services` as cards. Add them to `src/data/services.ts` with an `approach` field to enable a detail page.

---

### 1. Performance Marketing

**Headline:** Spend Smarter. Scale Faster.
**Card Description:** We run ads across Meta, Google, and TikTok, combining audience strategy, creative testing, and conversion data to find what works and scale it.

**Full Description:**
Performance marketing at Toggle is built around one goal: profitable growth. We manage and optimise campaigns across Meta, Google, and TikTok combining audience strategy, creative testing, and conversion data to find what works and scale it with confidence. Every dollar is tracked to revenue. Every decision is backed by data. The longer we run, the sharper the spend gets.

**Target Audience:** Brands that are ready to grow beyond organic and need a team that owns both strategy and execution.

**Features:**

- Paid social (Meta, TikTok) campaign management
- Google Search & Shopping campaigns
- Performance creative — ad concepts, copy, and iteration
- Audience research and segmentation
- Conversion rate optimisation
- Weekly reporting tied to real business metrics

**Our Approach (service detail page — FeaturesThree block):**

Label: Our Approach
Heading: Built Around Revenue, Not Reports
Body: We track every campaign back to what it drives for your business. Clicks and impressions are inputs. Revenue is the outcome.

- **Creative Testing at Scale** — We test hooks, formats, and messaging systematically. The best performers scale. The rest get cut. No guessing, no gut feel.
- **Multi-Market Expertise** — We've run campaigns across Asia, the US, Europe, and the Middle East. We know which platforms, audiences, and creative approaches convert in each market.
- **Strategy and Execution in One Team** — The people who plan your campaigns also run them. No handoffs between strategists and buyers. Faster decisions, cleaner results.

**Outcomes:**

- 3–5× Average ROAS improvement within 90 days
- 40% Reduction in customer acquisition cost
- 2× Increase in conversion rate from testing

---

### 2. Email Marketing

**Headline:** Email That Earns.
**Card Description:** Automated flows, segmentation, and campaigns that turn one-time buyers into repeat customers. Email is the highest-ROI channel in digital, when the setup is right.

**Full Description:**
Email is still the highest-ROI channel in digital marketing, when it's done with intention. We set up automated flows, segmentation, and campaigns that turn one-time buyers into repeat customers and reduce churn over time. Whether you're starting from scratch or have a neglected Klaviyo account, we'll build a system that pays for itself.

**Target Audience:** E-commerce and DTC brands that want to grow customer lifetime value without increasing ad spend.

**Features:**

- Welcome, abandoned cart, post-purchase, and win-back flows
- Newsletter strategy and copywriting
- List segmentation and lifecycle mapping
- A/B testing on subject lines, offers, and content
- Deliverability audits and list hygiene
- Monthly performance reviews

---

### 3. Branding

**Headline:** Stand for Something. Look the Part.
**Card Description:** We sharpen your positioning, clarify your message, and build a visual identity that holds across every channel, from ads to packaging.

**Full Description:**
A strong brand is the foundation every other marketing effort builds on. We work with you to sharpen your positioning, clarify your message, and build a visual identity that holds across every channel, from your ads to your packaging to your website. We build the positioning, voice, visual language, and the assets to carry it wherever your audience is.

**Target Audience:** Growing brands that feel inconsistent, or new brands that want to launch with intention and clarity.

**Features:**

- Brand positioning and messaging strategy
- Tone of voice and copywriting guidelines
- Logo design and visual identity systems
- Brand guidelines documentation
- Creative direction for campaigns and content

**Our Approach (service detail page — FeaturesThree block):**

Label: Our Approach
Heading: A Brand System You Can Actually Use
Body: Most brand projects end with a PDF that never gets opened. We build identity systems that travel across every channel and hold up under pressure.

- **Positioning Before Design** — We define who you are and who you're for before anything visual gets made. Every design decision builds on a clear strategy. The aesthetic follows the argument.
- **Built for Every Market** — Your brand needs to work across channels, languages, and regions. We build identity systems that stay coherent whether they're on a billboard in Kuala Lumpur or a campaign in London.
- **Guidelines Your Team Will Use** — Brand guidelines your designers can follow and your marketers can act on. Templates, component libraries, and documented rules that make consistent output fast.

**Outcomes:**

- 60% Increase in brand recall after identity refresh
- 2× Faster content production with a design system
- 35% Higher perceived value vs competitors

---

### 4. Content Marketing

**Headline:** Content That Earns Trust.
**Card Description:** Content that gets found, earns trust, and moves people closer to a decision. Built for search and every stage of the funnel.

**Full Description:**
Good content does three things: it gets found, it earns trust, and it moves people closer to a decision. We build content strategies that serve all three, so you're not just publishing for the sake of it. From blog articles to social content to landing page copy, we align every piece to your funnel and your audience.

**Target Audience:** Brands that want to build organic visibility and a content engine that supports every other channel.

**Features:**

- Content strategy and editorial planning
- SEO-optimised blog and article writing
- Social media content planning and copywriting
- Landing page and website copywriting
- Content audits and gap analysis
- Distribution planning across channels

---

### 5. Web Development

**Headline:** Websites Built to Convert.
**Card Description:** We design and develop websites and landing pages that load fast, communicate clearly, and turn visitors into customers.

**Full Description:**
Your website is the centre of your marketing system. We design and develop websites and landing pages that load fast, communicate clearly, and turn visitors into leads or customers. Every build is done with your growth goals in mind, not just aesthetics.

**Target Audience:** Brands launching, rebuilding, or looking to improve conversion rates on their existing site.

**Features:**

- Marketing website design and development
- Landing page design and build (for ads and campaigns)
- E-commerce website setup and optimisation
- Page speed and Core Web Vitals optimisation
- CRO-focused UX improvements
- Ongoing maintenance and iteration support

**Our Approach (service detail page — FeaturesThree block):**

Label: Our Approach
Heading: Conversion Is the Only Metric That Matters
Body: Every layout decision, every CTA, every line of copy starts with one question: does this move the visitor closer to taking action?

- **Conversion-First Design** — We start with your goal and build the page around it. Whether it's leads, sales, or sign-ups, the design serves the conversion. The aesthetic follows.
- **Performance as Standard** — 90+ Lighthouse scores and fast load times on every device. Core Web Vitals are built in from day one, not patched in after the site goes live.
- **Easy for Your Team to Update** — CMS-integrated builds your team can manage without a developer. Visual or structured editing, built around how your content team actually works.

**Outcomes:**

- 2.5× Average conversion rate uplift post-launch
- 95+ Lighthouse performance scores as standard
- 60% Faster page load times vs previous sites

---

### 6. Reporting & Analysis

**Headline:** Reporting That Tells You What to Do Next.
**Card Description:** We build a reporting system that tells you what the numbers mean and what to do about them, not just what they were.

**Full Description:**
Most marketing reports tell you what the numbers were. Ours tell you what they mean and what to do about it. We build a reporting and intelligence system tailored to your business, so you always know where growth is coming from, what's holding it back, and where to focus next.

**Target Audience:** Brands that want full visibility into their marketing performance and a team that turns data into decisions.

**Features:**

- Marketing dashboard setup (GA4, Meta, Google Ads, Klaviyo)
- Weekly and monthly performance reporting
- Attribution modelling and channel analysis
- Funnel performance tracking
- KPI setting and goal-to-metric mapping
- Competitive benchmarking and market analysis

---

### 7. Search Engine Optimisation

**Headline:** Own the Search Results Your Competitors Are Chasing.
**Card Description:** We build organic search visibility across Google, AI answer engines, and the next generation of discovery. Once built, traffic grows without ongoing media spend.

**Full Description:**
SEO at Toggle goes beyond page rankings. We build a search presence that performs across Google, AI-powered answer engines, and the emerging landscape of LLM-driven discovery, so your brand shows up wherever your customers are looking. Whether you're starting from scratch or recovering lost ground, we build a system designed to grow consistently.

**Target Audience:** Brands that want sustainable organic growth and a search presence built for where search is today and where it's heading.

**Features:**

- Technical SEO audit and fixes
- Keyword research and content gap analysis
- On-page optimisation across product and category pages
- Content strategy and SEO copywriting
- E-E-A-T signal strengthening for competitive and YMYL categories
- Link building and authority development
- Generative Engine Optimisation (GEO)
- Monthly performance tracking across traditional and AI search channels

**Our Approach (service detail page — FeaturesThree block):**

Label: Our Approach
Heading: Rankings That Hold
Body: Short-term tactics get short-term results. We build the technical foundations and content depth that keep you at the top once you get there.

- **Technical Before Content** — No content strategy works on a technically broken site. We fix architecture, crawlability, and Core Web Vitals first, then build content on solid foundations.
- **Optimised for AI Search Too** — Google is no longer the only answer engine. We structure content to appear in AI Overviews, ChatGPT answers, and conversational results across every major platform.
- **Content That Earns Authority** — We build topical authority, not just keyword density. Every piece is mapped to intent and structured to earn trust with both readers and search engines.

**Outcomes:**

- 3× Organic traffic growth within 6 months
- Top 3 rankings for primary commercial keywords
- 50% Reduction in paid spend dependency over 12 months

---

### 8. Creative Production

**Headline:** Creative That Stops the Scroll.
**Card Description:** Visuals and video assets built with performance in mind, strong concepts, sharp messaging, and formats that work across every channel.

**Full Description:**
Great creative is the difference between an ad that gets skipped and one that drives action. At Toggle, we produce visuals and video assets built with performance in mind, combining strong concepts, sharp messaging, and formats that work across every channel. From static ads to short-form video, everything we produce is designed to do a job.

**Target Audience:** Brands that need a steady pipeline of high-quality creative assets without the overhead of an in-house production team.

**Features:**

- Static ad creative for Meta, Google, and TikTok
- Short-form video and reels production
- Motion graphics and animated ads
- Brand content and social media visuals
- Creative concepting and scripting
- Creative testing frameworks to identify top performers

---

### 9. Conversion Optimisation

**Headline:** Get More from the Traffic You Have.
**Card Description:** We run structured testing programmes so data decides what works. Improvements build on each other over time.

**Full Description:**
Getting people to your site is only half the battle. Conversion optimisation is about making sure your messaging, user journey, and on-site experience are working hard enough to turn that traffic into customers. We run structured testing programmes so data decides what works, and improvements build on each other over time rather than relying on one-off redesigns.

**Target Audience:** Brands with existing traffic that aren't converting at the rate they should be, and want a structured, evidence-based approach to fixing it.

**Features:**

- Conversion audit across landing pages and key funnels
- A/B and multivariate testing
- Landing page design and copy optimisation
- User journey mapping and friction analysis
- Form and checkout flow improvements
- Heatmap and session recording analysis
- Ongoing testing roadmap and prioritisation

---

### 10. Out of Home

**Headline:** Show Up Where Screens Can't Reach.
**Card Description:** Strategic outdoor media, billboards, transit, digital OOH, placed where your audience moves and tied back to your broader growth objectives.

**Full Description:**
Digital gets you clicks. OOH gets you presence. When your brand shows up in the physical spaces your audience moves through every day, commutes, high streets, malls, events, it builds the kind of awareness that no algorithm can replicate. At Toggle, we plan and execute OOH campaigns that are strategically placed, creatively sharp, and tied back to your broader growth objectives.

**Target Audience:** Brands looking to build mass awareness, enter new markets, or reinforce their digital presence with high-impact offline visibility.

**Features:**

- OOH strategy and media planning
- Billboard, transit, and mall advertising placement
- Digital out-of-home (DOOH) placements
- Creative direction and artwork production
- Geo-targeted placement strategy
- Campaign measurement and brand lift tracking
- Integration with digital campaigns for full-funnel impact

---

### 11. Online Store Management

**Headline:** A Store That Works as Hard as Your Marketing Does.
**Card Description:** We take ownership of your e-commerce operations and continuously optimise for performance, so your store grows alongside your marketing.

**Full Description:**
Your online store is where traffic becomes revenue. But most stores are leaving money on the table, through slow load times, poor product presentation, friction in the buying journey, or missed opportunities in merchandising. We take ownership of your e-commerce operations and continuously optimise for performance, so your store grows alongside your marketing.

**Target Audience:** E-commerce brands that want their store actively managed and optimised, not just maintained.

**Features:**

- Shopify and e-commerce platform management
- Product listing optimisation — copy, imagery, and categorisation
- Promotions, bundles, and campaign setup
- Store speed and performance optimisation
- Inventory and catalogue management
- App and integration management
- Sales funnel and checkout optimisation
- Monthly performance reviews and growth recommendations

---

### 12. Customer Relationship Management (CRM)

**Headline:** Keep the Customers You Already Have.
**Card Description:** We build CRM systems that work in the background, continuously nurturing your customer base and recovering revenue that would otherwise walk out the door.

**Full Description:**
Acquiring a customer is just the beginning. The brands that win long-term are the ones that keep customers coming back, through smarter communication, better timing, and experiences that feel personal. At Toggle, we build CRM systems that work in the background, continuously nurturing your customer base and recovering revenue that would otherwise walk out the door.

**Target Audience:** Brands that have built a customer base and want to maximise the value of every relationship.

**Features:**

- CRM platform setup and management (Klaviyo, HubSpot, and more)
- Customer lifecycle mapping and segmentation
- Automated retention flows — win-back, re-engagement, loyalty
- RFM modelling to identify high-value and at-risk customers
- Post-purchase experience design
- Loyalty and rewards programme strategy
- Customer health scoring and churn prediction
- Cross-sell and upsell sequence development
- CRM integration with paid media for retargeting alignment
- Monthly retention performance reporting and LTV tracking

---

## About Page

**Label:** About us
**Headline:** Performance marketing built to last.

**Body:**
Founded in 2021, Toggle Solutions was built around one idea: growth marketing should be transparent, measurable, and built to last. Today we work with brands across Asia, the US, Europe, and beyond.

**Stats:**

- 50+ brands grown across Asia, the US, Europe, and beyond.
- 4+ years of data-driven performance marketing.

---

### Our Mission

**Paragraph 1:**
Great marketing happens when brands can focus on their customers. Fragmented tools and inconsistent results get in the way of that.

**Paragraph 2:**
Our job is to make growth predictable. We build the systems and run the campaigns so brands can scale without the guesswork.

---

### Core Values

**Subheading:** The principles that guide every decision we make.

1. **Data-Driven Decisions** — We challenge assumptions with evidence. Every campaign decision starts with a question: what does the data say?

2. **Craft & Care** — Details matter. Every ad, landing page, and email is a chance to earn the click and keep the customer.

3. **True Partnership** — We work inside your goals, not around them. If your numbers improve, ours do too.

4. **Radical Transparency** — We share real numbers, honest assessments, and clear reporting. You always know where you stand.

---

## Team

### Yi Yang — Strategy Director

- 5 years in performance marketing & e-commerce growth
- RM60m in ad budget managed
- Regional digital strategy: SEA, US, EU, Middle East
- Past clients: Kualesa, Montigo, Cosmic Cookware, Thousand Miles, UNA Brands, RPG Ventures & Fintech clients

### Viknesh — Sales Director

- 5 years in B2B sales, governance, sustainability, and internal audit consulting
- Past clients: BNM, Prolintas, Monash, PPB Group, Johor Plantations, Government Banks, Maybank, IOI Group, KLK Group

### Jordan Pinto — Marketing Director

- 3 years in media buying, PM strategy & development, website tracking
- USD 10m in ad budget managed
- Regional expansion: SEA, EU, USA
- Past clients: RPG Commerce, Brighttail, LTSE Equity, Avontus Software, Communardo, Marvelution, Elements Apps, Catapult Labs

### Zaid Saad — Digital Strategist

- 6 years in media buying and content strategy
- RM45m in ad budget managed
- Regional expansion: SEA and EU
- Past clients: RPG Commerce, Mindvalley, Renault, Tokio Marine, Motul, Klook, Scoot Airlines, Changi Airports

### Shaun Boey — Performance Lead

- 6 years in media buying, ad-tech growth strategy, UI/UX strategy, and branding strategy
- USD 5m in ad budget managed
- Past clients: RPG Commerce, Antidote Lifestyle, AIA Malaysia, Zeiss, Bridgestone

---

## Case Studies (Our Work)

**Page Label:** Our Work
**Page Title:** Results across every industry.
**Page Description:** How we've helped brands around the world.

---

### UNITAR Education Sdn. Bhd. — From Moonshot to Milestone

- **Industry:** Education | **Location:** Petaling Jaya, Malaysia
- **Services:** Performance Marketing, Reporting & Analysis, Content Marketing

**Overview:**
UNITAR International University is a leading private university in Malaysia, recognized for its innovative approach to education and a strong commitment to producing workforce-ready graduates.

**Challenge:**
UNITAR faced aggressive student acquisition targets in a saturated market. By mid-2024, acquisition costs were spiraling — TikTok CPLs hitting RM525 and Facebook reaching RM291. Top media agencies had tried and failed to scale efficiently.

**Solution:**
Toggle executed a data-driven, multi-channel performance strategy implementing a comprehensive Full-Funnel Messaging Matrix, delivering tailored content from myth-busting hooks on TikTok to urgency-driven CTAs on Google and Meta.

**Result:**
From June to September 2025, the campaign generated over 32,000 qualified leads. CPL reduced by 47% year-on-year despite scaling ad spend to RM4 million. UNITAR captured 77% of total impressions within the Education & Training category in Malaysia.

**Carousel Excerpt:**
UNITAR needed to scale student acquisition without inflating costs. We ran a full-funnel campaign across TikTok, Meta, and Google, capturing 77% of total impressions in the Education category in Malaysia.

**Metrics:**

- 32K+ Qualified Leads from Ads
- 77% Total Impressions Across Malaysia
- 47% CPL Reduction Year-on-Year

---

### CIMB Bank Berhad — From Authority Gap to Search Dominance

- **Industry:** Banking | **Location:** Kuala Lumpur, Malaysia
- **Services:** Search Engine Optimization

**Challenge:**
Despite dominant brand presence, CIMB's organic performance wasn't keeping pace. Product and category pages lacked keyword depth. Blog content had redundancies diluting quality signals. Internal approval processes slowed publishing cycles.

**Solution:**
Toggle repositioned CIMB's SEO around a content-led authority model. Comprehensive content audit, keyword gap analysis across core product pillars, structured internal linking frameworks, and streamlined approval workflows.

**Result:**
Within twelve months, CIMB's organic impressions grew by 52.6% and organic clicks increased by 34.5%, driven by a content system designed to grow consistently.

**Carousel Excerpt:**
CIMB's product pages lacked keyword depth and their blog had content that diluted quality signals. We rebuilt their content strategy from the ground up. Organic clicks grew 34.5% within a year.

**Metrics:**

- 52.6% Increase in Organic Impressions
- 34.5% Growth in Organic Clicks

---

### Kith & Kin Realty Sdn. Bhd. — Unlocking New Growth Channels

- **Industry:** Real Estate | **Location:** Kuala Lumpur, Malaysia
- **Services:** Performance Marketing, Reporting & Analysis, Content Marketing

**Challenge:**
The client had never run paid advertising before. They relied entirely on organic referrals and cold-calling, which struggled to deliver consistent results.

**Solution:**
Toggle identified significant lack of paid advertising competition around their key project in Dutamas. Deployed targeted Meta Ad campaigns using lead generation and message-specific strategies with diverse creative formats.

**Carousel Excerpt:**
Kith & Kin had never run paid advertising before. They relied entirely on organic referrals and cold-calling. Three months of targeted Meta campaigns later: 392% more leads, RM35 CPL, and a 10% conversion rate from lead to closed deal.

**Metrics:**

- 392% Increase in Lead Volume
- RM35 Cost Per Lead
- 10% Lead-to-Deal Conversion Rate

---

### Kualesa Apparel Sdn Bhd — Stitching a Movement

- **Industry:** Apparel | **Location:** Petaling Jaya, Malaysia
- **Services:** Performance Marketing, Reporting & Analysis

**Challenge:**
In a fashion industry dominated by fast, cheap, and disposable, breaking the stigma that eco-friendly clothing is boring or ill-fitting. Needed to cut through fast fashion noise.

**Solution:**
Positioned Kualesa not just as a brand but as a lifestyle choice for the modern, responsible citizen. Crafted a narrative elevating responsible fashion into an aspirational standard at the intersection of chic and conscious.

---

### Singlife PTE LTD — From Third to First in 90 Days

- **Industry:** Financial Services | **Location:** Singapore
- **Services:** Search Engine Optimization

**Challenge:**
Core insurance keywords sitting around position three. Existing content needed deeper alignment with user intent and stronger E-E-A-T signals.

**Solution:**
Comprehensive on-page content optimisation built around intent alignment, authority reinforcement, and structural relevance. Expanded priority insurance pages with keyword-rich, semantically structured content.

**Carousel Excerpt:**
Singlife's core insurance keywords sat at position three. Close to the top, but far enough to lose meaningful traffic every month. We rebuilt their on-page content and organic clicks grew 23%.

**Metrics:**

- 23% Increase in Organic Clicks
- #1 Ranking for Core Insurance Keywords

---

### Great Eastern Holdings LTD — Two Months to the Top

- **Industry:** Life Insurance | **Location:** Singapore
- **Services:** Search Engine Optimization

**Challenge:**
Core keywords plateaued around position four. Meta titles lacked keyword targeting. Competitors were aggressively refining SEO strategies.

**Solution:**
Targeted, high-impact approach focusing on metadata refresh, rewriting title tags and meta descriptions to sharpen keyword prominence, improve semantic alignment, and increase CTR.

**Carousel Title:** #1 for Core Insurance Keywords in Two Months: Great Eastern Singapore

**Carousel Excerpt:**
Great Eastern's key insurance pages were stuck at position four. A targeted metadata refresh and content restructure moved them to position one in two months, with a 75% increase in search visibility.

**Metrics:**

- 16% Increase in Organic Clicks
- 75% Increase in Search Visibility
- Rankings improved from #4 to #1

---

### Restoran Mahbub — Online Delivery & Catering Growth

- **Services:** Performance Marketing, Creative Production, Conversion Optimisation
- **Metrics:** RM2.6M+ in online revenue | +46% catering leads (Q3 to Q4 2024)

**Challenge:** A well-established restaurant performing well offline but struggling to grow its online food delivery business.

**Solution:** Ran marketing campaigns on Meta and Google to generate online revenue. Curated sales messaging flows across Messenger, Instagram, and WhatsApp to generate catering enquiries.

---

### TPL Fresh Meats — From Walk-In to Online Revenue

- **Services:** Performance Marketing, Reporting & Analysis
- **Metrics:** RM172K+ in sales from Meta | 20x ROAS

**Challenge:** Retail stores with strong walk-in sales but negligible online revenue.

**Solution:** Ran ads on Meta and Google using their own social media content. Generated RM172K in revenue at 20× ROAS.

---

## Call to Action Section

**Heading:** Book a Free Consultation
**Body:** 50+ brands already work with Toggle. We'll review your marketing and tell you what's worth doing first.
**Button:** Book a Free Consultation → `/contact`

---

## Contact Page

**Label:** Book a Consultation
**Heading:** Talk to a growth strategist.
**Description:** Fill the form and we'll be in touch within 24 hours to schedule a call.

**Trust Indicators:**

- Free, no-obligation consultation call
- No sales pitches, no pressure
- Simple, transparent pricing

**Contact Info:**

- Email: marketing@togglesolutions.com
- Phone: +60 12-568 8681
- Office: Kuala Lumpur, Malaysia

**Form Heading:** Tell us about your business.
**Form Description:** We'll review your details before the call so we can make the most of your time.

**Form Fields:**

- Name (required)
- Email (required)
- Website URL (optional)
- Services you're interested in (dropdown: Performance Marketing, SEO & Content, Branding & Web, Email & CRM, Not sure yet)
- How can we help? (text area)
- Submit Button: Book a Consultation

---

## FAQ

### General

**1. What do I get in the Free Brand Audit?**
Our Free Brand Audit covers your marketing channels, funnel performance, and growth opportunities. You'll get a roadmap with 3–5 prioritised growth levers, quick wins to boost conversions, and clear next steps.

**2. How long does it take to receive the audit?**
We respond within 24 hours and deliver the completed audit within 3–5 business days, depending on your current setup and data availability.

**3. Who will I work with?**
You won't be handed off to a junior team. Every client gets a dedicated team of three: a Senior Account Manager as your main point of contact, a Senior Performance Marketer for campaign execution, and a Backup Specialist for coverage and support. No unnecessary layers.

### Services

**4. What type of brands are you the best fit for?**
We've worked across Education, Healthcare, Technology, Professional Services, F&B, FMCG, E-commerce, and Lifestyle. If you're serious about growth, we're built for you.

**5. Do you do performance marketing only?**
Performance marketing is one part of what we do. Sustainable growth needs more. We run paid media, creative strategy, SEO, CRO, content, email, lifecycle marketing, and CRM under one strategy.

**6. What results can I expect and how fast?**
Leads and sales can start coming in on Day 1 of campaign launch. Early improvements often show within weeks 2–4. Stronger, sustained growth builds over days 60–90 as we test, optimise, and scale what's working.

**7. What does pricing look like?**
Pricing is scoped to your needs and budget. Most engagements run as a monthly retainer covering the services most relevant to your stage, whether that's campaign management, creative production, CRO, SEO, or a combination. We'll outline a clear proposal after the first call.

**8. Do you require long-term contracts?**
We focus on long-term partnerships but avoid restrictive contracts. Most engagements run on flexible monthly agreements based on performance and results.

---

## Footer

**Tagline:** Performance marketing and growth systems for brands worldwide.

**Services Links:**

- Performance Marketing → `/services/performance-marketing`
- Content Strategy → `/services/content-marketing`
- Branding → `/services/branding`
- Web Development → `/services/web-development`
- Email Marketing → `/services/email-marketing`

**Company Links:**

- About → `/about`
- Our Work → `/work`
- Contact → `/contact`

**Case Studies Links:**

- UNITAR → `/work/unitar`
- CIMB Bank → `/work/cimb`
- Kith & Kin → `/work/kith-and-kin`
- Kualesa → `/work/kualesa`
- Singlife → `/work/singlife`

**Social:**

- LinkedIn → https://www.linkedin.com/company/toggle-solutions
- Instagram → https://www.instagram.com/toggle.solutions/

**Copyright:** © Toggle Solutions. All rights reserved.
**Legal:** Terms and Conditions (`/terms`) | Privacy Policy (`/privacy`)

---

## Terms and Conditions

**Contact:** hello@togglesolutions.com

1. **Acceptance of Terms** — By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
2. **Use License** — Permission is granted to temporarily download one copy of materials for personal, non-commercial transitory viewing only.
3. **Disclaimer** — The materials on Toggle Solutions' website are provided on an 'as is' basis with no warranties, express or implied.
4. **Limitations** — Toggle Solutions is not liable for any damages from use or inability to use materials on the website.
5. **Revisions and Errata** — Toggle Solutions does not warrant accuracy, completeness, or currency of materials and may make changes without notice.

---

## Privacy Policy

**Contact:** hello@togglesolutions.com

1. **Information We Collect** — Name, email address, mailing address, phone number, credit card information (when applicable).
2. **How We Use Your Information** — To personalize your experience, improve our website, improve customer service, process transactions, and send periodic emails.
3. **Protection of Your Information** — Various security measures implemented including SSL technology for sensitive information.
4. **Cookies** — We use cookies to recognize your browser, capture and remember certain information, understand and save preferences.
5. **Third Party Disclosure** — We do not sell, trade, or transfer personally identifiable information to outside parties except for trusted third parties assisting with operations.

---

## Copywriting Skills & Tools Reference

These skills live in `.agents/skills/` and were used to rewrite this site's copy. Reference them in future sessions when editing any visible copy.

### Skills Used

| Skill                  | Path                                              | When to Use                                                                                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Toggle Copywriting** | `.agents/skills/toggle-copywriting/SKILL.md`      | **Start here for all copy work on this site.** Project-specific skill combining Stop Slop, Ogilvy, and page-level rules for Toggle Solutions. Includes approved facts, hard boundary rules (no structural changes), and output format instructions.    |
| **Stop Slop**          | `.agents/skills/stop-slop/SKILL.md`               | Full pattern library for eliminating AI writing tells. Referenced by Toggle Copywriting.                                                                                                                                                               |
| **Ogilvy Copywriting** | `.agents/skills/ogilvy/SKILL.md`                  | Deeper theory on positioning, promises, and headline construction. Referenced by Toggle Copywriting for headlines and CTAs.                                                                                                                             |
| **Copywriting**        | `.agents/skills/copywriting/SKILL.md`             | General page structure frameworks and CTA formulas. Referenced by Toggle Copywriting for page-level structure.                                                                                                                                         |

### Stop Slop Quick Reference (Most Common Violations)

| Pattern                                           | Fix                                                     |
| ------------------------------------------------- | ------------------------------------------------------- |
| Em dash `—`                                       | Use a period or comma instead. No exceptions.           |
| `"not X, but Y"` / `"stop X and start Y"`         | State Y directly. Drop the negation.                    |
| `"ambitious"`, `"best-in-class"`, `"double down"` | Replace with plain language.                            |
| `"compounds"`, `"compounding growth"`             | Say what actually happens: "grows", "builds over time". |
| `"While every business is different..."`          | Cut the hedge. State the claim directly.                |
| `"Your wins are our wins"`                        | Say what this means in practice.                        |
| `"No smoke and mirrors"`                          | Delete. State what you do, not what you don't do.       |
| Three-item staccato fragments                     | Write full sentences.                                   |
| `"eliminate the friction between X and Y"`        | Say what you actually do instead.                       |

### Stop Slop Checklist Before Any Copy Ships

- [ ] Zero em dashes in visible copy
- [ ] No adverbs (`really`, `truly`, `simply`, `genuinely`, `actually`)
- [ ] No binary contrasts (`not X, but Y`)
- [ ] No rhetorical questions as headings
- [ ] No `"ambitious brands"` — use specific descriptors
- [ ] Active voice throughout
- [ ] No three-item dramatic fragments
- [ ] Every claim is specific, not vague
