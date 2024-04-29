function solve(arr, numOfRotate) {
    for (let i = 0; i < numOfRotate; i++) {
        lastElementOut = arr.pop();
        arr.unshift(lastElementOut);
    }

    console.log(arr.join(' '));
}

solve(['1',

'2',

'3',

'4'],

2)