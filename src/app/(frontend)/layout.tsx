import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
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
      suppressHydrationWarning
      className={`${geistMono.variable} ${geist.variable} ${dmSans.variable}`}
    >
      <body className="font-body overflow-x-clip">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          storageKey="da-theme"
        >
          <Header />
          <main className="bg-zinc-950/10">
            <GridRow plain>{children}</GridRow>
          </main>
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
