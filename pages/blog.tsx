import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

interface Post{
  id: number;
  title: string;
  body: string;
}

interface BlogProps{
  posts: Post[];
}

export default function Blog(props: BlogProps) {
  const { posts } = props;
  return (
    <Layout title="Blog">
      <div className={`${'mb-1'}`}>
        <h1 className={styles['home-title']}>Blog</h1>
        <p className={styles.subtitle}>
          Find news, updates, and best practices for cloud solutions and technologies.
        </p>
      </div>
      <div className={`${'mb-1'}`}>
        {posts.map((post) => (
          <div className={styles.blog}>
            <h4 style={{ marginTop: `${-3}px` }}>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
