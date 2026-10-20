'use client'

import { useState } from 'react'

export const HAVENCARTY_URL = process.env.NEXT_PUBLIC_WEB_URL ?? 'http://localhost:3000'
export const SERVANTLEADERS_URL = process.env.NEXT_PUBLIC_SERVANTLEADERS_URL ?? 'http://localhost:3001'
export const VLE_URL = 'http://vle.servantleaders.uk/'

const links = [
  { href: HAVENCARTY_URL, label: 'Home' },
  { href: SERVANTLEADERS_URL, label: 'Blog' },
  { href: VLE_URL, label: 'VLE' },
]

const linkClass =
  'font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href={HAVENCARTY_URL}
          className="font-serif text-xl font-bold leading-none tracking-tight text-foreground"
          aria-label="Servant Leaders home"
        >
          servant<span className="text-accent">leaders</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="h-px w-6 bg-foreground" />
          <span className="h-px w-6 bg-foreground" />
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-2 text-sm ${linkClass}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
