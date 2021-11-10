import { ReactNode } from 'react';
import Head from 'next/head';
import style from './Layout.module.css';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export default function Layout(props: LayoutProps) {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>
          {title}
          {' '}
          | Next Typescript
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="NextJS with typescript is sooo awesome!" />
        <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
      </Head>
      <div className={style.container}>
        <Header />
        <div className={style.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
