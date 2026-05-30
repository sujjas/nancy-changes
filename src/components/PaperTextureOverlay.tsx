'use client';

import { PaperTexture } from '@paper-design/shaders-react';

export default function PaperTextureOverlay() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'multiply',
        opacity: 0.55,
      }}
    >
      <PaperTexture
        style={{ width: '100%', height: '100%' }}
        colorBack="#ffffff"
        colorFront="#9fadbc"
        contrast={0.4}
        roughness={0.08}
        fiber={0.34}
        fiberSize={0.01}
        crumples={0}
        crumpleSize={0.01}
        folds={0}
        foldCount={1}
        fade={0}
        drops={0}
        seed={6}
        scale={1.04}
        fit="cover"
      />
    </div>
  );
}
