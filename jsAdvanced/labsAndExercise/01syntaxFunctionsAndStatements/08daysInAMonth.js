function getDaysInMonth(month, year) {
    let date = new Date(year, month, 1);

    date.setDate(date.getDate() - 1);

    console.log(date.getDate());
}

getDaysInMonth(2, 2021)