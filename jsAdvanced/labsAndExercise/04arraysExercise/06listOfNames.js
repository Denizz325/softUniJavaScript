function solve(arr) {
    sortedArr = arr.sort();
    let orderNumber = 1;

    for (el of arr) {
        console.log(`${orderNumber}.${el}`);
        orderNumber++;
    }
}