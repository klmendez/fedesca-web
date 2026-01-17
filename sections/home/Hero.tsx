import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/Motion'
import PageHero from '@/components/PageHero'
import { basePath } from '@/lib/basePath'

const WHATSAPP_NUMBER = '573001234567' // ← cambia por el real
const WHATSAPP_MESSAGE =
  'Hola, quisiera recibir información sobre los programas (bachillerato por ciclos, educación formal y técnicos) y el proceso de inscripción en FEDESCA / Colegio San Carlos.'

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

export default function Hero() {
  return (
    <PageHero
      className="relative min-h-dvh overflow-hidden pt-20 sm:pt-28"
      media={
        <>
          {/* FONDO / GLOW */}
          <div className="pointer-events-none absolute inset-0 z-0">
            {/* Glow central */}
            <div className="absolute -top-28 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full blur-3xl opacity-45 bg-[radial-gradient(circle_at_center,hsla(var(--fed-purple)/.55),transparent_65%)]" />

            {/* Degradado principal */}
            <div
              className="
                absolute inset-0
                bg-[linear-gradient(
                  to_bottom,
                  white 0%,
                  white 18%,
                  hsla(var(--fed-purple)/.22) 42%,
                  hsla(var(--fed-purple)/.42) 68%,
                  hsla(var(--background)/.95) 100%
                )]
                dark:bg-[linear-gradient(
                  to_bottom,
                  hsla(var(--background)/.08) 0%,
                  hsla(var(--background)/.25) 25%,
                  hsla(var(--fed-purple)/.30) 55%,
                  hsla(var(--fed-purple)/.55) 80%,
                  hsla(var(--background)/.95) 100%
                )]
              "
            />
          </div>

          {/* IMAGEN DESKTOP */}
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

          {/* IMAGEN MOBILE */}
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
              {/* TEXTO */}
              <div className="max-w-[58rem] space-y-7 lg:pr-[18%]">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-border/70 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[hsl(var(--fed-purple))]" />
                  Fundación Educativa FEDESCA • Colegio San Carlos
                </div>

                {/* TÍTULO */}
                <h1
                  className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl"
                  style={{ color: 'hsl(var(--hero-ink))' } as React.CSSProperties}
                >
                  <span className="block sm:hidden">
                    Nunca es tarde para{' '}
                    <span className="text-[hsl(var(--fed-purple))]">seguir aprendiendo</span>
                  </span>

                  <span className="hidden sm:block">
                    <span className="block">Nunca es tarde para</span>
                    <span className="block text-[hsl(var(--fed-purple))]">
                      seguir aprendiendo
                    </span>
                  </span>
                </h1>

                {/* SUBTÍTULO */}
                <p
                  className="max-w-[44rem] text-pretty text-base leading-relaxed sm:text-lg"
                  style={{ color: 'hsl(var(--hero-ink-soft))' } as React.CSSProperties}
                >
                  Educación formal, <strong className="font-semibold">bachillerato por ciclos</strong>{' '}
                  y <strong className="font-semibold">programas técnicos</strong> diseñados para
                  jóvenes y adultos que quieren avanzar, trabajar y superarse.
                </p>

                {/* BOTONES (mismo estilo, SOLO cambia relleno) */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/oferta-academica"
                    className="
                      inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                      transition hover:-translate-y-0.5 active:translate-y-0
                      bg-[linear-gradient(135deg,hsla(var(--fed-purple)/.22),hsla(var(--fed-purple)/.12))]
                      ring-1 ring-inset ring-border/70 backdrop-blur
                      shadow-[0_22px_45px_-34px_hsla(var(--fed-purple)/0.45)]
                      hover:bg-[linear-gradient(135deg,hsla(var(--fed-purple)/.30),hsla(var(--fed-purple)/.18))]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(var(--fed-purple))]
                    "
                  >
                    Conocer programas
                  </Link>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                      transition hover:-translate-y-0.5 active:translate-y-0
                      bg-[linear-gradient(135deg,hsla(var(--fed-purple)/.16),hsla(var(--fed-purple)/.08))]
                      ring-1 ring-inset ring-border/70 backdrop-blur
                      hover:bg-[linear-gradient(135deg,hsla(var(--fed-purple)/.22),hsla(var(--fed-purple)/.12))]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(var(--fed-purple))]
                    "
                    aria-label="Hablar con un asesor por WhatsApp"
                    title="Hablar con un asesor por WhatsApp"
                  >
                    Hablar con un asesor
                  </a>
                </div>
              </div>

              <div className="hidden lg:block w-[40%]" />
            </div>
          </div>
        </FadeIn>
      </div>
    </PageHero>
  )
}
