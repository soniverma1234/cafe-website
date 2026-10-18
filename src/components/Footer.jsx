import { useState } from 'react'
import {
  CheckCircle2,
  Clock,
  Coffee,
  Download,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from 'lucide-react'
import { contactInfo, navLinks, openingHours, socialLinks } from '../data/data'

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="relative overflow-hidden bg-espresso-950 pb-8 pt-16 text-cream/70">
      {/* Gold hairline */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-espresso-950">
              <Coffee className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-semibold text-cream">
                Brew <span className="italic text-gold">&amp;</span> Bliss
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/40">
                Café · Roastery
              </span>
            </span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-cream/55">
            Your daily dose of happiness — small-batch roasts, fresh pastries and a warm
            corner seat in the Old Mill District since 2016.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Brew & Bliss on ${social.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-espresso-950"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer navigation">
          <h3 className="font-display text-lg font-semibold text-cream">Explore</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="group inline-flex items-center gap-2 text-sm text-cream/55 transition-colors hover:text-gold"
                >
                  <span
                    className="h-px w-4 bg-gold/50 transition-all duration-300 group-hover:w-6"
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit */}
        <div>
          <h3 className="font-display text-lg font-semibold text-cream">Visit Us</h3>
          <ul className="mt-5 space-y-4 text-sm text-cream/55">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {contactInfo.address}
            </li>
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours + newsletter */}
        <div>
          <h3 className="font-display text-lg font-semibold text-cream">Stay in the Loop</h3>
          <ul className="mt-5 space-y-2 text-sm text-cream/55">
            {openingHours.map((row) => (
              <li key={row.days} className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                  {row.days}
                </span>
                <span className="text-cream/80">{row.time}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm font-medium text-cream/70">
            Monthly brew guides &amp; secret menu drops.
          </p>
          {subscribed ? (
            <p className="mt-3 flex items-start gap-2 rounded-xl border border-gold/30 bg-gold/10 p-3 text-xs leading-relaxed text-gold-light">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              You&apos;re on the list! (Demo only — no email is stored or sent.)
            </p>
          ) : (
            <form onSubmit={handleSubscribe} noValidate className="mt-3">
              <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/5 focus-within:border-gold/60">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError(null)
                  }}
                  className="w-full bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to the newsletter"
                  className="flex w-12 shrink-0 items-center justify-center bg-gold text-espresso-950 transition-colors hover:bg-gold-light"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              {error && <p className="mt-2 text-xs text-red-300">{error}</p>}
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-x relative mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Brew &amp; Bliss Cafe. All rights reserved.</p>
        <a
          href="/brew-bliss-cafe.zip"
          download="brew-bliss-cafe.zip"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-cream/50 transition-colors hover:border-gold/60 hover:text-gold"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          Download Source (ZIP)
        </a>
        <p className="flex items-center gap-1.5">
          Crafted with
          <Heart className="h-3.5 w-3.5 fill-current text-gold" aria-hidden="true" />
          and far too much caffeine.
        </p>
      </div>
    </footer>
  )
}
