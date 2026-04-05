import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-text"><div>
          <p className="contact-hero-eyebrow">Get in Touch</p>
          <h1 className="contact-hero-title">Let&apos;s start a <em>conversation.</em></h1>
          <p className="contact-hero-desc">Whether you&apos;re planning an event, exploring advisory, or simply have a question — I&apos;d love to hear from you.</p>
        </div></div>
        <div className="contact-hero-img"><img src="/nancy-4.jpg" alt="Nancy Kacungira" /></div>
      </section>

      <section className="contact-page">
        <div className="contact-info">
          <div className="contact-trust">
            <p className="contact-trust-quote">&ldquo;Good communication is not about saying more — it&rsquo;s about saying the right thing to the right person at the right time.&rdquo;</p>
            <p className="contact-trust-attr">— Nancy Kacungira</p>
          </div>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="contact-detail-label">Email</p>
                <p className="contact-detail-value"><a href="mailto:info@nancykacungira.com">info@nancykacungira.com</a></p>
              </div>
            </div>
          </div>
          <div className="availability-note">
            <div className="availability-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <p className="availability-title">Booking Timeline</p>
              <p className="availability-text">Speaking &amp; moderation: 4–8 weeks advance notice. Advisory: 1–2 weeks for an initial consultation.</p>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <h2 className="form-title">Tell me about your event</h2>
          <p className="form-subtitle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width:'14px',height:'14px',verticalAlign:'middle',marginRight:'5px'}}>
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            I respond within 48 hours.
          </p>
          <ContactForm />
        </div>
      </section>

      <section className="social-strip"><div className="social-inner">
        <p className="social-text reveal">Follow Nancy <em>across platforms</em></p>
        <div className="social-links" id="socialLinks">
          <a href="https://www.instagram.com/nancykacungira" target="_blank" rel="noopener noreferrer" className="social-pill">Instagram</a>
          <a href="https://www.facebook.com/nancykacungira" target="_blank" rel="noopener noreferrer" className="social-pill">Facebook</a>
          <a href="https://x.com/nancykacungira" target="_blank" rel="noopener noreferrer" className="social-pill">X</a>
          <a href="https://www.linkedin.com/in/nancykacungira" target="_blank" rel="noopener noreferrer" className="social-pill">LinkedIn</a>
        </div>
      </div></section>
    </>
  );
}
