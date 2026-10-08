import { img, story } from '../data'
import ChapterHeading from './ChapterHeading'

export default function Story() {
  return (
    <section className="section story" id="story">
      <div className="container story__grid">
        <div data-reveal>
          <ChapterHeading num="03" dark="Company" accent="History" />
          <p className="story__title">{story.title}</p>
          <div className="story__body">
            {story.body.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="story__visual" data-reveal>
          <div className="story__shape" aria-hidden="true" />
          <img src={img('building.webp')} alt="Modern high-rise office buildings" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
