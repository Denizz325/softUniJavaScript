function previousDay(year, month, day) {
    // Create a Date object with the given year, month, and day
    let currentDate = new Date(year, month - 1, day); // Note: month is zero-based in Date objects

    // Calculate the previous day
    currentDate.setDate(currentDate.getDate() - 1);

    // Extract year, month, and day components from the new date
    let prevYear = currentDate.getFullYear();
    let prevMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
    let prevDay = currentDate.getDate();

    // Format the date as "yyyy-mm-dd"
    let formattedDate = `${prevYear}-${prevMonth.toString()}-${prevDay.toString()}`;

    console.log(formattedDate);
}

// Example usage:


previousDay(2016, 9, 30)
