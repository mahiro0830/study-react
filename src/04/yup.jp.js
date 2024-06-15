import * as yup from 'yup';

// エラーメッセージ情報を宣言
const jpLocale = {
  mixed: {
    required: param => `${param.label}は必須です。`,
    oneOf: param => `${param.label}は${param.values}のいずれかでなければなりません。`,
  },
  string: {
    length: param => `${param.label}は${param.length}文字ちょうどでなければなりません。`,
    min: param => `${param.label}は${param.min}文字以上でなければなりません。`,
    max: param => `${param.label}は${param.max}文字以下でなければなりません。`,
    matches: param => `${param.label}は「${param.regex}」形式に一致しなければなりません。`,
    email: param => `${param.label}はメールアドレスの形式でなければなりません。`,
    url: param => `${param.label}はURLの形式でなければなりません。`,
  },
  number: {
    min: param => `${param.label}は${param.min}以上でなければなりません。`,
    max: param => `${param.label}は${param.max}以下でなければなりません。`,
    lessThan: param => `${param.label}は${param.less}未満でなければなりません。`,
    moreThan: param => `${param.label}は${param.more}より大きくなければなりません。`,
    positive: param => `${param.label}は正数でなければなりません。`,
    negative: param => `${param.label}は負数でなければなりません。`,
    integer: param => `${param.label}は整数でなければなりません。`,
  },
  date: {
    min: param => `${param.label}は${param.min}より未来日でなければなりません。`,
    max: param => `${param.label}は${param.max}より過去日でなければなりません。`,
  },
};

// メッセージ内容を設定
yup.setLocale(jpLocale);

export default yup;
