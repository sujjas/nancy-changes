import Link from 'next/link';
import { programmes } from '../../data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export default function ProgrammePage({ params }: { params: { slug: string } }) {
  const programme = programmes.find((p) => p.slug === params.slug);
  if (!programme) notFound();

  return (
    <>
      <section className="article-hero prog-hero">
        <div className="article-hero-inner">
          <Link href="/library#programmes" className="article-back">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 8H3M7 4l-4 4 4 4"/></svg>
            Back to Programmes
          </Link>
          <span className={`course-badge course-badge-${programme.badgeType}`} style={{marginTop:'2rem',display:'inline-block'}}>{programme.badge}</span>
          <h1 className="article-hero-title">{programme.title}</h1>
          <p className="prog-hero-tagline" style={{marginBottom:'1.5rem'}}>{programme.tagline}</p>
          <div className="prog-hero-meta">
            <span className="prog-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {programme.duration}
            </span>
            <span className="prog-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              {programme.capacity}
            </span>
            <span className="prog-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              {programme.format}
            </span>
          </div>
        </div>
      </section>

      <section className="section-white"><div className="container prog-body">
        <div className="prog-content">
          <div className="prog-section">
            <h2 className="prog-section-title">Overview</h2>
            <p className="prog-section-text">{programme.overview}</p>
          </div>
          <div className="prog-section">
            <h2 className="prog-section-title">What you&apos;ll learn</h2>
            <ul className="prog-learn-list">
              {programme.whatYoullLearn.map((item, i) => (
                <li key={i} className="prog-learn-item">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="prog-section">
            <h2 className="prog-section-title">Who is this for?</h2>
            <p className="prog-section-text">{programme.whoIsItFor}</p>
          </div>
          <div className="prog-section">
            <h2 className="prog-section-title">Programme structure</h2>
            <p className="prog-section-text">{programme.structure}</p>
          </div>
        </div>
        <div className="prog-sidebar">
          <div className="prog-enrol-card">
            <div className="prog-price">{programme.price} <span className="prog-price-note">/ {programme.priceNote}</span></div>
            <a href="/contact" className="btn btn-accent" style={{width:'100%',justifyContent:'center'}}>
              {programme.ctaLabel}{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
            <p className="prog-enrol-note">Have questions? <Link href="/contact">Get in touch</Link></p>
            <div className="prog-enrol-details">
              <div className="prog-enrol-row"><span>Duration</span><span>{programme.duration}</span></div>
              <div className="prog-enrol-row"><span>Format</span><span>{programme.format}</span></div>
              <div className="prog-enrol-row"><span>Size</span><span>{programme.capacity}</span></div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="section-cream">
        <div className="container" style={{maxWidth:'720px',textAlign:'center',padding:'4rem 5.75%'}}>
          <p className="section-eyebrow">Also available</p>
          <h2 className="section-heading" style={{marginBottom:'2rem'}}>Explore other <em>programmes</em></h2>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            {programmes.filter((p) => p.slug !== programme.slug).map((p) => (
              <Link key={p.slug} href={`/library/programmes/${p.slug}`} className="btn btn-dark">
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
