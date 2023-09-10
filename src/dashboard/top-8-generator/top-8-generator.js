import React from 'react';
import ReactDOM from 'react-dom/client';
import { Top8Gen } from './Top8Generator';

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <React.StrictMode>
    <Top8Gen />
  </React.StrictMode>
);