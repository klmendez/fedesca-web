// sections/oferta-academica/fundamentacion.tsx

import Section from '@/components/Section'
import type { Program } from '@/data/oferta'

type FundamentacionProps = {
  programs: Program[]
  note?: string
}

export default function Fundamentacion({ programs, note }: FundamentacionProps) {
  return (
    <Section className="relative isolate bg-[hsla(var(--fed-navy)/0.2)]" containerClassName="max-w-5xl">
      <div className="relative overflow-hidden rounded-[38px] border border-[hsla(var(--fed-navy)/0.25)] bg-[hsl(var(--fed-navy)/0.9)] text-white shadow-[0_32px_80px_-40px_rgba(17,29,83,0.8)]">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -top-24 left-10 h-36 w-36 rounded-3xl bg-[hsl(var(--fed-purple))]" />
          <div className="absolute -bottom-24 right-12 h-40 w-40 rounded-3xl bg-[hsl(var(--fed-teal))]" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-[hsla(var(--fed-purple)/0.35)]" />

        <div className="relative grid gap-10 p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-14">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
              Seguridad Privada
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold leading-tight sm:text-[2.4rem]">
                Fundamentación estratégica para equipos de vigilancia
              </h2>
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                Entrena tu equipo con escenarios tácticos, normatividad actualizada y simulaciones inmersivas.
                Fortalecemos el criterio operativo y la capacidad de respuesta en contextos reales.
              </p>
            </div>

            {note ? (
              <p className="rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-sm text-white/85">
                {note}
              </p>
            ) : null}

            <dl className="grid gap-4 text-sm text-white/75">
              <div className="flex items-baseline gap-3">
                <dt className="h-2 w-2 rounded-full bg-[hsl(var(--fed-yellow))]" />
                <dd>Protocolos operativos alineados con la Superintendencia de Vigilancia.</dd>
              </div>
              <div className="flex items-baseline gap-3">
                <dt className="h-2 w-2 rounded-full bg-white/70" />
                <dd>Simulaciones de crisis con enfoque en comunicación y control de riesgos.</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-white/20 md:block" />
            <ol className="relative space-y-6 md:space-y-4">
              {programs.map((program, index) => (
                <li key={program.id} className="relative rounded-[28px] border border-white/15 bg-white/[0.08] p-6 backdrop-blur">
                  <div className="absolute -left-7 top-7 hidden h-3 w-3 rounded-full border border-white/60 bg-[hsl(var(--fed-yellow))] shadow-[0_0_0_6px_rgba(241,231,85,0.18)] md:block" />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                      {String(index + 1).padStart(2, '0')} · Módulo
                    </p>
                    <h3 className="text-xl font-semibold text-white">{program.name}</h3>
                    <p className="text-sm text-white/75">{program.summary}</p>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/75">
                      {program.area}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  )
}
