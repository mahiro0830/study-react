import { Suspense } from 'react';

const SuspensePractice = () => {
  return (
    <Suspense fallback={ <p>読み込み中です...</p> }>
      <TestComponent />
    </Suspense>
  );
};

// 描画待ち状態かどうかのフラグを準備
let flag = false;

const TestComponent = () => {

  // 描画をする
  if (flag) {
    return (
      <p>描画されました。</p>
    );
  }
  throw new Promise((resolve) => {
    setTimeout(() => {
      resolve('success!!');
      flag = true;
    }, 3000);
  });
};

export default SuspensePractice;
