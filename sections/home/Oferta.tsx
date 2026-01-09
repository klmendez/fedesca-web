'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/Motion'
import Card from '@/components/Card'

type Program = {
  id: string
  title: string
  category: 'Formal' | 'Salud' | 'Técnica y Tecnología' | 'Administrativa' | 'Seguridad'
  image: string
  badge?: string
  summary: string
  details: {
    modalidad?: string[]
    duracion?: string
    horario?: string
    dirigidoA?: string[]
    competencias?: string[]
    requisitos?: string[]
    certificacion?: string
  }
}

function CategoryLabel({ category }: { category: Program['category'] }) {
  const label =
    category === 'Formal'
      ? 'Educación Formal'
      : category === 'Técnica y Tecnología'
        ? 'Técnica y Tecnología'
        : category

  return (
    <span className="inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-[12px] font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
      {label}
    </span>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * ✅ PRO: Acento institucional
 * Usamos --fed-purple como acento (barra/outline) sin sacrificar legibilidad.
 */
function FedAccentBar() {
  return (
    <span
      className="inline-flex h-1.5 w-16 rounded-full"
      style={{ background: 'hsl(var(--fed-purple))' }}
    />
  )
}

function Modal({
  open,
  onClose,
  program,
}: {
  open: boolean
  onClose: () => void
  program: Program | null
}) {
  if (!open || !program) return null

  const d = program.details

  return (
    <div className="fixed inset-0 z-150">
      {/* overlay (blur fuerte) */}
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-black/45 backdrop-blur-[120px]"
      />

      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">
          <div className="relative h-48 sm:h-60">
            <Image src={program.image} alt={program.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[12px] font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
                  {program.category}
                </span>
                {program.badge && (
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[12px] font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
                    {program.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-2xl font-semibold leading-tight text-white drop-shadow sm:text-3xl">
                {program.title}
              </h3>

              <p className="mt-2 max-w-2xl text-sm text-white/90">{program.summary}</p>
            </div>
          </div>

          <div className="bg-background p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {!!d.modalidad?.length && (
                <div className="rounded-2xl border border-border/60 bg-background p-4">
                  <p className="text-sm font-medium text-foreground">Modalidad</p>
                  <BulletList items={d.modalidad} />
                </div>
              )}

              {(d.duracion || d.horario || d.certificacion) && (
                <div className="rounded-2xl border border-border/60 bg-background p-4">
                  <p className="text-sm font-medium text-foreground">Información general</p>
                  <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {d.duracion && (
                      <p>
                        <span className="text-foreground/90">Duración:</span> {d.duracion}
                      </p>
                    )}
                    {d.horario && (
                      <p>
                        <span className="text-foreground/90">Horario:</span> {d.horario}
                      </p>
                    )}
                    {d.certificacion && (
                      <p>
                        <span className="text-foreground/90">Certificación:</span> {d.certificacion}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {!!d.dirigidoA?.length && (
                <div className="rounded-2xl border border-border/60 bg-background p-4">
                  <p className="text-sm font-medium text-foreground">Dirigido a</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {d.dirigidoA.map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {!!d.requisitos?.length && (
                <div className="rounded-2xl border border-border/60 bg-background p-4">
                  <p className="text-sm font-medium text-foreground">Requisitos</p>
                  <BulletList items={d.requisitos} />
                </div>
              )}

              {!!d.competencias?.length && (
                <div className="sm:col-span-2 rounded-2xl border border-border/60 bg-background p-4">
                  <p className="text-sm font-medium text-foreground">Competencias / Contenidos</p>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                    {d.competencias.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button onClick={onClose} className="btn btn-secondary w-full sm:w-auto">
                Cerrar
              </button>
              <Link href="/contacto" className="btn w-full sm:w-auto">
                Solicitar información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OfertaTiles() {
  const programs: Program[] = useMemo(
    () => [
      {
        id: 'bachillerato',
        title: 'Bachillerato Académico',
        category: 'Formal',
        image: '/oferta/bachillerato.webp',
        badge: 'Colegio San Carlos',
        summary: 'Educación formal con acompañamiento y proyección a educación superior.',
        details: {
          modalidad: ['Educación Formal'],
          duracion: 'Según ciclo / grado',
          horario: 'Sabatina / Dominical (según grupo)',
          dirigidoA: ['Jóvenes', 'Adultos'],
          requisitos: ['Documento de identidad', 'Certificados previos (si aplica)'],
          certificacion: 'Título de Bachiller Académico (según normatividad aplicable)',
        },
      },
      {
        id: 'aux-enfermeria',
        title: 'Auxiliar de Enfermería',
        category: 'Salud',
        image: '/oferta/aux-enf.webp',
        summary: 'Formación técnica con enfoque práctico y competencias para el sector salud.',
        details: {
          duracion: 'Por definir',
          horario: 'Por definir',
          dirigidoA: ['Jóvenes', 'Adultos'],
          competencias: ['Atención al usuario', 'Bioseguridad', 'Apoyo en procedimientos básicos'],
          requisitos: ['Documento de identidad', 'Entrevista / proceso de admisión (si aplica)'],
          certificacion: 'Certificado de formación (según programa)',
        },
      },
      {
        id: 'sistemas',
        title: 'Sistemas Informáticos',
        category: 'Técnica y Tecnología',
        image: '/oferta/sistemas-inf.webp',
        summary: 'Bases de informática, herramientas ofimáticas y soporte para entornos productivos.',
        details: {
          duracion: 'Por definir',
          horario: 'Por definir',
          dirigidoA: ['Jóvenes', 'Adultos'],
          competencias: ['Ofimática', 'Soporte básico', 'Fundamentos de redes'],
          requisitos: ['Documento de identidad'],
          certificacion: 'Certificado de formación (según programa)',
        },
      },
      {
        id: 'mecanico-motos',
        title: 'Mecánico de Motos',
        category: 'Técnica y Tecnología',
        image: '/oferta/mecanico-motos.webp',
        summary: 'Diagnóstico, mantenimiento y reparación con enfoque práctico.',
        details: {
          duracion: 'Por definir',
          horario: 'Por definir',
          dirigidoA: ['Jóvenes', 'Adultos'],
          competencias: ['Mantenimiento preventivo', 'Diagnóstico básico', 'Seguridad industrial'],
          requisitos: ['Documento de identidad'],
          certificacion: 'Certificado de formación (según programa)',
        },
      },
      {
        id: 'administrativo-archivo',
        title: 'Técnico Administrativo y Archivo',
        category: 'Administrativa',
        image: '/oferta/administrativo-archivo.webp',
        summary: 'Organización documental, apoyo administrativo y procesos de oficina.',
        details: {
          duracion: 'Por definir',
          horario: 'Por definir',
          dirigidoA: ['Jóvenes', 'Adultos'],
          competencias: ['Gestión documental', 'Atención al cliente', 'Herramientas de oficina'],
          requisitos: ['Documento de identidad'],
          certificacion: 'Certificado de formación (según programa)',
        },
      },
      {
        id: 'vigilancia',
        title: 'Vigilancia',
        category: 'Seguridad',
        image: '/oferta/vigilancia.webp',
        summary: 'Formación orientada a protocolos, prevención y operación de seguridad.',
        details: {
          duracion: 'Por definir',
          horario: 'Por definir',
          dirigidoA: ['Jóvenes', 'Adultos'],
          competencias: ['Protocolos', 'Prevención', 'Operación de medios (si aplica)'],
          requisitos: ['Documento de identidad', 'Requisitos del sector (si aplica)'],
          certificacion: 'Certificado de formación (según programa)',
        },
      },
    ],
    [],
  )

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Program | null>(null)

  const onOpen = (p: Program) => {
    setSelected(p)
    setOpen(true)
  }

  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-primary/8 via-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3 text-balance">
              <h2 className="text-3xl sm:text-4xl">Oferta Académica</h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Da clic sobre un programa para ver su información, requisitos y detalles.
              </p>
            </div>

            <Link href="/oferta-academica" className="hidden md:inline-flex btn btn-secondary">
              Ver detalle
            </Link>
          </div>

          {/* ✅ Cards PRO */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => onOpen(p)}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {/* Más compacto */}
                <div className="relative h-40 sm:h-44 lg:h-48">
                  {/* Imagen: blur fuerte + control */}
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="
                      object-cover transition
                      blur-[10px] brightness-[0.78] contrast-[1.12] saturate-[0.95]
                      dark:brightness-[0.62] dark:contrast-[1.15]
                      group-hover:blur-[6px] group-hover:brightness-[0.85]
                      dark:group-hover:brightness-[0.7]
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* Overlay para calidad + look */}
                  <div className="absolute inset-0 bg-black/35 dark:bg-black/55" />

                  {/* Scrim inferior para legibilidad */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                  {/* Contenido encima (blanco, legible) */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      {p.badge && (
                        <span className="inline-flex rounded-full bg-white/12 px-3 py-1 text-[12px] font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
                          {p.badge}
                        </span>
                      )}
                      <CategoryLabel category={p.category} />
                    </div>

                    <div className="mt-3 flex items-end justify-between gap-3">
                      <h3 className="text-xl font-semibold leading-tight text-white drop-shadow sm:text-2xl">
                        {p.title}
                      </h3>
                    </div>

                    <div className="mt-3">
                      {/* acento institucional */}
                      <FedAccentBar />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/oferta-academica" className="btn btn-secondary w-full justify-center">
              Ver más información
            </Link>
          </div>
        </FadeIn>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} program={selected} />
    </section>
  )
}
