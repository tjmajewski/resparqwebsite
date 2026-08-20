import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/icon-z.svg" alt="" width={24} height={24} className="h-6 w-6" />
              <span className="text-base font-semibold tracking-tight text-white">Resparq</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              AI-powered exit intent for Shopify. Recover the sale in the moment, not the email months later.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-8 sm:grid-cols-3">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Product</div>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li><a href="/#features" className="text-zinc-400 transition-colors hover:text-white">Features</a></li>
                <li><a href="/#how" className="text-zinc-400 transition-colors hover:text-white">How it works</a></li>
                <li><a href="/#pricing" className="text-zinc-400 transition-colors hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Resources</div>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li><Link href="/blog" className="text-zinc-400 transition-colors hover:text-white">Blog</Link></li>
                <li><a href="https://apps.shopify.com/resparq" target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition-colors hover:text-white">Shopify App Store</a></li>
                <li><a href="mailto:sales@resparq.ai" className="text-zinc-400 transition-colors hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Legal</div>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li><Link href="/privacy" className="text-zinc-400 transition-colors hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="text-zinc-400 transition-colors hover:text-white">Terms</Link></li>
                <li><Link href="/accessibility" className="text-zinc-400 transition-colors hover:text-white">Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-6 text-sm text-zinc-500">
          <p>&copy; 2026 Resparq. Built for merchants who want sales, not subscribers.</p>
        </div>
      </div>
    </footer>
  );
}
