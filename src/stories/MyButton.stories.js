import MyButton from '../06/2-2/MyButtons';

export default {
  title: 'MyApp/MyButton',
  component: MyButton,
};

// Index、Whiteストーリーを追加
export const Index = {
  args: {
    primary: true,
    size: 'medium',
    label: 'ボタン',
    onclick: () => console.log('Hello, Storybook!!')
  }
};

export const White = {
  args: {
    size: 'small',
    label: 'ボタン',
    backgroundColor: 'white',
  }
};

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: 'lightyellow',
  }
};
