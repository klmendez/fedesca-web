import { AdmisionesHero } from '@/sections/admisiones/Hero'
import { AdmissionRequirementsSection } from '@/sections/admisiones/RequirementsSection'
import { AdmissionCalendarSection } from '@/sections/admisiones/CalendarSection'

export default function AdmisionesPage() {
  return (
    <>
      <AdmisionesHero />
      <AdmissionRequirementsSection />
      <AdmissionCalendarSection />
    </>
  )
}
