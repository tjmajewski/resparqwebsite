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
      <article className="h-full p-6 rounded-2xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all hover:scale-[1.02] flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
            {post.category}
          </span>
          <span className="text-xs text-gray-500">{post.readTime}</span>
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors mb-3 leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <time dateTime={post.date} className="text-xs text-gray-500">
            {formattedDate}
          </time>
          <span className="text-sm text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-1">
            Read more
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
