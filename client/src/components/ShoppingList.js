import ProductLine from './ProductLine';

function ShoppingList({ products, onProductCheck }) {
    return (
        <div className="maListe" id="shoppingList">
            { products.map((product) => (
                  <ProductLine
                        key={product.id}
                        id={product.id}
                        text={product.name}
                        checked={product.bought}
                        onProductCheck={onProductCheck}
                  />
            ))}
        </div>
    );
}

export default ShoppingList;
