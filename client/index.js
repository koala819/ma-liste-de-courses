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
    const shoppingListContent = shoppingList.map(item => {
        if (item.checked) {
            return `<input type="checkbox" id="${item.id}"><label for="${item.id}" class="checked">${item.name}</label>`;    
        }
        return `<input type="checkbox" id="${item.id}"><label for="${item.id}">${item.name}</label>`;
    });
    document.getElementById('shoppingList').innerHTML = shoppingListContent.join('');
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
