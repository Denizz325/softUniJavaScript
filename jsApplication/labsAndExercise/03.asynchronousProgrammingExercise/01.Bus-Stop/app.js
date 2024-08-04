async function getInfo() {
    stop = document.getElementById('stopId').value;
    
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stop}`;
    const stopText = document.getElementById('stopName');
    const timetableEl = document.getElementById('buses');

    try {
        timetableEl.replaceChildren();


        const res = await fetch(url);

        if (res.status != 200) {
            throw new Error('Stop ID not found')
        }

        const data = await res.json();
        
         stopText.textContent = data.name;

         Object.entries(data.buses).forEach(b => {
            const liEl = document.createElement('li');
            liEl.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

            timetableEl.appendChild(liEl);
         });

    } catch(error) {
        stopText.textContent = 'Error';

    }

}