function solve(arr) {
    const sortedArr = arr.sort((a, b) => a - b);

    const middle = Math.floor(sortedArr.length / 2)
    const result =  arr.slice(middle)

    return result
}