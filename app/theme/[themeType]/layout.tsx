import type { Metadata } from 'next';
import ThemeEditButton from '@/components/ThemeEditButton';

export const metadata: Metadata = {
  title: 'Portfolio Builder',
  description: 'Create your own portfolio!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <ThemeEditButton />
    </div>
  );
}
