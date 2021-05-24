import ProductLine from './ProductLine';

function ShoppingList({products}) {

    return (
        <div className="maListe" id="shoppingList">
            { products.map( (product) => <ProductLine text={product.name} /> )}
        </div>
    );
}

export default ShoppingList;
