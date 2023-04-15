import React from 'react';
import ReactDOM from 'react-dom/client';
import { StreamQueue } from './StreamQueue';

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <React.StrictMode>
    <StreamQueue />
  </React.StrictMode>
);