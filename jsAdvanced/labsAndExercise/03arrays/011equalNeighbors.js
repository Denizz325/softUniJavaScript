function countEqualPairs(matrix) {
    let count = 0;
    const areEqual = (a, b) => a === b;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j + 1 < matrix[i].length && areEqual(matrix[i][j], matrix[i][j + 1])) {
                count++;
            }
            if (i + 1 < matrix.length && areEqual(matrix[i][j], matrix[i + 1][j])) {
                count++;
            }
        }
    }

    return count;
}

