import React, {useState} from 'react';
import Title from './Title';
import Form from "./Form";
import ShoppingList from "./ShoppingList";
import '../index.css';
import Product from "../models/Product";
import useStickyState from "../hooks/useStickyState";

function App() {
    const [products, setProducts] = useStickyState([], "products");

    function onProductCheck(idOfProductToCheck) {
        setProducts((products) => {
            const productToCheckIndex = products.findIndex(
                (productInList) => productInList.id === idOfProductToCheck
            );
            const productToCheck = products[productToCheckIndex];
            const secondProductToCheck = new Product (productToCheck.name, productToCheck.id, !productToCheck.bought)
            const newProducts = Array.from(products);
            newProducts[productToCheckIndex] = secondProductToCheck;
            return newProducts;
        });
    }

    return (
          <div>
              <header>
                  <Title />
              </header>
              <section>
                  <Form setProducts={setProducts} />
              </section>
              <section>
                  <ShoppingList
                      products={products}
                      onProductCheck={onProductCheck}
                  />
              </section>
          </div>
      );
}

export default App;
