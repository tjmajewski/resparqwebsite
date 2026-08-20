'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SiteNav({ variant = 'landing' }: { variant?: 'landing' | 'sub' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const prefix = variant === 'landing' ? '' : '/';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/icon-z.svg" alt="" width={26} height={26} className="h-[26px] w-[26px]" />
          <span className="text-[17px] font-semibold tracking-tight text-white">Resparq</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <a href={`${prefix}#features`} className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white">Features</a>
          <a href={`${prefix}#how`} className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white">How it works</a>
          <a href={`${prefix}#pricing`} className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white">Pricing</a>
          <Link href="/blog" className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white">Blog</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://apps.shopify.com/resparq"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-500"
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
