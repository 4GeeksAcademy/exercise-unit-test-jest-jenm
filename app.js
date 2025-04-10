const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5,  // yen japonés
    "USD": 1.07,   // dólar 
    "GBP": 0.87    // libra 
};

// dólares a yenes
const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs.USD;   
    let yenes = euros * oneEuroIs.JPY;     
    return yenes;
};

// euros a dólares
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};


const fromYenToPound = (yenes) => {
    let euros = yenes / oneEuroIs.JPY;     
    let libras = euros * oneEuroIs.GBP;    
    return libras;
};


module.exports = {
    sum, 
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};