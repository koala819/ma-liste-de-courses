class Product {
    constructor(name, id, bought = false) {
        this.name = name;
        this.id = id ? id : name;
        this.bought = bought;
    }
}

const shoppingList = [];
transformProductListToHtml(shoppingList);

function transformProductListToHtml(shoppingList) {
    document.getElementById('shoppingList').innerHTML = '';
    shoppingList.forEach(product => {
        const input = createInputFromProduct(product);
        document.getElementById('shoppingList').appendChild(input);
        input.addEventListener('click', (event) => {
            inputFromItemCheckedNew(product);
        })
    });
}

const buttonAdd = document.getElementById('addButton');
buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const addInputElement = document.getElementById('addInput')
    const product = new Product(addInputElement.value);
    if (addInputElement.value === '') {
        alert('merci de saisir un produit à rajouter à la liste');
    } else if (productAlreadyInList(product, shoppingList)) {
        alert('---------------\nCe produit a déjà été saisi !\n---------------');
    } else {
        shoppingList.push(product);
        transformProductListToHtml(shoppingList);
        addInputElement.value = '';
    }
});

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

function productAlreadyInList(newProduct, shoppingList) {
    for (let i = 0; i < shoppingList.length; i++) {
        let product = shoppingList[i];
        if (product.name === newProduct.name) {
            return true;
        }
    };
    return false;
}
