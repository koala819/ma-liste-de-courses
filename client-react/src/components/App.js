import React, {useState, Component} from 'react';
import Title from './Title';
import Form from "./Form";
import ShoppingList from "./ShoppingList";
import Product from "../models/Product";
import '../index.css';

const defaultProducts= [
    new Product('kiwi'),
    new Product('fraise'),
    new Product('moutarde'),
]

function App() {
    const [products, setProducts] = useState(defaultProducts);
  return (
      <div>
          <header>
              <Title />
          </header>
          <section>
              <Form />
          </section>
          <section>
              <ShoppingList products={defaultProducts} />
          </section>
      </div>
  );
}

export default App;
