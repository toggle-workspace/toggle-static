import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import { ThemeScript } from "@/components/ui/ThemeScript";
import { HeroHeader } from "@/components/header";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import Footer from "@/components/footer";
import "../../styles/globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Toggle Solutions — Your Digital Growth Partner",
  description:
    "A strategic growth partner for ambitious brands. We combine high-end design with data-driven performance to build systems that scale effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistMono.variable} ${geist.variable} ${dmSans.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-body">
        <HeroHeader />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
