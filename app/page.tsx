'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image src="/logo.svg" alt="resparq" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">resparq</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm text-purple-300">Exit Intent Powered by Evolution</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Recover Carts
              </span>
              <br />
              <span className="text-white">Instantly</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              AI-powered exit intent that automatically applies discount codes at checkout. 
              No email capture. No friction. Just <span className="text-purple-400 font-semibold">revenue</span>.
            </p>
            
            <div className="flex justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur opacity-0 group-hover:opacity-50 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Built Different
              </span>
            </h2>
            <p className="text-xl text-gray-400">Why merchants choose resparq</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Automatic Application',
                description: 'Discount codes apply automatically at checkout. No copy-paste. No friction.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'AI Decision Engine',
                description: 'Smart discounts based on 8 customer signals. Maximum conversion, minimal margin loss.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Revenue Tracking',
                description: 'Track actual revenue recovered, not vanity metrics. See your real ROI.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: 'Instant Setup',
                description: '5-minute installation. No coding required. Works with your theme.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Flat Pricing',
                description: 'Simple monthly pricing. No hidden fees. No commission on sales.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'Custom Branding',
                description: 'Match your brand perfectly. Full design control. Modern templates included.'
              }
            ].map((feature, i) => (
              <div key={i} className="group relative p-8 rounded-2xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all hover:scale-105">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Exit intent modals that drive sales, not signups
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <div className="relative p-8 rounded-3xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">Perfect for testing exit intent</p>
              
              <div className="mb-8">
                <div className="text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">$29</span>
                  <span className="text-xl text-gray-400">/month</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/50 rounded-full text-base font-semibold transition-all mb-8">
                Start Free Trial
              </button>

              <ul className="space-y-3 flex-grow">
                {[
                  { text: 'Manual mode (you set fixed offers)', included: true },
                  { text: 'Up to 5,000 impressions/month', included: true },
                  { text: '1 campaign', included: true },
                  { text: 'Basic analytics (impressions, clicks, conversions)', included: true },
                  { text: 'Mobile-optimized modals', included: true },
                  { text: 'Auto-apply discount codes', included: true },
                  { text: 'Email support', included: true },
                  { text: 'AI autopilot mode', included: false },
                  { text: 'Automated A/B testing', included: false },
                  { text: 'Advanced analytics', included: false },
                  { text: 'Unlimited impressions', included: false }
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.included ? 'text-green-400' : 'text-red-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.included ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      )}
                    </svg>
                    <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500/50 backdrop-blur-sm flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
              
              <h3 className="text-2xl font-bold mb-2 mt-4">Pro</h3>
              <p className="text-gray-400 mb-6">AI-powered optimization for growing stores</p>
              
              <div className="mb-8">
                <div className="text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">$79</span>
                  <span className="text-xl text-gray-400">/month</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/50 rounded-full text-base font-semibold transition-all mb-8">
                Start Free Trial
              </button>

              <ul className="space-y-3 flex-grow">
                {[
                  { text: 'Everything in Starter', included: true },
                  { text: 'AI autopilot mode (8 customer signals)', included: true },
                  { text: 'Up to 10,000 impressions/month', included: true },
                  { text: 'Evolution system (auto-improves variants)', included: true },
                  { text: 'Automated A/B testing', included: true },
                  { text: 'Multiple campaigns', included: true },
                  { text: 'Advanced analytics (revenue tracking, variant performance)', included: true },
                  { text: 'Date filtering (7d/30d/all time)', included: true },
                  { text: 'Cart abandonment recovery tracking', included: true },
                  { text: 'Priority email support', included: true },
                  { text: 'Smarter AI (13 signals)', included: false },
                  { text: 'Manual variant control', included: false },
                  { text: 'Unlimited impressions', included: false }
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.included ? 'text-green-400' : 'text-red-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.included ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      )}
                    </svg>
                    <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="relative p-8 rounded-3xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">Maximum control for high-volume stores</p>
              
              <div className="mb-8">
                <div className="text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">$249</span>
                  <span className="text-xl text-gray-400">/month</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/50 rounded-full text-base font-semibold transition-all mb-8">
                Start Free Trial
              </button>

              <ul className="space-y-3 flex-grow">
                {[
                  { text: 'Everything in Pro', included: true },
                  { text: 'Unlimited impressions', included: true },
                  { text: 'Smarter AI (13 customer signals vs 8)', included: true },
                  { text: 'Override AI decisions (manual variant control)', included: true },
                  { text: 'Promotional intelligence (auto-detects sales)', included: true },
                  { text: 'Custom CSS styling', included: true },
                  { text: 'White-label (remove "Powered by" badge)', included: true },
                  { text: 'Enterprise analytics (segment breakdown, export CSV)', included: true },
                  { text: 'Generation tracking (see AI evolution)', included: true },
                  { text: 'Priority email support', included: true }
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Recover Revenue?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join Shopify merchants recovering abandoned carts automatically
            </p>
            <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 resparq. Built for merchants who want sales, not subscribers.</p>
        </div>
      </footer>
    </div>
  );
}
