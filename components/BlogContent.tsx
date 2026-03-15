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
                className="text-gray-300 leading-relaxed text-lg mb-6"
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            );
          case 'heading2':
            return (
              <h2
                key={i}
                id={block.id}
                className="text-3xl font-bold text-white mt-12 mb-4"
              >
                {block.text}
              </h2>
            );
          case 'heading3':
            return (
              <h3
                key={i}
                id={block.id}
                className="text-xl font-semibold text-white mt-8 mb-3"
              >
                {block.text}
              </h3>
            );
          case 'list':
            return (
              <ul key={i} className="space-y-2 mb-6 ml-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                    <span className="text-purple-400 mt-1.5 flex-shrink-0">
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
                className="bg-purple-500/10 border-l-4 border-purple-500 p-6 rounded-r-xl mb-6 mt-6"
              >
                <p
                  className="text-gray-200 leading-relaxed"
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
