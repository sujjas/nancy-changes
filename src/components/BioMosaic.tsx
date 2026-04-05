import Link from 'next/link';

export default function BioMosaic() {
  return (
    <section className="bio-mosaic-section">
      <div className="bio-mosaic-grid">

        {/* Bio text card */}
        <div className="bio-mosaic-card bio-mosaic-card--text">
          <h2 className="bio-editorial-title">My <em>story.</em></h2>
          <p>Nancy Kacungira works with senior leaders and high-performing professionals to sharpen how they communicate in environments where the quality of a conversation determines the quality of an outcome.</p>
          <p>A former lead presenter and correspondent for BBC News with nearly two decades of broadcast experience, she has built a career at the intersection of storytelling, influence, and strategic communication.</p>
          <p>She won the inaugural BBC Komla Dumor Award in 2015 and now helps senior professionals and organisations communicate with the authority their work deserves.</p>
          <Link href="/about" className="bio-cta">More about Nancy{' '}<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></Link>
        </div>

        {/* Images */}
        <div className="bio-mosaic-card bio-mosaic-card--img bio-mosaic-card--tall">
          <img src="/nancy-2.jpg" alt="Nancy Kacungira" />
        </div>
        <div className="bio-mosaic-card bio-mosaic-card--img bio-mosaic-card--wide">
          <img src="/nancy-6.jpg" alt="Nancy Kacungira" />
        </div>
        <div className="bio-mosaic-card bio-mosaic-card--img">
          <img src="/nancy-8.jpg" alt="Nancy Kacungira" />
        </div>
        <div className="bio-mosaic-card bio-mosaic-card--img">
          <img src="/nancy-9.jpg" alt="Nancy Kacungira" />
        </div>
        <div className="bio-mosaic-card bio-mosaic-card--img bio-mosaic-card--wide">
          <img src="/nancy-10.png" alt="Nancy Kacungira" />
        </div>

      </div>
    </section>
  );
}
