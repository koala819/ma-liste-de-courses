import React, {useState, Component} from 'react';
import Title from './Title';
import Form from "./Form";
import ShoppingList from "./ShoppingList";
import '../index.css';

function App() {
    const [products, setProducts] = useState([]);

    function onProductCheck(idOfProductToCheck) {
        setProducts((products) => {
            const productToCheckIndex = products.findIndex(
                (productInList) => productInList.id === idOfProductToCheck
            );
            const productToCheck = products[productToCheckIndex];
            productToCheck.bought = true;

            const newProducts = Array.from(products);
            newProducts[productToCheckIndex] = productToCheck;

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
