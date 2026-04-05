'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

const SERVICES = [
  {
    title: 'Communication Intelligence',
    subtitle: 'Sound senior when you\'re being assessed',
    body: 'A self-directed system that teaches how senior decision-makers assess clarity, credibility, and readiness — and how to meet that bar calmly under pressure.',
    cta: { label: 'Explore the system', href: '/library' },
    image: '/nancy-1.jpg',
    label: 'Flagship',
  },
  {
    title: 'Selective Advisory',
    subtitle: 'For specific high-stakes moments',
    body: 'A strategic intervention for individuals preparing for a defining moment — pitch, board, media, keynote. I\'ll refine your narrative, structure, and delivery to ensure maximum authority. By request only.',
    cta: { label: 'Request details', href: '/contact' },
    image: '/nancy-2.jpg',
  },
  {
    title: 'Keynotes & Workshops',
    subtitle: 'For organisations and leadership teams',
    body: 'Interactive sessions on Narrative Intelligence, Executive Presence, and Communication Archetypes. Designed for leadership off-sites, ERGs, and industry conferences.',
    cta: { label: 'Enquire', href: '/contact' },
    image: '/nancy-3.jpg',
  },
  {
    title: 'The Clarity System',
    subtitle: 'Get to know the method',
    body: 'A curated collection of frameworks, essays, and tools for professionals who want to think more clearly about how they communicate.',
    cta: { label: 'Explore the System', href: '/library' },
    image: '/nancy-4.jpg',
  },
];

const DURATION = 5000;

export default function ServicesAccordion() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [key, setKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const imagePanelRef = useRef<HTMLDivElement>(null);

  const advance = useCallback(() => {
    setActive(prev => (prev + 1) % SERVICES.length);
    setKey(k => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(advance, DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused, advance]);

  useEffect(() => {
    const el = accordionRef.current;
    if (!el) return;
    const item = el.children[active] as HTMLElement;
    if (!item) return;
    el.scrollTo({ left: item.offsetLeft, behavior: 'smooth' });
  }, [active]);

  useEffect(() => {
    const accordion = accordionRef.current;
    const imagePanel = imagePanelRef.current;
    if (!accordion || !imagePanel) return;
    const sync = () => { imagePanel.style.height = `${accordion.offsetHeight}px`; };
    const ro = new ResizeObserver(sync);
    ro.observe(accordion);
    sync();
    return () => ro.disconnect();
  }, []);

  const handleClick = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(i);
    setKey(k => k + 1);
    setPaused(false);
  };

  return (
    <section className="sva-outer">
      <h2 className="section-heading" style={{fontSize:'clamp(2.5rem,4.5vw,65px)',letterSpacing:'-1.3px'}}>The <em>work.</em></h2>

      <div className="services-accordion-section">
        {/* Left: image */}
        <div ref={imagePanelRef} className="sva-image-panel">
          {SERVICES.map((s, i) => (
            <img
              key={i}
              src={s.image}
              alt={s.title}
              className={`sva-image${active === i ? ' sva-image--active' : ''}`}
            />
          ))}
        </div>

        {/* Right: accordion */}
        <div
          ref={accordionRef}
          className="sva-accordion"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
        {SERVICES.map((s, i) => {
          const isOpen = active === i;
          return (
            <div
              key={i}
              className={`sva-item${isOpen ? ' sva-item--open' : ''}`}
              onClick={() => handleClick(i)}
            >
              {/* Progress stroke */}
              <div className="sva-stroke-track">
                {isOpen && (
                  <div
                    key={key}
                    className="sva-stroke-fill"
                    style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                  />
                )}
              </div>

              <div className="sva-item-top">
                <div className="sva-item-header">
                  <h3 className="sva-item-title">{s.title}</h3>
                </div>
                <p className="sva-item-desc">{s.body}</p>
              </div>

              <Link href={s.cta.href} className="service-cta sva-item-cta" onClick={e => e.stopPropagation()}>
                {s.cta.label}{' '}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
