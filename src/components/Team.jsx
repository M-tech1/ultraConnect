import { useRef } from 'react'
import { company, img, team } from '../data'
import ChapterHeading from './ChapterHeading'
import { ChevronIcon } from './Icons'

export default function Team() {
  const railRef = useRef(null)
  const scroll = (dir) => railRef.current.scrollBy({ left: dir * railRef.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="team__head" data-reveal>
          <ChapterHeading num="07" dark="Creative" accent="Team" />
          <div className="team__controls">
            <button onClick={() => scroll(-1)} aria-label="Previous team members">
              <ChevronIcon dir="left" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next team members">
              <ChevronIcon />
            </button>
          </div>
        </div>
      </div>

      <ul className="team__rail" ref={railRef}>
        <li className="team__intro">
          <img src={img('team-at-work.webp')} alt="An UltraConnect engineer working at a desk" loading="lazy" />
          <div>
            <p>Certified engineers and technicians — networking, solar, automation, electrical and software — working as one crew.</p>
            <span className="team__rc">{company.rc}</span>
          </div>
        </li>
        {team.map((m, i) => (
          <li key={m.name} className="member">
            <img src={m.photo} alt={`Portrait of ${m.name}`} loading="lazy" />
            <div className={`member__plate ${i % 2 ? 'is-dark' : ''}`}>
              <strong>{m.name}</strong>
              <span>{m.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
