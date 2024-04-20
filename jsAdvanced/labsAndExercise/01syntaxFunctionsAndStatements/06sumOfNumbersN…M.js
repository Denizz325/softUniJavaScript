function sum(start, stop) {
    let result = 0;

    for (let i = start; i <= stop; i++) {
        result += i;
    }

    return result;
}

sum(1, 5)