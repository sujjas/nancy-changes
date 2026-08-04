import Link from 'next/link';

const ARROW = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
);

type CtaSectionProps = {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  buttonLabel?: string;
};

export default function CtaSection({
  title = <>Ready to work <em>together?</em></>,
  desc = 'Enquire here.',
  buttonLabel = 'Enquire',
}: CtaSectionProps) {
  return (
    <section className="cta-section">
      <div className="cta-bg"><img src="/nancy-5.jpg" alt="" /></div>
      <div className="cta-inner">
        <h2 className="cta-title">{title}</h2>
        {desc && <p className="cta-desc">{desc}</p>}
        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-accent">
            {buttonLabel}{' '}{ARROW}
          </Link>
        </div>
      </div>
    </section>
  );
}
