import { useForm } from 'react-hook-form';

const FormBasic = () => {
  // 既定値を準備
  const defaultValues = {
    name: '山田太郎',
    email: 'admin@example.con',
    gender: 'male',
    memo: ''
  };

  // フォームを初期化
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm(defaultValues);

  // submit時の処理
  const onsubmit = data => console.log(data);
  const onerror = err => console.log(err);

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      {/** 検証ツールなどをフォームに紐付け */}
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" type="text"
          {...register('name', {
            required: '名前は必須です。',
            maxLength: {
              value: 20,
              message: '名前は20文字以内で入力してください。',
            }
          })} />
      </div>
      <div>{errors.name?.message}</div>
      <div>
        <label htmlFor="gender">性別：</label><br />
        <label>
          <input type="radio" value="male"
            {...register('gender', {
              required: '性別は必須です。'
            })} />男性
        </label>
        <label>
          <input type="radio" value="female"
            {...register('gender', {
              required: '性別は必須です。'
            })} />女性
        </label>
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <input id="email" type="email"
          {...register('email', {
            required: 'メールアドレスは必須です。',
            pattern: {
              value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\/[a-z]+)*)/i,
              message: 'メールアドレスの形式が正しくありません。',
            }
          })} />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考：</label>
        <textarea id="memo"
          {...register('memo', {
            required: '備考は必須です。',
            minLength: {
              value: 10,
              message: '備考は10文字以上で入力してください。'
            },
            validate: {
              ng: (value, formValues) => {
                const ngs = ['暴力', '殺人', 'テロ'];
                for (const ng of ngs) {
                  if (value.includes(ng)) {
                    return `${ng}は使用できません。`;
                  }
                }
                return true;
              }
            }
          })} />
        <div>{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit" disabled={!isDirty || !isValid}>送信</button>
      </div>
    </form>
  );
};

export default FormBasic;
