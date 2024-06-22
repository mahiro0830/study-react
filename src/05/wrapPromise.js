const wrapPromise = (promise) => {
  // Promiseの状態を管理（pending, fulfilled, rejected)
  let status = 'pending';
  // Promiseから受け取ったデータ
  let data;
  // 元のPromiseに後処理を付与
  let wrapper = promise.then(
    // 成功時はstatusをfulfilledに変更、dataに取得したデータを設定
    result => {
      status = 'fulfilled';
      data = result;
    },
    // 失敗時はstatusをrejectedに変更、dataにエラーオブジェクトを設定
    e => {
      status = 'rejected';
      data = e;
    }
  );

  // 戻り値はPromiseの状態に応じて値を返すgetメソッドを持つオブジェクト
  return {
    get() {
      switch(status) {
        case 'fulfilled':
          return data;     // 成功時は実データを返す
        case 'rejected':
          throw data;      // 失敗時はエラーオブジェクトを投げる
        case 'pending':
          throw wrapper;   // それ以外はラッパーを投げる
        default:
          break;
      }
    }
  };
};

export default wrapPromise;
