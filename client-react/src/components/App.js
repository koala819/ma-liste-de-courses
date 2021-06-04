import React, {useState, Component} from 'react';
import Title from './Title';
import Form from "./Form";
import ShoppingList from "./ShoppingList";
import Product from "../models/Product";
import '../index.css';

function App() {
    const [products, setProducts] = useState([]);
  return (
      <div>
          <header>
              <Title />
          </header>
          <section>
              <Form setProducts={setProducts} />
          </section>
          <section>
              <ShoppingList products={products} />
          </section>
      </div>
  );
}

export default App;
