import Section from '@/components/Section'
import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'

export function AdmissionCalendarSection() {
  return (
    <Section title="Calendario" subtitle="Fechas clave para inscripciones y jornadas de orientación">
      <FadeIn>
        <Card>
          <p className="text-sm text-muted-foreground">
            Publica aquí fechas de inscripción, inicio de clases y jornadas de orientación. Puedes actualizar este espacio
            mensualmente para mantener informada a la comunidad educativa.
          </p>
        </Card>
      </FadeIn>
    </Section>
  )
}
