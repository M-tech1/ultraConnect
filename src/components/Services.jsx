import { useRef, useState } from 'react'
import { services } from '../data'
import ChapterHeading from './ChapterHeading'
import { ArrowIcon } from './Icons'

const extras = ['CCTV', 'WiFi', 'Access Control', 'IP Telephone']

export default function Services() {
  const [open, setOpen] = useState(0)
  const [hovered, setHovered] = useState(null)
  const previewRef = useRef(null)
  const listRef = useRef(null)

  // Desktop: the hovered service's image follows the cursor
  const onMove = (e) => {
    const box = listRef.current.getBoundingClientRect()
    previewRef.current.style.transform = `translate(${e.clientX - box.left}px, ${e.clientY - box.top}px)`
  }

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services__head" data-reveal>
          <ChapterHeading num="05" dark="Our" accent="Services" />
          <div>
            <p>We offer a comprehensive suite of technology integration services, each delivered with precision and backed by years of hands-on expertise.</p>
            <ul className="services__extras">
              {extras.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="svc-wrap" ref={listRef} onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
          <ol className="svc-list">
            {services.map((s, i) => {
              const isOpen = open === i
              return (
                <li key={s.title.join(' ')} className={`svc ${isOpen ? 'is-open' : ''}`} onMouseEnter={() => setHovered(i)}>
                  <button className="svc__row" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                    <span className="svc__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="svc__title">
                      {s.title[0]} <span className="accent">{s.title[1]}</span>
                    </span>
                    <span className="svc__icon">
                      <ArrowIcon />
                    </span>
                  </button>
                  <div className="svc__panel">
                    <div>
                      <p>{s.text}</p>
                      <img src={s.image} alt="" loading="lazy" />
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
          <div className={`svc-preview ${hovered !== null ? 'is-visible' : ''}`} ref={previewRef} aria-hidden="true">
            {services.map((s, i) => (
              <img key={i} src={s.image} alt="" className={hovered === i ? 'is-active' : ''} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
