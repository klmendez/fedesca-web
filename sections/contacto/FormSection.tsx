import Section from '@/components/Section'
import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'

export function ContactFormSection() {
  return (
    <Section title="Formulario de contacto" subtitle="Déjanos tus datos y te contactaremos en menos de 24 horas hábiles">
      <FadeIn>
        <Card>
          <form name="contacto" method="POST" data-netlify="true" className="space-y-3">
            <input type="hidden" name="form-name" value="contacto" />

            <input
              name="nombre"
              placeholder="Nombre"
              className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Correo"
              className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              className="min-h-32 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>

          <p className="mt-3 text-xs text-muted-foreground">*Este formulario usa Netlify Forms (sin backend propio).</p>
        </Card>
      </FadeIn>
    </Section>
  )
}
