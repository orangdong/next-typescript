import type { NextPage } from 'next';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <>
    <Header />
    <h1 className={styles['home-title']}>Welcome Aviel</h1>
  </>
);

export default Home;
