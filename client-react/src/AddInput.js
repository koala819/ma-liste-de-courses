import { useState } from 'react';

function AddInput() {
  const [inputValue, setInputValue] = useState();

  return (
    <input
      id="addInput"
      type="text"
      placeholder="Produit à ajouter"
      value={inputValue}
      onInput={(event) => setInputValue(event.target.value)}
    />
  );
}

export default AddInput;
