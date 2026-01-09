import { QuienesSomosHero } from '@/sections/quienes-somos/Hero'
import { QuienesSomosIdentitySection } from '@/sections/quienes-somos/IdentitySection'
import { QuienesSomosValuesSection } from '@/sections/quienes-somos/ValuesSection'

export default function QuienesSomosPage() {
  return (
    <>
      <QuienesSomosHero />
      <QuienesSomosIdentitySection />
      <QuienesSomosValuesSection />
    </>
  )
}
