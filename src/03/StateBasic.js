import { useState } from 'react';

export const StateBasic = ({ init }) => {
  // Props（init）でState（count）を初期化
  const [count, setCount] = useState(init);
  //「カウント」ボタンクリック時にカウントアップ
  const handleClick = () => setCount( count + 1 );
  return (
    <>
      <button onClick={ handleClick }>カウント</button>
      <p>{ count }回、クリックされました。</p>
    </>
  );
}
