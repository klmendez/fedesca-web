import Link from 'next/link'

import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { oferta } from '@/data/oferta'

const highlights = [
  {
    title: 'Servicio social con propósito',
    description:
      'Integra experiencias comunitarias guiadas para certificar el servicio social institucional y conectar con la comunidad.',
  },
  {
    title: 'Experiencia laboral real',
    description:
      'Documenta y valida la práctica laboral de cada estudiante con acompañamiento de FEDESCA y aliados empresariales.',
  },
  {
    title: 'Acompañamiento permanente',
    description:
      'Orientación personalizada para trazar objetivos, revisar avances y asegurar el cumplimiento de requisitos académicos.',
  },
]

const steps = [
  {
    title: 'Conecta con un asesor',
    detail: 'Resuelve dudas sobre requisitos, tiempos y modalidades para iniciar el proceso complementario.',
  },
  {
    title: 'Define la ruta',
    detail: 'Selecciona la experiencia ideal según tu interés: servicio social o certificación de experiencia laboral.',
  },
  {
    title: 'Activa tu proyecto',
    detail: 'Recibe acompañamiento, seguimiento y certificación oficial al finalizar las actividades establecidas.',
  },
]

export default function ComplementariosLandingPage() {
  const programs = oferta.complementarios

  return (
    <>
      <PageHero
        eyebrow="Programas complementarios"
        title={
          <span>
            Potencia tu formación con experiencias sociales y laborales
          </span>
        }
        subtitle="Rutas flexibles y acompañadas para cumplir requisitos institucionales, sumar horas de servicio social y certificar experiencia laboral real."
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

      <Section className="bg-white" containerClassName="max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Programas disponibles
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Dos rutas articuladas que certifican tu compromiso social y fortalecen tu perfil profesional.
            </p>
          </div>

          <ul className="space-y-8">
            {programs.map((program) => (
              <li key={program.id} className="rounded-3xl border border-[hsla(var(--border)/0.6)] bg-[hsl(var(--card))] p-6 shadow-[0_24px_60px_-50px_rgba(31,134,145,0.45)]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{program.name}</h3>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{program.area}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[hsla(var(--primary)/0.4)] px-3 py-1 text-xs font-semibold text-[hsla(var(--primary)/0.9)]">
                    Certificación oficial
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{program.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-[hsl(var(--muted))]" containerClassName="max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Cómo funciona</p>
            <h2 className="text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              Activa tu proceso en tres pasos
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Te acompañamos desde la planeación hasta la certificación final para que te concentres en vivir la experiencia.
            </p>
            <Link href="/contacto" className="btn btn-secondary">
              Agendar asesoría
            </Link>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-[hsla(var(--border)/0.6)] bg-[hsl(var(--card))] p-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-semibold text-[hsla(var(--primary)/0.9)]">0{index + 1}</span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white" containerClassName="max-w-5xl">
        <div className="rounded-[36px] border border-[hsla(var(--primary)/0.35)] bg-[hsl(var(--card))] p-8 text-center shadow-[0_30px_80px_-58px_rgba(159,61,144,0.55)]">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            ¿Listo para comenzar tu ruta complementaria?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Escríbenos para recibir una guía personalizada y aplicar a la experiencia que mejor se ajuste a tus objetivos.
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

