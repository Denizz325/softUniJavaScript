function solve(arr, startPie, stopPie) {
    const startPieIndex = arr.indexOf(startPie);
    const stopPieIndex = arr.indexOf(stopPie);

    return arr.slice(startPieIndex, stopPieIndex + 1)
}