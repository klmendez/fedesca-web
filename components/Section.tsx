interface SectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export default function Section({ title, subtitle, children, className, containerClassName }: SectionProps) {
  const sectionClasses = ['py-14 sm:py-16', className].filter(Boolean).join(' ')
  const containerClasses = ['container-page', containerClassName].filter(Boolean).join(' ')

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        {title || subtitle ? (
          <div className="mb-8 space-y-2">
            {title ? (
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            ) : null}
            {subtitle ? <p className="text-sm text-muted-foreground sm:text-base">{subtitle}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  )
}
