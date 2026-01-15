// sections/oferta-academica/complementario.tsx

import Link from 'next/link'
import Section from '@/components/Section'
import type { Program } from '@/data/oferta'

type ComplementarioProps = {
  programs: Program[]
  note?: string
}

export default function Complementario({ programs, note }: ComplementarioProps) {
  return (
    <Section
      className="
        relative isolate overflow-hidden
        bg-[radial-gradient(900px_circle_at_15%_10%,hsla(var(--primary)/0.12),transparent_60%),
            radial-gradient(900px_circle_at_90%_35%,hsla(var(--accent)/0.10),transparent_62%)]
      "
      containerClassName="max-w-6xl"
    >
      {/* wash ambiental sobrio (theme-aware) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-10 h-80 w-80 rounded-full bg-[hsla(var(--primary)/0.12)] blur-3xl" />
        <div className="absolute -bottom-40 right-10 h-[26rem] w-[26rem] rounded-full bg-[hsla(var(--accent)/0.10)] blur-3xl" />
      </div>

      <div className="grid gap-12 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* INTRO + CTA + INCLUYE */}
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Complementarios
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-[2.65rem]">
              Impulsa tu formación con experiencias reales
            </h2>

            <div className="h-[3px] w-28 bg-[linear-gradient(90deg,hsla(var(--primary)/0.95),transparent)]" />

            <p className="max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
              Rutas y actividades que acompañan el proceso académico para fortalecer habilidades sociales,
              vocación de servicio y preparación para el mundo laboral.
            </p>

            {note ? (
              <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Nota:</span> {note}
              </p>
            ) : null}
          </div>

          {/* CTA (cambia tipo de botón + texto) */}
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/landing/complementarios" className="btn btn-secondary">
              Ver más información
            </Link>
            <Link href="/contacto" className="btn btn-ghost">
              Hablar con un asesor →
            </Link>
          </div>

          
          
        </div>

        {/* PROGRAMAS – diseño institucional morado (grande) */}
        <div className="relative space-y-10">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Programas disponibles
            </h3>
            <div className="h-[3px] w-24 bg-[linear-gradient(90deg,hsla(var(--primary)/0.95),transparent)]" />
          </div>

          {/* Si quieres usar 'programs' dinámico, lo dejamos abajo también */}
          <div className="space-y-12">
            {/* 1 */}
            <div className="relative pl-8">
              <span className="absolute left-0 top-1 h-full w-[3px] bg-[hsla(var(--primary)/0.85)]" />
              <h4 className="text-2xl font-semibold text-foreground">Servicio Social y Comunitario</h4>
              <p className="mt-2 text-sm font-medium text-[hsla(var(--primary)/0.9)]">Programas complementarios</p>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
                Certificado/constancia de servicio social requerido por el colegio (según lineamientos institucionales).
              </p>
            </div>

            {/* 2 */}
            <div className="relative pl-8">
              <span className="absolute left-0 top-1 h-full w-[3px] bg-[hsla(var(--primary)/0.85)]" />
              <h4 className="text-2xl font-semibold text-foreground">Experiencia Laboral (por año)</h4>
              <p className="mt-2 text-sm font-medium text-[hsla(var(--primary)/0.9)]">Programas complementarios</p>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
                Acompañamiento y certificación de experiencia laboral acumulada por periodo anual.
              </p>
            </div>

          
          </div>
        </div>
      </div>
    </Section>
  )
}
