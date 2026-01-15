// data/oferta.ts

export type ProgramCategory =
  | 'formal'
  | 'tecnico'
  | 'fundamentacion'
  | 'reentrenamiento'
  | 'complementario'

export interface Program {
  id: string
  name: string
  area: string
  category: ProgramCategory
  summary: string
}

export const oferta = {
  // 1️⃣ Educación Formal
  formal: [
    {
      id: 'bachillerato-academico',
      name: 'Bachillerato Académico',
      area: 'Educación Formal',
      category: 'formal',
      summary:
        'Formación académica integral orientada al desarrollo de competencias básicas y preparación para educación superior o el mundo laboral.',
    },
  ] as Program[],

  // 2️⃣ Programas Técnicos y Auxiliares (Formación para el Trabajo)
  tecnicos: [
    // Área Administrativa y Sistemas
    {
      id: 'tecnico-administrativo-archivo',
      name: 'Técnico Administrativo y Archivo',
      area: 'Área Administrativa y Sistemas',
      category: 'tecnico',
      summary: 'Gestión documental, archivo y soporte administrativo.',
    },
    {
      id: 'sistemas-informaticos',
      name: 'Sistemas Informáticos',
      area: 'Área Administrativa y Sistemas',
      category: 'tecnico',
      summary: 'Soporte técnico, ofimática, herramientas digitales y redes básicas.',
    },
    {
      id: 'sistemas',
      name: 'Sistemas',
      area: 'Área Administrativa y Sistemas',
      category: 'tecnico',
      summary: 'Competencias TIC y soporte básico para entornos académicos y laborales.',
    },

    // Área de Salud
    {
      id: 'auxiliar-enfermeria',
      name: 'Auxiliar de Enfermería',
      area: 'Área de Salud',
      category: 'tecnico',
      summary: 'Apoyo en atención básica en salud y cuidado del paciente.',
    },
    {
      id: 'auxiliar-farmaceutico',
      name: 'Auxiliar Farmacéutico',
      area: 'Área de Salud',
      category: 'tecnico',
      summary: 'Apoyo en dispensación, inventario y buenas prácticas farmacéuticas.',
    },
    {
      id: 'higienista-oral',
      name: 'Higienista Oral',
      area: 'Área de Salud',
      category: 'tecnico',
      summary: 'Prevención, promoción y apoyo en salud oral.',
    },
    {
      id: 'primera-infancia',
      name: 'Primera Infancia',
      area: 'Área de Salud',
      category: 'tecnico',
      summary: 'Acompañamiento y atención integral en procesos de desarrollo en primera infancia.',
    },

    // Área de Belleza y Bienestar
    {
      id: 'cosmetologia',
      name: 'Cosmetología',
      area: 'Área de Belleza y Bienestar',
      category: 'tecnico',
      summary: 'Cuidado estético, higiene, bioseguridad y atención al cliente.',
    },

    // Área Técnica e Industrial
    {
      id: 'auxiliar-electronica',
      name: 'Auxiliar en Electrónica',
      area: 'Área Técnica e Industrial',
      category: 'tecnico',
      summary: 'Fundamentos de circuitos, mantenimiento básico y diagnóstico.',
    },
    {
      id: 'mecanico-motos',
      name: 'Mecánico de Motos',
      area: 'Área Técnica e Industrial',
      category: 'tecnico',
      summary: 'Mantenimiento preventivo y correctivo, diagnóstico y taller.',
    },
    {
      id: 'operador-maquinaria-pesada',
      name: 'Operador de Maquinaria Pesada',
      area: 'Área Técnica e Industrial',
      category: 'tecnico',
      summary: 'Operación segura de maquinaria y protocolos de trabajo.',
    },

    // Área de Seguridad y Salud en el Trabajo
    {
      id: 'seguridad-prevencion-trabajo',
      name: 'Seguridad y Prevención en el Trabajo',
      area: 'Área de Seguridad y Salud en el Trabajo',
      category: 'tecnico',
      summary: 'Prevención de riesgos y cultura de seguridad laboral.',
    },
  ] as Program[],

  // 3️⃣ Programas de Seguridad Privada (Fundamentación)
  fundamentacion: [
    {
      id: 'fundamentacion-vigilancia',
      name: 'Fundamentación en Vigilancia',
      area: 'Seguridad Privada (Fundamentación)',
      category: 'fundamentacion',
      summary: 'Procedimientos básicos, normatividad y protocolos de vigilancia.',
    },
    {
      id: 'fundamentacion-escolta',
      name: 'Fundamentación en Escolta',
      area: 'Seguridad Privada (Fundamentación)',
      category: 'fundamentacion',
      summary: 'Planeación, protocolos y fundamentos para funciones de escolta.',
    },
    {
      id: 'fundamentacion-supervisor',
      name: 'Fundamentación en Supervisor',
      area: 'Seguridad Privada (Fundamentación)',
      category: 'fundamentacion',
      summary: 'Coordinación de equipos, control del servicio y reportes.',
    },
    {
      id: 'fundamentacion-operador-medios',
      name: 'Fundamentación en Operador de Medios Tecnológicos',
      area: 'Seguridad Privada (Fundamentación)',
      category: 'fundamentacion',
      summary: 'Monitoreo, uso de medios tecnológicos y gestión de incidentes.',
    },
  ] as Program[],

  // 4️⃣ Programas de Seguridad Privada (Reentrenamiento)
  reentrenamiento: [
    {
      id: 'reentrenamiento-vigilancia',
      name: 'Reentrenamiento en Vigilancia',
      area: 'Seguridad Privada (Reentrenamiento)',
      category: 'reentrenamiento',
      summary: 'Actualización de competencias y protocolos para continuidad del servicio.',
    },
    {
      id: 'reentrenamiento-escolta',
      name: 'Reentrenamiento en Escolta',
      area: 'Seguridad Privada (Reentrenamiento)',
      category: 'reentrenamiento',
      summary: 'Refuerzo operativo y actualización según lineamientos vigentes.',
    },
    {
      id: 'reentrenamiento-supervisor',
      name: 'Reentrenamiento en Supervisor',
      area: 'Seguridad Privada (Reentrenamiento)',
      category: 'reentrenamiento',
      summary: 'Actualización en control, liderazgo operativo y coordinación.',
    },
    {
      id: 'reentrenamiento-operador-medios',
      name: 'Reentrenamiento en Operador de Medios Tecnológicos',
      area: 'Seguridad Privada (Reentrenamiento)',
      category: 'reentrenamiento',
      summary: 'Actualización en monitoreo, herramientas y gestión de novedades.',
    },
  ] as Program[],

  // 5️⃣ Programas Complementarios
  complementarios: [
    {
      id: 'servicio-social-comunitario',
      name: 'Servicio Social y Comunitario',
      area: 'Programas Complementarios',
      category: 'complementario',
      summary:
        'Certificado/constancia de servicio social requerido por el colegio (según lineamientos institucionales).',
    },
    {
      id: 'experiencia-laboral',
      name: 'Experiencia Laboral (por año)',
      area: 'Programas Complementarios',
      category: 'complementario',
      summary:
        'Acompañamiento y certificación de experiencia laboral acumulada por periodo anual.',
    },
  ] as Program[],
}

export const allPrograms: Program[] = [
  ...oferta.formal,
  ...oferta.tecnicos,
  ...oferta.fundamentacion,
  ...oferta.reentrenamiento,
  ...oferta.complementarios,
]
