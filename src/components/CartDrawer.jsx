import { useEffect } from 'react'
import { Coffee, Info, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '../data/data'
import { useCart } from '../context/CartContext'
import SafeImage from './SafeImage'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, count, showToast } =
    useCart()

  // Lock page scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const goToMenu = () => {
    closeCart()
    requestAnimationFrame(() => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-espresso-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-espresso-100 px-6 py-5">
          <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold text-espresso-900">
            <ShoppingBag className="h-5 w-5 text-gold-dark" aria-hidden="true" />
            Your Order
            {count > 0 && (
              <span className="rounded-full bg-gold px-2.5 py-0.5 text-xs font-bold text-espresso-950">
                {count}
              </span>
            )}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-espresso-500 transition-colors hover:bg-latte hover:text-espresso-900"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-latte text-espresso-400">
              <Coffee className="h-9 w-9" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-xl font-semibold text-espresso-900">
                Your cart is empty
              </p>
              <p className="mt-1.5 text-sm text-espresso-500">
                Nothing brewing yet — a fresh croissant would fix that.
              </p>
            </div>
            <button
              type="button"
              onClick={goToMenu}
              className="mt-2 rounded-full bg-espresso-800 px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-espresso-700"
            >
              Browse the Menu
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-espresso-100 overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4 py-4">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    fallbackLabel={item.name}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-espresso-900">{item.name}</p>
                    <p className="text-sm text-espresso-500">{formatPrice(item.price)} each</p>

                    <div className="mt-2 flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-espresso-200 text-espresso-600 transition-colors hover:bg-latte"
                      >
                        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <span
                        className="w-6 text-center text-sm font-semibold text-espresso-900"
                        aria-live="polite"
                      >
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-espresso-200 text-espresso-600 transition-colors hover:bg-latte"
                      >
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="font-display font-bold text-espresso-900">
                      {formatPrice(item.price * item.qty)}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name} from order`}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-espresso-300 transition-colors hover:bg-red-50 hover:text-red-400"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="border-t border-espresso-100 bg-white px-6 py-5">
              <div className="flex items-center justify-between text-sm text-espresso-500">
                <span>Subtotal</span>
                <span className="font-display text-2xl font-bold text-espresso-900">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-espresso-400">
                Pickup at the counter — taxes included in menu prices.
              </p>

              <button
                type="button"
                onClick={() =>
                  showToast('Checkout is a demo — no real orders or payments are processed')
                }
                className="mt-4 w-full rounded-full bg-espresso-800 py-4 font-semibold text-cream transition-colors hover:bg-espresso-700"
              >
                Checkout
              </button>

              <p className="mt-3.5 flex items-start justify-center gap-1.5 text-center text-[11px] leading-relaxed text-espresso-400">
                <Info className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
                Front-end demo — orders &amp; payments aren&apos;t connected to a backend yet.
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
