'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode,useState, useEffect } from 'react';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  //useEffect only runs on client so that UI show safely
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false} // Don't use system theme
    >
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider