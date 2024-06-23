import { useState } from 'react';
import { createPortal } from 'react-dom';

const PortalBasic = () => {
  // ダイアログを表示するかどうかの状態を管理
  const [show, setShow] = useState(false);
  // ボタンクリック時のハンドラー
  const handleClick = () => setShow(s => !s);

  return (
    <form>
      <button type="button" onClick={ handleClick } disabled={ show }>ダイアログを表示</button>
      { show && createPortal(
        <div className="dialog">
          <p>生成されたダイアログ</p>
          <button type="button" onClick={ handleClick }>閉じる</button>
        </div>,
        document.getElementById('dialog')
      ) }
    </form>
  );
};

export default PortalBasic;
