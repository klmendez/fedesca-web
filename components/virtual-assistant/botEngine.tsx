// components/virtual-assistant/botEngine.ts

import React from 'react'
import { MapPin, GraduationCap, Briefcase, Scale, UserRound, Building2, Send } from 'lucide-react'
import { FEDESCA } from './constants'
import type { Chip, OfferArea, ProgramAction, VAState, PendingSend, ChatMessage } from './types'
import { list, pick, programSearch } from './utils'

export type EngineResult =
  | { type: 'reply'; reply: string; nextState: VAState }
  | {
      type: 'reply_and_send'
      reply: string
      nextState: VAState
      send: {
        subject: string
        category: 'asesor' | 'experiencia_laboral'
        lastUserMessage?: string
      }
    }

function homeMessage(city?: string) {
  return `Perfecto${city ? `, en ${city}` : ''}. ¿Qué deseas hacer ahora?`
}

export function getHeaderSubtitle(state: VAState) {
  if (state.mode === 'ask_city') return 'Primero confirmemos tu ciudad'
  if (state.program) return `Programa: ${state.program}`
  if (state.city) return `Ciudad: ${state.city}`
  return 'Asistente virtual'
}

export function getChips(state: VAState): Chip[] {
  if (state.mode === 'ask_city') {
    const fixed = FEDESCA.cities.map((c) => ({
      id: `city-${c}`,
      label: c,
      value: c,
      icon: <MapPin size={14} />,
    }))
    return [...fixed, { id: 'city-otra', label: 'Otra', value: 'Otra', icon: <MapPin size={14} /> }]
  }

  if (state.mode === 'home') {
    return [
      { id: 'home-offer', label: 'Oferta académica', value: 'offer', icon: <GraduationCap size={14} /> },
      { id: 'home-services', label: 'Servicios', value: 'services', icon: <Briefcase size={14} /> },
      { id: 'home-advisor', label: 'Hablar con un asesor', value: 'advisor', icon: <UserRound size={14} /> },
      { id: 'home-legal', label: 'Reconocimiento legal', value: 'legal', icon: <Scale size={14} /> },
    ]
  }

  if (state.mode === 'offer_menu') {
    return [
      { id: 'offer-formal', label: 'Educación formal', value: 'formal', icon: <GraduationCap size={14} /> },
      { id: 'offer-health', label: 'Salud', value: 'health', icon: <GraduationCap size={14} /> },
      { id: 'offer-tech', label: 'Técnica y tecnología', value: 'tech', icon: <GraduationCap size={14} /> },
      { id: 'offer-admin', label: 'Administrativa', value: 'admin', icon: <GraduationCap size={14} /> },
      { id: 'offer-security', label: 'Seguridad y vigilancia', value: 'security', icon: <GraduationCap size={14} /> },
    ]
  }

  if (state.mode === 'program_selected') {
    return [
      { id: 'act-ins', label: 'Inscripción', value: 'inscription', icon: <Send size={14} /> },
      { id: 'act-req', label: 'Requisitos', value: 'requirements', icon: <Building2 size={14} /> },
      { id: 'act-mod', label: 'Modalidad', value: 'modality', icon: <Building2 size={14} /> },
      { id: 'act-dur', label: 'Duración', value: 'duration', icon: <Building2 size={14} /> },
      { id: 'act-pri', label: 'Costos', value: 'pricing', icon: <Building2 size={14} /> },
      { id: 'act-adv', label: 'Asesor', value: 'advisor', icon: <UserRound size={14} /> },
    ]
  }

  if (state.mode === 'services_menu') {
    return [
      { id: 'svc-exp', label: 'Experiencia laboral', value: 'experiencia', icon: <Briefcase size={14} /> },
      { id: 'svc-soc', label: 'Servicio social', value: 'servicio social', icon: <Briefcase size={14} /> },
      { id: 'svc-com', label: 'Comunitario', value: 'comunitario', icon: <Briefcase size={14} /> },
      { id: 'go-home', label: 'Inicio', value: '__home__' },
    ]
  }

  // En modo captura nombre/celular o pantallas de detalle: mostrar volver a inicio
  return [{ id: 'go-home', label: 'Inicio', value: '__home__' }]
}

