import React from 'react';
import Card from './components/Card';
import { modalClass } from './styles/card.css';
const Main = () => {
  return (
    <main>
      <section className={modalClass}>
        <Card />
      </section>
    </main>
  );
};

export default Main;
