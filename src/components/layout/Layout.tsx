import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
