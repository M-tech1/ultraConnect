// Section heading styled like the PDF page tabs: "UltraConnect ──── 04"
export default function ChapterHeading({ num, dark, accent, light = false }) {
  return (
    <header className={`chapter-heading ${light ? 'is-light' : ''}`}>
      <span className="chapter-bignum" aria-hidden="true">{num}</span>
      <div className="chapter-tab">
        <span className="chapter-tab__brand">UltraConnect</span>
        <span className="chapter-tab__line" />
        <span className="chapter-tab__num">{num}</span>
      </div>
      <h2>
        {dark} <span className="accent">{accent}</span>
      </h2>
    </header>
  )
}
