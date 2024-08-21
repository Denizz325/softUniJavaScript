import { showSection } from "./dom.js";
import { showMonths } from "./months.js"
import {getBackToYears} from "./getBackToYears.js";


export function showYears(year) {
    const yearId = `year-${year}`;
    showSection(yearId);

    document.querySelector(`#year-${year} table caption`).addEventListener('click', getBackToYears);


    const ref = document.querySelector(`#${yearId} table tbody`);
    ref.addEventListener('click', (event) => showMonths(event, year));



}

