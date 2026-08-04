import type { Metadata } from 'next';
import './globals.css';
import { Agentation } from 'agentation';
import PaperTextureOverlay from '@/components/PaperTextureOverlay';

export const metadata: Metadata = {
  title: 'Nancy Kacungira — Strategic Communication',
  description: 'Former BBC World News Lead Presenter. Strategic communication advisory, workshops, training and speaking for high-performing professionals and organisations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PaperTextureOverlay />
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  );
}
