import Link from 'next/link';

const ARROW = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
);

export default function ServicesAccordion() {
  return (
    <section className="sva-outer">
      <h2 className="section-heading" style={{fontSize:'clamp(2.5rem,4.5vw,65px)',letterSpacing:'-1.3px'}}>The <em>work.</em></h2>

      <div className="work-blocks">
        <div className="work-block reveal" id="individuals">
          <div className="work-block-media">
            <img src="/nancy-2.jpg" alt="Communication Clarity Advisory" style={{objectPosition:'left center'}} />
          </div>
          <div className="work-block-body">
            <p className="work-block-label">For Individuals</p>
            <h3 className="work-block-title">Communication Clarity Advisory</h3>
            <p className="work-block-desc">1:1 strategic communication advisory for senior professionals preparing for the conversations that will define the next stage of their career. Board presentations. High-stakes interviews. Leadership transitions. Media appearances. Negotiations. This is a direct, private engagement — built around your specific situation, your patterns, and the room you are preparing to win.</p>
            <Link href="/contact" className="service-cta">
              Enquire about Advisory{' '}{ARROW}
            </Link>
          </div>
        </div>

        <div className="work-block reveal" id="organisations">
          <div className="work-block-media">
            <img src="/nancy-3.jpg" alt="Workshops, Training &amp; Speaking" style={{objectPosition:'right center'}} />
          </div>
          <div className="work-block-body">
            <p className="work-block-label">For Organisations</p>
            <h3 className="work-block-title">Workshops, Training &amp; Speaking</h3>
            <p className="work-block-desc">For L&amp;D managers, HR directors and leadership teams who need their people to communicate with the clarity and authority their roles demand. Workshops, keynotes and training programmes that transfer immediately.</p>
            <Link href="/contact" className="service-cta">
              Enquire about Workshops &amp; Speaking{' '}{ARROW}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
