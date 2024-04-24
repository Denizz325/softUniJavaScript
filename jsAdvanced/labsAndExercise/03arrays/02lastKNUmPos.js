function generateSequence(n, k) {

    let sequence = [1];


    for (let i = 1; i < n; i++) {
        let sum = 0;
 
        for (let j = Math.max(0, i - k); j < i; j++) {
            sum += sequence[j];
        }
        sequence.push(sum);
    }

    return sequence;
}

// Example usage:
const n = 10;
const k = 3;
const resultSequence = generateSequence(n, k);
console.log(resultSequence); 