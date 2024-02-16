import Link from 'next/link';
import globalStyle from '@/app/global.module.css';

export default function Theme() {
  return (
    <main className={globalStyle.main}>
      <h1 className={globalStyle.title}>Choose a theme</h1>
      <Link href='/theme/theme01' className={globalStyle['link-btn']}>
        theme01
      </Link>
    </main>
  );
}
