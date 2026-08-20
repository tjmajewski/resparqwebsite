import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Resparq Blog',
    default: 'Blog - Exit Intent & Cart Recovery Insights | Resparq',
  },
  description:
    'Expert insights on exit intent popups, cart abandonment recovery, and Shopify conversion optimization from Resparq.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink-950 text-zinc-300">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[400px] bg-brand-600/10 blur-[120px]" />

      <Navigation variant="blog" />

      <main className="relative px-6 pb-24 pt-36">{children}</main>

      <Footer />
    </div>
  );
}
