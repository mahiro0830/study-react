import { useState } from 'react';

const FormCheckMulti = () => {
  // Stateを初期化
  const [form, setForm] = useState({
    animal: ['dog', 'hamster']
  });

  // チェックボックスの変更時に入力値をStateに反映
  const handleFormCheckMulti = e => {
    const fa = form.animal;
    // チェック時は配列に値を追加、非チェック時は削除
    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }
    // 最終的な結果をStateに反映
    setForm({
      ...form,
      [e.target.name]: fa
    });
  };

  // [送信]ボタンクリックで入力値をログに出力
  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <form>
      <fieldset>
        <legend>好きな動物：</legend>
        <label htmlFor='animal_dog'>イヌ</label>
        <input id='animal_dog' name='animal' type='checkbox' value='dog' checked={form.animal.includes('dog')} onChange={handleFormCheckMulti} />
        <br />
        <label htmlFor='animal_cat'>ネコ</label>
        <input id='animal_cat' name='animal' type='checkbox' value='cat' checked={form.animal.includes('cat')} onChange={handleFormCheckMulti} />
        <br />
        <label htmlFor='animal_hamster'>ハムスター</label>
        <input id='animal_hamster' name='animal' type='checkbox' value='hamster' checked={form.animal.includes('hamster')} onChange={handleFormCheckMulti} />
        <br />
        <label htmlFor='animal_rebbit'>ウサギ</label>
        <input id='animal_rebbit' name='animal' type='checkbox' value='rebbit' checked={form.animal.includes('rebbit')} onChange={handleFormCheckMulti} />
        <br />
        <button type='button' onClick={show}>送信</button>
      </fieldset>
    </form>
  );
};

export default FormCheckMulti;