import { useImmer } from 'use-immer';

const StateNestImmer2 = () => {
  // 入れ子配列をStateとして準備
  const [form, setForm] = useImmer({
    name: '山田太郎',
    address: {
      prefecture: '広島県',
      city: '広島市'
    }
  });

  // 要素を更新するハンドラー
  const handleFormNest = e => {
    // 要素名を「.」で分解、（要素名がxxxxx.xxxxxであることが前提）
    const ns = e.target.name.split('.');
    setForm(form => {
      // 階層に応じて、代入先を振替
      if (ns.length === 1) {
        form[ns[0]] = e.target.value;
      } else {
        form[ns[0]][ns[1]] = e.target.value;
      }
    });
  };

  // [送信]ボタンをクリックでStateの内容をログに出力
  const show = () => {
    console.log(`${form.name}（${form.address.prefecture}・${form.address.city}）`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" name="name" type="text" onChange={handleFormNest} value={form.name} />
      </div>
      <div>
        <label htmlFor="prefecture">住所（都道府県）：</label>
        <input id="prefecture" name="address.prefecture" type="text" onChange={handleFormNest} value={form.address.prefecture} />
      </div>
      <div>
        <label htmlFor="name">住所（市区町村）：</label>
        <input id="city" name="address.city" type="text" onChange={handleFormNest} value={form.address.city} />
      </div>
      <div>
        <button type="button" onClick={show}>送信</button>
      </div>
    </form>
  );
};

export default StateNestImmer2;
