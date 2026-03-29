import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageScripts from '@/components/PageScripts';
import { Agentation } from 'agentation';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <PageScripts />
      {process.env.NODE_ENV === 'development' && <Agentation />}
    </>
  );
}
