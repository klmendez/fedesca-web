import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Fondo suave (sin rayas/bordes) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/6 to-accent/6" />
        <div className="absolute left-[-10%] top-[-25%] h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-12%] bottom-[-35%] h-[560px] w-[560px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* Identidad */}
          <div className="space-y-5 md:col-span-2">
            {/* Acento institucional */}
            <div className="flex items-center gap-3">
              <span
                className="inline-flex h-1.5 w-16 rounded-full"
                style={{ background: 'hsl(var(--fed-purple))' }}
              />
              <span className="text-xs text-muted-foreground">FEDESCA</span>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">
                FUNDACIÓN EDUCATIVA PARA EL DESARROLLO SOCIAL, CULTURAL Y AMBIENTAL “FEDESCA”
              </p>
              <p className="text-sm text-muted-foreground">“Colegio San Carlos”</p>
              <p className="text-xs text-muted-foreground">
                Resolución No. 313 del 27 de abril de 2004 (Popayán).
              </p>
            </div>

            {/* Info útil (en “chips” suaves, sin bordes) */}
            <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:flex-wrap">
              <span className="inline-flex rounded-full bg-background/70 px-3 py-1">
                <span className="text-foreground/80">Dirección:</span>&nbsp;Calle 9 N° 34–57, Barrio Los Campos, Popayán
              </span>
              <span className="inline-flex rounded-full bg-background/70 px-3 py-1">
                <span className="text-foreground/80">Tel:</span>&nbsp;8303187 • 8304250 • 8213182
              </span>
            </div>
          </div>

          {/* Enlaces */}
          <div className="space-y-4 md:justify-self-end">
            <p className="text-sm font-semibold text-foreground">Enlaces</p>

            <nav className="grid gap-2 text-sm">
              <Link href="/oferta-academica" className="text-muted-foreground transition hover:text-foreground">
                Oferta Académica
              </Link>
              <Link href="/admisiones" className="text-muted-foreground transition hover:text-foreground">
                Admisiones
              </Link>
              <Link href="/contacto" className="text-muted-foreground transition hover:text-foreground">
                Contacto
              </Link>
            </nav>

            <p className="text-xs text-muted-foreground">
              Formación con enfoque social, cultural y ambiental.
            </p>
          </div>
        </div>

        {/* Barra final (sin raya, solo separación por espacio) */}
        <div className="mt-10 flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} FEDESCA. Todos los derechos reservados.</span>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Link href="/politica-de-datos" className="transition hover:text-foreground">
              Política de tratamiento de datos
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/terminos" className="transition hover:text-foreground">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
