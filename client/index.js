class ShoppingList {
    constructor(products) {
        this.products = products;
    }

    toHtml() {
        document.getElementById('shoppingList').innerHTML = '';
        this.products.forEach(product => {
            const input = createInputFromProduct(product);
            document.getElementById('shoppingList').appendChild(input);
            input.addEventListener('click', (event) => {
                inputFromItemCheckedNew(product);
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
}

class Product {
    constructor(name, id, bought = false) {
        this.name = name;
        this.id = id ? id : name;
        this.bought = bought;
    }
}

const shoppingList = new ShoppingList([]);
shoppingList.toHtml();

//SHOPPING LIST
const buttonAdd = document.getElementById('addButton');
buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const addInputElement = document.getElementById('addInput')
    const product = new Product(addInputElement.value);
    if (addInputElement.value === '') {
        alert('merci de saisir un produit à rajouter à la liste');
    } else if (shoppingList.contains(product)) {
        alert('---------------\nCe produit a déjà été saisi !\n---------------');
    } else {
        shoppingList.products.push(product);
        shoppingList.toHtml();
        addInputElement.value = '';
    }
});

//PRODUCT
function createInputFromProduct(product) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = product.id;
    if (product.bought) {
        input.checked = true;
    }
    const label = document.createElement('label');
    label.for = product.id;
    label.innerText = product.name;
    const div = document.createElement('div');
    div.appendChild(input);
    div.appendChild(label);
    return div;
}

//PRODUCT
function inputFromItemCheckedNew(product) {
    const checkbox = document.getElementById(product.id);
    if (product.bought === false) {
        checkbox.checked = true;
        product.bought = true;
    } else {
        checkbox.checked = false;
        product.bought = false;
    }
}
