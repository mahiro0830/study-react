import { Suspense } from 'react';
import ThrowPromise from './ThrowPromise';

const SuspenseSimple = () => {
  return (
    <Suspense fallback={<p>Now Loading...</p>}>
      <ThrowPromise />
    </Suspense>
  );
};

export default SuspenseSimple;
