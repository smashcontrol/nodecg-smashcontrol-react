import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThumbnailGen } from './ThumbnailGen';

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <React.StrictMode>
    <ThumbnailGen />
  </React.StrictMode>
);