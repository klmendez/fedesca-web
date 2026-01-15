// sections/oferta-academica/tecnico.tsx

import Section from '@/components/Section'
import type { Program } from '@/data/oferta'

type TecnicoProps = {
  programs: Program[]
  note?: string
}

function groupByArea(programs: Program[]) {
  const map = new Map<string, Program[]>()

  for (const p of programs) {
    const key = p.area?.trim() || 'Otros'
    const list = map.get(key) ?? []
    list.push(p)
    map.set(key, list)
  }

  // Orden fijo según tu estructura (lo que no coincida queda al final)
  const preferredOrder = [
    'Área Administrativa y Sistemas',
    'Área de Salud',
    'Área de Belleza y Bienestar',
    'Área Técnica e Industrial',
    'Área de Seguridad y Salud en el Trabajo',
  ]

  const orderedKeys = [
    ...preferredOrder.filter((k) => map.has(k)),
    ...[...map.keys()].filter((k) => !preferredOrder.includes(k)),
  ]

  return orderedKeys.map((area) => ({
    area,
    programs: map.get(area) ?? [],
  }))
}

export default function Tecnico({ programs, note }: TecnicoProps) {
  const groups = groupByArea(programs)

  return (
    <Section
      className="relative isolate bg-[hsla(var(--fed-teal)/0.12)]"
      containerClassName="max-w-6xl"
    >
      <div className="relative overflow-hidden rounded-[40px] border border-[hsla(var(--fed-teal)/0.22)] bg-white/92 p-8 sm:p-12 shadow-[0_36px_76px_-48px_rgba(11,96,121,0.65)] backdrop-blur">
        <div className="pointer-events-none absolute -top-20 left-10 h-28 w-28 rounded-3xl bg-[hsla(var(--fed-teal)/0.2)]" />
        <div className="pointer-events-none absolute -bottom-20 right-8 h-24 w-24 rounded-3xl bg-[hsla(var(--fed-navy)/0.18)]" />

        <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsla(var(--fed-teal)/0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--fed-teal))]">
              Formación para el Trabajo
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold leading-tight text-[hsl(var(--fed-navy))] sm:text-[2.4rem]">
                Programas Técnicos y Auxiliares
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Conecta tu talento con sectores productivos estratégicos. Diseñamos itinerarios flexibles, con
                entrenamientos prácticos y rutas de certificación alineadas a la demanda laboral regional.
              </p>
            </div>

            {note ? (
              <div className="rounded-3xl border border-[hsla(var(--fed-teal)/0.3)] bg-[hsla(var(--fed-teal)/0.08)] p-5 text-sm text-[hsla(var(--fed-teal)/0.85)]">
                {note}
              </div>
            ) : null}

            <ul className="grid gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--fed-teal))]" />
                Laboratorios y ambientes especializados en cada área.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--fed-navy))]" />
                Mentorías con expertos del sector productivo.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--fed-purple))]" />
                Enfoque en competencias blandas y empleabilidad.
              </li>
            </ul>
          </div>

          <div className="relative space-y-6">
            {groups.map((group) => (
              <article
                key={group.area}
                className="relative overflow-hidden rounded-[28px] border border-[hsla(var(--fed-teal)/0.2)] bg-white/90 p-6 shadow-[0_24px_60px_-44px_rgba(16,105,119,0.65)]"
              >
                <div className="pointer-events-none absolute inset-x-10 -top-6 h-2 rounded-full bg-[hsla(var(--fed-teal)/0.25)]" />
                <div className="relative space-y-4">
                  <header className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[hsla(var(--fed-teal)/0.7)]">
                        Área de Especialización
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-[hsl(var(--fed-teal))]">
                        {group.area}
                      </h3>
                    </div>
                    <span className="rounded-full border border-[hsla(var(--fed-teal)/0.25)] bg-[hsla(var(--fed-teal)/0.08)] px-3 py-1 text-[11px] font-semibold text-[hsla(var(--fed-teal)/0.8)]">
                      {group.programs.length} programas
                    </span>
                  </header>

                  <ul className="grid gap-3">
                    {group.programs.map((program) => (
                      <li
                        key={program.id}
                        className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm transition-colors hover:border-[hsla(var(--fed-teal)/0.4)] hover:bg-[hsla(var(--fed-teal)/0.06)]"
                      >
                        <p className="font-semibold text-[hsl(var(--fed-navy))]">{program.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{program.summary}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
