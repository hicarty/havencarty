import { AlliedHouse } from '@/components/allied-house'
import { Events } from '@/components/events'
import { FourPins } from '@/components/four-pins'
import { Hero } from '@/components/hero'
import { IntegrateEcosystem } from '@/components/integrate-ecosystem'
import { SiteFooter } from '@/components/site-footer'
import { Navbar } from '@servantleaders/ui/navbar'

export default function Page() {
  return (
    <>
      <Navbar />
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
