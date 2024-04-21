function checkSameDigitsAndSum(num) {
    let numAsString = num.toString(); // Convert the number to a string
    let firstDigit = numAsString[0]; // Get the first digit for comparison
    let sum = 0;

    // Check if all digits are the same
    let isSame = numAsString.split('').every(digit => digit === firstDigit);

    // Calculate the sum of all digits
    for (let digit of numAsString) {
        sum += parseInt(digit);
    }

    // Print the results
    console.log(isSame);
    console.log(sum);
}

// Example usage:
let number = 223; // Example number
checkSameDigitsAndSum(number);
