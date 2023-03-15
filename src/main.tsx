import React from 'react';
import ReactDom from 'react-dom/client';
import Card from './components/Card';
import { modalClass } from './styles/card.css';

const rootElement = document.getElementById('root') as HTMLElement;
ReactDom.createRoot(rootElement).render(
  <React.StrictMode>
    <main>
      <section className={modalClass}>
        <Card />
      </section>
    </main>
  </React.StrictMode>,
);
