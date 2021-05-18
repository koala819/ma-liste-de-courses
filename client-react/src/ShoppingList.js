import ProductLine from './ProductLine';

function ShoppingList() {
  return (
      <div className="maListe" id="shoppingList">
        <ProductLine text='banane' />
        <ProductLine text='fraise' />
        <ProductLine text='moutarde' />
      </div>
  );
}

export default ShoppingList;
