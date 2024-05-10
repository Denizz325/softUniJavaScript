function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const rows = Array.from(document.querySelector('tbody').children);
    const result = document.getElementById('result');

    let removed = false;

   for (let row of rows) {
    if (row.children[1].textContent == input.value) {
        row.remove();
        removed = true;
    }
    }

    if (removed == true) {
        result.textContent = 'Deleted.'
    } else {
        result.textContent = "Not found."
    }

    input.value = ''

}