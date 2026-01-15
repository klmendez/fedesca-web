// app/landing/formal/page.tsx
// (Si tu proyecto no usa App Router, dime y lo adapto a /pages)

import Link from 'next/link'

import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { oferta } from '@/data/oferta'

const highlights = [
  {
    title: 'Formación integral',
    description:
      'Desarrollo de competencias académicas, socioemocionales y ciudadanas para proyectarse a la educación superior y el mundo laboral.',
  },
  {
    title: 'Acompañamiento cercano',
    description:
      'Seguimiento pedagógico permanente, refuerzos y orientación para mantener el progreso y consolidar hábitos de estudio.',
  },
  {
    title: 'Proyección a futuro',
    description:
      'Ruta formativa articulada para fortalecer el perfil del estudiante, su autonomía y su preparación para nuevas etapas.',
  },
]

const steps = [
  {
    title: 'Conoce el proceso',
    detail:
      'Te orientamos sobre requisitos, documentación, jornadas y el enfoque académico del programa.',
  },
  {
    title: 'Define tu ingreso',
    detail:
      'Selecciona el programa y revisa la ruta académica según tu situación y objetivos formativos.',
  },
  {
    title: 'Inicia y da seguimiento',
    detail:
      'Recibe acompañamiento, evaluación continua y soporte institucional durante el año lectivo.',
  },
]

export default function FormalLandingPage() {
  // Ajusta si tu data usa otro nombre (ej: oferta.formal)
  const programs = oferta.formal

  return (
    <>
      <PageHero
        eyebrow="Educación formal"
        title={<span>Bachillerato con formación integral y proyección universitaria</span>}
        subtitle="Una ruta académica sólida para fortalecer competencias y acompañar el crecimiento personal, con orientación permanente y enfoque de futuro."
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
              Programas disponibles
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Una ruta académica organizada por niveles para consolidar aprendizajes y proyectar metas de largo plazo.
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
                    Educación formal
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Cómo funciona</p>
            <h2 className="text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              Inicia tu proceso en tres pasos
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Te acompañamos desde la orientación inicial hasta el seguimiento académico para asegurar un proceso claro.
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
            ¿Listo para iniciar tu bachillerato?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Escríbenos para recibir orientación y una guía personalizada sobre el proceso de ingreso.
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
