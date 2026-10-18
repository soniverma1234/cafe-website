import { Clock, Croissant, Flame, Gift, Plus } from 'lucide-react'
import { bestsellers, formatPrice, offers } from '../data/data'
import { useCart } from '../context/CartContext'
import Reveal from './Reveal'
import SafeImage from './SafeImage'
import SectionHeading from './SectionHeading'

const offerIcons = {
  croissant: Croissant,
  clock: Clock,
  gift: Gift,
}

const offerStyles = {
  gold: 'bg-gradient-to-br from-gold-light to-gold-dark text-espresso-950',
  dark: 'bg-gradient-to-br from-espresso-700 to-espresso-900 text-cream border border-gold/25',
  cream: 'bg-gradient-to-br from-latte to-cream text-espresso-900',
}

function BestsellerRow({ item, index }) {
  const { addItem } = useCart()

  return (
    <Reveal delay={index * 90}>
      <article className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:border-gold/30 hover:bg-white/10">
        <div className="relative shrink-0">
          <SafeImage
            src={item.image}
            alt={item.name}
            className="h-24 w-24 rounded-2xl object-cover"
            fallbackLabel={item.name}
          />
          <span className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold font-display text-xs font-bold text-espresso-950 shadow">
            {item.rank}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="font-display text-lg font-semibold text-cream">{item.name}</h4>
          <p className="mt-0.5 truncate text-sm text-cream/55">{item.description}</p>
          <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-gold">
            {formatPrice(item.price)}{' '}
            <span className="ml-2 font-normal normal-case tracking-normal text-cream/45">
              · {item.sold}
            </span>
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            addItem({
              id: item.name.toLowerCase().replace(/\s+/g, '-'),
              name: item.name,
              price: item.price,
              image: item.image,
            })
          }
          aria-label={`Add ${item.name} to your order`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-espresso-950 transition-transform duration-300 hover:scale-110"
        >
          <Plus className="h-5 w-5" aria-hidden="true" />
        </button>
      </article>
    </Reveal>
  )
}

function OfferCard({ offer, index }) {
  const Icon = offerIcons[offer.icon] ?? Gift

  return (
    <Reveal delay={index * 90}>
      <article
        className={`relative h-full overflow-hidden rounded-3xl p-6 shadow-card ${offerStyles[offer.variant]}`}
      >
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/15 blur-xl"
          aria-hidden="true"
        />
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/25 backdrop-blur">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h4 className="mt-4 font-display text-xl font-semibold">{offer.title}</h4>
        <p className="mt-2 text-sm leading-relaxed opacity-80">{offer.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span
            className={`rounded-lg border border-dashed px-3 py-1.5 font-mono text-xs font-bold tracking-[0.15em] ${
              offer.variant === 'gold'
                ? 'border-espresso-900/40'
                : 'border-current opacity-80'
            }`}
          >
            {offer.code}
          </span>
          <span className="text-xs opacity-60">{offer.fine}</span>
        </div>
      </article>
    </Reveal>
  )
}

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="relative scroll-mt-24 overflow-hidden bg-espresso-950 py-24 text-cream">
      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="Customer Favourites"
          title={
            <>
              Bestsellers &amp; <span className="italic text-gold">Special Offers</span>
            </>
          }
          description="The cups our regulars keep coming back for — and the little deals that make your next visit even sweeter."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Bestsellers list */}
          <div>
            <h3 className="mb-6 flex items-center gap-2.5 text-lg font-semibold tracking-wide">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Flame className="h-5 w-5" aria-hidden="true" />
              </span>
              Fan Favourites
            </h3>
            <div className="space-y-4">
              {bestsellers.map((item, i) => (
                <BestsellerRow key={item.rank} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Offers grid */}
          <div>
            <h3 className="mb-6 flex items-center gap-2.5 text-lg font-semibold tracking-wide">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Gift className="h-5 w-5" aria-hidden="true" />
              </span>
              Special Offers
            </h3>
            <div className="grid gap-5">
              {offers.map((offer, i) => (
                <OfferCard key={offer.id} offer={offer} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
