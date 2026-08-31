import { ImageResponse } from 'next/og';

// Default social share card for every route that doesn't define its own.
// Applies to og:image and twitter:image automatically.
export const alt = 'Resparq — AI-Powered Exit Intent for Shopify';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #14142a 100%)',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#8b8bff',
          }}
        >
          Resparq
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          AI-Powered Exit Intent for Shopify
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: '#b4b4c8', maxWidth: 880 }}>
          Recover abandoned carts automatically — discounts apply at checkout.
        </div>
      </div>
    ),
    { ...size },
  );
}
