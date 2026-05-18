"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useScroll, useMotionValueEvent } from "motion/react";
import { GridRow } from "@/components/ui/grid";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const menuItems = [
  { name: "Our Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 75);
  });

  return (
    <header
      role="banner"
      data-state={menuState ? "active" : "inactive"}
      data-scrolled={isScrolled}
      className="lg:data-scrolled:pb-[0.5px] sticky inset-x-0 top-0 z-50 bg-zinc-950/10 max-lg:pb-px"
    >
      <GridRow plain>
        <div className="h-6" />
      </GridRow>
      <div
        className={cn(
          "w-full max-lg:h-14 max-lg:overflow-hidden",
          menuState &&
            "max-lg:h-screen! max-lg:overflow-visible! bg-background/75 backdrop-blur",
        )}
      >
        <GridRow plain>
          <div
            data-slot="content"
            className="bg-card/90 h-full rounded backdrop-blur"
          >
            <div className="relative flex flex-wrap items-center justify-between px-6 lg:px-12 lg:py-5">
              <div className="z-51 relative flex justify-between gap-8 max-lg:h-14 max-lg:w-full">
                <Link aria-label="home" className="flex items-center" href="/">
                  <Image
                    src="/brand/logo-light.svg"
                    alt="Toggle"
                    width={90}
                    height={25}
                    className="h-auto w-[90px] dark:hidden"
                    priority
                  />
                  <Image
                    src="/brand/logo-dark.svg"
                    alt="Toggle"
                    width={90}
                    height={25}
                    className="h-auto w-[90px] hidden dark:block"
                    priority
                  />
                </Link>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-5 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>
              <div className="absolute inset-0 m-auto size-fit max-lg:hidden">
                <nav
                  aria-label="Main"
                  className="flex items-center justify-center"
                >
                  <ul className="flex items-center justify-center gap-3">
                    {menuItems.map((item, index) => (
                      <li key={index} className="relative">
                        <Link
                          href={item.href}
                          className="inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-1 text-sm text-muted-foreground font-medium hover:bg-foreground/5 hover:text-foreground transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="w-full lg:hidden">
                <nav role="navigation" className="w-full pt-6">
                  <div className="-mx-4 space-y-0.5">
                    {menuItems.map((item, index) => (
                      <Link
                        key={index}
                        className="group relative block px-4 py-4 text-lg font-medium hover:bg-muted rounded-md transition-colors"
                        href={item.href}
                        onClick={() => setMenuState(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
                <div className="px-4 pt-4 pb-2">
                  <ThemeToggle />
                </div>
              </div>
              <div className="z-51 max-lg:in-data-[state=active]:mt-6 in-data-[state=active]:flex relative mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center">
                  <ThemeToggle />
                  <Link
                    className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-md shadow-black/15 border-[0.5px] border-transparent bg-primary ring-1 ring-(--ring-color) [--ring-color:color-mix(in_oklab,var(--color-foreground)15%,var(--color-primary))] text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 text-xs"
                    href="/contact"
                  >
                    <span>Book a Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </GridRow>
      </div>
    </header>
  );
};
