import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageScripts from '@/components/PageScripts';
import { Agentation } from 'agentation';

export const metadata: Metadata = {
  title: 'Nancy Kacungira — Strategic Communication',
  description: 'Strategic communication at the narrative layer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <PageScripts />
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  );
}
