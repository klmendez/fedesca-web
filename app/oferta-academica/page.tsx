import Section from '@/components/Section'
import { oferta } from '@/data/oferta'
import { OfertaAcademicaHero } from '@/sections/oferta-academica/Hero'
import { FormalEducation } from '@/sections/oferta-academica/FormalEducation'
import { TechnicalAreas } from '@/sections/oferta-academica/TechnicalAreas'
import { ContinuingEducation } from '@/sections/oferta-academica/ContinuingEducation'

export default function OfertaAcademicaPage() {
  return (
    <>
      <OfertaAcademicaHero />

      <Section>
        <FormalEducation programs={oferta.formal} />

        <TechnicalAreas
          areas={[
            { title: 'Área Salud', items: oferta.tecnicos.salud },
            { title: 'Área Técnica y Tecnología', items: oferta.tecnicos.tecnologia },
            { title: 'Área Administrativa', items: oferta.tecnicos.administrativa },
            { title: 'Seguridad y Vigilancia', items: oferta.tecnicos.seguridad },
          ]}
        />

        <ContinuingEducation
          programs={oferta.reentrenamientos}
          note="Nota: La disponibilidad puede variar según la sede y requisitos normativos."
        />
      </Section>
    </>
  )
}
