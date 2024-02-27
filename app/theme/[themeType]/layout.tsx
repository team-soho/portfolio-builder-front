import type { Metadata } from 'next';
import ThemeEditButton from '@/components/ThemeEditButton';
import { EditorModeProvider } from '@/providers/editorMode';

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
    <EditorModeProvider>
      {children}
      <ThemeEditButton />
    </EditorModeProvider>
  );
}
