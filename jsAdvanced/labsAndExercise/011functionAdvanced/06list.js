function solve() {
    let result = [];

    function selectInput(input) {
        for (let str of input) {
            const [command, value] = str.split(' ')
            if (command == 'add') {
                result.push(value);
            } else if (command === 'remove') {
                index = result.indexOf(value);
                result.splice(index, 1);

            } else if (command === 'print') {
                console.log(result.join(','));
            }
        }
    }

    return selectInput;

}

myFunc = solve()
myFunc(['add stallone'])
myFunc(['remove stallone'])
myFunc(['add stallone'])
myFunc(['print'])



