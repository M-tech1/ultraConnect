import { useEffect, useState } from 'react'
import { chapters, company, img } from '../data'
import { CloseIcon, MenuIcon, WhatsAppIcon } from './Icons'

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  // Highlight the chapter currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    chapters.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      {/* Desktop: vertical chapter rail */}
      <nav className="rail" aria-label="Chapters">
        <a href="#top" className="rail__logo" aria-label="UltraConnect Solutions — back to top">
          <img src={img('logo-mark.png')} alt="" />
        </a>
        <ol className="rail__list">
          {chapters.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className={active === c.id ? 'is-active' : ''} aria-current={active === c.id ? 'true' : undefined}>
                <span className="rail__num">{c.num}</span>
                <span className="rail__label">{c.label}</span>
              </a>
            </li>
          ))}
        </ol>
        <div className="rail__progress" aria-hidden="true">
          <span style={{ transform: `scaleY(${progress})` }} />
        </div>
      </nav>

      <a href={company.whatsapp} target="_blank" rel="noreferrer" className="quote-btn slant-btn">
        <WhatsAppIcon /> <span>Get a Quote</span>
      </a>

      {/* Mobile: top bar + full-screen index menu */}
      <header className="topbar">
        <a href="#top" className="topbar__logo">
          <img src={img('logo-mark.png')} alt="" />
          <span>UltraConnect</span>
        </a>
        <button className="topbar__toggle" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
          <MenuIcon />
        </button>
      </header>

      <div className={`menu ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <button className="menu__close" onClick={() => setOpen(false)} aria-label="Close menu">
          <CloseIcon />
        </button>
        <p className="menu__title">
          The <span className="accent">Content</span>
        </p>
        <ol className="menu__list">
          {chapters.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} onClick={() => setOpen(false)}>
                <span>{c.label}</span>
                <span className="menu__num">{c.num}</span>
              </a>
            </li>
          ))}
        </ol>
        <a className="slant-btn" href={company.phoneHref}>Call {company.phone}</a>
      </div>
    </>
  )
}
