'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="mainNav">
        <Link href="/" className="nav-logo"><img src="/nancy-logo.svg" alt="Nancy Kacungira" className="nav-logo-img" /></Link>
        <ul className="nav-links">
          <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link href="/speaking" className={pathname === '/speaking' ? 'active' : ''}>Speaking</Link></li>
          <li><Link href="/library" className={pathname === '/library' ? 'active' : ''}>Resources</Link></li>
          <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          id="hamburgerBtn"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/speaking" onClick={closeMenu}>Speaking</Link>
        <Link href="/library" onClick={closeMenu}>Resources</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
}
