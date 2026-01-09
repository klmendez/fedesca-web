import { ColegioSanCarlosHero } from '@/sections/colegio-san-carlos/Hero'
import { ColegioSanCarlosOverviewSection } from '@/sections/colegio-san-carlos/OverviewSection'
import { ColegioSanCarlosPopulationSection } from '@/sections/colegio-san-carlos/PopulationSection'

export default function ColegioSanCarlosPage() {
  return (
    <>
      <ColegioSanCarlosHero />
      <ColegioSanCarlosOverviewSection />
      <ColegioSanCarlosPopulationSection />
    </>
  )
}
