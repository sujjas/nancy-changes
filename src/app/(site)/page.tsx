import Link from 'next/link';
import CtaSection from '@/components/CtaSection';
import ServicesAccordion from '@/components/ServicesAccordion';
import BioScrollytell from '@/components/BioScrollytell';

export default function HomePage() {
  return (
    <>
      <section className="home-hero--v4">
        <div className="v4-text">
          <p className="v4-eyebrow">Former BBC World News Lead Presenter</p>
          <h1 className="v4-title">Your next opportunity will be decided in a <em>conversation.</em></h1>
          <div className="hero-stack hero-stack--ticker" aria-label="Every promotion. Every interview. Every board presentation. Every pitch. Every difficult conversation. Every negotiation.">
            <span aria-hidden="true">Every promotion.</span>
            <span aria-hidden="true">Every interview.</span>
            <span aria-hidden="true">Every board presentation.</span>
            <span aria-hidden="true">Every pitch.</span>
            <span aria-hidden="true">Every difficult conversation.</span>
            <span aria-hidden="true">Every negotiation.</span>
          </div>
          <p className="v4-sub">I help high-performing professionals communicate with the precision, authority and presence that gets them taken seriously, in the rooms that matter.</p>
          <div className="v4-cta">
            <Link href="#individuals" className="btn btn-accent btn-lg">
              For Individuals{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
            <Link href="#organisations" className="btn btn-light btn-lg">
              For Organisations{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>
        </div>
        <div className="v4-cutout-wrap">
          <img className="v4-cutout" src="/Nancy07-cutout.png" alt="Nancy Kacungira" />
        </div>
      </section>

      <div className="logo-bar">
        <p className="logo-bar-eyebrow">Former BBC World News Senior Lead Presenter · Komla Dumor Award Winner · World Economic Forum · IMF · EBRD · TEDx</p>
        <div className="logo-row">
          <img src="/logos/BBC world news.png" alt="BBC World News" className="logo-img" />
          <img src="/logos/World Economic forum.png" alt="World Economic Forum" className="logo-img" />
          <img src="/logos/EBRD.png" alt="EBRD" className="logo-img" />
          <img src="/logos/World bank.png" alt="IMF / World Bank" className="logo-img" />
          <img src="/logos/Ted X.png" alt="TEDx" className="logo-img" />
        </div>
      </div>

      <section className="section-white"><div className="container">
        <div className="problem-block reveal">
          <h2 className="section-heading">If any of this sounds <em>familiar:</em></h2>
          <ul className="problem-list">
            <li>&ldquo;I over-explain and I know it.&rdquo;</li>
            <li>&ldquo;I&apos;m the most qualified person in the room but it doesn&apos;t land that way.&rdquo;</li>
            <li>&ldquo;My presentations are detailed — but not persuasive.&rdquo;</li>
            <li>&ldquo;People read me as uncertain when I&apos;m actually just thorough.&rdquo;</li>
            <li>&ldquo;I know my subject. I lose the room when I have to communicate it under pressure.&rdquo;</li>
          </ul>
          <p className="problem-close">This is exactly where the work begins.</p>
        </div>
      </div></section>

      <ServicesAccordion />

      <BioScrollytell />

      <section className="section-dark"><div className="container">
        <div className="impact-grid">
          <div className="impact-card reveal"><div className="impact-number" data-count="15" data-suffix="+">0</div><div className="impact-label">Years in international<br/>broadcast</div></div>
          <div className="impact-card reveal"><div className="impact-number" data-count="3">0</div><div className="impact-label">Continents of clients<br/>and audiences</div></div>
          <div className="impact-card reveal"><div className="impact-number impact-number--text">BBC</div><div className="impact-label">Since 2016</div></div>
          <div className="impact-card reveal"><div className="impact-number impact-number--text">2015</div><div className="impact-label">Inaugural Komla Dumor<br/>Award Winner</div></div>
        </div>
      </div></section>

      <section className="section-white"><div className="container">
        <div className="testimonial-grid">
          <div className="home-pullquote reveal">
            <span className="pullquote-mark">&ldquo;</span>
            <p className="pullquote-text">I had a mind shift. I am learning to keep my big energy, but be less verbose using the framework Nancy taught me. I would recommend this work to senior leaders in C-suite, executive teams, and also mid-level ambitious colleagues. This is not about changing who you are — it&apos;s about flexing your style to consider your audience, connection, and ultimately the level of engagement.</p>
            <div className="pullquote-attribution">
              <span className="pullquote-role">— General Counsel, FTSE 500</span>
            </div>
          </div>
          <div className="home-pullquote reveal">
            <span className="pullquote-mark">&ldquo;</span>
            <p className="pullquote-text">I went from weighing every word four times before speaking to showing up more authentically in every room. I&apos;ve taken on public speaking opportunities, and I&apos;m now planning to run for a role I wouldn&apos;t have even considered before.</p>
            <div className="pullquote-attribution">
              <span className="pullquote-role">— Partner, International Law Firm</span>
            </div>
          </div>
          <div className="home-pullquote reveal">
            <span className="pullquote-mark">&ldquo;</span>
            <p className="pullquote-text">After 20 hours of practice using the structure Nancy taught us, I delivered an executive presentation that had senior VPs praising my confidence and insight. The framework doesn&apos;t just change how you speak — it changes how people see you.</p>
            <div className="pullquote-attribution">
              <span className="pullquote-role">— Senior Manager, Client Solutions</span>
            </div>
          </div>
          <div className="home-pullquote reveal">
            <span className="pullquote-mark">&ldquo;</span>
            <p className="pullquote-text">My first-ever public speaking panel went really well. I used the breathing technique, slowed my pace, and the difference when I take time to prepare using Nancy&apos;s frameworks is significant. I show up completely differently.</p>
            <div className="pullquote-attribution">
              <span className="pullquote-role">— Legal Counsel, Global Investment Bank</span>
            </div>
          </div>
        </div>
      </div></section>

      <CtaSection
        title={<>Let&apos;s close the gap between your expertise, and how you <em>communicate it.</em></>}
        desc={null}
        buttonLabel="Enquire now"
      />
    </>
  );
}
