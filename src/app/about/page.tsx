import Link from 'next/link';
import CtaSection from '@/components/CtaSection';

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-text"><div>
          <p className="about-hero-eyebrow">About Nancy</p>
          <h1 className="about-hero-title">The voice behind<br/><em>the story.</em></h1>
          <div className="about-hero-cta">
            <Link href="/contact" className="btn btn-dark btn-lg">
              Let&apos;s Talk{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>
        </div></div>
        <div className="about-hero-img"><img src="/Nancy07.jpg" alt="Nancy Kacungira" /></div>
      </section>

      <section className="about-positioning">
        <div className="about-positioning-inner">
          <span className="about-positioning-label reveal">Current focus</span>
          <p className="reveal" style={{transitionDelay:'0.15s'}}>I&apos;m a Strategic Communication Advisor and former BBC News presenter. I specialise in helping high-performing professionals bridge the gap between their competence and their communication. My work focuses on narrative control, executive signal, and the specific dynamics of communicating in high-pressure environments.</p>
        </div>
      </section>

      <section className="section-white"><div className="container bio-section">
        <div className="bio-image reveal"><img src="/Nancy02.jpg" alt="Nancy portrait" /></div>
        <div className="bio-text">
          <p className="section-eyebrow reveal">The Full Story</p>
          <h2 className="section-heading reveal">From Kampala&apos;s airwaves to the <em>world stage</em></h2>
          <p className="bio-paragraph reveal">Nancy Kacungira is an award-winning Ugandan journalist and strategic communication expert whose career has taken her to the anchor desk at BBC News, where she has presented breaking news coverage and brought incisive analysis to some of the world&apos;s most significant stories.</p>
          <p className="bio-paragraph reveal">A recipient of the inaugural BBC World News Komla Dumor Award and a Masters graduate of the University of Leeds in Communication Studies, Nancy has interviewed presidents, heads of state and global leaders across politics, business and international affairs. Her documentaries and TEDx talk on African narratives have twice earned her recognition among Africa&apos;s 100 Most Influential Young People.</p>
          <p className="bio-paragraph reveal">As a sought-after moderator and keynote speaker, Nancy has presided over high-profile events including sessions at the World Economic Forum, IMF and World Bank. She now works with leaders, organisations and institutions across Africa and globally, helping them close the gap between the good work they do, and the effectiveness with which it&apos;s communicated.</p>
        </div>
      </div></section>

      <section className="section-dark" id="quoteSection"><div className="container"><div className="quote-section">
        <p className="section-eyebrow" style={{textAlign:'center',color:'var(--text-light-muted)'}}>A Personal Note</p>
        <p className="quote-text" id="quoteText"></p>
        <p className="quote-attr">— Nancy Kacungira</p>
      </div></div></section>

      <section className="section-cream"><div className="container container--centred">
        <p className="section-eyebrow reveal">Highlights</p>
        <h2 className="section-heading reveal">Milestones that <em>define the journey</em></h2>
        <div className="timeline-vertical" id="timelineWrapper">
          <div className="timeline-v-line"><div className="timeline-v-fill" id="timelineLineFill"></div></div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2006</span>
              <h3 className="timeline-title">Makerere University</h3>
              <p className="timeline-desc">First-class honours in Industrial and Fine Art.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2015</span>
              <h3 className="timeline-title">Komla Dumor Award</h3>
              <p className="timeline-desc">Won the inaugural BBC award from 200 applicants.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2016</span>
              <h3 className="timeline-title">Presidential Debate</h3>
              <p className="timeline-desc">Co-moderated Uganda&apos;s national debate.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2017</span>
              <h3 className="timeline-title">BBC Focus on Africa</h3>
              <p className="timeline-desc">Debuted as BBC World News presenter.</p>
            </div>
          </div>
        </div>
      </div></section>

      <CtaSection />
    </>
  );
}
