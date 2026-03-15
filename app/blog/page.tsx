import { getAllPosts } from '@/lib/blog-data';
import BlogCard from '@/components/BlogCard';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-7xl mx-auto">
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Insights on exit intent popups, cart abandonment recovery, and Shopify
          conversion optimization.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
