function solve(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i+=2) {
 
            result.unshift(arr[i] * 2);
        
    }

    formatedResult = result.join(" ")

    return formatedResult;
}

console.log(solve([3, 0, 10, 4, 7, 3]))