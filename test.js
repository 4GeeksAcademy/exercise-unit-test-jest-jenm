// Importar la función sum del archivo app.js
const { sum } = require('./app.js');
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
 


test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test("One dollar should be 146.26 yenes", () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2); 
});

test("100 yenes should be approximately 0.56 pounds", () => {
    expect(fromYenToPound(100)).toBeCloseTo(0.56, 2);
});

