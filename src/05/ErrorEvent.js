const ErrorEvent = () => {
  // エラーを発生させるやばいボタン
  const handleClick = () => {
    throw new Error('Error is occured in MyApp.');
  };
  return (
    <button type="button" onClick={ handleClick }>エラーを発生させる</button>
  );
}

export default ErrorEvent;
