import { useRouter } from 'next/router';

export default function UserDetail() {
  const router = useRouter();
  const { user, id } = router.query;

  return (
    <div>
      <p>
        User:
        {' '}
        {user}
      </p>
      <p>
        ID:
        {' '}
        {id}
      </p>
    </div>
  );
}
