import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter, JetBrains_Mono } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: "AttackNewz",
  description: "A modern news platform, combining live global incident coverage with an interactive 3D attack map. Track cyberattacks, disasters, and geopolitical events in real time — all on a responsive, dark-themed interface inspired by NYT, Reuters, and Al Jazeera.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} scroll-smooth`}>
        <ThemeProvider>
          <Header/>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
