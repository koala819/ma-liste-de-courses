import React from 'react';
import Title from './Title';
import Form from "./Form";
import ShoppingList from "./ShoppingList";
import './index.css';

function App() {
  return (
      <div>
          <header>
              <Title />
          </header>
          <section>
              <Form />
          </section>
          <section>
              <ShoppingList />
          </section>
      </div>
  );
}

export default App;
