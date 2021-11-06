import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000); // 3 seconds
  }, []);

  return (
    <div>
      <p>Contoh custom 404</p>
    </div>
  );
}
