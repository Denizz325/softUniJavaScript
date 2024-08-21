import { showSection } from "./dom.js";
import { showDays } from "./days.js"
import {getBackToYears} from "./getBackToYears.js";


export function showMonths(year) {
    const yearId = `year-${year}`;
    showSection(yearId);


    
    document.querySelector(`#year-${year} table caption`).addEventListener('click', getBackToYears);


    document.querySelector(`#${yearId} table tbody`).addEventListener('click', (event) => showDays(event, year));



}

