import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          <a href="/#features" className="text-sm hover:text-white transition-colors">Features</a>
          <a href="/#pricing" className="text-sm hover:text-white transition-colors">Pricing</a>
          <Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          <Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/accessibility" className="text-sm hover:text-white transition-colors">Accessibility</Link>
        </div>
        <p>&copy; 2026 Resparq. Built for merchants who want sales, not subscribers.</p>
      </div>
    </footer>
  );
}
