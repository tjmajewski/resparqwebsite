'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);

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
          <div className="flex items-center">
            <div className="h-8 w-32 relative">
              <Image src="/logo.svg" alt="resparq" fill className="object-contain object-left" />
            </div>
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
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Stop Watching Filled Carts
              </span>
              <br />
              <span className="text-white">Walk Away</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              resparq detects when shoppers with items in their cart try to leave, and shows the right message to the right customer at the right time. AI-powered personalization meets full merchant control.
            </p>

            <div className="flex flex-col items-center gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur opacity-0 group-hover:opacity-50 transition-opacity" />
              </button>
              <p className="text-sm text-gray-400">Turn cart abandonment into recovered revenue - automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Built for Performance, Not Pageviews
              </span>
            </h2>
            <p className="text-xl text-gray-400">Why merchants choose resparq</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'AI Decision Engine',
                description: 'Analyzes 8 customer signals in real-time (cart value, visit history, device, traffic source, and more) to determine the best intervention for each shopper. Sometimes that\'s a discount. Sometimes it\'s not.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: 'Full Control',
                description: 'Override AI decisions anytime. Set offer ranges, create custom messages, choose when modals appear. The AI optimizes within your rules.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Automatic Application',
                description: 'When customers accept discount offers, codes apply automatically at checkout. No copy-paste friction. No lost conversions.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Revenue Tracking',
                description: 'Track revenue recovered per impression, not just email signups or clicks. See exactly which interventions drive sales.'
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
                title: 'Performance-Based Pricing',
                description: 'Low base fee plus a small percentage of recovered revenue. We only win when you win.'
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

      {/* How It Works Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: '1',
                title: 'Detection',
                description: 'Customer moves to close tab or navigate away while items are in cart'
              },
              {
                number: '2',
                title: 'Analysis',
                description: 'AI evaluates 8 signals: cart value, browsing behavior, visit frequency, device type, traffic source, time on site, pages viewed, past purchases'
              },
              {
                number: '3',
                title: 'Intervention',
                description: 'Modal appears with personalized content - could be a discount offer, product benefit reminder, urgency message, or custom content'
              },
              {
                number: '4',
                title: 'Conversion',
                description: 'If discount offered, code applies automatically at checkout. Customer completes purchase with one click.'
              },
              {
                number: '5',
                title: 'Learning',
                description: 'AI tracks what works and evolves your campaigns automatically (Pro+ plans)'
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Performance-Based Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-2">We only make money when you make money.</p>
            <p className="text-gray-500">Pay a low base fee plus a small percentage of recovered revenue.</p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-slate-700'}`}
              >
                <span className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-8' : 'translate-x-1'}`} />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">Save 15%</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <div className="relative p-8 rounded-3xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">Perfect for testing exit intent</p>

              <div className="mb-6">
                <div className="text-5xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {isAnnual ? '$24.65' : '$29'}
                  </span>
                  <span className="text-xl text-gray-400">/mo</span>
                </div>
                <div className="text-lg text-purple-400 font-semibold mb-1">+ 5% of recovered revenue</div>
                {isAnnual && (
                  <div className="text-sm text-gray-500">$296/year (save 15%)</div>
                )}
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/50 rounded-full text-base font-semibold transition-all mb-8">
                Start Free Trial
              </button>

              <ul className="space-y-3 flex-grow">
                {[
                  { text: 'Manual mode (you set what appears and when)', included: true },
                  { text: 'Up to 1,000 impressions/month', included: true },
                  { text: '1 campaign', included: true },
                  { text: 'Basic analytics (impressions, clicks, conversions)', included: true },
                  { text: 'Mobile-optimized modals', included: true },
                  { text: 'Auto-apply discount codes', included: true },
                  { text: 'Email support', included: true }
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

            {/* Pro Plan */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500/50 backdrop-blur-sm flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold mb-2 mt-4">Pro</h3>
              <p className="text-gray-400 mb-6">AI-powered optimization for growing stores</p>

              <div className="mb-6">
                <div className="text-5xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {isAnnual ? '$67.15' : '$79'}
                  </span>
                  <span className="text-xl text-gray-400">/mo</span>
                </div>
                <div className="text-lg text-purple-400 font-semibold mb-1">+ 2% of recovered revenue</div>
                {isAnnual && (
                  <div className="text-sm text-gray-500">$806/year (save 15%)</div>
                )}
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/50 rounded-full text-base font-semibold transition-all mb-8">
                Start Free Trial
              </button>

              <ul className="space-y-3 flex-grow">
                {[
                  { text: 'Everything in Starter', included: true },
                  { text: 'AI mode (analyzes 8 customer signals to personalize interventions)', included: true },
                  { text: 'Up to 10,000 impressions/month', included: true },
                  { text: 'Evolution system (auto-improves variants)', included: true },
                  { text: 'Automated A/B testing', included: true },
                  { text: 'Multiple campaigns', included: true },
                  { text: 'Advanced analytics (revenue tracking, variant performance)', included: true },
                  { text: 'Date filtering (7d/30d/all time)', included: true },
                  { text: 'Cart abandonment recovery tracking', included: true },
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

            {/* Enterprise Plan */}
            <div className="relative p-8 rounded-3xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">Maximum control for high-volume stores</p>

              <div className="mb-6">
                <div className="text-5xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {isAnnual ? '$169.15' : '$199'}
                  </span>
                  <span className="text-xl text-gray-400">/mo</span>
                </div>
                <div className="text-lg text-purple-400 font-semibold mb-1">+ 1% of recovered revenue</div>
                {isAnnual && (
                  <div className="text-sm text-gray-500">$2,030/year (save 15%)</div>
                )}
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/50 rounded-full text-base font-semibold transition-all mb-8">
                Start Free Trial
              </button>

              <ul className="space-y-3 flex-grow">
                {[
                  { text: 'Everything in Pro', included: true },
                  { text: 'Unlimited impressions', included: true },
                  { text: 'Advanced AI (13 customer signals for deeper personalization)', included: true },
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

          {/* Pricing Notes */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-900/30 border border-purple-500/10">
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">*</span>
                  <span>Performance fees (5%/2%/1%) apply only to revenue recovered through ResparQ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">*</span>
                  <span>15% annual discount applies to base monthly fees only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">*</span>
                  <span>All plans include 15-day free trial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">*</span>
                  <span>No setup fees or hidden charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">*</span>
                  <span>Cancel anytime</span>
                </li>
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
                Ready to Stop Losing Sales?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join Shopify merchants turning cart abandonment into recovered revenue.
            </p>
            <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
              Start Free Trial
            </button>
            <p className="text-gray-500 mt-6">
              Questions? Reach out at{' '}
              <a href="mailto:sales@resparq.ai" className="text-purple-400 hover:text-purple-300 transition-colors">
                sales@resparq.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="mb-2">&copy; 2025 resparq. Built for merchants who want sales, not subscribers.</p>
          <p>
            <a href="mailto:sales@resparq.ai" className="text-purple-400 hover:text-purple-300 transition-colors">
              sales@resparq.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
