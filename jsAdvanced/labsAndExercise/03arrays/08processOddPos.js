


function solve(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            result.unshift(arr[i] * 2);
        }
    }

    formatedResult = result.join(" ");

    return formatedResult;
}

console.log(solve([3, 0, 10, 4, 7, 3]))