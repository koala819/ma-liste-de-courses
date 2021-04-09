class Item {
    constructor(name, id, checked = false) {
        this.name = name;
        this.id = id ? id : name;
        this.checked = checked;
    }
}

const butter = new Item('beurre salé', 'beurre');
const tomatoes = new Item('tomates');
const garlic = new Item('ail');
const shoppingList = [butter, tomatoes, garlic];

const shoppingListContent = shoppingList.map(item => {
    return `<input type="checkbox" id="${item.id}"><label for="${item.id}">${item.name}</label>`;
});

document.getElementById('shoppingList').innerHTML = shoppingListContent.join('');
const buttonAdd = document.getElementById('addButton');

buttonAdd.addEventListener('click', () => {
    alert('Pas encore implémenté');
})
