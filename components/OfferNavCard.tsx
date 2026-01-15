type OfferNavCardProps = {
  title: string
  label: string
  href: `#${string}`
  image: string
}

export default function OfferNavCard({
  title,
  label,
  href,
  image,
}: OfferNavCardProps) {
  return (
    <a
      href={href}
      className="group relative isolate block h-44 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-primary/10 transition hover:-translate-y-1 hover:shadow-primary/20"
    >
      {/* Imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay oscuro (para contraste) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />

      {/* Glass subtle */}
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,hsla(var(--primary)/.20),transparent_40%)]" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <span className="mb-2 inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {label}
        </span>

        <h3 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h3>

        <span className="mt-3 h-1 w-12 rounded-full bg-primary transition-all group-hover:w-20" />
      </div>
    </a>
  )
}
