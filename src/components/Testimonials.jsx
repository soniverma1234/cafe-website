import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/data'
import Reveal from './Reveal'
import SafeImage from './SafeImage'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What Our <span className="italic text-gold-dark">Regulars</span> Say
            </>
          }
        />

        {/* Rating banner */}
        <Reveal className="mb-14 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-espresso-100 bg-white px-6 py-3 shadow-card">
            <span className="flex items-center gap-1 text-gold" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-semibold text-espresso-900">4.9 / 5</span>
            <span className="text-sm text-espresso-400">
              from 800+ reviews on Google &amp; Yelp
            </span>
          </div>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <figure className="relative flex h-full flex-col rounded-3xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <Quote
                  className="absolute right-7 top-7 h-9 w-9 text-gold/25"
                  aria-hidden="true"
                />
                <div
                  className="flex items-center gap-1 text-gold"
                  aria-label={`Rated ${t.rating} out of 5 stars`}
                >
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="mt-5 flex-1 leading-relaxed text-espresso-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-espresso-100 pt-6">
                  <SafeImage
                    src={t.avatar}
                    alt={`Portrait of ${t.name}`}
                    initials={t.initials}
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-espresso-900">{t.name}</p>
                    <p className="text-xs text-espresso-400">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
