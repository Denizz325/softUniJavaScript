function sum(n) {
    let sum = n;

    function add(n2) {
        sum += n2;
        return add;
    }
    add.toString = ()=> {
        sum;
    }

    return add
}