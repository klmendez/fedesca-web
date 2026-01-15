// sections/oferta-academica/OfertaNav.tsx

type NavItem = {
  title: string
  desc: string
  href: `#${string}`
}

const items: NavItem[] = [
  {
    title: 'Educación Formal',
    desc: 'Adquiere tu bachillerato académico conforme a la normativa educativa vigente.',
    href: '#formal',
  },
  {
    title: 'Formación Técnica',
    desc: 'Contamos con diferentes programas técnicos orientados al mundo laboral.',
    href: '#tecnico',
  },
  {
    title: 'Cursos de Fundamentación',
    desc: 'Fundamentación estratégica para equipos de vigilancia y seguridad.',
    href: '#fundamentacion',
  },
  {
    title: 'Reentrenamiento Laboral',
    desc: 'Actualiza las competencias de tu equipo de seguridad y talento humano.',
    href: '#reentrenamiento',
  },
  {
    title: 'Programas Complementarios',
    desc: 'Certificado o constancia de servicio social y acompañamiento para la certificación de experiencia laboral.',
    href: '#complementario',
  },
]

function NavCard({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      className="
        group relative block h-full
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[hsla(var(--primary)/0.55)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background
      "
    >
      {/* wash editorial base (sin overflow en mobile) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <div
          className="
            absolute -inset-6 sm:-inset-10 rounded-[42px]
            bg-[radial-gradient(480px_circle_at_18%_12%,hsla(var(--primary)/0.18),transparent_62%)]
            opacity-55 blur-2xl
            transition-opacity duration-300
            group-hover:opacity-85
          "
        />
      </div>

      <div
        className="
          relative h-full
          p-3 sm:p-5
          transition-transform duration-200
          group-hover:-translate-y-0.5
        "
      >
        {/* regla superior */}
        <div className="mb-3 sm:mb-4">
          <div className="h-[2px] w-10 bg-[linear-gradient(90deg,hsla(var(--primary)/0.95),transparent)] transition-all duration-200 group-hover:w-14" />
          <div className="mt-2 sm:mt-3 h-px w-full bg-[linear-gradient(90deg,transparent,hsla(var(--border)/0.8),transparent)]" />
        </div>

        {/* header: título + ver info al lado */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 text-[14px] font-semibold tracking-tight text-foreground sm:text-[15px]">
            {item.title}
          </h3>

          <span className="inline-flex shrink-0 items-center gap-1.5 pt-[1px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsla(var(--primary)/0.9)]" />
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsla(var(--primary)/0.9)]">
              Ver info
            </span>
          </span>
        </div>

        {/* ✅ descripción sin cortar */}
        <p className="mt-2 text-[13px] leading-snug text-muted-foreground">
          {item.desc}
        </p>
      </div>

      {/* hover sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsla(var(--primary)/0.08),transparent_55%)]" />
      </div>
    </a>
  )
}

export default function OfertaNav() {
  return (
    // ✅ evita scroll horizontal en mobile por efectos/glows
    <section className="container-page mt-6 mb-8 overflow-x-hidden sm:mt-10 sm:mb-12">
      <div className="mb-3 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Nuestra oferta académica
        </h2>
        <p className="mt-1 sm:mt-2 max-w-3xl text-[13px] sm:text-sm text-muted-foreground">
          Selecciona una línea de formación para conocer los programas y
          requisitos correspondientes.
        </p>
      </div>

      {/* grid compacto */}
      <div className="grid gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => (
          <NavCard key={item.href} item={item} />
        ))}
      </div>
    </section>
  )
}
