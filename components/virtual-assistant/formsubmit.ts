// components/virtual-assistant/formsubmit.ts

import { FORM_SUBMIT_AJAX_ENDPOINT } from './constants'

export async function sendToFormSubmit(payload: {
  subject: string
  category: string
  name: string
  phone: string
  city?: string
  program?: string
  mode?: string
  lastUserMessage?: string
  conversation: string
}) {
  const res = await fetch(FORM_SUBMIT_AJAX_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: payload.subject,
      _template: 'table',
      _captcha: 'false',

      category: payload.category,
      name: payload.name,
      phone: payload.phone,
      city: payload.city ?? '',
      program: payload.program ?? '',
      mode: payload.mode ?? '',
      last_user_message: payload.lastUserMessage ?? '',
      conversation: payload.conversation,
    }),
  })

  const data = await res.json().catch(() => null)
  if (!res.ok) throw new Error(data?.message || 'FormSubmit error')
  return data
}
