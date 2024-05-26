import { useState } from 'react';

const FormTextarea = () => {
  // State値を初期化
  const [form, setForm] = useState({
    comment: 'テキスト',
  });

  const show = () => {
    console.log(`コメント：${form.comment}`);
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <textarea name="comment" value={form.comment} onChange={handleChange} rows={7} cols={30}>
      </textarea>
      <br />
      <button type='button' onClick={show}>送信</button>
    </form>
  );
}

export default FormTextarea;
