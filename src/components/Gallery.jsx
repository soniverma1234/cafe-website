import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { galleryImages } from '../data/data'
import Reveal from './Reveal'
import SafeImage from './SafeImage'
import SectionHeading from './SectionHeading'

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  // Keyboard navigation + scroll lock for the lightbox.
  useEffect(() => {
    if (selected == null) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setSelected(null)
      if (event.key === 'ArrowRight')
        setSelected((s) => (s == null ? s : (s + 1) % galleryImages.length))
      if (event.key === 'ArrowLeft')
        setSelected((s) => (s == null ? s : (s - 1 + galleryImages.length) % galleryImages.length))
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section id="gallery" className="scroll-mt-24 bg-white py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Moments at <span className="italic text-gold-dark">Brew &amp; Bliss</span>
            </>
          }
          description="Steam, clinking cups and golden light — a little window into an ordinary (wonderful) day at the cafe."
        />

        <div className="grid auto-rows-[160px] grid-flow-row-dense grid-cols-2 gap-4 sm:auto-rows-[200px] md:auto-rows-[220px] md:grid-cols-4">
          {galleryImages.map((image, i) => (
            <Reveal key={image.src} delay={i * 60} className={image.span}>
              <button
                type="button"
                onClick={() => setSelected(i)}
                aria-label={`Open photo: ${image.caption}`}
                className="group relative block h-full w-full overflow-hidden rounded-2xl"
              >
                <SafeImage
                  src={image.src}
                  alt={image.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  fallbackLabel="Brew & Bliss"
                />
                <span
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso-950/75 via-espresso-950/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <span className="text-left text-sm font-medium text-cream">{image.caption}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected != null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso-950/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close photo viewer"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              setSelected((s) => (s - 1 + galleryImages.length) % galleryImages.length)
            }}
            className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <figure
            className="max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <SafeImage
              src={galleryImages[selected].src}
              alt={galleryImages[selected].caption}
              className="animate-fade-up max-h-[76vh] w-full rounded-3xl object-contain shadow-soft"
              fallbackLabel="Brew & Bliss"
            />
            <figcaption className="mt-4 text-center text-sm font-medium tracking-wide text-cream/80">
              {galleryImages[selected].caption} · {selected + 1} / {galleryImages.length}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              setSelected((s) => (s + 1) % galleryImages.length)
            }}
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20 sm:right-8"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  )
}
