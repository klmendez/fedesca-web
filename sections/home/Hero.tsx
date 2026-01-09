import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/Motion'
import PageHero from '@/components/PageHero'

export default function Hero() {
  return (
    <PageHero
      className="min-h-dvh pt-20 sm:pt-28 pb-[320px] sm:pb-[380px] lg:pb-0"
      media={
        <>
          {/* IMAGEN DESKTOP derecha */}
          <div className="pointer-events-none absolute right-0 bottom-0 z-0 hidden lg:block w-[38%] h-[78%]">
            <Image
              src="/1.webp"
              alt="Estudiantes FEDESCA"
              fill
              priority
              className="
                object-contain object-bottom
                [mask-image:linear-gradient(to_left,black_78%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_left,black_78%,transparent_100%)]
              "
              sizes="38vw"
            />
          </div>

          {/* IMAGEN MOBILE */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 lg:hidden h-[320px] sm:h-[380px]">
            <Image
              src="/1.png"
              alt="Estudiantes FEDESCA"
              fill
              priority
              className="
                object-contain object-bottom
                [mask-image:linear-gradient(to_top,black_82%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_top,black_82%,transparent_100%)]
              "
              sizes="100vw"
            />
          </div>
        </>
      }
    >
      {/* Content custom */}
      <div className="grid items-center">
        <FadeIn>
          <div className="max-w-[56rem] space-y-8 lg:pr-[34%]">
            <h1
              className="text-4xl font-semibold leading-[1.06] tracking-[-0.035em] sm:text-6xl text-balance"
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
                className="mt-4 block text-sm sm:text-base font-medium tracking-[0.18em] uppercase opacity-100"
                style={{ color: 'hsl(var(--hero-ink-soft))' } as React.CSSProperties}
              >
                FEDESCA
              </span>
            </h1>

            <p
              className="max-w-[42rem] text-base sm:text-lg leading-relaxed"
              style={{ color: 'hsl(var(--hero-ink-soft))' } as React.CSSProperties}
            >
              Educación que impulsa el <strong className="font-semibold">desarrollo social y comunitario</strong>, con
              programas de educación formal y para jóvenes y adultos que transforman vidas en Popayán y el Cauca.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/oferta-academica"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                  transition hover:-translate-y-0.5
                  bg-[linear-gradient(135deg,hsla(var(--primary)/1),hsla(var(--accent)/1))]
                  text-[hsl(var(--primary-foreground))]
                  shadow-[0_22px_45px_-28px_hsla(var(--primary)/0.70)]"
              >
                Ver oferta académica
              </Link>

              <Link
                href="/admisiones"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                  bg-background/55 text-[hsl(var(--hero-ink))]
                  ring-1 ring-inset ring-border/70
                  transition hover:-translate-y-0.5 hover:bg-background/65"
              >
                Inscripciones
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </PageHero>
  )
}
