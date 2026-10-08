import { ceo } from "../data";
// import ceoImage from "../assets/images/ceo.jpg";
import ChapterHeading from "./ChapterHeading";

export default function Ceo() {
  return (
    <section className="section ceo dark" id="ceo">
      <div className="container ceo__grid">
        <figure className="ceo__portrait" data-reveal>
          <div className="ceo__block" aria-hidden="true" />
          <img src={ceo.photo} alt={`Portrait of ${ceo.name}`} loading="lazy" />
        </figure>

        <div data-reveal>
          <ChapterHeading num="02" dark="About" accent="the CEO" light />
          <p className="ceo__name">{ceo.name}</p>
          <p className="ceo__title">{ceo.title}</p>
          <blockquote className="ceo__bio">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            {ceo.bio}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
