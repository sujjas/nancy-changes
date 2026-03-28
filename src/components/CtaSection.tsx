import Link from 'next/link';

const ARROW = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
);

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-bg"><img src="/nancy-5.jpg" alt="" /></div>
      <div className="cta-inner">
        <h2 className="cta-title">Ready to work <em>together?</em></h2>
        <p className="cta-desc">Whether you need a keynote, advisor, or moderator — Nancy would love to hear from you.</p>
        <div className="cta-buttons">
          <Link href="/speaking" className="btn btn-light">
            Explore Speaking{' '}{ARROW}
          </Link>
          <Link href="/contact" className="btn btn-accent">
            Get in Touch{' '}{ARROW}
          </Link>
        </div>
      </div>
    </section>
  );
}
