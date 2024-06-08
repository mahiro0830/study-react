import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 検証ルールを準備
const schema = yup.object({
  name: yup
    .string()
    .label('名前')
    .required('名前は必須です。')
    .max(20, '名前は20文字以内で入力してください。'),
  gender: yup
    .string()
    .label('性別')
    .required('性別は必須です。'),
  email: yup
    .string()
    .label('メールアドレス')
    .email('メールアドレスの形式で入力してください。')
    .required('メールアドレスは必須です。'),
  memo: yup
    .string()
    .label('備考')
    .min(10, '備考は10文字以上で入力してください。')
});

const FormYup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '山田太郎',
      email: 'amin@example.com',
      gender: 'male',
      memo: ''
    },
    // yupによる検証ルールを設定
    resolver: yupResolver(schema),
  });

  // サブミット時の処理
  const onsubmit = data => console.log(data);
  const onerror = err => console.log(err);

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      {/** 検証ツールなどをフォームに紐付け */}
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" type="text"
          {...register('name')} />
      </div>
      <div>{errors.name?.message}</div>
      <div>
        <label htmlFor="gender">性別：</label><br />
        <label>
          <input type="radio" value="male"
            {...register('gender')} />男性
        </label>
        <label>
          <input type="radio" value="female"
            {...register('gender')} />女性
        </label>
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <input id="email" type="email"
          {...register('email')} />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考：</label>
        <textarea id="memo"
          {...register('memo')} />
        <div>{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
};

export default FormYup;
