import { useState } from 'react';
import './css/StateTodo.css';

// Todo項目idの最大値（登録都度にインクリメント）
let maxId = 0;

const StateTodoSort = () => {
  // 次のソート（trueであれば降順）
  const [desc, setDesc] = useState(true);

  // 入力値（title）、ToDoリスト（todo）をStateで管理
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState([]);

  // テキストボックスへの入力をStateに反映
  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id: ++maxId,
        title: title,
        created: new Date(),
        isDone: false
      }
    ]);
  };

  // 完了
  const handleDone = e => {
    setTodo(todo.map(item => {
      if (item.id === Number(e.target.dataset.id)) {
        return {
          ...item,
          isDone: true
        };
      } else {
        return item;
      }
    }));
  };

  // 削除
  const handleRemove = e => {
    setTodo(todo.filter(item =>
      item.id !== Number(e.target.dataset.id)
    ));
  };

  // ソート
  const handleSort = () => {
    // 既存のtodoを複製
    const sorted = [...todo];
    // ソートを実行
    sorted.sort((m, n) => {
      if (desc) {
        return m.created.getTime() - n.created.getTime();
      } else {
        return n.created.getTime() - m.created.getTime();
      }
    });
    // desc地を反転
    setDesc(d => !d);
    // ソート済みのリストを再セット
    setTodo(sorted);
  };

  return (
    <div>
      <label>
        やること：
        <input type="text" name="title" value={title} onChange={handleChangeTitle} />
      </label>
      <button type="button" onClick={handleSort}>ソート（{desc ? "↑" : "↓"}）</button>
      <button type="button" onClick={handleClick}>追加</button>
      <hr />
      {/** Todoをリストに整理 */}
      <ul>
        {todo.map(item => (
          <li key={item.id} className={item.isDone ? 'done' : ''}>
            {item.title}
            <button type="button" data-id={item.id} onClick={handleDone}>済</button>
            <button type="button" data-id={item.id} onClick={handleRemove}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StateTodoSort;