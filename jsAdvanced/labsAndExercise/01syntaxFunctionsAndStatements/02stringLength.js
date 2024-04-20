function stringLen(first, second, third){
    let sum_of_chars = first.length
    sum_of_chars += second.length
    sum_of_chars += third.length

    let average_len = Math.floor(sum_of_chars / 3)

    console.log(sum_of_chars)
    console.log(average_len)


}


stringLen('chocolate', 'ice cream', 'cake')