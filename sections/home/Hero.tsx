import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/Motion'
import PageHero from '@/components/PageHero'
import { basePath } from '@/lib/basePath'

export default function Hero() {
  return (
    <PageHero
      className="relative min-h-dvh overflow-hidden pt-20 sm:pt-28"
      media={
        <>
          {/* Glow + overlay sutil para legibilidad */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,hsla(var(--primary)/.40),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsla(var(--background)/.10),hsla(var(--background)/.55)_55%,hsla(var(--background)/.90))]" />
          </div>

          {/* IMAGEN DESKTOP (derecha) */}
          <div className="pointer-events-none absolute right-0 bottom-0 z-0 hidden lg:block h-[82%] w-[40%]">
            <Image
              src={`${basePath}/1.webp`}
              alt="Estudiantes FEDESCA"
              fill
              priority
              className="
                object-contain object-bottom
                [mask-image:linear-gradient(to_left,black_78%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_left,black_78%,transparent_100%)]
                drop-shadow-[0_30px_50px_rgba(0,0,0,.18)]
              "
              sizes="40vw"
            />
          </div>

          {/* IMAGEN MOBILE (abajo) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 lg:hidden h-[330px] sm:h-[400px]">
            <Image
              src={`${basePath}/1.webp`}
              alt="Estudiantes FEDESCA"
              fill
              priority
              className="
                object-contain object-bottom
                [mask-image:linear-gradient(to_top,black_82%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_top,black_82%,transparent_100%)]
                drop-shadow-[0_26px_42px_rgba(0,0,0,.16)]
              "
              sizes="100vw"
            />
          </div>
        </>
      }
    >
      <div className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              {/* Texto */}
              <div className="max-w-[58rem] space-y-7 lg:pr-[18%]">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/55 px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-border/60 backdrop-blur">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: 'hsl(var(--fed-purple))' } as React.CSSProperties}
                  />
                  Educación formal y por ciclos • Popayán (Cauca)
                </div>

                <h1
                  className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl"
                  style={{ color: 'hsl(var(--hero-ink))' } as React.CSSProperties}
                >
                  <span className="block">
                    Fundación Educativa <span className="whitespace-nowrap">para el</span>
                  </span>

                  <span className="block">
                    <span className="text-[hsl(var(--fed-purple))]">Desarrollo Social</span>,{' '}
                    <span className="text-[hsl(var(--fed-purple-text))]">Cultural</span> y{' '}
                    <span className="whitespace-nowrap">Ambiental</span>
                  </span>

                  <span
                    className="mt-4 block text-sm font-medium tracking-[0.22em] uppercase"
                    style={{ color: 'hsl(var(--hero-ink-soft))' } as React.CSSProperties}
                  >
                    FEDESCA
                  </span>
                </h1>

                <p
                  className="max-w-[44rem] text-pretty text-base leading-relaxed sm:text-lg"
                  style={{ color: 'hsl(var(--hero-ink-soft))' } as React.CSSProperties}
                >
                  Educación que impulsa el <strong className="font-semibold">desarrollo social y comunitario</strong>,
                  con programas de educación formal y para jóvenes y adultos que transforman vidas en Popayán y el Cauca.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href="/oferta-academica"
                    className="
                      inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                      transition hover:-translate-y-0.5 active:translate-y-0
                      bg-[linear-gradient(135deg,hsla(var(--primary)/1),hsla(var(--accent)/1))]
                      text-[hsl(var(--primary-foreground))]
                      shadow-[0_22px_45px_-28px_hsla(var(--primary)/0.70)]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(var(--primary))]
                    "
                  >
                    Ver oferta académica
                  </Link>

                  <Link
                    href="/admisiones"
                    className="
                      inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                      bg-background/55 text-[hsl(var(--hero-ink))]
                      ring-1 ring-inset ring-border/70 backdrop-blur
                      transition hover:-translate-y-0.5 hover:bg-background/65 active:translate-y-0
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(var(--primary))]
                    "
                  >
                    Inscripciones
                  </Link>

                  <Link
                    href="/contacto"
                    className="
                      inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold
                      text-[hsl(var(--hero-ink-soft))]
                      transition hover:text-[hsl(var(--hero-ink))]
                      underline underline-offset-4 decoration-border/70 hover:decoration-border
                    "
                  >
                    Contáctanos
                  </Link>
                </div>

                
              </div>

              {/* Spacer columna derecha */}
              <div className="hidden lg:block w-[40%]" />
            </div>
          </div>
        </FadeIn>
      </div>
    </PageHero>
  )
}
