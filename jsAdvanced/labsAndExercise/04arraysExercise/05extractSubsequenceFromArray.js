function extractNonDecreasingSubset(arr) {
    let result = [];
    let currentMax = -Infinity;

    for (let num of arr) {
        if (num >= currentMax) {
            result.push(num);
            currentMax = num;
        }
    }

    return result;
}
