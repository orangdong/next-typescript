import type { NextPage } from 'next';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <Layout>
    <h1 className={styles['home-title']}>Welcome Aviel</h1>
  </Layout>

);

export default Home;
