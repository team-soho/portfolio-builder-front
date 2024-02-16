import Link from 'next/link';
import globalStyle from '@/app/global.module.css';

export default function Home() {
  return (
    <main className={globalStyle.main}>
      <h1 className={globalStyle.title}>Welcome Project Builder</h1>
      <Link href='/theme' className={globalStyle['link-btn']}>
        Create Portfolio
      </Link>
    </main>
  );
}
