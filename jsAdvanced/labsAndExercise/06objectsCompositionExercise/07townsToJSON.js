function solve(arr) {
    const result = [];

    const splitted = arr[0].split("|");
    const town = splitted[1].trim();
    const latitude = splitted[2].trim();
    const longitute = splitted[3].trim();

    for (let i = 1; i <arr.length; i++) {
        const obj = {};

        const splittedEntry = arr[i].split("|");
        obj[town] = splittedEntry[1].trim();
        obj[latitude] = Number(Number(splittedEntry[2].trim()).toFixed(2));
        obj[longitute] = Number(Number(splittedEntry[3].trim()).toFixed(2));
        result.push(obj);
    }

    return JSON .stringify(result)

}