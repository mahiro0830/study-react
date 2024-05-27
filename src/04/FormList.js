import { useState } from 'react';

const FormList = () => {
  // Stateを初期化
  const [form, setForm] = useState({
    animal: ['dog', 'hamster']
  });

  // 選択ボックスの変更時に入力値をStateに反映
  const handleForm = e => {
    // 選択値を格納するための配列
    const data = [];
    // <option>要素を順に走査し、選択状態にある値を配列に追加
    const opts = e.target.options;
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }
    // 最終的な結果をStateに反映
    setForm({
      ...form,
      [e.target.name]: data
    });
  };

  // [送信]ボタンクリックで入力値をログに出力
  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <form>
      <label htmlFor='animal'>好きな動物：</label>
      <select id='animal' name='animal' value={form.animal} onChange={handleForm} size='4' multiple={true}>
        <option value="dog">イヌ</option>
        <option value="cat">ネコ</option>
        <option value="hamster">ハムスター</option>
        <option value="rabbit">ウサギ</option>
      </select>
      <button type='button' onClick={show}>送信</button>
    </form>
  );
}

export default FormList;
