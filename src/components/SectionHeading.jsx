import Reveal from './Reveal'

/**
 * Consistent section heading with an eyebrow label, serif title
 * and optional description. Supports center/left alignment and
 * dark (on espresso) sections.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'center', dark = false }) {
  const centered = align === 'center'

  return (
    <Reveal className={`mb-14 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <span
        className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] ${
          dark ? 'text-gold' : 'text-gold-dark'
        }`}
      >
        <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
        {eyebrow}
        <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
      </span>
      <h2
        className={`mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl ${
          dark ? 'text-cream' : 'text-espresso-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 leading-relaxed ${dark ? 'text-cream/60' : 'text-espresso-500'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
