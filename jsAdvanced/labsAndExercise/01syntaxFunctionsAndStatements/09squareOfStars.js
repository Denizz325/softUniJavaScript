function draw(num) {
    let result = '';
    for (i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            result += '* ';
        }
        result += '\n';
    }

    console.log(result)
}

draw(5)


