import { useEffect, useState } from 'react'
import { Coffee, Menu as MenuIcon, ShoppingBag, Sparkles, X } from 'lucide-react'
import { navLinks } from '../data/data'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Solid, compact navbar once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the nav link of the section in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar — collapses on scroll */}
      <div
        className={`overflow-hidden bg-espresso-950 text-cream/90 transition-all duration-300 ${
          scrolled ? 'max-h-0' : 'max-h-10'
        }`}
      >
        <div className="container-x flex items-center justify-center gap-2 py-2">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs">
            Golden Hour — 2-for-1 iced lattes, weekdays 3–5 pm
          </p>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 py-3 shadow-card backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
        aria-label="Main navigation"
      >
        <div className="container-x flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2.5" onClick={closeMobile}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso-800 text-gold shadow-card transition-transform duration-300 group-hover:rotate-6">
              <Coffee className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-semibold text-espresso-900">
                Brew <span className="italic text-gold-dark">&amp;</span> Bliss
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-espresso-400">
                Café · Roastery
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`flex flex-col items-center gap-1 text-sm font-medium tracking-wide transition-colors ${
                    active === link.id
                      ? 'text-espresso-900'
                      : 'text-espresso-500 hover:text-espresso-900'
                  }`}
                >
                  {link.label}
                  <span
                    className={`h-0.5 rounded-full bg-gold transition-all duration-300 ${
                      active === link.id ? 'w-full' : 'w-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            {/* Cart */}
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${count} item${count === 1 ? '' : 's'}`}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-espresso-800 text-cream transition-colors hover:bg-espresso-700"
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              {count > 0 && (
                <span
                  key={count}
                  className="animate-pop absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-espresso-950"
                >
                  {count}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso-200 bg-white/70 text-espresso-800 transition-colors hover:bg-latte lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden bg-cream/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          mobileOpen ? 'max-h-96 shadow-card' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={closeMobile}
                className={`block rounded-xl px-4 py-3 font-medium transition-colors ${
                  active === link.id
                    ? 'bg-latte text-espresso-900'
                    : 'text-espresso-600 hover:bg-latte/70'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                closeMobile()
                openCart()
              }}
              className="mt-1 flex w-full items-center justify-between rounded-xl bg-espresso-800 px-4 py-3 font-medium text-cream transition-colors hover:bg-espresso-700"
            >
              View My Order
              <span className="rounded-full bg-gold px-2.5 py-0.5 text-xs font-bold text-espresso-950">
                {count}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
