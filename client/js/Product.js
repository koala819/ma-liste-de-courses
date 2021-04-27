class Product {
    constructor(name, id, bought = false) {
        this.name = name;
        this.id = id ? id : name;
        this.bought = bought;
    }

    createInputFrom() {
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = this.id;
        if (this.bought) {
            input.checked = true;
        }
        const label = document.createElement('label');
        label.for = this.id;
        label.innerText = this.name;
        const div = document.createElement('div');
        div.appendChild(input);
        div.appendChild(label);
        return div;
    }

    checkedIfNewFromItem() {
        const checkbox = document.getElementById(this.id);
        if (this.bought === false) {
            checkbox.checked = true;
            this.bought = true;
        } else {
            checkbox.checked = false;
            this.bought = false;
        }
    }
}

export default Product;
