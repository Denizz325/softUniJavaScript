function isMagical(matrix) {
    let baseSum = 15


    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== baseSum) {
            return false;
        }
    }

    return true;
}

isMagical([4, 5, 6],
        [6, 5, 4],
        [5, 5, 5])
