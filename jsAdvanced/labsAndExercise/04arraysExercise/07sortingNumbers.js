function solve(arr) {
    arr = arr.sort((a, b) => a - b);

    const result = [];
    const count = Math.floor(arr.length / 2);

    for (let i = 0; i < count; i++) {
        result.push(arr[i]);
        result.push(arr[arr.length - 1 - i]);
    }


    if (arr.length % 2 !== 0) {
        result.push(arr[count]);
    }

    return result;
}
