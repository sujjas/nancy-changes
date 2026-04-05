'use client';

import { useState, useEffect, useCallback } from 'react';

const FORMATS = [
  {
    name: 'Keynote Address',
    duration: '30–60 min',
    desc: 'Best for conference openers and closers — a clear frame the audience carries forward.',
    image: '/nancy-8.jpg',
  },
  {
    name: 'Panel Moderation',
    duration: '45–90 min',
    desc: 'Keeps complex multi-speaker discussions focused and energised for the audience.',
    image: '/nancy-5.jpg',
  },
  {
    name: 'Fireside Chat',
    duration: '30–45 min',
    desc: 'Intimate, unscripted conversation that draws out depth from a featured guest.',
    image: '/nancy-3.jpg',
  },
  {
    name: 'Workshop',
    duration: 'Half/full day',
    desc: 'Hands-on sessions that build practical communication skills teams can use immediately.',
    image: '/nancy-9.jpg',
  },
  {
    name: 'MC & Hosting',
    duration: 'Custom',
    desc: 'Full-event hosting that holds the room, manages energy, and ties the narrative together.',
    image: '/nancy-7.jpg',
  },
];

const DURATION = 5000;

export default function FormatsAccordion() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [key, setKey] = useState(0);

  const advance = useCallback(() => {
    setActive(prev => (prev + 1) % FORMATS.length);
    setKey(k => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(advance, DURATION);
    return () => clearTimeout(t);
  }, [active, paused, advance]);

  const handleClick = (i: number) => {
    setActive(i);
    setKey(k => k + 1);
    setPaused(false);
  };

  return (
    <div
      className="formats-layout"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div>
        <p className="section-eyebrow">Formats</p>
        <h2 className="section-heading">Formats &amp; <em>Delivery</em></h2>
        <div className="format-list">
          {FORMATS.map((f, i) => {
            const isActive = active === i;
            return (
              <div
                key={i}
                className={`format-item${isActive ? ' format-item--active' : ''}`}
                onClick={() => handleClick(i)}
              >
                <div className="sva-stroke-track">
                  {isActive && (
                    <div
                      key={key}
                      className="sva-stroke-fill"
                      style={{
                        animationDuration: `${DURATION}ms`,
                        animationPlayState: paused ? 'paused' : 'running',
                      }}
                    />
                  )}
                </div>
                <div className="format-left">
                  <span className="format-dot"></span>
                  <div className="format-info">
                    <span className="format-name">{f.name}</span>
                    <span className="format-desc">{f.desc}</span>
                  </div>
                </div>
                <span className="format-tag">{f.duration}</span>
                <span className="line-draw"></span>
                <div className={`format-inline-img${isActive ? ' format-inline-img--active' : ''}`}>
                  <img src={f.image} alt={f.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="formats-image-panel">
        {FORMATS.map((f, i) => (
          <img
            key={i}
            src={f.image}
            alt={f.name}
            className={`sva-image${active === i ? ' sva-image--active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
