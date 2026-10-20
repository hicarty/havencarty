import { AlliedHouse } from '@/components/allied-house'
import { Events } from '@/components/events'
import { FourPins } from '@/components/four-pins'
import { Hero } from '@/components/hero'
import { IntegrateEcosystem } from '@/components/integrate-ecosystem'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FourPins />
        <IntegrateEcosystem />
        <Events />
        <AlliedHouse />
      </main>
      <SiteFooter />
    </>
  )
}
