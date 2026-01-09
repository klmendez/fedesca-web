import Section from '@/components/Section'
import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'

export function QuienesSomosIdentitySection() {
  return (
    <Section title="Identidad institucional" subtitle="Nuestra historia y naturaleza jurídica">
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <Card>
            <h3 className="text-lg font-semibold">Reseña institucional</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              La FUNDACIÓN EDUCATIVA PARA EL DESARROLLO SOCIAL, CULTURAL Y AMBIENTAL “FEDESCA” promueve procesos educativos
              formales, técnicos y comunitarios con enfoque social, cultural y ambiental, aportando al bienestar de la comunidad.
            </p>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card>
            <h3 className="text-lg font-semibold">Naturaleza jurídica</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Fundación educativa de carácter privado</li>
              <li>Sin ánimo de lucro</li>
              <li>Duración indefinida</li>
            </ul>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}
