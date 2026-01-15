// app/landing/reentrenamiento/page.tsx
// Landing con el mismo patrón del landing de complementarios (PageHero + highlights + programas + steps + CTA)
// Requiere una imagen en: public/oferta/reentrenamiento.webp

import Link from 'next/link'

import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { oferta } from '@/data/oferta'
import { basePath } from '@/lib/basePath'

const highlights = [
  {
    title: 'Actualización continua',
    description:
      'Refuerza habilidades operativas, éticas y tecnológicas con contenidos alineados a la normativa vigente.',
  },
  {
    title: 'Enfoque práctico',
    description:
      'Sesiones aplicadas y retroalimentación para fortalecer la respuesta en escenarios controlados.',
  },
  {
    title: 'Certificación',
    description:
      'Evidencias y constancias al finalizar el proceso, con acompañamiento institucional durante la ruta.',
  },
]

const steps = [
  {
    title: 'Diagnóstico del equipo',
    detail:
      'Revisamos necesidades, turnos y objetivos para estructurar una agenda modular adecuada.',
  },
  {
    title: 'Ejecución de módulos',
    detail:
      'Desarrollamos sesiones por temas y prácticas aplicadas, con seguimiento y control de avances.',
  },
  {
    title: 'Cierre y constancias',
    detail:
      'Consolidamos evidencias, realizamos evaluación final y emitimos certificaciones según el programa.',
  },
]

export default function ReentrenamientoLandingPage() {
  // Ajusta si tu data usa otra llave; aquí asumimos oferta.reentrenamiento
  const programs = oferta.reentrenamiento

  return (
    <>
      <PageHero
        eyebrow="Reentrenamiento"
        title={<span>Actualiza y fortalece las competencias de seguridad</span>}
        subtitle="Jornadas intensivas y modulares para reforzar habilidades tácticas, tecnológicas y de comunicación con acompañamiento y certificación."
        actions={
          <>
            <Link href="/contacto" className="btn btn-secondary">
              Hablar con un asesor
            </Link>
            <Link href="/oferta-academica" className="btn btn-ghost">
              Volver a la oferta académica
            </Link>
          </>
        }
      />

      {/* Imagen hero-like */}
      <Section className="bg-[hsl(var(--background))]" containerClassName="max-w-6xl">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[32px] shadow-[0_34px_90px_-56px_hsla(var(--primary)/0.7)]">
          <img
            src={`${basePath}/oferta/reentrenamiento.webp`}
            alt="Reentrenamiento"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,hsla(var(--background)/0.45))]" />
        </div>
      </Section>

      {/* Highlights */}
      <Section className="bg-[hsl(var(--background))]" containerClassName="max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="h-full rounded-3xl border border-[hsla(var(--border)/0.6)] bg-[hsl(var(--card))] p-6 shadow-[0_20px_60px_-48px_rgba(19,27,64,0.45)]"
            >
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Programas */}
      <Section className="bg-white" containerClassName="max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Módulos disponibles
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Una ruta modular para actualizar conocimientos y mantener la operación alineada con la normativa.
            </p>
          </div>

          <ul className="space-y-8">
            {programs.map((program) => (
              <li
                key={program.id}
                className="rounded-3xl border border-[hsla(var(--border)/0.6)] bg-[hsl(var(--card))] p-6 shadow-[0_24px_60px_-50px_rgba(159,61,144,0.35)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{program.name}</h3>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{program.area}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[hsla(var(--primary)/0.4)] px-3 py-1 text-xs font-semibold text-[hsla(var(--primary)/0.9)]">
                    Ruta modular
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{program.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Cómo funciona */}
      <Section className="bg-[hsl(var(--muted))]" containerClassName="max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Cómo funciona
            </p>
            <h2 className="text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              Implementación en tres pasos
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Planeación, ejecución y cierre con seguimiento, evidencias y orientación permanente.
            </p>
            <Link href="/contacto" className="btn btn-secondary">
              Agendar asesoría
            </Link>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-[hsla(var(--border)/0.6)] bg-[hsl(var(--card))] p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-semibold text-[hsla(var(--primary)/0.9)]">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section className="bg-white" containerClassName="max-w-5xl">
        <div className="rounded-[36px] border border-[hsla(var(--primary)/0.35)] bg-[hsl(var(--card))] p-8 text-center shadow-[0_30px_80px_-58px_rgba(159,61,144,0.55)]">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            ¿Listo para programar el reentrenamiento?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Escríbenos para diseñar una ruta modular según turnos, objetivos y necesidades del equipo.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contacto" className="btn btn-secondary">
              Hablar con un asesor
            </Link>
            <Link href="/quienes-somos" className="btn btn-ghost">
              Conocer más sobre FEDESCA
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
