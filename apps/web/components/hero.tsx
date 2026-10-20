import Image from 'next/image'
import { rsvpHref } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
        <div className="flex flex-1 flex-col gap-6">
          <p className="rise text-sm font-medium tracking-wide text-primary">
            Networking at Allied House · Twickenham &amp; Kingston-upon-Thames
          </p>
          <h1
            className="rise font-serif text-5xl leading-none font-bold tracking-tight text-balance md:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            Build Together.
          </h1>
          <p
            className="rise max-w-md text-lg leading-relaxed text-pretty text-muted-foreground"
            style={{ animationDelay: '160ms' }}
          >
            Surface better ideas through cross-discipline collaboration. Haven Carty is a software
            consultancy across UX, IoT, XR and AI, and we bring local professionals together to
            build what comes next.
          </p>
          <div className="rise flex flex-wrap items-center gap-3" style={{ animationDelay: '240ms' }}>
            <a
              href="#events"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              See upcoming formats
            </a>
            <a
              href={rsvpHref('Join the Haven Carty guest list')}
              className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              Join the guest list
            </a>
          </div>
        </div>
        <div className="rise relative w-full flex-1" style={{ animationDelay: '200ms' }}>
          <Image
            src="/images/hero-cubes.png"
            alt="Professionals collaborating around a stack of glowing green glass cubes"
            width={1024}
            height={1024}
            priority
            className="h-auto w-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  )
}
