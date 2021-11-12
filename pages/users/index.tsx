import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.css';
import style from './Users.module.css';

interface UsersData{
  users: Array<any>;
}

export default function Users(props: UsersData) {
  const { users } = props;
  const router = useRouter();

  return (
    <Layout title="Users">
      <div className={`${'mb-1'}`}>
        <h1 className={styles['home-title']}>Users</h1>
        <p className={styles.subtitle}>
          The website users. Fetched from API
        </p>
      </div>
      <div className={`${'mb-1'}`}>
        {users.map((user) => (
          <li className={style['user-link']} key={user.id} onClick={() => router.push(`/users/${user.id}`)}>{user.name}</li>
        ))}
      </div>
    </Layout>
  );
}

// get static props mencetak data sebelum diserve ke browser, sehingga cocok untuk data
// yang statis
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
