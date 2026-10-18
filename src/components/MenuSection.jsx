import { useState } from 'react'
import { Plus, Star } from 'lucide-react'
import { categories, formatPrice, menuItems } from '../data/data'
import { useCart } from '../context/CartContext'
import Reveal from './Reveal'
import SafeImage from './SafeImage'
import SectionHeading from './SectionHeading'

function MenuCard({ item, index }) {
  const { addItem } = useCart()

  return (
    <article
      className="animate-fade-up group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <SafeImage
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          fallbackLabel={item.name}
        />
        {item.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-espresso-950 shadow">
            {item.tag}
          </span>
        )}
        <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3 py-1.5 font-display text-base font-bold text-espresso-900 shadow backdrop-blur">
          {formatPrice(item.price)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="flex items-center gap-0.5 text-gold" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.round(item.rating) ? 'fill-current' : 'opacity-30'}`}
              />
            ))}
          </span>
          <span className="text-xs font-medium text-espresso-400">({item.rating.toFixed(1)})</span>
        </div>

        <h3 className="font-display text-xl font-semibold text-espresso-900">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso-500">{item.description}</p>

        <button
          type="button"
          onClick={() => addItem(item)}
          className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-espresso-800 px-5 py-2.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-gold hover:text-espresso-950"
          aria-label={`Add ${item.name} to your order`}
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          Add to Order
        </button>
      </div>
    </article>
  )
}

export default function MenuSection() {
  const [activeCat, setActiveCat] = useState('All')
  const filtered =
    activeCat === 'All' ? menuItems : menuItems.filter((item) => item.category === activeCat)

  return (
    <section id="menu" className="scroll-mt-24 bg-white py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Menu"
          title={
            <>
              Handcrafted with <span className="italic text-gold-dark">Love</span>
            </>
          }
          description="Roasted in small batches every Tuesday, steamed to order, and finished with a little heart. Filter by craving — every drink comes with oat, almond or whole milk at no extra cost."
        />

        {/* Category filters */}
        <Reveal className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCat(cat)}
              aria-pressed={activeCat === cat}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeCat === cat
                  ? 'bg-espresso-800 text-cream shadow-card'
                  : 'bg-cream text-espresso-600 hover:bg-latte'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Items grid */}
        <div
          key={activeCat}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-espresso-400">
          All drinks available with oat, almond or whole milk · Prices include tax
        </p>
      </div>
    </section>
  )
}
