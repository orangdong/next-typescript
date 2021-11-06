import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        width: `${300}px`,
      }}
      >
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/blog"><a>Blog</a></Link></li>
        <li><Link href="/users"><a>Users</a></Link></li>
      </ul>
    </header>
  );
}
