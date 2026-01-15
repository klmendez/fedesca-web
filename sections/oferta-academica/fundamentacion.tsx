// sections/oferta-academica/fundamentacion.tsx

import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import type { Program } from '@/data/oferta'
import { basePath } from '@/lib/basePath'

type FundamentacionProps = {
  programs: Program[]
  note?: string
}

export default function Fundamentacion({ programs, note }: FundamentacionProps) {
  return (
    <Section
      className="
        relative isolate overflow-hidden
        bg-[radial-gradient(1100px_circle_at_12%_10%,hsla(var(--primary)/0.14),transparent_58%),
            radial-gradient(900px_circle_at_85%_20%,hsla(var(--accent)/0.10),transparent_60%)]
      "
      containerClassName="max-w-6xl"
    >
      {/* wash ambiental (theme-aware) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-10 h-[26rem] w-[26rem] rounded-full bg-[hsla(var(--primary)/0.14)] blur-3xl" />
        <div className="absolute -top-20 right-12 h-[20rem] w-[20rem] rounded-full bg-[hsla(var(--accent)/0.10)] blur-3xl" />
        <div className="absolute -bottom-44 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[hsla(var(--primary)/0.08)] blur-3xl" />
      </div>

      <div className="py-14">
        {/* TÍTULO PRINCIPAL */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Fundamentación
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-20 bg-[linear-gradient(90deg,transparent,hsla(var(--primary)/0.95),transparent)]" />
        </div>

        {/* INTRO */}
        <div className="mx-auto max-w-3xl space-y-3 text-left">
          <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">
            Fundamentación estratégica para equipos de vigilancia
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Entrena tu equipo con escenarios tácticos, normatividad actualizada y simulaciones. Fortalecemos el criterio
            operativo y la capacidad de respuesta en contextos reales.
          </p>

          {note ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Nota:</span> {note}
            </p>
          ) : null}
        </div>

        {/* PROGRAMAS (imagen al lado del primer módulo) */}
        <div className="mx-auto mt-12 max-w-5xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Módulos disponibles
          </p>

          {programs.map((program, index) => (
            <div key={program.id} className="grid items-start gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr]">
              {/* TEXTO DEL MÓDULO (más grande) */}
              <div className="space-y-3">
                <h4 className="text-2xl font-semibold text-foreground sm:text-3xl">
                  {program.name}
                </h4>

                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[hsla(var(--primary)/0.92)]">
                  {program.area}
                </p>

                <p className="max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {program.summary}
                </p>
              </div>

              {/* IMAGEN SOLO PARA EL PRIMER ITEM */}
              {index === 0 ? (
                <div className="relative">
                  {/* halo */}
                  <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[hsla(var(--primary)/0.18)] blur-3xl" />

                  <div className="relative aspect-[16/9] w-full shadow-[0_36px_80px_-44px_hsla(var(--primary)/0.75)]">
                    <Image
                      src={`${basePath}/oferta/fundamentacion.webp`}
                      alt="Fundamentación"
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
          <Link href="/landing/fundamentacion" className="btn btn-secondary !px-7 !py-3 !text-base">
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
