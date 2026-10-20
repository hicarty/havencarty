import { rsvpHref } from '@/lib/site'

const links = [
  { href: '#pins', label: 'Four Pins' },
  { href: '#integr8', label: 'Integr8' },
  { href: '#events', label: 'Events' },
  { href: '#allied-house', label: 'Allied House' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-2" aria-label="Haven Carty home">
          <span
            aria-hidden="true"
            className="size-5 rotate-45 rounded-sm border border-primary/40 bg-accent shadow-[inset_0_0_8px_rgba(30,138,90,0.45)]"
          />
          <span className="font-serif text-lg font-bold tracking-tight">Haven Carty</span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={rsvpHref('RSVP — Haven Carty networking')}
          className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          RSVP
        </a>
      </div>
    </header>
  )
}
