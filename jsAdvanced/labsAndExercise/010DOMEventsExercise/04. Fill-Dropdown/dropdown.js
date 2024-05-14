function addItem() {
    const inputText = document.getElementById("newItemText");
    const inputValue = document.getElementById("newItemValue");

    dropMenu = document.getElementById("menu");

    const opt = document.createElement('option')
    opt.textContent = inputText.value
    opt.value = inputValue.value
    dropMenu.appendChild(opt)

    inputText.value = '';
    inputValue.value = '';

    
}