import Image from 'next/image'

const venues = [
  {
    town: 'Twickenham',
    note: 'Evening Pin Nights and riverside socials.',
  },
  {
    town: 'Kingston-upon-Thames',
    note: 'Integr8 Breakfasts and seasonal socials.',
  },
]

export function AlliedHouse() {
  return (
    <section id="allied-house" className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 md:flex-row md:items-center md:py-28">
        <div className="flex-1">
          <Image
            src="/images/networking-evening.png"
            alt="Professionals talking in small groups at an evening networking event"
            width={1024}
            height={768}
            className="aspect-[4/3] h-auto w-full rounded-3xl object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <p className="text-sm font-medium tracking-wide text-primary">Hosted by Allied House</p>
          <h2 className="font-serif text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl">
            Two towns on the Thames. One community.
          </h2>
          <p className="max-w-md leading-relaxed text-muted-foreground text-pretty">
            Allied House opens its doors to founders, marketers, product people and engineers from
            across south-west London. Haven Carty curates the conversations.
          </p>
          <dl className="grid gap-4 sm:grid-cols-2">
            {venues.map((venue) => (
              <div key={venue.town} className="flex flex-col gap-1 rounded-2xl border border-border bg-background p-5">
                <dt className="font-serif text-lg font-bold">{venue.town}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{venue.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
