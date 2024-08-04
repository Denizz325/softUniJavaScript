window.addEventListener('load', solve);

function solve() {


    addButton = document.getElementById('add');
    addButton.addEventListener('click', onAdd);
    totalPrice = 0

    function onAdd(e) {

        e.preventDefault();

        table = document.getElementById('information')

        modelInput = document.getElementById('model').value;
        yearInput = document.getElementById('year').value;
        descriptionInput = document.getElementById('description').value;
        priceInput = document.getElementById('price').value;

        totalPrice +=  Number(priceInput)

        trElement1 = document.createElement('tr');
        trElement1.classList.add('info')

        tdName = document.createElement('td');
        tdName.textContent = modelInput;
        trElement1.appendChild(tdName)
        

        tdPrice = document.createElement('td');
        tdPrice.textContent = Number(priceInput).toFixed(2);
        trElement1.appendChild(tdPrice);


        tdElWithBtn = document.createElement('td');

        moreBtn = document.createElement('button')
        moreBtn.classList.add('moreBtn');
        moreBtn.textContent = 'More Info'
        moreBtn.addEventListener('click', moreInfo)

        buyBtn = document.createElement('button')
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it'
        buyBtn.addEventListener('click', buyIt)

        tdElWithBtn.appendChild(moreBtn);
        tdElWithBtn.appendChild(buyBtn);
        trElement1.appendChild(tdElWithBtn);


        table.appendChild(trElement1)

        document.getElementById('model').value = '';
        document.getElementById('year').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';


        trElement2 = document.createElement('tr');
        trElement2.classList.add('hide');

        tdDescription = document.createElement('td');
        tdDescription.colSpan = 3;
        tdDescription.textContent = `Description: ${descriptionInput}`;
        trElement2.appendChild(tdDescription)


        tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearInput}`;
        trElement2.appendChild(tdYear);

        trElement2.appendChild(tdDescription);
        trElement2.style.display = 'none';

        table.appendChild(trElement2);


        

    }

    function moreInfo(e) {
        e.preventDefault();

        let moreBtn = e.target;
        let trElement2 = moreBtn.parentElement.parentElement.nextElementSibling;

        if (moreBtn.textContent === 'More Info') {
            moreBtn.textContent = 'Less Info';
            trElement2.style.display = 'contents';
        } else {
            moreBtn.textContent = 'More Info';
            trElement2.style.display = 'none';
        }
    }

    function buyIt(e) {
        e.preventDefault();

        let buyBtn = e.target;
        let row = buyBtn.parentElement.parentElement; // Parent <tr> element
        let price = parseFloat(row.querySelector('td:nth-child(2)').textContent); // Get price from second <td> element

        // Remove the row from the table
        row.remove();

        // Update total profit
        let totalElement = document.querySelector('.total-price');
        let currentTotal = parseFloat(totalElement.textContent);
        let newTotal = currentTotal + price;
        totalElement.textContent = newTotal.toFixed(2); // Update total price with 2 decimal places
    }


    
}
