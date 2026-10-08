import { useEffect, useRef, useState } from 'react'
import { img, portfolio } from '../data'
import ChapterHeading from './ChapterHeading'
import { ChevronIcon, CloseIcon } from './Icons'

export default function Portfolio() {
  const [index, setIndex] = useState(null)
  const closeRef = useRef(null)
  const lastFocus = useRef(null)
  const touchX = useRef(0)

  const isOpen = index !== null
  const go = (step) => setIndex((i) => (i + step + portfolio.length) % portfolio.length)

  const openAt = (i) => {
    lastFocus.current = document.activeElement
    setIndex(i)
  }
  const close = () => {
    setIndex(null)
    lastFocus.current?.focus()
  }

  useEffect(() => {
    if (!isOpen) return
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio__head" data-reveal>
          <ChapterHeading num="08" dark="Company" accent="Portfolio" />
          <img className="portfolio__logo" src={img('logo-full.png')} alt="UltraConnect Solutions — Creating Solutions That Scale" loading="lazy" />
        </div>

        <ul className="collage">
          {portfolio.map((p, i) => (
            <li key={p.caption} className={`collage__item is-${p.shape}`} data-reveal>
              <button onClick={() => openAt(i)} aria-label={`View photo: ${p.caption}`}>
                <img src={p.src} alt={p.caption} loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={portfolio[index].caption}
          onClick={(e) => e.target === e.currentTarget && close()}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
          }}
        >
          <button className="lightbox__close" onClick={close} ref={closeRef} aria-label="Close">
            <CloseIcon />
          </button>
          <button className="lightbox__nav is-prev" onClick={() => go(-1)} aria-label="Previous photo">
            <ChevronIcon dir="left" />
          </button>
          <figure>
            <img src={portfolio[index].src} alt={portfolio[index].caption} />
            <figcaption>
              <span>{String(index + 1).padStart(2, '0')} / {String(portfolio.length).padStart(2, '0')}</span>
              {portfolio[index].caption}
            </figcaption>
          </figure>
          <button className="lightbox__nav is-next" onClick={() => go(1)} aria-label="Next photo">
            <ChevronIcon />
          </button>
        </div>
      )}
    </section>
  )
}
