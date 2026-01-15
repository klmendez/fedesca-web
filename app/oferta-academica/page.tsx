// app/oferta-academica/page.tsx

import { oferta } from '@/data/oferta'
import { OfertaAcademicaHero } from '@/sections/oferta-academica/Hero'
import OfertaNav from '@/sections/oferta-academica/OfertaNav'

import Formal from '@/sections/oferta-academica/formal'
import Tecnico from '@/sections/oferta-academica/tecnico'
import Fundamentacion from '@/sections/oferta-academica/fundamentacion'
import Reentrenamiento from '@/sections/oferta-academica/reentrenamiento'
import Complementario from '@/sections/oferta-academica/complementario'

export default function OfertaAcademicaPage() {
  return (
    <>
      <OfertaAcademicaHero />
      <OfertaNav />

      <div id="formal" className="scroll-mt-28">
        <Formal programs={oferta.formal} />
      </div>

      <div id="tecnico" className="scroll-mt-28">
        <Tecnico programs={oferta.tecnicos} />
      </div>

      <div id="fundamentacion" className="scroll-mt-28">
        <Fundamentacion
          programs={oferta.fundamentacion}
          note="Nota: La disponibilidad puede variar según la sede y requisitos normativos."
        />
      </div>

      <div id="reentrenamiento" className="scroll-mt-28">
        <Reentrenamiento
          programs={oferta.reentrenamiento}
          note="Nota: La disponibilidad puede variar según la sede y requisitos normativos."
        />
      </div>

      <div id="complementario" className="scroll-mt-28">
        <Complementario
          programs={oferta.complementarios}
          note="Servicio Social y Comunitario: certificado/constancia requerido por el colegio."
        />
      </div>
    </>
  )
}
