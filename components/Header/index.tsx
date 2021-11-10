import Link from 'next/link';
import style from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div className={style.navigation}>
        <div className={style.logo}>
          Logo
        </div>
        <div className={style['nav-item']}>
          <Link href="/"><a className={style['nav-link']}>Home</a></Link>
          <Link href="/blog"><a className={style['nav-link']}>Blog</a></Link>
          <Link href="/users"><a className={style['nav-link']}>Users</a></Link>
        </div>
      </div>
    </header>
  );
}
