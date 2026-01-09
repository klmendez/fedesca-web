import { MisionVisionHero } from '@/sections/mision-vision/Hero'
import { MissionVisionCoreStatementsSection } from '@/sections/mision-vision/CoreStatementsSection'
import { MissionVisionStrategicFocusSection } from '@/sections/mision-vision/StrategicFocusSection'

export default function MisionVisionPage() {
  return (
    <>
      <MisionVisionHero />
      <MissionVisionCoreStatementsSection />
      <MissionVisionStrategicFocusSection />
    </>
  )
}
