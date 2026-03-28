import Link from 'next/link';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-text"><div>
          <h1 className="home-hero-title">Strategic<br/>Communication<br/>at the <em>narrative layer.</em></h1>
          <p className="home-hero-sub">Narrative strategy and executive presence for high-stakes environments.</p>
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
        <div className="logo-row">
          <img src="/logos/BBC world news.png" alt="BBC World News" className="logo-img" />
          <img src="/logos/World Economic forum.png" alt="World Economic Forum" className="logo-img" />
          <img src="/logos/EBRD.png" alt="EBRD" className="logo-img" />
          <img src="/logos/World bank.png" alt="IMF / World Bank" className="logo-img" />
          <img src="/logos/Ted X.png" alt="TEDx" className="logo-img" />
        </div>
      </div>

      <section className="section-white"><div className="container">
        <div style={{marginBottom:'3rem'}}>
          <h2 className="section-heading reveal" style={{fontSize:'clamp(2.5rem,4.5vw,65px)',letterSpacing:'-1.3px'}}>The <em>work.</em></h2>
        </div>
        <div className="services-layout reveal">
          {/* Dominant offer */}
          <div className="service-dominant">
            <span className="service-dominant-label">Flagship</span>
            <h3 className="service-dominant-title">Communication Intelligence</h3>
            <p className="service-dominant-subtitle">Sound senior when you&apos;re being assessed</p>
            <p className="service-dominant-body">A self-directed system that teaches how senior decision-makers assess clarity, credibility, and readiness — and how to meet that bar calmly under pressure.</p>
            <Link href="/library" className="service-cta">Explore the system <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></Link>
          </div>
          {/* Secondary offers */}
          <div className="service-secondaries">
            <div className="service-secondary">
              <h4 className="service-secondary-title">Selective Advisory</h4>
              <p className="service-secondary-subtitle">For specific high-stakes moments</p>
              <p className="service-secondary-body">A strategic intervention for individuals preparing for a defining moment — pitch, board, media, keynote. I&apos;ll refine your narrative, structure, and delivery to ensure maximum authority. By request only.</p>
              <Link href="/contact" className="service-cta">Request details <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></Link>
            </div>
            <div className="service-secondary">
              <h4 className="service-secondary-title">Keynotes &amp; Workshops</h4>
              <p className="service-secondary-subtitle">For organisations and leadership teams</p>
              <p className="service-secondary-body">Interactive sessions on Narrative Intelligence, Executive Presence, and Communication Archetypes. Designed for leadership off-sites, ERGs, and industry conferences.</p>
              <Link href="/contact" className="service-cta">Enquire <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></Link>
            </div>
            <div className="service-secondary">
              <h4 className="service-secondary-title">The Clarity System</h4>
              <p className="service-secondary-subtitle">Get to know the method</p>
              <p className="service-secondary-body">A curated collection of frameworks, essays, and tools for professionals who want to think more clearly about how they communicate.</p>
              <Link href="/library" className="service-cta">Explore the System <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></Link>
            </div>
          </div>
        </div>
      </div></section>

      <section className="section-cream bio-section-cream">
        <div className="bio-grid reveal">
          <div className="bio-text-col">
            <h2 className="bio-editorial-title">My <em>story.</em></h2>
            <div className="bio-columns">
              <p>Nancy Kacungira works with senior leaders and high-performing professionals to sharpen how they communicate in environments where the quality of a conversation determines the quality of an outcome.</p>
              <p>A former lead presenter and correspondent for BBC News with nearly two decades of broadcast experience, she has built a career at the intersection of storytelling, influence, and strategic communication.</p>
              <p>Her journey began with presenting on radio in Uganda while studying at Makerere University; graduating with first-class honours. She obtained a Master&apos;s degree in Communication studies from Leeds University before joining KTN Kenya as a news anchor, where she won the inaugural BBC Komla Dumor Award — recognising the next generation of African broadcast talent — in 2015.</p>
              <p>She now applies the communication skills and narrative awareness she developed in international broadcast to help senior professionals and organisations communicate with the authority their work deserves.</p>
              <p>She brings the same discipline she applied in high-pressure newsrooms: where clarity, credibility, and precision were non-negotiable; directly into the training room: practical, scenario-based, and immediately transferable.</p>
            </div>
            <Link href="/about" className="bio-cta">More about Nancy →</Link>
          </div>
          <div className="bio-image-col">
            <img src="/nancy-cutout.png" alt="Nancy Kacungira" />
          </div>
        </div>
      </section>

      <section className="section-dark"><div className="container">
        <div className="impact-grid">
          <div className="impact-card reveal"><div className="impact-number" data-count="15" data-suffix="+">0</div><div className="impact-label">Years in international<br/>broadcast</div></div>
          <div className="impact-card reveal"><div className="impact-number" data-count="3">0</div><div className="impact-label">Continents of clients<br/>and audiences</div></div>
          <div className="impact-card reveal"><div className="impact-number impact-number--text">BBC</div><div className="impact-label">Since 2016</div></div>
          <div className="impact-card reveal"><div className="impact-number" data-count="2015">0</div><div className="impact-label">Inaugural Komla Dumor<br/>Award Winner</div></div>
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
