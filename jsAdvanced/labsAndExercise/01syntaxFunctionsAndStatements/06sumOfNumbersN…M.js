function sum(start, stop) {
    let num1 = Number(start);
    let num2 = Number(stop);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    return result;
}

sum(1, 5)