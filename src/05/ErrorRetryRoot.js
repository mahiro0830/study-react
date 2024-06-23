import { ErrorBoundary } from 'react-error-boundary';
import ErrorRetryThrow from './ErrorRetryThrow';
import ErrorFallback from './ErrorFallback';

const ErrorRetryRoot = () => {
  return (
    <>
      <h3>Error Boundaryの基本</h3>
      <ErrorBoundary FallbackComponent={ ErrorFallback }>
        <ErrorRetryThrow />
      </ErrorBoundary>
    </>
  );
};

export default ErrorRetryRoot;
