'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          {/* Branding */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
                <Image
                    className="h-10 w-auto overflow-hidden  rounded-lg"
                    src="/AttackNewz-logo.jpg"
                    alt="AttackNewz Logo"
                    width={16}
                    height={16}
                />
              <span className="text-xl font-bold font-mono">
                AttackNewz
              </span>
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase font-mono">
                Resources
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <a
                    href="https://globe.gl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-gold"
                  >
                    Globe.gl
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-gold"
                  >
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-gold"
                  >
                    Next.js
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase font-mono ">
                Contact
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <a href="mailto:mohdshahab9520@gmail.com" className="hover:underline hover:text-gold">
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="https://github.com/gitshahab" className="hover:underline hover:text-gold" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase font-mono">
                Legal
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <Link href="/privacy" className="hover:underline hover:text-gold">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline hover:text-gold">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>
            © {new Date().getFullYear()} AttackNewz. All rights reserved.
          </span>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <a href="https://x.com/Shahab_786_" className="hover:text-gold">Twitter</a>
            <a href="https://www.linkedin.com/in/mohdshahab9/" className="hover:text-gold">LinkedIn</a>
            <a href="https://github.com/gitshahab" className="hover:text-gold">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
