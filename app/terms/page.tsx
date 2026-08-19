import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing use of the Resparq Shopify app and website.',
  alternates: { canonical: 'https://www.resparq.ai/terms' },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="February 2026">
      <h2>Agreement to Terms</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Resparq Shopify
        application and website (collectively, the &quot;Service&quot;). By installing the app or using our
        website, you agree to be bound by these Terms.
      </p>

      <h2>The Service</h2>
      <p>
        Resparq provides an AI-powered exit-intent modal that displays targeted discount offers to
        your store visitors to help recover abandoning carts. Features, pricing, and availability
        may change over time.
      </p>

      <h2>Merchant Responsibilities</h2>
      <ul>
        <li>You must have a valid Shopify store and comply with Shopify&apos;s terms.</li>
        <li>You are responsible for the discount codes and offers you configure.</li>
        <li>You must comply with all applicable laws, including consumer-protection and marketing regulations.</li>
        <li>You are responsible for honoring any offer displayed to your customers.</li>
      </ul>

      <h2>Billing</h2>
      <p>
        Paid plans are billed through Shopify&apos;s billing system according to the pricing shown at
        signup. Charges are subject to Shopify&apos;s billing terms. You can cancel at any time by
        uninstalling the app; charges already incurred are non-refundable except where required by
        law.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, resell, or misuse the Service</li>
        <li>Use the Service for any unlawful or deceptive purpose</li>
        <li>Interfere with or disrupt the integrity or performance of the Service</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        The Service, including all software, branding, and content, is owned by Resparq and protected
        by intellectual-property laws. These Terms do not grant you any ownership rights in the
        Service.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not
        guarantee any specific increase in conversions, revenue, or recovered carts.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Resparq shall not be liable for any indirect,
        incidental, or consequential damages arising from your use of the Service. Our total
        liability shall not exceed the amount you paid us in the 12 months preceding the claim.
      </p>

      <h2>Termination</h2>
      <p>
        We may suspend or terminate your access to the Service if you violate these Terms. You may
        stop using the Service at any time by uninstalling the app.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the Service after changes take
        effect constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these Terms? Contact us at{' '}
        <a href="mailto:support@resparq.ai">support@resparq.ai</a>.
      </p>
    </LegalLayout>
  );
}
