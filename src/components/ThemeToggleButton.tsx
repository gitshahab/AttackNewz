'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMoon, IoSunny  } from "react-icons/io5";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 hover:cursor-pointer rounded-full border border-neutral-300 dark:border-neutral-700 transition-all hover:scale-105"
    >
      {isDark ? <IoSunny className="w-5 h-5 text-neutralLight" /> : <IoMoon className="w-5 h-5 text-neutralDark" />}
    </button>
  )
}

export default ThemeToggleButton