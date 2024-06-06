function displayArgumentInfo(...args) {
    const typeCounts = {};
    const typeValuePairs = [];

    // Process each argument
    args.forEach(arg => {
        let argType;

        if (typeof arg === 'function') {
            argType = 'function';
        } else {
            argType = typeof arg;
        }

        typeValuePairs.push({ type: argType, value: arg });

        if (!typeCounts[argType]) {
            typeCounts[argType] = 0;
        }
        typeCounts[argType] += 1;
    });

    // Print each argument type and value
    typeValuePairs.forEach(pair => {
        console.log(`${pair.type}: ${pair.value}`);
    });

    // Create an array of type counts and sort it
    const sortedTypeCounts = Object.entries(typeCounts)
        .sort(([, countA], [, countB]) => countB - countA);

    // Print the summary of counts
    sortedTypeCounts.forEach(([type, count]) => {
        console.log(`${type} = ${count}`);
    });
}

displayArgumentInfo('cat', 42, function () { console.log('Hello world!'); });