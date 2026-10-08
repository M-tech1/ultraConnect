import { about, img } from '../data'
import ChapterHeading from './ChapterHeading'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div data-reveal>
          <ChapterHeading num="01" dark="About" accent="Company" />
          <p className="lead">{about.lead}</p>
          {about.body.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <dl className="stats">
            {about.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about__visual" data-reveal>
          <div className="halftone" aria-hidden="true" />
          <div className="about__accent" aria-hidden="true" />
          <img className="about__img" src={img('smart-home.webp')} alt="Smart home devices: camera, thermostat, smart speaker and lighting" loading="lazy" />
          <blockquote className="about__quote">{about.quote}</blockquote>
        </div>
      </div>
    </section>
  )
}
