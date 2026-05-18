import Link from "next/link";
import Image from "next/image";
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
              <Image
                src="/brand/logo-light.svg"
                alt="Toggle"
                width={90}
                height={25}
                className="h-auto w-[90px] dark:hidden"
              />
              <Image
                src="/brand/logo-dark.svg"
                alt="Toggle"
                width={90}
                height={25}
                className="h-auto w-[90px] hidden dark:block"
              />
            </Link>
            <p className="text-muted-foreground text-balance">
              Performance marketing and growth systems for brands worldwide.
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
