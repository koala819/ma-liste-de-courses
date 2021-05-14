function Form() {
  return (
      <form className="flex-form">
          <input id="addInput" type="text" placeholder="Produit à ajouter" />
              <input id="addButton" type="submit" value="Ajouter" />
      </form>
  );
}

export default Form;
