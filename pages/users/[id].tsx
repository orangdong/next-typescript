import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.css';

interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDerailProps{
    user: User
}

export default function UserDetail(props: UserDerailProps) {
  const router = useRouter();
  const { id } = router.query;
  const { user } = props;

  return (
    <Layout title="Users Detail">
      <div className={`${'mb-1'}`}>
        <h1 className={styles['home-title']}>Users Details</h1>
        <p className={styles.subtitle}>
          Detail data for user with id:
          {' '}
          {id}
        </p>
      </div>
      <div className={`${'mb-1'}`}>
        <p>
          <b>Name:</b>
          {' '}
          {user.name}
        </p>
        <p>
          <b>Username:</b>
          {' '}
          {user.username}
        </p>
        <p>
          <b>Email:</b>
          {' '}
          {user.email}
        </p>
        <p>
          <b>Contact:</b>
          {' '}
          {user.phone}
        </p>
        <p>
          <b>Website:</b>
          {' '}
          {user.website}
        </p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const paths = users.map((user: User) => ({
    params: { id: `${user.id}` },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
    params: {
        id: string;
    };
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
