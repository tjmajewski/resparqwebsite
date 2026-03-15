import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link>
          <a href="/#features" className="text-sm hover:text-white transition-colors">Features</a>
          <a href="/#pricing" className="text-sm hover:text-white transition-colors">Pricing</a>
        </div>
        <p>&copy; 2026 Resparq. Built for merchants who want sales, not subscribers.</p>
      </div>
    </footer>
  );
}
