'use client';

import { useState } from 'react';

export type FaqItem = { question: string; answer: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/8 border-y border-white/8">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] font-medium text-white">{item.question}</span>
              <svg
                className={`h-5 w-5 flex-shrink-0 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-45 text-brand-400' : ''}`}
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
