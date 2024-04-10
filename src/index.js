import React from 'react';
import ReactDOM from 'react-dom/client';
import TitledPanel from './03/TitledPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <TitledPanel
  title={
    <p>メンバー募集中！</p>
  }
  body={
    <p>ようこそ、WINGSプロジェクトへ！！</p>
  }
  >
  </TitledPanel>
);
