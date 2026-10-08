import { chapters, company, img } from '../data'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <img className="footer__logo" src={img('logo-full.png')} alt="UltraConnect Solutions" loading="lazy" />
          <p className="footer__rc">{company.rc}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer__links">
            {chapters.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`}>{c.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__contact">
          <a href={company.phoneHref}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>{company.location}</span>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {year} {company.name}</span>
        <span className="script">{company.tagline}</span>
      </div>
    </footer>
  )
}
