// components/virtual-assistant/types.ts

import type { ReactNode } from 'react'

export type Author = 'bot' | 'user'
export type Status = 'sent' | 'typing'

export interface ChatMessage {
  id: string
  author: Author
  text: string
  timestamp: string
  status?: Status
}

export type Mode =
  | 'ask_city'
  | 'collect_name'
  | 'collect_phone'
  | 'home'
  | 'offer_menu'
  | 'offer_area'
  | 'program_selected'
  | 'services_menu'
  | 'advisor'
  | 'legal'
  | 'free_text'
  | 'experience_time'
  | 'experience_topic'
  | 'experience_summary'

export type OfferArea = 'formal' | 'health' | 'tech' | 'admin' | 'security'

export type ProgramAction = 'inscription' | 'requirements' | 'duration' | 'modality' | 'pricing' | 'advisor'

export interface Chip {
  id: string
  label: string
  value: string
  icon?: ReactNode
}

/**
 * Cuando el bot necesita enviar información
 * pero antes debe pedir nombre y celular
 */
export type PendingSend =
  | null
  | {
      subject: string
      category: 'asesor' | 'experiencia_laboral'
      lastUserMessage?: string
      resumeModeAfterContact: Mode
      continuePrompt: string
    }

export interface VAState {
  mode: Mode
  city?: string
  offerArea?: OfferArea
  program?: string

  // Experiencia laboral
  expTime?: string
  expTopic?: string

  // Datos de contacto
  leadName?: string
  leadPhone?: string

  pendingSend?: PendingSend
}
