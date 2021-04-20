class Item {
    constructor(name, id, checked = false) {
        this.name = name;
        this.id = id ? id : name;
        this.checked = checked;
    }
}

const shoppingList = [];
transformItemListToHtml(shoppingList);

function transformItemListToHtml(shoppingList) {
    document.getElementById('shoppingList').innerHTML = '';
    shoppingList.forEach(item => {
        const input = createInputFromItem(item);
        document.getElementById('shoppingList').appendChild(input);
        input.addEventListener('click', (event) => {
            alert('tu as cliqué sur ' + item.name);
        })
    });
}

const buttonAdd = document.getElementById('addButton');
buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const addInputElement = document.getElementById('addInput')
    const item = new Item(addInputElement.value);
    shoppingList.push(item);
    transformItemListToHtml(shoppingList);
    addInputElement.value = '';
});

function createInputFromItem(item) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = item.id;
    if (item.checked) {
        input.checked = true;
    }
    const label = document.createElement('label');
    label.for = item.id;
    label.innerText = item.name;
    const div = document.createElement('div');
    div.appendChild(input);
    div.appendChild(label);
    return div;
}
