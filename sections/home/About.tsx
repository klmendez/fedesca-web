import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'

const items = [
  {
    title: 'Enfoque social',
    description: 'Formación con sentido humano, comunitario e inclusivo.',
  },
  {
    title: 'Enfoque cultural',
    description: 'Promoción de valores, convivencia y participación.',
  },
  {
    title: 'Enfoque ambiental',
    description: 'Conciencia ecológica y educación para la sostenibilidad.',
  },
  {
    title: 'Innovación pedagógica',
    description: 'Metodologías activas y tecnología aplicada al aula.',
  },
  {
    title: 'Talento humano',
    description: 'Docentes comprometidos con la formación integral.',
  },
  {
    title: 'Acompañamiento continuo',
    description: 'Seguimiento académico y socioemocional permanente.',
  },
]

function FedAccent() {
  return (
    <span
      className="inline-flex h-1.5 w-16 rounded-full"
      style={{ background: 'hsl(var(--fed-purple))' }}
    />
  )
}

export default function About() {
  return (
    <section className="relative py-16">
      {/* fondo sólido */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/2 bg-[hsla(var(--background)/1)]" />

      <div className="container-page">
        <FadeIn>
          <div className="space-y-10">
            {/* Header */}
            <div className="max-w-3xl space-y-4 text-balance">
              <div className="space-y-3">
                <FedAccent />
                <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                  Educación con propósito
                </h2>
              </div>

              <p className="text-sm text-muted-foreground sm:text-base">
                Potenciamos el crecimiento integral de nuestros estudiantes a través de experiencias que vinculan lo
                social, cultural y ambiental, fortaleciendo sus competencias para el mundo real.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <Card key={item.title}>
                  {/* CONTENIDO INTERNO (aquí está el diseño) */}
                  <div className="relative space-y-4">
                    {/* acento sólido */}
                    <div className="pointer-events-none absolute inset-x-0 -top-6 h-[6px] bg-[hsl(var(--fed-purple))]" />

                    {/* header de la card */}
                    <div className="flex items-start gap-4">
                      {/* icono/acento */}
                      <div
                        className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl"
                        style={{
                          background: 'hsla(var(--fed-purple) / 0.12)',
                        }}
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: 'hsl(var(--fed-purple))' }}
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold leading-tight text-foreground">
                          {item.title}
                        </h3>

                        {/* barra acento */}
                        <div className="mt-3 flex items-center gap-3">
                          <span
                            className="h-1.5 w-12 rounded-full"
                            style={{ background: 'hsl(var(--fed-purple))' }}
                          />
                          <span className="text-xs text-muted-foreground">FEDESCA</span>
                        </div>
                      </div>
                    </div>

                    {/* descripción */}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
