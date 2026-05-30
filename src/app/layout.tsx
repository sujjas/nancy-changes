import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Agentation } from 'agentation';
import PaperTextureOverlay from '@/components/PaperTextureOverlay';

export const metadata: Metadata = {
  title: 'Nancy Kacungira — Strategic Communication',
  description: 'Strategic communication at the narrative layer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PaperTextureOverlay />
        {process.env.NODE_ENV === 'development' && <Agentation />}
        <Script src="https://ui.sh/ui-picker.js" />
      </body>
    </html>
  );
}
