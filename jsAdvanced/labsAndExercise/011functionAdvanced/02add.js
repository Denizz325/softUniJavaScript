function solution(num) {
        let а  = 0
    return function(addNum) {
        return num + addNum;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(3));
