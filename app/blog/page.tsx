import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog-data';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Cart Recovery & Exit-Intent Insights',
  description:
    'Practical guides on recovering abandoned Shopify carts — exit-intent tactics, A/B testing, discount strategy, and conversion data.',
  alternates: { canonical: 'https://www.resparq.ai/blog' },
  openGraph: {
    title: 'Resparq Blog — Cart Recovery & Exit-Intent Insights',
    description:
      'Practical guides on recovering abandoned Shopify carts — exit-intent tactics, A/B testing, and conversion data.',
    url: 'https://www.resparq.ai/blog',
    type: 'website',
    images: ['/opengraph-image'],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-14 max-w-2xl">
        <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-400">
          <span className="h-px w-6 bg-brand-500/50" />
          Blog
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Insights on cart recovery
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          Exit intent, cart abandonment recovery, and Shopify conversion optimization, from the team building Resparq.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