function ensureContact(nextState: VAState, pending: Exclude<PendingSend, null>): EngineResult {
  const st = { ...nextState, pendingSend: pending }

  if (!st.leadName) {
    return { type: 'reply', reply: 'Antes de enviar tu solicitud, dime tu nombre completo.', nextState: { ...st, mode: 'collect_name' } }
  }

  if (!st.leadPhone) {
    return { type: 'reply', reply: 'Gracias. Ahora dime tu número de celular.', nextState: { ...st, mode: 'collect_phone' } }
  }

  // Ya tiene todo, se queda en el modo indicado por el flujo
  return { type: 'reply', reply: pending.continuePrompt, nextState: { ...st, mode: pending.resumeModeAfterContact } }
}

export function handleChipClick(state: VAState, chipValue: string): EngineResult {
  if (chipValue === '__home__') {
    const nextState: VAState = { ...state, mode: 'home', offerArea: undefined, program: undefined, expTime: undefined, expTopic: undefined, pendingSend: null }
    return { type: 'reply', reply: homeMessage(nextState.city), nextState }
  }

  // Ciudad
  if (state.mode === 'ask_city') {
    if (chipValue === 'Otra') {
      const nextState: VAState = { ...state, city: undefined, mode: 'ask_city' }
      return { type: 'reply', reply: 'Escríbeme tu ciudad para continuar.', nextState }
    }
    const nextState: VAState = { ...state, city: chipValue, mode: 'home' }
    return { type: 'reply', reply: `Listo. Ciudad registrada: ${chipValue}.\n\n${homeMessage(chipValue)}`, nextState }
  }

  // Home
  if (state.mode === 'home') {
    if (chipValue === 'offer') return { type: 'reply', reply: 'Oferta académica. Elige un área:', nextState: { ...state, mode: 'offer_menu' } }
    if (chipValue === 'services') return { type: 'reply', reply: 'Servicios. Elige una opción:', nextState: { ...state, mode: 'services_menu' } }

    if (chipValue === 'legal') {
      return {
        type: 'reply',
        reply:
          'Información institucional / Reconocimiento legal\n' +
          'Formación académica, técnica, laboral y comunitaria.\n' +
          'Educación formal y para el trabajo.\n\n' +
          `Nota: ${FEDESCA.legalNote}`,
        nextState: { ...state, mode: 'legal' },
      }
    }

    if (chipValue === 'advisor') {
      const pending: PendingSend = {
        subject: `Solicitud - Asesor - ${FEDESCA.name}`,
        category: 'asesor',
        resumeModeAfterContact: 'advisor',
        continuePrompt: 'Perfecto. Ahora cuéntame qué necesitas (inscripción, requisitos, costos, etc.) y el programa de interés.',
      }
      return ensureContact(state, pending)
    }
  }

  // Servicios
  if (state.mode === 'services_menu') {
    if (chipValue === 'experiencia') {
      return {
        type: 'reply',
        reply: 'Experiencia laboral\n' + list(FEDESCA.programs.experience) + '\n\nPrimero: ¿De cuánto tiempo necesitas la experiencia?\nEjemplos: 6 meses, 1 año, 2 años.',
        nextState: { ...state, mode: 'experience_time', expTime: undefined, expTopic: undefined },
      }
    }
    if (chipValue === 'servicio social') {
      return {
        type: 'reply',
        reply:
          'Servicio social\nDisponible según programa y sede.\n\nDime tu nivel o programa (por ejemplo: Bachillerato) y te oriento.\n\n' +
          `Nota: ${FEDESCA.legalNote}`,
        nextState: { ...state, mode: 'free_text' },
      }
    }
    if (chipValue === 'comunitario') {
      return {
        type: 'reply',
        reply:
          'Formación comunitaria\nDisponible según sede.\n\nCuéntame qué buscas (tema/objetivo) y tu ciudad.\n\n' +
          `Nota: ${FEDESCA.legalNote}`,
        nextState: { ...state, mode: 'free_text' },
      }
    }
  }

  // Oferta: menú -> lista
  if (state.mode === 'offer_menu') {
    const area = chipValue as OfferArea
    const titleMap: Record<OfferArea, string> = {
      formal: 'Educación formal',
      health: 'Salud',
      tech: 'Técnica y tecnología',
      admin: 'Administrativa',
      security: 'Seguridad y vigilancia',
    }
    const listMap: Record<OfferArea, string[]> = {
      formal: FEDESCA.programs.formal,
      health: FEDESCA.programs.health,
      tech: FEDESCA.programs.tech,
      admin: FEDESCA.programs.admin,
      security: FEDESCA.programs.security,
    }

    return {
      type: 'reply',
      reply:
        `${titleMap[area]}\n${list(listMap[area])}\n\n` +
        'Escribe el nombre del programa que te interesa.\n' +
        'Luego podrás ver: inscripción, requisitos, duración, modalidad, costos o asesor.\n\n' +
        `Ciudad: ${state.city ?? 'Pendiente'}\nNota: ${FEDESCA.legalNote}`,
      nextState: { ...state, mode: 'offer_area', offerArea: area, program: undefined },
    }
  }

  // Acciones programa
  if (state.mode === 'program_selected') {
    const action = chipValue as ProgramAction
    const program = state.program ?? 'el programa'

    if (action === 'advisor') {
      const pending: PendingSend = {
        subject: `Solicitud - Asesor - ${FEDESCA.name}`,
        category: 'asesor',
        resumeModeAfterContact: 'advisor',
        continuePrompt: 'Perfecto. Ahora describe tu solicitud (programa y qué necesitas).',
      }
      return ensureContact(state, pending)
    }

    const infoMap: Record<ProgramAction, string> = {
      inscription: `Inscripción - ${program}\nEnvía: nivel de escolaridad, jornada y un teléfono de contacto.\nCiudad: ${state.city ?? 'Pendiente'}`,
      requirements: `Requisitos - ${program}\nConfirma: ciudad/sede, modalidad y nivel de escolaridad.\nNota: ${FEDESCA.legalNote}`,
      pricing: `Costos - ${program}\nConfirma: ciudad/sede y jornada. Si quieres cotización exacta, deja un teléfono.\nNota: ${FEDESCA.legalNote}`,
      modality: `Modalidad - ${program}\nPuede variar por sede. Confirma tu ciudad y te orientamos.\nNota: ${FEDESCA.legalNote}`,
      duration: `Duración - ${program}\nDepende del plan de estudios y la sede. Si deseas confirmación oficial, deja un teléfono.\nNota: ${FEDESCA.legalNote}`,
      advisor: '',
    }

    return { type: 'reply', reply: infoMap[action], nextState: { ...state, mode: 'free_text' } }
  }

  return { type: 'reply', reply: homeMessage(state.city), nextState: { ...state, mode: 'home' } }
}

