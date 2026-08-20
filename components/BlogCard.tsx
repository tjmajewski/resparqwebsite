import Link from 'next/link';
import type { BlogPost } from '@/lib/blog-data';

export default function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full border border-brand-500/25 bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-300">
            {post.category}
          </span>
          <span className="text-xs text-zinc-500">{post.readTime}</span>
        </div>
        <h3 className="mb-3 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-brand-300">
          {post.title}
        </h3>
        <p className="mb-5 flex-grow text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <time dateTime={post.date} className="text-xs text-zinc-500">
            {formattedDate}
          </time>
          <span className="flex items-center gap-1 text-sm text-brand-400 transition-colors group-hover:text-brand-300">
            Read
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
