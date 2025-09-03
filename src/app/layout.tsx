import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Inter, Lora } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
// Validate environment variables on app startup
import '@/lib/env';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Medium Blog - Beautiful Typography & Dark Mode',
  description: 'A Medium-inspired blog application with beautiful typography using Inter and Lora fonts, featuring seamless dark mode switching and accessibility-focused design.',
  keywords: ['blog', 'medium', 'typography', 'dark mode', 'next.js', 'tailwind'],
  authors: [{ name: 'Your Name' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${inter.variable}
          ${lora.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
          storageKey="medium-blog-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
