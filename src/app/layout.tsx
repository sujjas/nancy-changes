import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nancy Kacungira — Strategic Communication',
  description: 'Strategic communication at the narrative layer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
