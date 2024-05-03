function solve(arr) {
    const catalogue = {};

    arr.forEach((el) => {
        let [prodName, price] = el.split(" : ");
        price = Number(price);
        const index = prodName[0];

        if (!catalogue[index]) {
            catalogue[index] = {};
        }; 
        catalogue[index][prodName] = price;
    });

    let initalSort = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (let key of initalSort) {
        let products = Object.entries(catalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);

        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`)
        });
    };
}

solve(['Appricot : 20.4', 'Banana : 2', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])