import type { Metadata } from 'next'
import { Space_Mono, Syne, DM_Sans } from 'next/font/google'
import { ThemeScript } from '@/components/ui/ThemeScript'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import '../../styles/globals.css'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

const syne = Syne({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-syne',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'DigitalArc — Creative Design Production Studio',
  description: 'A creative design production studio crafting brand identities, digital experiences, and products that move people.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${spaceMono.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
