import ShoppingList from './ShoppingList.js';
import Product from './Product.js';

describe('shoppinglist', () => {
    describe('contains', () => {
        test('returns false if product is not already in shoppingList', () => {
            // given
            const shoppingList = new ShoppingList();
            const product = new Product();

            // when
            const variable = shoppingList.contains(product);

            // then
            expect(variable).toBe(false);
        });

        test('returns true when product is already in shoppingList', () => {
            // given
            const shoppingList = new ShoppingList();
            const product = new Product();
            shoppingList.products.push(product);

            // when
            const variable = shoppingList.contains(product);

            // then
            expect(variable).toBe(true);
        });

    });
});
