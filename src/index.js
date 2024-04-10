import React from 'react';
import ReactDOM from 'react-dom/client';
import TitledPanel from './03/TitledPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <TitledPanel>
    <p key={ 'title' }>メンバー募集中！</p>
    <p key={ 'body' }>ようこそ、WINGSプロジェクトへ！！</p>
  </TitledPanel>
);
