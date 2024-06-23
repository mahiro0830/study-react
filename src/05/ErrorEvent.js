import { useErrorBoundary } from "react-error-boundary";

const ErrorEvent = () => {
  // エラーを発生させるやばいボタン
  const { showBoundary } = useErrorBoundary();
  const handleClick = () => {
    try {
      throw new Error('Error is occured in MyApp.');
    } catch (e) {
      showBoundary(e);
    }
  };
  return (
    <button type="button" onClick={ handleClick }>エラーを発生させる</button>
  );
}

export default ErrorEvent;
