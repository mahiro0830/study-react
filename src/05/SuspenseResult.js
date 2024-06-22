import { Suspense } from 'react';
import ThrowResult from './ThrowResult';

const SuspenseResult = () => {
  return (
    <Suspense fallback={<p>Now Loading...</p>}>
      <ThrowResult />
    </Suspense>
  );
};

export default SuspenseResult;
