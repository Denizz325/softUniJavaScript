import { showSection } from "./dom.js";
import { getBackToMonths } from "./getBackToMonths.js";

export function showMonths(event, year) {
    const monthNumber = monthAbbreviationToNumber(event.target.textContent.trim());

    const monthsId = `month-${year}-${monthNumber}`;

    showSection(monthsId);

}


function monthAbbreviationToNumber(abbreviation) {
    const months = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12
    };

    return months[abbreviation] || null; 
}