import { useState } from 'react'
import { Coffee } from 'lucide-react'

/**
 * Image with a graceful branded fallback.
 * If the remote image fails to load, renders a warm gradient
 * placeholder (with initials or a coffee icon) so the layout
 * never breaks.
 */
export default function SafeImage({ src, alt, className = '', fallbackLabel, initials }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-espresso-200 via-latte to-gold-light/50 text-espresso-600 ${className}`}
      >
        {initials ? (
          <span className="font-display text-2xl font-semibold tracking-wide">{initials}</span>
        ) : (
          <Coffee className="h-8 w-8 opacity-70" aria-hidden="true" />
        )}
        {fallbackLabel && (
          <span className="px-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70">
            {fallbackLabel}
          </span>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
