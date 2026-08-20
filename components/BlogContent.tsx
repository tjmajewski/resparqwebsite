import type { ContentBlock } from '@/lib/blog-data';

export default function BlogContent({ content }: { content: ContentBlock[] }) {
  return (
    <div className="blog-content">
      {content.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p
                key={i}
                className="mb-6 text-lg leading-relaxed text-zinc-300"
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            );
          case 'heading2':
            return (
              <h2
                key={i}
                id={block.id}
                className="mt-12 mb-4 text-3xl font-semibold tracking-tight text-white"
              >
                {block.text}
              </h2>
            );
          case 'heading3':
            return (
              <h3
                key={i}
                id={block.id}
                className="mt-8 mb-3 text-xl font-semibold text-white"
              >
                {block.text}
              </h3>
            );
          case 'list':
            return (
              <ul key={i} className="space-y-2 mb-6 ml-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 leading-relaxed text-zinc-300">
                    <span className="mt-1.5 flex-shrink-0 text-brand-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="3" />
                      </svg>
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            );
          case 'callout':
            return (
              <div
                key={i}
                className="mb-6 mt-6 rounded-r-xl border-l-2 border-brand-500 bg-brand-500/10 p-6"
              >
                <p
                  className="leading-relaxed text-zinc-200"
                  dangerouslySetInnerHTML={{ __html: block.text }}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
