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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20" />
      </div>

      <Navigation variant="blog" />

      <main className="relative pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto legal-content">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="text-gray-400">Last updated: {updated}</p>
          </header>
          {children}
        </article>
      </main>

      <Footer />
    </div>
  );
}
