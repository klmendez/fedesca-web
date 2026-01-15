// sections/oferta-academica/ProgramDetail.tsx

import type { Program } from '@/data/oferta'

type ProgramDetailProps = {
  program: Program
  variant?: 'default' | 'compact'
}

export default function ProgramDetail({
  program,
  variant = 'default',
}: ProgramDetailProps) {
  const compact = variant === 'compact'

  return (
    <article
      className={[
        'group relative overflow-hidden rounded-3xl',
        'border bg-card text-card-foreground',
        compact ? 'p-4' : 'p-6',
        'transition-all duration-300',
        'shadow-[0_20px_44px_-30px_hsla(var(--fed-purple)/0.35)]',
        'hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_hsla(var(--fed-purple)/0.5)]',
      ].join(' ')}
    >
      {/* Línea lateral marca */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-[hsl(var(--fed-purple))]" />

      <div className="relative space-y-3">
        {/* Título + badge */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-base font-semibold tracking-tight">
              {program.name}
            </h4>

            {/* Chip área */}
            {program.area && (
              <span
                className={[
                  'mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold',
                  'bg-background/70 backdrop-blur',
                  'border border-border',
                  'text-muted-foreground',
                  'group-hover:text-foreground',
                  'transition-colors',
                ].join(' ')}
              >
                {program.area}
              </span>
            )}
          </div>

          {/* Punto decorativo */}
          <span className="mt-1 h-3 w-3 rounded-full bg-[hsl(var(--fed-purple))] group-hover:bg-[hsl(var(--fed-teal))] transition-colors" />
        </div>

        {/* Resumen */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {program.summary}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">
            {program.category === 'formal'
              ? 'Educación Formal'
              : program.category === 'tecnico'
              ? 'Formación para el Trabajo'
              : program.category === 'fundamentacion'
              ? 'Seguridad Privada · Fundamentación'
              : program.category === 'reentrenamiento'
              ? 'Seguridad Privada · Reentrenamiento'
              : 'Complementario'}
          </span>

          <span className="text-xs font-semibold text-[hsl(var(--fed-purple-text))] group-hover:text-[hsl(var(--fed-teal-text))] transition-colors">
            Ver más
          </span>
        </div>
      </div>
    </article>
  )
}
