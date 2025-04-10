const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

//jerc.10
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }

//converciones
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // usa dollar
    "GBP": 0.87,  // pound
};

// euros a dólares
const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
};

// dólares a yenes
const fromDollarToYen = (dollar) => {
    let euro = dollar / oneEuroIs.USD; // Convertimos a euros
    return euro * oneEuroIs.JPY;       // Luego a yenes
};

//  yenes a libras
const fromYenToPound = (yen) => {
    let euro = yen / oneEuroIs.JPY;   // Convertimos a euros
    return euro * oneEuroIs.GBP;      // Luego a libras
};

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };