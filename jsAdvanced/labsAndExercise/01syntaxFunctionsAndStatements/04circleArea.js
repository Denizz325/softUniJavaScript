function solve(param){
    let area = 0
    let paramType = typeof param

    if (paramType === 'number') {
        area = Math.pow(param, 2) * Math.PI;
        console.log(area.toFixed(2))

    }

    else {
        console.log(`We can not calculate the circle area, because we receive a ${paramType}.`)
    }

}

