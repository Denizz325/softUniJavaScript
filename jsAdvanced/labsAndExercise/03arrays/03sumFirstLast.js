function sum(str) {
    const first = Number(str.shift());
    const last = Number(str.pop());

    return first + last;

}