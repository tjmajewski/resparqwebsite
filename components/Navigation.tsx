'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation({ variant = 'landing' }: { variant?: 'landing' | 'blog' }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuresHref = variant === 'landing' ? '#features' : '/#features';
  const pricingHref = variant === 'landing' ? '#pricing' : '/#pricing';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image src="/logo.svg" alt="Resparq" fill className="object-contain" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Resparq</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href={featuresHref} className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
          <a href={pricingHref} className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
          <Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</Link>
          <a href="https://apps.shopify.com/resparq" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Start Free Trial
          </a>
        </div>
      </div>
    </nav>
  );
}
