function solve(arr, step) {
    const result = [];
    let output = "";
    for (let i=0; i < arr.length; i+= step) {
        result.push(arr[i]);
    }

    for (let element of result) {
        output += element + "\n";
    }

    console.log(output)
}

solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2)