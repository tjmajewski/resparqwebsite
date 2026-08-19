import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Resparq collects, uses, and protects data across our Shopify app and website.',
  alternates: { canonical: 'https://www.resparq.ai/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="February 2026">
      <h2>Introduction</h2>
      <p>
        Resparq (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, and share information when you use our Shopify
        application and this website.
      </p>

      <h2>Information We Collect</h2>
      <p>When merchants install our app, we collect:</p>
      <ul>
        <li><strong>Store Information:</strong> Shop name, domain, and email address</li>
        <li><strong>Order Data:</strong> Order totals and discount codes used (for conversion tracking)</li>
        <li><strong>App Settings:</strong> Configuration choices made within the app</li>
      </ul>
      <p>From store visitors (your customers), we collect anonymous behavioral signals:</p>
      <ul>
        <li>Cart value and contents</li>
        <li>Device type (mobile/desktop)</li>
        <li>Page views and time on site</li>
        <li>Whether they interacted with our modal</li>
      </ul>
      <p>We do NOT collect personal customer information like names, emails, or addresses.</p>

      <h2>How We Use Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide and improve our exit intent modal service</li>
        <li>Personalize discount offers based on anonymous behavioral signals</li>
        <li>Track conversion performance and generate analytics</li>
        <li>Improve our AI algorithms across all stores (using anonymized, aggregated data)</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>We do not sell your data. We may share information with:</p>
      <ul>
        <li><strong>Service Providers:</strong> Hosting and infrastructure providers (Fly.io)</li>
        <li><strong>Shopify:</strong> As required for app functionality</li>
        <li><strong>Legal Requirements:</strong> When required by law</li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        We retain merchant data for as long as the app is installed. Upon uninstallation, we delete
        all store data within 48 hours as required by Shopify&apos;s data protection requirements.
      </p>
      <p>
        Anonymous behavioral data used for AI training is retained for up to 90 days, then
        automatically deleted.
      </p>

      <h2>GDPR Compliance</h2>
      <p>For merchants and customers in the European Union:</p>
      <ul>
        <li>You have the right to access, correct, or delete your data</li>
        <li>You can request a copy of your data at any time</li>
        <li>We respond to all data requests within 30 days</li>
      </ul>
      <p>To exercise these rights, contact us at <a href="mailto:privacy@resparq.ai">privacy@resparq.ai</a>.</p>

      <h2>Security</h2>
      <p>
        We implement industry-standard security measures including encrypted data transmission
        (HTTPS), secure database storage, and regular security audits.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. We will notify merchants of significant changes
        via email or in-app notification.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at{' '}
        <a href="mailto:privacy@resparq.ai">privacy@resparq.ai</a>.
      </p>
    </LegalLayout>
  );
}
