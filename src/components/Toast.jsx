import { CheckCircle2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

/** Bottom-center toast used for add-to-cart and demo feedback. */
export default function Toast() {
  const { toast } = useCart()

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 transition-all duration-300 ${
        toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {toast && (
        <div
          key={toast.id}
          className="flex items-center gap-3 rounded-full border border-gold/40 bg-espresso-900 px-5 py-3.5 text-cream shadow-soft"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <span className="text-sm font-medium tracking-wide">{toast.message}</span>
        </div>
      )}
    </div>
  )
}
