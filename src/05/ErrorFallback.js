const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const handleClick = () => resetErrorBoundary();

  return (
    <div>
      <p>以下のエラーが発生しました。</p>
      <p>{ error.message }</p>
      <button type="button" onClick={ handleClick }>Retry</button>
    </div>
  );
};

export default ErrorFallback;
