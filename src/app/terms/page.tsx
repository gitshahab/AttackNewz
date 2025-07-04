import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-mono mb-6">Terms & Conditions</h1>
        <Link href="/" className="text-sm font-mono hover:underline hover:text-gold mb-6 inline-block">
          ← Back to Home
        </Link>
      </div>

      <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert font-sans max-w-none">
        <p>
          These Terms and Conditions govern your use of <strong>AttachNewz</strong>, and by accessing this website, you accept these terms in full. If you disagree with any part of these terms, please do not use the site.
        </p>

        <h2>1. Use of the Platform</h2>
        <ul>
          <li>You must be at least 13 years old to use this platform.</li>
          <li>All content provided is for informational purposes only and is subject to change.</li>
          <li>You agree not to use the platform for any unlawful purposes or to disrupt the site functionality.</li>
        </ul>

        <h2>2. Intellectual Property</h2>
        <p>
          All content, including logos, design, and data visualizations on AttachNewz, is our intellectual property unless otherwise stated. You may not reuse or redistribute any content without explicit permission.
        </p>

        <h2>3. Incident Data Disclaimer</h2>
        <p>
          While we strive to provide accurate and timely incident information, AttachNewz cannot guarantee the completeness, reliability, or real-time accuracy of data.
        </p>

        <h2>4. User Conduct</h2>
        <ul>
          <li>You must not submit harmful, misleading, or malicious data to the platform.</li>
          <li>Any attempt to exploit security vulnerabilities is strictly prohibited.</li>
        </ul>

        <h2>5. External Links</h2>
        <p>
          Our platform may contain links to third-party sites. We are not responsible for their content, policies, or accuracy.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          AttachNewz is not liable for any losses or damages arising from the use or inability to use the platform, even if we have been advised of the possibility of such damages.
        </p>

        <h2>7. Modifications</h2>
        <p>
          We reserve the right to modify or replace these terms at any time. Continued use of the platform after any changes implies your acceptance of the revised terms.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of your local jurisdiction.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          For questions about these Terms & Conditions, reach out to us at <a href="mailto:mohdshahab9520@gmail.com" className="text-gold hover:underline">support@attacknewz.com</a>.
        </p>

        <p className="text-sm text-gray-400 mt-8">Last updated: July 3, 2025</p>
      </div>
    </main>
  );
}
