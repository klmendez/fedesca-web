import Section from '@/components/Section'
import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'

export function ColegioSanCarlosPopulationSection() {
  return (
    <Section title="Población atendida" subtitle="Educación para jóvenes y adultos con horarios flexibles">
      <FadeIn>
        <Card>
          <p className="text-sm text-muted-foreground">
            Jóvenes y adultos encuentran en el Colegio San Carlos opciones flexibles que favorecen la inclusión y la
            continuidad educativa, acompañadas por un equipo docente comprometido con los procesos de desarrollo humano.
          </p>
        </Card>
      </FadeIn>
    </Section>
  )
}
