// sections/oferta-academica/formal.tsx

import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import type { Program } from '@/data/oferta'

type FormalProps = {
  programs: Program[]
  note?: string
}

export default function Formal({ programs, note }: FormalProps) {
  return (
    <Section
      className="
        relative isolate overflow-hidden
        bg-[radial-gradient(1200px_circle_at_12%_8%,hsla(var(--primary)/0.14),transparent_55%),
            radial-gradient(900px_circle_at_80%_18%,hsla(var(--accent)/0.10),transparent_60%)]
      "
      containerClassName="max-w-6xl"
    >
      {/* wash ambiental */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-44 left-8 h-[28rem] w-[28rem] rounded-full bg-[hsla(var(--primary)/0.14)] blur-3xl" />
        <div className="absolute -top-20 right-12 h-[22rem] w-[22rem] rounded-full bg-[hsla(var(--accent)/0.10)] blur-3xl" />
      </div>

      <div className="py-14">
        {/* TÍTULO PRINCIPAL */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Educación formal
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-24 bg-[linear-gradient(90deg,transparent,hsla(var(--primary)/0.95),transparent)]" />
        </div>

        {/* INTRO */}
        <div className="mx-auto max-w-3xl space-y-4 text-left">
          <h3 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
            Bachillerato integral con proyección a la vida universitaria
          </h3>

          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Formación sólida y flexible para fortalecer competencias académicas,
            socioemocionales y tecnológicas, con acompañamiento permanente.
          </p>

          {note ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Nota:</span> {note}
            </p>
          ) : null}
        </div>

        {/* PROGRAMAS */}
        <div className="mx-auto mt-14 max-w-5xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Programas disponibles
          </p>

          {programs.map((program, index) => (
            <div
              key={program.id}
              className="grid items-start gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr]"
            >
              {/* TEXTO DEL PROGRAMA */}
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-foreground">
                  {program.name}
                </h4>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[hsla(var(--primary)/0.9)]">
                  {program.area}
                </p>

                <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
                  {program.summary}
                </p>
              </div>

              {/* IMAGEN SOLO PARA EL PRIMER PROGRAMA */}
              {index === 0 && (
                <div className="relative">
                  {/* halo */}
                  <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[hsla(var(--primary)/0.18)] blur-3xl" />

                  <div className="relative aspect-[16/9] w-full shadow-[0_36px_80px_-44px_hsla(var(--primary)/0.75)]">
                    <Image
                      src="/oferta/bachiller.webp"
                      alt="Bachillerato Académico"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,hsla(var(--background)/0.35))]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center gap-3">
          <Link href="/landing/formal" className="btn btn-secondary">
            Ver más información
          </Link>
          <Link href="/contacto" className="btn btn-ghost">
            Hablar con un asesor →
          </Link>
        </div>
      </div>
    </Section>
  )
}
