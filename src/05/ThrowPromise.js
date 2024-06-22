// Promiseが終了したかを表すフラグ変数
let flag = false;

const ThrowPromise = () => {
  // Promiseが完了していれば、本来の結果を表示
  if (flag) {
    return <p>Promise is resolved!</p>;
  }

  // ロード中の場合は、Promiseを投げる
  throw new Promise((resolve, reject) => {
    // 3秒後に解決（resolve）する
    setTimeout(() => {
      flag = true;
      resolve('Success!!');
    }, 3000);
  });
};

export default ThrowPromise;
