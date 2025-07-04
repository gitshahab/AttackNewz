import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-mono mb-6">Privacy Policy</h1>
        <Link href="/" className="text-sm font-mono hover:underline hover:text-gold mb-6 inline-block">
          ← Back to Home
        </Link>
      </div>

      <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert font-sans max-w-none">
        <p>
          At <strong>AttachNewz</strong>, your privacy is important to us. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to ensure it remains secure.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> We may collect your email or name only if you contact us directly.</li>
          <li><strong>Usage Data:</strong> We collect anonymous usage data, such as visited pages, device type, and browser details, to improve the experience.</li>
          <li><strong>Location Data:</strong> We may use your approximate location to personalize incident data relevant to your region (optional).</li>
        </ul>

        <h2>2. How We Use Your Data</h2>
        <p>We use collected data to:</p>
        <ul>
          <li>Improve platform performance and user experience.</li>
          <li>Analyze trends and track incident engagement.</li>
          <li>Send updates or alerts (only if you’ve opted in).</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>
          Our platform may use cookies to remember user preferences and gather statistical data. You can disable cookies in your browser settings if you prefer.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          We may use third-party tools such as Google Analytics or Mapbox for enhanced functionality. These tools may collect data as per their own privacy policies.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement standard security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. You can contact us directly for any privacy-related requests.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised date.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          For any questions or concerns about this policy, email us at <a href="mailto:mohdshahab9520@gmail.com" className="text-gold hover:underline">support@attacknewz.com</a>.
        </p>

        <p className="text-sm text-gray-400 mt-8">Last updated: July 3, 2025</p>
      </div>
    </main>
  );
}
