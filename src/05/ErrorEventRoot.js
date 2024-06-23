import { ErrorBoundary } from "react-error-boundary";
import ErrorEvent from "./ErrorEvent";

const ErrorEventRoot = () => {
  // エラー時に実行される処理
  const handleFallback = ({ error, resetErrorBoundary }) => {
    const handleReset = () => resetErrorBoundary();

    return (
      <div>
        <p>以下のエラーが発生しました。</p>
        <p>{ error.message }</p>
        <button type="button" onClick={ handleReset }>Retry</button>
      </div>
    );
  };

  // リセット時に実行される処理
  const handleReset = () => console.log('Retry!');

  return (
    <div>
      <h3>Error Boundaryの基本</h3>
      <ErrorBoundary onReset={ handleReset } fallbackRender={ handleFallback }>
        <ErrorEvent />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorEventRoot;
