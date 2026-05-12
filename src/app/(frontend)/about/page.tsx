import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Heart, Users, Shield, ArrowRight } from "lucide-react";
import { GridRow, Spacer, SideCol } from "@/components/ui/grid";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We challenge assumptions and explore uncharted territory. Every product decision starts with a question: what if we could do this better?",
  },
  {
    icon: Heart,
    title: "Craft & Care",
    description:
      "Details matter. From pixel-perfect interfaces to thoughtful documentation, we treat every touchpoint as an opportunity to delight.",
  },
  {
    icon: Users,
    title: "Build Together",
    description:
      "Great products come from diverse perspectives. We foster an environment where everyone has a voice and collaboration is the default.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "We take security seriously. From encrypted data transmission to regular security audits, we ensure your data stays safe.",
  },
];

const leaders = [
  {
    name: "Sarah Mitchell",
    role: "Co-Founder, CEO",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
    gradient: "from-purple-400 via-blue-400 to-amber-500",
  },
  {
    name: "Marcus Chen",
    role: "Co-Founder, CTO",
    image:
      "https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop",
    gradient: "from-purple-400 via-sky-400 to-emerald-500",
  },
  {
    name: "James Rodriguez",
    role: "VP of Engineering",
    image:
      "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1287&auto=format&fit=crop",
    gradient: "from-indigo-400 via-blue-400 to-teal-500",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop",
    gradient: "from-purple-400 via-sky-400 to-emerald-500",
  },
  {
    name: "Rachel Kim",
    role: "Chief Marketing Officer",
    image:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2088&auto=format&fit=crop",
    gradient: "from-pink-400 via-blue-400 to-cyan-500",
  },
  {
    name: "Michael Foster",
    role: "Chief Financial Officer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
    gradient: "from-purple-400 via-blue-400 to-amber-500",
  },
];

const individualInvestors = [
  {
    name: "Shadcn",
    title: "Creator, Shadcn UI",
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
  },
  {
    name: "Guillermo Rauch",
    title: "Founder, CEO - Vercel",
    avatar: "https://avatars.githubusercontent.com/u/13041?v=4",
  },
  {
    name: "Adam Wathan",
    title: "CEO - Tailwind Labs",
    avatar: "https://avatars.githubusercontent.com/u/4323180?v=4",
  },
  {
    name: "Lee Robinson",
    title: "VP of Developer Education - Cursor",
    avatar: "https://avatars.githubusercontent.com/u/9113740?v=4",
  },
  {
    name: "Tobias Lütke",
    title: "Founder, Shopify",
    avatar: "https://avatars.githubusercontent.com/u/347?v=4",
  },
  {
    name: "Brandon Eich",
    title: "Founder, Brave Browser",
    avatar: "https://avatars.githubusercontent.com/u/313317?v=4",
  },
  {
    name: "Thomas Paul Mann",
    title: "Co-Founder, Raycast",
    avatar: "https://avatars.githubusercontent.com/u/12066405?v=4",
  },
  {
    name: "Paul Copplestone",
    title: "Co-Founder, Supabase",
    avatar: "https://avatars.githubusercontent.com/u/10214025?v=4",
  },
  {
    name: "Dylan Field",
    title: "Founder, CEO - Figma",
    avatar: "https://avatars.githubusercontent.com/u/159643?v=4",
  },
];

const jobs = [
  { title: "AI Engineer", location: "San Francisco", type: "full" },
  { title: "Design Engineer", location: "San Francisco", type: "full" },
  { title: "Product Engineer", location: "Remote", type: "full" },
  { title: "Backend Engineer", location: "San Francisco", type: "full" },
  { title: "Software Engineer", location: "New York", type: "full" },
  { title: "Marketing Manager", location: "New York", type: "full" },
  { title: "Content Strategist", location: "Remote", type: "part" },
  { title: "Compliance Officer", location: "San Francisco", type: "full" },
  { title: "Regulatory Analyst", location: "New York", type: "full" },
  { title: "Data Scientist", location: "Remote", type: "full" },
  { title: "Data Analyst", location: "San Francisco", type: "full" },
  { title: "Financial Analyst", location: "New York", type: "full" },
];

