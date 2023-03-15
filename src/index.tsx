import React from 'react';
import ReactDom from 'react-dom/client';
import Main from './Main';
const rootElement = document.getElementById('root') as HTMLElement;
ReactDom.createRoot(rootElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
