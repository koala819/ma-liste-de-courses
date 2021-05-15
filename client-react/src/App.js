import React from 'react';
import './index.css';
import ProductLine from './ProductLine';
import Title from './Title';
import AddInput from "./AddInput";
import AddButton from "./AddButton";
import Form from "./Form";
import ShoppingList from "./ShoppingList";

function App() {
  return (
      <div>
          <header>
              <Title />
          </header>
        <section>
            <Form />
            <form className="flex-form">
                <AddInput />
                <AddButton />
            </form>
        </section>
        <section>
            <ShoppingList />
        </section>
        <div className="App">
          <ProductLine text='banane' />
        </div>
      </div>
  );
}

export default App;
