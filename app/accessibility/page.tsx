import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Resparq is committed to making our website and Shopify app accessible to everyone.',
  alternates: { canonical: 'https://www.resparq.ai/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <LegalLayout title="Accessibility Statement" updated="February 2026">
      <h2>Our Commitment</h2>
      <p>
        Resparq is committed to ensuring digital accessibility for people with disabilities. We are
        continually improving the user experience for everyone and applying the relevant
        accessibility standards to our website and Shopify application.
      </p>

      <h2>Conformance Status</h2>
      <p>
        We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These
        guidelines explain how to make web content more accessible for people with a wide range of
        disabilities, including visual, auditory, physical, speech, cognitive, and neurological
        disabilities.
      </p>

      <h2>Measures We Take</h2>
      <ul>
        <li>Semantic HTML and ARIA labels for screen-reader compatibility</li>
        <li>Sufficient color contrast between text and background</li>
        <li>Keyboard-navigable interface with visible focus states</li>
        <li>Responsive layouts that adapt to zoom and different screen sizes</li>
        <li>Descriptive alt text for meaningful images</li>
      </ul>

      <h2>Accessibility of Our Shopify App</h2>
      <p>
        The Resparq exit-intent modal that appears on merchant storefronts is built to be
        keyboard-dismissible, screen-reader friendly, and to respect a visitor&apos;s reduced-motion
        preferences. Merchants can customize colors and copy, and we encourage choosing
        high-contrast combinations.
      </p>

      <h2>Limitations</h2>
      <p>
        Despite our best efforts, some content may not yet be fully accessible. We are actively
        working to identify and resolve any issues.
      </p>

      <h2>Feedback</h2>
      <p>
        We welcome your feedback on the accessibility of Resparq. If you encounter a barrier or need
        content provided in an alternative format, please contact us at{' '}
        <a href="mailto:support@resparq.ai">support@resparq.ai</a>. We aim to respond within 5
        business days.
      </p>
    </LegalLayout>
  );
}
