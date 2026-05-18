import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import { ThemeScript } from "@/components/ui/ThemeScript";
import { Header } from "@/components/header";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import Footer from "@/components/footer";
import { GridRow } from "@/components/ui/grid";
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
    "Performance marketing and growth systems for brands across Southeast Asia. Paid media, SEO, creative, and CRM under one strategy.",
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
      <body className="font-body overflow-x-clip">
        <Header />
        <main className="bg-zinc-950/10">
          <GridRow plain>{children}</GridRow>
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
