import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <Layout title="Home">
    <div className={`${'mb-1'}`}>
      <h1 className={styles['home-title']}>Welcome Aviel</h1>
      <p className={styles.subtitle}>This site was built using NextJS. How cool is that!</p>
    </div>
    <div className={`${'mb-1'}`}>
      <h2 className={styles.subheading}>Featured posts</h2>
      <div className={styles.postsContainer}>
        <Link href="#">
          <a>
            <div className={styles.posts}>
              <Image className={styles.postImage} src="/assets/img/blog1.jpeg" width={300} height={150} />
              <h3 className={styles.postTitle}>
                Using Firestore and Apache Beam for data processing
              </h3>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div className={styles.posts}>
              <Image className={styles.postImage} src="/assets/img/blog2.jpg" width={300} height={150} />
              <h3 className={styles.postTitle}>
                Enabling SRE best practices: new contextual traces in Cloud Logging
              </h3>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div className={styles.posts}>
              <Image className={styles.postImage} src="/assets/img/blog3.jpg" width={300} height={150} />
              <h3 className={styles.postTitle}>
                Announcing Vertex Pipelines general availability
              </h3>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div className={styles.posts}>
              <Image className={styles.postImage} src="/assets/img/blog4.jpg" width={300} height={150} />
              <h3 className={styles.postTitle}>
                Scale your data science workflows with the Vertex AI Workbench notebook executor
              </h3>
            </div>
          </a>
        </Link>
      </div>
      <h2 className={styles.subheading}>Recommended for you</h2>
      <div className={styles.postsContainer}>
        <Link href="#">
          <a>
            <div className={styles.posts}>
              <Image className={styles.postImage} src="/assets/img/blog5.jpg" width={300} height={150} />
              <h3 className={styles.postTitle}>
                Google Cloud Network Service Tiers: An overview
              </h3>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div className={styles.posts}>
              <Image className={styles.postImage} src="/assets/img/blog6.jpg" width={300} height={150} />
              <h3 className={styles.postTitle}>
                Announcing Spot Pods for GKE Autopilot—save on fault tolerant workloads
              </h3>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div className={styles.posts}>
              <Image className={styles.postImage} src="/assets/img/blog7.jpg" width={300} height={150} />
              <h3 className={styles.postTitle}>
                JOIN 2021: Sharing our product vision with the Looker community
              </h3>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div className={styles.posts}>
              <Image className={styles.postImage} src="/assets/img/blog8.jpg" width={300} height={150} />
              <h3 className={styles.postTitle}>
                What’s new with Google Cloud
              </h3>
            </div>
          </a>
        </Link>
      </div>
    </div>
  </Layout>

);

export default Home;
