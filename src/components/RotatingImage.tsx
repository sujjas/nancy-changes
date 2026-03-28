'use client';

import { useEffect, useState } from 'react';

const frames = [
  { src: '/nancy-1.jpg', position: 'left center' },
  { src: '/nancy-8.jpg', position: 'center center' },
  { src: '/Nancy02.jpg', position: 'center center' },
];

export default function RotatingImage({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % frames.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`rotating-image-wrap ${className ?? ''}`}>
      {frames.map((frame, i) => (
        <img
          key={frame.src}
          src={frame.src}
          alt="Nancy Kacungira"
          className={`rotating-image-slide${i === current ? ' active' : ''}`}
          style={{ objectPosition: frame.position }}
        />
      ))}
    </div>
  );
}
