'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import ThemeToggleButton from './ThemeToggleButton';
import Image from 'next/image';

const categories = [
  { label: 'Cyberattacks', href: '/cyberattacks' },
  { label: 'Natural Disasters', href: '/disasters' },
  { label: 'Political Events', href: '/politics' },
  { label: 'Infrastructure Failures', href: '/infrastructure' },
  { label: 'Pandemics', href: '/pandemics' },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow dark:shadow-neutralLight'>
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
      {/* Mobile Menu Toggle */}
      <motion.button
        whileTap={{ scale: 1.2 }}
        onClick={() => setMenu(!menu)}
        className="lg:hidden"
      >
        <FiMenu size={24} />
      </motion.button>

      {/* Logo */}
      <Link href="/" className="hidden lg:flex flex-1 gap-2 items-center">
        <Image
          className="h-10 w-auto overflow-hidden  rounded-lg"
          src="/AttackNewz-logo.jpg"
          alt="AttackNewz Logo"
          width={16}
          height={16}
        />
        <h1 className='text-gold font-mono font-bold text-2xl'>AttackNewz</h1>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-4 items-center font-sans text-sm font-medium">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className={`hover:text-gold hover:underline transition-colors ${
              pathname === cat.href ? 'text-gold underline underline-offset-4' : ''
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>
      <Link href="/" className='lg:hidden'>
        <h2 className='text-gold font-mono font-bold text-xl'>AttackNewz</h2>
      </Link>

      <div className="hidden lg:flex flex-1 justify-end">
            <Link
                href="/topstories"
                className="font-sans border p-2 rounded-lg text-white bg-adversaryRed hover:bg-red-700"
                >
                Top Stories
            </Link>
      </div>
        
        <div className='pl-1'>
            <ThemeToggleButton />
        </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="absolute top-full left-0 w-full bg-neutralLight border-t border-neutral-700 flex flex-col p-5 lg:hidden z-40"
          >
            <Link
                href="/topstories"
                onClick={() => setMenu(false)}
                className="font-sans bg-zinc-800 dark:bg-zinc-300 dark:text-black rounded-lg px-4 py-2 mt-2 hover:bg-gold transition-colors"
                >
                Top Stories
            </Link>

            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setMenu(false)}
                className="font-sans bg-zinc-800 dark:bg-zinc-300 dark:text-black rounded-lg px-4 py-2 mt-2 hover:bg-gold transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default Header;
