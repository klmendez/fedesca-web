import PageHero from '@/components/PageHero'

export function OfertaAcademicaHero() {
  return (
    <PageHero
      eyebrow="Oferta Académica"
      title="Programas formales, técnicos y laborales"
      subtitle="Descubre las áreas de formación que fortalecen el desarrollo social y productivo de nuestra región"
      className="text-balance [--hero-ink:220_20%_96%] [--hero-ink-soft:220_20%_96%/0.78]"
      background={<div className="absolute inset-0 bg-[hsl(var(--fed-navy))]" />}
    />
  )
}
