import React, {useState} from "react";
import Product from "../models/Product";

function Form({setProducts}) {
  const [inputValue, setInputValue] = useState('');

  function checkInputValue(event) {
      event.preventDefault();
      if (inputValue === '') {
          alert('Le champ est vide');
      } else {
          setProducts((products) => {
              const productID = products.length+1;
              const newProduct = new Product (inputValue, productID);
              const productsClone = [...products];
              productsClone.push(newProduct);
              return productsClone;
          });
      }
  }

  return (
      <form className="flex-form">
          <input
            type="text"
            placeholder="Produit à ajouter"
            value={inputValue}
            onInput={(event) => setInputValue(event.target.value)}
          />
          <input
            type="submit"
            value="Ajouter"
            onClick={checkInputValue}
          />
      </form>
  );
}

export default Form;
