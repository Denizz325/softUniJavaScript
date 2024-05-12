// function addItem() {
//     const input = document.getElementById('newItemText');
//     const newLiElement = document.createElement('li');
//     newLiElement.textContent = input.value;
//     document.getElementById('items').appendChild(newLiElement);
//     input.value = ''


//     const newHrefEl = document.createElement('a');
//     const linkText = document.createTextNode('[Delete]')
//     newHrefEl.appendChild(linkText)
//     newHrefEl.href = '#'


//     newLiElement.appendChild(newHrefEl);

//     newHrefEl.addEventListener('click', deleteItem);

//     function deleteItem() {
//         newLiElement.remove();
//     }
// }











// МОЕ РЕШЕНИЕ НО JUDJE НЕ ГО ПРИЕМА 


function addItem() {
    const input = document.getElementById('newItemText');
    const newLiElement = document.createElement('li');
    newLiElement.textContent = input.value;
    document.getElementById('items').appendChild(newLiElement);
    input.value = ''


    const newHrefEl = document.createElement('a');
    newHrefEl.innerHTML = '<a href="#">[Deleted]</a>';


    newLiElement.appendChild(newHrefEl);

    newHrefEl.addEventListener('click', deleteItem);

    function deleteItem() {
        newLiElement.remove();
    }
}