import { ErrorBoundary } from 'react-error-boundary';
import ErrorThrow from './ErrorThrow';

const ErrorRoot = () => {
  return (
    <>
      <h3>Error Boundaryの基本</h3>
      <ErrorBoundary fallback={<p>エラーが発生しました。</p>}>
        <ErrorThrow />
      </ErrorBoundary>
    </>
  );
};

export default ErrorRoot;
