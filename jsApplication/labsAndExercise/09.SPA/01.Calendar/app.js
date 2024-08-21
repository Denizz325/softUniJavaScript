import { showSection } from "./dom.js";
import { showYears } from "./years.js";


const table = document.querySelector('.yearsCalendar').addEventListener('click', onNav);


showSection('years');


function onNav(event) {


    if (event.target.tagName == 'TD') {
        
        const searchedYear = event.target.textContent.trim();
        showYears(searchedYear);

    }


}

