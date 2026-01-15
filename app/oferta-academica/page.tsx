import { oferta } from '@/data/oferta'
import { OfertaAcademicaHero } from '@/sections/oferta-academica/Hero'

import Formal from '@/sections/oferta-academica/formal'
import Tecnico from '@/sections/oferta-academica/tecnico'
import Fundamentacion from '@/sections/oferta-academica/fundamentacion'
import Reentrenamiento from '@/sections/oferta-academica/reentrenamiento'
import Complementario from '@/sections/oferta-academica/complementario'

export default function OfertaAcademicaPage() {
  return (
    <>
      <OfertaAcademicaHero />
      <Formal programs={oferta.formal} />
      <Tecnico programs={oferta.tecnicos} />

      <Fundamentacion
        programs={oferta.fundamentacion}
        note="Nota: La disponibilidad puede variar según la sede y requisitos normativos."
      />

      <Reentrenamiento
        programs={oferta.reentrenamiento}
        note="Nota: La disponibilidad puede variar según la sede y requisitos normativos."
      />

      <Complementario
        programs={oferta.complementarios}
        note="Servicio Social y Comunitario: certificado/constancia requerido por el colegio (según lineamientos institucionales)."
      />
    </>
  )
}
