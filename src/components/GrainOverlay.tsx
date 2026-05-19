'use client';

import { useEffect, useState } from 'react';

const OPACITY_KEY = 'grain-opacity';
const BLEND_KEY = 'grain-blend';
const SIZE_KEY = 'grain-size';

const DEFAULTS = {
  opacity: 0.1,
  blend: 'screen' as const,
  size: 400,
};

const BLEND_MODES = [
  'normal',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
] as const;

type BlendMode = (typeof BLEND_MODES)[number];

export default function GrainOverlay() {
  const [opacity, setOpacity] = useState(DEFAULTS.opacity);
  const [blend, setBlend] = useState<BlendMode>(DEFAULTS.blend);
  const [size, setSize] = useState(DEFAULTS.size);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const o = localStorage.getItem(OPACITY_KEY);
    const b = localStorage.getItem(BLEND_KEY) as BlendMode | null;
    const s = localStorage.getItem(SIZE_KEY);
    if (o !== null) setOpacity(parseFloat(o));
    if (b && BLEND_MODES.includes(b)) setBlend(b);
    if (s !== null) setSize(parseFloat(s));

    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'g' && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    localStorage.setItem(OPACITY_KEY, String(opacity));
    document.documentElement.style.setProperty('--grain-opacity', String(opacity));
  }, [opacity]);

  useEffect(() => {
    localStorage.setItem(BLEND_KEY, blend);
    document.documentElement.style.setProperty('--grain-blend', blend);
  }, [blend]);

  useEffect(() => {
    localStorage.setItem(SIZE_KEY, String(size));
    document.documentElement.style.setProperty('--grain-size', `${size}px ${size}px`);
  }, [size]);

  if (!open) return null;

  const row: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '90px 1fr 44px',
    gap: 8,
    alignItems: 'center',
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 99999,
        background: 'rgba(20,20,20,0.92)',
        color: '#fff',
        padding: '14px 16px',
        borderRadius: 12,
        font: '12px/1.3 ui-monospace, SFMono-Regular, Menlo, monospace',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        minWidth: 300,
        boxShadow: '0 6px 24px rgba(0,0,0,0.35)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: 11, letterSpacing: 0.5, opacity: 0.8 }}>GRAIN</strong>
        <button
          onClick={() => setOpen(false)}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 6,
            padding: '2px 8px',
            cursor: 'pointer',
            font: 'inherit',
          }}
          aria-label="Close grain panel"
        >
          ×
        </button>
      </div>

      <div style={row}>
        <label htmlFor="g-opacity">Opacity</label>
        <input
          id="g-opacity"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
        />
        <span style={{ textAlign: 'right' }}>{opacity.toFixed(2)}</span>
      </div>

      <div style={row}>
        <label htmlFor="g-size">Tile size</label>
        <input
          id="g-size"
          type="range"
          min={80}
          max={1200}
          step={10}
          value={size}
          onChange={(e) => setSize(parseFloat(e.target.value))}
        />
        <span style={{ textAlign: 'right' }}>{size}</span>
      </div>

      <div style={row}>
        <label htmlFor="g-blend">Blend</label>
        <select
          id="g-blend"
          value={blend}
          onChange={(e) => setBlend(e.target.value as BlendMode)}
          style={{
            gridColumn: '2 / 4',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 6,
            padding: '3px 6px',
            font: 'inherit',
            cursor: 'pointer',
          }}
        >
          {BLEND_MODES.map((m) => (
            <option key={m} value={m} style={{ background: '#1a1a1a' }}>
              {m}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
