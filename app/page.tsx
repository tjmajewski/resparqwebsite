import Image from 'next/image';
import SiteNav from '@/components/site/SiteNav';
import Reveal from '@/components/site/Reveal';
import Pricing from '@/components/site/Pricing';
import Faq, { type FaqItem } from '@/components/site/Faq';
import Footer from '@/components/Footer';

const faqItems: FaqItem[] = [
  {
    question: 'How is Resparq different from email capture pop-ups?',
    answer:
      'Traditional exit intent tools focus on capturing emails for future marketing. Resparq focuses on immediate conversion, recovering the sale right now, in the moment. No email forms, no friction, just revenue. Our auto-apply discount feature and AI-powered personalization are designed to close the sale, not build an email list.',
  },
  {
    question: "How does Resparq's AI decide what to show each customer?",
    answer:
      "Our AI analyzes 17 customer signals in real-time including cart value, visit history, device type, traffic source, time on site, and browsing behavior. Based on this analysis, it determines the optimal intervention for each shopper, whether that's a discount offer, product benefit reminder, urgency message, or simply letting them go. The goal is to show the right message to the right customer, not just blast everyone with discounts.",
  },
  {
    question: 'Will exit intent pop-ups annoy my customers?',
    answer:
      'Resparq is designed to be helpful, not annoying. Modals only appear when the AI detects a shopper is likely to abandon, not on every page visit. The AI also learns over time which interventions work best, reducing unnecessary disruptions. Plus, you have full control over frequency limits and can customize when modals appear.',
  },
  {
    question: 'How do discount codes apply automatically at checkout?',
    answer:
      'When a customer accepts a discount offer through Resparq, the code is automatically applied to their cart, no copy-paste required. This removes friction from the checkout process and significantly increases conversion rates compared to traditional pop-ups that require customers to remember and manually enter codes.',
  },
  {
    question: 'Does Resparq work on mobile devices?',
    answer:
      'Yes! All Resparq modals are fully mobile-optimized and responsive. On mobile, we detect exit intent through different signals like scroll behavior and back button attempts, ensuring you can recover carts from mobile shoppers too.',
  },
  {
    question: 'How long does it take to set up Resparq?',
    answer:
      'Most merchants complete setup in under 5 minutes. Simply install the app from the Shopify App Store, and Resparq automatically integrates with your store. No coding required, and it works with any Shopify theme. You can start recovering carts immediately with our default settings, then customize as needed.',
  },
  {
    question: 'Can I customize how the modals look?',
    answer:
      'Absolutely. You can customize modal content, messaging, and timing on all plans. Enterprise plans include custom CSS styling and white-label options to remove Resparq branding entirely, allowing the modals to match your store\'s look and feel perfectly.',
  },
  {
    question: 'Will Resparq slow down my store?',
    answer:
      "No. Resparq is built for performance with lightweight, asynchronous loading that doesn't impact your store's page speed or Core Web Vitals. The script only activates when exit intent is detected, so there's no overhead during normal browsing.",
  },
  {
    question: 'What happens after the 14-day free trial?',
    answer:
      "After your trial, you'll be charged the flat monthly or annual fee for your selected plan. There are no setup fees, no commissions, and you can cancel anytime. If you decide Resparq isn't right for you during the trial, simply uninstall and no charges will be made.",
  },
];

