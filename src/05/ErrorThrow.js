const ErrorThrow = () => {
  // 無条件にエラーを発生させる。
  throw new Error('エラーが発生しました');
  return (<p>正しく表示されました。</p>);
};

export default ErrorThrow;
