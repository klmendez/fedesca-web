'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import VirtualAssistant from '@/components/virtual-assistant/VirtualAssistant'

const whatsappUrl =
  'https://api.whatsapp.com/send?phone=573112223334&text=Hola%20FEDESCA,%20quiero%20recibir%20informaci%C3%B3n'

export default function FloatingButtons() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] flex items-end justify-between p-4 sm:p-6 lg:p-8">
      
      {/* LADO IZQUIERDO — WHATSAPP */}
      <div className="pointer-events-auto flex flex-col gap-3">
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_-18px_rgba(37,211,102,0.65)] transition hover:-translate-y-1 hover:shadow-[0_26px_65px_-20px_rgba(37,211,102,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
          aria-label="Escríbenos por WhatsApp"
        >
          <MessageCircle size={22} />
          <span className="pointer-events-none absolute left-full ml-3 hidden translate-y-1 rounded-full bg-[#25D366] px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg shadow-[#25D366]/45 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 lg:block">
            WhatsApp
          </span>
        </Link>
      </div>

      {/* LADO DERECHO — ASISTENTE */}
      <div className="pointer-events-auto flex flex-col gap-3 items-end">
        <VirtualAssistant />
      </div>

    </div>
  )
}
