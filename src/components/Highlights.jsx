import { highlights, img } from '../data'
import ChapterHeading from './ChapterHeading'

export default function Highlights() {
  return (
    <section className="section highlights dark" id="highlights">
      <div className="halftone halftone--dark" aria-hidden="true" />
      <div className="container">
        <div className="highlights__head" data-reveal>
          <ChapterHeading num="06" dark="Company" accent="Highlights" light />
          <p>A snapshot of the systems we design, supply and install — from rooftop to server room.</p>
        </div>
        <div className="mosaic">
          {highlights.map((h) => (
            <figure key={h.label} className={`mosaic__tile area-${h.area}`} data-reveal>
              <img src={h.image} alt={h.label} loading="lazy" />
              <figcaption>{h.label}</figcaption>
            </figure>
          ))}
          <img className="mosaic__cutout cut-1" src={img('hl-cat6.webp')} alt="" loading="lazy" />
          <img className="mosaic__cutout cut-2" src={img('hl-rj45.webp')} alt="" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
