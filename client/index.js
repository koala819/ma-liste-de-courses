class Item {
    constructor(name, checked = false) {
        this.name = name;
        this.checked = checked;
    }
}

const butter = new Item('beurre');
const tomatoes = new Item('tomates');
const garlic = new Item('ail');
const shoppingList = [butter, tomatoes, garlic];
let shoppingListContent = '';
shoppingList.forEach(item => {
    shoppingListContent += `<input type="checkbox"><label>${item.name}</label>`;
});
document.getElementById('shoppingList').innerHTML = shoppingListContent;

const buttonAdd = document.getElementById('addButton');

buttonAdd.addEventListener('click', () => {
    alert('Pas encore implémenté');
})
