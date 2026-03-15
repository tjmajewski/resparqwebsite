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
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      url: `https://www.resparq.ai/blog/${post.slug}`,
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
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors mb-8"
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
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-sm text-gray-500">
                {formattedDate}
              </time>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {post.title}
              </span>
            </h1>
          </header>

          {/* Content */}
          <BlogContent content={post.content} />

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Recover Lost Revenue?
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Resparq&apos;s AI-powered exit intent automatically applies discount
              codes at checkout, no email capture, no friction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#pricing"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                See Pricing
              </Link>
              <Link
                href="/#features"
                className="px-8 py-3 rounded-full font-semibold border border-purple-500/30 hover:border-purple-500/60 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <aside className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
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
