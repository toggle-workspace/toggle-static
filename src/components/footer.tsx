import Link from "next/link";
import { GridRow } from "@/components/ui/grid";

export default function FooterSection() {
  return (
    <footer role="contentinfo" className="bg-zinc-950/10">
      <GridRow plain>
        <div className="h-12" />
      </GridRow>

      <GridRow>
        <div className="@4xl:grid-cols-5 grid gap-px">
          <div
            data-grid-content="true"
            className="@4xl:col-span-2 space-y-6 p-6 lg:p-12"
          >
            <Link aria-label="go home" className="block size-fit" href="/">
              <svg
                className="text-foreground h-6 w-full"
                viewBox="0 0 797 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
                  fill="url(#paint_logo)"
                ></path>
                <path
                  d="M272.366 96.0719V150.886C272.366 154.6 273.205 157.296 274.884 158.973C276.682 160.531 279.679 161.309 283.874 161.309H296.461V178.383H280.278C271.048 178.383 263.975 176.226 259.06 171.913C254.145 167.599 251.688 160.59 251.688 150.886V96.0719H240V79.3582H251.688V54.7368H272.366V79.3582H296.461V96.0719H272.366ZM306.723 128.421C306.723 118.477 308.761 109.671 312.837 102.003C317.032 94.3346 322.666 88.4039 329.739 84.2105C336.932 79.8973 344.843 77.7407 353.474 77.7407C361.266 77.7407 368.039 79.2982 373.793 82.4133C379.667 85.4086 384.342 89.1827 387.818 93.7356V79.3582H408.497V178.383H387.818V163.646C384.342 168.318 379.607 172.212 373.613 175.327C367.62 178.442 360.787 180 353.115 180C344.604 180 336.812 177.843 329.739 173.53C322.666 169.097 317.032 162.987 312.837 155.199C308.761 147.291 306.723 138.365 306.723 128.421ZM387.818 128.78C387.818 121.951 386.38 116.021 383.503 110.988C380.746 105.956 377.09 102.122 372.534 99.4865C367.979 96.8507 363.064 95.5327 357.79 95.5327C352.515 95.5327 347.6 96.8507 343.045 99.4865C338.49 102.003 334.774 105.777 331.897 110.809C329.14 115.721 327.761 121.592 327.761 128.421C327.761 135.25 329.14 141.241 331.897 146.393C334.774 151.545 338.49 155.498 343.045 158.254C347.72 160.89 352.635 162.208 357.79 162.208C363.064 162.208 367.979 160.89 372.534 158.254C377.09 155.618 380.746 151.784 383.503 146.752C386.38 141.6 387.818 135.61 387.818 128.78ZM444.052 66.2388C440.336 66.2388 437.219 64.9807 434.702 62.4647C432.184 59.9487 430.926 56.8336 430.926 53.1194C430.926 49.4052 432.184 46.2901 434.702 43.7741C437.219 41.258 440.336 40 444.052 40C447.648 40 450.705 41.258 453.222 43.7741C455.74 46.2901 456.999 49.4052 456.999 53.1194C456.999 56.8336 455.74 59.9487 453.222 62.4647C450.705 64.9807 447.648 66.2388 444.052 66.2388ZM454.122 79.3582V178.383H433.623V79.3582H454.122ZM499.735 45.3915V178.383H479.236V45.3915H499.735ZM518.017 128.421C518.017 118.477 520.055 109.671 524.13 102.003C528.326 94.3346 533.96 88.4039 541.033 84.2105C548.225 79.8973 556.137 77.7407 564.768 77.7407C572.56 77.7407 579.333 79.2982 585.087 82.4133C590.961 85.4086 595.636 89.1827 599.112 93.7356V79.3582H619.791V178.383H599.112V163.646C595.636 168.318 590.901 172.212 584.907 175.327C578.913 178.442 572.08 180 564.408 180C555.897 180 548.105 177.843 541.033 173.53C533.96 169.097 528.326 162.987 524.13 155.199C520.055 147.291 518.017 138.365 518.017 128.421ZM599.112 128.78C599.112 121.951 597.674 116.021 594.797 110.988C592.04 105.956 588.383 102.122 583.828 99.4865C579.273 96.8507 574.358 95.5327 569.084 95.5327C563.809 95.5327 558.894 96.8507 554.339 99.4865C549.784 102.003 546.068 105.777 543.191 110.809C540.433 115.721 539.055 121.592 539.055 128.421C539.055 135.25 540.433 141.241 543.191 146.393C546.068 151.545 549.784 155.498 554.339 158.254C559.014 160.89 563.929 162.208 569.084 162.208C574.358 162.208 579.273 160.89 583.828 158.254C588.383 155.618 592.04 151.784 594.797 146.752C597.674 141.6 599.112 135.61 599.112 128.78ZM665.415 93.7356C668.412 88.7035 672.368 84.8096 677.283 82.0539C682.318 79.1784 688.251 77.7407 695.084 77.7407V98.9474H689.87C681.838 98.9474 675.724 100.984 671.529 105.058C667.453 109.131 665.415 116.2 665.415 126.264V178.383H644.917V79.3582H665.415V93.7356ZM751.328 128.96L797 178.383H769.309L732.627 135.789V178.383H712.129V45.3915H732.627V122.67L768.59 79.3582H797L751.328 128.96Z"
                  fill="currentColor"
                ></path>
                <defs>
                  <linearGradient
                    id="paint_logo"
                    x1="90"
                    y1="0"
                    x2="90"
                    y2="220"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9B99FE"></stop>
                    <stop offset="1" stopColor="#2BC8B7"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <p className="text-muted-foreground text-balance">
              Performance marketing and growth systems for ambitious brands
              across Southeast Asia.
            </p>
          </div>
          <div className="@4xl:col-span-3 grid gap-px sm:grid-cols-3">
            <div
              data-grid-content="true"
              className="space-y-4 p-6 text-sm lg:p-12"
            >
              <span className="block font-medium">Services</span>
              <div className="flex flex-wrap gap-4 sm:flex-col">
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/services/performance-marketing"
                >
                  <span>Performance Marketing</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/services/content-marketing"
                >
                  <span>Content Strategy</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/services/branding"
                >
                  <span>Branding</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/services/web-development"
                >
                  <span>Web Development</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/services/email-marketing"
                >
                  <span>Email Marketing</span>
                </Link>
              </div>
            </div>
            <div
              data-grid-content="true"
              className="space-y-4 p-6 text-sm lg:p-12"
            >
              <span className="block font-medium">Company</span>
              <div className="flex flex-wrap gap-4 sm:flex-col">
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/about"
                >
                  <span>About</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/work"
                >
                  <span>Our Work</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/#faq"
                >
                  <span>FAQ</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/contact"
                >
                  <span>Contact</span>
                </Link>
              </div>
            </div>
            <div data-grid-content="true" className="space-y-4 p-6 lg:p-12">
              <span className="block font-medium">Case Studies</span>
              <div className="flex flex-wrap gap-4 sm:flex-col text-sm">
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/work/unitar"
                >
                  <span>UNITAR</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/work/cimb"
                >
                  <span>CIMB Bank</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/work/kith-and-kin"
                >
                  <span>Kith &amp; Kin</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/work/kualesa"
                >
                  <span>Kualesa</span>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-primary block duration-150"
                  href="/work/singlife"
                >
                  <span>Singlife</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-grid-content="true">
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 lg:px-12">
            <span className="text-muted-foreground text-sm">
              © Toggle Solutions. All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary block"
                href="https://www.linkedin.com/company/toggle-solutions"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  ></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary block"
                href="https://www.instagram.com/toggle.solutions/"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </GridRow>

      <GridRow plain ariaHidden>
        <div className="h-6" />
      </GridRow>

      <GridRow plain ariaHidden>
        <div className="h-12" />
      </GridRow>
    </footer>
  );
}
