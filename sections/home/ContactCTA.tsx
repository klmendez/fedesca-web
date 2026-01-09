'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FadeIn } from '@/components/Motion'

const SUGGESTIONS: Record<string, string> = {
  programas:
    'Quisiera recibir información sobre los programas académicos disponibles, requisitos y certificaciones.',
  horarios:
    'Me gustaría conocer los horarios, jornadas y duración de los programas.',
  inscripcion:
    'Deseo información sobre el proceso de inscripción, requisitos y costos.',
  sedes:
    'Quisiera saber en qué sedes o modalidades se ofrecen los programas.',
  general:
    'Quisiera recibir más información general sobre la oferta educativa de FEDESCA.',
}

export default function ContactCTA() {
  const [topic, setTopic] = useState('general')
  const [message, setMessage] = useState(SUGGESTIONS.general)

  const onTopicChange = (value: string) => {
    setTopic(value)
    setMessage(SUGGESTIONS[value] || '')
  }

  return (
    <section className="relative py-20">
      <div className="container-page">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* IZQUIERDA */}
            <div className="space-y-8">
              {/* Logos */}
              <div className="flex flex-wrap items-center gap-6">
                <Image
                  src="/2.webp"
                  alt="Fundación Educativa FEDESCA"
                  width={500}
                  height={80}
                  priority
                />

              </div>

              {/* Acento */}
              <span
                className="inline-flex h-1.5 w-16 rounded-full"
                style={{ background: 'hsl(var(--fed-purple))' }}
              />

              {/* Texto */}
              <div className="max-w-xl space-y-4">
                <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                  ¿Quieres más información?
                </h2>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Escríbenos y te orientamos sobre programas, horarios, sedes y proceso de inscripción.
                  Nuestro equipo te acompaña en cada paso.
                </p>
              </div>
            </div>

            {/* DERECHA – FORMULARIO */}
            <form
              action="https://formsubmit.co/klmendez@unimayor.edu.co"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="Contacto desde FEDESCA Web" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium">Número de celular</label>
                  <input
                    type="tel"
                    name="celular"
                    placeholder="Ej: +57 300 123 4567"
                    className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Opcional. Si lo deseas, te contactamos también por WhatsApp o llamada.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">¿Qué información necesitas?</label>
                <select
                  name="tema"
                  value={topic}
                  onChange={(e) => onTopicChange(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                >
                  <option value="general">Información general</option>
                  <option value="programas">Programas académicos</option>
                  <option value="horarios">Horarios y duración</option>
                  <option value="inscripcion">Proceso de inscripción</option>
                  <option value="sedes">Sedes y modalidades</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Mensaje</label>
                <textarea
                  name="mensaje"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full resize-none rounded-xl border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  Sugerencia automática según tu selección (puedes editarla).
                </p>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