export default function AboutPage() {
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

      {/* Hero section */}
      <section id="home" className="overflow-hidden">
        {/* Hero text */}
        <GridRow>
          <div className="grid grid-cols-10 gap-px">
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
            <div
              data-grid-content="true"
              className="@4xl:p-12 col-span-full p-6 sm:col-span-8"
            >
              <span className="text-muted-foreground text-sm font-medium font-mono uppercase">
                About us
              </span>
              <h1 className="text-foreground mt-12 text-balance text-5xl font-semibold tracking-tight lg:text-6xl">
                We build tools that help developers move faster
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-balance text-lg">
                Founded in 2023, Tailark started with a simple belief: developer
                tools should be beautiful, fast, and easy to use. Today, we
                serve thousands of teams worldwide.
              </p>
            </div>
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
          </div>
        </GridRow>

        {/* Stats row */}
        <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
          <SideCol wide />
          <div className="max-w-276 lg:min-w-276 mx-auto w-full">
            <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded *:p-[0.5px] @4xl:**:data-grid-content:p-12 **:data-grid-content:p-6 @4xl:grid-cols-10 @xl:grid-cols-2 grid gap-px p-[0.5px]">
              <div
                aria-hidden="true"
                data-grid-content="true"
                className="@max-4xl:hidden"
              >
                <div />
              </div>
              <div data-grid-content="true" className="@4xl:col-span-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground font-medium font-mono">
                    50,000+
                  </strong>
                  {"  "}
                  developers building with our tools.
                </p>
              </div>
              <div data-grid-content="true" className="@4xl:col-span-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground font-medium font-mono">
                    120+
                  </strong>
                  {"  "}
                  countries with active users.
                </p>
              </div>
              <div
                aria-hidden="true"
                data-grid-content="true"
                className="@max-4xl:hidden"
              >
                <div />
              </div>
            </div>
          </div>
          <SideCol />
        </div>

        {/* Team image */}
        <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
          <SideCol wide />
          <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
            <div data-slot="content" className="bg-card/90 h-full rounded">
              <div data-grid-content="true">
                <div className="aspect-[43/24] mix-blend-darken">
                  <Image
                    src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/team-hand-drawn_ctvx7q.png"
                    alt="Team hand drawn"
                    width={1376}
                    height={768}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <SideCol />
        </div>
      </section>

      <Spacer />

      {/* Mission section */}
      <section>
        <GridRow>
          <div className="grid grid-cols-10 gap-px">
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
            <div className="col-span-full sm:col-span-8">
              <div data-grid-content="true" className="@4xl:p-12 p-6">
                <h2 className="text-muted-foreground text-balance font-mono">
                  Our Mission
                </h2>
                <div className="text-muted-foreground mt-6 space-y-4 text-xl font-medium *:text-balance *:leading-relaxed">
                  <p>
                    <span className="text-foreground">
                      We believe the best software is built when developers can
                      focus on what matters
                    </span>{" "}
                    — solving problems for their users — instead of wrestling
                    with tooling and infrastructure.
                  </p>
                  <p>
                    <span className="text-foreground">
                      Our mission is to eliminate the friction between idea and
                      execution.
                    </span>{" "}
                    We build primitives, components, and systems that let teams
                    ship production-ready products in days, not months.
                  </p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
          </div>
        </GridRow>
      </section>

      <Spacer />

      {/* Core Values section */}
      <section>
        <GridRow>
          <div className="grid grid-cols-10 gap-px">
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
            <div className="@4xl:grid-cols-2 col-span-full grid gap-px sm:col-span-8">
              <div
                data-grid-content="true"
                className="@4xl:p-12 col-span-full p-6"
              >
                <h2 className="text-muted-foreground text-balance font-mono">
                  Core Values
                </h2>
                <p className="text-foreground mt-6 max-w-2xl text-balance text-xl font-medium">
                  The principles that guide every decision we make, from hiring
                  to shipping.
                </p>
              </div>
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  data-grid-content="true"
                  className="@4xl:p-12 flex flex-col gap-3 p-6"
                >
                  <value.icon className="text-muted-foreground size-5" />
                  <h3 className="text-foreground font-medium">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
          </div>
        </GridRow>
      </section>

      <Spacer />

      {/* Leadership section */}
      <section>
        <GridRow>
          <div className="grid grid-cols-10 gap-px">
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
            <div className="@3xl:grid-cols-3 col-span-full grid grid-cols-2 gap-px sm:col-span-8">
              <div
                data-grid-content="true"
                className="@4xl:p-12 col-span-full p-6"
              >
                <h2 className="text-muted-foreground text-balance font-mono">
                  Leadership
                </h2>
                <p className="text-foreground mt-6 max-w-2xl text-balance text-xl font-medium">
                  A small team of builders obsessed with craft and developer
                  experience.
                </p>
              </div>
              {leaders.map((member) => (
                <div
                  key={member.name}
                  data-grid-content="true"
                  className="@4xl:p-12 @max-3xl:last:hidden p-6"
                >
                  <div className="shadow-black/3 before:border-foreground/[6.5%] before:z-1 aspect-[5/6] relative w-24 overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border">
                    <div
                      aria-hidden="true"
                      className={`bg-linear-to-r z-1 pointer-events-none absolute inset-0 size-40 rounded-full opacity-25 mix-blend-overlay blur-2xl will-change-transform md:size-72 ${member.gradient}`}
                    />
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={320}
                      height={540}
                      className="size-full object-cover grayscale"
                    />
                  </div>
                  <div className="space-y-0.5 pt-3">
                    <p className="text-foreground font-medium">{member.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
          </div>
        </GridRow>
      </section>

      <Spacer />

      {/* Investors section */}
      <section>
        <GridRow>
          <div className="grid grid-cols-10 gap-px">
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
            <div className="@md:grid-cols-3 col-span-full grid grid-cols-2 gap-px sm:col-span-8">
              <div
                data-grid-content="true"
                className="@4xl:p-12 col-span-full p-6"
              >
                <h2 className="text-muted-foreground text-balance font-mono">
                  Investors
                </h2>
                <p className="text-foreground mt-6 max-w-2xl text-balance text-xl font-medium">
                  We&apos;re proud to be supported by leading venture capital
                  firms and visionary angel investors.
                </p>
              </div>
              {/* YC */}
              <div
                data-grid-content="true"
                className="@4xl:px-12 flex items-center justify-center p-6"
              >
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-8 rounded"
                >
                  <g clipPath="url(#clip0_38_2)">
                    <path d="M120 0H0V120H120V0Z" fill="#FB651E" />
                    <path
                      d="M55.9566 67.8495L35.3594 29.2646H44.7726L56.8886 53.6831C57.075 54.118 57.2924 54.5684 57.541 55.0345C57.7895 55.5005 58.007 55.982 58.1934 56.479C58.3176 56.6654 58.4108 56.8363 58.473 56.9916C58.5351 57.147 58.5972 57.2868 58.6594 57.411C58.97 58.0324 59.2496 58.6382 59.4982 59.2284C59.7467 59.8187 59.9642 60.3624 60.1506 60.8595C60.6476 59.8032 61.1913 58.6693 61.7816 57.4576C62.3718 56.246 62.9776 54.9879 63.599 53.6831L75.9014 29.2646H84.6622L63.8786 68.3154V93.1998H55.9566V67.8495Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_38_2">
                      <rect width="120" height="120" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Sequoia */}
              <div
                data-grid-content="true"
                className="@4xl:px-12 flex items-center justify-center p-6"
              >
                <svg
                  width="865"
                  height="120"
                  viewBox="0 0 865 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-auto"
                >
                  <path
                    d="M260.158 3.396C247.456 3.396 237.634 8.01449 230.129 15.5233C219.159 26.4977 219.168 40.3556 219.168 59.9941C219.168 79.0549 218.581 92.9242 230.129 104.476C238.212 112.563 247.456 116.604 260.158 116.604C263.623 116.604 266.507 116.031 269.394 115.453H306.923L295.951 96.3875C301.147 86.5683 301.149 75.0117 301.149 59.9941C301.149 40.9332 301.147 27.0753 290.177 15.5233C282.671 7.43689 272.861 3.396 260.158 3.396ZM487.643 3.396C474.941 3.396 465.119 7.43689 457.613 15.5233C446.066 27.0753 446.641 40.9332 446.641 59.9941C446.641 79.6325 446.643 93.5018 457.613 104.476C465.119 111.985 474.941 116.604 487.643 116.604C500.345 116.604 510.156 112.563 517.661 104.476C528.631 92.9242 528.634 79.0549 528.634 59.9941C528.634 40.3556 528.631 26.4977 517.661 15.5233C509.578 8.01449 500.345 3.396 487.643 3.396ZM46.533 3.97129C22.2836 3.97129 7.84272 17.8383 7.84272 37.4767C7.84272 46.7183 10.7318 54.2203 15.9281 59.4187C20.547 64.0395 28.0595 67.5029 37.2974 68.6581L50.5701 70.3955C55.7664 71.5507 58.0826 72.1237 60.392 74.4341C62.7015 76.7445 63.854 79.6416 63.854 83.6848C63.854 92.9264 56.9233 97.5382 44.2213 97.5382C34.4061 97.5382 24.5931 95.23 17.6647 88.2988L3.80566 102.164C14.7756 113.138 27.4777 116.604 44.2213 116.604C67.3159 116.604 85.7871 104.469 85.7871 83.0981C85.7871 73.2789 82.9003 65.1947 77.1266 59.4187C72.5077 54.7979 66.1612 51.9099 55.7686 50.7547L42.4847 49.0287C37.8658 47.8735 34.4083 46.7138 32.0989 44.4034C29.7894 42.093 28.6369 39.2027 28.6369 36.3147C28.6369 28.8059 34.4106 22.45 45.9579 22.45C52.8863 22.45 61.5378 23.0321 68.4662 29.9633L82.3252 16.674C73.0873 7.43239 61.5445 3.97129 46.533 3.97129ZM116.967 4.54658V115.453H190.299V96.3875H138.912V69.2447H182.789V49.604H138.912V23.6119H190.299V4.54658H116.967ZM333.479 4.54658V77.3221C333.479 101.004 351.953 116.603 374.47 116.603C396.987 116.603 414.886 101.004 414.886 77.3221V4.54658H393.528V76.7467C393.528 89.4539 386.017 96.9627 374.47 96.9627C362.923 96.9627 355.424 89.4539 355.424 76.7467V4.54658H333.479ZM560.389 4.54658V115.453H581.747V4.54658H560.389ZM649.305 4.54658L608.89 115.453H631.398L638.333 95.8121H677.587L683.947 115.453H706.456L666.04 4.54658H649.305ZM259.583 23.0366C265.357 23.0366 270.544 25.347 273.431 28.8126C277.473 33.4334 278.63 38.6228 278.63 59.994C278.63 81.3653 277.473 86.5659 273.431 91.1867C270.544 94.6523 265.357 96.9627 259.583 96.9627C253.81 96.9627 248.611 94.6523 245.724 91.1867C241.683 86.5659 240.526 81.3653 240.526 59.994C240.526 38.6228 241.683 33.4334 245.724 28.8126C248.611 25.347 253.81 23.0366 259.583 23.0366ZM487.643 23.0366C493.417 23.0366 498.604 25.347 501.491 28.8126C505.532 33.4334 506.689 38.6228 506.689 59.994C506.689 81.3653 505.532 86.5659 501.491 91.1867C498.604 94.6523 493.417 96.9627 487.643 96.9627C481.869 96.9627 476.671 94.6523 473.784 91.1867C469.742 86.5659 468.585 81.3653 468.585 59.994C468.585 38.6228 469.742 33.4334 473.784 28.8126C476.671 25.347 481.869 23.0366 487.643 23.0366ZM657.966 36.89L671.814 77.3221H644.107L657.966 36.89Z"
                    fill="currentColor"
                  />
                  <path
                    d="M750.345 4.54688V105.627L764.192 91.7624V4.54688H750.345ZM778.052 4.54688V77.909L791.911 64.0443V4.54688H778.052ZM805.77 4.54688V50.1796L819.629 36.3149V4.54688H805.77ZM833.476 4.54688V32.2763H861.194V4.54688H833.476ZM829.439 46.141L815.58 59.9943H861.194V46.141H829.439ZM801.721 73.859L787.874 87.7237H861.194V73.859H801.721ZM774.014 101.588L760.155 115.453H861.194V101.588H774.014Z"
                    fill="#50B848"
                  />
                </svg>
              </div>
              {/* Salesforce */}
              <div
                data-grid-content="true"
                className="@4xl:px-12 @max-md:col-span-full flex items-center justify-center p-6"
              >
                <svg className="h-8 w-auto" viewBox=".5 .5 999 699.242">
                  <path
                    fill="#00A1E0"
                    d="M416.224 76.763c32.219-33.57 77.074-54.391 126.682-54.391 65.946 0 123.48 36.772 154.12 91.361 26.626-11.896 56.098-18.514 87.106-18.514 118.94 0 215.368 97.268 215.368 217.247 0 119.993-96.428 217.261-215.368 217.261a213.735 213.735 0 0 1-42.422-4.227c-26.981 48.128-78.397 80.646-137.412 80.646-24.705 0-48.072-5.706-68.877-15.853-27.352 64.337-91.077 109.448-165.348 109.448-77.344 0-143.261-48.939-168.563-117.574-11.057 2.348-22.513 3.572-34.268 3.572C75.155 585.74.5 510.317.5 417.262c0-62.359 33.542-116.807 83.378-145.937-10.26-23.608-15.967-49.665-15.967-77.06C67.911 87.25 154.79.5 261.948.5c62.914 0 118.827 29.913 154.276 76.263"
                  />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
          </div>
        </GridRow>

        {/* Individual investors */}
        <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
          <SideCol wide />
          <div className="max-w-276 lg:min-w-276 mx-auto w-full">
            <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px]">
              <div className="grid grid-cols-10 gap-px">
                <div aria-hidden="true" className="max-sm:hidden">
                  <div data-grid-content="true" />
                </div>
                <div className="@6xl:grid-cols-3 @xl:grid-cols-2 col-span-full grid gap-px sm:col-span-8">
                  <div
                    data-grid-content="true"
                    className="@4xl:p-12 col-span-full p-6"
                  >
                    <h2 className="text-foreground max-w-2xl text-balance text-xl font-medium">
                      Individual investors
                    </h2>
                  </div>
                  {individualInvestors.map((investor) => (
                    <div
                      key={investor.name}
                      data-grid-content="true"
                      className="@4xl:px-12 @xl:@max-6xl:last:col-span-2 flex items-center gap-4 p-6"
                    >
                      <div className="before:border-foreground/15 relative size-10 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                        <Image
                          src={investor.avatar}
                          alt={investor.name}
                          width={64}
                          height={64}
                          className="size-full rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-medium">
                          {investor.name}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {investor.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="max-sm:hidden">
                  <div data-grid-content="true" />
                </div>
              </div>
            </div>
          </div>
          <SideCol />
        </div>
      </section>

      <Spacer />

      {/* We're Hiring section */}
      <section>
        <GridRow>
          <div className="grid grid-cols-10 gap-px">
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
            <div className="col-span-full grid gap-px sm:col-span-8">
              <div data-grid-content="true" className="@4xl:p-12 p-6">
                <h2 className="text-muted-foreground text-balance font-mono">
                  We&apos;re hiring
                </h2>
                <p className="text-foreground mt-6 max-w-2xl text-balance text-xl font-medium">
                  Join a small, fast-moving team building tools used by
                  thousands of developers. We value craft, autonomy, and
                  shipping.
                </p>
              </div>
              <div className="grid gap-px">
                {jobs.map((job) => (
                  <div key={job.title}>
                    <div
                      data-grid-content="true"
                      className="@4xl:px-12 hover:bg-card! hover:z-1 relative grid gap-2 overflow-hidden rounded-xl p-4 px-6 shadow-lg shadow-transparent hover:shadow-indigo-900/5"
                    >
                      <Link
                        href="#"
                        className="font-medium after:absolute after:inset-0"
                      >
                        {job.title}
                      </Link>
                      <div className="flex items-center">
                        <div>
                          <span className="text-muted-foreground">
                            {job.location}
                          </span>{" "}
                          <span className="text-muted-foreground">
                            <span className="capitalize">{job.type}</span>-time
                          </span>
                        </div>
                        <div className="ring-border-illustration bg-card shadow-black/[6.5%] ml-auto flex h-6 items-center rounded-full px-2 shadow ring-1">
                          <ArrowRight className="not-group-hover:opacity-50 group-hover:text-primary size-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div data-grid-content="true" className="@4xl:p-12 p-6">
                <p className="text-muted-foreground">
                  Don&apos;t see a role that fits?{" "}
                  <Link
                    href="#"
                    className="text-foreground underline underline-offset-4"
                  >
                    Send us a note
                  </Link>{" "}
                  — we&apos;re always looking for exceptional people.
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="max-sm:hidden">
              <div data-grid-content="true" />
            </div>
          </div>
        </GridRow>
      </section>
    </main>
  );
}