export function handleUserTextInput(params: { text: string; state: VAState; messages: ChatMessage[] }): EngineResult {
  const { text, state, messages } = params
  const trimmed = text.trim()
  const city = state.city

  // Captura ciudad escrita
  if (state.mode === 'ask_city') {
    const nextState: VAState = { ...state, city: trimmed, mode: 'home' }
    return { type: 'reply', reply: `Gracias. Ciudad registrada: ${trimmed}.\n\n${homeMessage(trimmed)}`, nextState }
  }

  // Captura nombre
  if (state.mode === 'collect_name') {
    const pending = state.pendingSend
    const nextState: VAState = { ...state, leadName: trimmed, mode: 'collect_phone' }
    return { type: 'reply', reply: 'Gracias. Ahora dime tu número de celular.', nextState: { ...nextState, pendingSend: pending } }
  }

  // Captura celular
  if (state.mode === 'collect_phone') {
    const pending = state.pendingSend
    const nextState: VAState = { ...state, leadPhone: trimmed, mode: pending?.resumeModeAfterContact ?? 'home' }
    return { type: 'reply', reply: pending ? pending.continuePrompt : homeMessage(city), nextState: { ...nextState, pendingSend: pending } }
  }

  // Experiencia laboral
  if (state.mode === 'experience_time') {
    return { type: 'reply', reply: 'Perfecto. Ahora dime: ¿sobre qué es la experiencia?\nEjemplos: enfermería, farmacia, sistemas, seguridad, administración.', nextState: { ...state, expTime: trimmed, mode: 'experience_topic' } }
  }

  if (state.mode === 'experience_topic') {
    const nextBase: VAState = { ...state, expTopic: trimmed, mode: 'experience_summary' }

    const pending: PendingSend = {
      subject: `Solicitud - Experiencia laboral - ${FEDESCA.name}`,
      category: 'experiencia_laboral',
      lastUserMessage: trimmed,
      resumeModeAfterContact: 'experience_summary',
      continuePrompt: 'Listo. Ya tengo tus datos. En un momento envío la solicitud para seguimiento.',
    }

    // Exigir contacto antes de enviar
    if (!nextBase.leadName || !nextBase.leadPhone) return ensureContact(nextBase, pending)

    return {
      type: 'reply_and_send',
      reply:
        'Listo. Resumen de tu solicitud:\n' +
        `• Ciudad: ${city ?? 'No indicada'}\n` +
        `• Experiencia: ${state.expTime ?? 'No indicada'}\n` +
        `• Sobre: ${trimmed}\n\n` +
        'Enviando conversación para seguimiento…',
      nextState: { ...nextBase, pendingSend: null },
      send: { subject: pending.subject, category: 'experiencia_laboral', lastUserMessage: trimmed },
    }
  }

  // Asesor: si ya está en advisor y escribe el caso => enviar (exigiendo contacto si falta)
  if (state.mode === 'advisor') {
    const pending: PendingSend = {
      subject: `Solicitud - Asesor - ${FEDESCA.name}`,
      category: 'asesor',
      lastUserMessage: trimmed,
      resumeModeAfterContact: 'advisor',
      continuePrompt: 'Perfecto. Ahora describe tu solicitud (programa y qué necesitas).',
    }

    if (!state.leadName || !state.leadPhone) return ensureContact(state, pending)

    return {
      type: 'reply_and_send',
      reply: 'Gracias. Enviando conversación para seguimiento y contacto en horario hábil…',
      nextState: { ...state, mode: 'home', pendingSend: null },
      send: { subject: pending.subject, category: 'asesor', lastUserMessage: trimmed },
    }
  }

  // Buscar programa por texto
  if (state.mode === 'offer_area' || state.mode === 'free_text' || state.mode === 'home') {
    const hits = programSearch(trimmed)
    if (hits.length === 1) {
      const program = hits[0]
      return {
        type: 'reply',
        reply: `Seleccionaste: ${program}\n\nCiudad: ${city ?? 'Pendiente'}\nElige qué deseas consultar usando los botones.`,
        nextState: { ...state, program, mode: 'program_selected' },
      }
    }
    if (hits.length > 1) {
      return { type: 'reply', reply: 'Encontré varias coincidencias:\n' + list(hits) + '\n\nEscribe el nombre exacto del programa.', nextState: state }
    }
  }

  return {
    type: 'reply',
    reply: pick([
      'Te leo. Usa los botones para ir a oferta académica, servicios, asesor o reconocimiento legal.',
      'Para ayudarte mejor, dime si buscas un programa específico o un servicio.',
    ]),
    nextState: state,
  }
}
