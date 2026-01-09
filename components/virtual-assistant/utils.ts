// components/virtual-assistant/utils.ts

import { TIME_FORMAT, FEDESCA } from './constants'
import type { ChatMessage } from './types'

export function nowTimestamp() {
  return new Date().toLocaleTimeString('es-CO', TIME_FORMAT)
}

export function uid() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID()
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function list(items: string[]) {
  return items.map((x) => `• ${x}`).join('\n')
}

export function buildTranscript(messages: ChatMessage[]) {
  return messages
    .filter((m) => m.status !== 'typing')
    .map((m) => `[${m.timestamp}] ${m.author === 'bot' ? 'Asistente' : 'Usuario'}: ${m.text}`)
    .join('\n')
}

export function programSearch(userText: string) {
  const t = normalize(userText)
  const all = [
    ...FEDESCA.programs.formal,
    ...FEDESCA.programs.health,
    ...FEDESCA.programs.tech,
    ...FEDESCA.programs.admin,
    ...FEDESCA.programs.security,
  ]

  const hits = all.filter((p) => {
    const pn = normalize(p)
    if (!t) return false
    return pn.includes(t) || t.split(/\s+/).some((w) => w.length >= 4 && pn.includes(w))
  })

  return hits.slice(0, 6)
}

export function bubbleClasses(author: 'bot' | 'user') {
  return author === 'user'
    ? 'ml-auto bg-[linear-gradient(135deg,hsla(var(--primary)/1),hsla(var(--accent)/1))] text-[hsl(var(--primary-foreground))]'
    : 'mr-auto bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]'
}

export function chipBase() {
  return [
    'inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-2 text-xs',
    'text-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-muted',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsla(var(--primary)/1)]',
  ].join(' ')
}
