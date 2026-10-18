import { useState } from 'react'
import { AlertCircle, CheckCircle2, Clock, Info, Mail, MapPin, Phone, Send } from 'lucide-react'
import { contactInfo, openingHours } from '../data/data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[\d\s+()-]{7,16}$/

function validate(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).'
  }
  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (values.phone.trim() && !PHONE_RE.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number or leave this blank.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Tell us a little more — at least 10 characters.'
  }

  return errors
}

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [successName, setSuccessName] = useState(null)

  const setField = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }))
    // Clear the field-level error as the user types.
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    // Honest demo behaviour: validation only — nothing is sent anywhere.
    setSuccessName(values.name.trim())
    setValues(initialForm)
  }

  const inputClass = (hasError) =>
    `w-full rounded-xl border bg-cream/60 px-4 py-3 text-espresso-900 placeholder:text-espresso-300 transition focus:outline-none focus:ring-2 ${
      hasError
        ? 'border-red-300 bg-red-50/60 focus:ring-red-200'
        : 'border-espresso-100 focus:border-gold focus:ring-gold/40'
    }`

  return (
    <section id="contact" className="scroll-mt-24 bg-latte/50 py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Come <span className="italic text-gold-dark">Say Hello</span>
            </>
          }
          description="Questions, catering, a lost favourite mug — drop us a line or just walk in. The espresso machine is always warm."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info column */}
          <div className="space-y-5 lg:col-span-2">
            <Reveal>
              <div className="rounded-2xl bg-white p-5 shadow-card">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-espresso-800 text-gold">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-espresso-900">Visit Us</h3>
                    <p className="mt-1 text-sm leading-relaxed text-espresso-500">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-espresso-800 text-gold">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-espresso-900">Call Us</span>
                    <span className="mt-1 block text-sm text-espresso-500">{contactInfo.phone}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-espresso-800 text-gold">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-espresso-900">Email Us</span>
                    <span className="mt-1 block truncate text-sm text-espresso-500">
                      {contactInfo.email}
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-2xl bg-white p-5 shadow-card">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-espresso-800 text-gold">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-espresso-900">Opening Hours</h3>
                    <dl className="mt-2 space-y-1.5">
                      {openingHours.map((row) => (
                        <div
                          key={row.days}
                          className="flex items-baseline justify-between gap-3 text-sm"
                        >
                          <dt className="text-espresso-500">{row.days}</dt>
                          <dd className="font-medium text-espresso-900">{row.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-2.5 text-xs italic text-espresso-400">
                      Kitchen closes 30 minutes before we do.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <a
                href={contactInfo.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-36 items-center justify-center overflow-hidden rounded-3xl bg-espresso-900 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      'radial-gradient(rgba(201,155,95,0.5) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex flex-col items-center gap-2 text-center text-cream">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-espresso-950 transition-transform duration-300 group-hover:scale-110">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold tracking-wide">Get Directions</p>
                  <p className="text-xs text-cream/60">Opens in Google Maps</p>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white p-8 shadow-soft sm:p-10"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-espresso-900">
                    Your Name <span className="text-gold-dark">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jamie Rivera"
                    value={values.name}
                    onChange={setField('name')}
                    aria-invalid={Boolean(errors.name)}
                    className={inputClass(errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-espresso-900">
                    Email Address <span className="text-gold-dark">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={setField('email')}
                    aria-invalid={Boolean(errors.email)}
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-espresso-900">
                  Phone <span className="font-normal text-espresso-400">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(503) 555-0100"
                  value={values.phone}
                  onChange={setField('phone')}
                  aria-invalid={Boolean(errors.phone)}
                  className={inputClass(errors.phone)}
                />
                {errors.phone && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.phone}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-espresso-900">
                  Message <span className="text-gold-dark">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your catering needs, your favourite order, or just say hi…"
                  value={values.message}
                  onChange={setField('message')}
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputClass(errors.message)} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.message}
                  </p>
                )}
              </div>

              {successName && (
                <div
                  className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700"
                  role="status"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <p>
                    <span className="font-semibold">Thanks, {successName}!</span> Your message
                    passed validation. This is a front-end demo, so nothing was sent to a
                    server yet — connect a backend or a form service (like Formspree) to
                    start receiving real inquiries.
                  </p>
                </div>
              )}

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-espresso-800 px-8 py-3.5 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso-700"
                >
                  Send Message
                  <Send
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>
                <p className="flex items-start gap-2 text-xs leading-relaxed text-espresso-400 sm:max-w-xs">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Demo form — validation runs locally in your browser; no data is sent to a
                  server.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
