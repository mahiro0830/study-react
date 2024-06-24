import { Suspense } from 'react';

const SuspensePractice = () => {
  return (
    <Suspense fallback={ <p>読み込み中です...</p> }>
      <TestComponent />
    </Suspense>
  );
};

const TestComponent = () => {
  console.log(new Promise(() => {}));
  throw new Promise(() => {});
};

export default SuspensePractice;
