import { useRef } from 'react';

const FormFile = () => {
  // ファイル入力ボックスへの参照
  const file = useRef(null);

  // [送信]ボタンをクリックでファイル情報をログに出力
  const show = () => {
    const fs = file.current.files;
    // 取得したファイル群を順に走査
    for (const f of fs) {
      console.log(`ファイル名：${f.name}`);
      console.log(`種類：${f.type}`);
      console.log(`サイズ：${f.size}バイト`);
    }
  };

  return (
    <form>
      <input ref={file} type="file" name="file" multiple></input>
      <button type="button" onClick={show}>送信</button>
    </form>
  );
};

export default FormFile;
