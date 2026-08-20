'use client';

import { useState } from 'react';

type Plan = {
  name: string;
  blurb: string;
  monthly: number;
  annualMonthly: string;
  annualTotal: string;
  featured?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: 'Starter',
    blurb: 'For stores up to ~200 orders/month',
    monthly: 29,
    annualMonthly: '$24.65',
    annualTotal: '$296/year',
    features: [
      'Manual mode (you set what appears and when)',
      'Up to 1,000 impressions/month',
      '1 campaign',
      'Basic analytics (impressions, clicks, conversions)',
      'Mobile-optimized modals',
      'Auto-apply discount codes',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    blurb: 'For stores with 200-2,000 orders/month',
    monthly: 79,
    annualMonthly: '$67.15',
    annualTotal: '$806/year',
    featured: true,
    features: [
      'Everything in Starter',
      'AI mode',
      'Up to 10,000 impressions/month',
      'Evolution system (auto-improves variants)',
      'Automated A/B testing',
      'Multiple campaigns',
      'Advanced analytics (revenue tracking, variant performance)',
      'Date filtering (7d/30d/all time)',
      'Cart abandonment recovery tracking',
      'Priority email support',
    ],
  },
  {
    name: 'Enterprise',
    blurb: 'For stores with 2,000+ orders/month',
    monthly: 199,
    annualMonthly: '$169.15',
    annualTotal: '$2,030/year',
    features: [
      'Everything in Pro',
      'Unlimited impressions',
      'Advanced AI (deeper personalization)',
      'Override AI decisions (manual variant control)',
      'Promotional intelligence (auto-detects sales)',
      'Custom CSS styling',
      'White-label (remove "Powered by" badge)',
      'Enterprise analytics (segment breakdown, export CSV)',
      'Generation tracking (see AI evolution)',
      'Priority email support',
    ],
  },
];

function Check() {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      <div className="mb-12 flex items-center gap-3">
        <span className={`text-sm ${!annual ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual((v) => !v)}
          className={`relative h-6 w-11 rounded-full border transition-colors ${
            annual ? 'border-brand-500/60 bg-brand-600' : 'border-white/15 bg-white/10'
          }`}
        >
          <span
            className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white transition-all ${
              annual ? 'left-6' : 'left-1'
            }`}
          />
        </button>
        <span className={`text-sm ${annual ? 'text-white' : 'text-zinc-500'}`}>Annual</span>
        <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-2 py-0.5 text-xs font-medium text-brand-300">Save 15%</span>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-7 ${
              plan.featured
                ? 'border-brand-500/40 bg-brand-600/[0.06]'
                : 'border-white/10 bg-white/[0.02]'
            }`}
          >
            {plan.featured && (
              <span className="absolute right-6 top-7 rounded-full border border-brand-500/40 bg-brand-500/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-brand-300">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            <p className="mt-1 text-sm text-zinc-400">{plan.blurb}</p>

            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-tight text-white">
                {annual ? plan.annualMonthly : `$${plan.monthly}`}
              </span>
              <span className="text-sm text-zinc-500">/mo</span>
            </div>
            <div className="mt-1 h-4 text-xs text-zinc-500">{annual ? `${plan.annualTotal} · billed annually` : ''}</div>

            <a
              href="https://apps.shopify.com/resparq"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                plan.featured
                  ? 'bg-brand-600 text-white hover:bg-brand-500'
                  : 'border border-white/15 text-white hover:bg-white/5'
              }`}
            >
              Start free trial
            </a>

            <ul className="mt-7 space-y-2.5 border-t border-white/5 pt-7">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
