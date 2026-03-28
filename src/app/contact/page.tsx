export default function ContactPage() {
  return (
    <>
      <section className="contact-page">
        <div className="contact-info">
          <p className="section-eyebrow" style={{opacity:0,animation:'fadeUp 0.7s 0.1s ease forwards'}}>Get in Touch</p>
          <h2>Let&apos;s start a <em>conversation.</em></h2>
          <p className="contact-info-desc">Whether you&apos;re planning an event, exploring advisory, or have a question — I&apos;d love to hear from you.</p>
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
            <p className="availability-title">Booking Timeline</p>
            <p className="availability-text">Speaking: 4–8 weeks advance. Advisory: 1–2 weeks for initial consultation.</p>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <h2 className="form-title">Send an enquiry</h2>
          <p className="form-subtitle">I&apos;ll respond within 48 hours.</p>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input type="text" className="form-input" placeholder="First name" />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-input" placeholder="Last name" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="you@company.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Organisation</label>
            <input type="text" className="form-input" placeholder="Company name" />
          </div>
          <div className="form-group">
            <label className="form-label">Enquiry Type</label>
            <select className="form-select">
              <option value="" disabled>Select</option>
              <option>Speaking</option>
              <option>Moderation</option>
              <option>Workshop</option>
              <option>Advisory</option>
              <option>Media</option>
              <option>General</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Event Date</label>
              <input type="date" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Budget</label>
              <select className="form-select">
                <option value="" disabled>Select</option>
                <option>Under $5k</option>
                <option>$5k–$10k</option>
                <option>$10k–$25k</option>
                <option>$25k+</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Tell us about your event..."></textarea>
          </div>
          <div style={{marginTop:'0.5rem'}}>
            <button className="btn btn-accent" type="submit">
              Send Enquiry{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </button>
          </div>
        </div>
      </section>
      <section className="social-strip"><div className="social-inner">
        <p className="social-text reveal">Follow Nancy <em>across platforms</em></p>
        <div className="social-links" id="socialLinks">
          <a href="#" className="social-pill">Instagram</a>
          <a href="#" className="social-pill">Facebook</a>
          <a href="#" className="social-pill">X</a>
          <a href="#" className="social-pill">LinkedIn</a>
        </div>
      </div></section>
    </>
  );
}
