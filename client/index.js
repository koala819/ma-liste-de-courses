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

shoppingList.map((item) => {
    console.log(item);
    document.getElementById('shoppingList').innerHTML += `<input type="checkbox" id="${item.id}"><label for="${item.id}">${item.name}</label>`;
});

const buttonAdd = document.getElementById('addButton');

buttonAdd.addEventListener('click', () => {
    alert('Pas encore implémenté');
})
