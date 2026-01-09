import Section from '@/components/Section'
import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'
import { valores } from '@/data/valores'

export function QuienesSomosValuesSection() {
  return (
    <Section title="Principios y valores" subtitle="Los pilares que orientan nuestro quehacer diario">
      <FadeIn>
        <Card>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor) => (
              <div key={valor} className="rounded-xl bg-background/50 px-4 py-3 text-sm">
                {valor}
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>
    </Section>
  )
}
