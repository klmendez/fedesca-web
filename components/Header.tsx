'use client'

import { MouseEvent, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, Moon, Sun, X } from 'lucide-react'
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
  const { theme, setTheme } = useTheme()

  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isHome = normalizePath(pathname) === '/'
  const primaryLinks = useMemo(() => nav.filter((i) => i.href !== '/admisiones'), [])
  const admissionsLink = useMemo(() => nav.find((i) => i.href === '/admisiones'), [])

  useEffect(() => setMounted(true), [])
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

  const transparentMode = isHome && !scrolled && !open

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (isActive(pathname, href)) {
      event.preventDefault()
      setOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setOpen(false)
    }
  }

  const desktopLinkClasses = (active: boolean) =>
    cx(
      'relative px-3 py-2 text-sm font-medium transition',
      active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
      active &&
        'after:absolute after:left-3 after:right-3 after:-bottom-[6px] after:h-[3px] after:rounded-full after:content-[""]',
      active &&
        (transparentMode
          ? 'after:bg-white/85 dark:after:bg-white/75'
          : 'after:bg-[hsl(var(--fed-purple))]'),
    )

  const mobileLinkClasses = (active: boolean, isAdmissions: boolean) =>
    cx(
      'relative rounded-2xl px-4 py-3 text-sm font-semibold transition text-center',
      isAdmissions
        ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
        : active
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground hover:bg-foreground/4',
      active && !isAdmissions
        ? 'after:absolute after:left-6 after:right-6 after:bottom-2 after:h-[3px] after:rounded-full after:bg-[hsl(var(--fed-purple))]'
        : '',
    )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none h-3 sm:h-4" />

      <div className="container-page px-4 sm:px-6 lg:px-8">
        <div
          className={cx(
            'pointer-events-auto relative flex items-center justify-between gap-3 rounded-2xl px-3 sm:px-4 py-2.5 transition duration-300',
            transparentMode
              ? 'bg-transparent ring-0 shadow-none'
              : 'bg-background/80 dark:bg-background/65 backdrop-blur-xl ring-1 ring-border/60 shadow-lg shadow-black/10',
          )}
        >
          {/* Brand (logo limpio, sin pill) */}
          <Link href="/" className="flex items-center px-2 py-1.5">
            <div className="relative h-10 sm:h-12 w-[140px] sm:w-[170px]">
              <Image
 src={`${basePath}/2.webp`}
                alt="Fundación Educativa FEDESCA"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-2 lg:flex">
            {primaryLinks.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className={desktopLinkClasses(active)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* CTA desktop */}
            {admissionsLink ? (
              <Link
                href={admissionsLink.href}
                onClick={handleNavClick(admissionsLink.href)}
                className={cx(
                  'hidden lg:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition',
                  transparentMode
                    ? 'border border-border/70 text-foreground hover:bg-foreground/5'
                    : 'bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:-translate-y-0.5',
                )}
              >
                {admissionsLink.label}
              </Link>
            ) : null}

            {/* Theme toggle */}
            <button
              type="button"
              aria-label="Cambiar tema"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-foreground/6"
            >
              {mounted ? (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />) : null}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-xl transition hover:bg-foreground/6"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cx('lg:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')}>
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={cx(
            'fixed inset-0 z-40 transition',
            open ? 'bg-black/35' : 'bg-transparent',
          )}
        />

        {/* Panel */}
        <div
          className={cx(
            'fixed inset-x-0 top-[72px] z-50 mx-auto w-full max-w-md px-4 sm:px-6',
            'transition duration-300',
            open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
          )}
        >
          <div className="rounded-3xl bg-background/92 dark:bg-background/78 backdrop-blur-xl ring-1 ring-border/60 shadow-2xl shadow-black/18 p-3">
            <div className="flex flex-col gap-1">
              {nav.map((item) => {
                const active = isActive(pathname, item.href)
                const isAdmissions = item.href === admissionsLink?.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick(item.href)}
                    className={mobileLinkClasses(active, isAdmissions)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            <div className="mt-3">
              <button
                type="button"
                aria-label="Cambiar tema"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition bg-foreground/6 hover:bg-foreground/10 text-foreground"
              >
                {mounted ? (theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />) : null}
                Cambiar tema
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
