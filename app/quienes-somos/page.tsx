import { QuienesSomosHero } from '@/sections/quienes-somos/Hero'
import { QuienesSomosIdentitySection } from '@/sections/quienes-somos/IdentitySection'
import { QuienesSomosValuesSection } from '@/sections/quienes-somos/ValuesSection'
import { MisionVisionHero } from '@/sections/mision-vision/Hero'
import { MissionVisionCoreStatementsSection } from '@/sections/mision-vision/CoreStatementsSection'
import { MissionVisionStrategicFocusSection } from '@/sections/mision-vision/StrategicFocusSection'

export default function QuienesSomosPage() {
  return (
    <>
      <QuienesSomosHero />
      <QuienesSomosIdentitySection />
      <QuienesSomosValuesSection />
        <MisionVisionHero />
            <MissionVisionCoreStatementsSection />
            <MissionVisionStrategicFocusSection />
    </>
  )
}
