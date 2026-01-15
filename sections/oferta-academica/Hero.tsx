'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import { basePath } from '@/lib/basePath'
import { useTheme } from 'next-themes'

type ThemeTone = {
  base: string
  accentOne: string
  accentTwo: string
  gradientFrom: string
  gradientVia: string
  gradientTo?: string
  tint: string
  ink: string
  inkSoft: string
}

type Slide = {
  key: string
  eyebrow?: string
  title: string
  subtitle: string
  palette: {
    light: ThemeTone
    dark: ThemeTone
  }
  image?: string
}

const SLIDE_MS = 5200

export function OfertaAcademicaHero() {
  const prefersReducedMotion = useReducedMotion()

  const slides: Slide[] = useMemo(
    () => [
      {
        key: 'formal',
        eyebrow: 'Oferta Académica',
        title: 'Educación Formal',
        subtitle:
          'Adquiere tu bachillerato académico conforme a la normativa educativa vigente.',
        palette: {
          light: {
            base: '#eef2ff',
            accentOne: 'rgba(207,220,255,0.78)',
            accentTwo: 'rgba(190,205,255,0.68)',
            gradientFrom: '#eef2ff',
            gradientVia: 'rgba(238,242,255,0.78)',
            gradientTo: 'rgba(238,242,255,0)',
            tint: 'linear-gradient(132deg, rgba(207,220,255,0.76), rgba(238,242,255,0.92))',
            ink: '236 41% 18%',
            inkSoft: '236 41% 18% / 0.72',
          },
          dark: {
            base: '#040714',
            accentOne: 'rgba(14,23,49,0.9)',
            accentTwo: 'rgba(26,43,85,0.88)',
            gradientFrom: '#040714',
            gradientVia: 'rgba(4,7,20,0.74)',
            gradientTo: 'rgba(4,7,20,0)',
            tint: 'linear-gradient(132deg, rgba(19,33,70,0.82), rgba(4,7,20,0.94))',
            ink: '0 0% 98%',
            inkSoft: '0 0% 98% / 0.74',
          },
        },
        image: `${basePath}/oferta/bachiller.webp`,
      },
      {
        key: 'tecnico',
        eyebrow: 'Oferta Académica',
        title: 'Formación Técnica Laboral',
        subtitle:
          'Contamos con diferentes programas técnicos orientados al mundo laboral.',
        palette: {
          light: {
            base: '#e6f6f9',
            accentOne: 'rgba(196,237,245,0.78)',
            accentTwo: 'rgba(180,229,240,0.68)',
            gradientFrom: '#e6f6f9',
            gradientVia: 'rgba(230,246,249,0.78)',
            gradientTo: 'rgba(230,246,249,0)',
            tint: 'linear-gradient(132deg, rgba(196,237,245,0.72), rgba(230,246,249,0.9))',
            ink: '215 33% 18%',
            inkSoft: '215 33% 18% / 0.7',
          },
          dark: {
            base: '#021015',
            accentOne: 'rgba(6,33,42,0.9)',
            accentTwo: 'rgba(16,53,65,0.88)',
            gradientFrom: '#021015',
            gradientVia: 'rgba(2,16,21,0.72)',
            gradientTo: 'rgba(2,16,21,0)',
            tint: 'linear-gradient(132deg, rgba(8,33,40,0.82), rgba(2,16,21,0.94))',
            ink: '210 24% 96%',
            inkSoft: '210 24% 96% / 0.72',
          },
        },
        image: `${basePath}/oferta/bachiller.webp`,
      },
      {
        key: 'fundamentacion',
        eyebrow: 'Oferta Académica',
        title: 'Cursos de Fundamentación',
        subtitle:
          'Fundamentación estratégica para equipos de vigilancia y seguridad.',
        palette: {
          light: {
            base: '#fdf4e4',
            accentOne: 'rgba(253,226,186,0.82)',
            accentTwo: 'rgba(251,215,161,0.7)',
            gradientFrom: '#fdf4e4',
            gradientVia: 'rgba(253,244,228,0.78)',
            gradientTo: 'rgba(253,244,228,0)',
            tint: 'linear-gradient(132deg, rgba(253,226,186,0.74), rgba(253,244,228,0.92))',
            ink: '32 42% 20%',
            inkSoft: '32 42% 20% / 0.72',
          },
          dark: {
            base: '#120a02',
            accentOne: 'rgba(38,18,4,0.9)',
            accentTwo: 'rgba(59,30,8,0.88)',
            gradientFrom: '#120a02',
            gradientVia: 'rgba(18,10,2,0.72)',
            gradientTo: 'rgba(18,10,2,0)',
            tint: 'linear-gradient(132deg, rgba(58,33,9,0.82), rgba(18,10,2,0.94))',
            ink: '45 41% 96%',
            inkSoft: '45 41% 96% / 0.75',
          },
        },
        image: `${basePath}/oferta/bachiller.webp`,
      },
      {
        key: 'reentrenamiento',
        eyebrow: 'Oferta Académica',
        title: 'Reentrenamiento Laboral',
        subtitle:
          'Actualiza las competencias de tu equipo de seguridad y talento humano.',
        palette: {
          light: {
            base: '#f5f0ff',
            accentOne: 'rgba(224,206,255,0.8)',
            accentTwo: 'rgba(206,188,254,0.7)',
            gradientFrom: '#f5f0ff',
            gradientVia: 'rgba(245,240,255,0.78)',
            gradientTo: 'rgba(245,240,255,0)',
            tint: 'linear-gradient(132deg, rgba(224,206,255,0.76), rgba(245,240,255,0.92))',
            ink: '258 36% 22%',
            inkSoft: '258 36% 22% / 0.7',
          },
          dark: {
            base: '#0a0415',
            accentOne: 'rgba(26,17,52,0.9)',
            accentTwo: 'rgba(46,31,84,0.88)',
            gradientFrom: '#0a0415',
            gradientVia: 'rgba(10,4,21,0.72)',
            gradientTo: 'rgba(10,4,21,0)',
            tint: 'linear-gradient(132deg, rgba(41,28,77,0.82), rgba(10,4,21,0.94))',
            ink: '0 0% 98%',
            inkSoft: '0 0% 98% / 0.74',
          },
        },
        image: `${basePath}/oferta/bachiller.webp`,
      },
      {
        key: 'complementario',
        eyebrow: 'Oferta Académica',
        title: 'Programas Complementarios',
        subtitle:
          'Servicio social y acompañamiento para la certificación de experiencia laboral.',
        palette: {
          light: {
            base: '#f2faf5',
            accentOne: 'rgba(210,238,223,0.8)',
            accentTwo: 'rgba(195,230,214,0.7)',
            gradientFrom: '#f2faf5',
            gradientVia: 'rgba(242,250,245,0.74)',
            gradientTo: 'rgba(242,250,245,0)',
            tint: 'linear-gradient(132deg, rgba(210,238,223,0.76), rgba(242,250,245,0.92))',
            ink: '165 28% 20%',
            inkSoft: '165 28% 20% / 0.7',
          },
          dark: {
            base: '#07130f',
            accentOne: 'rgba(14,37,28,0.9)',
            accentTwo: 'rgba(25,56,41,0.88)',
            gradientFrom: '#07130f',
            gradientVia: 'rgba(7,19,15,0.72)',
            gradientTo: 'rgba(7,19,15,0)',
            tint: 'linear-gradient(132deg, rgba(24,58,43,0.82), rgba(7,19,15,0.94))',
            ink: '140 15% 96%',
            inkSoft: '140 15% 96% / 0.72',
          },
        },
        image: `${basePath}/oferta/bachiller.webp`,
      },
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length)
  const next = () => setIndex((v) => (v + 1) % slides.length)

  useEffect(() => {
    if (prefersReducedMotion) return
    timerRef.current = window.setInterval(next, SLIDE_MS)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [prefersReducedMotion, slides.length])

  useEffect(() => setMounted(true), [])

  const slide = slides[index]
  const mode = mounted && resolvedTheme === 'dark' ? 'dark' : 'light'
  const tone = slide.palette[mode]

  const heroClassName = 'relative min-h-dvh flex items-center text-balance'
  const cssVars = {
    '--hero-ink': tone.ink,
    '--hero-ink-soft': tone.inkSoft,
  } as React.CSSProperties

  return (
    <div className="relative" style={cssVars}>
      <PageHero
        eyebrow={slide.eyebrow}
        title={slide.title}
        subtitle={slide.subtitle}
        className={heroClassName}
        background={
          <HeroCarouselBackground
            slideKey={slide.key}
            image={slide.image}
            tone={tone}
            reduced={!!prefersReducedMotion}
          />
        }
      />

      {/* Indicadores */}
      <div className="pointer-events-auto absolute inset-x-0 bottom-8 z-20">
        <div className="container-page flex justify-center gap-2">
          {slides.map((s, i) => {
            const active = i === index
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a ${s.title}`}
                className="
                  rounded-full p-2
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsla(var(--primary)/0.55)]
                  focus-visible:ring-offset-2 focus-visible:ring-offset-black/20
                "
              >
                <span
                  className={[
                    'block rounded-full transition-all duration-200',
                    active
                      ? 'h-2.5 w-2.5 bg-white dark:bg-slate-900'
                      : 'h-2 w-2 bg-white/55 hover:bg-white/80 dark:bg-slate-900/40 dark:hover:bg-slate-900/65',
                  ].join(' ')}
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function HeroCarouselBackground({
  slideKey,
  image,
  tone,
  reduced,
}: {
  slideKey: string
  image?: string
  tone: ThemeTone
  reduced: boolean
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slideKey}
          className="absolute inset-0"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.9, ease: 'easeOut' }}
        >
          <div
            className="absolute inset-0 transition duration-700"
            style={{ backgroundColor: tone.base }}
          />

          {image ? (
            <motion.div
              className="absolute inset-0 bg-cover bg-center opacity-65 mix-blend-multiply transition duration-[1400ms]"
              style={{ backgroundImage: `url(${image})` }}
              initial={reduced ? { scale: 1 } : { scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: reduced ? 0 : 1.4, ease: 'easeOut' }}
            />
          ) : null}

          <div
            className="pointer-events-none absolute inset-0 mix-blend-color transition duration-700"
            style={{ background: tone.tint }}
          />

          <div
            className="pointer-events-none absolute -top-[32%] left-[6%] h-[460px] w-[460px] rounded-full blur-[140px] opacity-80 transition duration-700"
            style={{ background: tone.accentOne }}
          />

          <div
            className="pointer-events-none absolute -bottom-[40%] right-[10%] h-[540px] w-[540px] rounded-full blur-[160px] opacity-80 transition duration-700"
            style={{ background: tone.accentTwo }}
          />

          <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(45,45,54,0.2)_1px,transparent_0)] [background-size:24px_24px]" />

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
            style={{
              background: `linear-gradient(0deg, ${tone.gradientFrom}, ${tone.gradientVia}, ${tone.gradientTo ?? 'transparent'})`,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
