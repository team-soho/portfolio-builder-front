import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './sanitize.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900']
});

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
    <html lang='ko'>
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
