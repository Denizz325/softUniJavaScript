function calculateSums(arr){
        let sum = 0;
        for (let num of arr) {
            sum += num;
        }
        console.log(sum);
    
    
        let inverseSum = 0;
        for (let num of arr) {
            inverseSum += 1 / num;
        }
        console.log(inverseSum);
    

        let result = '';
        for (let num of arr) {
            result += num.toString();
        }
        console.log(result);


}

calculateSums([1,2,3])









// function calculateSums(arr){
//     function calculateSum(arr) {
//         let sum = 0;
//         for (let num of arr) {
//             sum += num;
//         }
//         return sum;
//     }
    
    
//     function calculateInverseSum(arr) {
//         let inverseSum = 0;
//         for (let num of arr) {
//             inverseSum += 1 / num;
//         }
//         return inverseSum;
//     }
    
    
//     function concatenateStrings(arr) {
//         let result = '';
//         for (let num of arr) {
//             result += num.toString();
//         }
//         return result;
//     }

//     console.log(calculateSum(arr));
//     console.log(calculateInverseSum(arr));
//     console.log(concatenateStrings(arr));

// }

// calculateSums([1,2,3])



