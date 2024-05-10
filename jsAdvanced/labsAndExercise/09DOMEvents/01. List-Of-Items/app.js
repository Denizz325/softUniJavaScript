function addItem() {
    const input = document.getElementById('newItemText');

    const newLiElement = document.createElement('li');

    newLiElement.textContent = input.value;
    
    document.getElementById('items').appendChild(newLiElement);

    input.value = ''

}