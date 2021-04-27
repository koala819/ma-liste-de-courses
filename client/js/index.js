import ShoppingList from './ShoppingList.js'

const shoppingList = new ShoppingList([]);

const buttonAdd = document.getElementById('addButton');
buttonAdd.addEventListener('click', (event => shoppingList.addListenerToButton(event)));
