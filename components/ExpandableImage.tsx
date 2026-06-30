'use client'

import { useEffect, useId, useState } from 'react'

type ExpandableImageProps = {
  src: string
  alt?: string
  caption?: string
  className?: string
}

export function ExpandableImage({ src, alt = '', caption, className = '' }: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const titleId = useId()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <>
      <button className="group relative block w-full cursor-zoom-in overflow-hidden text-left" type="button" onClick={() => setIsOpen(true)} aria-label="Expand image">
        <img className={className} src={src} alt={alt} />
        <span className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/15 bg-ink/75 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur transition group-hover:opacity-100 group-focus-visible:opacity-100">
          Expand
        </span>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby={caption ? titleId : undefined} onClick={() => setIsOpen(false)}>
          <div className="relative max-h-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-ink/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10" type="button" onClick={() => setIsOpen(false)}>
              Close
            </button>
            <img className="max-h-[82vh] w-auto max-w-full rounded-2xl border border-white/10 object-contain shadow-glow" src={src} alt={alt} />
            {caption ? (
              <p id={titleId} className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-slate-300">
                {caption}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}
