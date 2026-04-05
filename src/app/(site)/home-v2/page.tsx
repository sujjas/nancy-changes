import Link from 'next/link';
import CtaSection from '@/components/CtaSection';
import ServicesAccordion from '@/components/ServicesAccordion';
import BioScrollytell from '@/components/BioScrollytell';

export default function HomeV2Page() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-text"><div>
          <h1 className="home-hero-title">Strategic<br/>Communication<br/>at the <em>narrative layer.</em></h1>
          <p className="home-hero-sub">For leaders whose communication must match the weight of their work.</p>
          <div className="home-hero-cta">
            <Link href="/contact" className="btn btn-accent btn-lg">
              Enquire for training{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-dark btn-lg">
              Enquire for Speaking{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Link>
          </div>
        </div></div>
        <div className="home-hero-img"><img src="/Nancy01.jpg" alt="Nancy Kacungira" /></div>
      </section>

      <div className="logo-bar">
        <p className="logo-bar-eyebrow">As featured in</p>
        <div className="logo-row">
          <img src="/logos/BBC world news.png" alt="BBC World News" className="logo-img" />
          <img src="/logos/World Economic forum.png" alt="World Economic Forum" className="logo-img" />
          <img src="/logos/EBRD.png" alt="EBRD" className="logo-img" />
          <img src="/logos/World bank.png" alt="IMF / World Bank" className="logo-img" />
          <img src="/logos/Ted X.png" alt="TEDx" className="logo-img" />
        </div>
      </div>

      <ServicesAccordion />

      <BioScrollytell />

      <section className="section-dark"><div className="container">
        <div className="impact-grid">
          <div className="impact-card reveal"><div className="impact-number" data-count="15" data-suffix="+">0</div><div className="impact-label">Years in international<br/>broadcast</div></div>
          <div className="impact-card reveal"><div className="impact-number" data-count="3">0</div><div className="impact-label">Continents of clients<br/>and audiences</div></div>
          <div className="impact-card reveal"><div className="impact-number impact-number--text">BBC</div><div className="impact-label">Since 2016</div></div>
          <div className="impact-card reveal"><div className="impact-number impact-number--text">1st</div><div className="impact-label">Inaugural Komla Dumor<br/>Award Winner · 2015</div></div>
        </div>
      </div></section>

      <section className="section-white"><div className="container">
        <div className="home-pullquote reveal">
          <span className="pullquote-mark">&ldquo;</span>
          <p className="pullquote-text">I had a mind shift. I am learning to keep my big energy, but be less verbose using the framework Nancy taught me. I would recommend this work to senior leaders in C-suite, executive teams, and also mid-level ambitious colleagues. This is not about changing who you are — it&apos;s about flexing your style to consider your audience, connection, and ultimately the level of engagement.</p>
          <div className="pullquote-attribution">
            <span className="pullquote-role">General Counsel, FTSE 500</span>
          </div>
        </div>
      </div></section>

      <CtaSection />
    </>
  );
}
