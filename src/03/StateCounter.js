export default function StateCounter({ count, onUpdate }) {
  // コメント
  const handleClick = () => onUpdate(count);
  return (
    <button onClick={handleClick}>
      <span>{count}</span>
    </button>
  );
}
