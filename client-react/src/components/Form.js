import React, {useState} from "react";

function Form() {
  const [inputValue, setInputValue] = useState('');

  function checkInputValue(event) {
      event.preventDefault();
      if (inputValue === '') {
          alert('Le champ est vide')
      } else {
          alert('yes you can')
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
