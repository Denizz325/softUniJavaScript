function largestNum(first, second, third){
    let result = 0

    if (first > second && first > third) {
        result = first;
    }

    else if (second > first && second > third) {
        result = second
    }

    else if (third > second && third > first) {
        result = third
    }

    console.log(`The largest number is ${result}.`)

}

largestNum(5, -3, 16)