import React from 'react';
import ReactDOM from 'react-dom/client';

import EventMouse from './03/EventMouse';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <EventMouse beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
    afterSrc="https://www.web-deli.com/image/home_chara.gif" alt="ロゴ画像" />
);