const features = [
  {
    title: 'AI decision engine',
    description:
      "Analyzes 17 customer signals in real time (cart value, visit history, device, traffic source and more) to pick the best intervention for each shopper. Sometimes that's a discount. Sometimes it's not.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
  {
    title: 'Full control',
    description:
      'Override AI decisions any time. Set offer ranges, write custom messages, and choose when modals appear. The AI optimizes within your rules.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    ),
  },
  {
    title: 'Automatic application',
    description:
      'When customers accept a discount, the code applies automatically at checkout. No copy-paste friction, no lost conversions.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: 'Revenue tracking',
    description:
      'Measure revenue recovered per impression, not just email signups or clicks. See exactly which interventions drive sales.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    title: 'Instant setup',
    description: 'Five-minute install, no code required. Works with any Shopify theme, out of the box.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
  {
    title: 'Flat-rate pricing',
    description:
      'Clear, predictable plans with no commissions and no hidden fees. Pick the plan that fits your store and start recovering revenue.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

const steps = [
  { title: 'Detection', description: 'AI spots the signs that a shopper with items in their cart is about to abandon.' },
  { title: 'Analysis', description: 'It weighs multiple customer signals to determine the best intervention for that shopper.' },
  { title: 'Intervention', description: 'A modal appears with personalized content: a discount, a benefit reminder, an urgency message, or custom copy.' },
  { title: 'Conversion', description: 'If a discount is offered, the code applies automatically at checkout. The customer completes the purchase in one click.' },
  { title: 'Learning', description: 'The AI tracks what works and evolves your campaigns automatically (Pro and up).' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-400">
      <span className="h-px w-6 bg-brand-500/50" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-950 text-zinc-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-40">
        {/* backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-dotgrid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[130px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="rise rise-1">
              <a
                href="https://apps.shopify.com/resparq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-white/20"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                Live on the Shopify App Store
                <span className="text-zinc-600">→</span>
              </a>
            </div>

            <h1 className="rise rise-2 mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Recover abandoned carts
              <br className="hidden sm:block" /> before they&apos;re gone.
            </h1>

            <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              When a shopper is about to leave your Shopify store, Resparq steps in with a personalized offer to
              bring them back. AI picks the right message, discount codes auto-apply at checkout, and you recover
              revenue now, not email addresses later.
            </p>

            <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://apps.shopify.com/resparq"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-brand-600 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-brand-500"
              >
                Start free trial
              </a>
              <a
                href="#how"
                className="rounded-lg border border-white/15 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                See how it works
              </a>
            </div>

            <div className="rise rise-5 mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500">
              <span>14-day free trial</span>
              <span className="text-zinc-700">·</span>
              <span>5-minute setup</span>
              <span className="text-zinc-700">·</span>
              <span>No code required</span>
            </div>
          </div>

          {/* Product mock (decorative illustration) */}
          <div className="rise rise-4 relative" aria-hidden="true">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/50">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-zinc-500">yourstore.com/cart</span>
              </div>

              <div className="relative px-5 pb-6 pt-5">
                {/* dimmed store behind */}
                <div className="space-y-3 opacity-40 blur-[1px]">
                  <div className="flex gap-3">
                    <div className="h-16 w-16 rounded-lg bg-white/10" />
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-3 w-2/3 rounded bg-white/10" />
                      <div className="h-3 w-1/3 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-16 w-16 rounded-lg bg-white/10" />
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-3 w-1/2 rounded bg-white/10" />
                      <div className="h-3 w-1/4 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="h-9 w-full rounded-lg bg-white/10" />
                </div>

                {/* Resparq modal */}
                <div className="absolute inset-x-4 bottom-5 rounded-xl border border-white/10 bg-ink-850/95 p-4 shadow-xl shadow-black/60 backdrop-blur-sm sm:inset-x-8">
                  <p className="text-[15px] font-semibold text-white">Wait, here&apos;s 10% off your cart</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-md border border-dashed border-brand-500/40 bg-brand-500/10 px-2 py-1 font-mono text-xs text-brand-300">
                      SAVE10
                    </span>
                    <span className="text-xs text-zinc-500">applied automatically</span>
                  </div>
                  <div className="mt-3 w-full rounded-lg bg-brand-600 py-2 text-center text-sm font-medium text-white">
                    Apply &amp; check out
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>Why Resparq</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for performance, not pageviews
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">
              Everything you need to turn exit intent into recovered revenue, without adding another email list.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.06}>
                <div className="group h-full bg-ink-950 p-7 transition-colors hover:bg-ink-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-brand-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {f.icon}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                From exit intent to checkout in five steps
              </h2>
              <p className="mt-4 max-w-md text-zinc-400">
                Resparq runs entirely in the moment of abandonment. No flows to build, no emails to wait on.
              </p>
              <a
                href="https://apps.shopify.com/resparq"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Install on Shopify
              </a>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute bottom-2 left-[15px] top-2 w-px bg-white/10" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.05}>
                  <div className="relative flex gap-5 pl-0">
                    <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-ink-950 font-mono text-xs text-brand-300">
                      {i + 1}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Simple, flat-rate pricing
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">
              Predictable plans, no commissions, no hidden fees. Every plan includes a 14-day free trial.
            </p>
          </Reveal>

          <div className="mt-12">
            <Pricing />
          </div>

          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-zinc-500">
            An impression is counted each time the AI shows a modal to a shopper it thinks is about to abandon. Most
            stores see 5-10 impressions per 100 visitors. All plans include a 14-day free trial with no setup fees.
            Cancel any time.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Questions, answered
              </h2>
              <p className="mt-4 text-zinc-400">
                Still curious? Email{' '}
                <a href="mailto:sales@resparq.ai" className="text-brand-400 underline underline-offset-4 hover:text-brand-300">
                  sales@resparq.ai
                </a>
                .
              </p>
            </div>
          </Reveal>
          <Reveal>
            <Faq items={faqItems} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 px-8 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[640px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ready to stop losing sales?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-zinc-400">
                  Join Shopify merchants turning cart abandonment into recovered revenue.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="https://apps.shopify.com/resparq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-500"
                  >
                    Start free trial
                  </a>
                  <a
                    href="mailto:sales@resparq.ai"
                    className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
                  >
                    Talk to us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
