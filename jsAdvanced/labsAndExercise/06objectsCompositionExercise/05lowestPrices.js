 function solve(arr) { 
    let catalog = {};

    arr.forEach((el) => {
        let [town, product, price] = el.split(" | ");
        price = Number(price);

        if (!catalog[product]) {
            catalog[product] = {};
        }
        catalog[product][town] = price;
    });

    for (const prod in catalog) {
        const sorted = Object.entries(catalog[prod]).sort((a, b) => a[1] - b[1]);

        console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }

}