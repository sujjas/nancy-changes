'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';

const PARAGRAPHS = [
  {
    text: 'Nancy Kacungira works with senior leaders and high-performing professionals to sharpen how they communicate in environments where the quality of a conversation determines the quality of an outcome.',
    image: '/nancy-1.jpg',
  },
  {
    text: 'A former lead presenter and correspondent for BBC News with nearly two decades of broadcast experience, she has built a career at the intersection of storytelling, influence, and strategic communication. She won the inaugural BBC Komla Dumor Award in 2015, recognising the next generation of African broadcast talent.',
    image: '/nancy-7.jpg',
  },
  {
    text: 'She brings the same discipline she applied in high-pressure newsrooms — where clarity, credibility, and precision were non-negotiable — directly into the training room: practical, scenario-based, and immediately transferable.',
    image: '/nancy-9.jpg',
  },
];

// Pre-compute cumulative character offsets
const OFFSETS = PARAGRAPHS.reduce<number[]>((acc, p, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + PARAGRAPHS[i - 1].text.length);
  return acc;
}, []);
const TOTAL_CHARS = PARAGRAPHS.reduce((sum, p) => sum + p.text.length, 0);

export default function BioScrollytell() {
  const [revealedChars, setRevealedChars] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesInnerRef = useRef<HTMLDivElement>(null);

  // Which image to show: the paragraph that is currently being revealed
  const activeImage = useMemo(() => {
    for (let i = PARAGRAPHS.length - 1; i >= 0; i--) {
      if (revealedChars >= OFFSETS[i]) return i;
    }
    return 0;
  }, [revealedChars]);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      let progress: number;
      if (scrollable > 50) {
        // Desktop: sticky scroll — progress through the tall wrapper
        progress = Math.min(Math.max(-top / scrollable, 0), 1);
      } else {
        // Mobile: no sticky — reveal as the section scrolls into view
        const start = window.innerHeight * 0.85;
        const end = -height * 0.25;
        progress = Math.min(Math.max((start - top) / (start - end), 0), 1);
      }
      setRevealedChars(Math.floor(progress * TOTAL_CHARS));
    };

    // Velocity-based skip
    let lastWheelTime = 0;
    let lastWheelDelta = 0;
    let skipLocked = false;

    const onWheel = (e: WheelEvent) => {
      const el = wrapperRef.current;
      if (!el || skipLocked) return;

      // Only act when user is inside the section
      const { top, height } = el.getBoundingClientRect();
      const insideSection = top <= 0 && top > -(height - window.innerHeight);
      if (!insideSection) return;

      const now = Date.now();
      const dt = now - lastWheelTime;
      const velocity = Math.abs(e.deltaY) / Math.max(dt, 1); // px per ms

      lastWheelTime = now;
      lastWheelDelta = e.deltaY;

      // Threshold: fast flick (velocity > 3px/ms going downward)
      if (velocity > 3 && e.deltaY > 0) {
        skipLocked = true;
        const target = el.offsetTop + el.offsetHeight;
        window.scrollTo({ top: target, behavior: 'smooth' });
        setTimeout(() => { skipLocked = false; }, 1200);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onWheel);
    };
  }, []);


  return (
    <div ref={wrapperRef} className="bio-st-wrapper">
      <div className="bio-st-sticky">
        <div className="bio-st-container">
        <div className="bio-st-inner">

          {/* Left: text */}
          <div className="bio-st-text">
            <h2 className="bio-editorial-title">My <em>story.</em></h2>
            {PARAGRAPHS.map((p, pi) => {
              const offset = OFFSETS[pi];
              return (
                <p key={pi} className="bio-st-para">
                  {p.text.split('').map((char, ci) => {
                    const globalIndex = offset + ci;
                    const revealed = globalIndex < revealedChars;
                    return (
                      <span
                        key={ci}
                        className={revealed ? 'bio-st-char--on' : 'bio-st-char--off'}
                      >
                        {char}
                      </span>
                    );
                  })}
                </p>
              );
            })}
            <Link href="/about" className="bio-cta" style={{ opacity: revealedChars >= TOTAL_CHARS ? 1 : 0, transition: 'opacity 0.5s' }}>
              More about Nancy{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>

          {/* Right: sticky image */}
          <div className="bio-st-images">
            <div ref={imagesInnerRef} className="bio-st-images-inner">
              {PARAGRAPHS.map((p, i) => (
                <img
                  key={i}
                  src={p.image}
                  alt=""
                  className={`bio-st-img${activeImage === i ? ' bio-st-img--active' : ''}`}
                />
              ))}
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}
