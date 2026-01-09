// components/virtual-assistant/ChatWindow.tsx

'use client'

import React from 'react'
import { Bot, Send, X } from 'lucide-react'
import type { ChatMessage } from './types'
import { bubbleClasses } from './utils'

export function ChatWindow(props: {
  title: string
  subtitle: string
  messages: ChatMessage[]
  inputValue: string
  inputPlaceholder: string
  canSend: boolean
  onClose: () => void
  onInputChange: (v: string) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
messagesEndRef: React.RefObject<HTMLDivElement | null>
inputRef: React.RefObject<HTMLInputElement | null>

  chipsSlot?: React.ReactNode
}) {
  return (
    <div className="relative mb-1 w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-border/70 bg-background/95 shadow-[0_35px_90px_-45px_rgba(24,24,78,0.55)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[linear-gradient(135deg,hsla(var(--primary)/1),hsla(var(--accent)/1))] text-[hsl(var(--primary-foreground))] shadow-sm">
            <Bot size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold">{props.title}</p>
            <p className="text-xs text-muted-foreground">{props.subtitle}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={props.onClose}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted/60 text-muted-foreground transition hover:bg-muted"
          aria-label="Cerrar asistente virtual"
        >
          <X size={16} />
        </button>
      </div>

      <div
        className="max-h-[min(420px,calc(100vh-260px))] space-y-3 overflow-y-auto px-4 py-4 text-sm"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {props.messages.map((m) => (
          <div key={m.id} className="flex flex-col gap-1">
            <div className={['w-fit max-w-[88%] rounded-2xl px-4 py-3 shadow-sm', bubbleClasses(m.author)].join(' ')}>
              <div className="mb-1 flex items-center justify-between gap-3 text-[11px] opacity-80">
                <span className="font-semibold">{m.author === 'bot' ? 'Asistente' : 'Tú'}</span>
                <span>{m.timestamp}</span>
              </div>
              <div className="whitespace-pre-line leading-relaxed">{m.text}</div>
            </div>
          </div>
        ))}
        <div ref={props.messagesEndRef} />
      </div>

      {props.chipsSlot}

      <form onSubmit={props.onSubmit} className="flex items-center gap-2 border-t border-border/60 px-4 py-3">
        <input
          ref={props.inputRef}
          value={props.inputValue}
          onChange={(e) => props.onInputChange(e.target.value)}
          placeholder={props.inputPlaceholder}
          aria-label="Escribe tu mensaje"
          className="flex-1 rounded-full border border-border/60 bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <button
          type="submit"
          disabled={!props.canSend}
          className={[
            'inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,hsla(var(--primary)/1),hsla(var(--accent)/1))]',
            'text-[hsl(var(--primary-foreground))] shadow-[0_16px_36px_-18px_hsla(var(--primary)/0.65)] transition',
            'hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-18px_hsla(var(--primary)/0.75)]',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0',
          ].join(' ')}
          aria-label="Enviar mensaje"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  )
}
