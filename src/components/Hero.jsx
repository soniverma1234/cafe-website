import { ArrowRight, Coffee, Sparkles, Star } from 'lucide-react'
import { heroImages, marqueeItems } from '../data/data'
import SafeImage from './SafeImage'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-0 lg:pt-44">
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-espresso-200/60 blur-3xl" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-espresso-700">
            <Sparkles className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
            Artisan Coffee House · Est. 2016
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-espresso-900 sm:text-6xl xl:text-7xl">
            Your Daily Dose of{' '}
            <span className="relative inline-block italic text-gold-dark">
              Happiness
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C50 2 150 2 198 9"
                  stroke="#C99B5F"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-espresso-500">
            From single-origin espresso pulled with care to pastries that come out of the
            oven at dawn — every visit to Brew &amp; Bliss is a small, warm ritual. Find a
            corner seat, take a breath, and let us take care of the rest.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2.5 rounded-full bg-espresso-800 px-8 py-4 font-semibold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso-700"
            >
              Explore Our Menu
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-espresso-300 px-8 py-4 font-semibold text-espresso-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-espresso-800 hover:bg-white/60"
            >
              Visit Us
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-8 sm:gap-10">
            <div>
              <div className="flex items-center gap-1 text-gold" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-1.5 text-sm text-espresso-500">
                <span className="font-bold text-espresso-900">4.9</span> average rating
              </p>
            </div>
            <div className="h-10 w-px bg-espresso-200" aria-hidden="true" />
            <div>
              <p className="font-display text-3xl font-semibold text-espresso-900">25+</p>
              <p className="text-sm text-espresso-500">Coffee varieties</p>
            </div>
            <div className="h-10 w-px bg-espresso-200" aria-hidden="true" />
            <div>
              <p className="font-display text-3xl font-semibold text-espresso-900">8+</p>
              <p className="text-sm text-espresso-500">Years of craft</p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-6 rotate-3 rounded-[3rem] border-2 border-gold/30"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-gold/25 blur-2xl"
            aria-hidden="true"
          />

          <div className="animate-float relative overflow-hidden rounded-[2.5rem] shadow-soft">
            <SafeImage
              src={heroImages.main}
              alt="Hand-crafted latte with rosetta latte art served at Brew & Bliss"
              className="h-[420px] w-full object-cover lg:h-[520px]"
              fallbackLabel="Brew & Bliss"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso-950/25 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Floating special card */}
          <div className="animate-float-delayed absolute -left-4 top-8 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-card backdrop-blur sm:-left-8">
            <SafeImage
              src={heroImages.special}
              alt="Fresh butter croissant"
              className="h-14 w-14 rounded-xl object-cover"
              fallbackLabel="Croissant"
            />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">
                Today&apos;s Special
              </p>
              <p className="font-display text-sm font-semibold text-espresso-900">
                Croissant + Latte · $6.90
              </p>
            </div>
          </div>

          {/* Floating rating card */}
          <div className="absolute -bottom-6 right-4 rounded-2xl bg-espresso-900/95 p-4 text-cream shadow-soft backdrop-blur sm:right-8">
            <div className="flex items-center gap-1 text-gold" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-1.5 text-xs font-medium tracking-wide">
              <span className="font-display text-base font-semibold text-white">4.9</span> · 800+ happy reviews
            </p>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-24 overflow-hidden border-y border-espresso-100 bg-latte/70 py-4" aria-hidden="true">
        <div className="animate-marquee flex w-max items-center gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-espresso-500"
            >
              {item}
              <Coffee className="h-4 w-4 text-gold" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
