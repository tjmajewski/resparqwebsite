import { ImageResponse } from 'next/og';
import { getAllPosts, getPostBySlug } from '@/lib/blog-data';

export const alt = 'Resparq blog post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? 'Resparq Blog';
  const meta = post ? `${post.category} · ${post.readTime}` : 'Cart recovery insights';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #14142a 100%)',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#8b8bff',
          }}
        >
          Resparq Blog
        </div>
        <div
          style={{
            marginTop: 'auto',
            fontSize: title.length > 70 ? 52 : 62,
            fontWeight: 700,
            lineHeight: 1.08,
            display: 'flex',
          }}
        >
          {title}
        </div>
        <div style={{ marginTop: 32, fontSize: 28, color: '#b4b4c8' }}>{meta}</div>
      </div>
    ),
    { ...size },
  );
}
