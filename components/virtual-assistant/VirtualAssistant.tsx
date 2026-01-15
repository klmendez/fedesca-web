// components/virtual-assistant/VirtualAssistant.tsx

'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Bot } from 'lucide-react'
import { FEDESCA, STATE_KEY, STORAGE_KEY } from './constants'
import { ChatWindow } from './ChatWindow'
import { QuickChips } from './QuickChips'
import type { ChatMessage, VAState, Chip } from './types'
import { buildTranscript, nowTimestamp, uid } from './utils'
import { loadJSON, saveJSON } from './storage'
import { getChips, getHeaderSubtitle, handleChipClick, handleUserTextInput } from './botEngine'
import { sendToFormSubmit } from './formsubmit'

export default function VirtualAssistant() {
  const [open, setOpen] = useState(false)
  const [pendingMessage, setPendingMessage] = useState('')

  const [state, setState] = useState<VAState>(() =>
    loadJSON<VAState>(STATE_KEY, { mode: 'ask_city', pendingSend: null }),
  )

  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    loadJSON<ChatMessage[]>(STORAGE_KEY, [
      {
        id: uid(),
        author: 'bot',
        text: `Hola, soy tu asistente virtual ${FEDESCA.name}.\n\nPara ayudarte mejor, primero dime tu ciudad.`,
        timestamp: nowTimestamp(),
        status: 'sent',
      },
    ]),
  )

  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [])

  useEffect(() => saveJSON(STORAGE_KEY, messages), [messages])
  useEffect(() => saveJSON(STATE_KEY, state), [state])

  useEffect(() => {
    if (!open) return
    scrollToBottom()
    requestAnimationFrame(() => inputRef.current?.focus())
  }, [open, messages.length, scrollToBottom])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const canSend = pendingMessage.trim().length > 0
  const subtitle = useMemo(() => getHeaderSubtitle(state), [state])
  const chips = useMemo(() => getChips(state), [state])

  const inputPlaceholder = useMemo(() => {
    if (state.mode === 'ask_city') return 'Escribe tu ciudad…'
    if (state.mode === 'collect_name') return 'Escribe tu nombre…'
    if (state.mode === 'collect_phone') return 'Escribe tu celular…'
    return 'Escribe tu mensaje…'
  }, [state.mode])

  const replaceLastTypingWithBotText = useCallback((text: string) => {
    setMessages((prev) => {
      const idx = [...prev].reverse().findIndex((m) => m.status === 'typing' && m.author === 'bot')
      if (idx === -1) {
        return [...prev, { id: uid(), author: 'bot', text, timestamp: nowTimestamp(), status: 'sent' }]
      }
      const realIndex = prev.length - 1 - idx
      const next = [...prev]
      next[realIndex] = { ...next[realIndex], text, timestamp: nowTimestamp(), status: 'sent' }
      return next
    })
  }, [])

  const addTyping = useCallback(() => {
    setMessages((prev) => [...prev, { id: uid(), author: 'bot', text: 'Escribiendo…', timestamp: nowTimestamp(), status: 'typing' }])
  }, [])

 const handleEngineResult = useCallback(
  async (
    result: ReturnType<typeof handleUserTextInput> | ReturnType<typeof handleChipClick>,
    userTextForSend?: string,
    messagesSnapshot?: ChatMessage[],
  ) => {
    if (result.type === 'reply') {
      replaceLastTypingWithBotText(result.reply)
      setState(result.nextState)
      return
    }

    // reply_and_send
    replaceLastTypingWithBotText(result.reply)
    setState(result.nextState)

    try {
      const safeMessages = (messagesSnapshot ?? messages).filter((m) => m.status !== 'typing')
      const transcript = buildTranscript(safeMessages)

      // IMPORTANTE: usar el estado que devuelve el engine (ya actualizado)
      const st = result.nextState

      await sendToFormSubmit({
        subject: result.send.subject,
        category: result.send.category,
        name: st.leadName || 'No indicado',
        phone: st.leadPhone || 'No indicado',
        city: st.city,
        program: st.program,
        mode: st.mode,
        lastUserMessage: userTextForSend || result.send.lastUserMessage,
        conversation: transcript,
      })

      setMessages((prev) => [
        ...prev.filter((m) => m.status !== 'typing'),
        {
          id: uid(),
          author: 'bot',
          text: 'Listo. La conversación fue enviada para seguimiento.',
          timestamp: nowTimestamp(),
          status: 'sent',
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev.filter((m) => m.status !== 'typing'),
        {
          id: uid(),
          author: 'bot',
          text: 'No pude enviar la solicitud en este momento. Intenta nuevamente.',
          timestamp: nowTimestamp(),
          status: 'sent',
        },
      ])
    }
  },
  [messages, replaceLastTypingWithBotText],
)


 const onSubmit = useCallback(
  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = pendingMessage.trim()
    if (!trimmed) return

    const userMsg: ChatMessage = { id: uid(), author: 'user', text: trimmed, timestamp: nowTimestamp(), status: 'sent' }
    const typingMsg: ChatMessage = { id: uid(), author: 'bot', text: 'Escribiendo…', timestamp: nowTimestamp(), status: 'typing' }

    const nextMessages = [...messages, userMsg, typingMsg]

    setMessages(nextMessages)
    setPendingMessage('')

    const result = handleUserTextInput({ text: trimmed, state, messages: nextMessages })
    await handleEngineResult(result, trimmed, nextMessages)
  },
  [handleEngineResult, messages, pendingMessage, state],
)


  const onChipSelect = useCallback(
  async (chip: Chip) => {
    const userMsg: ChatMessage = { id: uid(), author: 'user', text: chip.label, timestamp: nowTimestamp(), status: 'sent' }
    const typingMsg: ChatMessage = { id: uid(), author: 'bot', text: 'Escribiendo…', timestamp: nowTimestamp(), status: 'typing' }

    const nextMessages = [...messages, userMsg, typingMsg]
    setMessages(nextMessages)

    const result = handleChipClick(state, chip.value)
    await handleEngineResult(result, chip.label, nextMessages)
  },
  [handleEngineResult, messages, state],
)


  const toggle = useCallback(() => setOpen((p) => !p), [])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open ? (
        <ChatWindow
          title={`Asistente Virtual ${FEDESCA.name}`}
          subtitle={subtitle}
          messages={messages}
          inputValue={pendingMessage}
          inputPlaceholder={inputPlaceholder}
          canSend={canSend}
          onClose={toggle}
          onInputChange={setPendingMessage}
          onSubmit={onSubmit}
          messagesEndRef={messagesEndRef}
          inputRef={inputRef}
          chipsSlot={<QuickChips chips={chips} onSelect={onChipSelect} />}
        />
      ) : null}

      <button
        type="button"
        onClick={toggle}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[hsl(var(--fed-purple))] text-white shadow-[0_18px_50px_-18px_hsla(var(--fed-purple)/0.65)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_-20px_hsla(var(--fed-purple)/0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsla(var(--fed-purple)/1)]"
        aria-label={open ? 'Cerrar asistente' : 'Abrir asistente virtual'}
      >
        <Bot size={22} />
        <span className="pointer-events-none absolute right-full mr-3 hidden translate-y-1 rounded-full bg-[hsl(var(--fed-purple))] px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg shadow-[hsla(var(--fed-purple)/0.45)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 lg:block">
          {open ? 'Cerrar' : 'Asistente'}
        </span>
      </button>
    </div>
  )
}
