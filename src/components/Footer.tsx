import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">Nancy Kacungira</Link>
            <div className="footer-contact-row">
              <a href="mailto:info@nancykacungira.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@nancykacungira.com
              </a>
            </div>
          </div>
          <div className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/speaking">Speaking</Link>
            <Link href="/library">Resources</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://www.instagram.com/kacungira/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/nkacungira" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://x.com/kacungira" target="_blank" rel="noopener noreferrer">X</a>
          </div>
          <p className="footer-copy">&copy; 2026 Nancy Kacungira. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
