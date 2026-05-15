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
      "UNITAR International University is a leading private university in Malaysia, recognized for its innovative approach to education and a strong commitment to producing workforce-ready graduates.",
    image: "https://picsum.photos/seed/unitar-edu/1200/675",
    logoUrl: "https://placehold.co/96x96/1a3a6b/ffffff?text=UNI",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Aggressive student acquisition targets in a saturated market. By mid-2024, acquisition costs were spiraling — TikTok CPLs hitting RM525 and Facebook reaching RM291.</p>
<h2 id="the-results">The Results</h2>
<p>Over 32,000 qualified leads generated from June to September 2025. CPL reduced by 47% year-on-year despite scaling ad spend to RM4 million. UNITAR captured 77% of total impressions in the Education &amp; Training category in Malaysia.</p>
<ul>
  <li><strong>32K+</strong> Qualified Leads from Ads</li>
  <li><strong>77%</strong> Total Impressions Across Malaysia</li>
  <li><strong>47%</strong> CPL Reduction YoY</li>
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
      "CIMB Malaysia is one of the region's leading banking institutions. Organic search visibility is critical to capturing high-intent users researching banking solutions.",
    image: "https://picsum.photos/seed/cimb-bank/1200/675",
    logoUrl: "https://logo.clearbit.com/cimb.com",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Despite dominant brand presence, CIMB's organic performance wasn't keeping pace with its market position. Product pages lacked keyword depth and internal approval processes slowed publishing cycles.</p>
<h2 id="the-results">The Results</h2>
<p>Within twelve months, CIMB's organic impressions grew by 52.6% and organic clicks increased by 34.5%, driven by a content system designed to compound rather than spike.</p>
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
      "Kith and Kin are a reputable real estate agency specializing in development projects across Kuala Lumpur and Selangor.",
    image: "https://picsum.photos/seed/kith-kin-realty/1200/675",
    logoUrl: "https://placehold.co/96x96/2d5016/ffffff?text=K%26K",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>The client had never run paid advertising before — relying solely on organic methods and traditional cold-calling, which struggled to deliver consistent results.</p>
<h2 id="the-results">The Results</h2>
<p>The campaign delivered 392% increase in leads over three months. Maintained CPL of RM35 throughout. Drove a 10% conversion rate from leads to closed deals.</p>
<ul>
  <li><strong>392%</strong> Increase in Lead Volume</li>
  <li><strong>RM35</strong> Cost Per Lead</li>
  <li><strong>10%</strong> Lead-to-Deal Conversion</li>
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
      "Kualesa Co. is a Malaysian eco-fashion brand committed to sustainability and ethical practices — proving high fashion and low carbon footprints can coexist.",
    image: "https://picsum.photos/seed/kualesa-apparel/1200/675",
    logoUrl: "https://placehold.co/96x96/4a7c59/ffffff?text=KUA",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Breaking the stigma that eco-friendly clothing is boring or ill-fitting in an industry dominated by fast, cheap, and disposable fashion.</p>
<h2 id="the-results">The Results</h2>
<p>Kualesa established itself as a leader in responsible fashion, transforming the shopping experience into a positive impact mission. Customers don't just buy the product — they join the movement.</p>`,
  },
  {
    client: "Singlife PTE LTD",
    slug: "singlife",
    industry: "Financial Services",
    location: "Singapore",
    services: ["Search Engine Optimization"],
    headline: "From Third to First in 90 Days",
    overview:
      "Singlife is a leading digital-first insurance provider in Singapore. As a YMYL brand, organic search visibility directly influences lead generation and long-term customer acquisition.",
    image: "https://picsum.photos/seed/singlife-sg/1200/675",
    logoUrl: "https://logo.clearbit.com/singlife.com",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Core insurance keywords sitting around position #3 — close to the top but far enough to feel the traffic gap every month.</p>
<h2 id="the-results">The Results</h2>
<p>Within three months, core insurance keywords climbed from position three to position one, driving a 23% increase in organic clicks across high-value search categories.</p>
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
      "Great Eastern Singapore is one of the region's most established insurance providers with strong brand recognition.",
    image: "https://picsum.photos/seed/great-eastern-sg/1200/675",
    logoUrl: "https://logo.clearbit.com/greateasternlife.com",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Core keywords plateaued around position #4. Meta titles lacked keyword targeting. Competitors were aggressively refining SEO strategies.</p>
<h2 id="the-results">The Results</h2>
<p>Within two months, Great Eastern moved from position four to position one for core insurance search terms. Organic clicks grew by 16%. Search visibility increased by 75%.</p>
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
      "A well-established restaurant performing well offline but struggling to grow its online food delivery and catering business.",
    image: "https://picsum.photos/seed/mahbub-restaurant/1200/675",
    logoUrl: "https://placehold.co/96x96/8b1a1a/ffffff?text=MAH",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Strong offline presence but minimal online revenue. Catering inquiries were inconsistent and hard to scale.</p>
<h2 id="the-results">The Results</h2>
<p>RM2.6M+ in online revenue from delivery campaigns. A 46% increase in catering leads from Q3 to Q4 2024, with 300+ message conversations generated for their catering offering.</p>
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
      "Retail stores with good walk-in sales but struggling to generate online sales and reach new potential customers.",
    image: "https://picsum.photos/seed/tpl-fresh-meats/1200/675",
    logoUrl: "https://placehold.co/96x96/b45309/ffffff?text=TPL",
    content: `<h2 id="the-challenge">The Challenge</h2>
<p>Strong offline presence with no effective online sales channel — leaving a large portion of potential revenue untapped.</p>
<h2 id="the-results">The Results</h2>
<p>Generated RM172K+ in online revenue from Meta at +20 ROAS over October 2021–2024, creating a reliable digital sales channel alongside the physical stores.</p>
<ul>
  <li><strong>RM172K+</strong> Revenue from Meta Ads</li>
  <li><strong>20x</strong> Return on Ad Spend (ROAS)</li>
</ul>`,
  },
];
