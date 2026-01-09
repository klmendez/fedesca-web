import Section from '@/components/Section'
import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'

export function ColegioSanCarlosOverviewSection() {
  return (
    <Section title="Presentación" subtitle="Nuestro enfoque integral y modalidades flexibles">
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <Card>
            <h3 className="text-lg font-semibold">Formación integral</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              El Colegio San Carlos desarrolla procesos de formación integral en distintos niveles, con énfasis en el proyecto
              de vida, la convivencia y el servicio a la comunidad.
            </p>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card>
            <h3 className="text-lg font-semibold">Modalidades y jornadas</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Diurna</li>
              <li>Nocturna</li>
              <li>Sabatina</li>
              <li>Dominical</li>
            </ul>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}
