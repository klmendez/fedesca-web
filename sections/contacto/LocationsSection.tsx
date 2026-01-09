import Section from '@/components/Section'
import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'
import { sedes } from '@/data/sedes'

export function ContactLocationsSection() {
  return (
    <Section title="Sedes y canales" subtitle="Encuentra tu punto de atención más cercano">
      <FadeIn>
        <Card>
          <div className="grid gap-4 md:grid-cols-2">
            {sedes.map((sede) => (
              <div key={sede.nombre} className="rounded-2xl bg-background/60 p-4">
                <p className="font-medium text-foreground">{sede.nombre}</p>
                <p className="text-sm text-muted-foreground">{sede.direccion}</p>
                <p className="text-sm text-muted-foreground">{sede.telefonos}</p>
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>
    </Section>
  )
}
