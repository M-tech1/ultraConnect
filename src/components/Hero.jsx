import { useEffect, useState } from 'react'
import { company, img } from '../data'
import { PhoneIcon, SignalRings, WhatsAppIcon } from './Icons'

const tags = ['CCTV', 'Home Automation', 'Networking', 'Satellite', 'Sound Systems']
const marquee = ['CCTV', 'Home Automation', 'Intercom', 'Internet Networking', 'Satellite', 'Sound Systems', 'Solar', 'Server Admin', 'Procurement']

// Free-licence photos from Unsplash, one per core service
const slides = [
  { src: img('hero-electrician.webp'), kicker: 'Installation', title: 'Expert hands on every job', alt: 'Electrician in a hard hat wiring a wall panel', pos: '72% 40%' },
  { src: img('hero-cctv-wall.webp'), kicker: 'CCTV & surveillance', title: 'Eyes on what matters', alt: 'Rows of CCTV security cameras mounted on a wall', pos: 'center' },
  { src: img('hero-smart-lock.webp'), kicker: 'Home automation', title: 'Your home, on your phone', alt: 'Smart door lock controlled from a smartphone app', pos: '60% center' },
  { src: img('hero-patch-panel.webp'), kicker: 'Internet networking', title: 'Fast, stable connectivity', alt: 'Network patch panel with blue ethernet cables', pos: 'center' },
  { src: img('hero-server-racks.webp'), kicker: 'Server admin', title: 'Infrastructure that scales', alt: 'Server racks with neatly routed cabling', pos: 'center' },
  { src: img('hero-modern-house.webp'), kicker: 'Smart homes', title: 'Secure, connected living', alt: 'Modern house lit up at dusk', pos: 'center' },
  { src: img('hero-home-tv.webp'), kicker: 'Satellite & entertainment', title: 'Clear signal, every channel', alt: 'Smart TV showing streaming apps in a dim living room', pos: 'center' },
  { src: img('hero-speaker.webp'), kicker: 'Home sound systems', title: 'Sound that fills the room', alt: 'Bookshelf speaker in teal light', pos: 'center' },
  { src: img('hero-solar.webp'), kicker: 'Solar power', title: 'Clean, reliable energy', alt: 'Rows of solar panels under a blue sky', pos: 'center' },
  { src: img('hero-site-crew.webp'), kicker: 'Procurement & installation', title: 'From survey to handover', alt: 'Site crew in hi-vis vests on a construction site', pos: 'center 80%' },
  { src: img('hero-handshake.webp'), kicker: 'Consultations', title: 'Advice you can trust', alt: 'Two people shaking hands across a table', pos: 'center' },
]
const SLIDE_MS = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setTimeout(() => setCurrent((c) => (c + 1) % slides.length), SLIDE_MS)
    return () => clearTimeout(timer)
  }, [current, paused])

  const slide = slides[current]

  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            Company Profile <span className="dot" /> {company.location}
          </p>
          <h1>
            Smart infrastructure,
            <br />
            built to <em>scale.</em>
          </h1>
          <p className="hero__intro">{company.intro}</p>
          <div className="hero__ctas">
            <a className="slant-btn" href={company.phoneHref}>
              <PhoneIcon /> Call us
            </a>
            <a className="slant-btn slant-btn--ghost" href={company.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
          <ul className="hero__tags" aria-label="What we do">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="hero__media" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="hero__visual">
            <div className="hero__shape hero__shape--dark" aria-hidden="true" />
            <div className="hero__panel">
              {slides.map((s, i) => (
                <img key={s.title} src={s.src} alt={s.alt} style={{ objectPosition: s.pos }} className={i === current ? 'is-active' : ''} aria-hidden={i !== current} />
              ))}
              <div className="hero__panel-label" key={current} aria-live="polite">
                <span>{slide.kicker}</span>
                <strong>{slide.title}</strong>
              </div>
            </div>
            <div className="hero__outline" aria-hidden="true" />
            <SignalRings className="hero__signal" />
            <p className="hero__stamp">{company.tagline}</p>
          </div>

          <div className="hero__controls">
            <span className="hero__count">
              <strong>{String(current + 1).padStart(2, '0')}</strong> / {String(slides.length).padStart(2, '0')}
            </span>
            <div className="hero__dots">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  className={i === current ? 'is-active' : ''}
                  style={{ '--dur': `${SLIDE_MS}ms`, '--play': paused ? 'paused' : 'running' }}
                  onClick={() => setCurrent(i)}
                  aria-label={`Show photo ${i + 1}: ${s.title}`}
                  aria-current={i === current}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>
              {m} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
