import Product from './Product.js'

class ShoppingList {
    constructor() {
        this.products = [];
    }

    toHtml() {
        document.getElementById('shoppingList').innerHTML = '';
        this.products.forEach(product => {
            const input = product.createInputFrom();
            document.getElementById('shoppingList').appendChild(input);
            input.addEventListener('click', (event) => {
                product.checkedIfNewFromItem();
            })
        });
    }

    contains(newProduct) {
        for (let i = 0; i < this.products.length; i++) {
            let product = this.products[i];
            if (product.name === newProduct.name) {
                return true;
            }
        };
        return false;
    }

    addListenerToButton(event) {
        event.preventDefault();
        const addInputElement = document.getElementById('addInput')
        const product = new Product(addInputElement.value);
        if (addInputElement.value === '') {
            alert('merci de saisir un produit à rajouter à la liste');
        } else if (this.contains(product)) {
            alert('---------------\nCe produit a déjà été saisi !\n---------------');
        } else {
            this.products.push(product);
            this.toHtml();
            addInputElement.value = '';
        }
    }
}

export default ShoppingList;
