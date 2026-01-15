// sections/oferta-academica/reentrenamiento.tsx

import Section from '@/components/Section'
import type { Program } from '@/data/oferta'

type ReentrenamientoProps = {
  programs: Program[]
  note?: string
}

export default function Reentrenamiento({ programs, note }: ReentrenamientoProps) {
  return (
    <Section className="relative isolate bg-[hsla(var(--fed-purple)/0.12)]" containerClassName="max-w-5xl">
      <div className="relative overflow-hidden rounded-[42px] border border-[hsla(var(--fed-purple)/0.25)] bg-white/95 px-6 py-12 shadow-[0_40px_90px_-52px_rgba(70,32,110,0.75)] sm:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute inset-x-10 top-0 h-24 rounded-3xl bg-[hsla(var(--fed-purple)/0.2)]" />
          <div className="absolute inset-x-16 bottom-6 h-24 rounded-3xl bg-[hsla(var(--fed-teal)/0.2)]" />
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="flex flex-col justify-between gap-8">
            <header className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[hsla(var(--fed-purple)/0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--fed-purple))]">
                Reentrenamiento
              </span>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold leading-tight text-[hsl(var(--fed-navy))] sm:text-[2.3rem]">
                  Actualiza las competencias de tu equipo de seguridad
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Diseñamos jornadas intensivas, modulares y rotativas para reforzar habilidades tácticas, éticas y
                  tecnológicas que mantienen la operación alineada con la normativa vigente.
                </p>
              </div>
            </header>

            <div className="grid gap-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[hsl(var(--fed-purple))]" />
                <p>Sesiones prácticas con retroalimentación inmediata y escenarios de riesgo controlado.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[hsl(var(--fed-teal))]" />
                <p>Refuerzos temáticos en legislación, primeros auxilios, medios tecnológicos y comunicación.</p>
              </div>
              {note ? (
                <p className="rounded-2xl border border-[hsla(var(--fed-purple)/0.25)] bg-[hsla(var(--fed-purple)/0.08)] px-5 py-4 text-xs text-[hsla(var(--fed-purple)/0.85)]">
                  {note}
                </p>
              ) : null}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-0 top-2 flex justify-center">
              <div className="h-16 w-16 rounded-full border border-[hsla(var(--fed-purple)/0.22)] bg-[hsla(var(--fed-purple)/0.1)] backdrop-blur" />
            </div>
            <div className="relative overflow-hidden rounded-[32px] border border-[hsla(var(--fed-purple)/0.2)] bg-white/85">
              <div className="absolute inset-y-10 left-8 w-px bg-[hsla(var(--fed-purple)/0.25)]" />
              <ul className="relative divide-y divide-[hsla(var(--fed-purple)/0.1)]">
                {programs.map((program, index) => (
                  <li key={program.id} className="grid gap-4 px-8 py-6 sm:grid-cols-[auto_1fr] sm:gap-6">
                    <div className="flex flex-col items-start gap-2 text-left">
                      <span className="rounded-full bg-[hsla(var(--fed-purple)/0.1)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--fed-purple))]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-xs font-medium text-muted-foreground">{program.area}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-[hsl(var(--fed-navy))]">{program.name}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{program.summary}</p>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-[hsla(var(--fed-purple)/0.7)]">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[hsla(var(--fed-purple)/0.2)] bg-[hsla(var(--fed-purple)/0.06)] px-3 py-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--fed-purple))]" />
                          24h actualización anual
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[hsla(var(--fed-teal)/0.25)] bg-[hsla(var(--fed-teal)/0.08)] px-3 py-1 text-[hsla(var(--fed-teal)/0.8)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--fed-teal))]" />
                          Certificación inmediata
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
