import Link from 'next/link';
import CtaSection from '@/components/CtaSection';
import RotatingImage from '@/components/RotatingImage';

export default function SpeakingPage() {
  return (
    <>
      <section className="sp-hero">
        <div className="sp-hero-text"><div>
          <p className="sp-hero-eyebrow">Speaking &amp; Moderation</p>
          <h1 className="sp-hero-title">Shaping how leaders <em>communicate.</em></h1>
          <p className="sp-hero-desc">From the World Economic Forum to the BBC newsroom, Nancy brings clarity to complex narratives — helping audiences rethink how they speak, influence, and lead.</p>
          <div className="sp-hero-cta">
            <Link href="/contact" className="btn btn-dark btn-lg">
              Let&apos;s Talk{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>
        </div></div>
        <div className="sp-hero-img"><img src="/nancy-6.jpg" alt="Nancy Kacungira" data-parallax="0.15" /></div>
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
        <div style={{marginBottom:'3.5rem'}}>
          <p className="section-eyebrow reveal">Topics &amp; Themes</p>
          <h2 className="section-heading reveal">What Nancy <em>speaks about</em></h2>
          <p className="section-desc reveal">Every talk is rooted in real experience — from the newsroom to the boardroom.</p>
        </div>
        <div className="topics-grid reveal-stagger">
          <div className="topic-card reveal"><span className="topic-number">01</span><h3 className="topic-title">Strategic Communication</h3><p className="topic-desc">How to craft messages that cut through noise, build trust, and move people to action.</p></div>
          <div className="topic-card reveal"><span className="topic-number">02</span><h3 className="topic-title">Narrative Intelligence</h3><p className="topic-desc">Understanding the stories that shape perception — in media, business, and politics.</p></div>
          <div className="topic-card reveal"><span className="topic-number">03</span><h3 className="topic-title">African Narratives</h3><p className="topic-desc">Challenging outdated portrayals with nuanced, evidence-based storytelling.</p></div>
          <div className="topic-card reveal"><span className="topic-number">04</span><h3 className="topic-title">Leadership &amp; Presence</h3><p className="topic-desc">Building presence that commands rooms — through clarity, not volume.</p></div>
          <div className="topic-card reveal"><span className="topic-number">05</span><h3 className="topic-title">Media &amp; Discourse</h3><p className="topic-desc">How media shapes opinion and how to engage more effectively with journalists.</p></div>
          <div className="topic-card reveal"><span className="topic-number">06</span><h3 className="topic-title">Women in Leadership</h3><p className="topic-desc">Navigating visibility and authority — drawn from Nancy&apos;s own journey.</p></div>
        </div>
      </div></section>


      <section className="section-dark"><div className="container">
        <div style={{marginBottom:'3.5rem'}}>
          <p className="section-eyebrow reveal">Who This Is For</p>
          <h2 className="section-heading reveal">Designed for leaders who need to <em>be heard</em></h2>
        </div>
        <div className="audiences-grid">
          <div className="audience-card reveal-left">
            <div className="audience-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div><p className="audience-name">C-Suite &amp; Senior Leaders</p><p className="audience-desc">Executives who need to communicate vision and inspire confidence.</p></div>
          </div>
          <div className="audience-card reveal-right">
            <div className="audience-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div><p className="audience-name">Communications Teams</p><p className="audience-desc">Professionals sharpening narrative strategy and engagement.</p></div>
          </div>
          <div className="audience-card reveal-left">
            <div className="audience-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <div><p className="audience-name">Event Organisers</p><p className="audience-desc">Curators seeking a speaker who can anchor and elevate discussions.</p></div>
          </div>
          <div className="audience-card reveal-right">
            <div className="audience-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div><p className="audience-name">Founders &amp; Entrepreneurs</p><p className="audience-desc">Builders telling their story with conviction.</p></div>
          </div>
        </div>
      </div></section>

      <section className="section-cream"><div className="container">
        <div className="formats-layout">
          <div>
            <p className="section-eyebrow reveal">Formats</p>
            <h2 className="section-heading reveal">Tailored to your <em>event</em></h2>
            <div className="format-list">
              <div className="format-item reveal"><div className="format-left"><span className="format-dot"></span><span className="format-name">Keynote Address</span></div><span className="format-tag">30–60 min</span><span className="line-draw"></span></div>
              <div className="format-item reveal"><div className="format-left"><span className="format-dot"></span><span className="format-name">Panel Moderation</span></div><span className="format-tag">45–90 min</span><span className="line-draw"></span></div>
              <div className="format-item reveal"><div className="format-left"><span className="format-dot"></span><span className="format-name">Fireside Chat</span></div><span className="format-tag">30–45 min</span><span className="line-draw"></span></div>
              <div className="format-item reveal"><div className="format-left"><span className="format-dot"></span><span className="format-name">Workshop</span></div><span className="format-tag">Half/full day</span><span className="line-draw"></span></div>
              <div className="format-item reveal"><div className="format-left"><span className="format-dot"></span><span className="format-name">MC &amp; Hosting</span></div><span className="format-tag">Custom</span><span className="line-draw"></span></div>
            </div>
          </div>
          <div className="formats-image reveal"><RotatingImage /></div>
        </div>
      </div></section>

      <section className="section-white"><div className="container">
        <div className="home-pullquote reveal">
          <span className="pullquote-mark">&ldquo;</span>
          <p className="pullquote-text">Nancy did a brilliant job for us! It was a dense topic but she kept everyone engaged and it felt very conversational. The feedback from the panels was excellent.</p>
          <div className="pullquote-attribution">
            <span className="pullquote-role">Panel Organizer, EBRD Annual Meetings</span>
          </div>
        </div>
      </div></section>

      <CtaSection />
    </>
  );
}
