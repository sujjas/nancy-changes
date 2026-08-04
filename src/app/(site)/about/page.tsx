import Link from 'next/link';
import CtaSection from '@/components/CtaSection';

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-text"><div>
          <p className="about-hero-eyebrow">Former BBC World News Lead Presenter</p>
          <h1 className="about-hero-title">What 20 years of high-stakes broadcasting taught me about how leaders <em>lose (and win) rooms.</em></h1>
          <p className="about-hero-sub">I&apos;m Nancy Kacungira — a former BBC World News Senior Lead Presenter, award-winning journalist and strategic communication advisor. I work with senior professionals and organisations who need their communication to match the level of their expertise.</p>
          <div className="about-hero-cta">
            <Link href="/contact" className="btn btn-dark btn-lg">
              Work with Nancy{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>
        </div></div>
        {/* TODO: Replace /Nancy07.jpg with Nancy's BBC studio/on-air photo once supplied (still outstanding per her 9 Jul 2026 email). */}
        <div className="about-hero-img"><img src="/Nancy07.jpg" alt="Nancy Kacungira" /></div>
      </section>

      <section className="section-white"><div className="container bio-section">
        <div className="bio-image reveal"><img src="/nancy-9.jpg" alt="Nancy portrait" /></div>
        <div className="bio-text">
          <p className="section-eyebrow reveal">The career that built the method</p>
          <h2 className="section-heading reveal">The career that built <em>the method</em></h2>
          <p className="bio-paragraph reveal">I spent nearly two decades in international broadcast journalism — presenting breaking news, interviewing heads of state, and moderating high-stakes global conversations at institutions including the World Economic Forum, the IMF and the EBRD.</p>
          <p className="bio-paragraph reveal">In that environment, clarity is not optional. You have seconds to frame a story, hold an audience, and convey complex ideas under pressure. There is no room for filler or over-explanation; every word must do a job.</p>
          <p className="bio-paragraph reveal">That discipline is what I now bring into the training room.</p>
          <p className="bio-paragraph reveal">In 2015 I won the inaugural BBC Komla Dumor Award — selected from hundreds of applicants across Africa as the next generation of broadcast talent. I hold a Masters in Communication Studies from the University of Leeds.</p>
          <p className="bio-paragraph reveal">I work with professionals who are already excellent at what they do; the gap is never knowledge. It is always communication; specifically, the ability to translate expertise into authority in real time, under pressure, in rooms where the outcome matters.</p>
          <Link href="/contact" className="bio-cta reveal">
            Work with Nancy{' '}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </div>
      </div></section>

      <section className="section-cream"><div className="container container--centred">
        <p className="section-eyebrow reveal">Highlights</p>
        <h2 className="section-heading reveal">Milestones that <em>define the journey</em></h2>
        <div className="timeline-vertical" id="timelineWrapper">
          <div className="timeline-v-line"><div className="timeline-v-fill" id="timelineLineFill"></div></div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2015</span>
              <h3 className="timeline-title">Won inaugural BBC Komla Dumor Award</h3>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2016</span>
              <h3 className="timeline-title">Joined BBC World News, London</h3>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2016</span>
              <h3 className="timeline-title">Women for Africa International Woman of the Year</h3>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2019–2020</span>
              <h3 className="timeline-title">Named among Africa&apos;s 100 Most Influential Young Africans</h3>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2020</span>
              <h3 className="timeline-title">Promoted to Senior Lead Presenter &amp; Correspondent, BBC World News</h3>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2025</span>
              <h3 className="timeline-title">Named to Most Influential People of African Descent Global Top 100</h3>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2025</span>
              <h3 className="timeline-title">Launched Communication Clarity advisory practice</h3>
            </div>
          </div>
        </div>
      </div></section>

      <CtaSection />
    </>
  );
}
