import { useRef, useEffect } from 'react';
import './css/EventPassive.css';

const EventPassive = () => {
  const handleWheel = e => e.preventDefault();
  // <div>要素への参照を取得
  const divRef = useRef(null);
  useEffect(() => {
    // コンポネント起動時にリスナーを設定
    const div = divRef.current;
    div.addEventListener('wheel', handleWheel, { passive: false });
    return (() => {
      div.removeEventListener('wheel', handleWheel);
    });
  });

  return (
    <div ref={divRef} className="box">
      例えばWheelイベントをハンドラーで例えばWheelイベントをハンドラーで例えばWheelイベントをハンドラーで例えばWheelイベントをハンドラーで例えばWheelイベントをハンドラーで例えばWheelイベントをハンドラーで
    </div>
  );
}

export default EventPassive;
