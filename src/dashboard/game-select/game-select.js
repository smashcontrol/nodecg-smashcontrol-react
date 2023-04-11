import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameSelect } from './GameSelect';

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <React.StrictMode>
    <GameSelect />
  </React.StrictMode>
);