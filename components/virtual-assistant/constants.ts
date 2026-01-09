// components/virtual-assistant/constants.ts

export const TIME_FORMAT: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
}

export const STORAGE_KEY = 'fedesca_va_messages'
export const STATE_KEY = 'fedesca_va_state'

// FormSubmit (AJAX)
export const FORM_SUBMIT_EMAIL = 'klmendez@unimayor.edu.co'
export const FORM_SUBMIT_AJAX_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(
  FORM_SUBMIT_EMAIL,
)}`

export const FEDESCA = {
  name: 'FEDESCA',

  legalNote:
    'Los programas ofrecidos se desarrollan bajo los lineamientos legales vigentes. ' +
    'Algunos programas pueden estar sujetos a disponibilidad por sede y requisitos normativos.',

  cities: [
    'Bogotá',
    'Medellín',
    'Cali',
    'Barranquilla',
    'Popayán',
  ],

  programs: {
    formal: [
      'Bachillerato Académico',
      'Primera Infancia',
      'Servicio Social y Comunitario',
    ],

    health: [
      'Auxiliar de Enfermería',
      'Auxiliar Farmacéutico',
      'Higienista Oral',
      'Cosmetología',
    ],

    tech: [
      'Sistemas Informáticos',
      'Auxiliar en Electrónica',
      'Mecánico de Motos',
      'Operador de Maquinaria Pesada',
    ],

    admin: [
      'Técnico Administrativo y Archivo',
    ],

    security: [
      'Seguridad y Prevención en el Trabajo',
      'Fundamentación en Vigilancia',
      'Fundamentación en Escolta',
      'Fundamentación en Supervisor',
      'Fundamentación en Operador de Medios Tecnológicos',
      'Reentrenamiento en Vigilancia',
      'Reentrenamiento en Escolta',
      'Reentrenamiento en Supervisor',
      'Reentrenamiento en Operador de Medios Tecnológicos',
    ],

    experience: [
      'Experiencia laboral certificable por año como complemento a la formación académica y técnica.',
    ],
  },
}
