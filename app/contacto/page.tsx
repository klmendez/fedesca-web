import { ContactoHero } from '@/sections/contacto/Hero'
import { ContactFormSection } from '@/sections/contacto/FormSection'
import { ContactLocationsSection } from '@/sections/contacto/LocationsSection'

export default function ContactoPage() {
  return (
    <>
      <ContactoHero />
      <ContactFormSection />
      <ContactLocationsSection />
    </>
  )
}
