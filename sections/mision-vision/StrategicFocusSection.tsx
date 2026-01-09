import Section from '@/components/Section'
import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'

export function MissionVisionStrategicFocusSection() {
  return (
    <Section title="Enfoque estratégico" subtitle="Líneas de acción que guían nuestros proyectos">
      <FadeIn>
        <Card>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Desarrollo social</li>
            <li>Promoción cultural</li>
            <li>Educación ambiental</li>
            <li>Trabajo comunitario</li>
          </ul>
        </Card>
      </FadeIn>
    </Section>
  )
}
