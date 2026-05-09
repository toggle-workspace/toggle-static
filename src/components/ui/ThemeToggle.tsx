'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = (localStorage.getItem('da-theme') || 'light') as 'light' | 'dark'
    setTheme(saved)
  }, [])

  function toggle() {
    const next: 'light' | 'dark' = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('da-theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <button className="theme-toggle" id="themeToggle" onClick={toggle} aria-label="Toggle theme">
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  )
}
