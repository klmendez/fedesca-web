import Section from '@/components/Section'
import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'

export function MissionVisionCoreStatementsSection() {
  return (
    <Section title="Propósito" subtitle="Nuestra misión y visión institucional">
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <Card>
            <h3 className="text-lg font-semibold">Misión</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Brindar educación integral de calidad que contribuya al desarrollo social, cultural y ambiental, formando
              ciudadanos responsables, críticos y comprometidos con la comunidad.
            </p>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card>
            <h3 className="text-lg font-semibold">Visión</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ser una institución reconocida por su impacto educativo, social y ambiental, promoviendo la inclusión y el
              desarrollo sostenible.
            </p>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}
