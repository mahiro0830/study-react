import React, { useState } from 'react';

export const StateBasic = ({ init }) => {
  // Props（init）でState（count）を初期化
  const [ count, setCount ] = useState( init );

  // インクリメント、デクリメントの関数を定義
  const increment = () => setCount( count + 1 );
  const decrement = () => setCount( count - 1 );

  return (
    <React.Fragment>
      <p>カウント：{ count }</p>
      <button onClick={ increment }>インクリメント</button>
      <button onClick={ decrement }>デクリメント</button>
    </React.Fragment>
  );
}
