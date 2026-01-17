'use client'

import { MouseEvent, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { basePath } from '../lib/basePath'

const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/oferta-academica', label: 'Oferta Académica' },
  { href: '/colegio-san-carlos', label: 'Colegio San Carlos' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/admisiones', label: 'Admisiones' },
  { href: '/quienes-somos', label: 'Sobre Nosotros' },
]

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function normalizePath(p: string) {
  if (!p) return '/'
  const noQuery = p.split('?')[0].split('#')[0]
  if (noQuery.length > 1 && noQuery.endsWith('/')) return noQuery.slice(0, -1)
  return noQuery
}

function isActive(pathname: string, href: string) {
  const p = normalizePath(pathname)
  const h = normalizePath(href)
  if (h === '/') return p === '/'
  return p === h || p.startsWith(h + '/')
}

export default function Header() {
  const pathname = usePathname()

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // ✅ CTA ahora será Contacto (no Admisiones)
  const primaryLinks = useMemo(() => nav.filter((i) => i.href !== '/contacto'), [])
  const contactLink = useMemo(() => nav.find((i) => i.href === '/contacto'), [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Evita que el body haga scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (isActive(pathname, href)) {
      event.preventDefault()
      setOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setOpen(false)
    }
  }

  // 🔒 Anti-azul del navegador (visited/focus)
  const linkSafe =
    'no-underline visited:text-inherit focus:text-[#6D28D9] active:text-[#6D28D9]'

  const goldUnderline = 'bg-[#D4AF37]'

  const underlineClasses = (active: boolean) =>
    cx(
      'pointer-events-none absolute left-0 right-0 -bottom-1 mx-auto h-[2px] rounded-full transition-all',
      goldUnderline,
      active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60',
    )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none h-3 sm:h-4" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* BARRA PRINCIPAL (✅ translúcida + blur) */}
          <div
            className={cx(
              'pointer-events-auto flex items-center justify-between gap-3',
              'rounded-full border border-slate-300/70',
              // ✅ translucidez
              'bg-slate-200/60 backdrop-blur-sm',
              'px-6 py-2',
              'shadow-lg shadow-slate-900/10',
              'pl-[60px] sm:pl-[64px]',
              scrolled ? 'ring-1 ring-white/10' : '',
            )}
          >
            {/* MARCA */}
            <Link
              href="/"
              onClick={handleNavClick('/')}
              className={cx(
                'group flex items-center',
                'transition-all duration-200',
                'hover:scale-[1.01] active:scale-[0.98]',
                'hover:[text-shadow:0_0_12px_rgba(109,40,217,0.22)]',
                linkSafe,
              )}
              aria-label="Ir al inicio"
            >
              <span className="whitespace-nowrap leading-[1.05] -ml-0 sm:-ml-0">
                {/* ✅ Mobile más pequeño (sin tocar desktop) */}
                <span className="block text-center font-['Inter',sans-serif] text-[0.58rem] sm:text-[0.5rem] md:text-[0.7rem] font-medium tracking-wide text-[#5FA39A]">
                  Fundación Educativa
                </span>

                {/* ✅ línea amarilla: también más pequeña en mobile */}
                <span className="block h-[3px] w-[96px] sm:w-[130px] md:w-[130px] rounded-full bg-[#F2D94E] my-[1px]" />

                {/* ✅ FEDESCA: más pequeño en mobile, igual en desktop */}
                <span className="block text-center font-['Inter',sans-serif] text-[1.0rem] sm:text-[1.28rem] md:text-[1.55rem] font-extrabold tracking-[0.1rem] text-[#8E2C8F]">
                  FEDESCA
                </span>
              </span>
            </Link>

            {/* NAV DESKTOP */}
            <nav className="hidden items-center gap-6 md:flex">
              {primaryLinks.map((item) => {
                const active = isActive(pathname, item.href)
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      onClick={handleNavClick(item.href)}
                      className={cx(
                        'relative flex items-center text-sm font-medium transition-colors',
                        linkSafe,
                        active ? 'text-[#6D28D9]' : 'text-slate-600 hover:text-[#6D28D9]',
                      )}
                    >
                      <span>{item.label}</span>
                      <span className={underlineClasses(active)} />
                    </Link>
                  </div>
                )
              })}

              {/* CTA Contacto (plateado) */}
              {contactLink ? (
                <Link
                  href={contactLink.href}
                  onClick={handleNavClick(contactLink.href)}
                  className={cx(
                    'inline-flex items-center justify-center',
                    'rounded-full border border-slate-300/80',
                    // ✅ plateado translúcido para que combine con la barra
                    'bg-slate-100/70 text-slate-700 backdrop-blur-xl',
                    'px-6 py-2',
                    'text-[0.65rem] uppercase font-semibold',
                    'tracking-[0.22em]',
                    'shadow-sm shadow-slate-900/10',
                    'transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-900/10',
                    'hover:bg-slate-200/70',
                    linkSafe,
                  )}
                >
                  {contactLink.label}
                </Link>
              ) : null}
            </nav>

            {/* MOBILE BTN */}
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen((prev) => !prev)}
              className="flex size-9 items-center justify-center rounded-full border border-slate-300 bg-slate-200/70 backdrop-blur-xl text-slate-700 md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* LOGO CIRCULAR FLOTANTE (✅ translúcido también) */}
          <Link
            href="/"
            onClick={handleNavClick('/')}
            className={cx(
              'absolute left-0 top-1/2 -translate-y-1/2',
              '-translate-x-[22%]',
              'group transition-transform duration-200',
              'hover:scale-[1.03] active:scale-[0.96]',
              linkSafe,
            )}
            aria-label="Ir al inicio"
          >
            <span
              className={cx(
                'relative flex h-[78px] w-[78px] items-center justify-center rounded-full',
                // ✅ translucidez
                'bg-slate-200/70 backdrop-blur-xl',
                'transition-all duration-200',
                'group-hover:ring-2 group-hover:ring-[#6D28D9]/25',
                'group-hover:shadow-[0_0_18px_rgba(109,40,217,0.22)]',
              )}
            >
              <span
                className={cx(
                  'pointer-events-none absolute inset-0 rounded-full',
                  'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
                  'bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),rgba(255,255,255,0)_55%)]',
                )}
              />
              <span className="relative block h-[80px] w-[80px]">
                <Image
                  src={`${basePath}/22.png`}
                  alt="Fundación Educativa FEDESCA"
                  fill
                  priority
                  className="object-contain"
                />
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="border-t border-slate-300 bg-slate-200/85 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-3">
            {nav.map((item) => {
              const active = isActive(pathname, item.href)
              const isContact = item.href === contactLink?.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className={cx(
                    'relative block rounded-xl px-3 py-2 text-sm font-medium transition',
                    linkSafe,
                    isContact
                      ? 'bg-slate-100/80 text-slate-800 shadow-md shadow-slate-900/10 border border-slate-300/80 backdrop-blur-xl'
                      : active
                        ? 'bg-slate-300/40 text-[#6D28D9]'
                        : 'text-slate-700 hover:bg-slate-200/70 hover:text-[#6D28D9]',
                  )}
                >
                  {item.label}
                  {!isContact && (
                    <span
                      className={cx(
                        'pointer-events-none absolute left-3 right-3 -bottom-0.5 mx-auto h-[2px] rounded-full transition-all',
                        goldUnderline,
                        active ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
