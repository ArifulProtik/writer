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
          defaultTheme="light"
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
