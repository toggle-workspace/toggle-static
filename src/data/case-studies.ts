export type CaseStudy = {
  client: string;
  slug: string;
  industry: string;
  location: string;
  services: string[];
  headline: string;
  overview: string;
  content: string;
  image?: string;
  logoUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    client: "UNITAR Education Sdn. Bhd.",
    slug: "unitar",
    industry: "Education",
    location: "Petaling Jaya, Malaysia",
    services: [
      "Performance Marketing",
      "Reporting & Analysis",
      "Content Marketing",
    ],
    headline: "From Moonshot to Milestone",
    overview:
      "UNITAR International University needed to scale student acquisition during Malaysia's most competitive intake period — without letting acquisition costs run. By mid-2024, TikTok CPL had reached RM525 and Facebook RM291. Top agencies had tried and stepped away.",
    image: "https://picsum.photos/seed/unitar-edu/1200/675",
    logoUrl: "https://placehold.co/96x96/1a3a6b/ffffff?text=UNI",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>UNITAR needed to increase student enrolment during Malaysia's most competitive intake period. Acquisition costs had climbed fast — TikTok CPL reached RM525 and Facebook hit RM291 before we started. Several agencies had tried to crack this brief and walked away.</p>
<h2 id="what-we-did">What We Did</h2>
<p>We built a full-funnel messaging matrix across TikTok, Meta, and Google, assigning each platform a distinct role. TikTok handled myth-busting and awareness. Meta drove consideration with course-specific content. Google captured high-intent searches with urgency-led ad copy.</p>
<p>We integrated Facebook CAPI for cleaner conversion data and used weekly CPL signals to shift budget in real time. Creative was tested at volume — different hooks, formats, and audiences running simultaneously so we could drop what wasn't working fast.</p>
<h2 id="the-results">The Results</h2>
<p>From June to September 2025, the campaign generated 32,000+ qualified leads. CPL dropped 47% year-on-year while ad spend scaled to RM4 million. UNITAR captured 77% of total impressions in the Education and Training category in Malaysia.</p>
<ul>
  <li><strong>32K+</strong> Qualified Leads from Ads</li>
  <li><strong>77%</strong> Total Impressions Across Malaysia</li>
  <li><strong>47%</strong> CPL Reduction Year-on-Year</li>
</ul>`,
  },
  {
    client: "CIMB Bank Berhad",
    slug: "cimb",
    industry: "Banking",
    location: "Kuala Lumpur, Malaysia",
    services: ["Search Engine Optimization"],
    headline: "From Authority Gap to Search Dominance",
    overview:
      "CIMB Bank has strong brand recognition across Malaysia, but their organic search performance wasn't keeping pace. Product pages lacked keyword depth, content quality signals were diluted by redundant blog posts, and internal approval cycles slowed publishing.",
    image: "https://picsum.photos/seed/cimb-bank/1200/675",
    logoUrl: "https://logo.clearbit.com/cimb.com",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>CIMB's product and category pages lacked keyword depth and semantic coverage. Their blog had content redundancies that diluted quality signals across the site. Internal approval processes slowed the publishing cycle significantly — making it hard to move quickly on content opportunities.</p>
<h2 id="what-we-did">What We Did</h2>
<p>We ran a comprehensive content audit and identified keyword gaps across CIMB's core product pillars. A structured internal linking framework improved how authority flowed across the site. We rebuilt their content strategy around topical authority rather than isolated keywords, and streamlined the internal approval workflow to unblock publishing.</p>
<h2 id="the-results">The Results</h2>
<p>Within twelve months, organic impressions grew by 52.6% and organic clicks increased by 34.5%. Priority keywords saw double-digit ranking improvements across the categories that matter most for CIMB's core banking products.</p>
<ul>
  <li><strong>52.6%</strong> Increase in Organic Impressions</li>
  <li><strong>34.5%</strong> Growth in Organic Clicks</li>
</ul>`,
  },
  {
    client: "Kith & Kin Realty Sdn. Bhd.",
    slug: "kith-and-kin",
    industry: "Real Estate",
    location: "Kuala Lumpur, Malaysia",
    services: [
      "Performance Marketing",
      "Reporting & Analysis",
      "Content Marketing",
    ],
    headline: "Unlocking New Growth Channels",
    overview:
      "Kith & Kin Realty specialises in residential development projects across Kuala Lumpur and Selangor. Before working with Toggle, they had never run paid advertising. All lead generation came from organic referrals and cold-calling.",
    image: "https://picsum.photos/seed/kith-kin-realty/1200/675",
    logoUrl: "https://placehold.co/96x96/2d5016/ffffff?text=K%26K",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Kith & Kin needed a reliable, repeatable way to generate qualified enquiries for a new development in Dutamas, near Mont Kiara. Their existing channels — referrals and cold-calling — were hard to scale and inconsistent month to month.</p>
<h2 id="what-we-did">What We Did</h2>
<p>We spotted a gap: paid advertising competition around their Dutamas development was thin. We deployed targeted Meta campaigns using lead generation and message-specific objectives, with creative mixing GIFs, images, and video across ad sets. Audience targeting focused on buyers in the right income bracket and geographic area.</p>
<h2 id="the-results">The Results</h2>
<p>Over three months, lead volume increased 392% at a sustained RM35 cost per lead. Ten percent of those leads converted to closed deals.</p>
<ul>
  <li><strong>392%</strong> Increase in Lead Volume</li>
  <li><strong>RM35</strong> Cost Per Lead</li>
  <li><strong>10%</strong> Lead-to-Deal Conversion Rate</li>
</ul>`,
  },
  {
    client: "Kualesa Apparel Sdn Bhd",
    slug: "kualesa",
    industry: "Apparel",
    location: "Petaling Jaya, Malaysia",
    services: ["Performance Marketing", "Reporting & Analysis"],
    headline: "Stitching a Movement",
    overview:
      "Kualesa is a Malaysian eco-fashion brand building the case that sustainable clothing doesn't have to look like a compromise. Their challenge was cutting through an industry where fast, cheap, and disposable set the baseline expectation.",
    image: "https://picsum.photos/seed/kualesa-apparel/1200/675",
    logoUrl: "https://placehold.co/96x96/4a7c59/ffffff?text=KUA",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Eco-fashion carries a perception problem. Most consumers assume sustainable means dull, poorly fitted, or overpriced. Kualesa needed to earn attention in a category dominated by brands with much larger budgets and no concern for impact.</p>
<h2 id="what-we-did">What We Did</h2>
<p>We repositioned Kualesa away from the environmental guilt angle and toward aspiration. Sustainability became the natural outcome of buying well-designed clothing, not the reason to buy. Creative focused on how the product looked on real people, and messaging treated Kualesa as a marker of taste and values rather than a sacrifice.</p>
<h2 id="the-results">The Results</h2>
<p>Kualesa built a loyal customer base that returns on identity, not just price. Conversion rates improved as the brand positioning sharpened, and repeat purchase rates grew as customers began to identify with the brand's point of view in the Malaysian market.</p>`,
  },
  {
    client: "Singlife PTE LTD",
    slug: "singlife",
    industry: "Financial Services",
    location: "Singapore",
    services: ["Search Engine Optimization"],
    headline: "From Third to First in 90 Days",
    overview:
      "Singlife is a digital-first insurance provider in Singapore. Their core insurance keywords were sitting at position three — close to the top, but far enough to feel the traffic gap every month.",
    image: "https://picsum.photos/seed/singlife-sg/1200/675",
    logoUrl: "https://logo.clearbit.com/singlife.com",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Singlife's priority insurance keywords were stuck around position three. The gap between third and first is measurable in thousands of clicks per month. Their existing content needed stronger intent alignment and clearer authority signals to move.</p>
<h2 id="what-we-did">What We Did</h2>
<p>We rebuilt the on-page content for Singlife's priority insurance pages around three pillars: intent alignment, authority reinforcement, and structural relevance. Headings, internal links, and semantic coverage were tightened. Authority signals were strengthened to meet Google's standards for high-trust financial content.</p>
<h2 id="the-results">The Results</h2>
<p>Within three months, core insurance keywords moved from position three to position one. Organic clicks across high-value search categories grew by 23%.</p>
<ul>
  <li><strong>23%</strong> Increase in Organic Clicks</li>
  <li><strong>#1</strong> Ranking for Core Insurance Keywords</li>
</ul>`,
  },
  {
    client: "Great Eastern Holdings LTD",
    slug: "great-eastern",
    industry: "Life Insurance",
    location: "Singapore",
    services: ["Search Engine Optimization"],
    headline: "Two Months to the Top",
    overview:
      "Great Eastern is one of Singapore's most established insurance providers. Their priority insurance pages were stuck at position four, with meta titles that lacked keyword prominence and snippets that weren't pulling clicks.",
    image: "https://picsum.photos/seed/great-eastern-sg/1200/675",
    logoUrl: "https://logo.clearbit.com/greateasternlife.com",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Great Eastern's priority insurance pages had plateaued at position four. Their meta titles lacked keyword targeting, on-page content didn't match what searchers were looking for, and click-through rates were low because the search snippets weren't compelling. Competitors were refining their SEO continuously.</p>
<h2 id="what-we-did">What We Did</h2>
<p>We rewrote title tags and meta descriptions to sharpen keyword prominence and improve CTR. On-page content was restructured for better semantic alignment, with heading hierarchies and internal keyword signals tightened across priority landing pages.</p>
<h2 id="the-results">The Results</h2>
<p>In two months, Great Eastern moved from position four to position one for core insurance keywords. Organic clicks grew 16% and search visibility increased 75%.</p>
<ul>
  <li><strong>16%</strong> Increase in Organic Clicks</li>
  <li><strong>75%</strong> Increase in Search Visibility</li>
  <li><strong>#1</strong> From #4 to #1 Rankings</li>
</ul>`,
  },
  {
    client: "Restoran Mahbub",
    slug: "mahbub",
    industry: "Food & Beverage",
    location: "Malaysia",
    services: [
      "Performance Marketing",
      "Creative Production",
      "Conversion Optimisation",
    ],
    headline: "Online Delivery & Catering Growth",
    overview:
      "Restoran Mahbub had a strong walk-in customer base and a well-known name in their area. Online delivery revenue was minimal, and catering enquiries were inconsistent with no system behind them.",
    image: "https://picsum.photos/seed/mahbub-restaurant/1200/675",
    logoUrl: "https://placehold.co/96x96/8b1a1a/ffffff?text=MAH",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Restoran Mahbub had loyal walk-in trade but no reliable online revenue. Delivery orders were sporadic and catering enquiries came in irregularly. The restaurant had strong social content but wasn't using it to drive transactions.</p>
<h2 id="what-we-did">What We Did</h2>
<p>For delivery, we ran Meta and Google campaigns using Mahbub's existing social content as creative, keeping production costs low while putting the food in front of the right audiences. For catering, we built structured sales messaging flows across Messenger, Instagram, and WhatsApp to handle enquiries at volume and convert them consistently.</p>
<h2 id="the-results">The Results</h2>
<p>Delivery campaigns generated RM2.6M+ in online revenue from 2021 to 2023. Catering leads increased 46% from Q3 to Q4 2024, with 300+ conversations generated through the messaging flows.</p>
<ul>
  <li><strong>RM2.6M+</strong> Online Revenue Generated</li>
  <li><strong>+46%</strong> Catering Leads (Q3 to Q4 2024)</li>
</ul>`,
  },
  {
    client: "TPL Fresh Meats",
    slug: "tpl",
    industry: "FMCG",
    location: "Malaysia",
    services: ["Performance Marketing", "Reporting & Analysis"],
    headline: "From Walk-In to Online Revenue",
    overview:
      "TPL Fresh Meats ran well-trafficked retail stores across Malaysia. Their online sales were negligible despite the customer base, and they had no reliable digital channel to reach new buyers beyond their physical locations.",
    image: "https://picsum.photos/seed/tpl-fresh-meats/1200/675",
    logoUrl: "https://placehold.co/96x96/b45309/ffffff?text=TPL",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>TPL had loyal customers walking through the door, but no way to sell online or reach buyers outside their immediate area. Their social content existed but wasn't driving transactions.</p>
<h2 id="what-we-did">What We Did</h2>
<p>We ran Meta and Google ads using TPL's own social content as creative, keeping costs low. Targeting focused on buyers within reach of their store locations. Campaigns were structured to track revenue directly, not just traffic or engagement, so we could optimise toward what actually mattered.</p>
<h2 id="the-results">The Results</h2>
<p>From October 2021 to 2024, the campaigns generated RM172K+ in online revenue at a 20x return on ad spend — a consistent digital sales channel running alongside the physical stores.</p>
<ul>
  <li><strong>RM172K+</strong> Revenue from Meta Ads</li>
  <li><strong>20x</strong> Return on Ad Spend (ROAS)</li>
</ul>`,
  },
];
