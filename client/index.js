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
            alert('tu as cliqué sur ' + product.name);
        })
    });
}

const buttonAdd = document.getElementById('addButton');
buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const addInputElement = document.getElementById('addInput')
    const product = new Product(addInputElement.value);
    shoppingList.push(product);
    transformProductListToHtml(shoppingList);
    addInputElement.value = '';
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
