import React from 'react'
import { FadeIn } from '@/components/Motion'

export interface PageHeroProps {
  eyebrow?: string
  title?: React.ReactNode
  subtitle?: React.ReactNode
  actions?: React.ReactNode
  align?: 'left' | 'center'

  /** NEW: permite ajustar padding/alto en páginas como Home */
  className?: string

  /** NEW: permite sobreescribir el bloque interno (Home) */
  children?: React.ReactNode

  /** NEW: para elementos absolutos (imágenes, decoraciones) sin duplicar background */
  media?: React.ReactNode

  /** NEW: controlar ancho/espaciado del contenido */
  contentClassName?: string

  /** Permite reemplazar el fondo por defecto basado en degradados */
  background?: React.ReactNode
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
  align = 'left',
  className,
  children,
  media,
  contentClassName,
  background,
}: PageHeroProps) {
  const alignmentClass =
    align === 'center'
      ? 'mx-auto flex max-w-3xl flex-col items-center gap-6 text-center'
      : 'flex max-w-3xl flex-col gap-6'

  return (
    <section className={`relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 ${className ?? ''}`}>
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {background ?? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-from))] via-[hsl(var(--hero-via))] to-[hsl(var(--hero-to))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsla(var(--hero-glow)/0.18),_transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,rgba(0,0,0,0.05)_68%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.55)_100%)]" />
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/95 via-background/60 to-transparent dark:via-background/35" />
          </>
        )}
      </div>

      {/* Media layer (absolute images, etc) */}
      {media}

      <div className="container-page relative z-10 px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Si hay children, renderiza custom. Si no, usa el layout clásico */}
          {children ? (
            children
          ) : (
            <div className={`${alignmentClass} ${contentClassName ?? ''}`}>
              {eyebrow ? (
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] ring-1 ring-inset ring-border/60 backdrop-blur dark:bg-white/10 dark:ring-white/15"
                  style={{ color: `hsl(var(--hero-ink))` }}
                >
                  {eyebrow}
                </span>
              ) : null}

              <div className="space-y-4">
                {title ? (
                  <h1
                    className="text-4xl font-semibold leading-[1.07] tracking-[-0.03em] sm:text-5xl"
                    style={{ color: `hsl(var(--hero-ink))` }}
                  >
                    {title}
                  </h1>
                ) : null}

                {subtitle ? (
                  <p className="text-sm leading-relaxed sm:text-base" style={{ color: `hsla(var(--hero-ink-soft))` }}>
                    {subtitle}
                  </p>
                ) : null}
              </div>

              {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
