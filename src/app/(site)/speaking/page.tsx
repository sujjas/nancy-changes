import Link from 'next/link';
import CtaSection from '@/components/CtaSection';
import FormatsAccordion from '@/components/FormatsAccordion';

const VIDEOS = [
  { id: 'gEmqIqGgY_4', title: 'Anchoring — BBC World News' },
  { id: '0rFiStjv7k0', title: 'Anchoring — BBC World News' },
  { id: 'wPO2Sa5VoL8', title: 'EBRD Annual Meeting 2026' },
  { id: '-SLKbUfJ7dk', title: 'Africa’s Digital Transformation Panel (2025)' },
  { id: 'csfcZos41BA', title: 'Water Security Investment Panel (2025)' },
  { id: 'uxEhGxgmvDE', title: 'Standard Bank African Markets Conference 2025' },
  { id: 'ZNX7kqUBhQg', title: 'Reykjavik Global Forum — with Melinda Gates & Sanda Ojiambo' },
  { id: 'CZ4X3ygv3X0', title: 'BBC News Civil Rights Special' },
];

export default function SpeakingPage() {
  return (
    <>
      <section className="sp-hero">
        <div className="sp-hero-text"><div>
          <p className="sp-hero-eyebrow">Former BBC World News Lead Presenter</p>
          <h1 className="sp-hero-title">Nancy brings the same discipline she applied in international newsrooms — <em>to your stage.</em></h1>
          <p className="sp-hero-desc">Keynotes, panel moderation, fireside conversations and full-event hosting. For conferences, leadership summits, and corporate events.</p>
          <div className="sp-hero-cta">
            <Link href="/contact" className="btn btn-dark btn-lg">
              Enquire about booking Nancy{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>
        </div></div>
        <div className="sp-hero-img"><img src="/nancy-8.jpg" alt="Nancy Kacungira speaking at the African Markets Conference" data-parallax="0.15" /></div>
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

      <section className="section-white"><div className="container">
        <div style={{marginBottom:'3.5rem'}}>
          <p className="section-eyebrow reveal">Watch</p>
          <h2 className="section-heading reveal">Nancy <em>in action</em></h2>
        </div>
        <div className="video-grid">
          {VIDEOS.map((v) => (
            <div key={v.id} className="video-card reveal">
              <div className="video-embed">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="video-title">{v.title}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section-cream" id="topics"><div className="container">
        <div style={{marginBottom:'3.5rem'}}>
          <p className="section-eyebrow reveal">Topics &amp; Themes</p>
          <h2 className="section-heading reveal">What I <em>speak about</em></h2>
        </div>
        <div className="topics-grid reveal-stagger">
          <div className="topic-card reveal"><span className="topic-number">01</span><h3 className="topic-title">Strategic Communication</h3><p className="topic-desc">How smart people lose rooms; and the specific adjustments that change that. Built on two decades of broadcast experience and direct coaching work with senior leaders.</p></div>
          <div className="topic-card reveal"><span className="topic-number">02</span><h3 className="topic-title">Narrative Intelligence</h3><p className="topic-desc">The stories organisations tell about themselves are often the biggest obstacle to how they&apos;re perceived. This session teaches leaders to identify, interrogate and reframe those narratives.</p></div>
          <div className="topic-card reveal"><span className="topic-number">03</span><h3 className="topic-title">Leadership Presence</h3><p className="topic-desc">Leadership presence is the ability to communicate with clarity, authority, and composure in high-stakes rooms. This session gives leaders a practical framework for showing up with precision and credibility — without over-performing or over-explaining.</p></div>
          <div className="topic-card reveal"><span className="topic-number">04</span><h3 className="topic-title">African Narratives</h3><p className="topic-desc"><em>(for relevant conferences)</em> A forensic look at how global media constructs stories about Africa; and what more accurate, more useful storytelling looks like.</p></div>
        </div>
      </div></section>

      <section className="section-dark"><div className="container">
        <div style={{marginBottom:'3.5rem'}}>
          <p className="section-eyebrow reveal">Who This Is For</p>
          <h2 className="section-heading reveal">Who <em>books me</em></h2>
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
        <FormatsAccordion />

        <div className="moderation-credentials reveal">
          <p className="moderation-credentials-heading">Also trusted to moderate:</p>
          <p className="moderation-credentials-list">World Economic Forum · IMF Spring Meetings · UN General Assembly (incl. the G7 Partnership panel alongside Queen Máxima of the Netherlands and Melinda French Gates) · EBRD Annual Meeting · Standard Bank African Markets Conference (with Sir Tony Blair and African finance ministers) · Mo Ibrahim Governance Weekend · Gates Foundation Goalkeepers · Financial Times Africa Summit · Africa CEO Forum</p>
        </div>
      </div></section>

      <section className="section-white"><div className="container">
        <div className="home-pullquote reveal">
          <span className="pullquote-mark">&ldquo;</span>
          <p className="pullquote-text">Nancy did a brilliant job for us! It was a dense topic but she kept everyone engaged and it felt very conversational. The feedback from the panels was excellent.</p>
          <div className="pullquote-attribution">
            <span className="pullquote-role">— Panel Organizer, EBRD Annual Meetings</span>
          </div>
        </div>
      </div></section>

      <CtaSection
        title={<>Enquire about <em>availability.</em></>}
        desc="Speaking and moderation engagements are booked a minimum of 4 weeks in advance. For major conferences and summits, earlier is better."
        buttonLabel="Enquire now"
      />
    </>
  );
}
