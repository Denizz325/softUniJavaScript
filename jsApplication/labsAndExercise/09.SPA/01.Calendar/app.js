import { showSection } from "./dom.js";
import { showMonths } from "./months.js";


const table = document.querySelector('.yearsCalendar').addEventListener('click', onNav);


showSection('years');


function onNav(event) {


    if (event.target.tagName == 'TD') {
        
        const searchedYear = event.target.textContent.trim();
        showMonths(searchedYear);

    }


}

