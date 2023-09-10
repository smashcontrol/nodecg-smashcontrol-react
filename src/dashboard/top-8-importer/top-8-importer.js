import React from 'react';
import ReactDOM from 'react-dom/client';
import { Top8Import } from './Top8Importer';

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <React.StrictMode>
    <Top8Import />
  </React.StrictMode>
);