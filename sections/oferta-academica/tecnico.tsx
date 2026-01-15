// sections/oferta-academica/tecnico.tsx

import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import type { Program } from '@/data/oferta'
import { basePath } from '@/lib/basePath'

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
      className="
        relative isolate overflow-hidden
        bg-[radial-gradient(1100px_circle_at_12%_10%,hsla(var(--primary)/0.14),transparent_58%),
            radial-gradient(900px_circle_at_85%_20%,hsla(var(--accent)/0.10),transparent_60%)]
      "
      containerClassName="max-w-6xl"
    >
      {/* wash ambiental */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-10 h-[26rem] w-[26rem] rounded-full bg-[hsla(var(--primary)/0.14)] blur-3xl" />
        <div className="absolute -top-20 right-12 h-[20rem] w-[20rem] rounded-full bg-[hsla(var(--accent)/0.10)] blur-3xl" />
        <div className="absolute -bottom-44 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[hsla(var(--primary)/0.08)] blur-3xl" />
      </div>

      <div className="py-14">
        {/* TÍTULO PRINCIPAL */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Formación para el trabajo
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-20 bg-[linear-gradient(90deg,transparent,hsla(var(--primary)/0.95),transparent)]" />
        </div>

        {/* INTRO */}
        <div className="mx-auto max-w-3xl space-y-3 text-left">
          <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">
            Programas Técnicos y Auxiliares
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Conecta tu talento con sectores productivos estratégicos. Itinerarios flexibles, entrenamientos prácticos
            y rutas de certificación alineadas a la demanda laboral regional.
          </p>

          {note ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Nota:</span> {note}
            </p>
          ) : null}
        </div>

        {/* ÁREAS (imagen al lado de la primera área) */}
        <div className="mx-auto mt-12 max-w-5xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Áreas de especialización
          </p>

          {groups.map((group, index) => (
            <div key={group.area} className="grid items-start gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr]">
              {/* TEXTO DEL ÁREA (más grande) */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Área de especialización
                  </p>
                  <h4 className="text-2xl font-semibold text-foreground sm:text-3xl">
                    {group.area}
                  </h4>
                  <p className="text-sm text-[hsla(var(--primary)/0.9)] font-semibold">
                    {group.programs.length} programas
                  </p>
                </div>

                {/* Programas del área (sin cards/pills, solo flujo editorial) */}
                <div className="space-y-5">
                  {group.programs.map((program) => (
                    <div key={program.id} className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">{program.name}</p>
                      <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
                        {program.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGEN SOLO PARA EL PRIMER GRUPO */}
              {index === 0 ? (
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[hsla(var(--primary)/0.18)] blur-3xl" />

                  <div className="relative aspect-[16/9] w-full shadow-[0_36px_80px_-44px_hsla(var(--primary)/0.75)]">
                    <Image
                      src={`${basePath}/oferta/tecnico.webp`}
                      alt="Formación para el trabajo"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,hsla(var(--background)/0.35))]" />
                  </div>
                </div>
              ) : (
                <div className="hidden lg:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link href="/landing/tecnico" className="btn btn-secondary !px-7 !py-3 !text-base">
            Ver más información
          </Link>
          <Link href="/contacto" className="btn btn-ghost !px-7 !py-3 !text-base">
            Hablar con un asesor →
          </Link>
        </div>
      </div>
    </Section>
  )
}
