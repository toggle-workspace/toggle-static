'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/'
  return pathname.startsWith(href)
}

export function FooterClient({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  return (
    <Link href={href} className={isActive(href, pathname) ? 'active' : ''}>
      {label}
    </Link>
  )
}
