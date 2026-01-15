// app/landing/tecnico/page.tsx
// Landing estilo complementarios (PageHero + highlights + programas + steps + CTA)
// Requiere una imagen en: public/oferta/tecnico.webp

import Link from 'next/link'

import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { oferta } from '@/data/oferta'
import { basePath } from '@/lib/basePath'

const highlights = [
  {
    title: 'Entrenamiento práctico',
    description:
      'Rutas formativas con énfasis aplicado y acompañamiento para consolidar habilidades clave en cada área.',
  },
  {
    title: 'Enfoque laboral',
    description:
      'Programas alineados con necesidades regionales para mejorar empleabilidad y facilitar inserción productiva.',
  },
  {
    title: 'Certificación y seguimiento',
    description:
      'Orientación institucional para completar la ruta y obtener constancias según el programa.',
  },
]

const steps = [
  {
    title: 'Elige tu área',
    detail:
      'Identifica el sector que mejor se ajusta a tu perfil: salud, sistemas, belleza, industrial o SST.',
  },
  {
    title: 'Define tu ruta',
    detail:
      'Selecciona el programa y revisa contenidos, intensidad y requisitos para iniciar.',
  },
  {
    title: 'Activa tu formación',
    detail:
      'Inicia el proceso con acompañamiento y seguimiento; al cierre obtienes certificación/constancia.',
  },
]

export default function TecnicoLandingPage() {
  const programs = oferta.tecnicos ?? []
  const areas = Array.from(
    programs.reduce((acc: Map<string, typeof programs>, p) => {
      const key = p.area?.trim() || 'Otros'
      acc.set(key, [...(acc.get(key) ?? []), p])
      return acc
    }, new Map<string, typeof programs>())
  )

  return (
    <>
      <PageHero
        eyebrow="Formación para el trabajo"
        title={<span>Programas técnicos y auxiliares para conectar con el mercado laboral</span>}
        subtitle="Itinerarios flexibles y prácticos, organizados por áreas de especialización, con acompañamiento y rutas de certificación."
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
            src={`${basePath}/oferta/tecnico.webp`}
            alt="Formación para el trabajo"
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

      {/* Programas por área */}
      <Section className="bg-white" containerClassName="max-w-5xl">
        <div className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Áreas y programas disponibles
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Explora los programas organizados por área para identificar la ruta que mejor se ajuste a tu perfil.
            </p>
          </div>

          <div className="space-y-8">
            {areas.map(([area, list]) => (
              <div
                key={area}
                className="rounded-3xl border border-[hsla(var(--border)/0.6)] bg-[hsl(var(--card))] p-6 shadow-[0_24px_60px_-50px_rgba(159,61,144,0.35)]"
              >
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      Área de especialización
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{area}</h3>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[hsla(var(--primary)/0.4)] px-3 py-1 text-xs font-semibold text-[hsla(var(--primary)/0.9)]">
                    {list.length} programas
                  </span>
                </div>

                <ul className="mt-5 space-y-4">
                  {list.map((p) => (
                    <li key={p.id}>
                      <p className="text-base font-semibold text-foreground">{p.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
              Inicia tu proceso en tres pasos
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Te acompañamos para elegir el área, definir la ruta y activar tu formación con seguimiento institucional.
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
            ¿Listo para iniciar tu formación técnica?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Escríbenos para recibir orientación y elegir la ruta más adecuada según tu perfil e intereses.
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
