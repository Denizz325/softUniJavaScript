function solve(arr) {
    let biggestElement = -Infinity;
    for (let row of arr) {
        for (let col of row) {
            if (col > biggestElement) {
                biggestElement = col;
            }
        }
    }

    console.log(biggestElement);
}

solve([[20, 50, 10],
    [8, 33, 145]])