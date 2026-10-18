import { Award, Coffee, HeartHandshake, Leaf } from 'lucide-react'
import { aboutImages } from '../data/data'
import Reveal from './Reveal'
import SafeImage from './SafeImage'

const features = [
  {
    icon: Coffee,
    title: 'Single-Origin Beans',
    text: 'Sourced directly from family farms in Ethiopia, Colombia and Sumatra.',
  },
  {
    icon: Leaf,
    title: 'Consciously Green',
    text: 'Compostable cups, plant milks and a 25-cent discount for reusable mugs.',
  },
  {
    icon: HeartHandshake,
    title: 'Community First',
    text: 'Local art on the walls, open-mic Fridays and beans donated to shelters.',
  },
  {
    icon: Award,
    title: 'Award-Winning Baristas',
    text: 'Our head barista placed top-3 at the 2024 Regional Brewers Cup.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-24">
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-latte blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-20 lg:grid-cols-2 lg:gap-16">
        {/* Imagery */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-soft">
            <SafeImage
              src={aboutImages.main}
              alt="Warm cafe interior of Brew & Bliss with plants and wooden furniture"
              className="h-[420px] w-full object-cover lg:h-[500px]"
              fallbackLabel="Our cafe"
            />
          </div>

          <div className="absolute -bottom-10 -right-2 hidden w-56 overflow-hidden rounded-3xl border-8 border-cream shadow-soft sm:block lg:-right-8">
            <SafeImage
              src={aboutImages.overlay}
              alt="Barista steaming milk at the espresso machine"
              className="h-44 w-full object-cover"
              fallbackLabel="Barista at work"
            />
          </div>

          <div className="absolute -top-7 -left-4 flex h-28 w-28 -rotate-6 flex-col items-center justify-center rounded-full bg-espresso-800 text-center shadow-soft lg:-left-7">
            <span className="font-display text-2xl font-bold text-gold">8+</span>
            <span className="px-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/80">
              Years of craft
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
              Our Story
              <span className="h-px w-12 bg-current opacity-60" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-espresso-900 sm:text-5xl">
              Brewed with Passion, Served with a{' '}
              <span className="italic text-gold-dark">Smile</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 leading-relaxed text-espresso-500">
              Brew &amp; Bliss began in 2016 as a tiny corner kiosk with one espresso
              machine, two stubborn founders and a simple belief: coffee should make your
              day softer, not busier. Today our roastery-café sits in the heart of the Old
              Mill District, but the ritual hasn&apos;t changed — beans roasted in small
              batches every Tuesday, milk steamed to order, and every cup finished with a
              small poured heart.
            </p>
            <p className="mt-4 leading-relaxed text-espresso-500">
              We pay above fair-trade rates so every harvest tastes as good as it feels,
              and we roast weekly so nothing on the shelf is ever older than your last
              birthday. Whether you come in for a quick morning espresso, a slow weekend
              pour-over, or a slice of cheesecake that ruins your willpower — you&apos;re
              home.
            </p>
            <p className="mt-5 font-display text-lg italic text-espresso-700">
              — Amara Lee &amp; Josh Bennett, Founders
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-espresso-800 text-gold">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold text-espresso-900">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-espresso-500">
                    {feature.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
