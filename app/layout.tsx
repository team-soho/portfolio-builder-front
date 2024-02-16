import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './sanitize.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Builder',
  description:
    'Craft your professional portfolio website without any coding required!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
