import { formats, rsvpHref } from '@/lib/site'

export function Events() {
  return (
    <section id="events" className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 md:py-28">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium tracking-wide text-primary">Events</p>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl">
          Networking for professionals in Twickenham and Kingston.
        </h2>
        <p className="max-w-xl leading-relaxed text-muted-foreground text-pretty">
          Hosted by Allied House. Free to attend, capacity is kept small on purpose. Dates are
          shared with the guest list first.
        </p>
      </div>

      <ul className="flex flex-col border-t border-border">
        {formats.map((format) => (
          <li
            key={format.name}
            className="flex flex-col gap-4 border-b border-border py-8 md:flex-row md:items-center md:gap-10"
          >
            <div className="flex flex-col gap-1 md:w-56">
              <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {format.cadence}
              </span>
              <span className="text-sm font-medium text-primary">{format.location}</span>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="font-serif text-2xl font-bold">{format.name}</h3>
              <p className="max-w-xl leading-relaxed text-muted-foreground">{format.description}</p>
            </div>
            <a
              href={rsvpHref(`RSVP — ${format.name}`)}
              className="self-start rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground md:self-center"
            >
              Request a place
              <span className="sr-only"> at {format.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
