import type { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink-950 text-zinc-300">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[400px] bg-brand-600/10 blur-[120px]" />

      <Navigation variant="blog" />

      <main className="relative px-6 pb-24 pt-36">
        <article className="mx-auto max-w-3xl legal-content">
          <header className="mb-12">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
            <p className="mt-3 text-zinc-500">Last updated: {updated}</p>
          </header>
          {children}
        </article>
      </main>

      <Footer />
    </div>
  );
}
