function solve() {
    const [name, hall, price] = document.querySelectorAll('#container input');
    const movieSection = document.querySelector('#movies ul');
    const archiveSection =  document.querySelector('#archive ul');
    const clearBtn = archiveSection.parentElement.querySelector('button');
    clearBtn.addEventListener('click', () => {
        archiveSection.innerHTML = '';
    });
    const btn = document.querySelector('#container button').addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault();
        if (name.value !==  "" && hall.value !== "" && price.value != "" && !isNaN(Number(price.value))) {
            const movie = document.createElement('li');
            movie.innerHTML = `<span>${name.value}</span>
                            <strong>${hall.value}</strong>
                            <div>
                            <strong>${Number(price.value).toFixed(2)}</strong>
                            <input placeholder='Ticket Sold'>
                            <button onclick='addToArchive'>Archive</button>
                            </div>`;
            movieSection.appendChild(movie);
            const button =  movie.querySelector('div button')
            button.addEventListener('click', addToArchive)
            
        }
    }

    function addToArchive(e) {
        const inputValue = e.target.parentElement.querySelector('input');
        const ticketPrice = e.target.parentElement.querySelector('strong');
        const movieName = e.target.parentElement.parentElement.querySelector('span')
        if (inputValue.value != "" && !isNaN(Number(inputValue.value))) {
            const income = Number(inputValue.value) * Number(ticketPrice.textContent);

            const liEl = document.createElement('li');
            liEl.innerHTML = `<span>${movieName.textContent}</span>
                            <strong>Total amount: ${income}</strong>
                            <button>Delete</button>`
            const button = liEl.querySelector('button')
            button.addEventListener('click', deleteEntry)
            archiveSection.appendChild(liEl)

        }
        e.target.parentElement.parentElement.remove();
        
    }

    function deleteEntry(e) {
        e.target.parentElement.remove();


    }

    

}