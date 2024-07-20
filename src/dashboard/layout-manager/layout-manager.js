import React from 'react';
import ReactDOM from 'react-dom/client';
import { LayoutManagerObject } from './LayoutManager';

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <React.StrictMode>
    <LayoutManagerObject />
  </React.StrictMode>
);