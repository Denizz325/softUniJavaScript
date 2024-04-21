function fruits(fruit, weightInGrams, pricePerKg) {
    let weightInKilograms = weightInGrams / 1000;
    let totalMoney = weightInKilograms * pricePerKg;

    console.log(`I need $${totalMoney.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

fruits('orange', 2500, 1.80)