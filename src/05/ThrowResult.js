import wrapPromise from './wrapPromise';

// Promiseの状態を管理するオブジェクトを取得
const info = getInfo();
// Promiseの状態に応じて結果を表示するコンポーネント
const ThrowResult = () => {
  const result = info.get();
  return <p>{ result }</p>
};

// 非同期でデータを取得するための関数
function getInfo() {
  return wrapPromise(
    new Promise((resolve, reject) => {
      // 2秒後に50%の確率で成功する
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('Success!!');
        } else {
          reject('Error!!');
        }
      }, 2000);
    })
  );
}

export default ThrowResult;

