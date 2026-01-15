// app/landing/fundamentacion/page.tsx
// Landing con el mismo patrón del landing de complementarios (PageHero + highlights + programas + steps + CTA)
// Requiere una imagen en: public/oferta/fundamentacion.webp

import Link from 'next/link'

import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { oferta } from '@/data/oferta'
import { basePath } from '@/lib/basePath'

const highlights = [
  {
    title: 'Entrenamiento aplicado',
    description:
      'Módulos enfocados en escenarios reales para fortalecer criterio operativo, procedimientos y toma de decisiones.',
  },
  {
    title: 'Normatividad y protocolos',
    description:
      'Actualización y alineación con procedimientos institucionales, estándares de operación y control de riesgos.',
  },
  {
    title: 'Seguimiento y mejora',
    description:
      'Acompañamiento y evaluación para identificar brechas, reforzar aprendizajes y elevar el desempeño del equipo.',
  },
]

const steps = [
  {
    title: 'Diagnóstico inicial',
    detail:
      'Revisamos necesidades del equipo, disponibilidad y objetivos para proponer una ruta adecuada.',
  },
  {
    title: 'Ejecución por módulos',
    detail:
      'Desarrollamos sesiones y prácticas según el plan, con orientación y actividades aplicadas.',
  },
  {
    title: 'Cierre y certificación',
    detail:
      'Consolidamos evidencias, evaluamos resultados y emitimos constancias según el programa.',
  },
]

export default function FundamentacionLandingPage() {
  // Ajusta si tu data usa otra llave; aquí asumimos oferta.fundamentacion
  const programs = oferta.fundamentacion

  return (
    <>
      <PageHero
        eyebrow="Fundamentación"
        title={<span>Fortalece habilidades operativas con formación aplicada</span>}
        subtitle="Módulos orientados a mejorar procedimientos, criterio y respuesta, con acompañamiento y enfoque práctico."
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

      {/* Imagen hero-like (opcional, misma vibra) */}
      <Section className="bg-[hsl(var(--background))]" containerClassName="max-w-6xl">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[32px] shadow-[0_34px_90px_-56px_hsla(var(--primary)/0.7)]">
          {/* Nota: usamos basePath para GitHub Pages */}
          {/* Si no quieres “tarjeta”, puedes quitar el rounded */}
          <img
            src={`${basePath}/oferta/fundamentacion.webp`}
            alt="Fundamentación"
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
              Un plan modular para reforzar procedimientos, habilidades y capacidad de respuesta.
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Cómo funciona</p>
            <h2 className="text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              Implementación en tres pasos
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Un proceso claro para planear, ejecutar y cerrar el programa con seguimiento y evidencias.
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
            ¿Listo para iniciar el proceso?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Escríbenos para recibir una guía personalizada y planear la ruta de módulos según tu necesidad.
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
