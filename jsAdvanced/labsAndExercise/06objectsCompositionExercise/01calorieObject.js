function solve(arr) {
    const result = {};

    for (let i = 1; i <arr.length; i+=2) {
        result[arr[i - 1]] = Number(arr[i])
    }

    console.log(result)
}

solve(['Yoghurt', '48', 'Rise', '138','Apple', '52'])