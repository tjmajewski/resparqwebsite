import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog-data';
import BlogContent from '@/components/BlogContent';
import BlogCard from '@/components/BlogCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://www.resparq.ai/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      url: `https://www.resparq.ai/blog/${post.slug}`,
      images: [`/blog/${post.slug}/opengraph-image`],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`/blog/${post.slug}/opengraph-image`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 2);

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'Resparq',
      url: 'https://www.resparq.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Resparq',
      url: 'https://www.resparq.ai',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.resparq.ai/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        <article>
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-6 flex items-center gap-4">
              <span className="rounded-full border border-brand-500/25 bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-300">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-sm text-zinc-500">
                {formattedDate}
              </time>
              <span className="text-sm text-zinc-500">{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <BlogContent content={post.content} />

          {/* CTA */}
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-8 text-center">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[420px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[100px]" />
            <div className="relative">
              <h2 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Ready to recover lost revenue?
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-zinc-400">
                Resparq&apos;s AI-powered exit intent automatically applies discount codes at checkout, with no email
                capture and no friction.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/#pricing"
                  className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-500"
                >
                  See pricing
                </Link>
                <Link
                  href="/#features"
                  className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <aside className="mt-16">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white">
              Related articles
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
