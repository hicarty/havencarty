import { CONTACT_EMAIL, rsvpHref } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-serif text-4xl leading-tight font-bold tracking-tight text-balance md:text-6xl">
            Pull up a chair. Build together.
          </h2>
          <a
            href={rsvpHref('Join the Haven Carty guest list')}
            className="self-start rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Join the guest list
          </a>
        </div>
        <div className="flex flex-col gap-4 border-t border-secondary-foreground/15 pt-8 text-sm text-secondary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-serif font-bold text-secondary-foreground">Haven Carty</span> ·
            UX · IoT · XR · AI
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-secondary-foreground">
            {CONTACT_EMAIL}
          </a>
          <p>Events hosted by Allied House</p>
        </div>
      </div>
    </footer>
  )
}
