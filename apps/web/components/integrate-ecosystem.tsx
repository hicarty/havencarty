import Image from 'next/image'
import { disciplines } from '@/lib/site'

export function IntegrateEcosystem() {
  return (
    <section id="integr8" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 md:flex-row md:items-center md:py-28">
        <div className="flex flex-1 flex-col gap-6">
          <p className="text-sm font-medium tracking-wide text-accent">The ecosystem</p>
          <h2 className="font-serif text-5xl leading-none font-bold tracking-tight md:text-7xl">
            Integr<sup className="relative -top-6 text-3xl text-accent md:-top-10 md:text-4xl">8</sup>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-pretty text-secondary-foreground/80">
            Great products don&apos;t come from one specialism. Integr8 connects eight disciplines
            around a shared core, so the right people are in the room before the hard decisions
            get made.
          </p>
          <ol className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-secondary-foreground/15 pt-6">
            {disciplines.map((discipline) => (
              <li key={discipline} className="flex items-center gap-3 text-sm">
                <span
                  aria-hidden="true"
                  className="size-2.5 rotate-45 rounded-[2px] bg-accent shadow-[0_0_8px_rgba(205,235,217,0.7)]"
                />
                {discipline}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex-1">
          <Image
            src="/images/integrate-hub.png"
            alt="A central green glass cube connected to eight smaller cubes, representing the Integr8 ecosystem"
            width={1024}
            height={1024}
            className="h-auto w-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  )
}
