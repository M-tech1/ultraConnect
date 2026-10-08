import { mission, vision } from '../data'
import ChapterHeading from './ChapterHeading'

export default function MissionVision() {
  return (
    <section className="section mission" id="mission">
      <div className="container">
        <div data-reveal>
          <ChapterHeading num="04" dark="Mission &" accent="Vision" />
        </div>
        <div className="mv">
          <article className="mv__card mv__card--mission" data-reveal>
            <span className="quote-mark" aria-hidden="true">”</span>
            <h3>Mission</h3>
            {mission.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </article>
          <article className="mv__card mv__card--vision" data-reveal>
            <span className="quote-mark" aria-hidden="true">”</span>
            <h3>Vision</h3>
            <p>{vision}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
