import { pins } from '@/lib/site'

export function FourPins() {
  return (
    <section id="pins" className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium tracking-wide text-primary">The Four Pins</p>
            <h2 className="max-w-xl font-serif text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl">
              Four disciplines. One way of working.
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground text-pretty">
            Every engagement and every event is pinned to the technologies our clients are
            actually shipping.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pins.map((pin) => (
            <li
              key={pin.code}
              className="group flex flex-col gap-6 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/50"
            >
              <div
                aria-hidden="true"
                className="flex size-16 items-center justify-center rounded-xl border border-primary/30 bg-accent font-serif text-2xl font-bold text-foreground shadow-[inset_0_-10px_24px_rgba(30,138,90,0.35),inset_0_8px_16px_rgba(255,255,255,0.7)] transition-transform group-hover:-translate-y-1"
              >
                {pin.code}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl font-bold">{pin.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{pin.summary}</p>
              </div>
              <ul className="mt-auto flex flex-wrap gap-2" aria-label={`${pin.name} topics`}>
                {pin.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
