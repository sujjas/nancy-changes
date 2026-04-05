import type { Metadata } from 'next';
import './globals.css';
import { Agentation } from 'agentation';

export const metadata: Metadata = {
  title: 'Nancy Kacungira — Strategic Communication',
  description: 'Strategic communication at the narrative layer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  );
}
